$(document).ready(function() {
	// Append a div with classname newsitem that contains an h1 with the title and a p containing the body
	function prepareHTMLFragment(newsitem){
		var documentFragment = document.createDocumentFragment();
		var newsitemDiv = document.createElement("div");
		$(newsitemDiv).addClass("newsitem");
		$(newsitemDiv).html("<h1>" + newsitem.title + "</h1>" + "<p>" + newsitem.body + "</p>");
		return documentFragment.appendChild(newsitemDiv);
	}

	function renderHTML(documentFragment){
		//Append newsitem to newsfeed
		$('.newsfeed').append(documentFragment);
	}

	function createNewsItem(newsitem){
		//prepareHTMLFragment
		var docFrag = prepareHTMLFragment(newsitem);
		//renderHTML
		renderHTML(docFrag);
	}
	$.ajax('https://api.parse.com/1/classes/NewsItem', 
		{
			beforeSend: function(request) {
				request.setRequestHeader('X-Parse-Application-Id', 'Aix8zbtQu2EYa7RUZrQxTKUAtkecbGV63n4Qf9Us');
				request.setRequestHeader('X-Parse-REST-API-Key', 'uwm1kCwkeeOZLx10S69EGF90ADCdxy2UxKeJYtZ0');
			}
		}
	).done(function(response) {
	  //populate list here with jQuery
	  $.each(response.results, function(index, newsitem) {
	  		createNewsItem(newsitem);
		});
	});
});