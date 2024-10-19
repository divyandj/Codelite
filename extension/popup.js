const btn = document.getElementById("transcript");
btn.addEventListener("click",function() {
    btn.disabled = true;
    console.log("btn clicked");
    btn.innerHTML = "Transcripting...";
    chrome.tabs.query({currentWindow: true,active: true}, function(tabs){
        var url = tabs[0].url;
        console.log(url);
        var xhr = new XMLHttpRequest();
        xhr.open('GET', "http://127.0.0.1:5000/subtitle?url=" + url, true);
        xhr.onload = function() {
            var text = xhr.responseText;
            const p = document.getElementById("output");
            console.log();
            console.log("hello");
            console.log(text);
            p.innerHTML = text;
            btn.disabled = false;
            btn.innerHTML = "Transcribe";
        }
        xhr.send();
    });
});