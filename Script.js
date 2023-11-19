let answers = document.querySelectorAll(".faq_container"); 
answers.forEach((event) => { 
event.addEventListener("click", () => { 
	if (event.classList.contains("active")) { 
	event.classList.remove("active"); 
	} else { 
	event.classList.add("active"); 
	} 
}); 
});

const menu = document.querySelector(".nav_menu");
const menuOpen = document.querySelector("#open");
const menuClose = document.querySelector("#close");

menuOpen.addEventListener ('click' , () => {
 menu.style.display = "flex";
menuClose.style.display = "inline-block";
menuOpen.style.display = "none";
}
);

const closeNav = () => {
menu.style.display = "none";
menuClose.style.display = "none";
menuOpen.style.display = "inline-block";
};

menuClose.addEventListener('click' , closeNav);