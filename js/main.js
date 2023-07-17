const form = document.getElementById("novoItem")
const lista = document.getElementById('lista')
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach( (elemento) => {
    criaElemento(elemento)
} )


form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    
    const nome = evento.target.elements['nome'].value
    const quantidade = evento.target.elements['quantidade'].value

    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    }
    
    criaElemento(itemAtual);

    itens.push(itemAtual)

    localStorage.setItem("itens", JSON.stringify(itens))

    evento.target.elements['nome'] = ""
    evento.target.elements['quantidade'] = ""
})

function criaElemento(item) {
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += item.nome
    lista.appendChild(novoItem)
}