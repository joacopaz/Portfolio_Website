const trigger = document.querySelector(".skill-header");
const scrollTop = document.querySelector(".top");

trigger.onclick = () => {
	trigger.scrollIntoView({ behavior: "smooth" });
};

scrollTop.onpointerdown = () => {
	document.querySelector("h2").scrollIntoView({ behavior: "smooth" });
};
