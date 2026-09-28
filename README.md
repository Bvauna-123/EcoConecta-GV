# EcoConecta GV — interface tipo app / PWA

Versão mobile-first do MVP do Projeto Integrador. O QR Code é o meio externo de entrada: depois de abrir o EcoConecta, o usuário pesquisa o resíduo, consulta as orientações e encontra um ponto de descarte.

## Navegação principal
A barra inferior foi simplificada para **3 ações essenciais**, evitando redundância em telas pequenas:

**Perto de mim | Início | Mais**

- **Perto de mim:** solicita geolocalização quando necessário e mostra os ecopontos ordenados por distância.
- **Início:** botão central e principal. Retorna imediatamente à busca inteligente e às categorias de resíduos.
- **Mais:** reúne Como usar, instalação da PWA e informações sobre o EcoConecta.

O antigo botão **Mapa** foi retirado da navegação porque se sobrepunha ao objetivo de “Perto de mim”. O mapa continua disponível de forma contextual dentro de cada ecoponto, pelo botão **Ver mapa**, junto com **Traçar rota**.

A área de **Favoritos** também foi removida para manter a aplicação objetiva e reduzir funções pouco importantes para o fluxo principal.

## Principais funções
- Busca inteligente por resíduos, bairros, municípios e ecopontos.
- Categorias de resíduos com orientações de preparo, “Pode descartar” e “Evite”.
- Listagem de pontos de coleta com filtros.
- Geolocalização opcional em **Perto de mim**.
- Distância aproximada até os pontos quando a localização é autorizada.
- Mapa individual do ecoponto e abertura de rota no Google Maps.
- Guia rápido “Como usar”.
- Instalação como PWA na tela inicial do celular.
- Service Worker para cache do app shell.

## Fluxo principal
QR Code físico → EcoConecta GV → pesquisar/escolher resíduo → consultar preparo → encontrar ecoponto → ver mapa/traçar rota.

## Importante
Os pontos de coleta desta versão são **demonstrativos**. Antes da publicação, substitua-os por dados oficiais validados e confirme endereço, materiais aceitos e horário de funcionamento.

## Como testar
A interface pode ser aberta diretamente pelo `index.html`. Para testar geolocalização e instalação PWA, use `localhost` ou publique o projeto em HTTPS.

Exemplo:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

- A tela de abertura não fecha mais automaticamente: o usuário entra pelo botão **Entrar no EcoConecta**.

## Publicação (GitHub + Vercel)

Este pacote está pronto para publicação como site estático na Vercel.

- Framework Preset: Other
- Build Command: vazio
- Output Directory: vazio
- Root Directory: raiz do repositório

O arquivo `vercel.json` força revalidação do Service Worker e do manifest para facilitar atualizações da PWA.
