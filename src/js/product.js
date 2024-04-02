const product = {

    nombre: "Baldur's Gate 3",
    descripcion: `Gather your party and return to the Forgotten Realms in a tale of fellowship and
    betrayal, sacrifice and survival, and the lure of absolute power.<br><br>Mysterious
    abilities are awakening inside you, drawn from a mind flayer parasite planted in your
    brain. Resist, and turn darkness against itself. Or embrace corruption, and become
    ultimate evil.`,
    portada: 'https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg?t=1711532262',
    imagenes: [
        {
            "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1086940/ss_c73bc54415178c07fef85f54ee26621728c77504.1920x1080.jpg?t=1711532262"
        },
        {
            "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1086940/ss_73d93bea842b93914d966622104dcb8c0f42972b.1920x1080.jpg?t=1711532262"
        },
        {
            "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1086940/ss_cf936d31061b58e98e0c646aee00e6030c410cda.1920x1080.jpg?t=1711532262"
        },
        {
            "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1086940/ss_b6a6ee6e046426d08ceea7a4506a1b5f44181543.1920x1080.jpg?t=1711532262"
        },
    ],
    precio: 40
}

const productCard = document.querySelector('#product');
const modalProduct = new bootstrap.Modal(document.getElementById('modalProduct'), {});

cargarEventListeners();

function cargarEventListeners() {
    productCard.addEventListener('click', mostrandoProducto)
}

function mostrandoProducto() {

    const { nombre, descripcion, portada, imagenes, precio } = product;

    const titleModal = document.querySelector('.modal-header h5');
    titleModal.textContent = nombre;

    const portadaModal = document.querySelector('#portada');
    portadaModal.innerHTML =
        `
    <img class="img-fluid w-100 mx-auto rounded shadow-lg "
    src="${portada}"
    alt="">
    `

    const descriptionModal = document.querySelector('.modal-body #description');
    descriptionModal.innerHTML = descripcion

    const modalBody = document.querySelector('#screenshots');

    cleanHtml(modalBody);
    imagenes.map(img => {
        const colModal = document.createElement('div');
        colModal.classList.add('col')
        colModal.innerHTML =
            `
            <a href="${img.path_full}"
                target="_blank">
                <img class="img-fluid rounded "
                    src="${img.path_full}"
                    alt="">
            </a>
        `
        modalBody.appendChild(colModal)
    })

    const priceModal = document.querySelector('#price')
    priceModal.textContent = `${precio} USD`

    modalProduct.show()
}

function cleanHtml(position) {
    while (position.firstChild) {
        position.removeChild(position.firstChild)
    }
}