$(document).ready(function() {
	function generateElement(tag, innerHTML){
		var element = document.createElement(tag);
		if(innerHTML){
			element.textContent = innerHTML;
		}
		return element;
	}

	function prepareHTMLFragment(newsitem){
		//Append a div with classname newsitem that contains an h1 with the title and a p containing the body
		
		//Create a blank document fragment that is separate from the DOM
		var documentFragment = document.createDocumentFragment();

		//Create the newsitem div and add bootstrap styling
		var newsitemDiv = generateElement("div");
		$(newsitemDiv).addClass("newsitem");
		$(newsitemDiv).addClass("panel panel-default");
		//   Add some flair
		$(newsitemDiv).on("mouseenter", function(event){
			$(this).removeClass("panel-default");
			$(this).addClass("panel-primary");
		});
		$(newsitemDiv).on("mouseleave", function(event){
			$(this).addClass("panel-default");
			$(this).removeClass("panel-primary");
		});

		//Create the title element and add bootstrap styling
		var titleElementDiv = generateElement("div");
		var titleElement = generateElement("h1", newsitem.title);
		$(titleElementDiv).addClass("panel-heading");
		$(titleElement).addClass("panel-title");
		titleElementDiv.appendChild(titleElement);
		
		//Create the body element and add bootstrap styling
		var bodyElement = generateElement("p", newsitem.body);
		$(bodyElement).addClass("panel-body text-left");

		newsitemDiv.appendChild(titleElementDiv);
		newsitemDiv.appendChild(bodyElement);
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