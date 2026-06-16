# Lavanderia COP 30

Site institucional de página única da **Lavanderia COP 30**, lavanderia self-service localizada ao lado do **Grand Sky Urbanova**, em São José dos Campos — SP.

Desenvolvido com [Next.js](https://nextjs.org) e [Tailwind CSS](https://tailwindcss.com), com export estático para publicação em hospedagem FTP.

## Sobre o projeto

O site apresenta os serviços, produtos utilizados, máquinas disponíveis (P, G e GG), localização com mapa integrado, seção do hotel parceiro e canais de contato. Inclui:

- Layout responsivo com menu fixo e versão mobile
- Slider de fotos na seção inicial
- Ícones de serviços com [Lucide](https://lucide.dev)
- Botão flutuante de WhatsApp e link para Instagram
- Loader na abertura do site
- SEO com metadata, Open Graph, `sitemap.xml`, `robots.txt` e dados estruturados (Schema.org)
- Identidade visual com cores da marca, fontes **Axiforma** e **Inter**

## Seções do site

| Seção | Conteúdo |
| ----- | -------- |
| Início | Apresentação, slider do ambiente e CTAs |
| Serviços | Lavagem, secagem e pacotes |
| Produtos | Desamassa, amaciante e sabão líquido |
| Sobre nós | História da lavanderia e cards das máquinas |
| Hotel | Informações do Grand Sky Urbanova |
| Localização | Mapa do Google Maps |
| Contato | Telefone, e-mail e endereço |

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

## Scripts disponíveis

| Comando         | Descrição                                |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Servidor de desenvolvimento (hot reload) |
| `npm run build` | Gera o site estático na pasta `out/`     |
| `npm run lint`  | Verifica o código com ESLint             |

## Build estático (FTP)

O projeto usa `output: "export"` no `next.config.ts`. Para gerar os arquivos de produção:

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
  page.tsx              # Página única com todas as seções
  layout.tsx            # Layout raiz, metadata e SEO
  opengraph-image.png   # Imagem de compartilhamento (redes sociais)
  favicon.ico           # Ícone do site
  sitemap.ts            # Gera sitemap.xml
  robots.ts             # Gera robots.txt
  globals.css           # Cores da marca e estilos globais
components/
  Header.tsx            # Cabeçalho fixo e responsivo
  Footer.tsx            # Rodapé
  HeroSlider.tsx        # Slider da seção inicial
  PageLoader.tsx        # Loader de abertura
  JsonLd.tsx            # Dados estruturados para buscadores
lib/
  constants.ts          # Dados do site, navegação e contato
  seo.ts                # Configurações de SEO
public/
  assets/               # Imagens e fontes
```

## Personalização

Edite `lib/constants.ts` para atualizar telefone, e-mail, endereço, horário e URL do site (`SITE_URL`).

## Repositório

[github.com/ramou1/lavanderiacop30](https://github.com/ramou1/lavanderiacop30)

## Desenvolvedor

[Ramon Oliveira](https://www.linkedin.com/in/ramou1/) — [@ramou1](https://github.com/ramou1)
