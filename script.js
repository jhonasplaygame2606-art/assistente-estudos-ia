async function analisar() {
  let pergunta = prompt("Cole a pergunta aqui:");

  let respostaTela = document.getElementById("resposta");
  respostaTela.innerText = "Analisando...";

  let resposta = await fetch("https://api.exemplo.com/responder", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ pergunta })
  });

  let dados = await resposta.json();

  respostaTela.innerText = `
Resposta: ${dados.resposta}

Explicação: ${dados.explicacao}
  `;
}
