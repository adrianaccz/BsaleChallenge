
const search = async() => {
  const inputTexto = document.querySelector('#inputTexto');
  //console.log(inputTexto.value);
  const url = "https://express-api-bsale.herokuapp.com/api/products/search"

  const textoCliente = inputTexto.value

  const response = await fetch(url+'?name='+textoCliente).then(res => res.json()).then(data => listSeacrh(data))
  //console.log(response);
  inputTexto.value = ''
}

const listSeacrh = async(products) => {
  let bearsProducts = ``

  if(products.length === 0){
    bearsProducts= `
    <div class="alert alert-danger" role="alert">
      No existe el producto indicado!
    </div>`
  }else{
    await products.forEach((product, index) => {
      bearsProducts+= `
      <div class="card col-3 m-3 p-3" style="width: 18rem;">
              <img src="${product.url_image ? product.url_image : "https://www.ccu.cl/wp-content/uploads/2019/02/BODEG.jpg"}" class="card-img-top" style="width: 15rem; min-height: 15rem;">
                  <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${Intl.NumberFormat('de-DE').format(product.price)} $</p>
                    <button class="btn btn-outline-success"><i class="bi bi-cart-plus-fill"></i> Agregar </button>
                  </div>
              </div>`
    });
  }

  document.getElementById("allProducts").innerHTML = bearsProducts

}