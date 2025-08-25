$(window).on("load", function () {
	$(".loader").fadeOut(100);
	if (typeof $("footer") !== "undefined") {
		document.querySelector("footer").style.opacity = "100%";
	}
});

$(window).ready(function () {
	$(".background").fadeIn(1000);
});

const main = document.querySelector("main");
const container = document.querySelector(".background-container");

window.onload = async () => {
	document.querySelector("[data-video]").play();
	document.onload = document.querySelector(".mask").style.opacity = "0%";
	document.onload = document.querySelector("main").style.opacity = "100%";
};

const animated = document.querySelectorAll("[data-animated]");
animated.forEach((e) => {
	e.addEventListener("mouseleave", async () => {
		const lines = e.children[0].children;
		lines[0].style.transitionDelay = "600ms";
		lines[1].style.transitionDelay = "400ms";
		lines[2].style.transitionDelay = "200ms";
		lines[3].style.transitionDelay = "0ms";
		await new Promise((r) => setTimeout(r, 600));
		for (const line of lines) {
			line.style.transitionDelay = "";
		}
	});
});

const links = document.querySelectorAll("a");
links.forEach((e) => {
	e.addEventListener("click", async (event) => {
		const tgt = event.target.closest("a").target;
		const href = event.target.closest("a").href;
		if (href.includes("#")) return false;
		if (tgt.includes("_blank")) {
			e.preventDefault();
			return window.open(href, "_blank");
		}
		event.preventDefault();
		document.querySelector(".mask").style.opacity = "100%";
		if (typeof $("footer") !== "undefined") {
			document.querySelector("footer").style.opacity = "0%";
		}
		main.style.opacity = "0%";
		window.location = href;
	});
});

document
	.querySelector('[alt="Github logo"]')
	.addEventListener("click", (evt) => {
		window.open(evt.target.dataset.linkTo, "_blank");
	});

if (document.querySelector(".resume")) {
	document.querySelector(".resume").addEventListener("click", () => {
		window.open("./Resources/Joaquin Paz Resume.pdf", "_blank");
	});
}

if (window.location.href.includes("projects")) {
	const ALERT_TAG = "alert";

	const hasShownAlert = localStorage.getItem(ALERT_TAG);

	if (!hasShownAlert) {
		window.alert(
			"Hi! Apologies for this unexpected prompt.\n\n I haven't had time to update the projects in over two years (too much work hang ups) but everything here is still relevant. I would suggest seeing my Resume and Skills section, both of which I have kept up to date. Regarding github contributions, most are private to the company repositories.\n\nI have made public what I can, you can still see some bug fixing I did in public repos, like Google's AI mediapipe repository, feel free to reach out regarding any of my recent activity.",
		);
		localStorage.setItem(ALERT_TAG, "true");
	}
}
