# Teste para Desenvolvedor(a) Front-End Next.js

## Introdução

Bem-vindo(a) ao processo seletivo para a posição de **Desenvolvedor(a) Front-End** em nossa equipe! Este teste tem como objetivo avaliar suas habilidades técnicas em **Next.js**, **React** e as demais tecnologias mencionadas na descrição da vaga.

## Instruções

- Faça um **fork** deste repositório para o seu GitHub pessoal.
- Desenvolva a aplicação conforme as especificações abaixo, seguindo as **melhores práticas de desenvolvimento**.
- Após a conclusão, envie o link do seu repositório para avaliação.
- Sinta-se à vontade para adicionar qualquer documentação ou comentários que julgar necessário.

## Desafio

### Contexto

Você foi designado para desenvolver a interface de um **marketplace de NFTs** (Non-Fungible Tokens) com funcionalidades de carrinho de compras. O objetivo é criar uma aplicação web responsiva e interativa que proporcione uma ótima experiência ao usuário, utilizando **Next.js** como framework principal.

### Requisitos

1. **Uso do Next.js**

   - Utilize **Next.js** como o framework principal da aplicação.
   - Aproveite os recursos do Next.js, como:
     - **Renderização no Lado do Servidor (SSR)** e/ou **Geração de Sites Estáticos (SSG)** para otimizar o carregamento das páginas.
     - **Rotas Dinâmicas** para páginas de detalhes dos NFTs.
     - **Next.js API Routes** se necessário para funcionalidades adicionais.
     - **Otimização de Imagens** com o componente `next/image`.
     - **Importação Dinâmica** para carregamento otimizado de componentes pesados.

2. **Interface do Usuário**

   - Implemente o design fornecido no link do **Figma**:
     - [Figma Design](https://www.figma.com/design/j9HHfWPPoLyObtlVBeMhTD/Front-end-Challenge?node-id=0-1&t=sWwJ0qlYdwzJHKyJ-0)
   - Siga fielmente o design e as especificações fornecidas.
   - Garanta que a aplicação seja **responsiva** e funcione bem em diferentes tamanhos de tela.
   - Implemente navegação entre as páginas utilizando o sistema de roteamento do Next.js.

3. **Gerenciamento de Estado**

   - Utilize **Redux** ou **Redux Toolkit** para gerenciar o estado global da aplicação.
   - Configure a store do Redux e implemente os reducers necessários.
   - Gerencie estados como itens no carrinho,

4. **Busca de Dados**

   - Use **React Query** para buscar e sincronizar dados da API.
   - A API está documentada em:
     - [Starsoft Challenge API Docs](https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/docs)
   - Implemente chamadas para obter a lista de NFTs, detalhes dos itens, etc.
   - Utilize o **Data Fetching** do Next.js (`getStaticProps`, `getServerSideProps`) conforme adequado.
   - Trate os estados de **loading**, **sucesso** e **erro** nas requisições.

5. **Animações e Interações**

   - Utilize **Framer Motion** para adicionar animações e interações conforme necessário.
   - Garanta que as animações sejam suaves e contribuam para a experiência do usuário.
   - Implemente animações em transições de página, hover em botões e cards, entre outros.

6. **Estilização**

   - Use **SASS** ou **Styled Components** para estilizar a aplicação.
   - Organize os estilos de maneira modular e reutilizável.
   - Siga as boas práticas de organização de arquivos e componentes.
   - Garanta a consistência visual em toda a aplicação.

7. **Configuração com Docker**

   - Configure o ambiente de desenvolvimento utilizando **Docker** e **Docker Compose**.
   - Crie um arquivo `Dockerfile` para a aplicação Next.js.
   - Crie um arquivo `docker-compose.yml` para orquestrar os serviços necessários.
   - A aplicação deve ser iniciada com um único comando (`docker-compose up`).
   - Documente quaisquer configurações específicas necessárias.

8. **Boas Práticas de Código**

   - Aplique os princípios de **Clean Code** em toda a sua implementação.
   - Utilize um padrão de código consistente e configure **ESLint** e **Prettier** no projeto.
   - Documente o código quando necessário para melhorar a legibilidade.
   - Utilize os recursos do **Next.js** para otimização, como importação dinâmica e otimização de imagens.

9. **Testes**

   - Escreva testes unitários e/ou de integração para as principais funcionalidades da aplicação utilizando **Jest** e **React Testing Library**.
   - Os testes devem cobrir, no mínimo, os componentes principais e funcionalidades críticas.
   - Garanta que todos os testes passem antes de enviar o projeto.

### Diferenciais (Desejável)

- **TypeScript**

  - Utilize **TypeScript** para adicionar tipagem estática ao seu código, aumentando a robustez e manutenção do projeto.

- **SEO e Acessibilidade**

  - Implemente boas práticas de **SEO** e **acessibilidade** na aplicação.
  - Utilize o componente `next/head` para manipulação de meta tags.
  - Otimize a performance da aplicação seguindo as recomendações do **Lighthouse**.

## Entrega

- O código deve estar disponível em um repositório Git (preferencialmente **GitHub**) público.
- Inclua um arquivo `README.md` com:
  - Instruções claras sobre como configurar e executar a aplicação.
  - Descrição das funcionalidades implementadas.
  - Tecnologias utilizadas e justificativas de escolhas técnicas.
  - Possíveis limitações ou melhorias futuras.
- Certifique-se de que o histórico de commits reflita o andamento do desenvolvimento, com mensagens claras e objetivas.

## Avaliação

Os seguintes aspectos serão considerados na avaliação:

- **Uso do Next.js**: Aproveitamento adequado dos recursos e features do Next.js na aplicação.
- **Fidelidade ao Design**: A interface deve ser fiel ao design fornecido no Figma.
- **Funcionalidade**: A aplicação deve estar funcional e todas as interações devem estar implementadas corretamente.
- **Gerenciamento de Estado**: O uso de Redux para gerenciamento de estado deve ser eficiente e bem estruturado.
- **Busca de Dados**: A integração com a API usando React Query e Next.js deve ser feita corretamente.
- **Animações e Interações**: As animações devem ser suaves e bem integradas na experiência do usuário.
- **Código Limpo**: O código deve ser limpo, seguindo boas práticas de desenvolvimento e princípios de Clean Code.
- **Estilização**: A aplicação deve ser estilizada usando SASS de forma modular e reutilizável.
- **Testes**: Qualidade e abrangência dos testes implementados.
- **Configuração com Docker**: A configuração do ambiente de desenvolvimento utilizando Docker e Docker Compose deve ser clara e funcional.
- **Documentação**: Clareza das instruções e documentação fornecidas no `README.md`.
- **Histórico de Commits**: Uso adequado do Git com commits bem descritos.

---

Boa sorte! Estamos ansiosos para conhecer o seu trabalho e potencial.

