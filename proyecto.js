
let carrito= []
const contenedor= document.getElementById("contenedor");
console.log(console);
function verProductos(items){
  items.forEach(element => {
let card= document.createElement("div")
card.classList.add=("card");
card.style="width: 18rem;"
card.innerHTML=`
  <img class="card-img-top" src="${element.imagen}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${element.Producto}</h5>
    <p class="card-text">$${element.precio}</p>
  <button id="agregar${element.id}" class="btn btn-dark ">Agregar al carrito</button>

</div>
</div>`
contenedor.appendChild(card)

let botonAgregar=document.getElementById(`agregar${element.id}`);
botonAgregar.addEventListener("click", () =>{
  console.log(`${element.Producto}`) 
  alert("Su producto fue agregado con éxito "+ element.precio)

})
  });
  
}


function agregarProductos(element){
  console.log(`${element.Producto}`)
  alert(element.precio)
}
const agregarProducto=(element) => {
  const item = contenedor.find((Producto) => element.id === element.id)
  carrito.push(item)
  console.log(carrito)
}

verProductos(Productos);

