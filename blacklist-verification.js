import blacklist from './blacklist';

// show current url in extension window
chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
    const url = tabs[0].url;
    let warning = document.getElementById('warning');

    blacklist.forEach(site => {
      if (url.includes(site)) {
        warning.innerHTML = url;
      } else {
        warning.innerHTML = "You're on a legit site! Woo!";
      }
    });

});


