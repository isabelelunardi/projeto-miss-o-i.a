const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a cor de faixa mais graduada do judô?",
        alternativas: [
            "A) Preta",
            "B) Vermelha",
            {
                texto: "A graduação mais alta do judô é a faixa vermelha.",
                afirmacao: "afirmação"
            },
            {
            }

        ]
    },
    {
        enunciado: "Qual o nome do funfador de judô?",
        alternativas: [
            "A) Morihei Ueshiba",
            "B) Jigoro Kano",
            {
                texto: "O fundador do judô é o sensei jigoro kano.",
                afirmacao: "afirmação"
            },
            {
            }
        ]
    },
    {
        pergunta: "Em que país o judô foi criado?",
        alternativas: [
            "A) Japão",
            "B) Coreia",
            {
                texto: "O judô foi criado no Japão em 1882.",
                afirmacao: "afirmação"
            },
            {
            }

        ]
    },
    {
        enunciado: "Qual é a palavra japonesa usada para marcar um ponto em uma luta de judô?",
        alternativas: [
            "A) Ippon",
            "B) Waza-ari",
            {
                texto: "O termo usado durante uma luta de judô para informar que um determinado atleta faz um ponto é Ippon.",
                afirmacao: "afirmação"
            },
            {
            }


        ]
    },
    {
        enunciado: "Como se chama a técnica de estrangulamento no judô?",
        alternativas: [
            "A) Kansetsu-waza",
            "B) Shime-waza",
            {
                texto: "A técnica de estrangulamento é chamada de Shime-waza",
                afirmacao: "afirmação"
            },
            {
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta()