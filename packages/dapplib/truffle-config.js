require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gesture hill fresh skull drift renew stick arrow heavy another army giggle'; 
let testAccounts = [
"0x47830626f4bf428afc345c51f4b60a52778c8b86e421acd4ddb0978e2fa11a19",
"0xd189dbdf0074acb37fcd239dab0765bd4b25881caddfcb568985f65a55058b2d",
"0x7e9de3dda2d57d0c2238863f8464971a443c7de2a6818d472a43f19fbd2db5af",
"0x97487bd217f62e9cdd60d782a9da2d265fef8e73d5466fe8017f46e7f7af1508",
"0x7ec273ad644b111ab5e7a6eba25d8fe8d7e77e2004de1612763bdedf4dff72d5",
"0x587da86b9c3fa4c72d6de3c705a9887877699d403579ad3fc6c8cbac692f6957",
"0x73657add6a57d6dba58791b72abaf52227cea288f09ded4136953b5cbe1a1a21",
"0x186b1f675f7e1f61fb03a9b90cec0881f30329ebf50090a75ac954c1b3e33ff1",
"0xa5aca6a5924aef4bae54b29ce68ffd34571d98b201a0114c5ac22ccf762efddb",
"0xe52a1dd74223020e844b345b3cdb42708fa88306dafe4974ffc8171f6d32a9e9"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

