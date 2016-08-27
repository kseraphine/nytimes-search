var key = "9d4a8986921972b65754ea0809d47c84:12:74623931";

var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + key;

var querylist = "";



function run(numArticles, queryURL){
	$.ajax({url: queryURL, method: "GET"})
		.done(function(data) {

			$(div).empty();

			for (var i = 0; i < numArticles; i++) {
				
			}
		}
		








}