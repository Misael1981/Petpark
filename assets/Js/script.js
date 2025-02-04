// MENU MOBILE

const button = document.getElementById('btn-menu') 
const menu = document.querySelector('.menu-lista')

button.addEventListener('click', () => {
  button.classList.toggle('active')
  menu.classList.toggle('open')
})


// Arrays com os produtos
const products = [
    {
        "imageUrl": "./assets/imagens/biskrock.png",
        "altImage": "Biscoito Pedigree Biscrok",
        "productName": "Biscoito Pedigree Biscrok",
        "description": "Multi para Cães Adultos 500g",
        "price": "R$19,99"
    },
    {
        "imageUrl": "./assets/imagens/golden-especial.png",
        "altImage": "Ração Golden Special",
        "productName": "Ração Golden Special",
        "description": "Cães Adultos Sabor Frango e Carne 15kg",
        "price": "R$149,90"
    },
    {
        "imageUrl": "./assets/imagens/pipicat.png",
        "altImage": "Areia Higiênica Pipicat",
        "productName": "Areia Higiênica Pipicat",
        "description": "Classic para Gatos 4 Kg",
        "price": "R$45,99"
    },
    {
        "imageUrl": "./assets/imagens/arranhador.png",
        "altImage": "Arranhador São Benedito Pet",
        "productName": "Arranhador São Benedito Pet",
        "description": "Redondo com pluma e mola rosa",
        "price": "R$59,90"
    },
    {
        "imageUrl": "./assets/imagens/tenda.png",
        "altImage": "Tenda Caminha Pet",
        "productName": "Tenda Caminha Pet",
        "description": "Tenda de cama Pet - Cor Azul",
        "price": "R$279,00"
    },
    {
        "imageUrl": "./assets/imagens/cama-cachorro.png",
        "altImage": "Cama para Cachorro Médio",
        "productName": "Cama para Cachorro Médio",
        "description": "60X50 Com Zíper Estampa Geométrico",
        "price": "R$69,90"
    },
    {
        "imageUrl": "./assets/imagens/tapete-seco.png",
        "altImage": "Expet Tapete Higiênico",
        "productName": "Expet Tapete Higiênico",
        "description": "Super Blue Pacote 30 Unidades",
        "price": "R$81,82"
    },
    {
        "imageUrl": "./assets/imagens/mega-seco.png",
        "altImage": "Mega Seco Tapete Higiênico",
        "productName": "Mega Seco Tapete Higiênico",
        "description": "Tapete Higiênico 30 Und 65X60Cm",
        "price": "R$68,27"
    }
]

const productCarousel = document.querySelector('.carrossel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;
const visibleSlides = 4; 

prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + products.length) % products.length;
  renderProducts(products, currentSlide);
});

nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % products.length;
  renderProducts(products, currentSlide);
});

function renderProducts(products, startSlide) {
  productCarousel.innerHTML = ''; 

  for (let i = startSlide; i < startSlide + visibleSlides; i++) {
    const productIndex = i % products.length; 
    const product = products[productIndex];

    const productElement = `
      <li class="carrossel-item">
        <img class="carrossel-imagem" src="${product.imageUrl}" alt="${product.altImage}" />
        <h3 class="carrossel-nome">${product.productName}</h3>
        <p class="carrossel-descricao">${product.description}</p>
        <span class="carrossel-preco">${product.price}</span>
      </li>
    `;

    productCarousel.insertAdjacentHTML('beforeend', productElement);
  }
}

renderProducts(products, currentSlide);


