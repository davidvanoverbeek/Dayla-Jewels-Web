function crearProductoHTML(prod) {

  const quilatajeHTML = prod.quilataje.join(" - ");
  const piedrasHTML = prod.piedras.join(" · ");
  const colorHTML = prod.color.join(" - ");

  return `
    <div class="catalogo">
      <div class="productos tarjeta" onclick="toggleInfo(this)">
        
        <img src="${prod.img}">
        <p class="short">${prod.ref}</p>

        <div class="info-extra">
            <p><b>Quilataje:</b> ${quilatajeHTML}</p>
            <p><b>Piedras:</b> ${piedrasHTML}</p>
            <p><b>Color:</b> ${colorHTML}</p>
        </div>

      </div>
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
  pintarSeccion("catalogo-circonitas", ANILLOS.circonitas);
  pintarSeccion("catalogo-colores", ANILLOS.colores);
  pintarSeccion("catalogo-bicolor", ANILLOS.bicolor);
  pintarSeccion("catalogo-esmalte", ANILLOS.esmalte);
};

function toggleInfo(card) {
    card.classList.toggle("activa");
}