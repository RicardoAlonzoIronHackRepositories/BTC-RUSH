var btcRushGame;
var miner1;
var miner2;

function start() {
    miner1.mine();
    miner2.mine();
}

function stop() {
    miner1.stopMining();
    miner2.stopMining();
}

function updateDomOwnedCoins() {
    $('#palyer-1-ownedCoins').html(Math.round(miner1.ownedCoins * 100) / 100);
    $('#palyer-2-ownedCoins').html(Math.round(miner2.ownedCoins * 100) / 100);
}

//function to update Player names once prompted in the DOM
function updateDomPlayerNames (p1, p2) {
    $('#player-1-id').html(p1);
    $('#player-2-id').html(p2);
}

//Updates the BTC/USD price in the DOM
function updateDomBtcPrice () {
    $('.btc-usd-price').html(btcRushGame.btc_dollar+'$')
}

//Updates the Blocks Mined counter in the DOM
function updateDomBlocksMined() {
    $('.blocks-num').html(btcRushGame.blocksMined)
}

//Updates the total Coins available in the DOM
function updateDomTotalCoins() {
    updateDomPlayerNames(miner1.name, miner2.name); //shouldnt go here
    $('.coin-num').html(btcRushGame.totalCoins)
}

//creates new game and initializes the btc/usd speculation function
//and the blocks counter
function startGame() {
    btcRushGame = new BtcRushGame();
    btcRushGame.speculation();
    btcRushGame.increaseBlocksMined();
}

//function to make specific keys call specific functions
//basically the controls for player 1
var miner1Controls = function (e) {
    var key = e.keyCode;
        if (key === keyA) {
            miner1.buyRig()
        } else if (key === keyS) {
            miner1.gamble()
        }
}

//function to make specific keys call specific functions
//basically the controls for player 2
var miner2Controls = function (e) {
    var key = e.keyCode;
        if (key === keyL) {
            miner2.buyRig()
        } else if (key === keyK) {
            miner2.gamble()
        }
}

//function that runs when the page loads.
var init = function () {
    startGame();
    var p1Name = prompt("Player 1 Name");
    var p2Name = prompt("Player 2 Name");
    miner1 = new Miner(p1Name);
    miner2 = new Miner(p2Name);
    document.addEventListener("keydown", function(e){ 
        miner1Controls(e);
        miner2Controls(e);
        //start();
    });
//add event listeners to the buttons 
//and make them call functions outside 
//this one
}

$(init());

//ASCII LEYEND
var keyA = 65;
var keyS = 83;
var keyK = 75;
var keyL = 76;