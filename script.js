const formulario = document.getElementById("Logar");

formulario.addEventListener("submit",function(event) {
  event.preventDefault();
  const usuario = document.getElementById("user").value;
  const senha = document.getElementById("password").value;
  
  console.log(usuario);
  console.log(senha);
});