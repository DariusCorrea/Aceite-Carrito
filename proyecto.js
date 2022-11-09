/* Carrito de compras en construcción */
const Productos =
[
  {"id":1, "Producto": "Aceite Natura 900ml", "precio": 2300, "imagen": "./resources/litro.webp"},
  {"id":2, "Producto": "Aceite Natura", "precio": 1000, "imagen": "./resources/natura.png"},
  {"id":3,"Producto": "Aceite Cocinero", "precio": 1100, "imagen": "./resources/cocinero.webp"},
  {"id":4, "Producto": "Aceite cañuelas 1L", "precio": 1100, "imagen": "./resources/cañuelas.png"},
  {"id":5, "Producto": "Aceite cañuelas 5L", "precio": 3000, "imagen": "./resources/5litros.jpg"},
  {"id":6, "Producto": "Aceite Natura de oliva", "precio": 1400, "imagen": "./resources/natura-oliva.jpg"},
  {"id":7, "Producto": "aceite Cañuelas oliva", "precio": 2000, "imagen": "./resources/olive-cañuelas.jpg"},
  {"id":8, "Producto": "aceite Cañuelas girasol", "precio": 3000, "imagen": "./resources/cinco.jpg"}
]
;

/* FETCH */
const contenedor= document.getElementById("contenedor");
const listadoProductos= "json/Productos.json";

fetch(listadoProductos)
.then(respuesta=> respuesta.json())
.then(datos=>{
  datos.forEach(element=>{
    let card= document.createElement("div")
    card.className.add=("card");
    card.style="width: 20rem;"
    card.innerHTML+= 
    `<img class="card-img-top" src="${element.imagen}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${element.Producto}</h5>
      <p class="card-text">$${element.precio}</p>
    <button id="agregar${element.id}" class="btn editar__color ">Agregar al carrito</button>
  
  </div>
  </div>`
  contenedor.append(card);
  /* Evento click */

      let botonAgregar=document.getElementById(`agregar${element.id}`);
botonAgregar.addEventListener("click", () =>{
  Swal.fire({
title: "Su producto fue agregado con éxito",
icon: "success",
background: "rgba(216, 202, 10, 0.821)",
iconColor: "black",
color: "white",

  })
  console.log(`${element.Producto}`) 
  agregarAlCarrito(element.id);  
}) 
  })
})

/* Agregar producto al carrito  */
const carrito = [];
const agregarAlCarrito=(id) =>{
  const producto = Productos.find(element => element.id === id);
  const productoEnCarrito = carrito.find(element => element.id === id);
if(productoEnCarrito){
  productoEnCarrito.cantidad++;
}else{
  carrito.push(producto)
}
guardarProducto();
carritoNavBar();
carritoContador();
}
  console.log(carrito)



/* Funcion para mostrar productos agregados al carrito */
const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");
verCarrito.addEventListener("click",actualizarCarrito,guardarProducto);


function actualizarCarrito() {
let aux="";
  contenedorCarrito.innerHTML = ""

  carrito.forEach(element => {
      aux += `<div class="card col-xl-3 col-md-6 col-sm-12">
      <img class="card-img-top" src="${element.imagen}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${element.Producto}</h5>
        <p class="card-text">$${element.precio}</p>
      <button OnClick="eliminarProducto(${element.id})" class=" editar__color ">Quitar del carrito</button>
    
    </div>
    </div>`
    contenedorCarrito.innerHTML = aux;
    
  })
}
/* Eliminar producto del carrito */

const eliminarProducto = (id) => {
  console.log(id)
  const productoBorrar = Productos.find(element => element.id == id);
  console.log(productoBorrar)
  carrito.splice(carrito.indexOf(productoBorrar),1);
  actualizarCarrito();
  guardarProducto();
}

/* STORAGE Y JSON */

function guardarProducto(){
  localStorage.setItem("carrito", JSON.stringify(carrito));
}
/* Operador OR */
const cargarProducto = JSON.parse(localStorage.getItem("carrito"))||[];{
/* SPREAD */
carrito.push(...cargarProducto)
  actualizarCarrito();
  
}
/*  const cargarProducto= JSON.parse(localStorage.getItem("carrito"));{ */
/* FOR */

/*for(let i=0; i< cargarProducto.length; i++)
carrito.push(cargarProducto[i]);  */

/* Observar los productos en el carrito mediante el emoji del carrito situado en la barra de navegación */
const carritoContainer = document.getElementById("carritoContainer");
const verProducto = document.getElementById("verProducto");
const carritoNavBar=() =>{ 
  carritoContainer.innerHTML = ""
  carritoContainer.style.display = "flex";

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML= `
    <h1 class= "modal-header-tittle">Carrito</h1>`
    carritoContainer.append(modalHeader);
    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";
    modalbutton.addEventListener("click", ()=>{ 
      carritoContainer.style.display = "none";
    })
    

    modalHeader.append(modalbutton);

    carrito.forEach((element)=>{
      let carritoContent = document.createElement("div");
      carritoContent.className  =  "modal-content";
      carritoContent.innerHTML = `
      <img class="card-img-top" src="${element.imagen}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${element.Producto}</h5>
        <p class="card-text">$${element.precio}</p>      `; 
        carritoContainer.append(carritoContent);
      let eliminar= document.createElement("span");
      eliminar.innerText = "❌";
      eliminar.className= "delete-product";
      carritoContent.append(eliminar);
      eliminar.addEventListener("click",eliminarProductoDos);
      
    });
    /* Calcula total de los productos agregados */
    const total = carrito.reduce((acc,el) => acc + el.precio,0)
    const totalCompra= document.createElement("div")
    totalCompra.className= "total-content"
    totalCompra.innerHTML = `<p class= "editar-col">Total a pagar: $${total}</p>`;
    let pagoTotal = document.createElement("div")
    pagoTotal.className =  "total__compra"
    pagoTotal.innerHTML= `<button class="edit__boton"> Realizar compra</button>`
    pagoTotal.addEventListener("click", () =>{
      if(total=>0){
        swal.fire({
          title: "Su compra fue éxitosa, vuelva pronto",
          icon: "Sucess",
          background: "grey",
          iconColor: "white",
          color: "white",
        }).then(function(){
      window.location = "index.html"
        })
      }
  

    }) 
    carritoContainer.append(totalCompra);
    carritoContainer.append(pagoTotal);
    carritoContador();
  }
const eliminarProductoDos = (id) => {
  console.log(id)
  const productoBorrar = Productos.find(element => element.id == id);
  console.log(productoBorrar)
  carrito.splice(carrito.indexOf(productoBorrar),1);
  actualizarCarrito();
  guardarProducto();
  carritoContador();
  carritoNavBar();
}
/* Cuenta en la barra superior de la barra de navegación los productos que se encuentran agregados en el carrito */
verProducto.addEventListener("click", carritoNavBar);
const cantidadEnCarro = document.getElementById("cantidadEnCarro");
const carritoContador = () => {
  cantidadEnCarro.style.display = "flex"
cantidadEnCarro.innerText = carrito.length;
}
/*  TEST 
  const totalCompra = document.getElementById("totalCompra");
  const calcularTotalCompra = () => {
      let total = 0; 
      carrito.forEach( element => {
          total += element.precio * element.cantidad;
      });
      totalCompra.innerHTML = total;
  }
*/