function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value) // pega o valor dentro do input
    const max = Math.floor(document.querySelector(".input-max").value) // pega o valor dentro do input

    const result = Math.floor(Math.random() * (max - min + 1)) + min; // gera um número aleatório entre o min e o max
    

    alert(result)
    
}