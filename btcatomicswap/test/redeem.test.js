import {redeem} from '../src/redeem';
import {initiate} from '../src/initiate';
import {testData3 as testData} from './test-transactions';


const assert = require('assert');

describe('#reedem()', function () {
  this.timeout(15000);
  it.only('should create redeemTx', async () => {
    // const testData = await initiate("moPkgMW7QkDpH8iR5nuDuNB6K7UWFWTtXq", "0.001");
    console.log(testData);
    redeem(testData.contract, testData.contractTx, testData.secret)

  });
});
