let oldHash = "";

function checkHashChanged() {
    if (window.location.hash != oldHash) {
        console.log("Hash changed!");
        oldHash = window.location.hash;

        let foundElement = null;

        for (let topic of document.getElementsByClassName("topic")) {
            if (topic.getAttribute("id") === oldHash.substring(1)) {
                topic.setAttribute("open", "");
                foundElement = topic;
            } else {
                topic.removeAttribute("open");
            }
        }

        if (foundElement) {
            foundElement.scrollIntoView();
        }
    }
}

setInterval(checkHashChanged, 100);
