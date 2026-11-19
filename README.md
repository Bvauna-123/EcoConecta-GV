# EcoConecta GV

Aplicação web mobile-first (PWA) desenvolvida para orientar o preparo de resíduos e localizar pontos de coleta e associações na Grande Vitória (ES).

## Estrutura do projeto
- `index.html`: estrutura das telas (Início, Busca/Resultados, Material, Rota/Mapa, Como usar, Mais opções, Sobre) e modais de filtro e instalação.
- `styles.css`: estilos responsivos, tema e componentes visuais.
- `script.js`: dados de materiais e pontos de coleta, busca com sugestões, filtros, ordenação, geolocalização e suporte PWA.
- `manifest.webmanifest`: configuração de manifesto para instalação como aplicativo.
- `service-worker.js`: cache do app shell para carregamento rápido e suporte offline básico.
- `vercel.json`: cabeçalhos de cache para `service-worker.js` e `manifest.webmanifest`.
