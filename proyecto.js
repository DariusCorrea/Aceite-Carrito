/* Carrito de compras en construcción */
 

const contenedor= document.getElementById("contenedor");

verProductos(Productos)

function verProductos(Productos){
  Productos.forEach(element => {
let card= document.createElement("div")
card.classList.add=("card");
card.style="width: 18rem;"
card.innerHTML=`
  <img class="card-img-top" src="${element.imagen}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${element.Producto}</h5>
    <p class="card-text">$${element.precio}</p>
  <button id="agregar${element.id}" class="btn editar__color ">Agregar al carrito</button>

</div>
</div>`
contenedor.appendChild(card)


/* Evento click */
let botonAgregar=document.getElementById(`agregar${element.id}`);
botonAgregar.addEventListener("click", () =>{
  console.log(`${element.Producto}`) 
  agregarAlCarrito(element.id);  

})


  });
  
}
const carrito = [];
 const agregarAlCarrito=(id) =>{
  const producto = Productos.find(element => element.id === id);
  const productoEnCarrito = carrito.find(element => element.id === id);
if(productoEnCarrito){
  productoEnCarrito.cantidad++;
}else{
  carrito.push(producto);
}
console.log(carrito)

agregarStorage()
}


  
  console.log(carrito)





const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");
verCarrito.addEventListener("click",actualizarCarrito,agregarStorage);
/* Funcion para mostrar productos agregados */
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
/* Eliminar producto */
const eliminarProducto = (id) => {
  console.log(id)
  const productoBorrar = carrito.find(element => element.id == id);
  console.log(productoBorrar)
  carrito.splice(carrito.indexOf(productoBorrar),1);
  actualizarCarrito();
  agregarStorage()
}

/* STORAGE Y JSON */

function agregarStorage(){
  localStorage.setItem("carrito", JSON.stringify(carrito));
}
const carritos= JSON.parse(localStorage.getItem("carrito"));

for(let i=0; i< carritos.length; i++){
  carrito.push(carritos[i]);
  actualizarCarrito()

}

