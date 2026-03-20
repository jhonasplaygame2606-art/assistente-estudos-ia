// =============================
// 🔑 COLE SUA API KEY AQUI
// =============================
const API_KEY = "AIzaSyDbE-9a5Cz3o9sEbPqYRfd5Ye94QhmdDGw";


// =============================
// 🚀 FUNÇÃO PRINCIPAL
// =============================
async function analisar() {
  let pergunta = prompt("Cole a pergunta aqui:");

  let respostaTela = document.getElementById("resposta");
  respostaTela.innerText = "Analisando...";

  try {
    let resposta = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: pergunta
                }
              ]
            }
          ]
        })
      }
    );

    let dados = await resposta.json();

    console.log("RESPOSTA DA IA:", dados);

    if (dados.candidates && dados.candidates.length > 0) {
      let texto = dados.candidates[0].content.parts[0].text;
      respostaTela.innerText = texto;
    } else {
      respostaTela.innerText = "Erro: resposta vazia da IA";
    }

  } catch (erro) {
    respostaTela.innerText = "Erro ao conectar com IA";
    console.error("ERRO:", erro);
  }
}
