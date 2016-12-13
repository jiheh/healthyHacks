let articleURL = 'http://www.burrardstreetjournal.com/obama-refusing-to-leave-if-trump-elected/';

document.getElementById('result').textContent = "trying to do something";

fetch('https://graph.facebook.com/?id=' + articleURL)
.then(article => article.json())
.then(res => document.getElementById('result').textContent = res.share['share_count'])
.catch(alert);