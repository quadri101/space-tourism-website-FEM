const tabList = document.querySelector("[role='tablist']");
const tabs = tabList.querySelectorAll("[role='tab']");
const pictures = document.querySelectorAll("picture");

tabList.addEventListener("keydown", (e) => {
	tabFocus(e);
});

tabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		showArticle(tab);
	});
});

function showArticle(tab) {
	const articleId = tab.getAttribute("aria-controls");
	const imageId = tab.getAttribute("data-image");

	hideArticles();
	hidePictures();
	const article = document.querySelector(`#${articleId}`);
	const picture = document.querySelector(`#${imageId}`);

	function hideArticles() {
		tabs.forEach((tab) => {
			tab.setAttribute("aria-selected", false);
			const articleId = tab.getAttribute("aria-controls");
			const article = document.querySelector(`#${articleId}`);
			article.hidden = true;
		});
	}
	article.hidden = false;

	function hidePictures() {
		pictures.forEach((picture) => {
			picture.hidden = true;
		});
	}
	picture.hidden = false;

	tab.setAttribute("aria-selected", true);
}

let tabNum = 0;
function tabFocus(e) {
	const keyDownLeft = 37;
	const keyDownRight = 39;

	let tab = tabs[tabNum];

	if (e.keyCode === keyDownLeft || e.keyCode === keyDownRight) {
		tab.setAttribute("tabindex", -1);
	}

	if (e.keyCode === keyDownLeft) {
		tabNum--;
		if (tabNum < 0) {
			tabNum = tabs.length - 1;
		}
	}

	if (e.keyCode === keyDownRight) {
		tabNum++;
		if (tabNum >= tabs.length) {
			tabNum = 0;
		}
	}

	tab = tabs[tabNum];
	tab.setAttribute("tabindex", 0);
	tab.focus();
}
