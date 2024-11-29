document.addEventListener("DOMContentLoaded", function() {
    const forgotPasswordLink = document.getElementById("forgotPassword");
    const loginContainer = document.getElementById("loginContainer");

    // Lógica para clicar em "Esqueci a senha"
    forgotPasswordLink.addEventListener("click", function(event) {
        event.preventDefault(); // Impede o link de navegar para outra página

        // Muda o conteúdo do formulário para apenas o campo de email
        loginContainer.innerHTML = `
            <h1>Recuperação de Senha</h1>
            <p>Por favor, insira o seu email para redefinir a senha:</p>
            <input type="email" placeholder="Email" name="Email" class="inputs" id="Email" required>
            <div class="buttons">
                <button class="entrar" onclick="handlePasswordRecovery()">ENVIAR</button>
                <button class="cadastrar-se" onclick="goBack()">VOLTAR</button>
            </div>
        `;
    });
});

// Função para simular a recuperação de senha
function handlePasswordRecovery() {
    const email = document.getElementById("Email").value;

    if (email.trim() === "") {
        alert("Por favor, insira o email para continuar.");
        return;
    }

    // Aqui pode-se adicionar a lógica de envio do email para recuperação
    alert(`Um link de recuperação foi enviado para o email: ${email}`);
}

// Função para voltar ao formulário original de login
function goBack() {
    // Recarrega a página para voltar ao estado original do formulário
    window.location.reload();
}
