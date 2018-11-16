import Vue from 'vue';
import App from './App.vue';

// tslint:disable-next-line:max-line-length
// import * as Nimiq from './nimiq';  => Nimiq will equal to: Module {__esModule: true, Symbol(Symbol.toStringTag): "Module"}
// import Nimiq from './nimiq';       => Nimiq will  equal to: undefined
// import { Nimiq } from './nimiq';   => Nimiq will  equal to: undefined

import * as Nimiq from './nimiq';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

// tslint:disable-next-line:no-console
console.log('Nimiq module is available: ', Nimiq);

Nimiq.init(
  async () => {

    // avoid error: 'GenesisConfig already initialized'
    if (Nimiq.GenesisConfig._config) {
      // tslint:disable-next-line:no-console
      console.log('Nimiq GenesisConfig is already loaded, using that one...');
    } else {
      // tslint:disable-next-line:no-console
      console.log('Loading Nimiq GenesisConfig...');
      Nimiq.GenesisConfig.main();
    }

    this.nimInstance.consensus = await Nimiq.Consensus.nano();

    this.nimInstance.consensus.on('established', async () => {
      this.nimConsensusEstablished = true;
      // tslint:disable-next-line:no-console
      console.log('Nimiq Consensus established 🎉');
    });

    this.nimInstance.blockchain = this.nimInstance.consensus.blockchain;
    this.nimInstance.mempool = this.nimInstance.consensus.mempool;
    this.nimInstance.network = this.nimInstance.consensus.network;
    this.nimInstance.accounts = this.nimInstance.blockchain.accounts;

    this.nimInstance.network.connect();
  },
  (code) => {
    switch (code) {
      case Nimiq.ERR_WAIT:
        alert('Another Nimiq instance is already running');
        break;
      case Nimiq.ERR_UNSUPPORTED:
        alert('Browser not supported');
        break;
      case Nimiq.Wallet.ERR_INVALID_WALLET_SEED:
        alert('Invalid wallet seed');
        break;
      default:
        alert('Nimiq initialization error');
        break;
    }
  },
);
