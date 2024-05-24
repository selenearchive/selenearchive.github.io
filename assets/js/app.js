const embedContainer = document.getElementById("player-embed-container");
const player = document.getElementById("player");

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

function setClip(event, clypId) {
    embedContainer.innerHTML = '<iframe width="100%" height="265" src="https://clyp.it/' + clypId + '/widget" frameborder="0"></iframe>';
    player.classList.remove("player-hidden");

    event.preventDefault();
}

function closePlayer() {
    embedContainer.innerHTML = "";    
    player.classList.add("player-hidden");
}

window.addEventListener("hashchange", checkHashChanged, false);
window.addEventListener("load", checkHashChanged, false);

