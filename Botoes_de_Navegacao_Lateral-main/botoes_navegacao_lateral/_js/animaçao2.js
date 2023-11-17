document.addEventListener("DOMContentLoaded", inicializar);

function inicializar() {
  let btnDropdown1 = document.getElementById("btnDropdown1");
  btnDropdown.addEventListener("click", alternarDropdown);


  document.addEventListener("click", fecharDropdown);
}


function alternarDropdown(event) {
  
  let menuDropdown  = document.getElementById("divMenuDropdown1");

  menuDropdown.classList.toggle("exibir1");
  event.stopPropagation();


function fecharDropdown(event) {
 
  if (!event.target.matches('.estiloBtnDropdown1')) {
   
    let menusDropdown = document.getElementsByClassName("conteudoDropdown1");
    

    for (let i = 0; i < menusDropdown.length; i++) {
      let menuAberto = menusDropdown[i];
      

      if (menuAberto.classList.contains('exibir1')) {
        menuAberto.classList.remove('exibir1');
      }
    }
  }
}
}
