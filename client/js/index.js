
const listProducts = async() => {
  //console.log("esta es producto");
  const url = "https://express-api-bsale.herokuapp.com/api/products"
  const response = await fetch(url)
  const products = await response.json()
  //console.log(products);
  let cardProducts = ``
   products.forEach((product, index) => {
    cardProducts += `
    <div class="card col-3 m-3 p-3" style="width: 18rem;">
            <img src="${product.url_image ? product.url_image : "https://www.ccu.cl/wp-content/uploads/2019/02/BODEG.jpg"}" class="card-img-top" style="width: 15rem; min-height: 15rem;">
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">${Intl.NumberFormat('de-DE').format(product.price)} $</p>
                  <button class="btn btn-outline-success"><i class="bi bi-cart-plus-fill"></i> Agregar </button>
                </div>
            </div>`
  }); 
  
  document.getElementById("allProducts").innerHTML = cardProducts
}
listProducts()

const listPerProducts = async(product) => {
  const url = "https://express-api-bsale.herokuapp.com/api/products/"+product
  const response = await fetch(url)
  const products = await response.json()
  //console.log(products);
  let bearsProducts = ``
  products.forEach((product, index) => {
    bearsProducts+= `
    <div class="card col-3 m-3 p-3" style="width: 18rem;">
            <img src="${product.url_image ? product.url_image : "https://www.ccu.cl/wp-content/uploads/2019/02/BODEG.jpg"}" class="card-img-top" style="width: 15rem; min-height: 15rem;">
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">${Intl.NumberFormat('de-DE').format(product.price)} $ </p>
                  <button class="btn btn-outline-success"><i class="bi bi-cart-plus-fill"></i> Agregar </button>
                </div>
            </div>`
  }); 
  document.getElementById("allProducts").innerHTML = bearsProducts

}