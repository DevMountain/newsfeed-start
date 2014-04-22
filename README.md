newsfeed-start
==============

Simple project start using Parse.com as a newsfeed source

##Objectives
Some of the work has already been done, and this project is not meant to take more than a day to complete. 
You'll be using your Parse.com API to retrieve (GET) stored newsfeed article.

###Step 1: Create some data
You're going to use Postman to create some data in your API.
* (if you already haven't) Create a parse.com free trial account
* Create a new app
  * Use whatever name you'd like for your app name, you could call it "newsfeed"
* Go to the dashboard, select your app, click the "Settings" button, then click on the "Application keys" tab on the left 
* Make note of your Application ID your REST API Key (copy to a text file or leave the window open for later)
* Open Postman, create a new POST request to the url `https://api.parse.com/1/classes/NewsItem` (note: `NewsItem`) is 
arbitrary, you can call the class whatever you'd like.
  * You need to set two headers in order to correctly authenticate to your parse.com API:
    * X-Parse-Application-Id: <your-application-id>
    * X-Parse-REST-API-Key: <your-rest-api-key>
  * Also, set the "raw" request body for your POST to be of type JSON and put in a news item JSON object, for example:

```javascript
{
  "title": "Some News Title",
  "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo massa magna, ut venenatis metus pulvinar ac. Maecenas condimentum, turpis vel tempus lacinia, nulla arcu mollis elit, eu porta tellus sem sit amet lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla vitae egestas mi. Vivamus a pulvinar neque. Donec at placerat ipsum. Maecenas faucibus orci at dapibus ultrices. Nam aliquet gravida consectetur. Nulla ornare dictum mollis. Nulla eu elementum libero. Etiam at enim sapien."
}
```
Again, the values are arbitrary. You could have chosen different values for "title" or "body"

  * Hit the Send button. If all goes well, you should see a JSON response that looks somewhat like this:

```javascript
{
    "createdAt": "2013-10-09T16:59:11.167Z",
    "objectId": "jD2u3dcOho"
}
```
* Create as many news articles as you'd like

###Step 2: Retrieve your data
You're now going to pull down those news articles you POSTed a moment ago using jQuery and insert them into the DOM.

In script.js, you're going to want to perform an AJAX request to get your newsfeed data. Use the [$.ajax method](http://api.jquery.com/jquery.ajax/), because we need to set the authentication headers and 
$.get doesn't allow us to do that. Review the documentation to be sure you use the $.ajax method correctly.

* Create a $.ajax request, setting the request headers inside of the `beforeSend` callback to the same heading/values you 
used in Postman. 
* Use the same url you used in Postman
* Use a .done promise callback to populate your news items using jQuery
  * Append a div with classname `newsitem` that contains an h1 with the title and a p containing the body

Your final ajax call should look something like this:

```javascript
$.ajax('url-goes-here', 
  {
    beforeSend: function(request) {
      request.setRequestHeader('X-Parse-Application-Id', 'blahblah');
			request.setRequestHeader('X-Parse-REST-API-Key', 'blahblah');
		}
	}
).done(function(response) {
  //populate list here with jQuery
});
```

###Hints:
####Make sure you get the right app id and REST API key (don't get confused with the Javascript key)
####If you're having a hard time populating the news items, use `console.log` to make sure you're getting data.
####Also, use `console.log` to check the structure of the data. Make sure it looks like you expect it to look.

