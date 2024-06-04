const termos = [
  {
    termo: "Ameaça",
    definicao:
      "causa potencial de um incidente indesejado, que caso se concretize pode resultar em dano.",
    exemplo:
      "Um ataque de malware representa uma ameaça à segurança dos sistemas de uma empresa, podendo causar danos aos dados e interrupção das operações. Por isso, medidas de segurança, como antivírus atualizados, são essenciais.",
  },
  {
    termo: "Ativo",
    definicao:
      "é qualquer coisa que tenha valor para um indivíduo ou uma organização, tais como, hardware de computadores, equipamentos de rede, edificações, software, habilidade de produzir um produto ou fornecer um serviço, pessoas, imagem da organização, etc.",
    exemplo:
      "Os servidores de uma empresa são ativos importantes que precisam ser protegidos contra ameaças de segurança.",
  },
  {
    termo: "Confidencialidade",
    definicao:
      "garantir que apenas pessoas autorizadas tenham acesso à informação. Essa garantia deve ser obtida em todos os níveis, desde a geração da informação, passando pelos meios de transmissão, chegando a seu destino e sendo devidamente armazenada ou, se for necessário, destruída sem possibilidade de recuperação.",
    exemplo:
      "Os dados dos clientes devem ser tratados com confidencialidade, garantindo que apenas funcionários autorizados possam acessá-los.",
  },
  {
    termo: "Disponibilidade",
    definicao:
      "garantir que a informação sempre poderá ser acessada quando for necessário. Esse objetivo é conseguido através da continuidade de serviço dos meios tecnológicos, envolvendo políticas de backup, redundância e segurança de acesso.",
    exemplo:
      "Um sistema de e-commerce precisa garantir a disponibilidade para que os clientes possam fazer compras a qualquer momento.",
  },
  {
    termo: "Incidente de segurança",
    definicao:
      "é qualquer evento em curso ou ocorrido que contrarie a política de segurança, comprometa a operação do negócio ou cause dano aos ativos da organização.",
    exemplo:
      "Um ataque de negação de serviço (DDoS) que paralisa os servidores de uma empresa é considerado um incidente de segurança.",
  },
  {
    termo: "Impacto",
    definicao: "consequências de um incidente de segurança.",
    exemplo:
      "O impacto de um vazamento de dados pode incluir perda financeira, danos à reputação da empresa e violações de privacidade dos clientes.",
  },
  {
    termo: "Integridade",
    definicao:
      "garantir que a informação não seja alterada, a não ser por acesso autorizado. Isso significa dizer que uma informação íntegra não é necessariamente uma informação correta, mas sim que ela não foi alterada em seu conteúdo.",
    exemplo:
      "A assinatura digital é uma medida para garantir a integridade de documentos eletrônicos, garantindo que não tenham sido alterados desde a sua criação.",
  },
  {
    termo: "Risco",
    definicao:
      "combinação da probabilidade da concretização de uma ameaça e suas consequências.",
    exemplo:
      "Um sistema sem atualizações de segurança representa um alto risco de ser comprometido por ameaças como hackers.",
  },
  {
    termo: "Segurança da informação",
    definicao:
      "proteção de dados de propriedade das organizações contra ameaças diversas.",
    exemplo:
      "Um plano abrangente de segurança da informação inclui medidas como criptografia, firewalls e políticas de acesso.",
  },
  {
    termo: "Vulnerabilidade",
    definicao:
      "fragilidade ou limitação de um ativo que pode ser explorada por uma ou mais ameaças.",
    exemplo:
      "Um software desatualizado é uma vulnerabilidade que pode ser explorada por hackers para obter acesso não autorizado a sistemas.",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const glossario = document.getElementById("glossario");
  const searchInput = document.getElementById("searchInput");
  const letrasContainer = document.getElementById("letras");

  // Função para criar os botões das letras
  function criarBotoesLetras() {
    for (let i = 65; i <= 90; i++) {
      const letra = String.fromCharCode(i);
      const botao = document.createElement("button");
      botao.textContent = letra;
      botao.classList.add("letra");
      letrasContainer.appendChild(botao);
    }
  }

  // Função para atualizar a lista de termos exibidos
  function atualizarLista(termosFiltrados) {
    glossario.innerHTML = "";
    termosFiltrados.forEach((item) => {
      const article = document.createElement("article");
      const h2 = document.createElement("h2");
      const pDefinicao = document.createElement("p");
      const pExemplo = document.createElement("p");

      article.classList.add("term");
      h2.textContent = item.termo;
      pDefinicao.innerHTML = `<strong>Definição:</strong> ${item.definicao}`;
      pExemplo.innerHTML = `<strong>Exemplo:</strong> ${item.exemplo}`;

      article.appendChild(h2);
      article.appendChild(pDefinicao);
      article.appendChild(pExemplo);

      glossario.appendChild(article);
    });
  }

  // Adiciona ouvinte de evento para cada botão de letra
  letrasContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("letra")) {
      const letraSelecionada = event.target.textContent;
      const termosFiltrados = termos.filter((item) =>
        item.termo.toLowerCase().startsWith(letraSelecionada.toLowerCase())
      );
      atualizarLista(termosFiltrados);
    }
  });

  searchInput.addEventListener("input", function () {
    const termoPesquisado = searchInput.value.trim().toLowerCase();
    const termosFiltrados = termos.filter((item) =>
      item.termo.toLowerCase().includes(termoPesquisado)
    );
    atualizarLista(termosFiltrados);
  });

  // Carregar todos os termos ao iniciar
  atualizarLista(termos);
  criarBotoesLetras();
});
