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

window.addEventListener("hashchange", checkHashChanged);
window.addEventListener("load", checkHashChanged);

const blockquotes = Array.prototype.slice.call(document.getElementsByTagName("blockquote"));

for (let blockquote of blockquotes) {
    const p = blockquote.getElementsByTagName("p")[0];
    const match = p.innerHTML.match(/\[!(?<type>.+)\]/)

    if (match) {
        const alert = document.createElement("div");
        alert.classList.add("alert", "alert-" + match.groups.type.toLowerCase());
        alert.innerHTML = blockquote.innerHTML.replace(match[0], "").trim();

        blockquote.parentElement.replaceChild(alert, blockquote);
    }
}
