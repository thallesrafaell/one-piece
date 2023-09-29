//constantes dos botoes
const btnLuffy = document.querySelector('#btn-luffy')
const btnZoro = document.querySelector('#btn-zoro')
const btnNami = document.querySelector('#btn-nami')
const btnChopper = document.querySelector('#btn-chopper')
const btnSanji =document.querySelector('#btn-sanji')

// constates do conteudo
const luffy = document.querySelector('#luffy')
const zoro = document.querySelector('#zoro')
const nami = document.querySelector('#nami')
const chopper =document.querySelector('#chopper')
const sanji =document.querySelector('#sanji')

//funçao luffy
btnLuffy.addEventListener('click', () => {
//add classe selecionado
    btnLuffy.classList.add('selecionado')
    luffy.classList.add('selecionado')

//remove  class selecionado de outros botoes
    btnZoro.classList.remove('selecionado')
    btnNami.classList.remove('selecionado')
    btnChopper.classList.remove('selecionado')
    btnSanji.classList.remove('selecionado')

// remove selecionado do conteudo
    zoro.classList.remove('selecionado')
    nami.classList.remove('selecionado')
    chopper.classList.remove('selecionado')
    sanji.classList.remove('selecionado')
})


//funçao do zoro
btnZoro.addEventListener('click', () => {
    //add classe selecionado
    btnZoro.classList.add('selecionado')
    zoro.classList.add('selecionado')

//remove  class selecionado de outros botoes
    btnLuffy.classList.remove('selecionado')
    btnNami.classList.remove('selecionado')
    btnChopper.classList.remove('selecionado')
    btnSanji.classList.remove('selecionado')

// remove selecionado do conteudo
    luffy.classList.remove('selecionado')
    nami.classList.remove('selecionado')
    chopper.classList.remove('selecionado')
    sanji.classList.remove('selecionado')    
})

//funçao do nami
btnNami.addEventListener('click', () => {
    //add classe selecionado
    btnNami.classList.add('selecionado')
    nami.classList.add('selecionado')

//remove  class selecionado de outros botoes
    btnLuffy.classList.remove('selecionado')
    btnZoro.classList.remove('selecionado')
    btnChopper.classList.remove('selecionado')
    btnSanji.classList.remove('selecionado')

// remove selecionado do conteudo
    luffy.classList.remove('selecionado')
    zoro.classList.remove('selecionado')
    chopper.classList.remove('selecionado')
    sanji.classList.remove('selecionado')    
})

//funçao do chopper
btnChopper.addEventListener('click', () => {
    //add classe selecionado
    btnChopper.classList.add('selecionado')
    chopper.classList.add('selecionado')

//remove  class selecionado de outros botoes
    btnLuffy.classList.remove('selecionado')
    btnZoro.classList.remove('selecionado')
    btnNami.classList.remove('selecionado')
    btnSanji.classList.remove('selecionado')

// remove selecionado do conteudo
    luffy.classList.remove('selecionado')
    zoro.classList.remove('selecionado')
    nami.classList.remove('selecionado')
    sanji.classList.remove('selecionado')    
})

//funçao do Sanji
btnSanji.addEventListener('click', () => {
    //add classe selecionado
    btnSanji.classList.add('selecionado')
    sanji.classList.add('selecionado')

//remove  class selecionado de outros botoes
    btnLuffy.classList.remove('selecionado')
    btnZoro.classList.remove('selecionado')
    btnNami.classList.remove('selecionado')
    btnChopper.classList.remove('selecionado')

// remove selecionado do conteudo
    luffy.classList.remove('selecionado')
    zoro.classList.remove('selecionado')
    nami.classList.remove('selecionado')
    chopper.classList.remove('selecionado')    
})