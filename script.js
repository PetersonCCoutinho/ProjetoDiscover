//Habilitando o botão Light/Dark usando o JavaScript//
function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //Mudando a imagem Light/Dark usando JavaScript
  // Selecionar a tag que queremos mudar primeiro:
  const img = document.querySelector("#profile img")
  // Condicional para mudar imagem:
  if (html.classList.contains("light")) {
    // se a Págiba estiver no light mode usar :
    img.setAttribute("src", "./assets/avatarpytulight.png")
    img.setAttribute('alt','Imagem Peterson Sunglasses')
  }
  //  sem light mode
  else {
    img.setAttribute("src", "./assets/avatarpytu.png")
  }
}
