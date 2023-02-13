// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const listaProductos = document.querySelector("#lista-de-productos"); /* Identificamos el selector como ID */
const selector = document.querySelector('.input'); /* Cambiar el nombre de la variable */

/* Este for nos muestra todos los productos con nombre, titulo e imagen */
for (let i = 0; i < productos.length; i++) {
  /* Cambiamos el nombre de las var a uno más descriptivo */
  var listaProducto = document.createElement("div")
  listaProducto.classList.add("producto")

  var titulo = document.createElement("p")
  titulo.classList.add("titulo")
  titulo.innerText = productos[i].nombre
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  listaProducto.appendChild(titulo)
  listaProducto.appendChild(imagen)
  listaProductos.appendChild(listaProducto)
}

//displayProductos(productos) /* No necesitamos llamar a esa función */
const botonDeFiltro = document.querySelector("button");

/* Este botón tiene que llamar a la función que realiza el filtrado
de productos de acuerdo */
botonDeFiltro.addEventListener = "click", function(){
  while (listaProductos.firstChild) {
    listaProductos.removeChild(listaProductos.firstChild);
  }

  /* Aqui leermos el valor ingresado a filtrar y lo mostramos en consola*/
  const texto = selector.value;
  console.log(texto);
  /* Obtenemos los productos que coinciden con la búsqueda */
  const productosFiltrados = filtrado(productos, texto );
  console.log(productoFiltrado);

  /* Me muestra solamente los objetos que pasan el filtro */
  for (let i = 0; i < productosFiltrados.length; i++) {
    var productoFiltrado = document.createElement("div")
    productoFiltrado.classList.add("producto")
  
    var tituloFiltrado = document.createElement("p")
    tituloFiltrado.classList.add("titulo")
    tituloFiltrado.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    productoFiltrado.appendChild(tituloFiltrado)
    productoFiltrado.appendChild(imagen)
  
    listaProductos.appendChild(productoFiltrado)
  }
}
/* Función que determina que elementos coinciden con la búsqueda ya sea en el 
color o el tipo */
const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  