import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Wallet} from '../../../wallet/src';
import {Store} from '@ngrx/store';
import {AppState} from './reducers/app.state';
import * as walletAction from './actions/wallet.action';
import * as quoteAction from './actions/quote.action';
import {BtcWalletModel} from './models/wallets/btc-wallet.model';
import {EthWalletModel} from './models/wallets/eth-wallet.model';
import {ShapeshiftStorage} from './common/shapeshift-storage';
import {MoscaService} from './services/mosca.service';
import {environment} from '../environments/environment';

import {RouterLink} from '@angular/router';
// import * as mqtt from 'mqtt';


@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss',
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public altcoinLogo = 'assets/icon/altcoin-icon.png';
  private menuOpened: boolean = false;

  constructor(private store: Store<AppState>, private moscaService: MoscaService) {
    let codes;
    if (environment.production) {
      codes = Wallet.code;
    } else {
      codes = {
        phrase: 'away stomach fire police satoshi wire entire awake dilemma average town napkin'
      };
    }

    console.log(codes);
    this.generateBtcWallet(codes);
    this.generateEthWallet(codes);

    this.store.dispatch(new quoteAction.LoadQuoteAction());
  }

  public ngOnInit() {

  }

  private generateBtcWallet(codes: any) {
    const xprivKey = ShapeshiftStorage.get('xprivkey');
    if (!xprivKey) {
      const btc = new Wallet.Bitcoin.BtcWallet(codes.phrase);
      btc.generateHDPrivateKey('');

      const btcWallet = {
        xprivkey: btc.hdPrivateKey.xprivkey,
        wif: btc.hdPrivateKey.privateKey.toWIF(),
      } as BtcWalletModel;

      this.store.dispatch(new walletAction.SetBtcWalletAction(btcWallet));
    }
  }

  private generateEthWallet(codes: any) {
    const ethprivkey = ShapeshiftStorage.get('ethprivkey');
    if (!ethprivkey) {
      const btc = new Wallet.Bitcoin.BtcWallet(codes.phrase);
      btc.generateHDPrivateKey('');
      const eth = new Wallet.Ethereum.EthWallet();
      const privateKey = btc.hdPrivateKey.xprivkey.toString();
      const ethWallet = {
        privateKey: privateKey,
        keystore: eth.recover(privateKey, '')
      } as EthWalletModel;

      this.store.dispatch(new walletAction.SetEthWalletAction(ethWallet));
    }
  }

  private toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }

  private closeMenu() {
    this.menuOpened = false;
  }
}
