(async function(){

  const response = await fetch(chrome.runtime.getURL("brands.json"))
  const jsonObj = await response.json() 
  
  warningImgUrl = chrome.runtime.getURL("images/boycot.jpeg");
  boycottIsraelUrl = chrome.runtime.getURL("images/boycottIsrael.png");

  injectScript('helpers.js')
  setTimeout(() => {
    let currURL = location.href;
    let script; 
    let siteName;
    if (currURL.includes("jumia.com")){
      [script,siteName]=injectScript('jumia-blocker.js')
    }
    else if (currURL.includes("souq.com")){
      [script,siteName]=injectScript('souq-blocker.js')
    }
    else if (currURL.includes("amazon")){
      [script,siteName]=injectScript('amazon-blocker.js')
    }
    else if (currURL.includes("ebay")){
      [script,siteName]=injectScript('ebay-blocker.js')
    }
    if(script) script.onload = function() {
      this.remove();  
      let event = new CustomEvent(`SendJsonUrl-${siteName}`, {
        detail: {jsonObj,warningImgUrl,boycottIsraelUrl}
      })

      document.dispatchEvent(event);
    };
  }, .1);
})()

function injectScript(scriptName){

  let siteName = scriptName.split("-")[0];
  let scrpt = document.createElement('script');  
  scrpt.src = chrome.runtime.getURL("blockers/"+scriptName);
  (document.head || document.documentElement).appendChild(scrpt);


  return [scrpt,siteName]
}
