chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
  const articleURL = tabs[0].url;

	fetch('https://graph.facebook.com/?id=' + articleURL)
	.then(article => article.json())
	.then(res => {
		if (res.share['share_count'] > 300000) {
			document.getElementById('result').textContent = 'Article has been spreading suspiciously like wildfire!'
		} else {
			document.getElementById('result').textContent = 'Article seems less suspicious...'
		}
	})
	.catch(alert);
});