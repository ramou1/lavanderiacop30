# Lavanderia COP 30

Site de página única da **Lavanderia COP 30**, desenvolvido com [Next.js](https://nextjs.org) e [Tailwind CSS](https://tailwindcss.com).

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18.18 ou superior (recomendado: versão LTS)
- npm (incluído com o Node.js)

## Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/ramou1/lavanderiacop30.git
cd lavanderiacop30
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador.

A página recarrega automaticamente ao editar os arquivos em `app/` e `components/`.

## Scripts disponíveis

| Comando        | Descrição                                      |
| -------------- | ---------------------------------------------- |
| `npm run dev`  | Servidor de desenvolvimento (hot reload)       |
| `npm run build`| Gera a versão de produção                      |
| `npm run start`| Executa a build de produção (após `build`)     |
| `npm run lint` | Verifica o código com ESLint                   |

## Build de produção

```bash
npm run build
npm run start
```

O site ficará disponível em [http://localhost:3000](http://localhost:3000).

## Estrutura do projeto

```
app/
  page.tsx          # Página única com todas as seções
  layout.tsx        # Layout raiz e metadata
  globals.css       # Cores da marca e estilos globais
components/
  Header.tsx        # Menu âncora fixo
  Footer.tsx        # Rodapé
lib/
  constants.ts      # Nome do site, navegação e contato
```

## Personalização

Edite `lib/constants.ts` para atualizar telefone, e-mail, endereço e horário de funcionamento.

## Repositório

[github.com/ramou1/lavanderiacop30](https://github.com/ramou1/lavanderiacop30)
