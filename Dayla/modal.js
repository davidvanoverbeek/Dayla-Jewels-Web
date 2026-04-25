const modal = document.getElementById("modal-overlay");
const modalImg = document.getElementById("modal-img");
const modalRef = document.getElementById("modal-ref");
const modalInfo = document.getElementById("modal-info");
const closeBtn = document.getElementById("modal-close");

// abrir modal
function openModal(prod){
    modalImg.src = prod.img;
    modalRef.textContent = prod.ref;

    modalInfo.innerHTML = `
        <p><b>Quilataje:</b> ${prod.quilataje.join(" - ")}</p>
        <p><b>Piedras:</b> ${prod.piedras.join(" · ")}</p>
        <p><b>Color:</b> ${prod.color.join(" - ")}</p>
    `;

    modal.classList.add("active");
}

// cerrar modal
function closeModal(){
    modal.classList.remove("active");
}

// eventos cierre
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e)=>{
    if(e.target === modal) closeModal();
});