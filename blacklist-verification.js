const blacklist = [
  '70news.wordpress.com',
  'abcnews.com.co',
  'americannews.com',
  'bigamericannews.com',
  'bostonleader.com',
  'civictribune.com',
  'christwire.org',
  'clickhole.com',
  'creambmp.com',
  'dailycurrant.com',
  'derfmagazine.com',
  'drudgereport.com.co',
  'duhprogressive.com',
  'empireherald.com',
  'enduringvision.com',
  'huzlers.com',
  'infowars.com',
  'mediamass.net',
  'nationalreport.net',
  'newsbiscuit.com',
  'newsmutiny.com',
  'now8news.com',
  'politicalo.com',
  'politicops.com',
  'politicalears.com',
  'private-eye.co.uk',
  'prntly.com',
  'realnewsrightnow.com',
  'rilenews.com',
  'thebostontribune.com',
  'thedcgazette.com',
  'thenewsnerd.com',
  'thepoliticalinsider.com',
  'theuspatriot.com',
  'witscience.org',
  'worldpoliticus.com'
];

chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
  const url = tabs[0].url;

  if (blacklist.some(blacksite => url.includes(blacksite))) {
  	document.getElementById('warning').textContent = 'Site is known to be FAKE!';
  } else {
  	document.getElementById('warning').textContent = 'You\'re on a legit site! Woo!';
  }
});


