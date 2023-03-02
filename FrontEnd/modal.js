//////open modal///////////
const openModal= function(e){
   e.preventDefault();
    const modal = document.querySelector("#modal1")
    modal.classList.replace("hide", "modal");
    //return affichPhotoModal() 
}
///////////close modal//////////
const closeModal = function(e){
    e.preventDefault();
    const modal = document.querySelector("#modal1")
    modal.classList.replace("modal", "hide");
 }   
////////////////////ecoute boutton//////////
document.querySelector(".close-modal").addEventListener('click', closeModal);
document.querySelector('.js-modal').addEventListener('click', openModal);
//////////affichage photo au modal///////////////
const affichPhotoModal = function(){
    const galleryModal = document.querySelector(".galeri-modal")
    getData();
    return afficherProject(works);
}