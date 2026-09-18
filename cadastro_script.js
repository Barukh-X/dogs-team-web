const formulario = document.getElementById("Cadastrar");
const erroEl = document.getElementById("cadastro-erro");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const nome = document.getElementById("nome").value.trim();
  const username = document.getElementById("user").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("password").value;
  const confirmarSenha = document.getElementById("confirm_password").value;
  
  erroEl.textContent = "";
  
  if (senha !== confirmarSenha) {
    erroEl.textContent = "As senhas não coincidem.";
    return;
  }
  
  if (senha.length < 6) {
    erroEl.textContent = "A senha deve ter pelo menos 6 caracteres.";
    return;
  }
  
  fetch('../Back-end/cadastro.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome, username, email, senha })
    })
    .then(res => res.json())
    .then(resposta => {
      if (resposta.sucesso) {
        window.location.href = 'index.html';
      } else {
        erroEl.textContent = resposta.mensagem;
      }
    })
    .catch(() => {
      erroEl.textContent = "Erro ao conectar com o servidor.";
    });
});