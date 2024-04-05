

function cadastro(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    alert("Você não está logado, clique no botão abaixo do \"Acesse Aqui\" para cadastrar-se!");
    let btnNone = document.getElementById("removeBtn");
    btnNone.classList.remove("btnNone");
    btnNone.classList.add("btnAfterNone");
}


document.getElementById("btn").addEventListener("click", cadastro);

 function alterarConteudo() {
    
    var elementoConteudo = document.getElementById("conteudo");

     elementoConteudo.innerHTML = "<p>Novo texto após clicar no botão!</p>";
}

