function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    //pegar a imagem
const img = document.querySelector("#profile img")

    if (html.classList.contains('light')) {
        img.setAttribute('src', './Avatar-dark.png')
        img.setAttribute('alt', 'imagem-dark')
        
    }else{
       img.setAttribute('src', './avatar.png')
       img.setAttribute('alt', 'imagem-light')
    }

}
