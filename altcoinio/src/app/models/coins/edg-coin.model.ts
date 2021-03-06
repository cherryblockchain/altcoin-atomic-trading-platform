import {Coins} from "./coins.enum";
import {Observable} from "rxjs/Observable";
import {WalletRecord} from "../../reducers/balance.reducer";
import {TOKENS} from "altcoinio-wallet";
import {Erc20CoinModel} from "./erc20-coin.model";

export class EdgCoinModel extends Erc20CoinModel {
  token: TOKENS = TOKENS.EDGELESS;
  readonly type: Coins = Coins.EDG;
  readonly derive: string = "ETH";
  readonly name: string = Coins[Coins.EDG].toString();
  readonly fullName: string = "Edgeless";
  readonly icon: string = "assets/icon/edg-icon.png";
  amount;
  faucetLoading: boolean = false;
  $balanceUSD: Observable<number>;
  walletRecord: WalletRecord;

  constructor() {
    super(EdgCoinModel);
  }

  transferTo(to: string, value: number): Observable<any> {
    throw new Error("When implemented remove this");
  }

}
