initialSubmit.addEventListener("click", function () {
    if (professorRadio.checked) {
        loginContainer.innerHTML = `
        <h1> Professor <br> <div class="logo">
            <span class="E">E</span>
            <span class="S">S</span>
            <span class="T">T</span>
            <span class="U">U</span>
            <span class="D">D</span>
            <span class="E2">E</span>
            <span class="ponto">.</span>
            <span class="M">M</span>
            <span class="Y">Y</span>
        </div></h1>
            <input type="text" placeholder="Nome Completo" name="nomeCompleto" class="inputs" required>
            <input type="text" placeholder="Registro Profissional | CFEP" name="idProfessor" class="inputs" required>
            <input type="email" placeholder="Email Institucional" name="emailProfessor" class="inputs" required>
            <input type="password" placeholder="Crie uma Senha" name="senhaProfessor" class="inputs" required>
            <input type="password" placeholder="Confirme sua Senha" name="confirmaSenhaProfessor" class="inputs" required>
            <div class="cadastros">
                <button class="cadastrar" id="professorSubmit">Cadastrar-se</button>
            </div>`;

        // Adiciona evento ao botão de cadastro para Professor
        document.getElementById("professorSubmit").addEventListener("click", function () {
            alert("Cadastro de Professor realizado com sucesso!                                 Dados enviado para analise!");
            window.location.href = "main_page.html";
        });
    } else if (alunoRadio.checked) {
        alert("Cadastro realizado com sucesso!");
        window.location.href = "main_page.html";
    } else {
        alert("Selecione um tipo de usuário antes de continuar.");
    }
});