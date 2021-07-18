import '../css/componentes.css';

export const burgerMenu = () => {
    let nav = document.getElementById("navegacion-principal");
    if (nav.style.display === "block") {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";
    }
}

bu