const playerContainer = document.getElementById("player-container");
const player = document.getElementById("player");
const playerCloseBtn = document.getElementById("player-closebtn");
const host = "clyp.it";

function setClip(event, id) {
    player.src = "https://clyp.it/" + id + "/widget";
    playerContainer.style.display = "flex";
    event.preventDefault();
}

function closePlayer() {
    player.src = "about:blank";
    playerContainer.style.display = "none";
}

playerCloseBtn.addEventListener("click", closePlayer);

for (const link of document.getElementsByTagName("a")) {
    console.log(link.host, host);
    if (link.host === host) {
        let id = link.pathname.replace('/', '');
        link.addEventListener("click", (event) => {setClip(event, id)});
        link.classList.add('clip');
    }
}
