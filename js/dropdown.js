function dropdown(name) {
	document.getElementById(name).classList.toggle("show");

	let dropDownIsTrue;

}

window.onload = function () {
	let dropDownMenuList = document.getElementsByClassName("dropdown-menu");

	let indexSingleMenu;
	for (indexSingleMenu = 0; indexSingleMenu < dropDownMenuList.length; indexSingleMenu++) {
		let singleMenu = dropDownMenuList[indexSingleMenu].children;

		let menuToggleButton = singleMenu[0];
		menuToggleButton.addEventListener("click", function () {
			singleMenu[1].classList.toggle("show");
		}
		)
	}
}
// add this event listener to particular elements
window.onclick = function (event) {
	if (!event.target.matches(".dropdown__button")) {
		let dropDowns = document.getElementsByClassName("dropdown__content");

		let i;
		for (i = 0; i < dropDowns.length; i++) {
			let openDropdown = dropDowns[i];

			if (openDropdown.classList.contains("show")) {
				openDropdown.classList.remove("show");
			}
		}
	}

}