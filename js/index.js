const data = document.querySelector("#file");

function share () {
    if ("share" in window.navigator && window.navigator.canShare(data)) {
        window.navigator.share(data)
    }
}