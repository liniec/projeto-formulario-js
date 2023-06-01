const inputs = document.querySelectorAll(".informacao-usuario");
const botaoEnviar = document.getElementById('botaoEnviar');

botaoEnviar.addEventListener('click', function(event) {
    event.preventDefault();
    validarCampos();
});

inputs.forEach((input) => {
    input.addEventListener('input', () => {
        if (input.value !== "") {
            input.classList.add("campo-preenchido");
        } else {
            input.classList.remove("campo-preenchido");
        }
    });

    const mensagemErro = input.nextElementSibling;
    mensagemErro.classList.add('mensagemErro');
});

function validarCampos() {
    inputs.forEach((input) => {
        const campoVazio = input.value === "";
        const mensagemErro = input.nextElementSibling;
        if (campoVazio) {
            input.classList.add("invalido");
            mensagemErro.innerHTML = "Campo obrigatório";
        } else {
            input.classList.remove("invalido");
            mensagemErro.innerHTML = "";
        }
    });
}