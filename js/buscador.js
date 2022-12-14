const lupa = document.querySelector('.buscador');
const titulo = document.querySelector('h3.titulo');
lupa.addEventListener('click', (event) => {
    if(titulo.style.display == "block"){
        titulo.style.display = "none";;
        const buscador = document.createElement('input');
        buscador.setAttribute('type','search');
        const divTitulo = document.querySelector('.Buscador-Titulo');
        divTitulo.append(buscador);
    }
    else{
        titulo.style.display = "block";
        const buscador = document.querySelector('input[type=search]')
        buscador.remove();
    }
    
})

