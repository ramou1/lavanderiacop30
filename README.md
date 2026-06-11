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

| Comando         | Descrição                                |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Servidor de desenvolvimento (hot reload) |
| `npm run build` | Gera o site estático na pasta `out/`     |
| `npm run lint`  | Verifica o código com ESLint             |

## Build estático (FTP)

O projeto está configurado com `output: "export"` no `next.config.ts`. Para gerar os arquivos de produção:

```bash
npm run build
```

A saída ficará em `out/`. Envie **todo o conteúdo** dessa pasta para a raiz do servidor FTP (ex.: `public_html/`).

Para testar localmente a versão estática:

```bash
npx serve out
```

## Estrutura do projeto

```
app/
  page.tsx          # Página única com todas as seções
  layout.tsx        # Layout raiz e metadata
  favicon.ico       # Ícone do site
  globals.css       # Cores da marca e estilos globais
components/
  Header.tsx        # Cabeçalho fixo e responsivo
  Footer.tsx        # Rodapé
  HeroSlider.tsx    # Slider da seção inicial
lib/
  constants.ts      # Nome do site, navegação e contato
public/
  assets/           # Imagens e fontes
```

## Personalização

Edite `lib/constants.ts` para atualizar telefone, e-mail, endereço e horário de funcionamento.

## Repositório

[github.com/ramou1/lavanderiacop30](https://github.com/ramou1/lavanderiacop30)
