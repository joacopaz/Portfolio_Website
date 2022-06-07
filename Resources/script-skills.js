$(window).ready(() => {
	if (!window.mobileCheck()) {
		document.querySelectorAll(".expand-button").forEach((button) => {
			button.childNodes[0].click();
		});
	}
	document.querySelector(".expand-button-skill").childNodes[0].click();
	document.querySelector(".expand-button-skill").childNodes[0].click();
	document
		.querySelector(".expand-button-skill")
		.addEventListener("click", () => {
			const bars = document.querySelectorAll('[data-set="false"]');
			setTimeout(() => {
				let interval = 1500;
				bars.forEach((bar) => {
					setTimeout(() => {
						bar.ldBar.set(bar.dataset.toValue);
						bar.dataset.set = "true";
					}, interval);
					interval += 1000;
				});
			}, 200);
		});
});

const expandSkill = document.querySelector(".expand-button-skill");

expandSkill.addEventListener("mouseenter", () => {
	expandSkill.classList.add("fa-beat-fade");
});
expandSkill.addEventListener("mouseleave", () => {
	expandSkill.classList.remove("fa-beat-fade");
});
expandSkill.addEventListener("focusin", () => {
	expandSkill.classList.add("fa-beat-fade");
});
expandSkill.addEventListener("focusout", () => {
	expandSkill.classList.remove("fa-beat-fade");
});
expandSkill.addEventListener("click", (evt) => {
	if (evt.target.parentNode.dataset.expanded === "false") {
		document.querySelector(".all-skills").style.display = "";
		document.querySelector(".image-container-skills").style.display = "";
		evt.target.classList.remove("fa-square-plus");
		evt.target.classList.add("fa-circle-minus");
		evt.target.parentNode.dataset.expanded = "true";
	} else {
		document.querySelector(".all-skills").style.display = "none";
		document.querySelector(".image-container-skills").style.display = "none";
		evt.target.classList.remove("fa-circle-minus");
		evt.target.classList.add("fa-square-plus");
		evt.target.parentNode.dataset.expanded = "false";
		const bars = document.querySelectorAll('[data-set="true"]');
		bars.forEach((bar) => {
			bar.ldBar.set(0);
			bar.dataset.set = "false";
		});
	}
});
expandSkill.addEventListener("keyup", (evt) => {
	evt.preventDefault();
	if (evt.keyCode === 32 || evt.keyCode === 13) {
		const icon = evt.target.childNodes[0];
		icon.click();
	}
});

document.querySelectorAll(".expand-button").forEach((button) => {
	button.addEventListener("mouseenter", () => {
		button.classList.add("fa-beat-fade");
	});
	button.addEventListener("mouseleave", () => {
		button.classList.remove("fa-beat-fade");
	});
	button.addEventListener("focusin", () => {
		button.classList.add("fa-beat-fade");
	});
	button.addEventListener("focusout", () => {
		button.classList.remove("fa-beat-fade");
	});
	button.addEventListener("click", (evt) => {
		if (evt.target.parentNode.dataset.expanded === "false") {
			evt.target.closest("article").querySelector("aside").style.display =
				"flex";
			evt.target.classList.remove("fa-square-plus");
			evt.target.classList.add("fa-circle-minus");
			evt.target.parentNode.dataset.expanded = "true";
		} else {
			evt.target.closest("article").querySelector("aside").style.display =
				"none";
			evt.target.classList.remove("fa-circle-minus");
			evt.target.classList.add("fa-square-plus");
			evt.target.parentNode.dataset.expanded = "false";
		}
	});
	button.addEventListener("keyup", (evt) => {
		evt.preventDefault();
		if (evt.keyCode === 32 || evt.keyCode === 13) {
			const icon = evt.target.childNodes[0];
			icon.click();
		}
	});
});
