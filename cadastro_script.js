const formulario = document.getElementById("Cadastrar");
const erroEl = document.getElementById("cadastro-erro");
const API = "http://127.0.0.1/dogs-team-api/public/api";

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
  
  try {
  const res = await fetch(`${API}/cadastrar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, username, email, senha })
  });
  const dados = await res.json();
  if (!res.ok) throw new Error(dados.erro);

  window.location.href = "index.html";
} catch (erro) {
  erroEl.textContent = erro.message || "Erro ao conectar com o servidor.";
}
});