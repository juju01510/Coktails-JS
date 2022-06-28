// quand on passe sur les élèments de la liste, le curseur change pour que cela soit cliquable
// Faire en sorte qu'on puisse choisir le cocktail qui s'affiche en bas en cliquant sur les élèments de la liste
// Permettra à l'utilisateur de changer des élèment de la liste et d'en ajouter

const cocktails = document.querySelectorAll("p");
const lastP = cocktails[cocktails.length - 1];
const favCocktail = document.getElementById("cocktail");
const input = document.querySelector("input");
const btn = document.getElementById("btn");
const ul = document.querySelector("ul");
let dels = document.querySelectorAll("span");

function randomInteger(max) {
	return Math.floor(Math.random() * (max + 1));
}
function randomRgbColor() {
	let r = randomInteger(255);
	let g = randomInteger(255);
	let b = randomInteger(255);

	return [r, g, b];
}

dels.forEach((del) => {
	del.style.backgroundColor = `rgb(${randomRgbColor()})`;
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

dels.forEach((del) => {
	del.addEventListener("click", () => {
		del.parentElement.style.display = "none";
	});
});

btn.addEventListener("click", () => {
	if (input.value === "") {
		return;
	} else {
		let li = document.createElement("li");
		li.innerHTML = `<p style="cursor: pointer;">${input.value}</p><span class="close" style="background-color: rgb(${randomRgbColor()})">X</span>`;
		ul.append(li);
		input.value = "";
		dels = document.querySelectorAll("span");
		dels.forEach((del) => {
			del.addEventListener("click", () => {
				del.parentElement.style.display = "none";
			});
		});

		li.addEventListener("click", (e) => {
			if (e.target.textContent === "X") {
				return;
			} else {
				favCocktail.textContent = e.target.textContent;
			}
		});
	}
});

