const embedContainer = document.getElementById("player-embed-container");
const player = document.getElementById("player");
const playerCloseBtn = document.getElementById("player-closebtn")
const host = "clyp.it"

function checkHashChanged() {
    let foundElement = null;

    for (let topic of document.getElementsByClassName("topic")) {
        if (topic.getAttribute("id") === window.location.hash.substring(1)) {
            topic.setAttribute("open", "");
            foundElement = topic;
        } else {
            topic.removeAttribute("open");
        }
    }

    // Scroll the topic into view *after* the page has settled.
    if (foundElement) {
        foundElement.scrollIntoView();
    }
}

function setClip(event, id) {
    embedContainer.innerHTML = '<iframe width="100%" height="265" src="https://clyp.it/' + id + '/widget" frameborder="0"></iframe>';
    player.classList.remove("player-hidden");
    event.preventDefault();
}

function closePlayer() {
    embedContainer.innerHTML = "";    
    player.classList.add("player-hidden");
}

window.addEventListener("hashchange", checkHashChanged, false);
window.addEventListener("load", checkHashChanged, false);
playerCloseBtn.addEventListener("click", closePlayer);

for (const link of document.getElementsByTagName("a")) {
    if (link.host === host) {
        let id = link.pathname.replace('/', '');
        link.addEventListener("click", (event) => {setClip(event, id)});
    }
}

