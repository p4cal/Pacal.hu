const social = document.querySelectorAll(".social");

const socials = {
	instagram: "https://instagram.com/gy.szilard/",
	discord: "https://discord.gg/WjjkHSn9yF",
	twitch: "https://www.twitch.tv/p4cal"
}

function addTooltip(text, id) {
	const tooltip = document.createElement("div");
	const element = document.querySelector(`.${id}`);
	tooltip.classList.add("tooltip-container");
	tooltip.id = id;
	
	const tip = document.createElement("div");
	tip.classList.add("tooltip")
	tip.style.color = "white";
	tip.textContent = text;
	
	tooltip.appendChild(tip);
	element.appendChild(tooltip);
}

function removeTooltip(id) {
	const tooltip = document.getElementById(id);
	const element = document.querySelector(`.${id}`);
	element.removeChild(tooltip);
}

function isPC() {
	return !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

document.addEventListener("DOMContentLoaded", () => {
	if(isPC()) {
		social.forEach(s => {
			const socialType = s.classList[1];
	
			s.addEventListener("mouseenter", () => {
				addTooltip(socials[socialType], socialType);
			});
	
			s.addEventListener("mouseleave", () => {
				removeTooltip(socialType);
			});
	
			s.addEventListener("click", () => window.open(socials[socialType], "_blank"));
		});
	} else {
		social.forEach(s => {
			const socialType = s.classList[1];

			s.addEventListener("click", () => window.open(socials[socialType], "_blank"));
		})
	}
});