// ==UserScript==
// @name youtube.com
// @match https://www.youtube.com/*
// @description
// @version 0
// ==/UserScript==

expandPlaylists();

function expandPlaylists() {
	let sidebar = document.getElementById("guide");
	let observer = new MutationObserver((mutations) => {
		for (let mutation of mutations) {
			if (mutation.target.nodeName === "YTD-GUIDE-COLLAPSIBLE-ENTRY-RENDERER") {
				let showMore = mutation.target.querySelector("a");
				if (showMore) {
					showMore.click();
					return observer.disconnect();
				}
			}
		}
	});
	observer.observe(sidebar, { childList: true, subtree: true });
}
