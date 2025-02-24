# Case Técnico Para Seleção Desenvolvedor Full Stack

Case Desenvolvimento - Gamificação em the news

## Regras

A baixo estão as regras do Case

### 📌 Contexto

O **the news** quer aumentar o engajamento dos leitores da sua newsletter através de **gamificação**. Inspirado no Duolingo, a ideia é premiar leitores que mantêm uma **sequência de aberturas** das newsletters, incentivando-os a interagir com os conteúdos enviados regularmente.

Para isso, iremos esconder dentro da edição um link, que os leitores poderão acessar uma **área logada (auto login via parâmetro ou não)** onde visualizarão seu **streak de leituras** (quantos dias seguidos abriram uma newsletter) e suas estatísticas pessoais. Além disso, a plataforma terá um **dashboard administrativo**, permitindo à equipe da waffle acompanhar as aberturas e analisar métricas de engajamento.

Os dados de abertura dos leitores serão fornecidos via **webhook** [aqui](https://app.thenewscc.com.br/case), contendo informações de testes sobre os e-mails que “abriram” o link do e-mail. Nesse mesmo link você vai receber uma API temporária para simular uma requisição de consulta à nossa plataforma de envio de e-mails, a [**beehiiv](https://developers.beehiiv.com/welcome/getting-started).**

### 📊 Base de Dados

O **FETCH GET** do webhook acontecerá a cada 1 hora até dia **24/02/2025**, com os seguintes dados:

- e-mail: o Beehiiv nos dá – via parâmetros dentro das edições – o {{email}} do leitor
- id: post_{{resource_id}} único de cada edição.
- UTMs (Variáveis, pode não conter):

```javascript
utm_source = "tiktok";
utm_medium = "socialpaid";
utm_campaign = "12/12/2024";
utm_channel = "web";
```

Os candidatos deverão processar esses dados para:

1. Criar **uma área logada**, onde os leitores poderão visualizar suas próprias estatísticas e streaks.
2. Criar um painel administrativo, onde a equipe da Waffle poderá monitorar as métricas gerais de engajamento.

### ☕︎ APIs de Exemplo

- [Beehiiv getPost: ](https://backend.testeswaffle.org/webhooks/case/publication/teste/post/post_00000000-0000-0000-0000-000000000000)

### 🚀 Desafio

O candidato deverá desenvolver uma plataforma web funcional que permita aos leitores acompanharem seu desempenho e possibilite à equipe da waffle visualizar insights estratégicos sobre engajamento. A criatividade é o limite, porém precisamos entender se você sabe das stacks obrigatórias: SQL, React, TypeScript.

### 🧐 Dúvidas

- Posso usar Prisma ou ORM? Se conseguir mostrar que a ORM é compatível com Cloudflare Worker, sim.

- Posso usar Next? React é a stack obrigatória. Next pode ser usado, mas não deve ser a main do código.

### 🎯 Funcionalidades Esperadas

#### Área de Login para Leitores

Página onde os leitores fazem login usando seu e-mail.
Exibição do streak atual (quantos dias seguidos abriu a newsletter).
Histórico de aberturas.
Mensagens motivacionais para incentivar o leitor a manter seu streak.

#### Dashboard Administrativo

Visualização das métricas de engajamento geral.
Ranking dos leitores mais engajados.
Filtros para visualizar estatísticas por newsletter, período de tempo e status do streak.
Gráficos para mostrar padrões de engajamento.

#### Regras de Streak

O streak aumenta +1 a cada dia consecutivo que o leitor abrir a newsletter.
Lembre que não temos ainda edição aos domingo

#### Extras (Diferencial, mas não obrigatório)

Gamificação: Adicionar badges ou níveis para incentivar os leitores.
Branding: Caso queira utilizar nossas cores, aqui está.

### **🔍 Perguntas a serem Respondidas**

Além do desenvolvimento, os candidatos devem apresentar um breve relatório respondendo:

1. **Stacks**
    - Quais as tecnologias usadas?
    - Quais problemas você enfrentou ao desenvolver?
    - Qual a organização que escolheu e por quê?

2. **Dados**
    - Qual a estrutura do seu SQL?
    - Como você lida com as inserções e consultas dos leitores?
    - Ele é escalável? Explique.

3. **Testes**
    - Quais testes você realizou?
    - Quanto tempo levou o desenvolvimento e testes?

### **📦 Entrega Esperada**

1. Envie o link do seu GitHub neste [formulário](https://tally.so/r/3jka89)
2. **Código-fonte do sistema** - Disponibilizado no GitHub em repositório **PRIVADO** com instruções para rodar o projeto. O e-mail para convite: [geraldo.mazzini@waffle.com.br](mailto:geraldo.mazzini@waffle.com.br).
3. **Demo funcional** - Um vídeo demonstrativo ou um link para um ambiente online.
4. **Relatório de análise** - Explicação das decisões técnicas e insights obtidos.
5. **Sugestões de melhorias** - Ideias para aprimorar a gamificação e retenção dos leitores.

### **📌 Critérios de Avaliação**

- **Frontend** - Interface intuitiva, bem desenhada e responsiva.
- **SQL -** Query's de alta performance, escalabilidade e flexíveis.
- **Experiência do Usuário** - Boa usabilidade na área logada e no dashboard.
- **Qualidade do Código** - Estrutura organizada e boas práticas.
- **Funcionalidade** - O sistema implementa corretamente as regras de streak?
- **Criatividade** - Sinta-se a vontade para criar o que quiser.

### ⏳ Prazo da entrega

Você vai ter até 24/02/25 06:06 para nos mandar as entregas, quando finalizar mande aqui neste [formulário](https://tally.so/r/3jka89).

#
## 🚚 Entrega

Cliquei [aqui](./docs/README.md) para ler o relatório técnico.
