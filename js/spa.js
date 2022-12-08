const section = document.querySelector(".software");
const botao = document.querySelector(".button_spa");
const title = document.querySelector(".spa_title");
const desc = document.querySelector(".spa_description");
let page = "inicial";

const spaImg = document.querySelector(".old-img");

const botaoOldHtml = botao.innerHTML;
const titleOldHtml = title.innerHTML;
const descOldHtml = desc.innerHTML;
const spaImgOldSrc = spaImg.getAttribute("src");

botao.addEventListener("click", () => {
  if (page === "inicial") {
    spaImg.setAttribute("src", "images/atitus.jpg");
    section.classList.add("software-spa");
    title.innerHTML = `Uma SPA funciona dessa forma (=`;
    desc.innerHTML = `Olha só funcionou!`;
    botao.classList.add("button_spa_clicked");
    botao.innerHTML = "Voltar";
    page = "spa";
  } else if (page === "spa") {
    spaImg.setAttribute("src", spaImgOldSrc);
    section.classList.remove("software-spa");
    title.innerHTML = titleOldHtml;
    desc.innerHTML = descOldHtml;
    botao.classList.remove("button_spa_clicked");
    botao.innerHTML = botaoOldHtml;
    page = "inicial";
  }
});
