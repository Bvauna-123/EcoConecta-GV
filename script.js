Ir para o conteúdo
Menu de navegação

Produtos

Desenvolvedores

Empresas

Recursos
Preços
Bvauna-123
EcoConecta-GV
Navegação do repositório
Código
Problemas
Solicitações de pull
Ações
Projetos
Segurança e qualidade
Percepções
Commit 26f1b93
Bvauna-123
Bvauna-123
empenhado
semana
·
atualizar
atualizar
principal
1 pai
5f95457
comprometer-se
26f1b93
2 arquivos alterados​

+ 62
- 5
Linhas alteradas: 62 adições e 5 exclusões
Árvore de arquivos
Filtrar arquivos…
script.js
service-worker.js
Pesquisar dentro do código
 
‎script.js‎
+ 61
- 4
Linhas alteradas: 61 adições e 4 exclusões
Número da linha do arquivo original	Número da linha diferente	Mudança de linha diferencial
@@ -292,7 +292,21 @@ function renderMaterials(){
  $$('.material-card[data-material]',grid).forEach(btn=>btn.addEventListener('click',()=>openMaterial(btn.dataset.material)));
  $('[data-all]',grid)?.addEventListener('click',()=>{ state.material='todos'; state.query=''; showScreen('search'); });
}
function openMaterial(id){ state.selectedMaterial=id; state.material=id; addRecent(materialById(id).name,'material',id); showScreen('material'); }
function openMaterial(id){
  state.selectedMaterial=id;
  state.material=id;
  addRecent(materialById(id).name,'material',id);
  // Evento GA4: Clique em Material
  if(typeof gtag === 'function') {
    gtag('event', 'clique_material', {
      material_id: id,
      material_name: materialById(id)?.name
    });
  }
  showScreen('material');
}

function renderMaterialDetail(){
  const item=materialById(state.selectedMaterial || state.material);
@@ -385,6 +399,14 @@ function renderSuggestions(container,value,onSelect){
  $$('.suggestion-item',container).forEach(btn=>btn.addEventListener('click',()=>onSelect(btn.dataset.type,btn.dataset.id)));
}
function handleSuggestion(type,id){
  // Evento GA4: Clique em sugestão inteligente
  if(typeof gtag === 'function') {
    gtag('event', 'clique_sugestao', {
      tipo_sugestao: type,
      item_id: id
    });
  }
  if(type==='material'){ state.query=''; state.material=id; state.selectedMaterial=id; addRecent(materialById(id).name,'material',id); showScreen('material'); }
  else { const loc=locationById(id); state.nearbyMode=false; state.query=loc.district; state.material='todos'; addRecent(loc.name,'location',id); showScreen('search'); }
}
@@ -508,12 +530,48 @@ function connectSearch(input, clearBtn, suggestions, mode){
    renderSuggestions(suggestions,value,(type,id)=>{suggestions.hidden=true;handleSuggestion(type,id);});
    if(mode==='results'){state.nearbyMode=false;state.query=value;renderResults();}
  });
  input.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();state.query=input.value;const match=matchMaterials(input.value)[0];if(mode==='home'&&match){openMaterial(match.id);}else{state.nearbyMode=false;state.material='todos';showScreen('search');renderResults();} suggestions.hidden=true;}});
  input.addEventListener('keydown',e=>{
    if(e.key==='Enter'){
      e.preventDefault();
      state.query=input.value;
      // Evento GA4: Realizar busca por texto livre
      if(typeof gtag === 'function' && input.value.trim()) {
        gtag('event', 'realizar_busca', {
          termo_busca: input.value,
          origem: mode
        });
      }
      const match=matchMaterials(input.value)[0];
      if(mode==='home'&&match){openMaterial(match.id);}
      else{state.nearbyMode=false;state.material='todos';showScreen('search');renderResults();}
      suggestions.hidden=true;
    }
  });
  clearBtn.addEventListener('click',()=>{input.value='';clearBtn.hidden=true;suggestions.hidden=true;if(mode==='results'){state.nearbyMode=false;state.query='';renderResults();}input.focus();});
}
connectSearch($('#homeSearch'),$('#homeSearchClear'),$('#homeSuggestions'),'home');
connectSearch($('#resultSearch'),$('#resultSearchClear'),$('#resultSuggestions'),'results');
document.addEventListener('click',e=>{if(!$('#homeSearchWrap').contains(e.target))$('#homeSuggestions').hidden=true;if(!$('#resultSearchWrap').contains(e.target))$('#resultSuggestions').hidden=true;});
document.addEventListener('click',e=>{
  if(!$('#homeSearchWrap').contains(e.target))$('#homeSuggestions').hidden=true;
  if(!$('#resultSearchWrap').contains(e.target))$('#resultSuggestions').hidden=true;
  // Eventos GA4: Interações com Ecopontos (Mapa e Rotas)
  const routeBtn = e.target.closest('.route-btn, .route-open');
  if (routeBtn && typeof gtag === 'function') {
    gtag('event', 'tracar_rota', {
      destino_url: routeBtn.href
    });
  }
  const mapBtn = e.target.closest('[data-map]');
  if (mapBtn && typeof gtag === 'function') {
    gtag('event', 'ver_mapa_ecoponto', {
      ponto_id: mapBtn.dataset.map
    });
  }
});

window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstallPrompt=e;updateInstallUI();});
window.addEventListener('appinstalled',()=>{deferredInstallPrompt=null;updateInstallUI();showToast('EcoConecta instalado com sucesso.');});
@@ -534,4 +592,3 @@ if (splash && splashEnter) {
    }, 460);
  });
}
‎service-worker.js‎
+ 1
- 1
Linhas alteradas: 1 adição e 1 exclusão
Número da linha do arquivo original	Número da linha diferente	Mudança de linha diferencial
@@ -1,4 +1,4 @@
const CACHE_NAME = 'ecoconecta-gv-app-v8';
const CACHE_NAME = 'ecoconecta-gv-app-v9';
const APP_SHELL = [
  './', './index.html', './styles.css', './script.js', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png', './icons/favicon-32.png'
0 comentários de commit
Comentários
0
 ( 0 )
Please sign in to comment.
