const miModalBtn = document.querySelector("#mi-modal-btn");
const miModalCont = document.querySelector(".mi-modal-cont");
const miModal = document.querySelector(".mi-modal");


const showMiModal = ()=>{
    miModalCont.style.opacity = "1";
    miModal.style.transform = "translateY(0%) rotateX(0deg)";
    miModalCont.style.pointerEvents = "all";
}

const hideMiModal = ()=>{
    miModalCont.style.opacity = "0";
    miModal.style.transform = "translateY(150%) rotateX(-30deg)";
    miModalCont.style.pointerEvents = "none";
}


miModalBtn.addEventListener("click", showMiModal);
miModalCont.addEventListener("click", (e)=>{
    if (e.target === miModalCont) hideMiModal();
});