var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById("demo").innerHTML = jsonPretty;
    }
};
xmlhttp.open("GET", "https://api.blockcypher.com/v1/btc/main", true);
xmlhttp.send();

function homePageLoading() {
    url = 'http://bitcoin.mubiz.com/info';
    elementID = 'info';
    fonctionRequeteApi(url, elementID);
    url = 'http://bitcoin.mubiz.com/blockchaininfo';
    elementID = 'info';
    fonctionRequeteApi(url, elementID);
    url = 'http://bitcoin.mubiz.com/peerinfo';
    elementID = 'info';
    fonctionRequeteApi(url, elementID);
    url = 'http://bitcoin.mubiz.com/mininginfo';
    elementID = 'info';
    fonctionRequeteApi(url, elementID);
}

function webservice(url,id)
{
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById("id").innerHTML = jsonPretty;
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
}
