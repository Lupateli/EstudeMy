
const professorRadio = document.getElementById("professorRadio");
const alunoRadio = document.getElementById("alunoRadio");
const loginContainer = document.getElementById("loginContainer");
const submitButton = document.getElementById("submitButton");
const alertBox = document.getElementById("customAlert");
const alertTitle = document.getElementById("alertTitle");
const alertMessage = document.getElementById("alertMessage");
const closeAlertButton = document.getElementById("closeAlert");

let userTypeSelected = null;

function showAlert(title, message1, message2) {
    alertTitle.textContent = title;
    alertMessage.innerHTML = `<p>${message1}</p><p class="secondary-message">${message2}</p>`;
    alertBox.style.display = "flex";
}

closeAlertButton.addEventListener("click", function () {
    alertBox.style.display = "none";

    if (userTypeSelected) {
        window.location.href = "login.html";
    }
});

professorRadio.addEventListener("change", function () {
    if (professorRadio.checked) {
        userTypeSelected = "professor";

        loginContainer.innerHTML = `
        <h1> Cadastro Professor <br> <div class="logo">
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

        document.getElementById("professorSubmit").addEventListener("click", function () {
            showAlert(
                "Cadastro",
                "Cadastro de Professor realizado com sucesso!",
                "Dados enviados para análise!"
            );
        });
    }
});

alunoRadio.addEventListener("change", function () {
    if (alunoRadio.checked) {
        userTypeSelected = "aluno";
    }
});

submitButton.addEventListener("click", function () {
    if (alunoRadio.checked) {
        showAlert("Cadastro", "Cadastro de Aluno realizado com sucesso!", "");
    } else if (!professorRadio.checked && !alunoRadio.checked) {
        showAlert("Erro", "Selecione um tipo de usuário antes de continuar.", "");
    }
});
