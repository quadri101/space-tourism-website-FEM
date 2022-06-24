const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector("nav.primary-navigation");

mobileNavToggle.addEventListener("click", function () {
	let visibility = nav.getAttribute("data-visible");
	if (visibility === "false") {
		nav.setAttribute("data-visible", true);
		mobileNavToggle.setAttribute("aria-expanded", true);
	} else {
		nav.setAttribute("data-visible", false);
		mobileNavToggle.setAttribute("aria-expanded", false);
	}
});
