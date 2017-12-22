
const dogecoinAPI = "https://api.coinmarketcap.com/v1/ticker/dogecoin/?convert=EUR"

function getCryotoInfo(crypto){
	var name = "";
	var valueEUR = "";
	var percentChange = [];
	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function(data) {

		if(httpRequest.readyState == 4){
			return JSON.parse(httpRequest.responseText)	
				
		}
	};

	httpRequest.open("GET", crypto);
	httpRequest.send()
	console.log(httpRequest.onreadystatechange())
};

getCryotoInfo(dogecoinAPI);
//cryptoArray.push(getCryotoInfo(dogecoinAPI));

