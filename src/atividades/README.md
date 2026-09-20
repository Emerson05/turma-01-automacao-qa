# Atividade: Automação QA - TypeScript

Este projeto contém a definição de tipos, criação e manipulação de Casos de Teste utilizando TypeScript no contexto de automação de testes QA.

---

## 🛠️ O que foi feito

1. **Definição de Tipo (`CasoDeTeste`)**: Criado um `type` customizado com as propriedades `id` (number), `titulo` (string), `descricao` (string) e `automatizado` (boolean).
2. **Função `criarCasoDeTeste`**: Função responsável por instanciar e retornar um objeto no formato do tipo `CasoDeTeste`.
3. **Função `descrever`**: Função que recebe um `CasoDeTeste` e retorna uma string formatada com todas as suas informações.
4. **Função `marcarAutomatizado`**: Função que recebe um `CasoDeTeste`, altera a propriedade `automatizado` para `true` de forma imutável e retorna o objeto atualizado.
5. **Execução e Testes**: Instanciação das funções através de constantes e exibição dos resultados no console.
6. **Simulação de Erro de Tipo**: Provocado intencionalmente um erro ao passar um valor do tipo `string` para o campo `id` que aguarda `number`.

---

## 🚀 Como rodar o projeto

### Pré-requisitos
- Node.js instalado
- TypeScript instalado globalmente ou no projeto

### Passo a passo

1. Clone o repositório e navegue até a pasta do projeto:
   ```bash
   cd automacao-qa

2. Instale as dependências (caso aplicável):  
   npm install

3. altere o arquivo package-lock.json
    
    "dev": "npm run type-check && tsx src/atividades/casos-de-testes.ts",

4. Inicie o Programa
    npm run dev

🚨 Erro de tipo provocado
    Para demonstrar a checagem estática de tipos do TypeScript, enviamos uma string no lugar de um number para o parâmetro id:

    const casoDeTesteComErro = criarCasoDeTeste("1", "Login inválido", "Teste", false);

    Mensagem de erro capturada:

    Argument of type 'string' is not assignable to parameter of type 'number'.


<img width="1353" height="266" alt="image" src="https://github.com/user-attachments/assets/4ab02860-adfd-472c-87cf-8bffca37865f" />

