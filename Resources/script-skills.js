let barsLoaded = false;

$(window).ready(() => {
  document.querySelector(".all-skills").style.display = "block";
  document.querySelectorAll(".expand-button").forEach((button) => {
    button.childNodes[1].click();
    if (!mobile) {
      button.childNodes[1].click();
    }
  });

  document.querySelector(".expand-button-skill").click();
  document.querySelector(".skill-header").addEventListener("click", () => {
    const bars = document.querySelectorAll(".ldBar");
    if (barsLoaded) {
      return;
    }
    barsLoaded = true;
    let interval = 50;
    bars.forEach((bar) => {
      if (bar.dataset.set === "true") return;
      setTimeout(() => {
        bar.ldBar.set(bar.dataset.toValue);
        bar.dataset.set = "true";
      }, interval);
      interval += 500;
    });
  });
  scrollTo({ top: 0 });
});

const skillHeader = document.querySelector(".skill-header");
const expandSkill = document.querySelector(".expand-button-skill");

skillHeader.addEventListener("mouseenter", () => {
  expandSkill.classList.add("fa-beat-fade");
});
skillHeader.addEventListener("mouseleave", () => {
  expandSkill.classList.remove("fa-beat-fade");
});
skillHeader.addEventListener("focusin", () => {
  expandSkill.classList.add("fa-beat-fade");
});
skillHeader.addEventListener("focusout", () => {
  expandSkill.classList.remove("fa-beat-fade");
});

const skillHeaderHandler = (e) => {
  if (e.keyCode) {
    e.preventDefault();
    return;
  }

  const skillLogo = document.querySelector(".skill-header button i");

  if (!document.querySelector(".skill-header button").dataset.expanded) {
    document.querySelector(".all-skills").style.display = "block";
    skillLogo.classList.remove("fa-square-plus");
    skillLogo.classList.add("fa-circle-minus");
    skillLogo.parentNode.dataset.expanded = "true";
  } else {
    document.querySelector(".all-skills").style.display = "none";
    skillLogo.classList.remove("fa-circle-minus");
    skillLogo.classList.add("fa-square-plus");
    delete skillLogo.parentNode.dataset.expanded;
  }
};

skillHeader.addEventListener("click", skillHeaderHandler);
skillHeader.addEventListener("keyup", skillHeaderHandler);

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
  button.addEventListener("click", (e) => {
    if (!e.target.parentNode.dataset.expanded) {
      e.target.closest("article").querySelector("aside").style.display = "flex";
      e.target.classList.remove("fa-square-plus");
      e.target.classList.add("fa-circle-minus");
      e.target.parentNode.dataset.expanded = "true";
    } else {
      e.target.closest("article").querySelector("aside").style.display = "none";
      e.target.classList.remove("fa-circle-minus");
      e.target.classList.add("fa-square-plus");
      delete e.target.parentNode.dataset.expanded;
    }
  });
  button.addEventListener("keyup", (evt) => {
    evt.preventDefault();
    if (evt.keyCode === 32 || evt.keyCode === 13) {
      const icon = evt.target.childNodes[1];
      icon.click();
    }
  });
});
