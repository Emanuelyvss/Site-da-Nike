function validacao() {

    let login = document.querySelector("#email").value;
    let senha = document.querySelector("#senha").value;


    if (login == "admin" && senha == "admin") {
        alert("Sucesso")
        location.href = "home.html"
    } else {
        alert("Usuário ou senha incorretos!")
    }

}

