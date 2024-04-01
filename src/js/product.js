




const productCard = document.querySelector('#product');


cargarEventListeners();

function cargarEventListeners() {
    productCard.addEventListener('click', mostrandoProducto)
}


function mostrandoProducto(e) {
    console.log(e);
}