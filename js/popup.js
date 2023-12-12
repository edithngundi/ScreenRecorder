document.addEventListener('DOMContentLoaded', ()=>{
    // get the buttons
    const startButton = document.querySelector('button#start_video')
    const stopButton = document.querySelector('button#stop_video')

    // add event listeners
    startButton.addEventListener('click', ()=>{
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: 'request_recording'}, function(response){
                if(!chrome.runtime.lastError){
                    console.log(response)
                } else{
                    console.log(chrome.runtime.lastError, "error line 14")
                }
            })
        })
    })

    stopButton.addEventListener('click', ()=>{
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: 'stop_recording'}, function(response){
                if(!chrome.runtime.lastError){
                    console.log(response)
                } else{
                    console.log(chrome.runtime.lastError, "error line 27")
                }
            })
        })
    })
})