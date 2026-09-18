const formulario = document.getElementById("Logar");

formulario.addEventListener("submit",function(event) {
  event.preventDefault();
  const usuario = document.getElementById("user").value;
  const senha = document.getElementById("password").value;
  
  fetch("http://localhost/dogs-team-api/Back-end/login/", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    credentials: "include",
    body: JSON.stringify({ username: "usuario, senha: senha"})
  }).then(response => {
    return response.json().then(dadosLogin => {
      if(!response.ok) {
        throw new Error(dadosLogin.erro);
      }
      return dados;
    });
  }).then(resposta => {
    window.location.href = "dashboard.html";
  }).catch(erro => {
    alert(erro.message);
  });
  
});