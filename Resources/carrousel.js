let animating;

function handleSlideVideo(slide, shouldPlay) {
	const video = slide.querySelector("video");
	if (!video) return;
	if (shouldPlay) {
		if (!video.hasAttribute("src") && video.dataset.src) {
			video.src = video.dataset.src;
			video.addEventListener("canplay", () => video.play(), { once: true });
			video.load();
		} else {
			video.play();
		}
	} else {
		video.pause();
	}
}

function syncActiveTitle(slide) {
	const target = document.querySelector("[data-active-title]");
	if (!target || !slide) return;
	const h3 = slide.querySelector("h3");
	target.textContent = h3 ? h3.textContent.trim() : "";
}

// Event listeners for next and previous buttons

const buttons = document.querySelectorAll("[data-carrousel-button]");

buttons.forEach((button) => {
	button.addEventListener("click", async () => {
		const offset = button.dataset.carrouselButton === "next" ? 1 : -1;
		const slides = button
			.closest("[data-carrousel]")
			.querySelector("[data-slides]");
		const activeSlide = slides.querySelector("[data-active]");
		const allSlides = [...slides.children];
		let newIndex = allSlides.indexOf(activeSlide) + offset;
		if (newIndex < 0) newIndex = slides.children.length - 1;
		if (newIndex >= slides.children.length) newIndex = 0;
		const nextSlide = slides.children[newIndex];
		nextSlide.style.display = "flex";
		if (offset === 1) {
			activeSlide.style.animationName = "exitLeft";
			nextSlide.style.animationName = "enterLeft";
		} else {
			activeSlide.style.animationName = "exitRight";
			nextSlide.style.animationName = "enterRight";
		}
		handleSlideVideo(activeSlide, false);
		handleSlideVideo(nextSlide, true);
		nextSlide.dataset.active = true;
		delete activeSlide.dataset.active;
		syncActiveTitle(nextSlide);
		const slideH = activeSlide.offsetHeight;
		await new Promise((r) => setTimeout(r, 400));
		allSlides.forEach((slide) => {
			if (!slide.dataset.active) slide.style.display = "none";
		});
	});
});

// Load video for the initially active slide
const initialActive = document.querySelector("[data-slides] [data-active]");
if (initialActive) {
	handleSlideVideo(initialActive, true);
	syncActiveTitle(initialActive);
}

buttons.forEach((button) => {
	button.addEventListener("keyup", (e) => {
		const nxt = document.querySelector('[data-carrousel-button="next"]');
		const prv = document.querySelector('[data-carrousel-button="prev"]');
		e.preventDefault();
		if (document.activeElement === nxt && (e.keyCode === 32 || e.keyCode == 13))
			next();
		if (document.activeElement === prv && (e.keyCode == 32 || e.keyCode == 13))
			prev();
		return false;
	});
});

const nxt = document.querySelector(".next");
const nxtI = document.querySelector(".next i");
const prv = document.querySelector(".prev");
const prvI = document.querySelector(".prev i");

// keystrokes for carrousel
nxt.addEventListener("keyup", (e) => {});
prv.addEventListener("keyup", (e) => {
	e.preventDefault();
});

// Beat styling
nxt.addEventListener("mouseover", (e) => {
	e.preventDefault();
	nxtI.classList.add("fa-beat");
	return false;
});
nxt.addEventListener("mouseleave", (e) => {
	e.preventDefault();
	nxtI.classList.remove("fa-beat");
	return false;
});
prv.addEventListener("mouseover", (e) => {
	e.preventDefault();
	prvI.classList.add("fa-beat");
	return false;
});
prv.addEventListener("mouseleave", (e) => {
	e.preventDefault();
	prvI.classList.remove("fa-beat");
	return false;
});
