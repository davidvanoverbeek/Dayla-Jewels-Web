function crearProductoHTML(prod) {

  return `
    <div class="catalogo tarjeta" onclick='openModal(${JSON.stringify(prod)})'>
        <img src="${prod.img}">
        <p class="short">${prod.ref}</p>
    </div>
  `;
}

function pintarSeccion(idContenedor, arrayProductos) {
  const contenedor = document.getElementById(idContenedor);

  arrayProductos.forEach(prod => {
    contenedor.innerHTML += crearProductoHTML(prod);
  });
}

window.onload = () => {
  pintarSeccion("catalogo-circonitas", DATA.circonitas);
  pintarSeccion("catalogo-colores", DATA.colores);
  pintarSeccion("catalogo-bicolor", DATA.bicolor);
  pintarSeccion("catalogo-esmalte", DATA.esmalte);
};