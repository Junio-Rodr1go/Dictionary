function searchLetter(where, letter, pastcontent) {
    const content = document.querySelector('section')


    const dd = {
        A: ["Acessibilidade: Princípios e práticas para tornar interfaces utilizáveis por pessoas com deficiências visuais, motoras, auditivas ou cognitivas."],
        B: ["Briefing: Documento ou conversa inicial com informações fundamentais sobre o projeto, objetivos, público-alvo e necessidades do cliente."],
        C: ["Composição: Organização visual dos elementos em um layout para criar equilíbrio, harmonia e clareza."],
        D: ["Design Responsivo: Técnica de design que adapta o conteúdo a diferentes tamanhos de tela (desktop, tablet, celular)."],
        E: ["Elementos visuais: Componentes gráficos como linhas, formas, cores, texturas e imagens usados para criar a interface."],
        F: ["Fonte: Conjunto de caracteres tipográficos com estilo e tamanho específicos, usados para compor textos."],
        G: ["Grid: Estrutura de colunas e linhas que ajuda a organizar o conteúdo visual de forma consistente."],
        H: ["Hierarquia visual: Organização dos elementos para guiar o olhar do usuário e destacar o que é mais importante."],
        I: ["Ícones: Representações visuais simples usadas para comunicar ações, conteúdos ou funções de forma rápida."],
        J: ["Jornada do usuário: Caminho que o usuário percorre dentro de um site ou aplicativo para atingir um objetivo."],
        K: ["Kerning: Ajuste do espaço entre letras para melhorar a legibilidade e a estética do texto."],
        L: ["Layout: Disposição dos elementos visuais em uma página ou tela."],
        M: ["Mockup: Simulação visual de como o produto final vai ficar, geralmente mais detalhada que o wireframe."],
        N: ["Navegação: Forma como os usuários se movimentam dentro de uma interface digital."],
        O: ["Objetivos de design: Metas que o projeto busca alcançar, como informar, vender ou entreter."],
        P: ["Paleta: Conjunto de cores escolhidas para usar de forma consistente em um projeto."],
        Q: ["Qualidade visual: Grau de refinamento, nitidez e estética de um design."],
        R: ["Responsive Design: Técnica de design que adapta o conteúdo a diferentes tamanhos de tela (repetido aqui como termo em inglês)."],
        S: ["Simetria: Distribuição equilibrada de elementos visuais ao longo de um eixo."],
        T: ["Tipografia: Estudo e uso das fontes, estilos e espaçamentos no design de texto."],
        U: ["Usabilidade: Facilidade com que um usuário interage com uma interface e realiza tarefas."],
        V: ["Vetores: Imagens compostas por formas geométricas que não perdem qualidade ao serem redimensionadas."],
        W: ["Wireframe: Esboço simples da estrutura de uma página, focando em funcionalidade e navegação."],
        X: ["XD (Adobe XD): Ferramenta de design e prototipagem de interfaces usada para criar layouts, wireframes e experiências interativas."],
        Z: ["Z-pattern: Forma como os olhos percorrem a tela em formato de 'Z', muito usada em layouts visuais para guiar a leitura."]
    }

    const fi = {
        A: [
            "Antivirus: Software projetado para detectar, prevenir e remover vírus de um computador ou rede.",
            "Atualização (Update): Processo de modificar ou melhorar software ou hardware para corrigir problemas ou adicionar novas funcionalidades."
        ],
        B: [
            "Barramento (Bus): Conjunto de linhas de comunicação usadas para transferir dados entre diferentes componentes de um computador.",
            "BIOS/UEFI: Firmware responsável por inicializar o hardware e o sistema operacional em um computador. A UEFI é uma versão mais moderna do BIOS."
        ],
        C: [
            "Compilador: Programa que traduz código fonte de uma linguagem de programação para código de máquina que o computador pode executar.",
            "Cooler/Heatsink: Sistema de resfriamento usado para dissipar o calor gerado pelos componentes eletrônicos, como o processador, para evitar superaquecimento."
        ],
        D: [
            "Driver: Software que permite que o sistema operacional interaja com o hardware do computador, como impressoras, placas de vídeo, entre outros."
        ],
        E: [
            "Endereço IP: Identificador único atribuído a cada dispositivo conectado a uma rede, seja local ou a internet."
        ],
        F: [
            "Firmware: Software incorporado em dispositivos eletrônicos, geralmente armazenado em memória ROM, que controla o funcionamento do hardware.",
            "Fonte de Alimentação: Componente que converte a energia elétrica da rede em energia que o computador e seus componentes utilizam."
        ],
        G: [
            "GPU (Placa de vídeo): Unidade de Processamento Gráfico responsável pelo processamento de gráficos e imagens, essencial para jogos e tarefas de design gráfico."
        ],
        H: [
            "HD/SSD: HD (Hard Drive) é um disco rígido usado para armazenar dados de forma permanente. SSD (Solid State Drive) é uma alternativa mais rápida e eficiente em termos de energia, utilizando memória flash."
        ],
        I: [
            "Interface gráfica (GUI): Sistema de interação entre o usuário e o computador que utiliza gráficos, ícones e outros elementos visuais, em vez de comandos textuais."
        ],
        J: [
            "Java: Linguagem de programação orientada a objetos, usada para criar aplicativos em diversas plataformas, desde aplicativos móveis até sistemas corporativos."
        ],
        K: [
            "Kernel: Parte fundamental de um sistema operacional, responsável por gerenciar os recursos do hardware e fornecer uma interface para que o software interaja com o hardware."
        ],
        L: [
            "LAN (Rede Local): Rede de computadores que conecta dispositivos próximos, como em uma casa ou escritório, geralmente usando cabo ou Wi-Fi."
        ],
        M: [
            "Memória RAM: Memória de acesso aleatório, usada pelo computador para armazenar temporariamente dados e programas em execução.",
            "Middleware: Software que facilita a comunicação e a gestão de dados entre sistemas diferentes ou entre componentes de uma aplicação."
        ],
        N: [
            "Nuvem: Tecnologia que permite o armazenamento e processamento de dados e serviços pela internet, ao invés de depender de servidores locais."
        ],
        O: [
            "Overclocking: Processo de aumentar a velocidade de operação de um componente do computador (como o processador ou a placa de vídeo) além das especificações do fabricante, visando melhorar o desempenho."
        ],
        P: [
            "Placa-mãe (Motherboard): Placa principal de um computador, responsável por conectar todos os componentes e permitir a comunicação entre eles.",
            "Portas USB: Interfaces usadas para conectar dispositivos externos ao computador, como mouse, teclado, impressora, entre outros.",
            "Processador (CPU): Unidade Central de Processamento, o 'cérebro' do computador, responsável por executar as instruções dos programas."
        ],
        Q: [
            "Quad-core: Tipo de processador com quatro núcleos, permitindo o processamento paralelo de várias tarefas ao mesmo tempo, melhorando o desempenho."
        ],
        R: [
            "RAID: Redundant Array of Independent Disks, uma tecnologia de armazenamento que combina múltiplos discos rígidos para melhorar desempenho ou redundância de dados."
        ],
        S: [
            "Software (Programas e Sistemas Operacionais): Programas são aplicações de software que realizam tarefas específicas, enquanto Sistemas Operacionais (SO) são softwares que gerenciam os recursos do computador e permitem a execução dos programas.",
            "Sistemas Operacionais (SO): Software que gerencia o hardware do computador e oferece uma interface para interação com o usuário e outros programas, como Windows, Linux, e macOS.",
            "Sistema de arquivos (File System): Método utilizado para organizar e armazenar dados em dispositivos de armazenamento, como discos rígidos e SSDs."
        ],
        T: [
            "TCP/IP: Conjunto de protocolos de comunicação usados para conectar dispositivos em redes, como a internet."
        ],
        U: [
            "USB: Universal Serial Bus, uma tecnologia de conexão que permite a transferência de dados e a alimentação elétrica entre dispositivos, como computadores e periféricos (teclados, mouses, pen drives, etc)."
        ],
        V: [
            "Virtualização: Tecnologia que permite criar versões simuladas de dispositivos ou sistemas operacionais, permitindo a execução de múltiplos sistemas em um único hardware."
        ],
        X: [
            "XML: Linguagem de marcação extensível, usada para armazenar e transportar dados de maneira estruturada, amplamente utilizada na troca de informações entre sistemas."
        ]
    };
    const pw = {
        A: [
            "Atributo: Informação adicional em uma tag HTML que modifica seu comportamento. Exemplo: &lt;a href=\"https://example.com\">Link</a&gt;.",
            "Alt (atributo): Define um texto alternativo para imagens, útil para acessibilidade e SEO. Exemplo: &lt;img src=\"imagem.jpg\" alt=\"Descrição da imagem\"&gt;."
        ],
        B: [
            "Body: Elemento <body>, onde fica o conteúdo visível da página HTML.",
            "Break Line (&lt;br&gt;): Tag para quebrar linha dentro de um texto."
        ],
        C: [
            "CSS (Cascading Style Sheets): Linguagem usada para estilizar elementos HTML.",
            "Class (atributo): Define uma ou mais classes para um elemento, útil para estilização com CSS e manipulação com JavaScript. Exemplo: &lt;div class=\"caixa\">."
        ],
        D: [
            "DOCTYPE: Declaração que informa ao navegador a versão do HTML usada no documento.",
            "Div: Elemento &lt;div&gt; usado para agrupar e estruturar conteúdo."
        ],
        E: [
            "Elemento: Estrutura completa de uma tag HTML, incluindo abertura, conteúdo e fechamento, se aplicável.",
            "Em (ênfase): Tag &lt;em> para destacar um texto em itálico."
        ],
        F: [
            "Formulário: Conjunto de elementos HTML (&lt;form>, &lt;input>, &lt;button>) usados para entrada de dados do usuário."
        ],
        H: [
            "Head: Seção &lt;head> do HTML que contém metadados, links para CSS, scripts e título da página.",
            "Header: Elemento &lt;header> usado para cabeçalhos de páginas ou seções.",
            "Hiperlink: Criado com a tag &lt;a>, permite navegar para outras páginas."
        ],
        I: [
            "ID (atributo): Identificador único para um elemento HTML.",
            "Iframe: Elemento &lt;iframe> usado para incorporar páginas dentro de outras páginas.",
            "Imagem: Elemento &lt;img> usado para exibir imagens."
        ],
        L: [
            "Lista Ordenada (&lt;ol>): Lista numerada.",
            "Lista Não Ordenada (&lt;ul>): Lista com marcadores."
        ],
        M: [
            "Meta: Elemento &lt;meta> usado para metadados, como codificação e SEO."
        ],
        N: [
            "Nav: Elemento &lt;nav> usado para menus de navegação."
        ],
        P: [
            "Parágrafo (&lt;p>): Tag para estruturar textos.",
            "Placeholder: Atributo usado em &lt;input> para exibir um texto de dica dentro do campo."
        ],
        S: [
            "Section: Elemento &lt;section> usado para dividir seções do conteúdo.",
            "Span: Elemento &lt;span> usado para estilizar partes específicas do texto."
        ],
        T: [
            "Tabela: Criada com &lt;table>, &lt;tr> (linha), &lt;td> (célula).",
            "Title: Define o título da página (exibido na aba do navegador).",
            "Tags: Marcadores HTML, como &lt;h1>, &lt;p>, &lt;a>."
        ],
        U: [
            "URL (Uniform Resource Locator): Endereço de um recurso na web."
        ]
    };

    const tpa = {
        A: [
            "Algoritmo: Conjunto de instruções ou regras bem definidas que resolvem um problema ou executam uma tarefa passo a passo."
        ],
        B: [
            "Busca Binária: Método eficiente para encontrar um elemento em uma lista ordenada, dividindo o espaço de busca pela metade a cada passo."
        ],
        C: [
            "Complexidade: Medida da eficiência de um algoritmo em termos de tempo (tempo de execução) e espaço (uso de memória)."
        ],
        D: [
            "Dividir e Conquistar: Estratégia de algoritmos que resolve um problema dividindo-o em subproblemas menores, resolvendo cada um individualmente e combinando os resultados."
        ],
        E: [
            "Estrutura de Dados: Organização e armazenamento de dados que permite acesso e modificação eficientes. Ex: listas, filas, pilhas, árvores."
        ],
        F: [
            "Função Recursiva: Função que chama a si mesma para resolver subproblemas, usada frequentemente em algoritmos como o de Fibonacci ou fatorial."
        ],
        G: [
            "Grafo: Estrutura de dados composta por vértices (nós) e arestas (ligações), usada para representar redes, caminhos e conexões."
        ],
        H: [
            "Hashing: Técnica que transforma dados em um código (hash) de tamanho fixo, usada em buscas rápidas e armazenamento eficiente."
        ],
        I: [
            "Iteração: Processo de repetição de um bloco de código diversas vezes, comum em estruturas como loops (for, while)."
        ],
        J: [
            "Join (junção): Operação usada em algoritmos de banco de dados para combinar dados de duas ou mais tabelas com base em uma chave comum."
        ],
        K: [
            "K-means: Algoritmo de agrupamento (clustering) que particiona dados em k grupos com base na distância entre pontos. Muito usado em machine learning."
        ],
        L: [
            "Laço de Repetição (Loop): Estrutura de controle usada para repetir comandos até que uma condição seja satisfeita."
        ],
        M: [
            "Merge Sort: Algoritmo de ordenação baseado na técnica de dividir e conquistar, que divide a lista ao meio, ordena as partes e as junta ordenadamente."
        ],
        N: [
            "Notação Big O: Forma de expressar a complexidade de um algoritmo, indicando seu desempenho em relação ao crescimento da entrada."
        ],
        O: [
            "Ordenação: Processo de organizar elementos em uma sequência específica, como crescente ou decrescente. Ex: Bubble Sort, Quick Sort."
        ],
        P: [
            "Programação Dinâmica: Técnica que resolve problemas complexos quebrando-os em subproblemas menores e armazenando os resultados intermediários para evitar cálculos repetidos."
        ],
        Q: [
            "Quick Sort: Algoritmo eficiente de ordenação que escolhe um elemento como pivô e particiona a lista em sublistas menores e maiores que o pivô."
        ],
        R: [
            "Recursão: Técnica onde uma função chama a si mesma para resolver subproblemas. É usada em algoritmos de árvore, busca e ordenação."
        ],
        S: [
            "Search (Busca): Processo de encontrar um valor ou elemento em uma estrutura de dados. Pode ser linear, binária ou em grafos."
        ],
        T: [
            "Tabela Hash: Estrutura que usa funções de hash para mapear chaves a valores de forma eficiente, permitindo buscas quase instantâneas."
        ],
        U: [
            "URI (Identificador Uniforme de Recurso): Frequentemente usado em algoritmos de rede para identificar recursos na web de forma única."
        ],
        V: [
            "Vetores (Arrays): Estrutura de dados que armazena elementos em posições contíguas de memória, permitindo acesso direto via índice."
        ],
        W: [
            "While: Estrutura de repetição que executa um bloco de código enquanto uma condição for verdadeira. Muito usada em algoritmos iterativos."
        ],
        X: [
            "XOR (Exclusive OR): Operação lógica usada em algoritmos de criptografia, compressão e manipulação de bits. Retorna verdadeiro se os bits forem diferentes."
        ],
        Y: [
            "Yield: Palavra-chave usada em linguagens como Python para pausar e retornar valores de uma função geradora, economizando memória em grandes iterações."
        ],
        Z: [
            "Z-Algorithm: Algoritmo eficiente usado em busca de padrões em strings, baseado na criação de um array Z para comparar prefixos repetidos."
        ]
    };

    const locais = {
        "dd": dd,
        "tpa": tpa,
        "fi": fi,
        "pw": pw,

    }

    const array = locais[where][letter]
    content.innerHTML = ""

    try {
        array.forEach(e => {
            content.innerHTML += `
            <div class="section">  <h1 class="letter">${letter}</h1>  <p class="mean">${e}</p></div>`
        })
    }
    catch {
        if (letter != "All") {
            content.innerHTML = pastcontent.innerHTML
            alert("Sinto muito, não há termos com essa letra.")
        } else {
            content.innerHTML = pastcontent.innerHTML
        }
    }

}

document.addEventListener('DOMContentLoaded', () => {
    const pastcontent = document.querySelector('section').cloneNode(true)
    const select = document.querySelector("#lettersSelect")
    const target = document.querySelector(".TargetButton")

    let where = (target.innerHTML).toLowerCase()

    let anterior = "All"

    select.onclick = e => {
        if (anterior != select.value) {

            anterior = select.value

            console.log(select.value)

            searchLetter(where, select.value, pastcontent)
        }
    }

})