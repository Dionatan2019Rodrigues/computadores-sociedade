// main.js
document.addEventListener("DOMContentLoaded", function () {
    // Função para verificar os campos antes do redirecionamento
    function verificarCampos() {
        var emailCpfTelefone = document.querySelector('input[type="email"]').value;
        var senha = document.querySelector('input[type="password"]').value;

        // Verificar se os campos estão preenchidos
        if (!emailCpfTelefone || !senha) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Verificar se a senha tem pelo menos 8 caracteres
        if (senha.length < 8) {
            alert("A senha deve ter pelo menos 8 caracteres.");
            return;
        }

        // Redirecionar para outro site
        window.location.href = "armazem.html";
    }

    // Adicionar eventos de clique aos botões
    document.querySelector('.botao[value="Entrar"]').addEventListener('click', function () {
        verificarCampos();
    });

    document.querySelector('.botao[value="Entrar Sem Login"]').addEventListener('click', function () {
        verificarCampos();
    });
});