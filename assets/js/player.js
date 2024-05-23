const embedContainer = document.getElementById("player-embed-container");
const player = document.getElementById("player");

function setClip(event, clypId) {
    embedContainer.innerHTML = '<iframe width="100%" height="265" src="https://clyp.it/' + clypId + '/widget" frameborder="0"></iframe>';
    player.classList.remove("player-hidden");

    event.preventDefault();
}

function closePlayer() {
    embedContainer.innerHTML = "";    
    player.classList.add("player-hidden");
}
