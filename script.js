
// PONTOS REAIS DA GRANDE VITÓRIA
// Coordenadas não confirmadas ficam como null.
// Materiais vazios significam que a aceitação precisa ser consultada.

const locations = [
  // =========================
  // SERRA - ECOPONTOS E ATTs
  // =========================

  {
    id: 'serra-jardim-carapina',
    name: 'Ecoponto Jardim Carapina',
    type: 'Ecoponto municipal',
    city: 'Serra',
    district: 'Jardim Carapina',
    address: 'Rua Presidente Kennedy, 60, Jardim Carapina, Serra - ES',
    materials: ['plastico', 'papel', 'metal', 'vidro'],
    hours: 'Seg. a sex. • 08h às 17h | Sáb. • 08h às 16h',
    lat: null,
    lng: null,
    status: 'validado',
    source: 'Prefeitura da Serra'
  },
  {
    id: 'serra-joao-barro',
    name: 'Ecoponto João de Barro',
    type: 'Ecoponto municipal',
    city: 'Serra',
    district: 'Novo Porto Canoa',
    address: 'Avenida Domingos José Martins, 142, Novo Porto Canoa, Serra - ES',
    materials: ['plastico', 'papel', 'metal', 'vidro'],
    hours: 'Seg. a sex. • 08h às 17h | Sáb. • 08h às 16h',
    lat: null,
    lng: null,
    status: 'validado',
    source: 'Prefeitura da Serra'
  },
  {
    id: 'serra-quintal',
    name: 'Ecoponto Quintal',
    type: 'Ecoponto municipal',
    city: 'Serra',
    district: 'Vila Nova de Colares',
    address: 'Rua Floriano Peixoto, 353, Vila Nova de Colares, Serra - ES',
    materials: ['plastico', 'papel', 'metal', 'vidro'],
    hours: 'Seg. a sex. • 08h às 17h | Sáb. • 08h às 16h',
    lat: null,
    lng: null,
    status: 'validado',
    source: 'Prefeitura da Serra'
  },
  {
    id: 'serra-att-cidade-pomar',
    name: 'ATT Cidade Pomar',
    type: 'Área de Transbordo e Triagem',
    city: 'Serra',
    district: 'Cidade Pomar',
    address: 'Avenida Norte Sul, s/n, Cidade Pomar, Serra - ES',
    materials: ['plastico', 'papel', 'metal', 'vidro'],
    hours: 'Consultar funcionamento',
    lat: null,
    lng: null,
    status: 'validado',
    source: 'Prefeitura da Serra'
  },
  {
    id: 'serra-att-barcelona',
    name: 'ATT Barcelona',
    type: 'Área de Transbordo e Triagem',
    city: 'Serra',
    district: 'Barcelona',
    address: 'Avenida Região Sudeste, s/n, Barcelona, Serra - ES',
    materials: ['plastico', 'papel', 'metal', 'vidro'],
    hours: 'Consultar funcionamento',
    lat: null,
    lng: null,
    status: 'validado',
    source: 'Prefeitura da Serra'
  },

  // =========================
  // ASSOCIAÇÕES DE CATADORES
  // =========================

  {
    id: 'vitoria-ascamare',
    name: 'ASCAMARE',
    type: 'Associação de catadores',
    city: 'Vitoria',
    district: 'Consolação',
    address: 'Rua Construtor Camilo Gianordoli, 117, Consolação, Vitória - ES',
    materials: [],
    hours: 'Consultar funcionamento e recebimento',
    lat: null,
    lng: null,
    phone: 'Consultar associação',
    status: 'validado',
    source: 'Registro público de 2025'
  },
  {
    id: 'serra-abrasol',
    name: 'ABRASOL',
    type: 'Associação de catadores',
    city: 'Serra',
    district: 'Planalto Serrano',
    address: 'Rua Sergipe, s/n, Bloco B, Planalto Serrano, Serra - ES',
    materials: [],
    hours: 'Consultar funcionamento e recebimento',
    lat: null,
    lng: null,
    phone: '(27) 3101-0797',
    status: 'validado',
    source: 'ADERES - Termo de Colaboração 033/2024'
  },
  {
    id: 'serra-recuperlixo',
    name: 'RECUPERLIXO',
    type: 'Associação de catadores',
    city: 'Serra',
    district: 'Jardim Tropical',
    address: 'Rua Assembleia de Deus, 41, Jardim Tropical, Serra - ES',
    materials: [],
    hours: 'Consultar funcionamento e recebimento',
    lat: null,
    lng: null,
    phone: '(27) 3328-8581',
    status: 'validado',
    source: 'Legislação municipal da Serra'
  },
  {
    id: 'guarapari-asscamarg',
    name: 'ASSCAMARG',
    type: 'Associação de catadores',
    city: 'Guarapari',
    district: 'Ilhas Verdes',
    address: 'Rua Ruy Cortes, 01, Ilhas Verdes, Guarapari - ES',
    materials: ['plastico', 'papel', 'metal', 'vidro'],
    hours: 'Consultar antes de entregar',
    lat: null,
    lng: null,
    phone: '(27) 99839-0015',
    status: 'validado',
    source: 'Site oficial da associação'
  },
  {
    id: 'vila-velha-revive',
    name: 'REVIVE',
    type: 'Associação de catadores',
    city: 'Vila Velha',
    district: 'Novo México',
    address: 'Rua Três, Novo México, Vila Velha - ES',
    materials: ['eletronico'],
    hours: 'Consultar recebimento',
    lat: null,
    lng: null,
    phone: '(27) 3109-0201',
    status: 'validado',
    source: 'EletroLixo GV - ponto de descarte eletrônico'
  }
];
