
/* Proyecto carrito de compras */

  class Producto{
  constructor (nombre, precio){
      this.nombre=nombre;
      this.precio=precio;
  
  }
  }
  
  const aceite = new Producto ("Aceite", 1700);
  
  const oliva = new Producto ("Aceite de oliva", 2500);
  
  const arrayProductos = [aceite , oliva];
  
  const contenedor= document.getElementById("contenedor");
  
  arrayProductos.forEach (Producto =>{
  let div = document.createElement("div");
  div.innerHTML = `    <div class="producto">
  <div class="producto-blanco">
    <img class="edit" src="./resources/olive.jpg">
  </div>

  <div class="producto-informacion">
  <p class="producto-nombre">Aceite Natura</p>
  <p class="producto-precio">1800$</p>
  <button class="editar__boton">Agregar al carrito</button>
  <button class="editar__boton">Quitar del carrito</button>
        </div>

</div>
<div class="producto">
  <div class="producto-blanco">
    <img class="edit" src="./resources/cocina.jpg">
  </div>

  <div class="producto-informacion">
  <p class="producto-nombre">Aceite Natura</p>
  <p class="producto-precio">1800$</p>
  <button class="editar__boton">Agregar al carrito</button>
  <button class="editar__boton">Quitar del carrito</button>
        </div>

</div>
<div class="producto">
  <div class="producto-blanco">
    <img class="edit" src="./resources/cocina.jpg">
  </div>

  <div class="producto-informacion">
  <p class="producto-nombre">Aceite Natura</p>
  <p class="producto-precio">1800$</p>
  <button class="editar__boton">Agregar al carrito</button>
  <button class="editar__boton">Quitar del carrito</button>
        </div>

</div>`;
  contenedor.appendChild(div);
  })  
  
  
  