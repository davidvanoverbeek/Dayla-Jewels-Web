const catal = document.querySelectorAll('.catalogo');

catal.forEach(catalogo => {
  catalogo.addEventListener('click', () => {
    const isActive = catalogo.classList.contains('active');
    
    // Cierra todas
    catal.forEach(c => c.classList.remove('active'));
    
    // Si no estaba activa, se abre
    if (!isActive) {
      catalogo.classList.add('active');
    }
  });
});
