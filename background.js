//chrome object
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab)=>{
    if(changeInfo.status === 'complete' && /^http/.test(tab.url)){
        chrome.scripting.executeScript({
            target: {tabId},
            files: ['./content.js']
        }).then(()=>{
            console.log('Content script is injected!');
        }).catch(err=> console.log(err, "Error in background script"));
    }
});