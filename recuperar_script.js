const formulario = document.getElementById("RecuperarSenha");
const msgEl = document.getElementById("recuperar-msg");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();

  msgEl.textContent = "";

  // TODO: enviar { email } para o backend (recuperar-senha.php)
  console.log({ email });
  
  msgEl.textContent = "Se o e-mail existir, enviaremos um link de recuperação.";
});