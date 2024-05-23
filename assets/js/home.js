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

window.addEventListener("hashchange", checkHashChanged, false);
