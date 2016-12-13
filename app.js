let articleURL = 'http://www.burrardstreetjournal.com/obama-refusing-to-leave-if-trump-elected/';

document.getElementById('result').textContent = "trying to do something";

fetch('https://graph.facebook.com/?id=' + articleURL)
.then(article => JSON.parse(article).share['share_count'])
.then(result => {
	alert(result)
	document.getElementById('result').textContent = result;
	})
.catch(alert)