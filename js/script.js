let btc = document.getElementById("bitcoin");
let eth = document.getElementById("ethereum");
let sol = document.getElementById("solana");

var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana&vs_currencies=brl",
    "method": "GET",
    "headers": {}
}

$.ajax(settings).done(function (response){
    btc.innerHTML = response.bitcoin.brl;
    eth.innerHTML = response.ethereum.brl;
    sol.innerHTML = response.solana.brl;
});
