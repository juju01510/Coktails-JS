// Quand on passe sur les élèments de la liste, le curseur change pour que cela soit cliquable
// Faire en sorte qu'on puisse choisir le cocktail qui s'affiche en bas en cliquant sur les élèments de la liste
// Permettre à l'utilisateur de pouvoir ajouter et supprimer des élèments de la liste

const cocktails = document.querySelectorAll("p");
const lastP = cocktails[cocktails.length - 1];
const favCocktail = document.getElementById("cocktail");
const input = document.querySelector("input");
const btn = document.getElementById("btn");
const ul = document.querySelector("ul");
let deletes = document.querySelectorAll("span");

function addCoktail() {
	let li = document.createElement("li");
	li.innerHTML = `<p style="cursor: pointer;">${input.value}</p><span class="close" style="background-color: rgb(${randomRgbColor()})">X</span>`;
	ul.append(li);
	input.value = "";
	deletes = document.querySelectorAll("span");
	deletes.forEach((delet) => {
		delet.addEventListener("click", () => {
			delet.parentElement.style.display = "none";
			favCocktail.textContent = "";
		});
	});

	li.addEventListener("click", (e) => {
		if (e.target.textContent === "X") {
			return;
			// } else if (e.target.textContent === e.target.textContent) {
			// 	return;
		} else {
			favCocktail.textContent = e.target.textContent;
		}
		console.log(li.textContent);
	});
}

function randomInteger(max) {
	return Math.floor(Math.random() * (max + 1));
}
function randomRgbColor() {
	let r = randomInteger(255);
	let g = randomInteger(255);
	let b = randomInteger(255);

	return [r, g, b];
}

deletes.forEach((delet) => {
	delet.style.backgroundColor = `rgb(${randomRgbColor()})`;
});

cocktails.forEach((cocktail) => {
	cocktail.addEventListener("mouseover", () => {
		cocktail.style.cursor = "pointer";
		lastP.style.cursor = "";
	});
	cocktail.addEventListener("click", () => {
		if (lastP == cocktail) {
			let lastCoktail = favCocktail.innerText;
			favCocktail.innerText = lastCoktail;
		} else {
			favCocktail.textContent = cocktail.textContent;
		}
	});
});

deletes.forEach((delet) => {
	delet.addEventListener("click", () => {
		delet.parentElement.style.display = "none";
		favCocktail.textContent = "";
	});
});

btn.addEventListener("click", () => {
	if (input.value === "") {
		return;
	} else {
		addCoktail();
	}
});
