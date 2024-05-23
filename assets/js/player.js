function setClip(idClyp) {
    const embedContainer = document.getElementById("player-embed-container");
    embedContainer.innerHTML = '<iframe width="100%" height="265" src="https://clyp.it/' + idClyp + '/widget" frameborder="0"></iframe>';
    
    document.getElementById("player").classList.remove("player-hidden");

    // Return false to block browser behaviour.
    return false;
}

function closePlayer() {    
    document.getElementById("player").classList.add("player-hidden");
}