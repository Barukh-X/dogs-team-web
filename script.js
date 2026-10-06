const API = "http://127.0.0.1/dogs-team-api/public/api";
const formulario = document.getElementById("Logar");

formulario.addEventListener("submit", async (event) => {
  event.preventDefault();
  
  const logar = document.getElementById("user").value.trim();
  const senha = document.getElementById("password").value;
  
  try {
    const res = await fetch(`${API}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ logar, senha })
    });
    const dados = await res.json();
    if (!res.ok) throw new Error(dados.erro);
    
    window.location.href = "dashboard.html";
  } catch (erro) {
    alert(erro.message || "Erro ao conectar com o servidor.");
  }
});