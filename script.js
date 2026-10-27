const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const ICONS = {
  plastic: '<svg viewBox="0 0 24 24"><path d="M10 3h4v3l2 2v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8l2-2V3Z"/><path d="M9 10h6M10 3h4"/></svg>',
  glass: '<svg viewBox="0 0 24 24"><path d="M10 2h4v5l2 3v9a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-9l2-3V2Z"/><path d="M9 11h6"/></svg>',
  paper: '<svg viewBox="0 0 24 24"><path d="M4 6h16v13H4z"/><path d="M4 9h16M8 3h8v3H8z"/></svg>',
  metal: '<svg viewBox="0 0 24 24"><path d="M7 5h10l-1 16H8L7 5Z"/><path d="M8 5l1-2h6l1 2M9 9h6"/></svg>',
  electronic: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="14" height="11" rx="1"/><path d="M8 20h4M10 16v4M19 8h2v11h-6v-1"/></svg>',
  oil: '<svg viewBox="0 0 24 24"><path d="M10 3h4v3h2l1 3v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9l1-3h2V3Z"/><path d="M10 12h4M9 6h6"/></svg>',
  battery: '<svg viewBox="0 0 24 24"><rect x="7" y="5" width="10" height="16" rx="2"/><path d="M10 2h4v3M10 11h4M12 9v4"/></svg>',
  leaf: '<svg viewBox="0 0 24 24"><path d="M20 4C12 4 6 7 5 13c-.6 3.7 2.6 6.6 6.2 5.6C17 17 20 11 20 4Z"/><path d="M5 20c2.5-5 6-8 11-11"/></svg>',
  pin: '<svg viewBox="0 0 24 24"><path d="M12 21s6-4.7 6-11a6 6 0 1 0-12 0c0 6.3 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/></svg>',
  search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.4-3.4"/></svg>',
  clean: '<svg viewBox="0 0 24 24"><path d="M12 3s-5 6-5 10a5 5 0 0 0 10 0c0-4-5-10-5-10Z"/><path d="M9.5 14.5c.8 1.3 2 1.8 3.5 1.5"/></svg>',
  separate: '<svg viewBox="0 0 24 24"><path d="m12 3 8 4-8 4-8-4 8-4Z"/><path d="m4 12 8 4 8-4M4 17l8 4 8-4"/></svg>',
  compress: '<svg viewBox="0 0 24 24"><path d="M4 8h6V2M20 8h-6V2M4 16h6v6M20 16h-6v6"/><path d="m10 8-6-6m10 6 6-6m-10 14-6 6m10-6 6 6"/></svg>',
  box: '<svg viewBox="0 0 24 24"><path d="m4 7 8-4 8 4-8 4-8-4Z"/><path d="M4 7v10l8 4 8-4V7M12 11v10"/></svg>',
  shield: '<svg viewBox="0 0 24 24"><path d="M12 3 5 6v5c0 4.8 3 8.2 7 10 4-1.8 7-5.2 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></svg>',
  route: '<svg viewBox="0 0 24 24"><path d="M5 18 19 6M10 6h9v9"/></svg>',
  map: '<svg viewBox="0 0 24 24"><path d="M3 6.5 8 4l8 3 5-2.5v13L16 20l-8-3-5 2.5v-13Z"/><path d="M8 4v13M16 7v13"/></svg>',
  heart: '<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z"/></svg>'
};

const wasteTypes = [
  {
    id: 'plastico', name: 'Plástico', icon: ICONS.plastic, aliases: ['plastico','pet','garrafa pet','embalagem','sacola','pote','tampa','frasco'],
    short: 'Embalagens, garrafas, potes e outros plásticos recicláveis.',
    steps: [['Lave','Retire restos de alimentos e líquidos.', ICONS.clean],['Separe','Quando possível, separe tampas e peças de outro material.', ICONS.separate],['Amasse','Reduza o volume para facilitar o armazenamento e transporte.', ICONS.compress]],
    good: 'Garrafas PET, embalagens de limpeza, potes, frascos e sacolas limpas.',
    bad: 'Plásticos com restos de alimento, produto químico ou misturados a materiais não separáveis.',
    colors: ['#24b43d','#81db4f'], tint:'#ebf9e8', color:'#20a83a'
  },
  {
    id: 'vidro', name: 'Vidro', icon: ICONS.glass, aliases: ['vidro','garrafa','pote de vidro','frasco','caco'],
    short: 'Garrafas, potes e frascos devem ser levados vazios e com segurança.',
    steps: [['Esvazie','Retire líquidos e resíduos do recipiente.', ICONS.clean],['Proteja','Embale cacos para evitar acidentes durante o transporte.', ICONS.shield],['Identifique','Avise quando o pacote contiver vidro quebrado.', ICONS.box]],
    good: 'Garrafas, potes e frascos de vidro comuns, vazios e limpos.',
    bad: 'Espelhos, lâmpadas, cerâmica e vidro temperado sem confirmar o ponto adequado.',
    colors: ['#14943e','#56c955'], tint:'#eaf8ec', color:'#158c39'
  },
  {
    id: 'papel', name: 'Papel', icon: ICONS.paper, aliases: ['papel','papelao','caixa','jornal','revista','folha','cartolina'],
    short: 'Papéis e papelões devem estar secos, limpos e sem restos de alimento.',
    steps: [['Mantenha seco','Evite molhar ou misturar com resíduos orgânicos.', ICONS.shield],['Desmonte','Abra e compacte caixas para reduzir o volume.', ICONS.compress],['Separe','Retire plásticos, fitas e outros itens quando possível.', ICONS.separate]],
    good: 'Caixas, jornais, revistas, folhas, envelopes e papelão limpo.',
    bad: 'Papel higiênico, guardanapo usado, papel engordurado e itens plastificados.',
    colors: ['#bc7b28','#dda53f'], tint:'#fff6e6', color:'#b87826'
  },
  {
    id: 'metal', name: 'Metal', icon: ICONS.metal, aliases: ['metal','lata','latinha','aluminio','aco','ferro'],
    short: 'Latas e embalagens metálicas devem estar vazias e sem resíduos perigosos.',
    steps: [['Esvazie','Retire totalmente o conteúdo da embalagem.', ICONS.clean],['Limpe','Faça uma limpeza rápida quando houver alimento.', ICONS.separate],['Proteja','Cuidado com bordas e partes cortantes.', ICONS.shield]],
    good: 'Latas de bebidas e alimentos, tampas e embalagens metálicas limpas.',
    bad: 'Perfurocortantes e recipientes contaminados com produtos químicos.',
    colors: ['#4d6672','#8ba0a8'], tint:'#edf2f4', color:'#526b75'
  },
  {
    id: 'eletronico', name: 'Eletrônicos', icon: ICONS.electronic, aliases: ['eletronico','eletronicos','celular','computador','notebook','cabo','carregador','fone','monitor'],
    short: 'Equipamentos eletrônicos devem seguir logística reversa ou pontos específicos.',
    steps: [['Proteja dados','Faça backup e remova contas pessoais sempre que possível.', ICONS.shield],['Separe peças','Mantenha cabos e acessórios organizados.', ICONS.separate],['Ponto específico','Leve somente a locais que recebam eletrônicos.', ICONS.pin]],
    good: 'Celulares, cabos, carregadores, periféricos e pequenos eletrônicos.',
    bad: 'Não abra baterias, telas quebradas ou componentes danificados em casa.',
    colors: ['#3778c7','#72a8e2'], tint:'#eaf3fe', color:'#3677c4'
  },
  {
    id: 'oleo', name: 'Óleo de cozinha', icon: ICONS.oil, aliases: ['oleo','oleo de cozinha','oleo usado','fritura'],
    short: 'Óleo usado nunca deve ser descartado na pia, ralo, vaso sanitário ou solo.',
    steps: [['Esfrie','Espere o óleo atingir temperatura ambiente.', ICONS.clean],['Armazene','Use uma garrafa PET limpa e resistente.', ICONS.box],['Feche bem','Evite vazamentos antes de levar ao ponto de coleta.', ICONS.shield]],
    good: 'Óleo de cozinha usado armazenado em garrafa fechada.',
    bad: 'Não misture com água, detergente, solventes ou óleo automotivo.',
    colors: ['#e8a400','#f3c84b'], tint:'#fff8dd', color:'#c88a00'
  },
  {
    id: 'pilhas', name: 'Pilhas e baterias', icon: ICONS.battery, aliases: ['pilha','pilhas','bateria','baterias'],
    short: 'Pilhas e baterias possuem componentes que exigem descarte em pontos específicos.',
    steps: [['Mantenha seco','Guarde longe de umidade e calor.', ICONS.shield],['Não abra','Evite amassar, perfurar ou desmontar.', ICONS.compress],['Leve ao ponto','Procure comércio ou ecoponto que receba esse material.', ICONS.pin]],
    good: 'Pilhas e baterias portáteis íntegras e secas.',
    bad: 'Nunca descarte no lixo comum ou tente remover componentes internos.',
    colors: ['#635b4f','#8e806d'], tint:'#f3f0eb', color:'#6d6253'
  }
];

// Pontos de Coleta Seletiva / PEVs Oficiais das Prefeituras da Grande Vitória
const locations = [
  // --- VIANA (Prefeitura Municipal de Viana) ---
  {
    id: 'pev-viana-villaschi',
    name: 'PEV Coleta Seletiva - Arlindo Villaschi',
    city: 'Viana',
    district: 'Arlindo Ângelo Villaschi',
    address: 'Rua Principal, Arlindo Ângelo Villaschi, Viana - ES',
    materials: ['papel', 'plastico', 'metal', 'vidro'],
    hours: '24 horas (Acesso livre / PEV de rua)',
    lat: -20.3735,
    lng: -40.4502
  },
  {
    id: 'pev-viana-marcilio',
    name: 'PEV Coleta Seletiva - Marcílio de Noronha',
    city: 'Viana',
    district: 'Marcílio de Noronha',
    address: 'Av. Askim, Marcílio de Noronha, Viana - ES',
    materials: ['papel', 'plastico', 'metal', 'vidro'],
    hours: '24 horas (Acesso livre / PEV de rua)',
    lat: -20.3871,
    lng: -40.4398
  },
  {
    id: 'pev-viana-universal',
    name: 'PEV Coleta Seletiva - Universal',
    city: 'Viana',
    district: 'Universal',
    address: 'Praça de Universal, Viana - ES',
    materials: ['papel', 'plastico', 'metal', 'vidro'],
    hours: '24 horas (Acesso livre / PEV de rua)',
    lat: -20.3820,
    lng: -40.4350
  },

  // --- CARIACICA (Prefeitura Municipal de Cariacica / SEMMAM) ---
  {
    id: 'pev-cariacica-campo-grande',
    name: 'PEV Coleta Seletiva - Campo Grande',
    city: 'Cariacica',
    district: 'Campo Grande',
    address: 'Av. Expedito García, Campo Grande, Cariacica - ES',
    materials: ['papel', 'plastico', 'metal', 'vidro', 'oleo'],
    hours: '24 horas (Acesso livre / PEV de rua)',
    lat: -20.3410,
    lng: -40.3830
  },
  {
    id: 'pev-cariacica-itacibai',
    name: 'PEV Coleta Seletiva - Itacibá',
    city: 'Cariacica',
    district: 'Itacibá',
    address: 'Praça de Itacibá, Cariacica - ES',
    materials: ['papel', 'plastico', 'metal', 'vidro'],
    hours: '24 horas (Acesso livre / PEV de rua)',
    lat: -20.3275,
    lng: -40.3701
  },
  {
    id: 'pev-cariacica-jardim-america',
    name: 'PEV Coleta Seletiva - Jardim América',
    city: 'Cariacica',
    district: 'Jardim América',
    address: 'BR-262 (Próximo à Estação Pedro Nolasco), Jardim América, Cariacica - ES',
    materials: ['papel', 'plastico', 'metal', 'vidro'],
    hours: '24 horas (Acesso livre / PEV de rua)',
    lat: -20.3228,
    lng: -40.3592
  },

  // --- VILA VELHA (Prefeitura Municipal de Vila Velha / SEMSU) ---
  {
    id: 'pev-vv-itapua',
    name: 'Ponto de Coleta Seletiva - Itapuã',
    city: 'Vila Velha',
    district: 'Itapuã',
    address: 'Orla de Itapuã, Vila Velha - ES',
    materials: ['papel', 'plastico', 'metal', 'vidro'],
    hours: '24 horas (Acesso livre / PEV de rua)',
    lat: -20.3521,
    lng: -40.2878
  },
  {
    id: 'pev-vv-praia-da-costa',
    name: 'PEV Coleta Seletiva - Praia da Costa',
    city: 'Vila Velha',
    district: 'Praia da Costa',
    address: 'Av. Gil Veloso (Orla), Praia da Costa, Vila Velha - ES',
    materials: ['papel', 'plastico', 'metal', 'vidro'],
    hours: '24 horas (Acesso livre / PEV de rua)',
    lat: -20.3370,
    lng: -40.2920
  },
  {
    id: 'pev-vv-coqueiral',
    name: 'PEV Coleta Seletiva - Coqueiral de Itaparica',
    city: 'Vila Velha',
    district: 'Coqueiral de Itaparica',
    address: 'Praça de Coqueiral de Itaparica, Vila Velha - ES',
    materials: ['papel', 'plastico', 'metal', 'vidro', 'oleo'],
    hours: '24 horas (Acesso livre / PEV de rua)',
    lat: -20.3622,
    lng: -40.2995
  },

  // --- VITÓRIA (Prefeitura Municipal de Vitória / SEMMAM) ---
  {
    id: 'pev-vix-jardim-camburi',
    name: 'PEV Coleta Seletiva - Jardim Camburi',
    city: 'Vitoria',
    district: 'Jardim Camburi',
    address: 'Parque Botânico Vale / Orla de Camburi, Vitória - ES',
    materials: ['papel', 'plastico', 'metal', 'vidro'],
    hours: '24 horas (Acesso livre / PEV de rua)',
    lat: -20.2590,
    lng: -40.2650
  },
  {
    id: 'pev-vix-praia-do-canto',
    name: 'PEV Coleta Seletiva - Praia do Canto',
    city: 'Vitoria',
    district: 'Praia do Canto',
    address: 'Praça dos Namorados, Praia do Canto, Vitória - ES',
    materials: ['papel', 'plastico', 'metal', 'vidro'],
    hours: '24 horas (Acesso livre / PEV de rua)',
    lat: -20.3015,
    lng: -40.2925
  },
  {
    id: 'pev-vix-mata-da-praia',
    name: 'PEV Coleta Seletiva - Mata da Praia',
    city: 'Vitoria',
    district: 'Mata da Praia',
    address: 'Av. Dante Michelini, Mata da Praia, Vitória - ES',
    materials: ['papel', 'plastico', 'metal', 'vidro'],
    hours: '24 horas (Acesso livre / PEV de rua)',
    lat: -20.2780,
    lng: -40.2840
  },

  // --- SERRA (Prefeitura Municipal da Serra / SEMA) ---
  {
    id: 'pev-serra-laranjeiras',
    name: 'PEV Coleta Seletiva - Parque Residencial Laranjeiras',
    city: 'Serra',
    district: 'Laranjeiras',
    address: 'Av. Central, Laranjeiras, Serra - ES',
    materials: ['papel', 'plastico', 'metal', 'vidro', 'eletronico'],
    hours: '24 horas (Acesso livre / PEV de rua)',
    lat: -20.1970,
    lng: -40.2550
  },
  {
    id: 'pev-serra-jacaraipe',
    name: 'PEV Coleta Seletiva - Jacaraípe',
    city: 'Serra',
    district: 'Jacaraípe',
    address: 'Orla de Jacaraípe, Serra - ES',
    materials: ['papel', 'plastico', 'metal', 'vidro'],
    hours: '24 horas (Acesso livre / PEV de rua)',
    lat: -20.1311,
    lng: -40.1923
  }
];

const state = {
  currentScreen: 'home', previousScreen: null, selectedMaterial: null, selectedLocation: null,
  city: 'todos', material: 'todos', query: '', maxDistance: 20, userPosition: null, sort: 'relevance', nearbyMode: false,
  recent: JSON.parse(localStorage.getItem('ecoconecta:recent') || '[]')
};
let deferredInstallPrompt = null;
let toastTimer;

function normalize(text='') { return text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim(); }
function prettyCity(city) { return city === 'Vitoria' ? 'Vitória' : city; }
function materialById(id) { return wasteTypes.find(item => item.id === id); }
function locationById(id) { return locations.find(item => item.id === id); }
function routeUrl(address) { return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`; }
function distanceKm(a,b){ const rad=x=>x*Math.PI/180,R=6371,dLat=rad(b.lat-a.lat),dLng=rad(b.lng-a.lng),lat1=rad(a.lat),lat2=rad(b.lat); const h=Math.sin(dLat/2)**2+Math.cos(lat1)*Math.cos(lat2)*Math.sin(dLng/2)**2; return 2*R*Math.asin(Math.sqrt(h)); }
function distanceLabel(loc){ if(!state.userPosition) return '—'; const d=distanceKm(state.userPosition,loc); return `${d<10?d.toFixed(1):Math.round(d)} km`; }
function showToast(text){ clearTimeout(toastTimer); const el=$('#toast'); el.textContent=text; el.classList.add('show'); toastTimer=setTimeout(()=>el.classList.remove('show'),2600); }
function addRecent(label,type,id){ state.recent = [{label,type,id,at:Date.now()}, ...state.recent.filter(x=>!(x.type===type && x.id===id))].slice(0,8); localStorage.setItem('ecoconecta:recent',JSON.stringify(state.recent)); }

function setActiveNav(screen){
  $$('.nav-item').forEach(btn=>btn.classList.toggle('active', btn.dataset.navScreen === screen));
  $('.home-main-nav')?.classList.toggle('active', screen === 'home');
  $('#nearMeNav')?.classList.toggle('active', screen === 'search' && state.nearbyMode);
  if(['guide','about'].includes(screen)) $('[data-nav-screen="more"]')?.classList.add('active');
}
function showScreen(screen, {push=true}={}){
  if(screen===state.currentScreen){ setActiveNav(screen); if(screen==='search') renderResults(); return; }
  if(push) state.previousScreen = state.currentScreen;
  $$('.screen').forEach(el=>el.classList.toggle('active', el.dataset.screen===screen));
  state.currentScreen = screen;
  setActiveNav(screen);
  $('#appMain').scrollTo({top:0}); window.scrollTo({top:0,behavior:'instant'});
  if(screen==='search') renderResults();
  if(screen==='material') renderMaterialDetail();
  if(screen==='map') renderMap();
}
function goBack(){ showScreen(state.previousScreen || 'home',{push:false}); }

function renderMaterials(){
  const grid=$('#materialGrid');
  grid.innerHTML = wasteTypes.map((item,index)=>`<button class="material-card ${index===6?'wide':''}" type="button" data-material="${item.id}" style="--material-bg:${item.tint};--material-color:${item.color};--material-tint:${item.tint}"><span class="material-icon">${item.icon}</span><strong>${item.name}</strong></button>`).join('') +
    `<button class="material-card" type="button" data-all="true" style="--material-bg:#eef8ec;--material-color:#27973b;--material-tint:#eef8ec"><span class="material-icon">${ICONS.leaf}</span><strong>Outros materiais</strong></button>`;
  $$('.material-card[data-material]',grid).forEach(btn=>btn.addEventListener('click',()=>openMaterial(btn.dataset.material)));
  $('[data-all]',grid)?.addEventListener('click',()=>{ state.material='todos'; state.query=''; showScreen('search'); });
}
function openMaterial(id){ state.selectedMaterial=id; state.material=id; addRecent(materialById(id).name,'material',id); showScreen('material'); }

function renderMaterialDetail(){
  const item=materialById(state.selectedMaterial || state.material);
  if(!item){ showScreen('home',{push:false}); return; }
  $('#materialTitle').textContent=item.name;
  $('#materialDetail').innerHTML=`
    <div class="material-hero" style="--material-a:${item.colors[0]};--material-b:${item.colors[1]}">
      <div class="material-hero-copy"><div class="hero-material-icon">${item.icon}</div><h2>${item.name}</h2><p>${item.short}</p></div>
      <div class="material-hero-art" aria-hidden="true">${item.icon}</div>
    </div>
    <h3 class="detail-section-title">Como preparar?</h3>
    <div class="prepare-list">${item.steps.map(step=>`<article class="prepare-card"><span class="prepare-icon">${step[2]}</span><div><b>${step[0]}</b><p>${step[1]}</p></div></article>`).join('')}</div>
    <div class="acceptance">
      <article class="accept-card good"><span>✓</span><div><b>Pode descartar</b><p>${item.good}</p></div></article>
      <article class="accept-card bad"><span>×</span><div><b>Evite</b><p>${item.bad}</p></div></article>
    </div>
    <button class="detail-cta" id="materialPoints" type="button">${ICONS.pin} Ver pontos que recebem ${item.name.toLowerCase()}</button>`;
  $('#materialPoints').addEventListener('click',()=>{ state.nearbyMode=false; state.material=item.id; state.query=''; showScreen('search'); });
}

function matchMaterials(query){ const q=normalize(query); if(!q)return[]; return wasteTypes.filter(item=>normalize(item.name).includes(q)||item.aliases.some(alias=>normalize(alias).includes(q)||q.includes(normalize(alias)))); }
function filteredLocations(){
  const q=normalize(state.query), matchedIds=matchMaterials(q).map(x=>x.id);
  let arr=locations.filter(loc=>{
    const cityOk=state.city==='todos'||loc.city===state.city;
    const materialOk=state.material==='todos'||loc.materials.includes(state.material);
    const text=normalize(`${loc.name} ${loc.city} ${prettyCity(loc.city)} ${loc.district} ${loc.address} ${loc.materials.map(x=>materialById(x)?.name).join(' ')}`);
    const queryOk=!q||text.includes(q)||matchedIds.some(id=>loc.materials.includes(id));
    const dist=state.userPosition?distanceKm(state.userPosition,loc):0;
    const distOk=!state.userPosition||dist<=state.maxDistance;
    return cityOk&&materialOk&&queryOk&&distOk;
  });
  if(state.sort==='distance'&&state.userPosition) arr.sort((a,b)=>distanceKm(state.userPosition,a)-distanceKm(state.userPosition,b));
  else if(state.sort==='alpha') arr.sort((a,b)=>a.name.localeCompare(b.name,'pt-BR'));
  else if(state.material!=='todos') arr.sort((a,b)=>Number(b.materials.includes(state.material))-Number(a.materials.includes(state.material)));
  return arr;
}
function thumbMarkup(){ return `<div class="point-thumb" aria-hidden="true"><i class="mini-hill"></i><i class="mini-hill b"></i><i class="mini-tree"></i><i class="mini-tree"></i><i class="mini-tree"></i></div>`; }
function tagMarkup(id){ const m=materialById(id); return `<span class="tag" style="--tag-color:${m.color}">${m.icon}${m.name}</span>`; }
function pointCard(loc){
  return `<article class="point-card" data-point="${loc.id}">
    <div class="point-card-top">${thumbMarkup()}<div class="point-info"><h3>${loc.name}</h3><p>${loc.address}</p><p>${loc.hours}</p></div><span class="point-distance">${ICONS.pin}${distanceLabel(loc)}</span></div>
    <div class="tag-row">${loc.materials.slice(0,4).map(tagMarkup).join('')}</div>
    <div class="point-actions"><button class="map-btn" data-map="${loc.id}" type="button">${ICONS.map} Ver mapa</button><a class="route-btn" href="${routeUrl(loc.address)}" target="_blank" rel="noopener">${ICONS.route} Traçar rota</a></div>
  </article>`;
}
function renderCityChips(){
  const cities=['todos','Vitoria','Vila Velha','Serra','Cariacica','Viana'];
  $('#cityChips').innerHTML=cities.map(city=>`<button class="city-chip ${state.city===city?'active':''}" data-city="${city}" type="button">${city==='todos'?'Todos':prettyCity(city)}</button>`).join('');
  $$('.city-chip').forEach(btn=>btn.addEventListener('click',()=>{state.city=btn.dataset.city; renderResults(); renderFilterChoices();}));
}
function renderResults(){
  renderCityChips();
  const material=state.material!=='todos'?materialById(state.material):null;
  $('#searchTitle').textContent=state.nearbyMode?'Perto de você':'Ecopontos próximos';
  $('#searchSubtitle').textContent=state.nearbyMode&&state.userPosition
    ? 'Pontos ordenados pela distância da sua localização'
    : material?`Locais que recebem ${material.name} na Grande Vitória`:'Encontre locais para descarte na Grande Vitória';
  $('#resultSearch').value=state.query;
  $('#resultSearchClear').hidden=!state.query;
  const arr=filteredLocations();
  $('#resultsCount').textContent=`${arr.length} ${arr.length===1?'ponto encontrado':'pontos encontrados'}`;
  $('#pointList').innerHTML=arr.map(pointCard).join('');
  $('#emptyPanel').hidden=arr.length>0;
  attachPointEvents();
  $('#sortText').textContent=state.sort==='relevance'?'Relevância':state.sort==='distance'?'Mais próximos':'A–Z';
}
function attachPointEvents(){
  $$('[data-map]').forEach(btn=>btn.addEventListener('click',()=>{ state.selectedLocation=btn.dataset.map; addRecent(locationById(btn.dataset.map).name,'location',btn.dataset.map); showScreen('map'); }));
}

function renderMap(){
  const loc=locationById(state.selectedLocation); if(!loc){showScreen('search',{push:false});return;}
  const pad=.022, bbox=[loc.lng-pad,loc.lat-pad,loc.lng+pad,loc.lat+pad].join('%2C');
  const iframe=$('#osmMap'); const loading=$('#mapLoading'); loading.classList.remove('loaded');
  iframe.src=`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${loc.lat}%2C${loc.lng}`;
  iframe.onload=()=>loading.classList.add('loaded');
  $('#routeCard').innerHTML=`<article class="route-summary"><div class="route-summary-top">${thumbMarkup()}<div><h2>${loc.name}</h2><p>${loc.address}</p><p>${loc.hours}</p></div><span class="route-meta">${distanceLabel(loc)}</span></div><a class="route-open" href="${routeUrl(loc.address)}" target="_blank" rel="noopener">${ICONS.route} Abrir rota no Google Maps</a></article>`;
}

function buildSuggestions(value){
  const q=normalize(value); if(!q)return[];
  const mats=wasteTypes.filter(m=>normalize(m.name).includes(q)||m.aliases.some(a=>normalize(a).includes(q))).slice(0,4).map(m=>({type:'material',id:m.id,title:m.name,subtitle:'Ver como descartar',icon:m.icon}));
  const pts=locations.filter(l=>normalize(`${l.name} ${l.district} ${prettyCity(l.city)}`).includes(q)).slice(0,4).map(l=>({type:'location',id:l.id,title:l.name,subtitle:`${l.district} • ${prettyCity(l.city)}`,icon:ICONS.pin}));
  return [...mats,...pts];
}
function renderSuggestions(container,value,onSelect){
  const items=buildSuggestions(value); if(!items.length){container.hidden=true;return;}
  container.innerHTML=items.map(item=>`<button class="suggestion-item" type="button" data-type="${item.type}" data-id="${item.id}"><span class="suggestion-symbol">${item.icon}</span><span><b>${item.title}</b><small>${item.subtitle}</small></span><span class="suggestion-arrow">›</span></button>`).join(''); container.hidden=false;
  $$('.suggestion-item',container).forEach(btn=>btn.addEventListener('click',()=>onSelect(btn.dataset.type,btn.dataset.id)));
}
function handleSuggestion(type,id){
  if(type==='material'){ state.query=''; state.material=id; state.selectedMaterial=id; addRecent(materialById(id).name,'material',id); showScreen('material'); }
  else { const loc=locationById(id); state.nearbyMode=false; state.query=loc.district; state.material='todos'; addRecent(loc.name,'location',id); showScreen('search'); }
}

function openNearbyResults(){
  state.nearbyMode=true;
  state.city='todos';
  state.material='todos';
  state.query='';
  state.sort='distance';
  state.maxDistance=30;
  showScreen('search');
  renderResults();
  renderFilterChoices();
}
function requestLocation(){
  if(state.userPosition){
    openNearbyResults();
    showToast('Mostrando os pontos mais próximos de você.');
    return;
  }
  if(!navigator.geolocation){showToast('Este navegador não oferece geolocalização.');return;}
  showToast('Solicitando sua localização…');
  navigator.geolocation.getCurrentPosition(pos=>{
    state.userPosition={lat:pos.coords.latitude,lng:pos.coords.longitude};
    openNearbyResults();
    showToast('Localização ativada. Pontos ordenados por proximidade.');
  },()=>{
    state.nearbyMode=false;
    showToast('Não foi possível acessar sua localização. Você pode buscar por cidade.');
    showScreen('search');
  },{enableHighAccuracy:false,timeout:8000,maximumAge:300000});
}

function renderFilterChoices(){
  const cities=['todos','Vitoria','Vila Velha','Serra','Cariacica','Viana'];
  $('#filterCities').innerHTML=cities.map(c=>`<button class="choice ${state.city===c?'active':''}" data-filter-city="${c}" type="button">${c==='todos'?'Todos':prettyCity(c)}</button>`).join('');
  $('#filterMaterials').innerHTML=`<button class="choice material-choice ${state.material==='todos'?'active':''}" data-filter-material="todos" type="button">${ICONS.leaf}Todos</button>`+wasteTypes.map(m=>`<button class="choice material-choice ${state.material===m.id?'active':''}" data-filter-material="${m.id}" type="button">${m.icon}${m.name}</button>`).join('');
  $('#distanceRange').value=state.maxDistance; $('#distanceLabel').textContent=`Até ${state.maxDistance} km`;
  $$('[data-filter-city]').forEach(btn=>btn.addEventListener('click',()=>{state.city=btn.dataset.filterCity;renderFilterChoices();}));
  $$('[data-filter-material]').forEach(btn=>btn.addEventListener('click',()=>{state.material=btn.dataset.filterMaterial;renderFilterChoices();}));
}

// PWA
function isStandalone(){return matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;}
function isIOS(){return /iphone|ipad|ipod/i.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);}
function updateInstallUI(){
  const installed=isStandalone(); const ios=isIOS();
  const homeButton=$('#homeInstall');
  const homeCard=$('#homeInstallCard');
  const guideButton=$('#installAppButton');
  if(homeButton) homeButton.hidden=installed;
  if(homeCard) homeCard.hidden=installed;
  if(guideButton){
    guideButton.hidden=false;
    guideButton.textContent=installed?'Adicionado':'Adicionar';
    guideButton.disabled=installed;
  }
  $('#iosGuide').hidden=installed||!ios;
}
function openInstallHelp(){
  const dialog=$('#installDialog');
  const steps=$('#installSteps');
  const title=$('#installDialogTitle');
  const text=$('#installDialogText');
  const primary=$('#installPrimary');
  if(isIOS()){
    title.textContent='Adicionar no iPhone ou iPad';
    text.textContent='No Safari, você pode salvar o EcoConecta na Tela de Início para abrir como um aplicativo.';
    steps.innerHTML='<li><span>1</span><div><b>Abra no Safari</b><p>Se estiver em outro navegador, abra esta página no Safari.</p></div></li><li><span>2</span><div><b>Toque em Compartilhar</b><p>Use o ícone de compartilhamento do Safari.</p></div></li><li><span>3</span><div><b>Adicionar à Tela de Início</b><p>Confirme o nome EcoConecta e toque em Adicionar.</p></div></li>';
    primary.textContent='Entendi';
    primary.dataset.action='close';
  }else{
    title.textContent='Salvar EcoConecta no celular';
    text.textContent='Seu navegador não exibiu a instalação automática. Você ainda pode criar um atalho pela opção de instalar/adicionar à tela inicial do navegador.';
    steps.innerHTML='<li><span>1</span><div><b>Abra o menu do navegador</b><p>Normalmente é o botão ⋮ ou o menu de opções.</p></div></li><li><span>2</span><div><b>Procure a opção de instalação</b><p>Ela pode aparecer como “Instalar app” ou “Adicionar à tela inicial”.</p></div></li><li><span>3</span><div><b>Confirme</b><p>O ícone do EcoConecta ficará junto aos seus aplicativos.</p></div></li>';
    primary.textContent='Entendi';
    primary.dataset.action='close';
  }
  if(typeof dialog.showModal==='function') dialog.showModal(); else showToast('Use o menu do navegador para adicionar o EcoConecta à tela inicial.');
}
async function requestInstall(){
  if(isStandalone()){showToast('O EcoConecta já está salvo neste dispositivo.');return;}
  if(isIOS()){openInstallHelp();return;}
  if(!deferredInstallPrompt){openInstallHelp();return;}
  deferredInstallPrompt.prompt();
  const choice=await deferredInstallPrompt.userChoice;
  deferredInstallPrompt=null;
  updateInstallUI();
  if(choice.outcome==='accepted') showToast('EcoConecta adicionado ao dispositivo.');
}

// event wiring
renderMaterials(); renderFilterChoices();
$$('[data-nav-screen]').forEach(btn=>btn.addEventListener('click',()=>{
  state.nearbyMode=false;
  showScreen(btn.dataset.navScreen);
}));
$$('[data-back]').forEach(btn=>btn.addEventListener('click',goBack));
$('#nearMeNav').addEventListener('click',requestLocation);
$('#moreGuide').addEventListener('click',()=>showScreen('guide'));
$('#moreInstall').addEventListener('click',requestInstall);
$('#moreAbout').addEventListener('click',()=>showScreen('about'));
$('#howHome').addEventListener('click',()=>showScreen('guide'));
$('#ecoBanner').addEventListener('click',()=>openMaterial('plastico'));
$('#allMaterials').addEventListener('click',()=>{state.nearbyMode=false;state.material='todos';state.query='';showScreen('search');});
$('#openFiltersTop').addEventListener('click',()=>{renderFilterChoices();$('#filterDialog').showModal();});
$('#distanceRange').addEventListener('input',e=>{$('#distanceLabel').textContent=`Até ${e.target.value} km`;});
$('#filterForm').addEventListener('submit',()=>{state.maxDistance=Number($('#distanceRange').value);setTimeout(renderResults,0);});
$('#clearFilter').addEventListener('click',()=>{state.city='todos';state.material='todos';state.maxDistance=20;renderFilterChoices();});
$('#resetSearchFilters').addEventListener('click',()=>{state.city='todos';state.material='todos';state.query='';state.maxDistance=20;renderResults();});
$('#sortResults').addEventListener('click',()=>{ const order=state.userPosition?['relevance','distance','alpha']:['relevance','alpha']; state.sort=order[(order.indexOf(state.sort)+1)%order.length]; renderResults(); });
$('#homeInstall').addEventListener('click',requestInstall); $('#homeInstallAction').addEventListener('click',requestInstall); $('#installAppButton').addEventListener('click',requestInstall);
$('#installClose').addEventListener('click',()=>$('#installDialog').close());
$('#installPrimary').addEventListener('click',()=>$('#installDialog').close());
$('#installDialog').addEventListener('click',e=>{if(e.target===$('#installDialog'))$('#installDialog').close();});

function connectSearch(input, clearBtn, suggestions, mode){
  input.addEventListener('input',()=>{
    const value=input.value; clearBtn.hidden=!value;
    renderSuggestions(suggestions,value,(type,id)=>{suggestions.hidden=true;handleSuggestion(type,id);});
    if(mode==='results'){state.nearbyMode=false;state.query=value;renderResults();}
  });
  input.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();state.query=input.value;const match=matchMaterials(input.value)[0];if(mode==='home'&&match){openMaterial(match.id);}else{state.nearbyMode=false;state.material='todos';showScreen('search');renderResults();} suggestions.hidden=true;}});
  clearBtn.addEventListener('click',()=>{input.value='';clearBtn.hidden=true;suggestions.hidden=true;if(mode==='results'){state.nearbyMode=false;state.query='';renderResults();}input.focus();});
}
connectSearch($('#homeSearch'),$('#homeSearchClear'),$('#homeSuggestions'),'home');
connectSearch($('#resultSearch'),$('#resultSearchClear'),$('#resultSuggestions'),'results');
document.addEventListener('click',e=>{if(!$('#homeSearchWrap').contains(e.target))$('#homeSuggestions').hidden=true;if(!$('#resultSearchWrap').contains(e.target))$('#resultSuggestions').hidden=true;});

window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstallPrompt=e;updateInstallUI();});
window.addEventListener('appinstalled',()=>{deferredInstallPrompt=null;updateInstallUI();showToast('EcoConecta instalado com sucesso.');});
const canSW=location.protocol==='https:'||['localhost','127.0.0.1'].includes(location.hostname);
if('serviceWorker'in navigator&&canSW) window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}));
updateInstallUI();

const splash = $('#splash');
const splashEnter = $('#splashEnter');
if (splash && splashEnter) {
  splashEnter.addEventListener('click', () => {
    splash.classList.add('hide');
    splash.setAttribute('aria-hidden', 'true');
    setTimeout(() => {
      splash.remove();
      const firstInteractive = $('#homeSearch');
      if (firstInteractive) firstInteractive.focus({ preventScroll: true });
    }, 460);
  });
}

