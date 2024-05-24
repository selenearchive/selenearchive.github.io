const embedContainer = document.getElementById("player-embed-container");
const player = document.getElementById("player");
const playerCloseBtn = document.getElementById("player-closebtn");
const host = "clyp.it";

function setClip(event, id) {
    embedContainer.innerHTML = '<iframe width="100%" height="265" src="https://clyp.it/' + id + '/widget" frameborder="0"></iframe>';
    player.classList.remove("player-hidden");
    document.body.classList.add("body-player-padding");
    event.preventDefault();
}

function closePlayer() {
    embedContainer.innerHTML = "";    
    player.classList.add("player-hidden");
    document.body.classList.remove("body-player-padding");
}

playerCloseBtn.addEventListener("click", closePlayer);

for (const link of document.getElementsByTagName("a")) {
    console.log(link.host, host);
    if (link.host === host) {
        let id = link.pathname.replace('/', '');
        link.addEventListener("click", (event) => {setClip(event, id)});
        link.classList.add('clip');

        link.innerHTML = "<button>" + link.innerHTML + "</button>"
    }
}
