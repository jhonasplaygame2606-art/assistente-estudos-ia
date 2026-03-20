async function analisar() {
  let pergunta = prompt("Cole a pergunta aqui:");

  let respostaTela = document.getElementById("resposta");
  respostaTela.innerText = "Analisando...";

  try {
    let resposta = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=SUA_CHAVE_AQUI", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `Responda a pergunta e diga a alternativa correta:\n${pergunta}`
              }
            ]
          }
        ]
      })
    });

    let dados = await resposta.json();

    let texto = dados.candidates[0].content.parts[0].text;

    respostaTela.innerText = texto;

  } catch (erro) {
    respostaTela.innerText = "Erro ao conectar com IA";
    console.error(erro);
  }
}
