require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stock recipe shift pudding include knife army general'; 
let testAccounts = [
"0x3ced1bfc816ad341497d19f62d32a393d5eda740af4b63b9c88a65918efbb44f",
"0x8a7213a931bfac5d8eac6fd6ff7e9175cb166088032f3fc0ba34d11aad6c2391",
"0xe2bdbb469a0991432340f96ca942a078d6b053ea507b4f7752d0ddeff5044cf7",
"0x3c6b70ea937cf57dc0adbf93f811c96eaf01ad165f19c85ebad398aaccd14c26",
"0x8bae9b647a1d7c0527074f37a9ed726d55f9a79abf07796415c2cc946e961919",
"0x5731ea0b5bcd29ad4232bd9c2ee5d02e45f25132dd41718f8b1103237fb7f07e",
"0x2e9d1c342fc5e278366f67555aebadba5caf44f81d2683902fc2c0b86c10b6ef",
"0x0b2be21d368e926d6c496b0f29ba123152dcf741a532eebcef817f4af66d92cb",
"0x7056d876d63060d9c1c6cd5dfd1f82c452eb67fe81fcabe95c04b7b243253833",
"0x3a89246b61021aae5eb01c6e55ce6aeafe3b40b38b0122e966bdbf8a57e06450"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

