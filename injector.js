(async function(){

  const response = await fetch(chrome.runtime.getURL("brands.json"))
  const jsonObj = await response.json() 
  
  warningImgUrl = chrome.runtime.getURL("boycot.jpeg");

  injectScript('helpers.js')
  setTimeout(() => {
    let currURL = location.href;
    let script;
    if (currURL.includes("jumia.com")){
      script=injectScript('jumia-blocker.js')
    }
    else if (currURL.includes("souq.com")){
      script=injectScript('souq-blocker.js')
    }
    else if (currURL.includes("amazon")){
      script=injectScript('amazon-blocker.js')
    }
    else if (currURL.includes("ebay")){
      script=injectScript('ebay-blocker.js')
    }
    if(script) script.onload = function() {
      this.remove();  
      var event = new CustomEvent('SendJsonUrl', {
        detail: {jsonObj,warningImgUrl}
      })
      document.dispatchEvent(event);
    };
  }, .1);
})()

function injectScript(scriptName){
  var s = document.createElement('script');  
  s.src = chrome.runtime.getURL(scriptName);
  (document.head || document.documentElement).appendChild(s);
  return s
}
