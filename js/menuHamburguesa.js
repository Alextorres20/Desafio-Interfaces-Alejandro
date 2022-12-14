const menuHamburguesa = document.querySelector('.menuHamburguesa');
const botones = document.querySelector('.botones');
const main = document.querySelector('.main');
menuHamburguesa.addEventListener('click', (event) => {
        menuHamburguesa.classList.toggle("desaparece");
        botones.classList.toggle("aparece");
})

main.addEventListener('click', (event) => {
        menuHamburguesa.classList.remove("desaparece");
        botones.classList.remove("aparece");
})

// botones.addEventListener('click', (event) => {
//     if(menuHamburguesa.style.display == "none"){
//         botones.style.display = "none";
//         menuHamburguesa.style.display = "block";
//     }
// })