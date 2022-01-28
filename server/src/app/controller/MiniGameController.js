const MiniGame = require('../models/MiniGame');
const Web3 = require('web3');
class MiniGameController {
    index(req, res, next) {
        const abi = [
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "_wallet",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "_id",
                        "type": "string"
                    }
                ],
                "name": "SMpushData",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "arrPlayer",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "_ID",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "_WALLET",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "_id",
                        "type": "string"
                    }
                ],
                "name": "register",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ];
        const addressSM = "0xBB7d6e510FF40F6DbFe790080015159435Cd25A5";
        const provider = new Web3.providers.WebsocketProvider('wss://rinkeby.infura.io/ws/v3/9b35175a538e4d0392b4f42a15dbfbb3');
        const web3_infura = new Web3(provider);
        const contractInfura = new web3_infura.eth.Contract(abi, addressSM);
        contractInfura.events.SMpushData({ filter: {}, fromBlock: 'latest' }, (err, event) => {
            if (err) {
                console.log(err);
            } else {
                console.log(event);
            }
        });
        res.render('minigame');
    }
    send(req, res, next) {
        if (req && req.body && req.body.name) {
            let player = new MiniGame({
                name: req.body.name,
                wallet: "",
                transfer: false
            });
            player.save()
                .then(data => {
                    console.log(data);
                    res.json({ result: 1, data });
                })
                .catch();
        }
    }
}
module.exports = new MiniGameController;