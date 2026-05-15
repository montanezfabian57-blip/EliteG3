import{jsxDEV as Q,Fragment as PJ}from"react/jsx-dev-runtime";const Z1={apiKey:"AIzaSyAcrVq7ryWv5EJbRhZ1TmhFia-LAV10cN4",authDomain:"eliteg3-1650f.firebaseapp.com",databaseURL:"https://eliteg3-1650f-default-rtdb.firebaseio.com/",projectId:"eliteg3-1650f",storageBucket:"eliteg3-1650f.firebasestorage.app",messagingSenderId:"351711372153",appId:"1:351711372153:web:60ce4742396e37974f85a8",measurementId:"G-HGYPLEY6DJ"};if(!firebase.apps.length)firebase.initializeApp(Z1);const K=firebase.database(),$1=firebase.storage(),{useState:U,useEffect:d,useMemo:f,useRef:VJ}=React,$J=["C","P","B","N","S","E","X","R"],H1=["R"],qQ="anonimo/galeria",SJ="__anonimo_gallery__",kZ="eliteg3:perfiles-cache:v1",SZ="eliteg3:gallery-audios-cache:v1",j1=["PERSONAJE","ETIQUETA","GENERAL"],xZ={PERSONAJE:"Personaje",ETIQUETA:"Etiqueta",GENERAL:"General"},aJ=[{id:"perfil",label:"Perfil",labels:[]},{id:"colaPiernas",label:"Cola/Piernas",labels:["C"]},{id:"pechos",label:"Pechos",labels:["P"]},{id:"cuerpoCintura",label:"Cintura/Cuerpo",labels:["N","B"]},{id:"sensualidad",label:"Sensualidad",labels:["E","S"]}],q1={perfil:"perfil",pecho:"pechos",pechos:"pechos",cola:"colaPiernas",piernas:"colaPiernas",cuerpo:"cuerpoCintura",cintura:"cuerpoCintura",sensualidad:"sensualidad"},XY=()=>aJ.reduce((_,W)=>{_[W.id]="";return _},{}),FJ=(_={})=>{const W=XY(),R=_&&typeof _==="object"?_:{};return Object.keys(W).reduce((N,E)=>{N[E]=typeof R[E]==="string"?R[E].trim():"";return N},{...W})},VX=(_="")=>aJ.find((W)=>W.id===_),_1=(_="")=>q1[(_||"").trim().toLowerCase()]||"",DX={C:{bg:"linear-gradient(135deg, rgba(34,211,238,0.92), rgba(14,116,144,0.95))",border:"rgba(103,232,249,0.95)",glow:"rgba(34,211,238,0.8)",text:"#ecfeff"},P:{bg:"linear-gradient(135deg, rgba(244,114,182,0.92), rgba(157,23,77,0.95))",border:"rgba(251,207,232,0.95)",glow:"rgba(244,114,182,0.78)",text:"#fff1f2"},B:{bg:"linear-gradient(135deg, rgba(251,191,36,0.94), rgba(180,83,9,0.95))",border:"rgba(253,224,71,0.98)",glow:"rgba(251,191,36,0.82)",text:"#fffbea"},N:{bg:"linear-gradient(135deg, rgba(163,230,53,0.92), rgba(63,98,18,0.95))",border:"rgba(217,249,157,0.95)",glow:"rgba(163,230,53,0.78)",text:"#f7fee7"},S:{bg:"linear-gradient(135deg, rgba(192,132,252,0.92), rgba(107,33,168,0.95))",border:"rgba(233,213,255,0.95)",glow:"rgba(192,132,252,0.8)",text:"#faf5ff"},E:{bg:"linear-gradient(135deg, rgba(248,113,113,0.92), rgba(153,27,27,0.95))",border:"rgba(254,202,202,0.95)",glow:"rgba(248,113,113,0.8)",text:"#fef2f2"},X:{bg:"linear-gradient(135deg, rgba(239,68,68,0.98), rgba(127,29,29,0.98))",border:"rgba(254,226,226,1)",glow:"rgba(239,68,68,0.95)",text:"#fff7f7"},R:{bg:"linear-gradient(135deg, rgba(148,163,184,0.95), rgba(71,85,105,0.98))",border:"rgba(226,232,240,0.95)",glow:"rgba(148,163,184,0.82)",text:"#f8fafc"},DEFAULT:{bg:"linear-gradient(135deg, rgba(51,65,85,0.92), rgba(15,23,42,0.95))",border:"rgba(148,163,184,0.85)",glow:"rgba(148,163,184,0.45)",text:"#f8fafc"}},_Q=(_,W)=>{if(!W)return 0;return(_+W)%W},PZ=(_,W,R=!1)=>{const N=Array.isArray(W)?W.length:0;if(!N)return null;if(N===1)return 0;if(R){const E=W.map((I,n)=>({item:I,idx:n})).filter(({item:I,idx:n})=>n!==_&&I&&I.url).map(({idx:I})=>I);if(!E.length)return _Q((_??0)+1,N);return E[Math.floor(Math.random()*E.length)]}return _Q((_??0)+1,N)},rJ=(_)=>DX[_]||DX.DEFAULT,CX=(_,W=!1)=>{const R=_==="INICIAL"?DX.DEFAULT:_==="100"?DX.B:rJ(_);return{"--btn-neon-color":R.glow,borderColor:R.border,color:R.text,boxShadow:W?`inset 0 1px 0 rgba(186,230,253,0.35), 0 0 0 1px ${R.border}, 0 0 20px ${R.glow}`:`inset 0 1px 0 rgba(186,230,253,0.2), 0 0 0 1px color-mix(in srgb, ${R.border} 65%, rgba(15,23,42,0.65) 35%), 0 0 12px color-mix(in srgb, ${R.glow} 60%, transparent)`,textShadow:`0 0 8px color-mix(in srgb, ${R.glow} 70%, transparent)`,filter:W?"brightness(1.14)":"brightness(1)"}},bZ=/\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i,W1=/\.(mp3|wav|ogg|m4a|aac|flac)(\?.*)?$/i,O1=/\.gif(\?.*)?$/i,L1=/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/i,E1=/vimeo\.com\/(?:video\/)?(\d+)/i,WQ=(_)=>{const W=(_||"").trim();if(!W)return null;const R=W.match(L1);if(R)return{provider:"youtube",src:`https://www.youtube.com/embed/${R[1]}`,title:"Video de YouTube"};const N=W.match(E1);if(N)return{provider:"vimeo",src:`https://player.vimeo.com/video/${N[1]}`,title:"Video de Vimeo"};return null},F1=["eporner.com"],vZ=(_="")=>{const W=String(_||"").trim();if(!W||W.startsWith("data:")||W.startsWith("blob:"))return!1;try{const N=new URL(W).hostname.toLowerCase();return F1.some((E)=>N===E||N.endsWith(`.${E}`))}catch{return!1}},_J=(_="",W="")=>{const R=String(_||"").trim();if(!R||vZ(R))return W;return R},eJ=(_="",W="")=>{if(W==="video"||W==="image")return W;const R=(_||"").trim();if(bZ.test(R)||WQ(R))return"video";return"image"},YY=(_="")=>{return typeof _==="string"?_.trim():""},i=(_,W="")=>{if(typeof _==="string")return{url:_J(_.trim(),""),label:"",type:eJ(_,W),autor:""};if(_&&typeof _==="object"){const R=_J((_.url||"").trim(),"");return{url:R,label:$J.includes(_.label)?_.label:"",type:eJ(R,_.type||W),autor:YY(_.autor)}}return{url:"",label:"",type:eJ("",W),autor:""}},U1=(_)=>i(_).url,IZ=(_)=>i(_).label,JQ=(_)=>i(_).type,ZY=(_,W,R="image")=>Array.isArray(_?.[W])?_[W].map((N)=>i(N,R)).filter((N)=>N.url):[],V1=(_={})=>({firebaseId:SJ,nombre:"Anónimo",nacionalidad:"",ciudad:"",profesion:"Galería",fechaNacimiento:"",estaturaCm:"",fotos:[],galeria:{fotos:ZY(_,"fotos","image"),gifs:ZY(_,"gifs","image"),videos:ZY(_,"videos","video")},batallaFotosPreferidas:XY(),puntuaciones:vQ(),isAnonymousGallery:!0}),gZ=(_,W)=>{try{const R=window.localStorage.getItem(_);if(!R)return W;return JSON.parse(R)??W}catch{return W}},hZ=(_,W)=>{try{window.localStorage.setItem(_,JSON.stringify(W))}catch{}},D1=(_={})=>{if(_?.isAnonymousGallery||_?.firebaseId===SJ)return"anonimo";return _?.firebaseId||""},C1=(_={})=>{const W=_J(String(_?.fotos?.[0]||"").trim(),""),R=FJ(_?.batallaFotosPreferidas||_?.galeria?.battlePhotoPreferences||{});if(!W)return!1;return aJ.filter((N)=>N.id!=="perfil").every((N)=>Boolean(String(R?.[N.id]||"").trim()))},R1=(_={})=>{const W=[],R=_J(String(_?.fotos?.[0]||"").trim(),""),N=FJ(_?.batallaFotosPreferidas||_?.galeria?.battlePhotoPreferences||{});if(!R)W.push("Perfil");aJ.filter((E)=>E.id!=="perfil").forEach((E)=>{if(!String(N?.[E.id]||"").trim())W.push(E.label)});return W},B1=(_=null)=>{if(!_)return;const W=window.open("","_blank");if(!W)return;const R=_?.firebaseId||_?.id||"",N=Array.isArray(_?.galeria?.fotos)?_.galeria.fotos.map((T)=>i(T,"image")).filter((T)=>T.url).map((T,w)=>({...T,sourceTag:"fotos",sourceIndex:w})):[],E=N.filter((T)=>T.type==="image"&&T.sourceTag==="fotos"),I=FJ(_?.batallaFotosPreferidas||_?.galeria?.battlePhotoPreferences||{}),n=_J(String(_?.fotos?.[0]||_?.foto||"").trim(),""),HJ=N.filter((T)=>T.type==="image"&&T.url).reduce((T,w)=>{T[w.url]=w;return T},{}),p=N.length?N.map((T,w)=>`
                    <button
                        type="button"
                        class="surface-panel rounded-xl overflow-hidden border border-cyan-200/20 text-left multimedia-thumb-btn"
                        data-url="${T.url}"
                        data-label="${T.label||""}"
                        data-index="${T.sourceIndex}"
                        data-tag="${T.sourceTag}"
                        data-media-type="${T.type||"image"}"
                        draggable="true"
                        title="Editar URL o etiqueta"
                    >
                        <div class="multimedia-thumb-wrap">
                            <img src="${T.url}" alt="Multimedia ${w+1}" style="width:100%;height:100%;object-fit:contain;" loading="lazy" />
                            <span class="multimedia-thumb-label">${T.label||"SIN ETIQUETA"}</span>
                        </div>
                    </button>
                `).join(""):'<p class="text-slate-300">Sin contenido en galería.</p>',v=E.length?E.map((T,w)=>`
                    <button
                        type="button"
                        class="surface-panel rounded-xl overflow-hidden border border-rose-300/35 text-left multimedia-thumb-btn multimedia-thumb-btn--broken"
                        data-url="${T.url}"
                        data-label="${T.label||""}"
                        data-index="${T.sourceIndex}"
                        data-tag="${T.sourceTag}"
                        data-media-type="${T.type||"image"}"
                        draggable="true"
                        data-broken-card="true"
                        style="display:none;"
                        title="Imagen rota: tocar para editar URL o etiqueta"
                    >
                        <div class="multimedia-thumb-wrap multimedia-thumb-wrap--broken">
                            <img src="${T.url}" alt="Imagen rota ${w+1}" style="width:100%;height:100%;object-fit:contain;" loading="lazy" />
                            <span class="multimedia-thumb-label">${T.label||"SIN ETIQUETA"}</span>
                        </div>
                    </button>
                `).join(""):'<p class="text-slate-300">Sin imágenes en galería.</p>',D=aJ.map((T)=>{const w=T.id==="perfil",x=w?n:I[T.id]||"",M=x?w?{url:x}:HJ[x]||{url:x,label:"",sourceIndex:-1}:null,UJ=Boolean(x);return`
                    <div class="multimedia-slot-card ${UJ?"is-assigned":"is-missing"}" data-slot-id="${T.id}">
                        <div class="multimedia-slot-top">
                            <span class="multimedia-slot-title">${T.label}</span>
                            <span class="multimedia-slot-state">${UJ?"VERDE":"ROJO"}</span>
                        </div>
                        <div class="multimedia-slot-preview">
                            ${UJ?`<img src="${M.url}" alt="${T.label}" loading="lazy" />`:'<span class="multimedia-slot-empty">Sin foto designada</span>'}
                        </div>
                        <div class="multimedia-slot-actions">
                            ${!w?`<button type="button" class="multimedia-slot-assign-btn" data-slot-assign="${T.id}">DESIGNAR FOTO</button>`:""}
                            <button type="button" class="multimedia-slot-add-btn" data-slot-add="${T.id}">Agregar URL/Archivo</button>
                        </div>
                    </div>
                `}).join("");W.document.write(`
                <!DOCTYPE html>
                <html lang="es">
                    <head>
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Multimedia - ${_?.nombre||"Personaje"}</title>
                        <script src="https://cdn.tailwindcss.com"></script>
                        <link rel="stylesheet" href="styles.css" />
                        <style>
                            .multimedia-gallery-scroll { overflow: visible; padding-right: 0; }
                            .multimedia-gallery-scroll::-webkit-scrollbar { width: 8px; }
                            .multimedia-gallery-scroll::-webkit-scrollbar-thumb { background: rgba(34,211,238,0.45); border-radius: 99px; }
                            .multimedia-thumb-btn { transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease; }
                            .multimedia-thumb-btn:hover { transform: translateY(-2px); border-color: rgba(34,211,238,0.55); box-shadow: 0 0 22px rgba(34,211,238,0.22); }
                            .multimedia-thumb-wrap { position: relative; background: rgba(2,6,23,0.78); height: 170px; display: flex; align-items: center; justify-content: center; }
                            .multimedia-thumb-wrap--broken::after {
                                content: 'ROTA';
                                position: absolute;
                                top: 8px;
                                left: 8px;
                                font-size: 10px;
                                font-weight: 900;
                                letter-spacing: .12em;
                                text-transform: uppercase;
                                color: #fecaca;
                                background: rgba(127,29,29,.82);
                                border: 1px solid rgba(252,165,165,.8);
                                border-radius: 999px;
                                padding: 3px 8px;
                            }
                            .multimedia-thumb-label {
                                position: absolute; right: 8px; bottom: 8px; z-index: 4; max-width: calc(100% - 16px);
                                border-radius: 999px; padding: 4px 10px; font-size: 10px; font-weight: 800; letter-spacing: .12em;
                                text-transform: uppercase; color: #ecfeff; border: 1px solid rgba(34,211,238,.72);
                                background: rgba(2,6,23,.82); backdrop-filter: blur(6px); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
                            }
                            .multimedia-slots-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 10px; }
                            .multimedia-slot-card { border-radius: 12px; padding: 10px; border: 1px solid rgba(148,163,184,0.45); background: rgba(2,6,23,0.72); box-shadow: inset 0 1px 0 rgba(255,255,255,0.08); transition: border-color .16s ease, box-shadow .16s ease, transform .16s ease; }
                            .multimedia-slot-card.drop-hover { border-color: rgba(56,189,248,0.95); box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(56,189,248,0.35), 0 0 22px rgba(34,211,238,0.35); transform: translateY(-1px); }
                            .multimedia-slot-card.drop-active { border-color: rgba(14,165,233,1); box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(14,165,233,0.4), 0 0 30px rgba(14,165,233,0.44); transform: translateY(-2px); }
                            .multimedia-slot-card.is-assigned { border-color: rgba(34,197,94,0.95); box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(34,197,94,0.3); }
                            .multimedia-slot-card.is-missing { border-color: rgba(239,68,68,0.95); box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(239,68,68,0.24); }
                            .multimedia-slot-top { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px; }
                            .multimedia-slot-title { font-size: 10px; font-weight: 900; letter-spacing: .12em; text-transform: uppercase; color: #f8fafc; }
                            .multimedia-slot-state { font-size: 9px; font-weight: 900; letter-spacing: .12em; text-transform: uppercase; }
                            .multimedia-slot-card.is-assigned .multimedia-slot-state { color: #86efac; }
                            .multimedia-slot-card.is-missing .multimedia-slot-state { color: #fca5a5; }
                            .multimedia-slot-preview { border-radius: 8px; overflow: hidden; aspect-ratio: 4/3; border: 1px dashed rgba(148,163,184,0.45); background: rgba(15,23,42,0.88); display: flex; align-items: center; justify-content: center; }
                            .multimedia-slot-preview img { width: 100%; height: 100%; object-fit: cover; display:block; }
                            .multimedia-slot-empty { color: #fca5a5; font-size: 10px; text-transform: uppercase; letter-spacing: .08em; font-weight: 700; text-align: center; padding: 0 8px; }
                            .multimedia-slot-card.is-active { border-color: rgba(251,191,36,0.96); box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(251,191,36,0.32), 0 0 20px rgba(251,191,36,0.22); }
                            .multimedia-slot-actions { display:grid; gap:6px; margin-top:8px; }
                            .multimedia-slot-assign-btn, .multimedia-slot-add-btn { width:100%; border-radius:8px; padding:6px 8px; font-size:10px; font-weight:800; letter-spacing:.08em; text-transform:uppercase; cursor:pointer; transition:filter .16s ease, transform .16s ease; }
                            .multimedia-slot-assign-btn { border:1px solid rgba(203,213,225,0.9); background: linear-gradient(165deg, rgba(148,163,184,0.5) 0%, rgba(71,85,105,0.82) 45%, rgba(30,41,59,0.94) 100%); color:#f8fafc; box-shadow: inset 0 1px 0 rgba(255,255,255,0.42), inset 0 -1px 0 rgba(15,23,42,0.55), 0 6px 12px rgba(2,6,23,0.45); }
                            .multimedia-slot-assign-btn.is-selected { border-color: rgba(74,222,128,0.98); background: linear-gradient(160deg, rgba(22,163,74,0.98) 0%, rgba(34,197,94,0.94) 45%, rgba(20,83,45,0.98) 100%); color:#ecfdf5; box-shadow: inset 0 1px 0 rgba(220,252,231,0.55), inset 0 -1px 0 rgba(5,46,22,0.62), 0 0 16px rgba(74,222,128,0.95), 0 0 34px rgba(34,197,94,0.82); filter: brightness(1.24) saturate(1.2); }
                            .multimedia-slot-add-btn { border:1px solid rgba(125,211,252,0.6); background: rgba(2,6,23,0.82); color:#e2e8f0; box-shadow:0 0 12px rgba(34,211,238,0.22); }
                            .multimedia-slot-assign-btn:hover, .multimedia-slot-add-btn:hover { transform: translateY(-1px); filter: brightness(1.08); }
                        </style>
                    </head>
                    <body class="text-slate-200">
                        <main class="min-h-screen p-4 md:p-8">
                            <section class="gothic-frame surface-panel surface-panel--neon rounded-[2rem] p-6 md:p-8 w-full max-w-6xl mx-auto">
                                <h1 class="font-title text-center text-3xl md:text-4xl text-white uppercase tracking-wide">Multimedia</h1>
                                <p class="text-center text-cyan-100/80 text-xs uppercase tracking-[0.2em] mt-2">${_?.nombre||"Personaje"}</p>
                                <article class="surface-panel rounded-2xl border border-cyan-200/20 mt-6 p-4">
                                    <h2 class="font-black uppercase tracking-wide mb-3">Galería</h2>
                                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">${p}</div>
                                </article>
                                <article class="surface-panel rounded-2xl border border-cyan-200/20 mt-4 p-4">
                                    <h2 class="font-black uppercase tracking-wide mb-3">5 principales</h2>
                                    <div class="multimedia-slots-grid">${D}</div>
                                </article>
                                <article class="surface-panel rounded-2xl border border-rose-300/25 mt-4 p-4">
                                    <h2 class="font-black uppercase tracking-wide mb-2">Imágenes rotas</h2>
                                    <p class="text-xs text-rose-100/80 uppercase tracking-[0.12em] mb-3">Solo fotos que ya no cargan. Tocá una para corregir URL y etiqueta.</p>
                                    <div id="brokenGalleryGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">${v}</div>
                                    <p id="brokenGalleryEmpty" class="text-sm text-slate-300">No hay imágenes rotas detectadas.</p>
                                </article>
                            </section>
                        </main>
                        <script>
                            const profileId = ${JSON.stringify(R)};
                            const validLabels = ${JSON.stringify($J)};
                            const dbRef = window.opener && window.opener.firebase && window.opener.firebase.database ? window.opener.firebase.database() : null;
                            const normalizeLabel = (rawLabel = '') => validLabels.includes(rawLabel) ? rawLabel : '';
                            const brokenCards = new Set();
                            var DND_PAYLOAD_TYPE = 'application/x-battle-slot-item';
                            var LONG_PRESS_MS = 280;
                            var longPressTimer = null;
                            var touchPayload = null;
                            const isImagePayload = (payload) => String(payload?.mediaType || '').trim() === 'image';
                            const assignToSlot = (payload = {}, slotId = '') => {
                                if (!window.opener || !slotId || !isImagePayload(payload)) return false;
                                const sourceIndex = Number(payload.sourceIndex);
                                if (!Number.isInteger(sourceIndex) || sourceIndex < 0) return false;
                                window.opener.postMessage({ type: 'SET_BATTLE_PHOTO_PREF', id: '${R}', slotId, index: sourceIndex, mediaType: 'image' }, '*');
                                return true;
                            };
                            const syncBrokenEmptyState = () => {
                                const grid = document.getElementById('brokenGalleryGrid');
                                const empty = document.getElementById('brokenGalleryEmpty');
                                if (!grid || !empty) return;
                                const visibleBrokenCount = Array.from(grid.querySelectorAll('[data-broken-card="true"]'))
                                    .filter((card) => card.style.display !== 'none').length;
                                empty.style.display = visibleBrokenCount ? 'none' : 'block';
                            };
                            const saveGalleryItem = async ({ sourceTag = 'fotos', sourceIndex = -1, url = '', label = '' }) => {
                                if (!dbRef || !profileId || sourceIndex < 0) return false;
                                const galleryRef = dbRef.ref(\`perfiles/\${profileId}/galeria/\${sourceTag}\`);
                                const snapshot = await galleryRef.once('value');
                                const currentItems = Array.isArray(snapshot.val()) ? snapshot.val() : [];
                                if (!currentItems[sourceIndex]) return false;
                                const rawItem = currentItems[sourceIndex];
                                const nextItem = typeof rawItem === 'string'
                                    ? { url: String(url || '').trim(), label: normalizeLabel(label), type: 'image', autor: '' }
                                    : { ...rawItem, url: String(url || '').trim(), label: normalizeLabel(label), autor: normalizeGalleryAuthor(rawItem?.autor) };
                                currentItems[sourceIndex] = nextItem;
                                await galleryRef.set(currentItems);
                                return true;
                            };
                            var activeSlotSelectionId = '';
                            const slotCards = Array.from(document.querySelectorAll('.multimedia-slot-card'));
                            const slotAssignButtons = Array.from(document.querySelectorAll('[data-slot-assign]'));
                            const updateSlotCardAssignedState = (slotId = '', assignedUrl = '') => {
                                if (!slotId) return;
                                const card = slotCards.find((slotCard) => slotCard.dataset.slotId === slotId);
                                if (!card) return;
                                const normalizedUrl = String(assignedUrl || '').trim();
                                const isAssigned = Boolean(normalizedUrl);
                                card.classList.toggle('is-assigned', isAssigned);
                                card.classList.toggle('is-missing', !isAssigned);
                                const stateBadge = card.querySelector('.multimedia-slot-state');
                                if (stateBadge) {
                                    stateBadge.textContent = isAssigned ? 'VERDE' : 'ROJO';
                                }
                                const previewContainer = card.querySelector('.multimedia-slot-preview');
                                if (previewContainer) {
                                    previewContainer.innerHTML = isAssigned
                                        ? '<img alt="" loading="lazy" />'
                                        : '<span class="multimedia-slot-empty">Sin foto designada</span>';
                                    if (isAssigned) {
                                        const img = previewContainer.querySelector('img');
                                        if (img) {
                                            img.src = normalizedUrl;
                                            img.alt = slotConfigById[slotId]?.label || 'Foto designada';
                                        }
                                    }
                                }
                            };
                            const setActiveSlotSelection = (slotId = '') => {
                                activeSlotSelectionId = slotId || '';
                                slotCards.forEach((card) => {
                                    const isActive = activeSlotSelectionId && card.dataset.slotId === activeSlotSelectionId;
                                    card.classList.toggle('is-active', Boolean(isActive));
                                });
                                slotAssignButtons.forEach((button) => {
                                    const isSelected = activeSlotSelectionId && button.dataset.slotAssign === activeSlotSelectionId;
                                    button.classList.toggle('is-selected', Boolean(isSelected));
                                });
                            };
                            const slotConfigById = ${JSON.stringify(aJ.reduce((T,w)=>{T[w.id]=w;return T},{}))};
                            const assignBattlePhotoFromGallery = async ({ slotId = '', sourceIndex = -1, mediaType = 'image', cardButton = null }) => {
                                if (!slotId || sourceIndex < 0 || mediaType !== 'image') return false;
                                if (slotId === 'perfil') {
                                    window.alert('El casillero Perfil usa la foto principal del personaje.');
                                    return false;
                                }
                                const slotConfig = slotConfigById[slotId];
                                if (!slotConfig) return false;
                                try {
                                    if (dbRef && profileId) {
                                        const selectedUrl = String(cardButton?.dataset.url || '').trim();
                                        await dbRef.ref(\`perfiles/\${profileId}/batallaFotosPreferidas/\${slotId}\`).set(selectedUrl);
                                        updateSlotCardAssignedState(slotId, selectedUrl);
                                    } else if (window.opener) {
                                        const selectedUrl = String(cardButton?.dataset.url || '').trim();
                                        window.opener.postMessage({ type: 'SET_BATTLE_PHOTO_PREF', id: profileId, slotId, index: sourceIndex, mediaType: 'image' }, '*');
                                        updateSlotCardAssignedState(slotId, selectedUrl);
                                    } else {
                                        return false;
                                    }
                                    setActiveSlotSelection('');
                                    return true;
                                } catch (error) {
                                    console.error('No se pudo asignar la imagen del casillero:', error);
                                    window.alert('No se pudo asignar la imagen al casillero.');
                                    return false;
                                }
                            };
                            document.querySelectorAll('[data-slot-assign]').forEach((button) => {
                                button.addEventListener('click', () => {
                                    const slotId = button.dataset.slotAssign || '';
                                    setActiveSlotSelection(slotId);
                                    
                                });
                            });
                            document.querySelectorAll('[data-slot-add]').forEach((button) => {
                                button.addEventListener('click', () => {
                                    const slotId = button.dataset.slotAdd || '';
                                    window.alert(\`Usá la edición de miniatura de Galería para cargar o actualizar la URL/archivo del casillero \${slotId}.\`);
                                });
                            });

                            document.querySelectorAll('.multimedia-thumb-btn').forEach((button) => {
                                button.addEventListener('dragstart', (event) => {
                                    const payload = {
                                        sourceIndex: Number(button.dataset.index),
                                        mediaType: button.dataset.mediaType || 'image',
                                        url: button.dataset.url || ''
                                    };
                                    if (!isImagePayload(payload)) return;
                                    event.dataTransfer.effectAllowed = 'copy';
                                    event.dataTransfer.setData(DND_PAYLOAD_TYPE, JSON.stringify(payload));
                                    event.dataTransfer.setData('text/plain', payload.url || '');
                                });
                                const isBrokenCard = button.dataset.brokenCard === 'true';
                                const img = button.querySelector('img');
                                if (isBrokenCard && img) {
                                    img.addEventListener('error', () => {
                                        button.style.display = '';
                                        brokenCards.add(button.dataset.index || '');
                                        syncBrokenEmptyState();
                                    });
                                    img.addEventListener('load', () => {
                                        button.style.display = 'none';
                                        brokenCards.delete(button.dataset.index || '');
                                        syncBrokenEmptyState();
                                    });
                                }
                                button.addEventListener('click', async () => {
                                    const sourceTag = button.dataset.tag || 'fotos';
                                    const sourceIndex = Number(button.dataset.index);
                                    if (activeSlotSelectionId) {
                                        const assigned = await assignBattlePhotoFromGallery({ slotId: activeSlotSelectionId, sourceIndex, mediaType: 'image', cardButton: button });
                                        if (assigned) return;
                                    }
                                    const currentUrl = button.dataset.url || '';
                                    const currentLabel = button.dataset.label || '';
                                    const nextUrl = window.prompt('Nueva URL de la multimedia:', currentUrl);
                                    if (nextUrl === null) return;
                                    const nextLabel = window.prompt('Nueva etiqueta (C, P, B, N, S, E, X):', currentLabel || 'C');
                                    if (nextLabel === null) return;
                                    try {
                                        const saved = await saveGalleryItem({ sourceTag, sourceIndex, url: nextUrl, label: nextLabel });
                                        if (!saved) return;
                                        button.dataset.url = nextUrl.trim();
                                        button.dataset.label = normalizeLabel((nextLabel || '').trim().toUpperCase());
                                        const img = button.querySelector('img');
                                        const badge = button.querySelector('.multimedia-thumb-label');
                                        if (img) img.src = nextUrl.trim();
                                        if (badge) badge.textContent = button.dataset.label || 'SIN ETIQUETA';
                                        if (isBrokenCard) syncBrokenEmptyState();
                                    } catch (error) {
                                        console.error('No se pudo guardar multimedia:', error);
                                        window.alert('No se pudo actualizar esta multimedia.');
                                    }
                                });
                            });
                            document.querySelectorAll('.multimedia-slot-card').forEach((slotCard) => {
                                const slotId = slotCard.dataset.slotId || '';
                                if (!slotId || slotId === 'perfil') return;
                                slotCard.addEventListener('dragover', (event) => {
                                    let payload = null;
                                    try { payload = JSON.parse(event.dataTransfer.getData(DND_PAYLOAD_TYPE) || '{}'); } catch {}
                                    if (!isImagePayload(payload)) return;
                                    event.preventDefault();
                                    event.dataTransfer.dropEffect = 'copy';
                                    slotCard.classList.add('drop-hover');
                                });
                                slotCard.addEventListener('dragleave', () => {
                                    slotCard.classList.remove('drop-hover', 'drop-active');
                                });
                                slotCard.addEventListener('drop', (event) => {
                                    event.preventDefault();
                                    slotCard.classList.remove('drop-hover');
                                    slotCard.classList.add('drop-active');
                                    let payload = null;
                                    try { payload = JSON.parse(event.dataTransfer.getData(DND_PAYLOAD_TYPE) || '{}'); } catch {}
                                    assignToSlot(payload, slotId);
                                    setTimeout(() => slotCard.classList.remove('drop-active'), 160);
                                });
                            });
                            document.querySelectorAll('.multimedia-thumb-btn').forEach((button) => {
                                button.addEventListener('pointerdown', (event) => {
                                    if (button.dataset.mediaType !== 'image') return;
                                    clearTimeout(longPressTimer);
                                    touchPayload = {
                                        sourceIndex: Number(button.dataset.index),
                                        mediaType: button.dataset.mediaType || 'image',
                                        url: button.dataset.url || ''
                                    };
                                    longPressTimer = setTimeout(() => {
                                        button.style.outline = '2px solid rgba(34,211,238,0.85)';
                                    }, LONG_PRESS_MS);
                                });
                                button.addEventListener('pointerup', (event) => {
                                    clearTimeout(longPressTimer);
                                    button.style.outline = '';
                                    if (!touchPayload) return;
                                    const slotEl = document.elementFromPoint(event.clientX, event.clientY)?.closest('.multimedia-slot-card[data-slot-id]');
                                    if (slotEl && slotEl.dataset.slotId && slotEl.dataset.slotId !== 'perfil') {
                                        assignToSlot(touchPayload, slotEl.dataset.slotId);
                                    }
                                    touchPayload = null;
                                });
                                button.addEventListener('pointercancel', () => {
                                    clearTimeout(longPressTimer);
                                    button.style.outline = '';
                                    touchPayload = null;
                                });
                            });

                        </script>
                    </body>
                </html>
            `);W.document.close()},z1=({isOpen:_=!1,profile:W=null,onClose:R=()=>{}})=>{const[N,E]=U(!0),[I,n]=U(!0);d(()=>{if(!_)return;E(!0);n(!0)},[_,W?.firebaseId]);if(!_||!W)return null;const HJ=Array.isArray(W?.galeria?.fotos)?W.galeria.fotos.map((v)=>i(v,"image")).filter((v)=>v.url):[],p=Object.entries(W?.puntuaciones||{}).map(([v,D])=>({label:v,value:Number(D)||0})).sort((v,D)=>D.value-v.value).slice(0,5);return Q("div",{className:"fixed inset-0 z-[180] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm px-4 py-8",onClick:R,role:"presentation",children:Q("section",{className:"gothic-frame surface-panel surface-panel--neon rounded-[2rem] p-6 md:p-8 w-full max-w-5xl max-h-[90vh] overflow-y-auto relative",onClick:(v)=>v.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Multimedia del personaje",children:[Q("button",{type:"button",onClick:R,className:"absolute top-4 right-4 w-10 h-10 rounded-full border border-cyan-200/35 bg-slate-900/80 text-slate-100",children:"✕"},void 0,!1,void 0,this),Q("h2",{className:"font-title text-center text-3xl md:text-4xl text-white uppercase tracking-wide",children:"Multimedia"},void 0,!1,void 0,this),Q("p",{className:"text-center text-cyan-100/80 text-xs uppercase tracking-[0.2em] mt-2",children:W?.nombre||"Personaje"},void 0,!1,void 0,this),Q("div",{className:"mt-6 space-y-4",children:[Q("article",{className:"surface-panel rounded-2xl border border-cyan-200/20",children:[Q("button",{type:"button",onClick:()=>E((v)=>!v),className:"w-full px-4 py-3 text-left font-black uppercase tracking-wide flex items-center justify-between",children:[Q("span",{children:"Galería"},void 0,!1,void 0,this),Q("span",{children:N?"−":"+"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),N&&Q("div",{className:"px-4 pb-4 grid grid-cols-2 md:grid-cols-4 gap-3",children:HJ.length?HJ.map((v,D)=>Q("div",{className:"rounded-xl overflow-hidden border border-slate-600/40 bg-slate-900/40",children:Q("img",{src:v.url,alt:`Multimedia ${D+1}`,className:"w-full h-36 object-cover",loading:"lazy"},void 0,!1,void 0,this)},`${v.url}-${D}`,!1,void 0,this)):Q("p",{className:"text-sm text-slate-300 col-span-full",children:"Sin contenido en galería."},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("article",{className:"surface-panel rounded-2xl border border-cyan-200/20",children:[Q("button",{type:"button",onClick:()=>n((v)=>!v),className:"w-full px-4 py-3 text-left font-black uppercase tracking-wide flex items-center justify-between",children:[Q("span",{children:"5 Principales"},void 0,!1,void 0,this),Q("span",{children:I?"−":"+"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),I&&Q("div",{className:"px-4 pb-4 space-y-2",children:p.length?p.map((v)=>Q("div",{className:"surface-panel rounded-xl px-3 py-2 flex items-center justify-between",children:[Q("span",{className:"text-sm text-slate-200 uppercase",children:v.label},void 0,!1,void 0,this),Q("strong",{className:"text-cyan-200",children:v.value},void 0,!1,void 0,this)]},v.label,!0,void 0,this)):Q("p",{className:"text-sm text-slate-300",children:"Sin puntajes cargados."},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)},yZ=async(_="",{timeoutMs:W=12000,retries:R=1}={})=>{const N=String(_||"").trim();if(!N)return!0;const E=()=>new Promise((I)=>{const n=new Image;let HJ=!1;const p=(D)=>{if(HJ)return;HJ=!0;n.onload=null;n.onerror=null;I(Boolean(D))},v=window.setTimeout(()=>p(!0),W);n.onload=()=>{clearTimeout(v);const D=Number(n.naturalWidth)>0&&Number(n.naturalHeight)>0;p(!D)};n.onerror=()=>{clearTimeout(v);p(!0)};n.src=N});for(let I=0;I<=R;I+=1)if(!await E())return!1;return!0},mZ=(_,W)=>{const R=(W||"").trim().toLowerCase(),N=Array.isArray(_?.galeria?.fotos)?_.galeria.fotos.map((x)=>i(x,"image")).filter((x)=>x.type==="image"&&x.url):[],I=_J(_?.fotos?.[0],"")||"https://via.placeholder.com/400x500";if(new Set(["rostro","ojos","boca","cabello","carisma","elegancia","dulzura","talento","estatura"]).has(R))return I;const HJ=(x=[])=>{const M=N.filter((c)=>x.includes(IZ(c)));if(!M.length)return"";const UJ=Math.floor(Math.random()*M.length);return M[UJ]?.url||""},p=_1(R),v=VX(p);if(!v)return I;const T=FJ(_?.batallaFotosPreferidas)[p];if(T){if(N.some((M)=>M.url===T))return T}return HJ(v.labels)||I},A1=(_="")=>O1.test((_||"").trim()),OQ="data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%20256%20256%27%3E%3Crect%20width%3D%27256%27%20height%3D%27256%27%20rx%3D%2740%27%20fill%3D%27%23020617%27/%3E%3Ctext%20x%3D%27128%27%20y%3D%27152%27%20text-anchor%3D%27middle%27%20font-size%3D%27120%27%3E%F0%9F%98%A2%3C/text%3E%3C/svg%3E",$Y=`if(this.dataset.fallbackApplied==='true')return;this.dataset.fallbackApplied='true';this.src='${OQ}';this.style.objectFit='contain';this.style.padding='12px';this.style.background='#020617';this.alt='Imagen no disponible';`,xJ=(_)=>{const W=_?.currentTarget||_?.target;if(!W||W.dataset.fallbackApplied==="true")return;W.dataset.fallbackApplied="true";W.src=OQ;W.style.objectFit="contain";W.style.padding="12px";W.style.background="#020617";W.alt="Imagen no disponible"},I1="g2_elite_database_v4",g1="g2_elite_categories_v4",QQ=["Rostro","Ojos","Boca","Cabello","Cuerpo","Cola","Pechos","Cintura","Piernas","Estatura","Sensualidad","Carisma","Elegancia","Dulzura","Talento"],HY=[...QQ],jY=[{id:"PROFESIONES",label:"Profesiones",description:"Compará perfiles por profesión."},{id:"NACIONALIDADES",label:"Nacionalidades",description:"Compará perfiles por nacionalidad."},{id:"EDADES",label:"Edades",description:"Compará perfiles por rango etario."},{id:"GENERAL",label:"General",description:"Modo libre sin segmentación extra."}],T1=jY.map((_)=>_.id),LQ=(_="")=>{return jY.find((R)=>R.id===_)?.label||"General"},N1=(_="")=>{const W=String(_||"").trim();if(!W)return"";return encodeURIComponent(W.toLowerCase())},M1=(_="")=>{const W=String(_||"").trim();if(!W)return"";try{return decodeURIComponent(W).toLowerCase()}catch{return W.toLowerCase()}},EQ=(_,W="GENERAL",R="")=>{const N=String(_||"").trim(),E=String(W||"GENERAL").trim().toUpperCase(),I=N1(R);if(!N)return"";return`${E}::${I||"all"}::${N}`},DJ=(_="")=>String(_||"").trim(),uZ=(_="")=>{const W=String(_||"").split("::");if(W.length<3)return{scopeId:"GENERAL",groupKey:"all",arenaName:""};const R=W.slice(2).join("::");return{scopeId:String(W[0]||"GENERAL").trim().toUpperCase()||"GENERAL",groupKey:M1(W[1]||"all")||"all",arenaName:String(R||"").trim()}},vQ=()=>QQ.reduce((_,W)=>{_[W]=0;return _},{}),fZ=[],qY={Cantante:{glyph:"crown",color:"rgba(34, 211, 238, 0.8)",tailwind:"cyan-400"},Actriz:{glyph:"theater",color:"rgba(34, 197, 94, 0.8)",tailwind:"green-500"},Modelo:{glyph:"floron",color:"rgba(168, 85, 247, 0.8)",tailwind:"purple-500"},NSFW:{glyph:"torch",color:"rgba(239, 68, 68, 0.8)",tailwind:"red-500"},Influencer:{glyph:"sigil",color:"rgba(236, 72, 153, 0.8)",tailwind:"pink-500"},"Bailarina y Atleta":{glyph:"floron",color:"rgba(249, 115, 22, 0.8)",tailwind:"orange-500"},Otro:{glyph:"sigil",color:"rgba(148, 163, 184, 0.8)",tailwind:"slate-400"}},h1=(_="")=>{const W=String(_||"").toLowerCase();if(W.includes("cantante"))return"crown";if(W.includes("nsfw"))return"torch";if(W.includes("actriz")||W.includes("actor"))return"theater";if(W.includes("modelo"))return"floron";if(W.includes("influencer"))return"sigil";if(W.includes("periodista"))return"quill";if(W.includes("bailarina"))return"floron";if(W.includes("atleta"))return"shield";return"shield"},K1=(_="")=>{const W=String(_||"").toLowerCase();if(W.includes("cantante"))return"\uD83C\uDFA4";if(W.includes("nsfw"))return"\uD83D\uDD25";if(W.includes("actriz")||W.includes("actor"))return"\uD83C\uDFAC";if(W.includes("modelo"))return"\uD83D\uDC60";if(W.includes("influencer"))return"\uD83D\uDCF1";if(W.includes("periodista"))return"\uD83D\uDC53";if(W.includes("bailarina"))return"\uD83D\uDC83";if(W.includes("atleta"))return"\uD83C\uDFCB️‍♀️";return"\uD83D\uDCD6"},IQ=(_="")=>{const W=String(_||"").trim(),R=qY[W]||qY.Otro,N=String(R?.color||"rgba(148, 163, 184, 0.8)").replace(/,\s*[\d.]+\)$/,", 1)"),E=String(R?.color||"rgba(148, 163, 184, 0.8)").replace(/,\s*[\d.]+\)$/,", 0.75)");return{baseColor:N,glowColor:E}},y1=({variant:_="sigil",size:W=18,className:R="",tint:N="currentColor"})=>{const E={width:W,height:W,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:R};if(_==="crown")return Q("svg",{...E,stroke:N,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M3 17h18v3H3z"},void 0,!1,void 0,this),Q("path",{d:"M4 17l3-8 5 5 5-7 3 10"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(_==="shield")return Q("svg",{...E,stroke:N,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M12 3l7 3v6c0 4.3-2.4 7-7 9-4.6-2-7-4.7-7-9V6l7-3z"},void 0,!1,void 0,this),Q("path",{d:"M9.5 11h5M12 8.5v5"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(_==="floron")return Q("svg",{...E,stroke:N,strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M12 4v16"},void 0,!1,void 0,this),Q("path",{d:"M6 9c1.4 0 2.8.9 3.4 2.2C8.2 11.5 7 12.8 7 14.3 5.4 13.5 4.3 11.9 4.3 10 4.3 9.5 5 9 6 9z"},void 0,!1,void 0,this),Q("path",{d:"M18 9c-1.4 0-2.8.9-3.4 2.2 1.2.3 2.4 1.6 2.4 3.1 1.6-.8 2.7-2.4 2.7-4.3 0-.5-.7-1-1.7-1z"},void 0,!1,void 0,this),Q("circle",{cx:"12",cy:"12",r:"2.2"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(_==="quill")return Q("svg",{...E,stroke:N,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M20 4c-7 1-11.5 5.2-13 12l4-1 1 4c6.8-2.4 8.4-8.4 8-15z"},void 0,!1,void 0,this),Q("path",{d:"M8 16l-4 4"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(_==="torch")return Q("svg",{...E,stroke:N,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M9 13l6-6"},void 0,!1,void 0,this),Q("path",{d:"M8 14l2 2 2-2-2-2z"},void 0,!1,void 0,this),Q("path",{d:"M11 16l-4 5h10l-4-5"},void 0,!1,void 0,this),Q("path",{d:"M15.5 4.5c.9 1.3.5 3.2-1 4.3-1.5-1.4-1.8-3.3-.8-4.9.6.1 1.2.3 1.8.6z"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(_==="theater")return Q("svg",{...E,stroke:N,strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M5 6h14v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"},void 0,!1,void 0,this),Q("path",{d:"M9 11h.01M15 11h.01"},void 0,!1,void 0,this),Q("path",{d:"M8.5 15c1 .8 2.2 1.2 3.5 1.2s2.5-.4 3.5-1.2"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);return Q("svg",{...E,stroke:N,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("circle",{cx:"12",cy:"12",r:"8.5"},void 0,!1,void 0,this),Q("path",{d:"M12 6v12M6 12h12"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},l=({name:_,size:W=20,className:R=""})=>{return Q("i",{"data-lucide":_.toLowerCase().replace(/([a-z])([A-Z])/g,"$1-$2"),style:{width:W,height:W},className:`inline-block ${R}`},void 0,!1,void 0,this)},RX=({targetWindow:_,profileName:W,profession:R,photos:N,editingId:E,battlePhotoPrefs:I={},profilePhotoUrl:n=""})=>{if(!_||_.closed)return;const HJ=FJ(I),p=_J(String(n||"").trim(),""),v=(N||[]).map((D,T)=>{const w=i(D);return{...w,sourceTag:D?.sourceTag||(w.type==="video"?"videos":"fotos"),sourceIndex:typeof D?.sourceIndex==="number"?D.sourceIndex:T}}).filter((D)=>D.url);_.document.open();_.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Galería de ${W}</title>
                <style>
                    body {
                        background:
                            radial-gradient(circle at 20% 18%, rgba(255, 208, 140, 0.14), transparent 32%),
                            radial-gradient(circle at 82% 8%, rgba(184, 115, 51, 0.17), transparent 28%),
                            linear-gradient(180deg, #120f0a 0%, #1d160f 45%, #271b12 100%);
                        color: #f7ebd2;
                        font-family: 'Cinzel', 'Plus Jakarta Sans', serif;
                        padding: 40px;
                        margin: 0;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .btn-critical-plate {
                        position: fixed;
                        top: 20px;
                        right: 30px;
                        padding: 10px 20px;
                        color: #ff3131;
                        font-weight: 800;
                        font-size: 11px;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        background: #020617;
                        border: 2px solid #ff3131;
                        border-radius: 12px;
                        cursor: pointer;
                        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.22), inset 0 0 0 2px rgba(255, 49, 49, 0.22), 4px 4px 0px #660000;
                        transition: all 0.3s ease;
                        text-shadow: 0 0 8px #ff3131;
                        z-index: 999;
                    }
                    .btn-critical-plate:hover {
                        background: #ff3131;
                        color: white;
                        box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), 0 0 20px rgba(255,49,49,0.5);
                        transform: translateY(-1px);
                    }
                    .modal-url {
                        display: none;
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background: #0f172a;
                        padding: 30px;
                        border-radius: 18px;
                        border: 1px solid rgba(100, 116, 139, 0.45);
                        box-shadow: inset 0 1px 0 rgba(148, 163, 184, 0.18), 0 24px 48px rgba(0,0,0,0.55);
                        z-index: 1000;
                        width: 350px;
                    }
                    input {
                        width: 100%;
                        padding: 12px;
                        margin-top: 15px;
                        background: #020617;
                        border: 1px solid #334155;
                        color: #22d3ee;
                        border-radius: 8px;
                        outline: none;
                    }
                    h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 2rem; color: #fff; text-align: center; }
                    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; width: 100%; }
                    .fullscreen-viewer {
                        display: none;
                        position: fixed;
                        inset: 0;
                        z-index: 2000;
                        background:
                            radial-gradient(circle at 50% 20%, rgba(255, 214, 153, 0.08), transparent 42%),
                            rgba(16, 10, 4, 0.95);
                        backdrop-filter: blur(6px);
                    }
                    .fullscreen-viewer.open {
                        display: flex;
                    }
                    .viewer-close {
                        position: fixed;
                        top: calc(env(safe-area-inset-top, 0px) + 16px);
                        right: calc(env(safe-area-inset-right, 0px) + 16px);
                        z-index: 2100;
                        background: rgba(15, 23, 42, 0.9);
                        color: #f87171;
                        border: 1px solid rgba(248, 113, 113, 0.78);
                        border-radius: 999px;
                        width: 48px;
                        height: 48px;
                        cursor: pointer;
                        font-size: 30px;
                        font-weight: 900;
                        line-height: 1;
                        font-weight: 700;
                        box-shadow:
                            0 6px 16px rgba(0, 0, 0, 0.55),
                            inset 0 1px 0 rgba(255, 244, 214, 0.35),
                            inset 0 -2px 0 rgba(48, 28, 12, 0.55);
                        text-shadow: 0 0 6px rgba(0, 0, 0, 0.75);
                        transition: transform 0.14s ease, opacity 0.14s ease, box-shadow 0.2s ease, filter 0.2s ease;
                    }
                    .viewer-close:hover {
                        transform: scale(1.06);
                        filter: brightness(1.08);
                        box-shadow:
                            0 8px 18px rgba(0, 0, 0, 0.62),
                            inset 0 1px 0 rgba(255, 244, 214, 0.42),
                            inset 0 -2px 0 rgba(48, 28, 12, 0.62);
                    }
                    .viewer-close:focus-visible,
                    .viewer-nav:focus-visible {
                        outline: 3px solid #ffe0a8;
                        outline-offset: 3px;
                    }
                    .viewer-close:active,
                    .viewer-nav:active,
                    .viewer-control-btn:active {
                        transform: scale(0.95);
                        opacity: 0.85;
                    }
                    .viewer-stage {
                        position: relative;
                        width: 100%;
                        height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 32px 24px 112px;
                        box-sizing: border-box;
                    }
                    .viewer-slide {
                        position: absolute;
                        inset: 0;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        opacity: 0;
                        visibility: hidden;
                        pointer-events: none;
                        transform: translate3d(0, 12px, 0) scale(0.992);
                        transition: opacity 260ms ease, transform 300ms ease, visibility 0s linear 300ms;
                        will-change: opacity, transform;
                    }
                    .viewer-slide.active {
                        opacity: 1;
                        visibility: visible;
                        pointer-events: auto;
                        transform: translate3d(0, 0, 0) scale(1);
                        transition: opacity 240ms ease, transform 260ms ease, visibility 0s linear 0s;
                    }
                    .viewer-slide img {
                        max-width: min(92vw, 1400px);
                        max-height: calc(100vh - 64px);
                        width: auto;
                        height: auto;
                        object-fit: contain;
                        border-radius: 20px;
                        border: 3px solid #c8a167;
                        box-shadow:
                            0 24px 52px rgba(0, 0, 0, 0.64),
                            0 0 0 3px rgba(83, 55, 27, 0.8),
                            inset 0 0 24px rgba(255, 223, 171, 0.12);
                    }
                    .viewer-nav {
                        position: relative;
                        z-index: 2100;
                        width: 48px;
                        height: 48px;
                        border-radius: 50%;
                        border: 2px solid #d8b374;
                        background: linear-gradient(180deg, #624021 0%, #3a2512 100%);
                        color: #fff7e6;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        font-size: 28px;
                        font-weight: 900;
                        line-height: 1;
                        text-shadow: 0 0 5px rgba(0, 0, 0, 0.72);
                        box-shadow:
                            0 6px 16px rgba(0, 0, 0, 0.55),
                            inset 0 1px 0 rgba(255, 244, 214, 0.34),
                            inset 0 -2px 0 rgba(48, 28, 12, 0.55);
                        transition: transform 0.14s ease, opacity 0.14s ease, border-color 0.2s ease, color 0.2s ease, filter 0.2s ease;
                    }
                    .viewer-nav:hover {
                        transform: scale(1.06);
                        border-color: #f0c883;
                        color: #fff7e6;
                        filter: brightness(1.1);
                    }
                    .viewer-nav[disabled] {
                        opacity: 0.62;
                        cursor: default;
                        filter: grayscale(0.28);
                    }
                    .viewer-nav[disabled]:hover {
                        transform: none;
                        border-color: #d8b374;
                        color: #fff7e6;
                        filter: grayscale(0.28);
                    }
                    .viewer-hint {
                        position: fixed;
                        left: 50%;
                        bottom: calc(env(safe-area-inset-bottom, 0px) + 104px);
                        transform: translateX(-50%);
                        z-index: 2100;
                        padding: 10px 16px;
                        border-radius: 999px;
                        background: rgba(43, 29, 16, 0.72);
                        color: #f6e7ca;
                        border: 1px solid rgba(201, 162, 98, 0.72);
                        font-size: 12px;
                        letter-spacing: 0.08em;
                        text-transform: uppercase;
                        pointer-events: none;
                    }
                    .viewer-controls {
                        position: fixed;
                        top: calc(env(safe-area-inset-top, 0px) + 16px);
                        left: calc(env(safe-area-inset-left, 0px) + 16px);
                        z-index: 2100;
                        display: flex;
                        gap: 10px;
                        padding: 8px 10px;
                        border-radius: 999px;
                        background: rgba(10, 24, 38, 0.35);
                        border: 1px solid rgba(56, 189, 248, 0.28);
                    }
                    .viewer-bottom-bar {
                        position: fixed;
                        left: 50%;
                        transform: translateX(-50%);
                        bottom: calc(env(safe-area-inset-bottom, 0px) + 16px);
                        z-index: 2100;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        gap: 10px;
                        padding: 10px 12px;
                        border-radius: 999px;
                        background: rgba(25, 16, 8, 0.85);
                        border: 1px solid rgba(201, 162, 98, 0.72);
                        box-shadow: 0 10px 24px rgba(0, 0, 0, 0.45);
                    }
                    .viewer-control-btn {
                        border: 1px solid rgba(56, 189, 248, 0.5);
                        background: rgba(8, 47, 73, 0.52);
                        color: #bae6fd;
                        border-radius: 999px;
                        padding: 8px 14px;
                        min-width: 44px;
                        min-height: 44px;
                        font-size: 10px;
                        text-transform: uppercase;
                        letter-spacing: 0.2em;
                        font-weight: 900;
                        cursor: pointer;
                    }
                    .viewer-control-btn.random-active {
                        border-color: rgba(232, 121, 249, 0.85);
                        color: #f5d0fe;
                        background: rgba(192, 38, 211, 0.35);
                    }
                    @media (max-width: 640px) {
                        .viewer-stage {
                            padding: calc(env(safe-area-inset-top, 0px) + 18px) 16px calc(env(safe-area-inset-bottom, 0px) + 132px);
                        }
                        .viewer-close {
                            top: calc(env(safe-area-inset-top, 0px) + 12px);
                            right: calc(env(safe-area-inset-right, 0px) + 12px);
                            width: 48px;
                            height: 48px;
                        }
                        .viewer-nav {
                            width: 48px;
                            height: 48px;
                            font-size: 22px;
                        }
                        .viewer-hint {
                            bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
                            padding: 8px 12px;
                            font-size: 10px;
                            max-width: calc(100vw - 120px);
                            text-align: center;
                        }
                        .viewer-controls {
                            top: calc(env(safe-area-inset-top, 0px) + 12px);
                            left: calc(env(safe-area-inset-left, 0px) + 12px);
                            gap: 8px;
                            padding: 7px 9px;
                        }
                        .viewer-control-btn {
                            padding: 9px 12px;
                            font-size: 9px;
                            letter-spacing: 0.16em;
                            min-width: 46px;
                            min-height: 46px;
                        }
                        .viewer-bottom-bar {
                            bottom: calc(env(safe-area-inset-bottom, 0px) + 10px);
                            gap: 8px;
                            padding: 8px 10px;
                            width: min(94vw, 430px);
                            justify-content: space-between;
                        }
                    }
                </style>
            </head>
            <body>
                <h1>Galería de ${W}</h1>
                <button class="btn-critical-plate" onclick="document.getElementById('miModal').style.display='block'">
                    AGREGAR ARCHIVO
                </button>

                <div id="miModal" class="modal-url">
                    <h2 style="margin:0; font-size: 14px; color: #94a3b8;">PEGAR URL DEL ARCHIVO</h2>
                    <input type="text" id="nuevaFotoUrl" placeholder="https://ejemplo.com/foto.jpg o https://youtube.com/...">
                    <label for="nuevoArchivoLocal" style="display:block; margin-top: 14px; font-size: 10px; font-weight: 900; letter-spacing: 0.14em; color: #94a3b8; text-transform: uppercase;">o subir desde escritorio</label>
                    <input type="file" id="nuevoArchivoLocal" accept="image/*,video/*,.gif" multiple style="width: 100%; margin-top: 8px; padding: 10px; background: #020617; border: 1px dashed rgba(34,211,238,0.65); color: #e2e8f0; border-radius: 8px; outline: none; font-size: 12px; box-shadow: 0 0 10px rgba(34,211,238,0.18);">
                    <select id="nuevoArchivoTipo" style="width: 100%; padding: 12px; margin-top: 15px; background: #020617; border: 1px solid rgba(71,85,105,0.92); color: #e2e8f0; border-radius: 8px; outline: none; box-shadow: inset 0 1px 0 rgba(148,163,184,0.18);">
                        <option value="image">Imagen</option>
                        <option value="video">Video</option>
                    </select>
                    <select id="nuevaFotoEtiqueta" style="width: 100%; padding: 12px; margin-top: 15px; background: #020617; border: 1px solid rgba(71,85,105,0.92); color: #e2e8f0; border-radius: 8px; outline: none; box-shadow: inset 0 1px 0 rgba(148,163,184,0.18);">
                        ${$J.map((D)=>`<option value="${D}">Etiqueta ${D}</option>`).join("")}
                    </select>
                    <input type="text" id="nuevaFotoAutor" placeholder="Autor (opcional)" style="width: 100%; padding: 12px; margin-top: 15px; background: #020617; border: 1px solid rgba(71,85,105,0.92); color: #e2e8f0; border-radius: 8px; outline: none; box-shadow: inset 0 1px 0 rgba(148,163,184,0.18);">
                    <input type="hidden" id="slotSelectionId" value="">
                    <p id="slotGalleryHint" style="display:none; margin:10px 0 0; font-size:11px; color:#93c5fd;">Tip: para “Elegir desde galería” tocá cualquier imagen para asignarla.</p>
                    <button type="button" onclick="addMediaFromModal(event)"
                        style="margin-top: 15px; width: 100%; padding: 10px; background: linear-gradient(180deg, rgba(14,116,144,0.95), rgba(8,47,73,0.95)); color: #ecfeff; border: 1px solid rgba(103,232,249,0.9); border-radius: 8px; font-weight: 800; cursor: pointer; text-transform: uppercase; letter-spacing: 0.08em; box-shadow: 0 0 14px rgba(34,211,238,0.4);">
                        Guardar
                    </button>
                    <button id="modalPlayFullscreenButton" type="button" onclick="startFullscreenPlaybackFromModal(event)"
                        style="margin-top: 10px; width: 100%; padding: 10px; background: linear-gradient(180deg, rgba(30,64,175,0.95), rgba(30,58,138,0.95)); color: #dbeafe; border: 1px solid rgba(147,197,253,0.9); border-radius: 8px; font-weight: 800; cursor: pointer; text-transform: uppercase; letter-spacing: 0.08em; box-shadow: 0 0 14px rgba(59,130,246,0.38);">
                        Play pantalla completa
                    </button>
                </div>

                <details open style="width:100%; margin-bottom: 20px; border-radius: 12px; border: 1px solid rgba(148,163,184,0.28); background: rgba(2,6,23,0.45);">
                    <summary style="cursor:pointer; list-style:none; padding: 12px 14px; font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 900; color: #f8fafc;">
                        5 Principales
                    </summary>
                    <div style="padding: 0 14px 14px; display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 10px;">
                    ${aJ.map((D)=>{const T=D.id==="perfil",w=T?p:HJ[D.id]||"",x=Boolean(w),M=!T;return`
                            <div class="gallery-slot-card" data-slot-id="${D.id}" style="border:1px solid ${x?"rgba(74,222,128,0.95)":"rgba(248,113,113,0.95)"}; border-radius:10px; padding:10px; background:${x?"linear-gradient(155deg, rgba(20,83,45,0.95) 0%, rgba(21,128,61,0.82) 45%, rgba(5,46,22,0.96) 100%)":"linear-gradient(155deg, rgba(127,29,29,0.96) 0%, rgba(185,28,28,0.84) 45%, rgba(69,10,10,0.96) 100%)"}; box-shadow: inset 0 2px 0 rgba(255,255,255,0.24), inset 0 -2px 0 rgba(2,6,23,0.45), inset 0 0 0 1px ${x?"rgba(187,247,208,0.25)":"rgba(254,202,202,0.22)"}, 0 8px 16px rgba(2,6,23,0.45), 0 0 18px ${x?"rgba(74,222,128,0.35)":"rgba(248,113,113,0.3)"}; position: relative;">
                                <div style="position:absolute; inset:1px; border-radius:9px; pointer-events:none; background: linear-gradient(145deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0.05) 22%, rgba(255,255,255,0) 42%, rgba(2,6,23,0.22) 78%, rgba(2,6,23,0.42) 100%);"></div>
                                <div style="font-size:10px; color:#f8fafc; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; position:relative;">${D.label}</div>
                                <div style="font-size:11px; color:${x?"#dcfce7":"#fee2e2"}; margin-top:6px; font-weight:800; position:relative; text-shadow: 0 1px 0 rgba(15,23,42,0.65);">
                                    Estado: ${x?"Asignada":"No asignada"}
                                </div>
                                <div style="margin-top:8px; border-radius:8px; overflow:hidden; aspect-ratio:4/3; border:1px dashed rgba(148,163,184,0.45); background: rgba(2,6,23,0.86); display:flex; align-items:center; justify-content:center;">
                                    ${x?`<img src="${w}" alt="Vista previa ${D.label}" onerror="${$Y}" style="width:100%; height:100%; object-fit:cover; display:block;" />`:'<span style="font-size:10px; color:#fca5a5; text-transform:uppercase; letter-spacing:0.08em; font-weight:700; text-align:center; padding:0 8px;">Sin foto designada</span>'}
                                </div>
                                <div style="display:grid; gap:6px; margin-top:8px;">
                                    <button
                                        type="button"
                                        onclick="event.stopPropagation(); openSlotActionModal('${D.id}', 'url');"
                                        style="width:100%; border:1px solid rgba(125,211,252,0.6); background: rgba(2,6,23,0.82); color:#e2e8f0; border-radius:8px; padding:6px 8px; font-size:10px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; cursor:pointer; box-shadow: 0 0 12px rgba(34,211,238,0.22);"
                                    >
                                        Agregar URL/Archivo
                                    </button>
                                    ${M?`<button
                                        type="button"
                                        class="slot-gallery-select-btn"
                                        data-slot-id="${D.id}"
                                        onclick="event.stopPropagation(); selectSlotFromGallery('${D.id}');"
                                        style="width:100%; border:1px solid rgba(203,213,225,0.92); background: linear-gradient(165deg, rgba(148,163,184,0.5) 0%, rgba(71,85,105,0.82) 45%, rgba(30,41,59,0.94) 100%); color:#f8fafc; border-radius:8px; padding:6px 8px; font-size:10px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; cursor:pointer; box-shadow: inset 0 1px 0 rgba(255,255,255,0.42), inset 0 -1px 0 rgba(15,23,42,0.55), 0 6px 12px rgba(2,6,23,0.45); transition: box-shadow 180ms ease, border-color 180ms ease, filter 180ms ease, background 180ms ease;"
                                    >
                                        Designar de galería
                                    </button>`:""}
                                </div>
                            </div>
                        `}).join("")}
                    </div>
                </details>

                <div class="grid" id="galleryGrid">
                    ${v.length?v.map((D,T)=>{const w=U1(D),x=IZ(D),M=rJ(x),UJ={CANTANTE:{color:"#0ea5e9",sombra:"rgba(14,165,233,0.8)"},NSFW:{color:"#ef4444",sombra:"rgba(239,68,68,0.8)"},ACTRIZ:{color:"#22c55e",sombra:"rgba(34,197,94,0.8)"},MODELO:{color:"#f97316",sombra:"rgba(249,115,22,0.8)"},BAILARINA:{color:"#a855f7",sombra:"rgba(168,85,247,0.8)"},INFLUENCER:{color:"#ec4899",sombra:"rgba(236,72,153,0.8)"},PERIODISTA:{color:"#facc15",sombra:"rgba(250,204,21,0.8)"},ATLETA:{color:"#78350f",sombra:"rgba(120,53,15,0.8)"},OTRO:{color:"#ffffff",sombra:"rgba(255,255,255,0.8)"},DEFAULT:{color:"#334155",sombra:"transparent"}},c=UJ[R?.toUpperCase()]||UJ.DEFAULT;return`
                        <div
                            class="gallery-card"
                            data-gallery-index="${T}"
                            data-source-index="${D.sourceIndex}"
                            data-media-type="${JQ(D)}"
                            data-url="${w}"
                            data-compatible-slots="${x}"
                            draggable="${JQ(D)==="image"?"true":"false"}"
                            title="Abrir visor de pantalla completa"
                            style="
                                aspect-ratio: 1/1;
                                border-radius: 15px;
                                overflow: hidden;
                                border: 2px solid ${c.color};
                                box-shadow: 0 0 15px ${c.sombra};
                                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                                cursor: ${JQ(D)==="image"?"grab":"pointer"};
                                position: relative;
                                background: #0f172a;
                            "
                            onmouseover="this.style.transform='scale(1.08)'; this.style.boxShadow='0 0 35px ${c.color}, inset 0 0 15px ${c.sombra}'; this.style.zIndex='10';"
                            onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 0 15px ${c.sombra}'; this.style.zIndex='1';"
                        >
                           <button
                            onclick="event.stopPropagation(); window.opener.postMessage({type: 'DELETE_IMAGE', index: ${D.sourceIndex}, mediaType: '${JQ(D)}', id: '${E}'}, '*');"
                            style="
                                position: absolute;
                                top: 5px;
                                right: 5px;
                                z-index: 20;
                                background: #ef4444;
                                color: white;
                                border: none;
                                width: 22px;
                                height: 22px;
                                border-radius: 50%;
                                cursor: pointer;
                                font-weight: bold;
                                font-size: 12px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                box-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
                            "
                            aria-label="Eliminar elemento de galería"
                            type="button"
                        >✕</button>
                        ${JQ(D)==="video"?(()=>{const NJ=WQ(w);if(NJ)return`<div style="width: 100%; height: 100%; background: radial-gradient(circle at top, rgba(34,211,238,0.35), rgba(15,23,42,0.96)); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; padding: 18px; box-sizing:border-box; text-align:center;"><div style="width:64px; height:64px; border-radius:999px; border:1px solid rgba(34,211,238,0.5); background:rgba(15,23,42,0.75); display:flex; align-items:center; justify-content:center; color:#22d3ee; font-size:28px;">▶</div><div style="font-size:12px; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:#e2e8f0;">Video embebido</div><div style="font-size:11px; color:#94a3b8; max-width:100%; word-break:break-word;">${NJ.provider.toUpperCase()}</div></div>`;return`<video src="${w}" style="width: 100%; height: 100%; object-fit: cover;" muted playsinline preload="metadata"></video>`})():`<img src="${w}" alt="Imagen de la galería" onerror="${$Y}" style="width: 100%; height: 100%; object-fit: cover;" />`}
                        <div style="position:absolute; left: 12px; top: 12px; z-index: 15; padding: 6px 10px; border-radius: 999px; background: rgba(2,6,23,0.72); border: 1px solid rgba(148,163,184,0.24); color: #e2e8f0; display:flex; align-items:center; justify-content:center; font-size: 10px; font-weight: 900; letter-spacing: 0.2em; text-transform: uppercase; backdrop-filter: blur(8px);">${JQ(D)==="video"?"VIDEO":"IMG"}</div>
                        ${x?`<div style="position:absolute; left: 50%; bottom: 10px; transform: translateX(-50%); z-index: 15; min-width: 52px; height: 30px; padding: 0 14px; border-radius: 999px; background: ${M.bg}; border: 1px solid ${M.border}; color: ${M.text}; display:flex; align-items:center; justify-content:center; font-size: 12px; font-weight: 900; letter-spacing: 0.24em; box-shadow: 0 0 14px ${M.glow}, 0 0 24px ${M.glow}; text-shadow: 0 0 10px ${M.glow}; backdrop-filter: blur(8px);">${x}</div>`:""}
                        ${D.autor?`<div style="position:absolute; left:10px; right:10px; bottom:${x?"48px":"10px"}; z-index:15; padding:6px 8px; border-radius:10px; background:rgba(2,6,23,0.74); border:1px solid rgba(148,163,184,0.3); color:#e2e8f0; font-size:10px; line-height:1.2; font-weight:700; letter-spacing:0.04em; text-align:left; backdrop-filter:blur(6px);">Autor: ${D.autor}</div>`:""}
                        </div>
                    `}).join(""):'<p style="text-align:center; grid-column: 1/-1; color: #64748b;">No hay archivos cargados.</p>'}
                </div>

                <div id="fullscreenViewer" class="fullscreen-viewer">
                    <button class="viewer-close" onclick="closeFullscreenViewer()" aria-label="Cerrar visor">✕</button>
                    <div class="viewer-bottom-bar">
                        <button id="viewerRandomToggle" class="viewer-control-btn" type="button" onclick="toggleViewerRandom(event)">Random Off</button>
                        <button id="viewerPlayToggle" class="viewer-control-btn viewer-control-btn--center" type="button" onclick="toggleViewerAutoplay(event)">Play</button>
                        <button class="viewer-nav next" id="viewerNext" onclick="showNextViewerPhoto(event)" aria-label="Foto siguiente">→</button>
                    </div>
                    <div class="viewer-hint">Usá ← → para cambiar y Escape para salir</div>
                    <div class="viewer-stage" id="viewerStage">
                        ${v.map((D,T)=>{const w=JQ(D),x=WQ(D.url);return`
                            <div class="viewer-slide" id="viewer-slide-${T}">
                                ${w==="video"?x?`<iframe src="${x.src}" title="${x.title} ${T+1}" style="width:min(92vw, 1400px); height:min(75vh, 820px); border:0; border-radius:24px; box-shadow:0 0 40px rgba(34, 211, 238, 0.2); background:#000;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`:`<video src="${D.url}" controls playsinline preload="metadata" style="max-width:min(92vw, 1400px); max-height:calc(100vh - 64px); width:auto; height:auto; border-radius:24px; box-shadow:0 0 40px rgba(34, 211, 238, 0.2); background:#000;"></video>`:`<img src="${D.url}" alt="Vista completa ${T+1}" onerror="${$Y}" />`}
                            </div>`}).join("")}
                    </div>
                </div>

                <script>
                    var viewer = document.getElementById('fullscreenViewer');
                    var viewerStage = document.getElementById('viewerStage');
                    var galleryGrid = document.getElementById('galleryGrid');
                    var viewerSlides = Array.from(document.querySelectorAll('.viewer-slide'));
                    var viewerNextButton = document.getElementById('viewerNext');
                    var viewerPlayToggleButton = document.getElementById('viewerPlayToggle');
                    var viewerRandomToggleButton = document.getElementById('viewerRandomToggle');
                    var modalPlayFullscreenButton = document.getElementById('modalPlayFullscreenButton');
                    var VALID_FILE_MIME_PREFIXES = ['image/', 'video/'];
                    var VALID_FILE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'mp4', 'webm', 'ogg', 'mov', 'm4v'];
                    var VIEWER_IMAGE_TIMEOUT_MS = 7000;
                    var VIEWER_VIDEO_FALLBACK_TIMEOUT_MS = 30000;
                    var VIEWER_RETRY_DELAY_MS = 900;
                    var VIEWER_PRELOAD_RADIUS = 1;
                    var VIEWER_STATES = Object.freeze({
                        IDLE: 'idle',
                        SHOWING_IMAGE: 'showing-image',
                        PLAYING_VIDEO: 'playing-video',
                        TRANSITIONING: 'transitioning'
                    });
                    var currentViewerIndex = 0;
                    var viewerAutoplay = false;
                    var viewerRandom = false;
                    var viewerAutoplayTimeout = null;
                    var viewerState = VIEWER_STATES.IDLE;
                    var viewerTransitionToken = 0;
                    var viewerRecoveryInProgress = false;
                    var activeSlotSelectionId = '';
                    var DND_PAYLOAD_TYPE = 'application/x-battle-slot-item';
                    var LONG_PRESS_MS = 280;
                    var longPressTimer = null;
                    var touchPayload = null;
                    var SWIPE_DISTANCE_THRESHOLD = 72;
                    var SWIPE_VELOCITY_THRESHOLD = 0.35;
                    var SWIPE_FEEDBACK_MAX_TRANSLATE = 52;
                    var SWIPE_VERTICAL_LOCK_RATIO = 1.2;
                    var viewerSwipeState = {
                        active: false,
                        pointerId: null,
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        startTime: 0,
                        isHorizontal: false,
                        isVertical: false,
                        blockedByMediaControl: false
                    };

                    function isAllowedFileType(file) {
                        if (!file) return false;
                        const mime = String(file.type || '').toLowerCase();
                        const ext = String(file.name || '').split('.').pop()?.toLowerCase() || '';
                        return VALID_FILE_MIME_PREFIXES.some((prefix) => mime.startsWith(prefix)) || VALID_FILE_EXTENSIONS.includes(ext);
                    }

                    function openSlotActionModal(slotId, mode = '') {
                        activeSlotSelectionId = slotId || '';
                        const modal = document.getElementById('miModal');
                        const galleryHint = document.getElementById('slotGalleryHint');
                        const slotInput = document.getElementById('slotSelectionId');
                        if (slotInput) slotInput.value = activeSlotSelectionId;
                        if (galleryHint) {
                            galleryHint.style.display = mode === 'gallery' && slotId !== 'perfil' ? 'block' : 'none';
                        }
                        if (modal) modal.style.display = 'block';
                    }

                    function updateSlotGalleryButtons() {
                        const buttons = document.querySelectorAll('.slot-gallery-select-btn');
                        buttons.forEach((button) => {
                            const buttonSlotId = button.getAttribute('data-slot-id') || '';
                            const isActive = Boolean(activeSlotSelectionId) && buttonSlotId === activeSlotSelectionId;
                            if (isActive) {
                                button.style.borderColor = 'rgba(74,222,128,0.98)';
                                button.style.background = 'linear-gradient(160deg, rgba(22,163,74,0.98) 0%, rgba(34,197,94,0.94) 45%, rgba(20,83,45,0.98) 100%)';
                                button.style.color = '#ecfdf5';
                                button.style.boxShadow = 'inset 0 1px 0 rgba(220,252,231,0.55), inset 0 -1px 0 rgba(5,46,22,0.62), 0 0 16px rgba(74,222,128,0.95), 0 0 34px rgba(34,197,94,0.82)';
                                button.style.filter = 'brightness(1.24) saturate(1.2)';
                            } else {
                                button.style.borderColor = 'rgba(203,213,225,0.92)';
                                button.style.background = 'linear-gradient(165deg, rgba(148,163,184,0.5) 0%, rgba(71,85,105,0.82) 45%, rgba(30,41,59,0.94) 100%)';
                                button.style.color = '#f8fafc';
                                button.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.42), inset 0 -1px 0 rgba(15,23,42,0.55), 0 6px 12px rgba(2,6,23,0.45)';
                                button.style.filter = 'brightness(1) saturate(1)';
                            }
                        });
                    }

                    function selectSlotFromGallery(slotId) {
                        activeSlotSelectionId = slotId || '';
                        const slotInput = document.getElementById('slotSelectionId');
                        if (slotInput) slotInput.value = activeSlotSelectionId;
                        updateSlotGalleryButtons();
                    }

                    function isImagePayload(payload = {}) {
                        return String(payload.mediaType || '').trim() === 'image';
                    }

                    function assignToSlot(payload = {}, slotId = '') {
                        if (!slotId || !window.opener || !isImagePayload(payload)) return false;
                        const sourceIndex = Number(payload.sourceIndex);
                        if (!Number.isInteger(sourceIndex) || sourceIndex < 0) return false;
                        window.opener.postMessage({ type: 'SET_BATTLE_PHOTO_PREF', id: '${E}', slotId, index: sourceIndex, mediaType: payload.mediaType || 'image' }, '*');
                        activeSlotSelectionId = '';
                        const slotInput = document.getElementById('slotSelectionId');
                        if (slotInput) slotInput.value = '';
                        updateSlotGalleryButtons();
                        return true;
                    }

                    function tryAssignGalleryCardToActiveSlot(card) {
                        if (!card || !activeSlotSelectionId) return false;
                        const payload = {
                            sourceIndex: Number(card.dataset.sourceIndex),
                            mediaType: card.dataset.mediaType || 'image',
                            url: card.dataset.url || '',
                            compatibleSlots: card.dataset.compatibleSlots || ''
                        };
                        return assignToSlot(payload, activeSlotSelectionId);
                    }

                    function resetAddMediaModalFields() {
                        const urlInput = document.getElementById('nuevaFotoUrl');
                        const localInput = document.getElementById('nuevoArchivoLocal');
                        const labelInput = document.getElementById('nuevaFotoEtiqueta');
                        const authorInput = document.getElementById('nuevaFotoAutor');
                        const mediaTypeInput = document.getElementById('nuevoArchivoTipo');
                        const slotInput = document.getElementById('slotSelectionId');
                        if (urlInput) urlInput.value = '';
                        if (localInput) localInput.value = '';
                        if (labelInput) labelInput.value = '${$J[0]}';
                        if (authorInput) authorInput.value = '';
                        if (mediaTypeInput) mediaTypeInput.value = 'image';
                        if (slotInput) slotInput.value = '';
                        const galleryHint = document.getElementById('slotGalleryHint');
                        if (galleryHint) galleryHint.style.display = 'none';
                        activeSlotSelectionId = '';
                        updateSlotGalleryButtons();
                    }

                    async function addMediaFromModal(event) {
                        if (event?.preventDefault) event.preventDefault();
                        const urlInput = document.getElementById('nuevaFotoUrl');
                        const localInput = document.getElementById('nuevoArchivoLocal');
                        const labelInput = document.getElementById('nuevaFotoEtiqueta');
                        const authorInput = document.getElementById('nuevaFotoAutor');
                        const mediaTypeInput = document.getElementById('nuevoArchivoTipo');
                        const normalizedUrl = (urlInput?.value || '').trim();
                        const selectedFiles = Array.from(localInput?.files || []);
                        const mediaType = mediaTypeInput?.value || 'image';
                        const label = labelInput?.value || '${$J[0]}';
                        const autor = (authorInput?.value || '').trim();
                        const slotSelectionId = activeSlotSelectionId || document.getElementById('slotSelectionId')?.value || '';

                        const postMedia = (finalUrl, finalType, canAssignSlot = true) => {
                            if (!finalUrl) return;
                            window.opener.postMessage({ type: 'ADD_IMAGE', url: finalUrl, label, autor, mediaType: finalType, id: '${E}' }, '*');
                            if (slotSelectionId && canAssignSlot) {
                                window.opener.postMessage({ type: 'SET_BATTLE_PHOTO_PREF_BY_URL', id: '${E}', slotId: slotSelectionId, url: finalUrl, mediaType: finalType, label }, '*');
                            }
                        };

                        if (selectedFiles.length) {
                            const invalidFile = selectedFiles.find((file) => !isAllowedFileType(file));
                            if (invalidFile) {
                                alert('Uno o más archivos no son válidos. Usá imagen o video.');
                                return;
                            }
                            const uploadLocalFile = async (file) => ({
                                url: await window.opener.uploadFileToFirebaseStorage(file, 'perfiles/galeria'),
                                type: file.type && file.type.startsWith('video/') ? 'video' : 'image'
                            });

                            try {
                                if (!window.opener || typeof window.opener.uploadFileToFirebaseStorage !== 'function') {
                                    throw new Error('La ventana principal no está lista para subir archivos. Cerrá y abrí nuevamente la galería.');
                                }
                                const filesData = await Promise.all(selectedFiles.map(uploadLocalFile));
                                filesData.forEach((fileData, index) => {
                                    postMedia(fileData.url, fileData.type, index === 0);
                                });
                                document.getElementById('miModal').style.display = 'none';
                                resetAddMediaModalFields();
                            } catch (error) {
                                alert(error.message || 'No se pudo subir el archivo seleccionado.');
                            }
                            return;
                        }

                        postMedia(normalizedUrl, mediaType);
                        document.getElementById('miModal').style.display = 'none';
                        resetAddMediaModalFields();
                    }

                    galleryGrid?.addEventListener('click', (event) => {
                        const card = event.target.closest('.gallery-card');
                        if (!card) return;
                        const assigned = tryAssignGalleryCardToActiveSlot(card);
                        if (assigned) {
                            event.preventDefault();
                            event.stopImmediatePropagation();
                            event.stopPropagation();
                            return;
                        }
                    });
                    galleryGrid?.addEventListener('dragstart', (event) => {
                        const card = event.target.closest('.gallery-card');
                        if (!card) return;
                        const payload = {
                            sourceIndex: Number(card.dataset.sourceIndex),
                            mediaType: card.dataset.mediaType || 'image',
                            url: card.dataset.url || '',
                            compatibleSlots: card.dataset.compatibleSlots || ''
                        };
                        if (!isImagePayload(payload)) return;
                        event.dataTransfer.effectAllowed = 'copy';
                        event.dataTransfer.setData(DND_PAYLOAD_TYPE, JSON.stringify(payload));
                        event.dataTransfer.setData('text/plain', payload.url || '');
                    });
                    galleryGrid?.addEventListener('pointerdown', (event) => {
                        const card = event.target.closest('.gallery-card');
                        if (!card || card.dataset.mediaType !== 'image') return;
                        clearTimeout(longPressTimer);
                        touchPayload = {
                            sourceIndex: Number(card.dataset.sourceIndex),
                            mediaType: card.dataset.mediaType || 'image',
                            url: card.dataset.url || '',
                            compatibleSlots: card.dataset.compatibleSlots || ''
                        };
                        longPressTimer = setTimeout(() => {
                            card.classList.add('ring-2', 'ring-cyan-300');
                        }, LONG_PRESS_MS);
                    });
                    galleryGrid?.addEventListener('pointerup', (event) => {
                        clearTimeout(longPressTimer);
                        const card = event.target.closest('.gallery-card');
                        if (card) card.classList.remove('ring-2', 'ring-cyan-300');
                        if (!touchPayload) return;
                        const slotEl = document.elementFromPoint(event.clientX, event.clientY)?.closest('.gallery-slot-card[data-slot-id]');
                        if (slotEl && slotEl.dataset.slotId && slotEl.dataset.slotId !== 'perfil') {
                            assignToSlot(touchPayload, slotEl.dataset.slotId);
                        }
                        touchPayload = null;
                    });
                    galleryGrid?.addEventListener('pointercancel', () => {
                        clearTimeout(longPressTimer);
                        touchPayload = null;
                    });
                    document.querySelectorAll('.gallery-slot-card').forEach((slotCard) => {
                        const slotId = slotCard.dataset.slotId || '';
                        if (!slotId || slotId === 'perfil') return;
                        slotCard.addEventListener('dragover', (event) => {
                            let payload = null;
                            try { payload = JSON.parse(event.dataTransfer.getData(DND_PAYLOAD_TYPE) || '{}'); } catch {}
                            if (!isImagePayload(payload)) return;
                            event.preventDefault();
                            slotCard.style.filter = 'brightness(1.1)';
                            slotCard.style.outline = '2px solid rgba(34,211,238,0.8)';
                        });
                        slotCard.addEventListener('dragleave', () => {
                            slotCard.style.filter = '';
                            slotCard.style.outline = '';
                        });
                        slotCard.addEventListener('drop', (event) => {
                            event.preventDefault();
                            slotCard.style.filter = '';
                            slotCard.style.outline = '';
                            let payload = null;
                            try { payload = JSON.parse(event.dataTransfer.getData(DND_PAYLOAD_TYPE) || '{}'); } catch {}
                            assignToSlot(payload, slotId);
                        });
                    });

                    function getNextViewerIndex() {
                        if (viewerSlides.length <= 1) return 0;
                        if (!viewerRandom) return (currentViewerIndex + 1) % viewerSlides.length;
                        const candidates = viewerSlides.map((_, idx) => idx).filter((idx) => idx !== currentViewerIndex);
                        return candidates[Math.floor(Math.random() * candidates.length)];
                    }

                    function clearViewerAutoplayTimer() {
                        if (viewerAutoplayTimeout) {
                            clearTimeout(viewerAutoplayTimeout);
                            viewerAutoplayTimeout = null;
                        }
                    }

                    function setViewerAutoplayState(nextState) {
                        viewerAutoplay = !!nextState;
                        if (viewerPlayToggleButton) {
                            viewerPlayToggleButton.textContent = viewerAutoplay ? 'Pause' : 'Play';
                        }
                        scheduleViewerAutoplay();
                    }

                    function setViewerRandomState(nextState) {
                        viewerRandom = !!nextState;
                        if (viewerRandomToggleButton) {
                            viewerRandomToggleButton.textContent = viewerRandom ? 'Random On' : 'Random Off';
                            viewerRandomToggleButton.classList.toggle('random-active', viewerRandom);
                        }
                    }

                    function preloadViewerAround(index) {
                        if (!viewerSlides.length) return;
                        for (let offset = -VIEWER_PRELOAD_RADIUS; offset <= VIEWER_PRELOAD_RADIUS; offset += 1) {
                            const targetIndex = (index + offset + viewerSlides.length) % viewerSlides.length;
                            const slide = viewerSlides[targetIndex];
                            const nearVideo = slide ? slide.querySelector('video') : null;
                            if (nearVideo && nearVideo.preload !== 'auto') {
                                nearVideo.preload = 'auto';
                                nearVideo.load();
                            }
                        }
                    }

                    function pauseAndResetInactiveVideos(activeIndex) {
                        viewerSlides.forEach((slide, slideIndex) => {
                            if (slideIndex === activeIndex) return;
                            const video = slide.querySelector('video');
                            if (!video) return;
                            video.pause();
                            if (!video.dataset.manuallyPaused) {
                                video.currentTime = 0;
                            }
                        });
                    }

                    function recoverViewerPlayback(reason = 'unknown') {
                        if (viewerRecoveryInProgress) return;
                        viewerRecoveryInProgress = true;
                        setTimeout(() => {
                            viewerRecoveryInProgress = false;
                            if (viewerSlides.length > 1 && viewer.classList.contains('open')) {
                                renderViewerSlide(getNextViewerIndex());
                            } else {
                                clearViewerAutoplayTimer();
                                viewerState = VIEWER_STATES.IDLE;
                            }
                        }, VIEWER_RETRY_DELAY_MS);
                    }

                    function scheduleViewerAutoplay() {
                        clearViewerAutoplayTimer();
                        if (!viewerAutoplay || !viewer.classList.contains('open') || viewerSlides.length <= 1) return;
                        if (viewerState === VIEWER_STATES.TRANSITIONING) return;
                        if (viewerState === VIEWER_STATES.PLAYING_VIDEO) {
                            viewerAutoplayTimeout = setTimeout(() => {
                                recoverViewerPlayback('video-timeout');
                            }, VIEWER_VIDEO_FALLBACK_TIMEOUT_MS);
                            return;
                        }
                        viewerAutoplayTimeout = setTimeout(function() {
                            renderViewerSlide(getNextViewerIndex());
                        }, VIEWER_IMAGE_TIMEOUT_MS);
                    }

                    function syncViewerButtons() {
                        const disableNavigation = viewerSlides.length <= 1;
                        if (viewerNextButton) viewerNextButton.disabled = disableNavigation;
                    }

                    function renderViewerSlide(index) {
                        if (!viewerSlides.length) return;
                        const renderToken = ++viewerTransitionToken;
                        viewerState = VIEWER_STATES.TRANSITIONING;
                        currentViewerIndex = Math.max(0, Math.min(index, viewerSlides.length - 1));
                        pauseAndResetInactiveVideos(currentViewerIndex);
                        viewerSlides.forEach(function(slide, slideIndex) {
                            slide.classList.toggle('active', slideIndex === currentViewerIndex);
                        });
                        const activeSlide = viewerSlides[currentViewerIndex];
                        const activeImage = activeSlide ? activeSlide.querySelector('img') : null;
                        const activeVideo = activeSlide ? activeSlide.querySelector('video') : null;
                        preloadViewerAround(currentViewerIndex);
                        if (activeVideo) {
                            activeVideo.onpause = function() {
                                if (!viewerAutoplay) activeVideo.dataset.manuallyPaused = '1';
                            };
                            activeVideo.onplay = function() {
                                activeVideo.dataset.manuallyPaused = '';
                            };
                            if (viewerAutoplay) {
                                if (!activeVideo.dataset.manuallyPaused) {
                                    activeVideo.currentTime = 0;
                                }
                                activeVideo.play().catch(function() {
                                    recoverViewerPlayback('play-error');
                                });
                            }
                            viewerState = VIEWER_STATES.PLAYING_VIDEO;
                        }
                        if (activeImage) {
                            activeImage.onerror = function() {
                                recoverViewerPlayback('image-error');
                            };
                            viewerState = VIEWER_STATES.SHOWING_IMAGE;
                        }
                        if (activeVideo) {
                            activeVideo.onerror = function() {
                                recoverViewerPlayback('video-error');
                            };
                            activeVideo.onended = function() {
                                if (viewerAutoplay && viewerSlides.length > 1) {
                                    renderViewerSlide(getNextViewerIndex());
                                }
                            };
                        }
                        requestAnimationFrame(() => {
                            if (renderToken !== viewerTransitionToken) return;
                            if (!activeVideo && !activeImage) viewerState = VIEWER_STATES.IDLE;
                            scheduleViewerAutoplay();
                        });
                        syncViewerButtons();
                    }

                    function resetViewerStageTransform(withTransition = false) {
                        if (!viewerStage) return;
                        viewerStage.style.transition = withTransition ? 'transform 160ms ease-out' : '';
                        viewerStage.style.transform = 'translateX(0px)';
                        if (withTransition) {
                            window.setTimeout(function() {
                                if (viewerStage) viewerStage.style.transition = '';
                            }, 180);
                        }
                    }

                    function updateViewerSwipeFeedback(deltaX) {
                        if (!viewerStage) return;
                        const clampedDelta = Math.max(-SWIPE_FEEDBACK_MAX_TRANSLATE, Math.min(SWIPE_FEEDBACK_MAX_TRANSLATE, deltaX * 0.28));
                        viewerStage.style.transition = '';
                        viewerStage.style.transform = 'translateX(' + clampedDelta + 'px)';
                    }

                    function targetHasDirectMediaControls(target) {
                        if (!target || typeof target.closest !== 'function') return false;
                        return Boolean(target.closest('iframe, video'));
                    }

                    function onViewerStagePointerDown(event) {
                        if (!viewer.classList.contains('open') || viewerSlides.length <= 1) return;
                        const blockedByMediaControl = targetHasDirectMediaControls(event.target);
                        viewerSwipeState = {
                            active: true,
                            pointerId: event.pointerId,
                            startX: event.clientX,
                            startY: event.clientY,
                            currentX: event.clientX,
                            startTime: performance.now(),
                            isHorizontal: false,
                            isVertical: false,
                            blockedByMediaControl
                        };
                        if (blockedByMediaControl) return;
                        if (viewerStage?.setPointerCapture) {
                            try { viewerStage.setPointerCapture(event.pointerId); } catch {}
                        }
                    }

                    function onViewerStagePointerMove(event) {
                        if (!viewerSwipeState.active || viewerSwipeState.pointerId !== event.pointerId || viewerSwipeState.blockedByMediaControl) return;
                        const deltaX = event.clientX - viewerSwipeState.startX;
                        const deltaY = event.clientY - viewerSwipeState.startY;
                        viewerSwipeState.currentX = event.clientX;

                        if (!viewerSwipeState.isHorizontal && !viewerSwipeState.isVertical) {
                            if (Math.abs(deltaY) > Math.abs(deltaX) * SWIPE_VERTICAL_LOCK_RATIO) {
                                viewerSwipeState.isVertical = true;
                                resetViewerStageTransform(false);
                                return;
                            }
                            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                                viewerSwipeState.isHorizontal = true;
                            }
                        }

                        if (viewerSwipeState.isHorizontal) {
                            event.preventDefault();
                            updateViewerSwipeFeedback(deltaX);
                        }
                    }

                    function onViewerStagePointerEnd(event) {
                        if (!viewerSwipeState.active || viewerSwipeState.pointerId !== event.pointerId) return;
                        const elapsedMs = Math.max(1, performance.now() - viewerSwipeState.startTime);
                        const deltaX = viewerSwipeState.currentX - viewerSwipeState.startX;
                        const velocityX = Math.abs(deltaX) / elapsedMs;
                        const shouldNavigate = !viewerSwipeState.blockedByMediaControl
                            && viewerSwipeState.isHorizontal
                            && !viewerSwipeState.isVertical
                            && (Math.abs(deltaX) >= SWIPE_DISTANCE_THRESHOLD || velocityX >= SWIPE_VELOCITY_THRESHOLD);

                        resetViewerStageTransform(true);
                        if (shouldNavigate) {
                            if (deltaX < 0) showNextViewerPhoto();
                            else showPreviousViewerPhoto();
                        }

                        if (viewerStage?.releasePointerCapture) {
                            try { viewerStage.releasePointerCapture(event.pointerId); } catch {}
                        }
                        viewerSwipeState.active = false;
                    }

                    function openFullscreenViewer(index) {
                        if (!viewerSlides.length) return;
                        const parsedIndex = Number(index);
                        if (!Number.isInteger(parsedIndex) || parsedIndex < 0 || parsedIndex >= viewerSlides.length) return;
                        viewer.classList.add('open');
                        document.body.style.overflow = 'hidden';
                        viewerState = VIEWER_STATES.TRANSITIONING;
                        renderViewerSlide(parsedIndex);
                    }
                    function closeFullscreenViewer() {
                        viewer.classList.remove('open');
                        document.body.style.overflow = '';
                        clearViewerAutoplayTimer();
                        viewerState = VIEWER_STATES.IDLE;
                        pauseAndResetInactiveVideos(-1);
                    }
                    function showNextViewerPhoto(event) {
                        if (event) event.stopPropagation();
                        if (viewerSlides.length <= 1) return;
                        renderViewerSlide((currentViewerIndex + 1) % viewerSlides.length);
                    }
                    function showPreviousViewerPhoto(event) {
                        if (event) event.stopPropagation();
                        if (viewerSlides.length <= 1) return;
                        renderViewerSlide((currentViewerIndex - 1 + viewerSlides.length) % viewerSlides.length);
                    }
                    function toggleViewerAutoplay(event) {
                        if (event) event.stopPropagation();
                        setViewerAutoplayState(!viewerAutoplay);
                    }
                    function toggleViewerRandom(event) {
                        if (event) event.stopPropagation();
                        setViewerRandomState(!viewerRandom);
                    }

                    function startFullscreenPlaybackFromModal(event) {
                        if (event) event.stopPropagation();
                        const modal = document.getElementById('miModal');
                        if (modal) modal.style.display = 'none';
                        if (!viewer.classList.contains('open')) {
                            openFullscreenViewer(currentViewerIndex || 0);
                        }
                        setViewerAutoplayState(true);
                    }
                    if (galleryGrid) {
                        galleryGrid.addEventListener('click', function(event) {
                            const deleteButton = event.target.closest('.gallery-delete');
                            if (deleteButton) {
                                event.preventDefault();
                                event.stopPropagation();
                                window.opener.postMessage({
                                    type: 'DELETE_IMAGE',
                                    index: Number(deleteButton.dataset.deleteIndex),
                                    mediaType: deleteButton.dataset.deleteMediaType,
                                    id: '${E}'
                                }, '*');
                                return;
                            }

                            const card = event.target.closest('.gallery-card');
                            if (!card) return;
                            if (activeSlotSelectionId) {
                                if ((card.dataset.mediaType || 'image') !== 'image') return;
                                const assigned = tryAssignGalleryCardToActiveSlot(card);
                                if (assigned) return;
                            }
                            event.preventDefault();
                            openFullscreenViewer(card.dataset.galleryIndex);
                        });
                    }
                    viewer.addEventListener('click', function(event) {
                        if (event.target === viewer) {
                            closeFullscreenViewer();
                        }
                    });
                    viewerStage?.addEventListener('pointerdown', onViewerStagePointerDown, { passive: true });
                    viewerStage?.addEventListener('pointermove', onViewerStagePointerMove, { passive: false });
                    viewerStage?.addEventListener('pointerup', onViewerStagePointerEnd);
                    viewerStage?.addEventListener('pointercancel', onViewerStagePointerEnd);
                    window.addEventListener('keydown', function(event) {
                        if (!viewer.classList.contains('open')) return;

                        if (event.key === 'Escape') {
                            event.preventDefault();
                            closeFullscreenViewer();
                            return;
                        }

                        if (event.key === 'ArrowRight') {
                            event.preventDefault();
                            showNextViewerPhoto();
                        }

                        if (event.key === 'ArrowLeft') {
                            event.preventDefault();
                            showPreviousViewerPhoto();
                        }
                    });
                    setViewerAutoplayState(false);
                    renderViewerSlide(0);
                </script>
            </body>
            </html>
        `);_.document.close()},w1=()=>{const[_,W]=React.useState(null),R=VJ(null),N=VJ(null),[E,I]=U([]),n={CANTANTE:{color:"#0ea5e9",sombra:"rgba(14,165,233,0.8)"},NSFW:{color:"#ef4444",sombra:"rgba(239,68,68,0.8)"},ACTRIZ:{color:"#22c55e",sombra:"rgba(34,197,94,0.8)"},MODELO:{color:"#f97316",sombra:"rgba(249,115,22,0.8)"},BAILARINA:{color:"#a855f7",sombra:"rgba(168,85,247,0.8)"},INFLUENCER:{color:"#ec4899",sombra:"rgba(236,72,153,0.8)"},PERIODISTA:{color:"#facc15",sombra:"rgba(250,204,21,0.8)"},ATLETA:{color:"#78350f",sombra:"rgba(120,53,15,0.8)"},OTRO:{color:"#ffffff",sombra:"rgba(255,255,255,0.8)"},DEFAULT:{color:"#334155",sombra:"transparent"}},HJ=(J="")=>{const X=String(J||"").normalize("NFD").replace(/[̀-ͯ]/g,"").trim().toUpperCase();return n[X]||n.DEFAULT},[p,v]=U(fZ),[D,T]=U("EXPLORAR"),[w,x]=U(null),[M,UJ]=U(null),[c,NJ]=U(""),[WJ,bJ]=U({}),[CJ,mJ]=U({}),[cZ,sZ]=U(!1),[_Y,dZ]=U(HY[0]||""),[gQ,FQ]=U(null),[nZ,pZ]=U(!1),[WY,uJ]=U(!1),[OY,hQ]=U(!1),[yQ,LY]=U(!1),[UQ,EY]=U(!1),[t,VQ]=U(null),[iZ,DQ]=U(null),[RJ,CQ]=U(null),[lZ,FY]=U(!1),[UY,mQ]=U(""),[XJ,RQ]=React.useState(null),[BX,uQ]=U(!1),[VY,tZ]=U({x:0,y:0}),[jJ,DY]=U("promedio"),[fJ,zX]=U("desc"),[AX,oZ]=U(!1),[BJ,BQ]=U({isOpen:!1,profile:null,category:null}),[TX,fQ]=U({isOpen:!1,profile:null}),[vJ,NX]=U("INICIAL"),[h,aZ]=U("GENERAL"),[zJ,JJ]=U(null),[cQ,zQ]=U(null),[AQ,MX]=U([]),[XQ,CY]=U([]),[MJ,TQ]=U(!1),[IJ,KX]=U(!1),[KJ,RY]=U(!1),[wX,rZ]=U(5),[BY,GX]=U(20),[zY,kX]=U(12),[AY,TY]=U(!1),[AJ,eZ]=U(!0),[NY,YQ]=U(!1),[MY,sQ]=U(""),[KY,dQ]=U(""),[wY,cJ]=U(""),[GY,kY]=U(!1),[nQ,SY]=U(""),[SX,xY]=U("url"),[PY,bY]=U(""),[vY,IY]=U(null),[gY,J0]=U($J[0]),[hY,yY]=U(""),[mY,pQ]=U(""),[sJ,Q0]=U(""),[gJ,uY]=U([]),fY=VJ(null),cY=VJ(null),[sY,dY]=U(""),[iQ,nY]=U("url"),[pY,iY]=U(""),[lY,tY]=U(null),[oY,wJ]=U(""),[xX,X0]=U(!1),[lQ,aY]=U(""),[tQ,rY]=U(""),[oQ,dJ]=U(""),[Y0,Z0]=U(!1),[PX,bX]=U(!1),[eY,vX]=U({}),[IX,JZ]=U({}),[$0,aQ]=U({}),[H0,QZ]=U({}),[nJ,j0]=U(!1),[NQ,q0]=U(!1),[_0,MQ]=U(""),[rQ,XZ]=U(""),pJ=VJ(null),eQ=VJ(null),gX=VJ(null),KQ=VJ(null),wQ=VJ(null),JX=VJ(!1),QX=VJ(null),XX=VJ(!1),YZ=()=>({label:"",emoji:"\uD83D\uDCC1",coverImg:"",reglas:{nacionalidades:[],profesiones:[],ciudades:[],edadMin:"",edadMax:"",caracteristica:"Rostro",operador:"Superior a",umbral:""}}),YX=()=>({nombre:"",nacionalidad:"",ciudad:"",profesion:"",fechaNacimiento:"",estaturaCm:"",fotos:[],galeria:{fotos:[],gifs:[],videos:[]},batallaFotosPreferidas:XY(),puntuaciones:vQ()}),[P,o]=U(YX);d(()=>{if(!M){if(c)NJ("");return}if(M==="GENERAL"&&c!=="all")NJ("all")},[M,c]);const hX=(J={})=>{const X=YX(),Y=J&&typeof J==="object"?J:{},Z=Y?.puntuaciones&&typeof Y.puntuaciones==="object"?{...X.puntuaciones,...Y.puntuaciones}:X.puntuaciones;return{...Y,...X,nombre:typeof Y.nombre==="string"?Y.nombre:"",nacionalidad:typeof Y.nacionalidad==="string"?Y.nacionalidad:"",ciudad:typeof Y.ciudad==="string"?Y.ciudad:"",profesion:typeof Y.profesion==="string"?Y.profesion:"",fechaNacimiento:typeof Y.fechaNacimiento==="string"?Y.fechaNacimiento:"",estaturaCm:Y.estaturaCm===void 0||Y.estaturaCm===null?"":Y.estaturaCm,fotos:Array.isArray(Y.fotos)?Y.fotos:[],galeria:{fotos:Array.isArray(Y?.galeria?.fotos)?Y.galeria.fotos:[],gifs:Array.isArray(Y?.galeria?.gifs)?Y.galeria.gifs:[],videos:Array.isArray(Y?.galeria?.videos)?Y.galeria.videos:[]},batallaFotosPreferidas:FJ(Y?.batallaFotosPreferidas),puntuaciones:Z}},ZX=(J={})=>{if(J?.isAnonymousGallery||J?.firebaseId===SJ)return;o(hX(J));VQ(J.firebaseId||J.id||null);uJ(!0)},W0=(J={})=>{if(!(J?.firebaseId||J?.nombre))return;const Y=R.current,Z=Y&&!Y.closed?Y:window.open("","_blank");R.current=Z;RX({targetWindow:Z,profileName:J?.nombre||"",profession:J?.profesion||"",photos:[...(J?.galeria?.fotos||[]).map(($,H)=>({...i($,"image"),sourceTag:"fotos",sourceIndex:H})),...(J?.galeria?.videos||[]).map(($,H)=>({...i($,"video"),sourceTag:"videos",sourceIndex:H}))],editingId:J?.firebaseId||J?.id||"",battlePhotoPrefs:J?.batallaFotosPreferidas||J?.galeria?.battlePhotoPreferences||{},profilePhotoUrl:J?.fotos?.[0]||""});XZ(J?.firebaseId||J?.id||"");Z?.focus();dJ("");MQ("")},ZZ=(J="")=>{if(D==="anonimo")return;const X=String(J||"").trim();VQ(null);o({...YX(),profesion:X});uJ(!0)},$X=f(()=>{const X=[{key:"nombre",label:"Nombre",value:P?.nombre},{key:"fotos.0",label:"Foto principal",value:P?.fotos?.[0]},{key:"profesion",label:"Profesión",value:P?.profesion},{key:"nacionalidad",label:"Nacionalidad",value:P?.nacionalidad},{key:"ciudad",label:"Ciudad",value:P?.ciudad},{key:"fechaNacimiento",label:"Fecha de nacimiento",value:P?.fechaNacimiento},{key:"estaturaCm",label:"Estatura",value:P?.estaturaCm}].map((Y)=>{const Z=typeof Y.value==="string"?Y.value.trim():Y.value,$=!(Z===""||Z===void 0||Z===null),H=Y.key==="fotos.0"?$?"SI":"NO":$?String(Z):"Sin completar";return{...Y,isComplete:$,preview:H}});return{completed:X.filter((Y)=>Y.isComplete),missing:X.filter((Y)=>!Y.isComplete)}},[P]),k1=async({profileId:J,url:X,tag:Y="fotos",label:Z="",type:$="image",autor:H=""})=>{const L=(X||"").trim(),j=$J.includes(Z)?Z:"",O=eJ(L,$);if(!J||!L)return[];const q=K.ref(`perfiles/${J}/galeria/${Y}`),C=[...(await q.once("value")).val()||[],{url:L,label:j,type:O,autor:YY(H)}];await q.set(C);if(J===t)o((B)=>({...B,galeria:{...B.galeria||{fotos:[],gifs:[],videos:[]},[Y]:C}}));return C},O0=async({profileId:J,sourceTag:X,sourceIndex:Y,label:Z})=>{if(!J||!X||!Number.isInteger(Y))return;const $=$J.includes(Z)?Z:"",H=K.ref(`perfiles/${J}/galeria/${X}`),L=await H.once("value"),j=Array.isArray(L.val())?L.val():[];if(!j[Y])return;const O=[...j],q=i(O[Y],X==="videos"?"video":"image");O[Y]={...q,label:$};await H.set(O);if(J===t)o((F)=>({...F,galeria:{...F.galeria||{fotos:[],gifs:[],videos:[]},[X]:O}}))},$Z=async({profileId:J,sourceTag:X,sourceIndex:Y,url:Z})=>{if(!J||!X||!Number.isInteger(Y))return;const $=(Z||"").trim();if(!$)return;const H=K.ref(`perfiles/${J}/galeria/${X}`),L=await H.once("value"),j=Array.isArray(L.val())?L.val():[];if(!j[Y])return;const O=[...j],q=X==="videos"?"video":"image",F=i(O[Y],q);O[Y]={...F,url:$,type:eJ($,q)};await H.set(O);if(J===t)o((z)=>({...z,galeria:{...z.galeria||{fotos:[],gifs:[],videos:[]},[X]:O}}))},L0=async({profileId:J,sourceTag:X,sourceIndex:Y})=>{if(!J||!X||!Number.isInteger(Y))return;const Z=K.ref(`perfiles/${J}/galeria/${X}`),$=await Z.once("value"),H=Array.isArray($.val())?$.val():[],L=H[Y];if(!L)return;const j=H.filter((q,F)=>F!==Y);await Z.set(j);const O=i(L,X==="videos"?"video":"image").url;if(O){const q=K.ref(`perfiles/${J}/batallaFotosPreferidas`),F=await q.once("value"),C={...FJ(F.val())};let B=!1;Object.keys(C).forEach((V)=>{if(C[V]===O){C[V]="";B=!0}});if(B)await q.set(C)}if(J===t)o((q)=>({...q,galeria:{...q.galeria||{fotos:[],gifs:[],videos:[]},[X]:j},batallaFotosPreferidas:(()=>{const F=FJ(q.batallaFotosPreferidas);if(!O)return F;const z={...F};Object.keys(z).forEach((C)=>{if(z[C]===O)z[C]=""});return z})()}))},yX=window.uploadFileToFirebaseStorage=async(J,X="galeria")=>{if(!J)throw new Error("No se encontró el archivo para subir.");const Y=String(X||"galeria").replace(/[^a-zA-Z0-9/_-]/g,""),Z=(J.name||"").split(".").pop(),$=Z&&Z!==J.name?`.${Z.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()}`:"",H=`${Date.now()}-${Math.random().toString(36).slice(2,10)}`,L=`${Y}/${H}${$}`;return(await $1.ref(L).put(J)).ref.getDownloadURL()},S1=(J)=>new Promise((X,Y)=>{const Z=new FileReader;Z.onload=()=>X(String(Z.result||""));Z.onerror=()=>Y(new Error("No se pudo leer el archivo."));Z.readAsDataURL(J)}),HZ=(J,X)=>{const Y=String(X||"").trim(),Z=Array.isArray(J?.galeria?.fotos)?J.galeria.fotos:[];if(!Y)return{...J,fotos:[""]};const H=Z.some((L)=>i(L,"image").url===Y)?Z:[...Z,{url:Y,label:"C",type:"image"}];return{...J,fotos:[Y],galeria:{...J.galeria||{},fotos:H}}},E0=async(J)=>{const X=J.target.files?.[0];if(!X)return;EY(!0);try{const Y=await yX(X,"perfiles/fotos-principales");o((Z)=>HZ(Z,Y))}catch(Y){console.error("Error al cargar foto de perfil local:",Y);window.alert("No se pudo subir la foto seleccionada. Probá de nuevo.")}finally{EY(!1);J.target.value=""}},F0=async({url:J,label:X,autor:Y="",forcedTag:Z=""})=>{const $=String(J||"").trim();if(!$)throw new Error("Ingresá una URL o seleccioná un archivo.");const H=$J.includes(X)?X:"",L=eJ($);if(!(L==="image"||bZ.test($)||Boolean(WQ($))))throw new Error("Formato no válido. Usá imagen, video archivo o URL de YouTube/Vimeo.");const O=Z||(L==="video"?"videos":"fotos"),q=K.ref(`${qQ}/${O}`),F=await q.once("value"),C=[...Array.isArray(F.val())?F.val():[],{url:$,label:H,type:L,autor:String(Y||"").trim()}];await q.set(C)},U0=async(J="")=>{pQ("");try{let X=String(PY||"").trim();if(SX==="file"){if(!vY)throw new Error("Seleccioná un archivo local.");X=await yX(vY,"anonimo/galeria")}await F0({url:X,label:gY,autor:hY,forcedTag:J});bY("");IY(null);yY("");xY("url")}catch(X){pQ(X?.message||"No se pudo guardar en galería anónima.")}},V0=async()=>{const J=String(sY||"").trim();wJ("");if(!J){wJ("Completá el nombre del audio.");return}try{let X=String(pY||"").trim();if(iQ==="file"){if(!lY){wJ("Seleccioná un archivo de audio.");return}X=await yX(lY,"anonimo/audios")}else if(!X){wJ("Completá la URL del audio.");return}if(iQ==="url"&&!W1.test(X)){wJ("La URL debe apuntar a un archivo de audio válido.");return}const Y=K.ref(`${qQ}/audios`),Z=await Y.once("value"),H=[...Array.isArray(Z.val())?Z.val():[],{nombre:J,url:X}];await Y.set(H);dY("");iY("");tY(null);nY("url")}catch(X){wJ("No se pudo guardar el audio en Firebase.")}},D0=async(J)=>{if(!Number.isInteger(J)||J<0)return;wJ("");try{const X=K.ref(`${qQ}/audios`),Y=await X.once("value"),Z=Array.isArray(Y.val())?Y.val():[];if(!Z[J])return;const $={nombre:String(Z[J]?.nombre||"").trim(),url:String(Z[J]?.url||"").trim()},H=Z.filter((L,j)=>j!==J);await X.set(H);if($.url&&$.url===lQ)aY("");if($.url&&$.url===tQ)rY("")}catch(X){wJ("No se pudo eliminar el audio de Firebase.")}},x1=async(J,X)=>{X.stopPropagation();if(confirm("¿Estás seguro de que querés eliminar esto, corazón?"))try{await K.collection("galeria").doc(J).delete()}catch(Y){console.error("Error al borrar de Firebase:",Y)}},[G,OJ]=U(YZ()),mX=()=>OJ(YZ());d(()=>{if(window.lucide)window.lucide.createIcons()},[D,WY,OY,E,XJ,p]);d(()=>{if(R.current&&!R.current.closed&&t)RX({targetWindow:R.current,profileName:P.nombre,profession:P.profesion,photos:[...(P.galeria?.fotos||[]).map((J,X)=>({...i(J,"image"),sourceTag:"fotos",sourceIndex:X})),...(P.galeria?.videos||[]).map((J,X)=>({...i(J,"video"),sourceTag:"videos",sourceIndex:X}))],editingId:t,battlePhotoPrefs:P.batallaFotosPreferidas,profilePhotoUrl:P.fotos?.[0]||""})},[t,P.nombre,P.profesion,P.galeria?.fotos,P.galeria?.videos,P.batallaFotosPreferidas]);d(()=>{if(!rQ)return;const J=R.current;if(!J||J.closed)return;if(t&&t===rQ)return;const X=E.find((Y)=>(Y?.firebaseId||Y?.id)===rQ);if(!X)return;RX({targetWindow:J,profileName:X?.nombre||"",profession:X?.profesion||"",photos:[...(X?.galeria?.fotos||[]).map((Y,Z)=>({...i(Y,"image"),sourceTag:"fotos",sourceIndex:Z})),...(X?.galeria?.videos||[]).map((Y,Z)=>({...i(Y,"video"),sourceTag:"videos",sourceIndex:Z}))],editingId:X?.firebaseId||X?.id||"",battlePhotoPrefs:X?.batallaFotosPreferidas||X?.galeria?.battlePhotoPreferences||{},profilePhotoUrl:X?.fotos?.[0]||""})},[rQ,E,t]);d(()=>{const J=async(B)=>{if(B.data.type==="ADD_IMAGE"){const{url:V,id:A,label:S,mediaType:b,autor:s}=B.data,YJ=b==="video"?"videos":"fotos";if(!A)return;const m=A===SJ?K.ref(`${qQ}/${YJ}`):K.ref(`perfiles/${A}/galeria/${YJ}`),u=(await m.once("value")).val()||[],a=(V||"").trim();if(!a)return;const qJ=[...u,{url:a,label:$J.includes(S)?S:"",type:eJ(a,b),autor:YY(s)}];await m.set(qJ);o((r)=>({...r,galeria:{...r.galeria,[YJ]:qJ}}))}if(B.data.type==="DELETE_IMAGE"){const{index:V,id:A,mediaType:S}=B.data,b=S==="video"?"videos":"fotos";if(!A)return;const s=A===SJ?K.ref(`${qQ}/${b}`):K.ref(`perfiles/${A}/galeria/${b}`),m=(await s.once("value")).val()||[],QJ=m[V],u=m.filter((qJ,r)=>r!==V);await s.set(u);const a=i(QJ,S).url;if(a&&A!==SJ){const qJ=K.ref(`perfiles/${A}/batallaFotosPreferidas`),r=await qJ.once("value"),e={...FJ(r.val())};let jQ=!1;Object.keys(e).forEach((oJ)=>{if(e[oJ]===a){e[oJ]="";jQ=!0}});if(jQ)await qJ.set(e)}o((qJ)=>({...qJ,galeria:{...qJ.galeria,[b]:u},batallaFotosPreferidas:(()=>{const r=FJ(qJ.batallaFotosPreferidas);if(!a)return r;const ZJ={...r};Object.keys(ZJ).forEach((e)=>{if(ZJ[e]===a)ZJ[e]=""});return ZJ})()}))}if(B.data.type==="SET_BATTLE_PHOTO_PREF"){const{id:V,slotId:A,index:S,mediaType:b}=B.data,s=VX(A);if(!V||V===SJ||!s||!Number.isInteger(S))return;const YJ=b==="video"?"videos":"fotos",u=(await K.ref(`perfiles/${V}/galeria/${YJ}`).once("value")).val()||[],a=i(u[S],b);if(!a.url||a.type!=="image")return;await K.ref(`perfiles/${V}/batallaFotosPreferidas/${A}`).set(a.url);o((r)=>({...r,batallaFotosPreferidas:{...FJ(r.batallaFotosPreferidas),[A]:a.url}}))}if(B.data.type==="SET_BATTLE_PHOTO_PREF_BY_URL"){const{id:V,slotId:A,url:S,mediaType:b,label:s}=B.data,YJ=VX(A),m=String(S||"").trim();if(!V||V===SJ||!YJ||!m)return;if(b==="video")return;await K.ref(`perfiles/${V}/batallaFotosPreferidas/${A}`).set(m);o((u)=>({...u,batallaFotosPreferidas:{...FJ(u.batallaFotosPreferidas),[A]:m}}))}if(B.data.type==="CLEAR_BATTLE_PHOTO_PREF"){const{id:V,slotId:A}=B.data,S=VX(A);if(!V||V===SJ||!S)return;await K.ref(`perfiles/${V}/batallaFotosPreferidas/${A}`).set("");o((s)=>({...s,batallaFotosPreferidas:{...FJ(s.batallaFotosPreferidas),[A]:""}}))}};window.addEventListener("message",J);const X=K.ref("perfiles"),Y=K.ref(qQ);let Z={},$={};const H=gZ(kZ,[]);if(Array.isArray(H)&&H.length)I(H);const L=gZ(SZ,[]);if(Array.isArray(L)&&L.length)uY(L);const j=()=>{const B=Object.entries(Z||{}).map(([b,s])=>({...hX(s),firebaseId:b})),V=V1($||{}),S=Object.values(V.galeria||{}).some((b)=>Array.isArray(b)&&b.length>0)?[...B,V]:B;I(S);hZ(kZ,S)},O=(B)=>{Z={...Z,[B.key]:B.val()||{}};j()},q=(B)=>{Z={...Z,[B.key]:B.val()||{}};j()},F=(B)=>{const{[B.key]:V,...A}=Z;Z=A;j()};X.on("child_added",O);X.on("child_changed",q);X.on("child_removed",F);Y.on("value",(B)=>{$=B.val()||{};const V=Array.isArray($?.audios)?$.audios.map((A)=>({nombre:String(A?.nombre||"").trim(),url:String(A?.url||"").trim()})).filter((A)=>A.nombre&&A.url):[];uY(V);hZ(SZ,V);j()});v(fZ);const z=K.ref("arenaBattleState");z.on("value",(B)=>{bJ(B.val()||{})});const C=K.ref("arenaGlobalState");C.on("value",(B)=>{mJ(B.val()||{})});return()=>{window.removeEventListener("message",J);X.off("child_added",O);X.off("child_changed",q);X.off("child_removed",F);Y.off();z.off();C.off()}},[]);d(()=>{const J=gJ.find((Y)=>Y.url===lQ),X=gJ.find((Y)=>Y.url===tQ);[KQ.current,wQ.current].forEach((Y)=>{if(!Y)return;Y.pause();Y.currentTime=0});if(!xX)return;if(J&&KQ.current){KQ.current.src=J.url;KQ.current.play().catch(()=>{})}if(X&&wQ.current&&X.url!==J?.url){wQ.current.src=X.url;wQ.current.play().catch(()=>{})}},[xX,lQ,tQ,gJ]);const hJ=(J)=>{if(!J)return"?";const X=new Date,Y=new Date(J);let Z=X.getFullYear()-Y.getFullYear();if(X.getMonth()<Y.getMonth()||X.getMonth()===Y.getMonth()&&X.getDate()<Y.getDate())Z--;return Z},uX=(J={})=>{return{...vQ(),...J?.puntuaciones||{}}},iJ={Rostro:["Rostro","Ojos","Boca","Cabello"],Cuerpo:["Cuerpo","Cola","Pechos","Cintura","Piernas","Estatura"],Actitud:["Sensualidad","Carisma","Elegancia","Dulzura","Talento"]},fX=(J={},X=[])=>{if(!Array.isArray(X)||!X.length)return 0;const Y=uX(J);return X.reduce((Z,$)=>Z+(Number(Y[$])||0),0)/X.length},HX=(J={})=>{return fX(J,iJ.Rostro)},jX=(J={})=>{return fX(J,iJ.Cuerpo)},qX=(J={})=>{return fX(J,iJ.Actitud)},jZ=(J={},X="")=>{if(X==="Rostro")return HX(J);if(X==="Cuerpo")return jX(J);if(X==="Actitud")return qX(J);return 0},LJ=(J={})=>{const X=Object.keys(iJ).map((Z)=>jZ(J,Z));return(X.reduce((Z,$)=>Z+$,0)/X.length).toFixed(0)},_X=(J)=>{const X=[],Y=(J.nacionalidad||"").toLowerCase(),Z=(J.profesion||"").toLowerCase(),$=(J.ciudad||"").toLowerCase(),H=hJ(J.fechaNacimiento);(Array.isArray(p)?p:[]).forEach((L)=>{const j=L?.reglas||{};let O=!0;const q=Array.isArray(j.nacionalidades)?j.nacionalidades:[],F=Array.isArray(j.profesiones)?j.profesiones:[],z=Array.isArray(j.ciudades)?j.ciudades:[];if(q.length>0&&!q.some((C)=>Y===String(C||"").toLowerCase()))O=!1;if(F.length>0&&!F.some((C)=>Z===String(C||"").toLowerCase()))O=!1;if(z.length>0&&!z.some((C)=>$===String(C||"").toLowerCase()))O=!1;if(j.edadMin&&(H==="?"||H<parseInt(j.edadMin)))O=!1;if(j.edadMax&&(H==="?"||H>parseInt(j.edadMax)))O=!1;if(j.caracteristica&&j.umbral){const C=uX(J)[j.caracteristica]||0,B=parseInt(j.umbral);if(j.operador==="Superior a"&&C<=B)O=!1;if(j.operador==="Inferior a"&&C>=B)O=!1}if(O&&L?.firebaseId)X.push(L.firebaseId)});return X},C0=f(()=>["Todas",...new Set(E.map((J)=>J.nacionalidad).filter(Boolean))],[E]),P1=f(()=>["Todas",...new Set(E.map((J)=>J.profesion).filter(Boolean))],[E]),R0=f(()=>["Todas",...new Set(E.map((J)=>J.ciudad).filter(Boolean))],[E]),qZ=f(()=>{return(E||[]).reduce((J,X)=>{if(!X?.firebaseId)return J;J[X.firebaseId]=_X(X);return J},{})},[E,p]),ZQ=f(()=>{return(E||[]).flatMap((J)=>{const X=D1(J);return[...Array.isArray(J?.galeria?.fotos)?J.galeria.fotos.map((Z,$)=>({item:Z,sourceTag:"fotos",sourceIndex:$,fallbackType:"image"})):[],...Array.isArray(J?.galeria?.gifs)?J.galeria.gifs.map((Z,$)=>({item:Z,sourceTag:"gifs",sourceIndex:$,fallbackType:"image"})):[],...Array.isArray(J?.galeria?.videos)?J.galeria.videos.map((Z,$)=>({item:Z,sourceTag:"videos",sourceIndex:$,fallbackType:"video"})):[]].map(({item:Z,sourceTag:$,sourceIndex:H,fallbackType:L})=>{const j=i(Z,L);return{id:`${J.firebaseId||J.nombre||"perfil"}-${$}-${H}`,url:j.url,label:j.label,type:j.type,isGif:j.type==="image"&&A1(j.url),nombre:J.nombre||"Sin nombre",profesion:J.profesion||"Perfil",nacionalidad:J.nacionalidad||"",fotoPerfil:J.fotos?.[0]||j.url,profileId:J.firebaseId,sourceCharacterId:X,sourceTag:$,sourceIndex:H}})})},[E]),EJ=f(()=>{return ZQ.filter((J)=>Boolean(J.url))},[ZQ]),cX=f(()=>{return EJ.reduce((J,X)=>{const Y=X.label||"";if(!J[Y])J[Y]=[];J[Y].push(X);return J},{})},[EJ]),_Z=f(()=>{return EJ.reduce((J,X)=>{const Y=X.profileId||X.nombre;if(!Y)return J;if(!J[Y])J[Y]=[];J[Y].push(X);return J},{})},[EJ]),B0=f(()=>{return new Set(EJ.map((J)=>J.profileId).filter(Boolean)).size},[EJ]),WZ=f(()=>{return Object.entries(qZ||{}).reduce((J,[X,Y])=>{J[X]=new Set(Array.isArray(Y)?Y:[]);return J},{})},[qZ]),yJ=f(()=>{if(h==="GENERAL")return[{id:"GENERAL",nombre:"General",profesion:"Archivo global",nacionalidad:"",fotoPerfil:EJ[0]?.url||"",photos:EJ.filter((J)=>!H1.includes(J.label||""))}];if(h==="PERSONAJE")return Object.entries(_Z).map(([J,X])=>{const Y=X[0]||{};return{id:`PERSONAJE-${J}`,profileId:Y.profileId||null,nombre:Y.nombre||"Sin nombre",profesion:Y.profesion||"Perfil",nacionalidad:Y.nacionalidad||"",fotoPerfil:Y.fotoPerfil||Y.url||"",photos:X}}).filter((J)=>J.photos.length>0).sort((J,X)=>J.nombre.localeCompare(X.nombre,"es",{sensitivity:"base"}));if(h==="ETIQUETA")return $J.map((J)=>{const X=cX[J]||[];return{id:`ETIQUETA-${J}`,nombre:`Etiqueta ${J}`,profesion:"Archivo por etiqueta",nacionalidad:"",fotoPerfil:X[0]?.url||"",photos:X}}).filter((J)=>J.photos.length>0);return(p||[]).map((J)=>{const X=EJ.filter((Y)=>{if(!Y.profileId)return!1;const Z=WZ[Y.profileId];return Z?Z.has(J.firebaseId):!1});return{id:`CARPETA-${J.firebaseId}`,nombre:J.label||"Carpeta sin nombre",profesion:"Categoría",nacionalidad:"",fotoPerfil:J.coverImg||X[0]?.fotoPerfil||X[0]?.url||"",photos:X}}).filter((J)=>J.photos.length>0).sort((J,X)=>J.nombre.localeCompare(X.nombre,"es",{sensitivity:"base"}))},[EJ,cX,_Z,p,h,WZ]),lJ=f(()=>{if(h==="GENERAL")return yJ[0]||null;if(!cQ)return null;return yJ.find((J)=>J.id===cQ.id)||null},[yJ,cQ,h]),GJ=f(()=>{if(h!=="PERSONAJE")return[];return yJ.filter((J)=>AQ.includes(J.id))},[yJ,h,AQ]),GQ=f(()=>{if(h==="PERSONAJE")return GJ.flatMap((J)=>J.photos||[]);if(h==="ETIQUETA"){if(!XQ.length)return[];return EJ.filter((J)=>XQ.includes(J.label))}return lJ?.photos||EJ},[h,GJ,lJ,EJ,XQ]),z0=f(()=>{const J=GQ.reduce((X,Y)=>{const Z=Y.label||"";if(!Z)return X;X[Z]=(X[Z]||0)+1;return X},{});return $J.reduce((X,Y)=>{X[Y]=J[Y]||0;return X},{})},[GQ]),g=f(()=>{return GQ.filter((J)=>h==="ETIQUETA"?!0:vJ==="INICIAL"?J.label!=="X":vJ==="100"?!0:J.label===vJ)},[GQ,vJ,h]),sX=f(()=>{return g.slice(0,BY)},[g,BY]),WX=sX.length<g.length,OX=xZ[h]||h,LX=h!=="GENERAL"&&h!=="ETIQUETA",OZ=f(()=>{if(h!=="PERSONAJE")return[];return yJ.filter((J)=>!AQ.includes(J.id))},[yJ,h,AQ]),k=zJ===null?null:g[_Q(zJ,g.length)]||null,kJ=f(()=>{return ZQ.filter((J)=>{if(J.type!=="image")return!1;if(!J.url)return!0;return Boolean(eY[J.id])})},[ZQ,eY]),LZ=f(()=>{const J=kJ.reduce((X,Y)=>{const Z=Y.profileId||Y.nombre||"sin-perfil";if(!X[Z])X[Z]={id:Z,nombre:Y.nombre||"Sin nombre",profesion:Y.profesion||"Perfil",nacionalidad:Y.nacionalidad||"",fotos:[]};X[Z].fotos.push(Y);return X},{});return Object.values(J).map((X)=>({...X,fotos:X.fotos.sort((Y,Z)=>(Y.label||"").localeCompare(Z.label||"","es",{sensitivity:"base"}))})).sort((X,Y)=>X.nombre.localeCompare(Y.nombre,"es",{sensitivity:"base"}))},[kJ]);d(()=>{if(!k){YQ(!1);sQ("");dQ("");cJ("");return}YQ(!1);sQ(k.label||"");dQ(k.url||"");cJ("")},[k]);d(()=>{if(D!=="GALERIA"){zQ(null);JJ(null)}},[D]);d(()=>{GX(40);JJ(null)},[h,vJ,XQ,AQ,cQ,E.length]);d(()=>{if(!WX)return;const J=fY.current;if(!J||typeof IntersectionObserver==="undefined")return;const X=new IntersectionObserver((Y)=>{Y.forEach((Z)=>{if(Z.isIntersecting)GX(($)=>Math.min($+12,g.length))})},{rootMargin:"180px 0px"});X.observe(J);return()=>X.disconnect()},[WX,g.length]);d(()=>{if(!FX)return;const J=cY.current;if(!J||typeof IntersectionObserver==="undefined")return;const X=new IntersectionObserver((Y)=>{Y.forEach((Z)=>{if(Z.isIntersecting)kX(($)=>Math.min($+12,TJ.length))})},{rootMargin:"180px 0px"});X.observe(J);return()=>X.disconnect()},[FX,TJ.length]);d(()=>{zQ(null);JJ(null);MX([]);CY([])},[h]);d(()=>{if(zJ===null)return;if(!g.length){JJ(null);return}if(zJ>=g.length)JJ(0)},[g,zJ]);d(()=>{if(zJ===null)return;const J=(X)=>{if(X.key==="Escape"){JJ(null);return}if(!g.length)return;if(X.key==="ArrowRight")JJ((Y)=>_Q((Y??0)+1,g.length));if(X.key==="ArrowLeft")JJ((Y)=>_Q((Y??0)-1,g.length))};window.addEventListener("keydown",J);return()=>window.removeEventListener("keydown",J)},[g.length,zJ]);d(()=>{if(zJ===null){TQ(!1);KX(!1);RY(!1)}},[zJ]);d(()=>{if(!BX)return;const J=(Y)=>{if(N.current&&!N.current.contains(Y.target))uQ(!1)},X=(Y)=>{if(Y.key==="Escape")uQ(!1)};document.addEventListener("mousedown",J);window.addEventListener("keydown",X);return()=>{document.removeEventListener("mousedown",J);window.removeEventListener("keydown",X)}},[BX]);d(()=>{let J=!1;const X=ZQ.filter((Z)=>Z.type==="image"&&Z.url);if(!X.length){vX({});return}(async()=>{const Z=8,$=[];for(let L=0;L<X.length;L+=Z){const j=X.slice(L,L+Z),O=await Promise.all(j.map(async(q)=>({id:q.id,isBroken:await yZ(q.url)})));$.push(...O);if(J)return}if(J)return;const H=$.reduce((L,j)=>{L[j.id]=j.isBroken;return L},{});vX(H)})();return()=>{J=!0}},[ZQ]);d(()=>{if(!PX)return;const J=kJ.reduce((X,Y)=>{X[Y.id]=Y.url;return X},{});JZ(J);QZ({})},[PX,kJ]);d(()=>{if(pJ.current){clearTimeout(pJ.current);pJ.current=null}if(!MJ||!k)return;if(k.type==="video")return;const J=wX*1000;pJ.current=setTimeout(()=>{JJ((X)=>PZ(X,g,IJ))},J);return()=>{if(pJ.current){clearTimeout(pJ.current);pJ.current=null}}},[MJ,k,g,IJ,wX]);d(()=>{if(!k||!JX.current)return;JX.current=!1;requestAnimationFrame(()=>{T0()})},[k]);const dX=typeof window!=="undefined"?window.matchMedia("(max-width: 1023px), (pointer: coarse)").matches:!1,EZ=()=>{const J=eQ.current;if(!J)return;J.classList.add("mobile-gallery-fallback-fullscreen");document.body.classList.add("mobile-gallery-fallback-active")},A0=()=>{const J=eQ.current;if(J)J.classList.remove("mobile-gallery-fallback-fullscreen");document.body.classList.remove("mobile-gallery-fallback-active")},T0=()=>{const J=eQ.current;if(!J)return;if(document.fullscreenElement)return;const X=J.requestFullscreen||J.webkitRequestFullscreen||J.msRequestFullscreen;if(typeof X==="function")Promise.resolve(X.call(J)).catch(()=>{if(dX)EZ()});else if(dX)EZ()},N0=()=>{if(!document.fullscreenElement)return;const J=document.exitFullscreen||document.webkitExitFullscreen||document.msExitFullscreen;if(typeof J==="function")Promise.resolve(J.call(document)).catch(()=>{})},FZ=(J,{autoplay:X=!1,fromGeneralPlay:Y=!1}={})=>{JX.current=!!X;JJ(J);TQ(X);RY(Y);YQ(!Y)},M0=(J)=>{if(!J)return;MX((X)=>X.includes(J)?X:[...X,J]);JJ(null)},K0=(J)=>{if(!J)return;MX((X)=>X.filter((Y)=>Y!==J));JJ(null)},w0=(J)=>{if(!J)return;CY((X)=>X.includes(J)?X.filter((Y)=>Y!==J):[...X,J]);JJ(null)},G0=async()=>{if(!(typeof window!=="undefined"&&typeof window.JSZip!=="undefined")){window.alert("No se pudo iniciar la descarga: falta la librería ZIP.");return}if(!g.length){window.alert("No hay archivos visibles para descargar.");return}const X=(Z="")=>String(Z||"").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[\/:*?"<>|]/g,"-").replace(/\s+/g," ").trim(),Y=(Z="")=>{return((String(Z||"").split("?")[0].split("#")[0].match(/\.([a-zA-Z0-9]{2,5})$/)||[])[1]||"jpg").toLowerCase()};TY(!0);try{const Z=new window.JSZip,$=g.filter((S)=>S?.url);let H=0,L=0,j=0;const q=String(window.GALLERY_DOWNLOAD_PROXY||"").trim()||"https://corsproxy.io/?",F=(S)=>{if(!q)return"";if(q.includes("{url}"))return q.replace("{url}",encodeURIComponent(S));const b=q.endsWith("?")||q.endsWith("=")?"":q.includes("?")?"&":"?";return`${q}${b}${encodeURIComponent(S)}`},z=async(S)=>{const b=await fetch(S,{mode:"cors"});if(!b.ok)throw new Error(`HTTP ${b.status}`);return{blob:await b.blob(),viaProxy:!1}};for(let S=0;S<$.length;S+=1){const b=$[S],s=X(b.nombre||"Sin nombre")||"Sin nombre",YJ=Y(b.url),m=X(b.label||"sin-etiqueta")||"sin-etiqueta",QJ=`${String(S+1).padStart(4,"0")}_${m}.${YJ}`;try{let u;try{u=await z(b.url)}catch(a){const qJ=F(b.url);if(!qJ)throw a;const r=await fetch(qJ,{mode:"cors"});if(!r.ok)throw new Error(`Proxy HTTP ${r.status}`);u={blob:await r.blob(),viaProxy:!0}}Z.folder(s).file(QJ,u.blob);H+=1;if(u.viaProxy)j+=1}catch(u){L+=1;console.warn("No se pudo descargar un archivo de la galería:",b.url,u)}}if(!H){window.alert("No se pudo descargar ningún archivo. Revisá permisos CORS/URLs.");return}const C=await Z.generateAsync({type:"blob"}),B=URL.createObjectURL(C),V=document.createElement("a"),A=new Date().toISOString().slice(0,10);V.href=B;V.download=`galeria-completa-${A}.zip`;document.body.appendChild(V);V.click();V.remove();URL.revokeObjectURL(B);if(L>0)window.alert(`Descarga completada con avisos: ${H} archivos incluidos, ${L} omitidos y ${j} recuperados por proxy.`)}catch(Z){console.error("Error al generar ZIP de galería:",Z);window.alert("No se pudo crear el ZIP de la galería.")}finally{TY(!1)}},UZ=()=>{JX.current=!1;TQ(!1);JJ(null);A0();N0()},kQ=()=>JJ((J)=>PZ(J,g,IJ)),b1=()=>JJ((J)=>_Q((J??0)-1,g.length)),k0=async()=>{if(!k?.profileId||!k?.sourceTag||!Number.isInteger(k?.sourceIndex))return;const J=(KY||"").trim();if(!J){cJ("La URL no puede estar vacía.");return}if(vZ(J)||!_J(J,"")){cJ("La URL está bloqueada o no es válida.");return}try{kY(!0);cJ("");if(J!==k.url)await $Z({profileId:k.profileId,sourceTag:k.sourceTag,sourceIndex:k.sourceIndex,url:J});await O0({profileId:k.profileId,sourceTag:k.sourceTag,sourceIndex:k.sourceIndex,label:MY});YQ(!1)}catch(X){cJ("No se pudo guardar la edición del ítem.");console.error("Error al actualizar etiqueta de la multimedia:",X)}finally{kY(!1)}},S0=(J,X)=>{JZ((Y)=>({...Y,[J]:X}))},VZ=(J,X)=>{if(!J)return;QZ((Y)=>({...Y,[J]:Boolean(X)}))},x0=(J)=>{const X=(IX[J?.id]||J?.url||"").trim();if(!X)return;window.open(X,"_blank","noopener,noreferrer")},P0=async(J)=>{if(!J)return;const X=(IX[J.id]||"").trim();if(!X)return;aQ((Y)=>({...Y,[J.id]:!0}));try{if(X!==J.url)await $Z({profileId:J.profileId,sourceTag:J.sourceTag,sourceIndex:J.sourceIndex,url:X});const Y=await yZ(X);vX((Z)=>({...Z,[J.id]:Y}));if(!Y)VZ(J.id,!1)}catch(Y){console.error("Error al actualizar URL rota:",Y)}finally{aQ((Y)=>({...Y,[J.id]:!1}))}},b0=async(J)=>{if(!J)return;if(!window.confirm("¿Eliminar esta foto rota de la galería?"))return;aQ((Y)=>({...Y,[J.id]:!0}));try{await L0({profileId:J.profileId,sourceTag:J.sourceTag,sourceIndex:J.sourceIndex})}catch(Y){console.error("Error al eliminar foto rota:",Y)}finally{aQ((Y)=>({...Y,[J.id]:!1}))}},v0=f(()=>{if(h==="PERSONAJE")return GJ.length?`${GJ.length} personaje${GJ.length>1?"s":""} seleccionado${GJ.length>1?"s":""}`:"Sin personajes seleccionados";if(lJ&&LX)return lJ.nombre;return OX},[h,GJ,lJ,LX,OX]),I0=async(J)=>{J.preventDefault();if(yQ||UQ)return;LY(!0);const X={...P};try{if(t){await K.ref(`perfiles/${t}`).set(X);uJ(!1);VQ(null)}else{await K.ref("perfiles").push(X);uJ(!1);o(YX())}}catch(Y){console.error("No se pudo guardar el perfil:",Y);window.alert("No se pudo guardar el perfil. Revisá tu conexión e intentá de nuevo.")}finally{LY(!1)}},g0=async(J)=>{J.preventDefault();const{firebaseId:X,...Y}=G,Z={...Y,type:"custom"};try{if(X)await K.ref(`categorias/${X}`).update(Z);else await K.ref("categorias").push(Z);hQ(!1);mX()}catch($){console.error("La categoría no quiso guardarse:",$)}},h0=async(J)=>{if(!J)return;try{await K.ref(`categorias/${J}`).remove();v((X)=>X.filter((Y)=>Y.firebaseId!==J));RQ((X)=>X===J?null:X)}catch(X){console.error("No se pudo borrar la categoría:",X);alert("No se pudo borrar la carpeta. Probá de nuevo.")}},nX=(J)=>{if(!J?.firebaseId)return;mQ("");CQ(J);FY(!0)},y0=()=>{if(!t)return;const J=E.find((X)=>X.firebaseId===t);if(!J)return;nX(J)},pX=()=>{FY(!1);DQ(null);CQ(null)},m0=async(J)=>{if(!J)return;await K.ref(`perfiles/${J}`).remove();I((X)=>X.filter((Y)=>Y.firebaseId!==J))},u0=async()=>{if(!RJ?.firebaseId)return;try{await m0(RJ.firebaseId);mQ("");uJ(!1);if(t===RJ.firebaseId)VQ(null);pX()}catch(J){console.error("No se pudo borrar el perfil:",J);mQ("No se pudo borrar el perfil en Firebase. Probá de nuevo.")}},EX=()=>{uQ(!1);CQ(null)},f0=(J,X)=>{J.preventDefault();uQ(!0);tZ({x:J.clientX,y:J.clientY});CQ(X)},c0=()=>{if(!RJ)return;o(hX(RJ));VQ(RJ.firebaseId);uJ(!0);EX()},s0=async()=>{if(!RJ?.firebaseId)return;if(!confirm("¿Borrar perfil? Esta acción también lo elimina de Firebase.")){EX();return}try{await K.ref(`perfiles/${RJ.firebaseId}`).remove();I((X)=>X.filter((Y)=>Y.firebaseId!==RJ.firebaseId));EX()}catch(X){console.error("No se pudo borrar el perfil:",X);alert("No se pudo borrar el perfil. Probá de nuevo.");EX()}},DZ=(J)=>{const X=J?.estaturaCm;if(X===void 0||X===null||X==="")return"Sin dato";const Y=Number(X);if(Number.isNaN(Y)||Y<=0)return"Sin dato";return`${Math.round(Y)} cm`},iX=(J="")=>String(J||"").trim().toLowerCase(),d0=(J="")=>String(J||"").trim(),SQ=(J=[])=>[...J||[]].filter((X)=>X?.firebaseId&&(X?.nombre||"").trim()).sort((X,Y)=>(X.nombre||"").localeCompare(Y.nombre||"","es",{sensitivity:"base"})).map((X)=>X.firebaseId),CZ=(J=[],X="GENERAL")=>{const Y=String(X||"GENERAL").trim().toUpperCase(),Z=[...J||[]].filter((j)=>j?.firebaseId&&(j?.nombre||"").trim()).sort((j,O)=>(j.nombre||"").localeCompare(O.nombre||"","es",{sensitivity:"base"}));if(Y==="GENERAL")return[{key:"all",label:"Todas",typeLabel:"General",ids:Z.map((j)=>j.firebaseId)}];if(Y==="EDADES"){const j={"18-28":{key:"18-28",label:"18–28",typeLabel:"Edad",ids:[]},"29-39":{key:"29-39",label:"29–39",typeLabel:"Edad",ids:[]},"40+":{key:"40+",label:"40–50+",typeLabel:"Edad",ids:[]}};Z.forEach((O)=>{const q=hJ(O.fechaNacimiento);if(!Number.isFinite(q)||q<18)return;if(q<=28)j["18-28"].ids.push(O.firebaseId);else if(q<=39)j["29-39"].ids.push(O.firebaseId);else j["40+"].ids.push(O.firebaseId)});return Object.values(j)}const $=Y==="NACIONALIDADES"?"nacionalidad":"profesion",H=Y==="NACIONALIDADES"?"Nacionalidad":"Profesión",L=Z.reduce((j,O)=>{const q=iX(O?.[$]);if(!q)return j;if(!j[q])j[q]={key:q,label:d0(O?.[$])||q,typeLabel:H,ids:[]};j[q].ids.push(O.firebaseId);return j},{});return Object.values(L).sort((j,O)=>j.label.localeCompare(O.label,"es",{sensitivity:"base"}))},lX=(J=[],X="GENERAL",Y="")=>{const Z=[...J||[]].filter((j)=>j?.firebaseId&&(j?.nombre||"").trim()).sort((j,O)=>(j.nombre||"").localeCompare(O.nombre||"","es",{sensitivity:"base"}));if(X==="GENERAL"){const j=Z.map((O)=>O.firebaseId);return{groupedIds:j.length>1?[{key:"general",label:"General",typeLabel:"General",ids:j}]:[],orderedIds:j}}const $=CZ(Z,X),H=iX(Y),L=$.filter((j)=>{if(!H||H==="all")return!0;return iX(j.key)===H}).filter((j)=>j.ids.length>=2);return{groupedIds:L,orderedIds:L.flatMap((j)=>j.ids)}},tJ=(J,X)=>[J,X].sort().join("__"),$Q=(J)=>{if(!J||typeof J!=="object")return null;const X=String(J.winnerId||"").trim(),Y=String(J.loserId||"").trim();if(!X||!Y||X===Y)return null;return{winnerId:X,loserId:Y,reason:J.reason==="transitive"?"transitive":"direct",playedAt:Number.isFinite(J.playedAt)?J.playedAt:null}},tX=(J={},X="")=>!!$Q(J?.[X]),xQ=(J={},X=[])=>{const Y=new Set((X||[]).filter(Boolean)),Z={},$={},H={};Object.entries(J||{}).forEach(([q,F])=>{const z=$Q(F);if(!z)return;const{winnerId:C,loserId:B}=z;if(Y.size&&(!Y.has(C)||!Y.has(B)))return;const V=tJ(C,B),A={winnerId:C,loserId:B,reason:"direct",playedAt:z.playedAt??Date.now()};Z[V]=A;$[V]=A;if(!H[C])H[C]=new Set;H[C].add(B)});new Set([...Object.keys(H),...Object.values(H).flatMap((q)=>[...q])]).forEach((q)=>{const F=[...H[q]||[]],z=new Set;while(F.length){const C=F.shift();if(!C||z.has(C)||C===q)continue;z.add(C);const B=tJ(q,C);if(!$[B])$[B]={winnerId:q,loserId:C,reason:"transitive",playedAt:null};(H[C]||[]).forEach((V)=>{if(!z.has(V))F.push(V)})}});const j=Object.fromEntries(Object.entries(H).map(([q,F])=>[q,[...F]])),O=p0($);return{directMatchups:Z,matchups:$,victoryGraph:j,stats:O}},PQ=(J,X={})=>{const Y=DJ(J);if(!Y)return null;const Z=SQ(E),$=xQ(X?.directMatchups||X?.matchups||{},Z);return{arenaName:Y,orderedIds:Z,...$}},oX=(J={},X="",Y="")=>{if(!X||!Y||X===Y)return!1;const Z=tJ(X,Y);return tX(J,Z)},n0=(J=[],X={})=>{for(let Y=0;Y<J.length-1;Y++)for(let Z=Y+1;Z<J.length;Z++)if(!oX(X,J[Y],J[Z]))return[J[Y],J[Z]];return null},aX=(J=[],X={},Y={})=>{const Z={...X||{},...Y||{}};for(const $ of J){const H=n0($?.ids||[],Z);if(H)return H}return null},bQ=(J=[],X,Y="")=>{if(!X)return null;return J.find((Z)=>{const $=Z?.ids||[];if(!$.includes(X))return!1;return!Y||$.includes(Y)})||null},p0=(J={})=>{return Object.keys(J||{}).reduce((X,Y)=>{const Z=$Q(J[Y]);if(!Z)return X;const{winnerId:$,loserId:H}=Z,L=X[$]||{wins:0,battles:0},j=X[H]||{wins:0,battles:0};return{...X,[$]:{wins:L.wins+1,battles:L.battles+1},[H]:{wins:j.wins,battles:j.battles+1}}},{})},RZ=(J="",X="")=>{const Y=String(X||"").trim();if(!J||!Y)return!1;return J.endsWith(`::${Y}`)},i0=(J,X)=>{const Y=$Q(X);if(!Y||Y.reason!=="direct")return J||null;const Z=$Q(J);if(!Z||Z.reason!=="direct")return Y;const $=Z.playedAt??0;return(Y.playedAt??0)>=$?Y:Z},BZ=(J,X=WJ)=>{const Y=String(J||"").trim();if(!Y)return xQ({},[]);const Z={};Object.entries(X||{}).forEach(([H,L])=>{if(!RZ(H,Y))return;const j=L?.directMatchups||{};Object.entries(j).forEach(([O,q])=>{Z[O]=i0(Z[O],q)})});const $=[...E||[]].map((H)=>H?.firebaseId).filter(Boolean).sort((H,L)=>String(H).localeCompare(String(L),"es",{sensitivity:"base"}));return xQ(Z,$)},zZ=(J,X)=>{const Z=(BZ(J).stats||{})[X]||{wins:0,battles:0},$=Z.battles?Math.round(Z.wins/Z.battles*100):0;return{...Z,score:$}},AZ=(J,X=WJ)=>{const Y=BZ(J,X).stats||{};return[...E||[]].filter((Z)=>Z?.firebaseId).reduce((Z,$)=>{const H=Y[$.firebaseId]||{wins:0,battles:0};Z[$.firebaseId]=H.battles?Math.round(H.wins/H.battles*100):0;return Z},{})},v1=(J=[],X={})=>{for(let Y=0;Y<J.length-1;Y++)for(let Z=Y+1;Z<J.length;Z++){const $=tJ(J[Y],J[Z]);if(!tX(X,$))return[J[Y],J[Z]]}return null},TZ=(J,X,Y=null)=>{if(!X)return null;const Z=T1.includes(X.mode)?X.mode:"GENERAL",$=String(X.groupKey||"all").trim().toLowerCase()||"all",H=lX(E,Z,$),L=H.groupedIds||[],j=H.orderedIds||[],O=PQ(J,Y||CJ?.[DJ(J)]||{}),q=O?.directMatchups||{},F=O?.matchups||{},z=O?.victoryGraph||{},C=O?.stats||{},B=X.championId,V=X.challengerId,A=bQ(L,B,V),S=!!B&&!!V&&B!==V&&!!A&&!oX(F,B,V),b=L.length?aX(L,X.matchups||{},F):null,s=S?[B,V]:b,YJ=!b,m=bQ(L,s?.[0],s?.[1]);return{...X,mode:Z,groupKey:$,groupedIds:L,orderedIds:j,stats:C,directMatchups:q,matchups:F,victoryGraph:z,championId:s?s[0]:null,challengerId:s?s[1]:null,activeGroupKey:m?.key||null,activeGroupLabel:m?`${m.typeLabel}: ${m.label}`:"",isFinished:YJ}};d(()=>{if(!E.length)return;const J={},X=[];Object.entries(WJ||{}).forEach(([Y,Z])=>{const{arenaName:$}=uZ(Y),H=TZ($,Z,CJ?.[DJ($)]);if(!H)return;if(JSON.stringify(Z)===JSON.stringify(H))return;J[Y]=H;X.push(K.ref(`arenaBattleState/${Y}`).set(H).catch((j)=>console.error("No se pudo normalizar el estado del arena:",j)))});if(!Object.keys(J).length)return;bJ((Y)=>({...Y,...J}));Promise.all(X).catch(()=>{})},[WJ,CJ,E]);d(()=>{if(!E.length)return;const J={};Object.entries(WJ||{}).forEach(([Z,$])=>{const{arenaName:H}=uZ(Z),L=DJ(H);if(!L)return;if(!J[L])J[L]={};Object.entries($?.directMatchups||{}).forEach(([j,O])=>{const q=$Q(O);if(!q)return;J[L][j]={winnerId:q.winnerId,loserId:q.loserId,reason:"direct",playedAt:q.playedAt??Date.now()}})});const X=[],Y={};Object.entries(J).forEach(([Z,$])=>{const H=DJ(Z);if(!H||CJ?.[H])return;const L=PQ(Z,{directMatchups:$});if(!L)return;Y[H]=L;X.push(K.ref(`arenaGlobalState/${H}`).set(L).catch((j)=>console.error("No se pudo migrar arenaGlobalState:",j)))});if(!Object.keys(Y).length)return;mJ((Z)=>({...Z,...Y}));Promise.all(X).catch(()=>{})},[WJ,CJ,E]);const NZ=(J,X=M,Y=c)=>{const Z=[...E].filter((A)=>A?.firebaseId&&(A?.nombre||"").trim()).sort((A,S)=>(A.nombre||"").localeCompare(S.nombre||"","es",{sensitivity:"base"}));if(Z.length<2)return;const $=String(X||"GENERAL").trim().toUpperCase(),H=lX(Z,$,Y),L=H.groupedIds||[],j=H.orderedIds||[],O=DJ(J),q=PQ(J,CJ?.[O]||{}),F=q?.matchups||{},z=aX(L,{},F),C=z?bQ(L,z[0],z[1]):null,B={mode:$,groupKey:String(Y||"").trim().toLowerCase()||"all",groupedIds:L,orderedIds:j,stats:q?.stats||{},directMatchups:q?.directMatchups||{},matchups:F,victoryGraph:q?.victoryGraph||{},championId:z?z[0]:null,challengerId:z?z[1]:null,activeGroupKey:C?.key||null,activeGroupLabel:C?`${C.typeLabel}: ${C.label}`:"",isFinished:!z},V=EQ(J,X,Y);if(!V)return;bJ((A)=>({...A,[V]:B}));if(!CJ?.[O]){mJ((A)=>({...A,[O]:q}));K.ref(`arenaGlobalState/${O}`).set(q).catch((A)=>console.error("No se pudo guardar arenaGlobalState inicial:",A))}K.ref(`arenaBattleState/${V}`).set(B).catch((A)=>console.error("No se pudo guardar el estado del arena:",A))},l0=async(J,X,Y)=>{if(!J)return;try{await K.ref(`perfiles/${J}/puntuaciones/${X}`).set(Y)}catch(Z){console.error("No se pudo actualizar score del arena:",Z)}},MZ=(J,X,Y=M,Z=c)=>{const $=EQ(J,Y,Z),H=WJ[$];if(!H||H.isFinished)return;const L=DJ(J),j=PQ(J,CJ?.[L]||{}),O=Array.isArray(H.groupedIds)&&H.groupedIds.length?H.groupedIds:lX(E,H.mode||"GENERAL",H.groupKey||"all").groupedIds,{championId:q,challengerId:F}=H;if(X!==q&&X!==F)return;const z=X===q?F:q;if(!X||!z)return;if(oX(j?.matchups||{},X,z))return;const C=tJ(X,z),B={...j?.directMatchups||{},[C]:{winnerId:X,loserId:z,reason:"direct",playedAt:Date.now()}},V=xQ(B,SQ(E)),A=V.matchups,S=V.stats||{},b=bQ(O,X,z),YJ=((ZJ,e,jQ)=>{if(!e)return null;for(const oJ of ZJ){if(!oJ||oJ===e)continue;const Y1=tJ(e,oJ);if(!tX(jQ,Y1))return oJ}return null})(b?.ids||[],X,A),m=YJ?[X,YJ]:aX(O,H.matchups||{},A),QJ=bQ(O,m?.[0],m?.[1]),u={arenaName:L,orderedIds:SQ(E),directMatchups:V.directMatchups,matchups:A,victoryGraph:V.victoryGraph,stats:S},a={...H,groupedIds:O,directMatchups:u.directMatchups,stats:S,matchups:A,victoryGraph:V.victoryGraph,championId:m?m[0]:null,challengerId:m?m[1]:null,activeGroupKey:QJ?.key||null,activeGroupLabel:QJ?`${QJ.typeLabel}: ${QJ.label}`:"",isFinished:!m},qJ={...WJ||{},[$]:a},r=AZ(J,qJ);I((ZJ)=>ZJ.map((e)=>{if(!e?.firebaseId||!Object.prototype.hasOwnProperty.call(r,e.firebaseId))return e;const jQ=r[e.firebaseId];return{...e,puntuaciones:{...e.puntuaciones||{},[J]:jQ}}}));Object.entries(r).forEach(([ZJ,e])=>{l0(ZJ,J,e)});bJ((ZJ)=>({...ZJ,[$]:a}));mJ((ZJ)=>({...ZJ,[L]:u}));Promise.all([K.ref(`arenaGlobalState/${L}`).set(u),K.ref(`arenaBattleState/${$}`).set(a)]).catch((ZJ)=>console.error("No se pudo guardar avance de batallas:",ZJ))},t0=async()=>{if(!window.confirm("Esto va a poner TODAS las calificaciones en 0. ¿Continuar?"))return;try{await Promise.all((E||[]).map((X)=>{if(!X?.firebaseId)return Promise.resolve();return K.ref(`perfiles/${X.firebaseId}/puntuaciones`).set(vQ())}));I((X)=>X.map((Y)=>({...Y,puntuaciones:vQ()})));bJ({});mJ({});await K.ref("arenaBattleState").remove();await K.ref("arenaGlobalState").remove();alert("Calificaciones reiniciadas en 0 para todos los items.")}catch(X){console.error("No se pudieron resetear las calificaciones:",X);alert("No se pudo completar el reseteo.")}},o0=async(J,X=M,Y=c)=>{if(!J){alert("Seleccioná un item para resetear.");return}if(!window.confirm(`Esto va a poner en 0 el item "${J}" para todos los perfiles. ¿Continuar?`))return;try{const $={...WJ||{}},H=Object.keys($).filter((j)=>RZ(j,J));H.forEach((j)=>delete $[j]);await Promise.all(H.map((j)=>K.ref(`arenaBattleState/${j}`).remove()));bJ($);await Promise.all((E||[]).map((j)=>{if(!j?.firebaseId)return Promise.resolve();return K.ref(`perfiles/${j.firebaseId}/puntuaciones/${J}`).set(0)}));I((j)=>j.map((O)=>({...O,puntuaciones:{...O.puntuaciones||{},[J]:0}})));const L=EQ(J,X,Y);bJ((j)=>{if(!j?.[L])return j;const O={...j};delete O[L];return O});mJ((j)=>{const O=DJ(J);if(!j?.[O])return j;const q={...j};delete q[O];return q});await K.ref(`arenaBattleState/${L}`).remove();await K.ref(`arenaGlobalState/${DJ(J)}`).remove();alert(`Se reseteó "${J}" (${LQ(X)}) y se limpió su estado de batallas.`)}catch($){console.error("No se pudo resetear el item:",$);alert("No se pudo resetear ese item.")}},KZ=async(J,X,Y,Z=M,$=c)=>{const H=EQ(J,Z,$),L=WJ?.[H],j=DJ(J),O=PQ(J,CJ?.[j]||{});if(!L){alert("Esa arena no tiene estado cargado.");return}const q=O?.matchups||{},F=O?.directMatchups||{};if(!Object.keys(q).filter((V)=>!!q[V]).length){alert("No hay cruces jugados para resetear en esta arena.");return}const C=tJ(X,Y);if(!q[C]){alert("Ese cruce no existe o no fue jugado todavía.");return}if(!F[C]){alert("Ese cruce se resolvió por transitividad. Deshacé primero la batalla directa correspondiente.");return}if(!window.confirm("¿Seguro que querés deshacer esta batalla?"))return;try{const V={...F};delete V[C];const A=xQ(V,SQ(E)),S={arenaName:j,orderedIds:SQ(E),directMatchups:A.directMatchups,matchups:A.matchups,victoryGraph:A.victoryGraph,stats:A.stats},b={...L,directMatchups:S.directMatchups,matchups:S.matchups,victoryGraph:S.victoryGraph,stats:S.stats},s=TZ(J,b,S);if(!s){alert("No se pudo recomponer el estado del arena.");return}bJ((QJ)=>({...QJ,[H]:s}));mJ((QJ)=>({...QJ,[j]:S}));await Promise.all([K.ref(`arenaGlobalState/${j}`).set(S),K.ref(`arenaBattleState/${H}`).set(s)]);const YJ={...WJ||{},[H]:s},m=AZ(J,YJ);await Promise.all(Object.entries(m).map(async([QJ,u])=>{await K.ref(`perfiles/${QJ}/puntuaciones/${J}`).set(u)}));I((QJ)=>QJ.map((u)=>{if(!u?.firebaseId||!Object.prototype.hasOwnProperty.call(m,u.firebaseId))return u;const a=m[u.firebaseId];return{...u,puntuaciones:{...u.puntuaciones||{},[J]:a}}}));alert("Batalla reseteada correctamente.")}catch(V){console.error("No se pudo resetear la batalla:",V);alert("No se pudo resetear esa batalla.")}},a0=f(()=>{const J=E;if(D==="RANKING")return[...J].sort((X,Y)=>parseFloat(LJ(Y))-parseFloat(LJ(X)));if(D==="CATEGORIAS"&&XJ)return J.filter((X)=>_X(X).includes(XJ));return J},[E,D,XJ]),wZ=f(()=>{return new Set(kJ.map((J)=>String(J?.profileId||"").trim()).filter(Boolean))},[kJ]),TJ=f(()=>{const J=String(nQ||"").trim().toLowerCase(),X=(Z)=>{return[Z?.profesion,Z?.profesiones].flatMap((H)=>{if(Array.isArray(H))return H;if(typeof H==="string")return H.split(",");return[]}).map((H)=>String(H||"").trim()).filter(Boolean).join(" ")},Y=(Z)=>{if(!Z||typeof Z!=="object")return!1;return[String(Z.nombre||"").trim(),String(Z.nacionalidad||"").trim(),String(Z.ciudad||"").trim(),X(Z),String(Z.fechaNacimiento||"").trim(),String(Z.estaturaCm||"").trim()].some(Boolean)||Array.isArray(Z.fotos)&&Z.fotos.some(Boolean)};return[...E||[]].filter((Z)=>{if(!Y(Z))return!1;if(nJ&&C1(Z))return!1;if(NQ){const H=String(Z?.firebaseId||Z?.id||"").trim();if(!H||!wZ.has(H))return!1}if(!J)return!0;return[String(Z.nombre||"").trim(),String(Z.nacionalidad||"").trim(),X(Z)].join(" ").toLowerCase().includes(J)}).sort((Z,$)=>String(Z?.nombre||"").localeCompare(String($?.nombre||""),"es",{sensitivity:"base"}))},[E,nQ,nJ,NQ,wZ]),y=f(()=>TJ.find((J)=>J?.firebaseId===oQ)||null,[TJ,oQ]),rX=f(()=>TJ.slice(0,zY),[TJ,zY]),FX=rX.length<TJ.length;d(()=>{const J=()=>MQ("");document.addEventListener("click",J);return()=>document.removeEventListener("click",J)},[]);d(()=>{kX(12)},[nQ,nJ,NQ,D]);const r0=f(()=>{if(!M)return[];return CZ(E,M)},[E,M]),UX=M&&M!=="GENERAL",GZ=(J,X)=>{if(X==="promedio")return Number(LJ(J))||0;if(X==="nombre")return(J.nombre||"").toLowerCase();if(X==="nacionalidad")return(J.nacionalidad||"").toLowerCase();if(X==="edad"){const Y=hJ(J.fechaNacimiento);return typeof Y==="number"?Y:-1}if(X==="Rostro")return HX(J)||0;if(X==="Cuerpo")return jX(J)||0;if(X==="Actitud")return qX(J)||0;return Number(J.puntuaciones?.[X]||0)},e0=(J)=>{if(jJ==="promedio")return LJ(J);if(jJ==="Rostro")return HX(J).toFixed(0);if(jJ==="Cuerpo")return jX(J).toFixed(0);if(jJ==="Actitud")return qX(J).toFixed(0);if(QQ.includes(jJ))return Number(J.puntuaciones?.[jJ]||0).toFixed(0);return LJ(J)},HQ=(J,X="asc")=>{if(jJ===J){zX((Y)=>Y==="asc"?"desc":"asc");return}DY(J);zX(X)},J1=(J,X)=>{const Y=iJ[X]||[],Z=new Set,$=new Set,H=Object.entries(WJ||{});Y.forEach((O)=>{const q=CJ?.[DJ(O)]?.matchups||{};Object.values(q).forEach((F)=>{if(!F||typeof F!=="object")return;if(F.winnerId===J&&F.loserId)Z.add(F.loserId);if(F.loserId===J&&F.winnerId)$.add(F.winnerId)})});const L=new Map((E||[]).filter((O)=>O?.firebaseId).map((O)=>[O.firebaseId,O.nombre||"Sin nombre"])),j=(O)=>[...O].map((q)=>L.get(q)).filter(Boolean).sort((q,F)=>q.localeCompare(F,"es",{sensitivity:"base"}));return{wins:j(Z),losses:j($)}},eX=(J,X)=>{const Y=String(X||"").trim(),Z=String(J||"").trim();if(!Y||!Z)return{arenaName:Y,wins:[],losses:[]};const $=CJ?.[DJ(Y)]?.matchups||{},H=new Map((E||[]).filter((O)=>O?.firebaseId).map((O)=>[O.firebaseId,O.nombre||"Sin nombre"])),L=([O,q])=>{if(!q||typeof q!=="object")return null;const F=String(q.winnerId||"").trim(),z=String(q.loserId||"").trim();if(!F||!z)return null;const C=F===Z;if(!C&&z!==Z)return null;const V=C?z:F;return{pairKey:O,arenaName:Y,profileId:Z,opponentId:V,opponentName:H.get(V)||"Sin nombre",winnerId:F,loserId:z}},j=Object.entries($).map(L).filter(Boolean).sort((O,q)=>O.opponentName.localeCompare(q.opponentName,"es",{sensitivity:"base"}));return{arenaName:Y,wins:j.filter((O)=>O.winnerId===Z),losses:j.filter((O)=>O.loserId===Z)}},Q1=(J,X)=>{const Y=eX(J,X),Z=Y.wins.length,$=Y.losses.length,H=Z+$,L=H?Z/H*100:0;return{wins:Z,losses:$,total:H,winRate:L}},JY=[...a0].sort((J,X)=>{const Y=GZ(J,jJ),Z=GZ(X,jJ);let $=0;if(typeof Y==="string"||typeof Z==="string")$=String(Y).localeCompare(String(Z),"es",{sensitivity:"base"});else $=Y-Z;if($===0)return(J.nombre||"").localeCompare(X.nombre||"","es",{sensitivity:"base"});return fJ==="asc"?$:-$}),QY=!AJ,X1=f(()=>AX?JY:JY.slice(0,10),[JY,AX]);return Q("div",{className:"app-space-theme flex h-screen w-screen overflow-hidden bg-[#020617] stone-wall-surface relative",children:[AJ&&Q("aside",{className:"hud-frame hud-frame--panel w-64 shrink-0 theme-surface-card stone-wall-surface border-r theme-border-secondary flex flex-col p-6 z-20 shadow-xl overflow-y-auto relative",children:[Q("div",{className:"corner-ember-glow corner-ember-glow--left corner-ember-glow--top","aria-hidden":"true"},void 0,!1,void 0,this),Q("div",{className:"mb-12 text-center flex-shrink-0",children:[Q("h1",{className:"neon-sign neon-sign--cyan text-5xl font-black text-[var(--metal-gold)] italic tracking-tighter leading-none",children:"G2"},void 0,!1,void 0,this),Q("p",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mt-2",children:"Elite Database"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("nav",{className:"flex-1 space-y-2 mb-8",children:[{id:"EXPLORAR",icon:"layout-grid",label:"Explorar"},{id:"RANKING",icon:"trending-up",label:"Ranking"},{id:"BATALLAS",icon:"swords",label:"Batallas"},{id:"GALERIA",icon:"images",label:"Galería"},{id:"CAMPEONAS",icon:"crown",label:"Campeonas"},{id:"anonimo",icon:"user-round-x",label:"ánonimo"},{id:"TALLER",icon:"hammer",label:"Taller"}].map((J)=>Q("button",{onClick:()=>{T(J.id);RQ(null);zQ(null);JJ(null);dJ("")},className:`btn-metal sidebar-nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-[1.6rem] text-xs transition-all ${D===J.id?"is-active text-[#ecfeff]":"text-slate-900"}`,children:[Q(l,{name:J.icon,size:18},void 0,!1,void 0,this),J.label]},J.id,!0,void 0,this))},void 0,!1,void 0,this),Q("button",{onClick:()=>ZZ(),className:"btn-metal btn-metal--gold py-5 rounded-[2.2rem] text-[11px] flex items-center justify-center gap-2 flex-shrink-0",children:[Q(l,{name:"plus",size:16},void 0,!1,void 0,this)," Nuevo Perfil"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("main",{className:"flex-1 min-w-0 w-full flex flex-col overflow-hidden bg-[#020617] stone-wall-surface relative",children:[Q("button",{onClick:()=>eZ((J)=>!J),className:"sidebar-screen-toggle btn-metal btn-metal--silver rounded-full text-slate-900","aria-label":AJ?"Replegar menú lateral":"Desplegar menú lateral",title:AJ?"Replegar menú lateral":"Desplegar menú lateral",children:Q(l,{name:AJ?"panel-left-close":"panel-left-open",size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:`hud-section flex-1 overflow-y-auto relative z-10 stone-wall-surface ${AJ?"p-6 md:p-10 lg:p-12":"p-4 md:p-8 lg:p-10"}`,children:[Q("div",{className:"corner-ember-glow corner-ember-glow--left corner-ember-glow--top","aria-hidden":"true"},void 0,!1,void 0,this),Q("div",{className:"corner-ember-glow corner-ember-glow--right corner-ember-glow--top","aria-hidden":"true"},void 0,!1,void 0,this),y&&Q("div",{className:`fixed inset-0 z-[140] flex items-center justify-center bg-slate-950/75 backdrop-blur-sm px-4 py-8 ${AJ?"lg:pl-[19rem] lg:justify-end":""}`,onClick:()=>dJ(""),role:"presentation",children:Q("section",{className:"taller-detail-panel rounded-[2rem] p-8 md:p-10 relative overflow-hidden w-full max-w-5xl max-h-[90vh] overflow-y-auto",onClick:(J)=>J.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Ficha del personaje",children:[Q("button",{type:"button",onClick:()=>dJ(""),className:"absolute top-4 right-4 w-10 h-10 rounded-full border border-cyan-200/35 bg-slate-900/80 text-slate-100 flex items-center justify-center hover:bg-slate-800/90 transition","aria-label":"Cerrar ficha",children:Q(l,{name:"x",size:18},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"grid grid-cols-1 lg:grid-cols-[minmax(260px,320px),1fr] gap-8 items-start",children:[Q("div",{className:"taller-detail-avatar rounded-[1.8rem] overflow-hidden border border-cyan-200/35",children:Q("img",{src:y.fotos?.[0]||"https://via.placeholder.com/500x700",alt:y.nombre||"Perfil seleccionado",className:"w-full h-full object-cover"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"space-y-6",children:[Q("div",{children:[Q("p",{className:"text-[10px] uppercase tracking-[0.35em] text-cyan-200/90 font-black",children:"Ficha del personaje"},void 0,!1,void 0,this),Q("h3",{className:"taller-detail-title text-3xl md:text-4xl font-black uppercase mt-2",children:y.nombre||"Sin nombre"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!y?.isAnonymousGallery&&Q("div",{className:"grid grid-cols-1 gap-4",children:[Q("article",{className:"taller-data-chip",children:[Q("span",{children:"Profesión"},void 0,!1,void 0,this),Q("strong",{children:y.profesion||"No definida"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("article",{className:"taller-data-chip",children:[Q("span",{children:"Nacionalidad - Ciudad"},void 0,!1,void 0,this),Q("strong",{children:`${y.nacionalidad||"No definida"} - ${y.ciudad||"No definida"}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("article",{className:"taller-data-chip",children:[Q("span",{children:"Fecha de nacimiento - Edad"},void 0,!1,void 0,this),Q("strong",{children:`${y.fechaNacimiento||"No informado"} - ${hJ(y.fechaNacimiento)} años`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("article",{className:"taller-data-chip",children:[Q("span",{children:"Estatura"},void 0,!1,void 0,this),Q("strong",{children:y.estaturaCm?`${y.estaturaCm} cm`:"No informada"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"pt-2",children:Q("div",{className:"grid grid-cols-2 sm:grid-cols-[1fr,1fr,auto,auto] gap-3 items-center",children:[!y?.isAnonymousGallery&&Q("button",{type:"button",onClick:()=>{fQ({isOpen:!0,profile:y})},className:"btn-metal py-3 rounded-xl text-[11px] font-black tracking-wide uppercase",children:"Puntajes"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>{const J=R.current,X=J&&!J.closed?J:window.open("","_blank");R.current=X;RX({targetWindow:X,profileName:y?.nombre||"",profession:y?.profesion||"",photos:[...(y?.galeria?.fotos||[]).map((Y,Z)=>({...i(Y,"image"),sourceTag:"fotos",sourceIndex:Z})),...(y?.galeria?.videos||[]).map((Y,Z)=>({...i(Y,"video"),sourceTag:"videos",sourceIndex:Z}))],editingId:y?.firebaseId||y?.id||"",battlePhotoPrefs:y?.batallaFotosPreferidas||y?.galeria?.battlePhotoPreferences||{},profilePhotoUrl:y?.fotos?.[0]||""});XZ(y?.firebaseId||y?.id||"");X?.focus()},className:"btn-metal py-3 rounded-xl text-[11px] font-black tracking-wide uppercase",children:"Ver Galería"},void 0,!1,void 0,this),!y?.isAnonymousGallery&&Q(PJ,{children:[Q("button",{type:"button",onClick:()=>{dJ("");ZX(y)},className:"w-10 h-10 rounded-md bg-yellow-400 text-slate-950 text-base font-black flex items-center justify-center leading-none shadow-md hover:brightness-110 transition","aria-label":"Editar ficha completa",title:"Editar ficha completa",children:"✏️"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>nX(y),className:"w-10 h-10 rounded-md bg-red-500 text-white text-base font-black flex items-center justify-center leading-none shadow-md hover:brightness-110 transition","aria-label":"Eliminar ficha",title:"Eliminar ficha",children:"\uD83D\uDDD1️"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),D==="TALLER"&&Q("div",{className:"space-y-8 animate-in fade-in duration-500",children:[Q("div",{className:"space-y-2",children:Q("h2",{className:"neon-sign neon-sign--cyan text-4xl font-black italic text-white uppercase tracking-tighter",children:"Taller"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"max-w-2xl",children:Q("input",{id:"tallerSearchInput",type:"text",value:nQ,onChange:(J)=>SY(J.target.value),placeholder:"Ej: Argentina, Modelo, Lucía...","aria-label":"Buscar perfiles del taller",className:"w-full rounded-2xl border border-cyan-200/30 bg-slate-950/70 px-5 py-3 text-sm text-slate-100 outline-none transition-all focus:border-cyan-300/70 focus:shadow-[0_0_20px_rgba(34,211,238,0.25)]"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-3",children:[Q("button",{type:"button",onClick:()=>j0((J)=>!J),className:`btn-metal py-3 px-5 rounded-xl text-[11px] font-black tracking-wide uppercase transition-all ${nJ?"btn-metal--danger":""}`,children:["Fotos incompletas ",nJ?"(Activo)":""]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>q0((J)=>!J),className:`btn-metal py-3 px-5 rounded-xl text-[11px] font-black tracking-wide uppercase transition-all ${NQ?"btn-metal--danger":""}`,children:["Fotos Rotas ",NQ?"(Activo)":""]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10",children:rX.map((J)=>{const X=HJ(J.profesion),Y=oQ&&oQ===J.firebaseId,Z=R1(J),$=_0===(J.firebaseId||J.nombre);return Q("button",{type:"button",onClick:()=>{if(XX.current){XX.current=!1;return}MQ("");dJ("");ZX(J)},onContextMenu:(H)=>{if(!nJ||!Z.length)return;H.preventDefault();H.stopPropagation();MQ((L)=>L===(J.firebaseId||J.nombre)?"":J.firebaseId||J.nombre)},onTouchStart:()=>{if(!nJ||!Z.length)return;XX.current=!1;clearTimeout(QX.current);QX.current=setTimeout(()=>{XX.current=!0;MQ(J.firebaseId||J.nombre)},550)},onTouchEnd:()=>{clearTimeout(QX.current)},onTouchMove:()=>{clearTimeout(QX.current)},className:`profile-card rounded-2xl p-4 relative text-left transition-all ${Y?"taller-card--selected":""}`,children:[Q("div",{className:"w-full aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-slate-900/70",children:Q("img",{src:J.fotos?.[0]||"https://via.placeholder.com/400x500",alt:J.nombre||"Personaje",className:"w-full h-full object-cover",loading:"lazy"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("h3",{className:"text-lg font-black text-white uppercase tracking-wide truncate",children:J.nombre||"Sin nombre"},void 0,!1,void 0,this),Q("p",{className:"text-xs text-slate-300 truncate",children:J.nacionalidad||"Nacionalidad no definida"},void 0,!1,void 0,this),Q("p",{className:"text-[10px] uppercase font-bold tracking-widest mt-2 truncate",style:{color:X.color,textShadow:`0 0 12px ${X.sombra}`},children:J.profesion||"Profesión no definida"},void 0,!1,void 0,this),$&&Q("button",{type:"button",className:"absolute left-4 right-4 bottom-4 z-20 rounded-xl border border-red-300/55 bg-slate-950/95 px-3 py-3 text-[11px] text-slate-100 text-left shadow-[0_0_24px_rgba(248,113,113,0.45)] transition hover:border-cyan-300/75 hover:text-cyan-100",onClick:(H)=>{H.preventDefault();H.stopPropagation();W0(J)},role:"tooltip",title:"Ir a la galería de este personaje",children:[Q("p",{className:"font-black uppercase tracking-wider text-red-200 mb-2",children:"Faltan fotos:"},void 0,!1,void 0,this),Q("ul",{className:"space-y-1 mb-2",children:Z.map((H)=>Q("li",{className:"leading-tight",children:["• ",H]},H,!0,void 0,this))},void 0,!1,void 0,this),Q("span",{className:"inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-200",children:"Ir a galería ↗"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},J.firebaseId||J.nombre,!0,void 0,this)})},void 0,!1,void 0,this),FX&&Q("div",{ref:cY,className:"h-1 w-full","aria-hidden":"true"},void 0,!1,void 0,this),FX&&Q("div",{className:"flex justify-center",children:Q("button",{type:"button",onClick:()=>kX((J)=>Math.min(J+12,TJ.length)),className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-6 py-3 rounded-full text-[10px] text-slate-900",children:["Cargar más (",rX.length,"/",TJ.length,")"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),!TJ.length&&Q("div",{className:"rounded-2xl border border-slate-500/30 bg-slate-900/50 px-6 py-8 text-center text-sm text-slate-300",children:"No hay personajes que coincidan con la búsqueda."},void 0,!1,void 0,this),Q(z1,{isOpen:Y0,profile:y,onClose:()=>Z0(!1)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),D==="CAMPEONAS"&&!XJ&&(()=>{const J=[{id:"18-23",min:18,max:23},{id:"24-29",min:24,max:29},{id:"30-35",min:30,max:35},{id:"36-41",min:36,max:41},{id:"42-60",min:42,max:60}],X=(E||[]).filter(Boolean),Y=(q=[])=>[...q].sort((F,z)=>(Number(LJ(z))||0)-(Number(LJ(F))||0)).slice(0,3),Z={nacionalidades:[],profesiones:[],edades:[],items:[],caracteristicas:[]},$=Y(X);[...new Set(X.map((q)=>String(q.nacionalidad||"").trim()).filter(Boolean))].forEach((q)=>Z.nacionalidades.push({id:`nac-${q}`,title:`Nacionalidad · ${q}`,top:Y(X.filter((F)=>String(F.nacionalidad||"").trim()===q))}));J.forEach((q)=>Z.edades.push({id:`edad-${q.id}`,title:`Edad · ${q.id}`,top:Y(X.filter((F)=>{const z=hJ(F.fechaNacimiento);return typeof z==="number"&&z>=q.min&&z<=q.max}))}));[...new Set(X.map((q)=>String(q.profesion||"").trim()).filter(Boolean))].forEach((q)=>Z.profesiones.push({id:`prof-${q}`,title:`Profesión · ${q}`,top:Y(X.filter((F)=>String(F.profesion||"").trim()===q))}));QQ.forEach((q)=>{const F=[...X].sort((z,C)=>(Number(C?.puntuaciones?.[q])||0)-(Number(z?.puntuaciones?.[q])||0)).slice(0,3);Z.items.push({id:`item-${q}`,title:`Ítem · ${q}`,top:F,scoreType:"item",scoreKey:q})});[["Cuerpo",["Cuerpo","Cola","Pechos","Cintura","Piernas","Estatura"]],["Rostro",["Rostro","Ojos","Boca","Cabello"]],["Actitud",["Sensualidad","Carisma","Elegancia","Dulzura","Talento"]]].forEach(([q,F])=>{const z=[...X].map((C)=>({...C,__metaScore:F.reduce((B,V)=>B+(Number(C?.puntuaciones?.[V])||0),0)/F.length})).sort((C,B)=>(B.__metaScore||0)-(C.__metaScore||0)).slice(0,3);Z.caracteristicas.push({id:`meta-${q}`,title:q,top:z,scoreType:"meta"})});const j=[{id:"general",title:"Podio de puntuación general",cards:[{id:"general-score",title:"General · Ranking total",top:$}]},{id:"nacionalidades",title:"Podios por nacionalidades",cards:Z.nacionalidades},{id:"profesiones",title:"Podios por profesión",cards:Z.profesiones},{id:"edades",title:"Podios por edades",cards:Z.edades},{id:"items",title:"Podios por ítem",cards:Z.items},{id:"caracteristicas",title:"Podios por características",cards:Z.caracteristicas}],O=(q,F=!1)=>Q("article",{className:`champion-podium-card champion-podium-card--${F?"general":"section"} rounded-2xl p-5`,children:[Q("h3",{className:`champion-podium-title text-xs font-black uppercase tracking-[0.18em] mb-3 ${F?"text-[var(--metal-gold)]":"text-cyan-100"}`,children:q.title},void 0,!1,void 0,this),Q("ol",{className:"space-y-2",children:q.top.length?q.top.map((z,C)=>{const B=_J(String(z?.fotos?.[0]||"").trim(),""),V=C===0;return Q("li",{className:`champion-rank-row champion-rank-row--${C+1} flex items-center justify-between gap-3 text-xs`,children:[Q("div",{className:"flex items-center gap-2 min-w-0",children:[V&&B&&Q("div",{className:"flex flex-col items-center shrink-0 -mt-1",title:`Campeona de ${q.title}`,children:[Q("span",{className:"text-[12px] leading-none -mb-0.5","aria-hidden":"true",children:"\uD83D\uDC51"},void 0,!1,void 0,this),Q("img",{src:B,alt:`Miniatura de ${z.nombre||"Campeona"}`,className:`champion-avatar w-8 h-8 rounded-full object-cover border ${F?"champion-avatar--general":"champion-avatar--section"}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("span",{className:`champion-rank-name font-black truncate ${V?"champion-rank-name--winner":"text-slate-100"}`,children:[C+1,". ",z.nombre||"Sin nombre"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("span",{className:`champion-score font-black shrink-0 ${C===0?"champion-score--winner":""}`,children:LJ(z)},void 0,!1,void 0,this)]},`${q.id}-${z.firebaseId||z.nombre||C}`,!0,void 0,this)}):Q("li",{className:"text-xs text-slate-400",children:"Sin datos suficientes."},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},q.id,!0,void 0,this);return Q("div",{className:"space-y-8 animate-in fade-in duration-500",children:[Q("div",{children:[Q("h2",{className:"neon-sign neon-sign--magenta text-4xl font-black italic text-white uppercase tracking-tighter",children:"Campeonas"},void 0,!1,void 0,this),Q("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:"Podios organizados por secciones"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-7",children:j.map((q)=>Q("section",{className:"space-y-3",children:[Q("h3",{className:"text-[11px] font-black uppercase tracking-[0.2em] text-cyan-100/85",children:q.title},void 0,!1,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6",children:q.cards.map((F)=>O(F,q.id==="general"))},void 0,!1,void 0,this)]},q.id,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)})(),D==="anonimo"&&!XJ&&Q("div",{className:"space-y-8 animate-in fade-in duration-500",children:Q("section",{className:"hud-frame hud-frame--panel profession-banner p-8 rounded-2xl gothic-frame gothic-frame--ornate gothic-frame--grand",children:[Q("p",{className:"text-[11px] uppercase tracking-[0.35em] text-cyan-200/80 font-black",children:"Modo"},void 0,!1,void 0,this),Q("h2",{className:"neon-sign neon-sign--magenta font-title text-5xl md:text-6xl font-black italic text-white tracking-[0.08em] leading-none mt-3",children:"ánonimo"},void 0,!1,void 0,this),Q("p",{className:"text-sm md:text-base text-slate-200/85 mt-4 max-w-3xl",children:"Este panel reutiliza el estilo visual del sistema y no abre la ficha de personaje para mantener una navegación discreta."},void 0,!1,void 0,this),Q("div",{className:"mt-8 space-y-5",children:[Q("div",{className:"grid gap-3 sm:grid-cols-3",children:[{key:"imagen",label:"Imagen"},{key:"escena",label:"Escena"},{key:"audio",label:"Audio"}].map((J)=>Q("button",{type:"button",onClick:()=>{Q0(J.key);pQ("");wJ("")},className:`px-5 py-3 rounded-xl font-black uppercase tracking-[0.14em] transition-all border ${sJ===J.key?"text-cyan-100 border-cyan-300/50 bg-cyan-500/35":"text-slate-200 border-slate-500/50 bg-slate-700/30 hover:bg-slate-600/35"}`,children:J.label},J.key,!1,void 0,this))},void 0,!1,void 0,this),(sJ==="imagen"||sJ==="escena")&&Q("div",{className:"grid gap-4 md:grid-cols-2",children:[Q("select",{className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:SX,onChange:(J)=>{xY(J.target.value);pQ("")},children:[Q("option",{value:"url",children:"URL"},void 0,!1,void 0,this),Q("option",{value:"file",children:"Archivo de dispositivo"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("select",{className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:gY,onChange:(J)=>J0(J.target.value),children:$J.map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))},void 0,!1,void 0,this),SX==="url"?Q("input",{placeholder:"URL",className:"md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:PY,onChange:(J)=>bY(J.target.value)},void 0,!1,void 0,this):Q("input",{type:"file",accept:sJ==="imagen"?"image/*,.gif":"image/*,video/*,.gif",className:"md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",onChange:(J)=>IY(J.target.files?.[0]||null)},void 0,!1,void 0,this),Q("input",{placeholder:"Autor (opcional)",className:"md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:hY,onChange:(J)=>yY(J.target.value)},void 0,!1,void 0,this),Q("button",{type:"button",onClick:async()=>{await U0(sJ==="escena"?"videos":"fotos")},className:"md:col-span-2 px-5 py-3 rounded-xl font-black uppercase tracking-[0.14em] text-cyan-100 border border-cyan-300/50 bg-cyan-500/20 hover:bg-cyan-500/35 transition-all",children:["Guardar ",sJ]},void 0,!0,void 0,this),mY&&Q("p",{className:"md:col-span-2 text-xs font-black uppercase tracking-[0.12em] text-rose-300",children:mY},void 0,!1,void 0,this)]},void 0,!0,void 0,this),sJ==="audio"&&Q("div",{className:"border-t border-cyan-300/25 pt-4 mt-2 space-y-3",children:[Q("p",{className:"text-[11px] uppercase tracking-[0.25em] text-cyan-200/80 font-black",children:"Audio para botón \uD83C\uDFB5"},void 0,!1,void 0,this),Q("input",{placeholder:"Nombre",className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold w-full",value:sY,onChange:(J)=>dY(J.target.value)},void 0,!1,void 0,this),Q("select",{className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold w-full",value:iQ,onChange:(J)=>nY(J.target.value),children:[Q("option",{value:"url",children:"URL"},void 0,!1,void 0,this),Q("option",{value:"file",children:"Archivo de dispositivo"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),iQ==="url"?Q("input",{placeholder:"URL",className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold w-full",value:pY,onChange:(J)=>iY(J.target.value)},void 0,!1,void 0,this):Q("input",{type:"file",accept:"audio/*",className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold w-full",onChange:(J)=>tY(J.target.files?.[0]||null)},void 0,!1,void 0,this),Q("button",{type:"button",onClick:V0,className:"px-5 py-3 rounded-xl font-black uppercase tracking-[0.14em] text-cyan-100 border border-cyan-300/50 bg-cyan-500/20 hover:bg-cyan-500/35 transition-all",children:"Guardar audio en Firebase"},void 0,!1,void 0,this),Q("div",{className:"space-y-2 pt-2",children:[Q("p",{className:"text-[11px] uppercase tracking-[0.25em] text-cyan-200/80 font-black",children:"Audios guardados"},void 0,!1,void 0,this),gJ.length?Q("ul",{className:"space-y-2",children:gJ.map((J,X)=>Q("li",{className:"flex items-center justify-between gap-3 rounded-xl border border-slate-500/45 bg-slate-900/55 px-3 py-2",children:[Q("span",{className:"text-sm text-slate-100 font-bold truncate",children:J.nombre},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>D0(X),className:"shrink-0 w-8 h-8 rounded-full border border-rose-300/55 text-rose-200 hover:text-white hover:bg-rose-500/35 transition-all font-black text-lg leading-none","aria-label":`Eliminar audio ${J.nombre}`,title:`Eliminar ${J.nombre}`,children:"×"},void 0,!1,void 0,this)]},`${J.url}-${J.nombre}-${X}`,!0,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"text-xs text-slate-300/80 font-semibold",children:"No hay audios guardados todavía."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),oY?Q("p",{className:"text-xs font-black uppercase tracking-[0.12em] text-rose-300",children:oY},void 0,!1,void 0,this):null]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),D==="EXPLORAR"&&!XJ&&Q("div",{className:"space-y-10 animate-in fade-in duration-500",children:[Q("div",{children:[Q("h2",{className:"neon-sign neon-sign--cyan text-4xl font-black italic text-white uppercase tracking-tighter",children:"Explorar"},void 0,!1,void 0,this),Q("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:"Organización automática por profesión"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:[...new Set((E||[]).map((J)=>String(J?.profesion||"").trim()).filter(Boolean))].map((J)=>{const X=(E||[]).filter((Z)=>String(Z?.profesion||"").trim()===J).length,Y=IQ(J);return Q("div",{onClick:()=>RQ(J),className:"profession-folder-card rounded-2xl p-8 text-center cursor-pointer transition-all group relative overflow-hidden active:scale-95",style:{"--folder-color":Y.baseColor,"--folder-glow":Y.glowColor},children:[Q("div",{className:"profession-folder-card__icon w-24 h-24 rounded-[2rem] flex items-center justify-center text-5xl mx-auto mb-6",children:K1(J)},void 0,!1,void 0,this),Q("h3",{className:"text-2xl font-black text-white mb-2 truncate uppercase tracking-tighter italic",children:J},void 0,!1,void 0,this),Q("div",{className:"inline-flex items-center gap-2 px-5 py-2 rounded-full border",style:{borderColor:"color-mix(in srgb, var(--folder-color) 65%, rgba(2,6,23,0.8) 35%)",background:"color-mix(in srgb, var(--folder-color) 14%, rgba(2,6,23,0.68) 86%)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.16), 0 0 14px color-mix(in srgb, var(--folder-glow) 35%, transparent)"},children:Q("span",{className:"text-[10px] font-black uppercase text-[var(--metal-gold)] tracking-widest",children:[X," ",X===1?"Perfil":"Perfiles"]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},J,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),XJ&&Q("div",{className:"space-y-8 animate-in slide-in-from-bottom-4 duration-500",children:[Q("div",{className:"hud-frame hud-frame--panel profession-banner flex items-center justify-between p-6 rounded-2xl gothic-frame gothic-frame--ornate gothic-frame--grand",style:{"--banner-color":D==="CATEGORIAS"?"rgba(148, 163, 184, 0.8)":IQ(XJ).baseColor},children:[Q("div",{className:"flex items-center gap-3",children:[Q("button",{onClick:()=>RQ(null),className:"group flex items-center","aria-label":"Volver",title:"Volver",children:Q("div",{className:"back-btn-silver p-2 rounded-xl text-slate-400 group-hover:text-slate-200 transition-all",children:Q("i",{"data-lucide":"arrow-left",className:"w-4 h-4"},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("button",{onClick:()=>ZZ(D==="CATEGORIAS"?"":XJ),className:"w-9 h-9 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-black text-xl leading-none flex items-center justify-center shadow-[0_0_14px_rgba(16,185,129,0.45)] transition-all","aria-label":"Agregar nuevo perfil",title:"Agregar nuevo perfil",children:"+"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("h2",{className:"neon-sign neon-sign--magenta font-title text-6xl font-black italic text-white tracking-[0.08em] leading-none",children:D==="CATEGORIAS"?p.find((J)=>J.firebaseId===XJ)?.label||"Archivo del Reino":XJ},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10",children:(E||[]).filter((J)=>{if(!J)return!1;if(D==="CATEGORIAS")return _X(J).includes(XJ);return String(J.profesion||"").trim().toLowerCase()===String(XJ).trim().toLowerCase()}).map((J)=>{const X=Number(typeof LJ==="function"?LJ(J):0)||0,Y=X>=95?"card-score-badge--gold":X>=86?"card-score-badge--diamond":X>=75?"card-score-badge--fire":"",Z=HJ(J.profesion);return Q("div",{onClick:()=>{DQ(null);SY("");dJ(J.firebaseId||"")},onContextMenu:($)=>f0($,J),className:"profile-card group relative rounded-2xl overflow-hidden cursor-pointer",style:{"--card-neon-color":Z.color,"--card-neon-glow":Z.sombra},children:Q("div",{className:"aspect-[4/5] bg-slate-950 relative overflow-hidden",children:[Q("img",{src:_J(J.fotos&&J.fotos.length>0?J.fotos[0]:"","https://via.placeholder.com/400x500"),className:"w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100",onError:xJ},void 0,!1,void 0,this),Q("div",{className:"absolute top-3 left-3 z-20",children:[Q("button",{type:"button",onClick:($)=>{$.stopPropagation();mQ("");CQ(J);DQ((H)=>H===J.firebaseId?null:J.firebaseId)},className:"card-menu-btn rounded-full bg-slate-900/88 backdrop-blur-md border border-white/10 text-slate-200 hover:text-white hover:border-[var(--metal-gold)] transition-all flex items-center justify-center","aria-label":"Abrir menú contextual del perfil",children:Q(l,{name:"more-vertical",size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),iZ===J.firebaseId&&Q("div",{className:"absolute top-12 left-0 min-w-[170px] rounded-xl border theme-border-secondary bg-slate-950/95 shadow-2xl p-2 space-y-1",onClick:($)=>$.stopPropagation(),children:[Q("button",{type:"button",className:"w-full text-left px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.12em] text-slate-200 hover:bg-slate-800 transition-all",onClick:()=>{DQ(null);ZX(J)},children:"Editar"},void 0,!1,void 0,this),Q("button",{type:"button",className:"w-full text-left px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.12em] text-red-300 hover:bg-red-500/20 transition-all",onClick:()=>{nX(J);DQ(null)},children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:($)=>{$.stopPropagation();fQ({isOpen:!0,profile:J})},className:`card-score-badge ${Y} absolute top-2 right-2 w-14 h-14 backdrop-blur-md rounded-full flex flex-col items-center justify-center border`,title:`Puntaje de ${J.nombre}`,children:[X>=75&&X<=85&&Q("span",{className:"card-score-badge__fire-emoji","aria-hidden":"true",children:"\uD83D\uDD25"},void 0,!1,void 0,this),Q("span",{className:"text-[9px] font-black text-[var(--metal-gold)] leading-none",children:"G2"},void 0,!1,void 0,this),Q("span",{className:"card-score-badge__value text-lg font-black",children:typeof LJ==="function"?LJ(J):"8.5"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"absolute bottom-4 left-4 right-4",children:Q("div",{className:"text-bubble card-footer-profession w-full backdrop-blur-md p-4 rounded-2xl border",children:[Q("h3",{className:"text-lg font-black text-white italic tracking-tighter leading-none flex items-center gap-2",children:[J.nombre,Q("span",{className:"text-[var(--metal-gold)] text-sm not-italic",children:["(",typeof hJ==="function"?hJ(J.fechaNacimiento):"??",")"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex justify-between items-center mt-1",children:[Q("span",{className:"text-[var(--metal-gold)] text-[7px] font-black uppercase tracking-widest",children:J.profesion},void 0,!1,void 0,this),Q("p",{className:"text-[7px] font-bold text-slate-400 uppercase",children:J.nacionalidad},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},J.firebaseId||Math.random(),!1,void 0,this)})},void 0,!1,void 0,this),BX&&RJ&&Q("div",{ref:N,className:"fixed z-[120] min-w-[11rem] rounded-xl border border-cyan-400/40 bg-slate-950/95 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.55)] p-2",style:{top:`${VY.y}px`,left:`${VY.x}px`},children:[Q("button",{type:"button",onClick:c0,className:"w-full text-left px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider text-cyan-200 hover:bg-cyan-500/20 transition-colors",children:"Editar"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:s0,className:"w-full text-left px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider text-rose-300 hover:bg-rose-500/20 transition-colors",children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),D==="GALERIA"&&!XJ&&Q("div",{className:"space-y-10 animate-in fade-in duration-500",children:[Q("div",{className:"flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6",children:[Q("div",{children:[Q("h2",{className:"neon-sign neon-sign--magenta text-4xl font-black italic text-white uppercase tracking-tighter",children:"Galería"},void 0,!1,void 0,this),Q("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:`Vista por ${OX} · ${v0}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:[j1.map((J)=>Q("button",{type:"button",onClick:()=>aZ(J),className:`btn-metal px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all ${h===J?"btn-metal--gold text-[#fffaf0]":"btn-metal--silver text-slate-900"}`,children:xZ[J]},J,!1,void 0,this)),Q("button",{type:"button",onClick:()=>bX(!0),className:"btn-metal btn-metal--danger px-4 py-2 rounded-full text-[10px] tracking-[0.08em] inline-flex items-center gap-2",title:"Ver y corregir fotos rotas",children:[Q("span",{className:"text-sm leading-none",children:"\uD83D\uDC94"},void 0,!1,void 0,this),"Rotas (",kJ.length,")"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-3",children:[Q("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[Q("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Total"},void 0,!1,void 0,this),Q("p",{className:"text-2xl font-black italic text-white mt-1",children:GQ.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[Q("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Visibles"},void 0,!1,void 0,this),Q("p",{className:"text-2xl font-black italic text-[var(--metal-gold)] mt-1",children:g.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[Q("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Etiquetas"},void 0,!1,void 0,this),Q("p",{className:"text-2xl font-black italic text-white mt-1",children:$J.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[Q("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Perfiles"},void 0,!1,void 0,this),Q("p",{className:"text-2xl font-black italic text-white mt-1",children:B0},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),h!=="PERSONAJE"&&LX&&!lJ?Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:yJ.map((J)=>Q("button",{type:"button",onClick:()=>{zQ(J);JJ(null)},className:"group text-left theme-surface-card border theme-border-secondary rounded-[1.4rem] overflow-hidden hover:border-[color:color-mix(in_srgb,var(--metal-gold)_40%,transparent)] hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] transition-all duration-500",children:Q("div",{className:"aspect-[4/5] bg-slate-950 relative overflow-hidden",children:[J.fotoPerfil?Q("img",{src:_J(J.fotoPerfil,"https://via.placeholder.com/400x500"),alt:`Portada ${J.nombre}`,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100",onError:xJ},void 0,!1,void 0,this):Q("div",{className:"w-full h-full flex items-center justify-center text-slate-500",children:Q(l,{name:"image-off",size:34},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent"},void 0,!1,void 0,this),Q("div",{className:"absolute inset-x-0 bottom-0 p-5",children:[Q("p",{className:"text-xl font-black italic text-white tracking-tighter leading-none",children:J.nombre},void 0,!1,void 0,this),Q("p",{className:"text-[10px] font-black uppercase tracking-widest text-[var(--metal-gold)] mt-2",children:J.profesion||"Perfil"},void 0,!1,void 0,this),Q("div",{className:"mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full border theme-border-secondary bg-slate-950/85 text-[9px] font-black uppercase tracking-[0.2em] text-slate-200",children:[J.photos.length," archivos"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},J.id,!1,void 0,this))},void 0,!1,void 0,this):Q(PJ,{children:[h!=="PERSONAJE"&&LX&&Q("div",{className:"flex items-center gap-3",children:Q("button",{type:"button",onClick:()=>{zQ(null);JJ(null)},className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] text-slate-900",children:[Q(l,{name:"arrow-left",size:14},void 0,!1,void 0,this),"Volver al índice"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),h==="PERSONAJE"&&Q("div",{className:"space-y-4",children:[Q("div",{className:"flex flex-col lg:flex-row lg:items-center gap-3",children:[Q("label",{htmlFor:"galleryCharacterSelector",className:"text-[10px] font-black uppercase tracking-[0.2em] text-slate-300",children:"Selector de personajes"},void 0,!1,void 0,this),Q("select",{id:"galleryCharacterSelector",className:"filter-select max-w-lg",value:"",onChange:(J)=>M0(J.target.value),children:[Q("option",{value:"",disabled:!0,children:OZ.length?"Seleccionar personaje…":"No hay más personajes disponibles"},void 0,!1,void 0,this),OZ.map((J)=>Q("option",{value:J.id,children:[J.nombre," · ",J.photos.length," archivos"]},J.id,!0,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),GJ.length>0?Q("div",{className:"flex flex-wrap gap-2",children:GJ.map((J)=>Q("button",{type:"button",onClick:()=>K0(J.id),className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] text-slate-900",title:"Quitar personaje de la galería visible",children:[J.nombre,Q(l,{name:"x",size:12},void 0,!1,void 0,this)]},J.id,!0,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"text-xs text-slate-400",children:"Seleccioná uno o más personajes para mostrar su multimedia en la galería."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),h==="ETIQUETA"&&Q("div",{className:"hud-frame hud-frame--panel flex flex-wrap gap-3 rounded-2xl p-4",children:$J.map((J)=>Q("button",{onClick:()=>w0(J),className:"btn-neon font-title px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all",style:CX(J,XQ.includes(J)),children:[J," · ",(cX[J]||[]).length]},J,!0,void 0,this))},void 0,!1,void 0,this),h==="PERSONAJE"&&Q("div",{className:"hud-frame hud-frame--panel flex flex-wrap gap-3 rounded-2xl p-4",children:[Q("button",{onClick:()=>NX("INICIAL"),className:"btn-neon px-4 py-2 rounded-full text-[10px] transition-all",style:CX("INICIAL",vJ==="INICIAL"),children:"Inicial"},void 0,!1,void 0,this),$J.map((J)=>{return Q("button",{onClick:()=>NX(J),className:"btn-neon font-title px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all",style:CX(J,vJ===J),children:[J," · ",z0[J]||0]},J,!0,void 0,this)}),Q("button",{onClick:()=>NX("100"),className:"btn-neon px-4 py-2 rounded-full text-[10px] transition-all",style:CX("100",vJ==="100"),children:"100%"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-wrap items-center gap-3",children:[Q("button",{type:"button",onClick:()=>FZ(0,{autoplay:!0,fromGeneralPlay:!0}),disabled:!g.length,className:"btn-metal btn-metal--gold inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] disabled:opacity-40 disabled:cursor-not-allowed",children:[Q(l,{name:"play",size:14},void 0,!1,void 0,this),"Play ",lJ?.nombre||OX]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:G0,disabled:AY||!g.length,className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed",title:"Descargar toda la multimedia visible en un ZIP",children:[Q(l,{name:"download",size:14},void 0,!1,void 0,this),AY?"Generando ZIP...":"DESCARGAR TODO"]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>X0((J)=>!J),className:`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${xX?"border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110":"theme-border-secondary bg-slate-900/85 opacity-80"}`,title:"Música de galería",children:"\uD83C\uDFB5"},void 0,!1,void 0,this),gJ.length>0&&Q(PJ,{children:[Q("select",{className:"filter-select min-w-[180px]",value:lQ,onChange:(J)=>aY(J.target.value),children:[Q("option",{value:"",children:"Audio principal"},void 0,!1,void 0,this),gJ.map((J,X)=>Q("option",{value:J.url,children:J.nombre},`${J.url}-${X}`,!1,void 0,this))]},void 0,!0,void 0,this),Q("select",{className:"filter-select min-w-[180px]",value:tQ,onChange:(J)=>rY(J.target.value),children:[Q("option",{value:"",children:"Audio secundario (opcional)"},void 0,!1,void 0,this),gJ.map((J,X)=>Q("option",{value:J.url,children:J.nombre},`${J.url}-b-${X}`,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"inline-flex items-center gap-2 rounded-full border theme-border-secondary bg-slate-950/80 px-3 py-2",children:[Q("label",{htmlFor:"galleryPlaybackSeconds",className:"text-[10px] font-black uppercase tracking-[0.15em] text-slate-300",children:"Duración"},void 0,!1,void 0,this),Q("select",{id:"galleryPlaybackSeconds",className:"filter-select",value:wX,onChange:(J)=>rZ(Number(J.target.value)),children:[3,5,7,10].map((J)=>Q("option",{value:J,children:[J," segundos"]},J,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),g.length===0?Q("div",{className:"py-24 border border-dashed theme-border-secondary rounded-2xl text-center bg-slate-950/30",children:[Q("div",{className:"w-20 h-20 rounded-full bg-slate-900 border theme-border-secondary flex items-center justify-center mx-auto mb-6",children:Q(l,{name:"image-off",size:28,className:"text-slate-600"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("h3",{className:"font-title text-xl font-black italic text-white tracking-[0.06em]",children:"No hay archivos para mostrar"},void 0,!1,void 0,this),Q("p",{className:"font-title text-xs font-medium text-slate-500 tracking-[0.06em] mt-3",children:h==="ETIQUETA"&&XQ.length===0?"Seleccioná una o más etiquetas para ver multimedia.":"Probá con otra etiqueta o quitá el filtro por etiqueta."},void 0,!1,void 0,this)]},void 0,!0,void 0,this):Q(PJ,{children:[Q("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",children:sX.map((J,X)=>{const Y=rJ(J.label),Z=IQ(J.profesion);return Q("button",{type:"button",onClick:()=>FZ(X),className:"group text-left theme-surface-card border rounded-[1.4rem] overflow-hidden transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[var(--glow-gold)] focus:ring-offset-2 focus:ring-offset-[#020617]",style:{borderColor:`color-mix(in srgb, ${Z.glowColor} 72%, rgba(148,163,184,0.48) 28%)`,boxShadow:`inset 0 -30px 70px color-mix(in srgb, ${Z.baseColor} 18%, transparent), 0 0 16px color-mix(in srgb, ${Z.glowColor} 58%, transparent), 0 0 34px color-mix(in srgb, ${Z.glowColor} 35%, transparent)`},onMouseEnter:($)=>{$.currentTarget.style.transform="translateY(-2px) scale(1.01)";$.currentTarget.style.boxShadow=`inset 0 -30px 70px color-mix(in srgb, ${Z.baseColor} 20%, transparent), 0 0 26px color-mix(in srgb, ${Z.glowColor} 76%, transparent), 0 0 58px color-mix(in srgb, ${Z.glowColor} 52%, transparent)`},onMouseLeave:($)=>{$.currentTarget.style.transform="translateY(0) scale(1)";$.currentTarget.style.boxShadow=`inset 0 -30px 70px color-mix(in srgb, ${Z.baseColor} 18%, transparent), 0 0 16px color-mix(in srgb, ${Z.glowColor} 58%, transparent), 0 0 34px color-mix(in srgb, ${Z.glowColor} 35%, transparent)`},children:Q("div",{className:"aspect-[3/4] relative overflow-hidden bg-slate-950",children:[J.type==="video"?(()=>{const $=WQ(J.url);if($)return Q("div",{className:"w-full h-full bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.3),_rgba(15,23,42,0.95))] flex flex-col items-center justify-center gap-4 p-6 text-center",children:[Q("div",{className:"w-16 h-16 rounded-full border border-[var(--metal-gold)]/40 bg-slate-950/70 flex items-center justify-center text-[color:color-mix(in_srgb,var(--metal-gold)_72%,white)] text-2xl",children:"▶"},void 0,!1,void 0,this),Q("div",{children:[Q("p",{className:"font-title text-sm font-semibold tracking-[0.1em] text-white",children:"Video"},void 0,!1,void 0,this),Q("p",{className:"font-title text-[10px] font-medium tracking-[0.08em] text-slate-400 mt-2",children:$.provider},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this);return Q("video",{src:J.url,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",muted:!0,playsInline:!0,preload:"none"},void 0,!1,void 0,this)})():Q("img",{src:_J(J.url,OQ),alt:`${J.nombre} - ${J.label||"galería"}`,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",onError:xJ,loading:"lazy",decoding:"async"},void 0,!1,void 0,this),Q("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-cyan-950/40 via-transparent to-transparent"},void 0,!1,void 0,this),Q("div",{className:"absolute top-3 right-3 min-w-[32px] h-[32px] px-2 rounded-xl border flex items-center justify-center text-[10px] font-black uppercase shadow-xl z-20",style:{background:Y.bg,borderColor:Y.border,color:Y.text,boxShadow:`0 0 10px ${Y.glow}, 0 0 24px color-mix(in srgb, ${Y.glow} 48%, transparent)`},title:`Etiqueta ${J.label||"sin etiqueta"}`,children:J.label||"—"},void 0,!1,void 0,this),Q("div",{className:"absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent",children:Q("div",{className:"flex items-end justify-between gap-3",children:[Q("div",{className:"min-w-0 flex-1",children:[Q("p",{className:"text-xs sm:text-sm font-black italic text-white tracking-tight leading-none truncate",title:J.nombre,children:J.nombre},void 0,!1,void 0,this),J.autor?Q("p",{className:"text-[10px] font-semibold text-slate-300 mt-1 truncate",title:J.autor,children:["Autor: ",J.autor]},void 0,!0,void 0,this):null]},void 0,!0,void 0,this),Q("div",{className:"px-2 py-[2px] rounded-full border theme-border-secondary bg-slate-950/85 text-[7px] font-black uppercase tracking-[0.18em] text-slate-200 shrink-0",children:J.type==="video"?"VIDEO":J.isGif?"GIF":"IMG"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},J.id,!1,void 0,this)})},void 0,!1,void 0,this),WX&&Q("div",{ref:fY,className:"h-1 w-full","aria-hidden":"true"},void 0,!1,void 0,this),WX&&Q("div",{className:"flex justify-center mt-8",children:Q("button",{type:"button",onClick:()=>GX((J)=>Math.min(J+12,g.length)),className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-6 py-3 rounded-full text-[10px] text-slate-900",children:["Cargar más (",sX.length,"/",g.length,")"]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("audio",{ref:KQ,loop:!0,preload:"none"},void 0,!1,void 0,this),Q("audio",{ref:wQ,loop:!0,preload:"none"},void 0,!1,void 0,this),k&&Q("div",{ref:eQ,className:"gallery-viewer-overlay fixed top-0 bottom-0 z-[260] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-0",style:AJ?{left:"18rem",width:"calc(100vw - 18rem)"}:{left:0,width:"100vw"},onClick:UZ,children:[Q("button",{type:"button",onClick:UZ,className:`btn-metal btn-metal--danger absolute ${KJ?"top-2 right-2 sm:top-3 sm:right-3 w-10 h-10":"top-4 right-4 sm:top-6 sm:right-6 w-12 h-12"} rounded-full flex items-center justify-center`,"aria-label":"Cerrar visor",children:Q("span",{className:"text-[26px] leading-none font-black",children:"✕"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:`gallery-viewer-shell w-screen h-screen max-h-screen flex flex-col ${KJ?"gap-1 px-1 py-1 sm:px-2 sm:py-2":"gap-4 px-3 py-3 sm:px-6 sm:py-6"}`,onClick:(J)=>J.stopPropagation(),children:[!KJ&&Q("div",{className:"flex items-center justify-between gap-4 px-1 sm:px-2",children:[Q("div",{children:[Q("p",{className:"text-2xl sm:text-3xl font-black italic text-white tracking-tighter",children:k.nombre},void 0,!1,void 0,this),Q("p",{className:"text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-[var(--metal-gold)] mt-2",children:[k.profesion,k.nacionalidad?` · ${k.nacionalidad}`:""]},void 0,!0,void 0,this),k.autor?Q("p",{className:"text-[11px] sm:text-xs font-semibold text-slate-300 mt-2",children:["Autor: ",k.autor]},void 0,!0,void 0,this):null]},void 0,!0,void 0,this),Q("div",{className:"flex items-center gap-3",children:[g.length>1&&Q(PJ,{children:[Q("button",{type:"button",onClick:()=>TQ((J)=>!J),className:`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${MJ?"border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110":"theme-border-secondary bg-slate-900/85 opacity-80"}`,"aria-label":MJ?"Pausar reproducción":"Reproducir",children:"▶️"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>KX((J)=>!J),className:`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${IJ?"border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110":"theme-border-secondary bg-slate-900/85 opacity-80"}`,"aria-label":IJ?"Aleatorio activado":"Aleatorio desactivado",children:"\uD83D\uDD00"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"px-3 py-2 rounded-full border theme-border-secondary bg-slate-950/85 text-[10px] font-black uppercase tracking-[0.3em] text-slate-200",children:k.type==="video"?"VIDEO":k.isGif?"GIF":"IMG"},void 0,!1,void 0,this),Q("div",{className:"min-w-[52px] h-[52px] rounded-2xl border flex items-center justify-center text-base font-black uppercase shadow-xl",style:{background:rJ(k.label).bg,borderColor:rJ(k.label).border,color:rJ(k.label).text,boxShadow:`0 0 20px ${rJ(k.label).glow}`},children:k.label||"—"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:`gallery-viewer-media-wrap relative flex-1 min-h-0 overflow-hidden bg-black/50 ${KJ?"rounded-xl md:rounded-2xl":"md:rounded-[2rem] md:border theme-border-secondary"}`,children:[k.type==="video"?(()=>{const J=WQ(k.url);if(J)return Q("iframe",{ref:gX,src:J.src,title:`${k.nombre} video`,className:`w-full ${KJ?"h-[calc(100dvh-4.5rem)]":"h-[calc(100dvh-14rem)]"} bg-black`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0},void 0,!1,void 0,this);return Q("video",{ref:gX,src:k.url,controls:!0,playsInline:!0,muted:dX,autoPlay:MJ,onEnded:()=>{if(MJ&&g.length>1)kQ()},onError:()=>{if(g.length>1)kQ()},className:`w-full ${KJ?"h-[calc(100dvh-4.5rem)]":"h-[calc(100dvh-14rem)]"} object-contain bg-black`},void 0,!1,void 0,this)})():Q("img",{src:_J(k.url,OQ),alt:`${k.nombre} - ${k.label||"galería"}`,ref:gX,className:`w-full ${KJ?"h-[calc(100dvh-4.5rem)]":"h-[calc(100dvh-14rem)]"} object-contain bg-black`,onError:(J)=>{xJ(J);if(g.length>1)kQ()}},void 0,!1,void 0,this),g.length>1&&Q(PJ,{children:KJ?Q("div",{className:"absolute left-1/2 bottom-3 sm:bottom-4 -translate-x-1/2 flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_40%,rgba(148,163,184,0.45))] bg-slate-950/85 backdrop-blur-md shadow-[0_0_18px_rgba(15,23,42,0.65)]",children:[Q("button",{type:"button",onClick:(J)=>{J.stopPropagation();KX((X)=>!X)},className:`px-3 sm:px-4 h-10 rounded-full border text-[11px] sm:text-xs font-black uppercase tracking-[0.18em] transition-all ${IJ?"border-[var(--metal-gold)] text-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_28%,rgba(2,6,23,0.9))]":"theme-border-secondary text-slate-200 bg-slate-900/90"}`,"aria-label":IJ?"Aleatorio activado":"Aleatorio desactivado",children:IJ?"Random On":"Random Off"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:(J)=>{J.stopPropagation();TQ((X)=>!X)},className:`px-4 sm:px-5 h-10 rounded-full border text-[11px] sm:text-xs font-black uppercase tracking-[0.18em] transition-all ${MJ?"border-[var(--metal-gold)] text-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_28%,rgba(2,6,23,0.9))]":"theme-border-secondary text-slate-200 bg-slate-900/90"}`,"aria-label":MJ?"Pausar reproducción":"Reproducir",children:MJ?"Pause":"Play"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:(J)=>{J.stopPropagation();kQ()},className:"w-10 h-10 rounded-full border theme-border-secondary bg-slate-900/90 text-white flex items-center justify-center hover:border-[var(--metal-gold)] transition-all shadow-lg shadow-black/40 text-xl","aria-label":"Foto siguiente",children:"➡️"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):Q("button",{type:"button",onClick:(J)=>{J.stopPropagation();kQ()},className:"absolute right-4 bottom-4 sm:right-6 sm:bottom-6 w-12 h-12 rounded-full border theme-border-secondary bg-slate-900/90 text-white flex items-center justify-center hover:border-[var(--metal-gold)] transition-all shadow-lg shadow-black/40 text-2xl","aria-label":"Foto siguiente",children:"➡️"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!KJ&&Q("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-1 sm:px-2",children:[Q("p",{className:"text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400",children:[zJ+1," de ",g.length," archivos visibles"]},void 0,!0,void 0,this),Q("div",{className:"flex items-center justify-start sm:justify-end gap-2",children:[NY?Q(PJ,{children:[Q("input",{type:"url",value:KY,onChange:(J)=>dQ(J.target.value),placeholder:"https://...",className:"min-w-[260px] bg-slate-900 border theme-border-secondary rounded-lg px-2 py-1 text-[10px] font-bold tracking-[0.04em] text-white focus:outline-none focus:border-[var(--metal-gold)]"},void 0,!1,void 0,this),Q("select",{value:MY,onChange:(J)=>sQ(J.target.value),className:"bg-slate-900 border theme-border-secondary rounded-lg px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white focus:outline-none focus:border-[var(--metal-gold)]",children:[Q("option",{value:"",children:"Sin etiqueta"},void 0,!1,void 0,this),$J.map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:k0,disabled:GY,className:"px-2 py-1 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.14em] text-[var(--metal-gold)] hover:border-[var(--metal-gold)] transition-all",children:GY?"Guardando...":"Guardar"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>{sQ(k?.label||"");dQ(k?.url||"");cJ("");YQ(!1)},className:"px-2 py-1 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.14em] text-slate-300 hover:text-white transition-all",children:"Cancelar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):Q("button",{type:"button",onClick:()=>YQ(!0),className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.16em] text-slate-300 hover:border-[var(--metal-gold)] hover:text-[var(--metal-gold)] transition-all","aria-label":"Editar etiqueta de la multimedia",children:[Q("span",{className:"text-xs leading-none",children:"✏️"},void 0,!1,void 0,this),Q("span",{children:k?.label||"Sin etiqueta"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),NY&&wY&&Q("p",{className:"text-[10px] font-bold tracking-[0.04em] text-rose-300",children:wY},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),PX&&Q("div",{className:"fixed inset-0 z-[130] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6",style:AJ?{left:"18rem"}:void 0,onClick:()=>bX(!1),children:Q("div",{className:"w-full max-w-[1200px] max-h-full theme-surface-card border theme-border-secondary rounded-[2rem] p-4 sm:p-6 overflow-hidden",onClick:(J)=>J.stopPropagation(),children:[Q("div",{className:"flex items-center justify-between gap-4 mb-5",children:[Q("div",{children:[Q("p",{className:"text-2xl font-black italic text-white tracking-tighter",children:"Fotos rotas"},void 0,!1,void 0,this),Q("p",{className:"text-[10px] font-black uppercase tracking-[0.25em] text-[var(--metal-gold)] mt-2",children:[kJ.length," enlace",kJ.length===1?"":"s"," sin vista"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>bX(!1),className:"btn-metal btn-metal--danger w-11 h-11 rounded-full flex items-center justify-center","aria-label":"Cerrar revisión de fotos rotas",children:Q("span",{className:"text-xl font-black leading-none",children:"✕"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"max-h-[70vh] overflow-y-auto pr-1 space-y-6",children:!LZ.length?Q("div",{className:"theme-surface-soft rounded-2xl border theme-border-secondary p-6 text-center",children:Q("p",{className:"text-sm font-semibold text-white",children:"No se detectaron fotos rotas ahora mismo."},void 0,!1,void 0,this)},void 0,!1,void 0,this):LZ.map((J)=>Q("section",{className:"theme-surface-soft rounded-2xl border theme-border-secondary p-4 sm:p-5",children:[Q("div",{className:"mb-4",children:[Q("p",{className:"text-lg font-black italic text-white tracking-tight",children:J.nombre},void 0,!1,void 0,this),Q("p",{className:"text-[10px] font-black uppercase tracking-[0.18em] text-slate-400 mt-1",children:[J.profesion,J.nacionalidad?` · ${J.nacionalidad}`:""]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-3",children:J.fotos.map((X)=>{const Y=!!$0[X.id],Z=!!H0[X.id],$=IX[X.id]??X.url;return Q("article",{className:"grid grid-cols-1 xl:grid-cols-[76px_minmax(0,1fr)_auto] gap-3 p-3 rounded-xl border theme-border-secondary bg-slate-950/40",children:[Q("div",{className:"w-[76px] h-[76px] rounded-lg overflow-hidden border theme-border-secondary bg-slate-900 flex items-center justify-center",children:Q("img",{src:OQ,alt:"Vista previa rota",className:"w-full h-full object-cover"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"space-y-2 min-w-0",children:[Q("div",{className:"flex flex-wrap items-center gap-2",children:[Q("span",{className:"text-[10px] px-2 py-1 rounded-full border theme-border-secondary bg-slate-900/85 font-black uppercase tracking-[0.16em] text-slate-200",children:["Etiqueta: ",X.label||"Sin etiqueta"]},void 0,!0,void 0,this),Q("span",{className:"text-[10px] px-2 py-1 rounded-full border theme-border-secondary bg-slate-900/85 font-black uppercase tracking-[0.16em] text-slate-400",children:X.sourceTag},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("input",{type:"url",value:$,onChange:(H)=>S0(X.id,H.target.value),placeholder:"https://...",readOnly:!Z,className:`w-full min-w-0 bg-slate-900 border theme-border-secondary rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[var(--metal-gold)] ${!Z?"opacity-80 cursor-default":""}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-wrap xl:flex-col gap-2 xl:justify-center",children:[Q("button",{type:"button",onClick:()=>x0(X),className:"btn-metal btn-metal--silver px-3 py-2 rounded-xl text-[10px]",children:"Ir al enlace"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>VZ(X.id,!0),disabled:Y,className:"btn-metal px-3 py-2 rounded-xl text-[10px] disabled:opacity-60",children:"Editar enlace"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>P0(X),disabled:Y,className:"btn-metal btn-metal--gold px-3 py-2 rounded-xl text-[10px] disabled:opacity-60",children:"Guardar enlace"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>b0(X),disabled:Y,className:"btn-metal btn-metal--danger px-3 py-2 rounded-xl text-[10px] disabled:opacity-60",children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},X.id,!0,void 0,this)})},void 0,!1,void 0,this)]},J.id,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),D==="BATALLAS"&&!XJ&&!w&&Q("div",{className:"space-y-10 animate-in fade-in duration-500",children:[Q("div",{className:"flex flex-col gap-4",children:[Q("div",{className:"flex flex-wrap items-center gap-3",children:[Q("button",{onClick:t0,className:"solid-metal-ui px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.18em] transition-all",children:"Resetear calificaciones"},void 0,!1,void 0,this),Q("button",{onClick:()=>sZ((J)=>!J),className:"solid-metal-ui px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.18em] transition-all",children:"Resetear item"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),cZ&&Q("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-4 flex flex-wrap items-center gap-3",children:[Q("select",{value:_Y,onChange:(J)=>dZ(J.target.value),className:"bg-slate-900 border theme-border-secondary rounded-xl px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white",children:HY.map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))},void 0,!1,void 0,this),Q("button",{onClick:()=>o0(_Y,M,c),className:"solid-metal-ui px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.16em] transition-all",disabled:!M,children:"Confirmar reset item"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{children:[Q("h2",{className:"text-4xl font-black italic text-white uppercase tracking-tighter",children:"Arenas"},void 0,!1,void 0,this),Q("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:!M?"Paso 1: elegí un modo de enfrentamiento":UX&&!c?`Paso 2: elegí una opción de ${LQ(M)}`:`Paso 3: elegí uno de los 15 ítems · Modo: ${LQ(M)}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),!M&&Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6",children:jY.map((J)=>Q("button",{onClick:()=>{UJ(J.id);NJ(J.id==="GENERAL"?"all":"");x(null)},className:"solid-metal-ui battle-mode-card battle-mode-card--mode border rounded-2xl p-4 text-left transition-all",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.28em] text-slate-500",children:"Modo"},void 0,!1,void 0,this),Q("h3",{className:"font-black italic text-white mt-2",children:J.label},void 0,!1,void 0,this),Q("p",{className:"text-xs text-slate-300 mt-2",children:J.description},void 0,!1,void 0,this)]},J.id,!0,void 0,this))},void 0,!1,void 0,this),M&&Q("div",{className:"space-y-4",children:[Q("div",{className:"flex flex-wrap items-center gap-3",children:[Q("p",{className:"text-xs font-bold uppercase tracking-[0.2em] text-slate-300",children:["Modo: ",LQ(M)]},void 0,!0,void 0,this),Q("button",{onClick:()=>{UJ(null);NJ("");x(null)},className:"solid-metal-ui inline-flex items-center gap-2 px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.16em] transition-all",children:"Cambiar modo"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),UX&&Q("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-4 space-y-3",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-slate-300",children:["Elegí una opción de ",LQ(M)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:r0.map((J)=>Q("button",{onClick:()=>{NJ(J.key);x(null)},className:`solid-metal-ui px-3 py-2 rounded-xl border text-[10px] font-black uppercase tracking-[0.14em] transition-all ${c===J.key?"border-[var(--metal-gold)] text-white":"theme-border-secondary text-slate-200"}`,children:[J.label," ",Q("span",{className:"text-slate-400",children:["(",J.ids.length,")"]},void 0,!0,void 0,this)]},J.key,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),UX&&!c&&Q("p",{className:"text-xs text-slate-400",children:"Seleccioná una opción para habilitar las batallas."},void 0,!1,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6",children:[HY.map((J)=>{const X=EQ(J,M,c),Y=Boolean(WJ?.[X]?.isFinished);return Q("button",{disabled:UX&&!c,onClick:()=>{x(J);if(!WJ[X])NZ(J,M,c)},className:`solid-metal-ui battle-mode-card battle-mode-card--arena border rounded-2xl p-4 text-left transition-all disabled:opacity-45 disabled:cursor-not-allowed ${Y?"battle-mode-card--completed":""}`,children:[Q("p",{className:`text-[10px] font-black uppercase tracking-[0.28em] ${Y?"text-emerald-100/90":"text-slate-500"}`,children:"Item"},void 0,!1,void 0,this),Q("h3",{className:"font-black italic text-white mt-2",children:J},void 0,!1,void 0,this),Y&&Q("p",{className:"battle-mode-card__status mt-4",children:"Completada"},void 0,!1,void 0,this)]},J,!0,void 0,this)}),"                    "]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),D==="BATALLAS"&&w&&(()=>{const J=EQ(w,M,c),X=WJ[J],Y=E.find((L)=>L.firebaseId===X?.championId),Z=E.find((L)=>L.firebaseId===X?.challengerId),$=Y?zZ(w,Y.firebaseId):null,H=Z?zZ(w,Z.firebaseId):null;return Q("div",{className:"space-y-8 animate-in fade-in duration-500",children:[Q("div",{className:"bg-slate-900/95 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border theme-border-secondary space-y-4",children:[Q("div",{className:"flex flex-wrap items-center gap-3",children:[Q("button",{onClick:()=>x(null),className:"group solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all",children:[Q("i",{"data-lucide":"arrow-left",className:"w-4 h-4"},void 0,!1,void 0,this),"Volver a arenas"]},void 0,!0,void 0,this),Q("button",{onClick:()=>{x(null);UJ(null);NJ("")},className:"group solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all",children:[Q("i",{"data-lucide":"refresh-ccw",className:"w-4 h-4"},void 0,!1,void 0,this),"Cambiar modo"]},void 0,!0,void 0,this),Q("button",{onClick:()=>pZ((L)=>!L),className:"solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all",children:"Resetear una batalla"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),nZ&&Q("div",{className:"theme-surface-card border border-red-400/30 rounded-2xl p-4 mt-3",children:(()=>{const L=Object.keys(X?.matchups||{}).filter((j)=>!!X?.matchups?.[j]);if(!X||!L.length)return Q("p",{className:"text-xs text-red-200 font-bold uppercase tracking-[0.12em]",children:"No hay cruces jugados para resetear."},void 0,!1,void 0,this);return Q("div",{className:"space-y-2",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.18em] text-red-200",children:"Elegí el cruce a deshacer:"},void 0,!1,void 0,this),L.map((j)=>{const[O,q]=j.split("__"),F=E.find((V)=>V.firebaseId===O),z=E.find((V)=>V.firebaseId===q),C=F?.nombre||O,B=z?.nombre||q;return Q("button",{onClick:()=>KZ(w,O,q,M,c),className:"metal-btn-3d w-full text-left px-3 py-2 rounded-xl border theme-border-secondary bg-slate-900/60 hover:border-red-300/70 transition-all",children:Q("span",{className:"text-xs text-white font-semibold",children:[C," vs ",B]},void 0,!0,void 0,this)},j,!1,void 0,this)})]},void 0,!0,void 0,this)})()},void 0,!1,void 0,this),Q("div",{className:"min-w-0",children:[Q("h2",{className:"font-title text-2xl sm:text-3xl lg:text-4xl font-black italic text-white tracking-[0.08em] break-words leading-tight",children:w},void 0,!1,void 0,this),Q("p",{className:"text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mt-1",children:["Arena activa · Modo: ",LQ(M)]},void 0,!0,void 0,this),X?.activeGroupLabel&&Q("p",{className:"text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[var(--metal-gold)] mt-2",children:X.activeGroupLabel},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),!X&&Q("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-8 text-center",children:[Q("p",{className:"text-sm text-slate-300",children:"Presioná para iniciar esta arena."},void 0,!1,void 0,this),Q("button",{onClick:()=>NZ(w,M,c),className:"metal-btn-3d mt-4 bg-[var(--metal-bronze)] text-white px-5 py-3 rounded-xl font-black uppercase text-xs tracking-[0.2em]",children:"Iniciar batallas"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X&&X.isFinished&&Q("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-8 text-center",children:[Q("h3",{className:"text-2xl font-black italic text-white",children:"Arena completada"},void 0,!1,void 0,this),Q("p",{className:"text-slate-400 mt-2",children:"No quedan combates nuevos para este item."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X&&Y&&Z&&!X.isFinished&&Q("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch",children:[Q("button",{onClick:()=>MZ(w,Y.firebaseId,M,c),className:"theme-surface-card metal-card-3d battle-participant-card border theme-border-secondary rounded-2xl p-8 transition-all text-left",style:{"--battle-profession-color":IQ(Y.profesion).baseColor},children:[Q("img",{src:mZ(Y,w),alt:Y.nombre,className:"w-full h-64 object-contain rounded-xl border border-slate-700/60 mb-5 bg-slate-950/70 p-2",onError:xJ},void 0,!1,void 0,this),Q("p",{className:"text-[9px] font-black uppercase tracking-[0.3em] text-slate-500",children:"Versus"},void 0,!1,void 0,this),Q("h3",{className:"text-2xl sm:text-3xl font-black italic text-white mt-2",children:Y.nombre},void 0,!1,void 0,this),w==="Estatura"&&Q("p",{className:"text-xs text-slate-200 mt-2",children:["Altura: ",DZ(Y)]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-[var(--metal-gold)] mt-3",children:["Victorias: ",$?.wins||0," · Batallas: ",$?.battles||0]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-white/80 mt-1",children:["Puntaje final: ",$?.score||0]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-col items-center justify-center text-center",children:[Q("div",{className:"font-title text-4xl text-[var(--metal-gold)] font-black",children:"VS"},void 0,!1,void 0,this),w==="Estatura"&&Q("p",{className:"text-[10px] font-bold uppercase tracking-[0.16em] text-slate-300 mt-3",children:"Compará altura en cm"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("button",{onClick:()=>MZ(w,Z.firebaseId,M,c),className:"theme-surface-card metal-card-3d battle-participant-card border theme-border-secondary rounded-2xl p-8 transition-all text-left",style:{"--battle-profession-color":IQ(Z.profesion).baseColor},children:[Q("img",{src:mZ(Z,w),alt:Z.nombre,className:"w-full h-64 object-contain rounded-xl border border-slate-700/60 mb-5 bg-slate-950/70 p-2",onError:xJ},void 0,!1,void 0,this),Q("p",{className:"text-[9px] font-black uppercase tracking-[0.3em] text-slate-500",children:"Versus"},void 0,!1,void 0,this),Q("h3",{className:"text-2xl sm:text-3xl font-black italic text-white mt-2",children:Z.nombre},void 0,!1,void 0,this),w==="Estatura"&&Q("p",{className:"text-xs text-slate-200 mt-2",children:["Altura: ",DZ(Z)]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-[var(--metal-gold)] mt-3",children:["Victorias: ",H?.wins||0," · Batallas: ",H?.battles||0]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-white/80 mt-1",children:["Puntaje final: ",H?.score||0]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)})(),D==="RANKING"&&!XJ&&Q("div",{className:"theme-surface-card rounded-2xl gothic-frame gothic-frame--ornate animate-in zoom-in-95 duration-500 ranking-table-shell",children:[Q("div",{className:"ranking-table-toolbar",children:Q("button",{type:"button",onClick:()=>oZ((J)=>!J),className:`ranking-toggle-totality ${AX?"is-active":"is-inactive"}`,children:"Ver totalidad"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"ranking-table-scroll",children:Q("table",{className:`w-full ${QY?"min-w-[860px] xl:min-w-[980px]":"min-w-[700px] xl:min-w-[820px]"} text-left border-collapse`,children:[Q("thead",{className:"theme-surface-soft",children:Q("tr",{children:[Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:"#"},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest rock-carved-text",children:Q("button",{type:"button",onClick:()=>HQ("nombre","asc"),className:"inline-flex items-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Perfil ",jJ==="nombre"?fJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>HQ("Rostro","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Rostro ",jJ==="Rostro"?fJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>HQ("Cuerpo","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Cuerpo ",jJ==="Cuerpo"?fJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>HQ("Actitud","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Actitud ",jJ==="Actitud"?fJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),QY&&Q(PJ,{children:[Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>HQ("nacionalidad","asc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Ubicación ",jJ==="nacionalidad"?fJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>HQ("edad","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Edad ",jJ==="edad"?fJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("th",{className:"px-8 py-6 text-right",children:Q("div",{className:"flex flex-col items-end gap-1",children:[Q("span",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Ordenar por"},void 0,!1,void 0,this),Q("select",{value:jJ,onChange:(J)=>{DY(J.target.value);zX("desc")},className:"bg-slate-900 border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] text-[var(--metal-gold)] text-[10px] font-black uppercase py-1 px-2 rounded-lg outline-none cursor-pointer hover:border-cyan-500 transition-all",children:[Q("option",{value:"promedio",children:"G2 SCORE TOTAL (PROMEDIO)"},void 0,!1,void 0,this),Q("optgroup",{label:"Categorías Principales",className:"theme-surface-card text-slate-500",children:[Q("option",{value:"Rostro",children:"Rostro (Mix)"},void 0,!1,void 0,this),Q("option",{value:"Cuerpo",children:"Cuerpo (Mix)"},void 0,!1,void 0,this),Q("option",{value:"Actitud",children:"Actitud (Mix)"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("optgroup",{label:"Atributos Específicos",className:"theme-surface-card text-slate-500",children:QQ.map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("tbody",{children:X1.map((J,X)=>Q("tr",{onClick:()=>ZX(J),className:`cursor-pointer border-b border-slate-700/70 last:border-0 transition-all duration-300 group ${X===0?"podium-1":X===1?"podium-2":X===2?"podium-3":"hover:bg-white/5"}`,children:[Q("td",{className:"px-8 py-5",children:Q("span",{className:`font-black italic rock-carved-text ${X===0?"text-gold text-4xl":X===1?"text-silver text-3xl":X===2?"text-bronze text-2xl":"text-slate-600 text-lg"}`,children:["#",X+1]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("td",{className:"px-8 py-5",children:Q("div",{className:"flex items-center gap-4",children:[Q("div",{className:"w-14 h-14 rounded-xl border-2 p-0.5 transition-all duration-500",style:{borderColor:HJ(J.profesion).color,boxShadow:`0 0 10px ${HJ(J.profesion).sombra}`},children:Q("img",{src:_J(J.fotos?.[0],"https://via.placeholder.com/400x500"),className:"w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100",onError:xJ},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{children:[Q("p",{className:"font-title font-black text-white text-sm tracking-[0.06em] rock-carved-text",children:J.nombre},void 0,!1,void 0,this),Q("p",{className:"font-title text-[10px] font-medium tracking-[0.06em] rock-carved-text",children:J.profesion},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("td",{className:"px-4 py-5 text-center",children:Q("button",{type:"button",onClick:(Y)=>{Y.stopPropagation();BQ({isOpen:!0,profile:J,category:"Rostro"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Rostro de ${J.nombre}`,children:HX(J).toFixed(0)},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("td",{className:"px-4 py-5 text-center",children:Q("button",{type:"button",onClick:(Y)=>{Y.stopPropagation();BQ({isOpen:!0,profile:J,category:"Cuerpo"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Cuerpo de ${J.nombre}`,children:jX(J).toFixed(0)},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("td",{className:"px-4 py-5 text-center",children:Q("button",{type:"button",onClick:(Y)=>{Y.stopPropagation();BQ({isOpen:!0,profile:J,category:"Actitud"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Actitud de ${J.nombre}`,children:qX(J).toFixed(0)},void 0,!1,void 0,this)},void 0,!1,void 0,this),QY&&Q(PJ,{children:[Q("td",{className:"px-4 py-5 text-center",children:[Q("p",{className:"text-[10px] font-bold text-slate-300 uppercase leading-none",children:J.nacionalidad},void 0,!1,void 0,this),Q("p",{className:"text-[8px] font-black text-[var(--metal-gold)]/70 uppercase tracking-tighter",children:J.ciudad},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("td",{className:"px-4 py-5 text-center font-bold text-[10px] text-slate-400",children:[hJ(J.fechaNacimiento)," AÑOS"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("td",{className:"px-8 py-5 text-right",children:Q("div",{className:`inline-block bg-slate-900 border px-4 py-2 rounded-xl transition-all duration-300 ${X===0?"border-[#ffd700]/50 shadow-[0_0_15px_rgba(255,215,0,0.3)]":X===1?"border-[#c0c0c0]/50 shadow-[0_0_15px_rgba(192,192,192,0.3)]":X===2?"border-[#cd7f32]/50 shadow-[0_0_15px_rgba(205,127,50,0.3)]":"theme-border-secondary group-hover:border-[color:color-mix(in_srgb,var(--metal-gold)_50%,transparent)]"}`,children:Q("span",{className:`font-black leading-none ${X===0?"text-gold":X===1?"text-silver":X===2?"text-bronze":"text-[var(--metal-gold)] text-lg"}`,children:e0(J)},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},J.firebaseId||J.id,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),BJ.isOpen&&BJ.profile&&BJ.category&&(()=>{const J=J1(BJ.profile.firebaseId,BJ.category),X=iJ[BJ.category]||[];return Q("div",{className:`fixed inset-0 z-[140] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 ${AJ?"lg:pl-[19rem] lg:justify-end":""}`,onClick:()=>{BQ({isOpen:!1,profile:null,category:null});FQ(null)},children:Q("div",{className:"w-full max-w-3xl max-h-[90vh] overflow-y-auto themed-scrollbar theme-surface-card border theme-border-secondary rounded-2xl p-6",onClick:(Y)=>Y.stopPropagation(),children:[Q("div",{className:"flex items-start justify-between gap-4 mb-6",children:[Q("div",{children:[Q("h3",{className:"font-title text-xl font-black text-white tracking-wide",children:[BJ.profile.nombre," · ",BJ.category]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-slate-300 mt-1",children:"Detalle de enfrentamientos ganados y perdidos."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>{BQ({isOpen:!1,profile:null,category:null});FQ(null)},className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black",children:"Cerrar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"mb-4",children:[Q("p",{className:"text-[10px] uppercase tracking-[0.18em] text-slate-400 font-black mb-2",children:"Detalle por ítem"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:X.map((Y)=>(()=>{const Z=Q1(BJ.profile.firebaseId,Y);return Q("button",{type:"button",onClick:()=>{const $=eX(BJ.profile.firebaseId,Y);FQ($)},className:"btn-metal btn-metal--bronze px-3 py-2 rounded-lg text-[10px] font-black min-w-[10.5rem] text-left",children:[Q("p",{className:"leading-none",children:Y},void 0,!1,void 0,this),Q("p",{className:"mt-1 text-[9px] font-semibold text-slate-200/90 tracking-[0.01em] normal-case",children:[Z.wins,"/",Z.total," · ",Z.winRate.toFixed(0),"% victorias"]},void 0,!0,void 0,this)]},`breakdown-item-${Y}`,!0,void 0,this)})())},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!gQ?.arenaName&&Q("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[Q("div",{className:"rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-4 min-h-44",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-emerald-300 mb-3",children:"Ganó contra"},void 0,!1,void 0,this),J.wins.length?Q("ul",{className:"space-y-2",children:J.wins.map((Y,Z)=>Q("li",{className:"text-sm text-emerald-200 font-semibold",children:Y},`win-${Y}-${Z}`,!1,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"text-xs text-emerald-200/70",children:"No hay batallas ganadas registradas."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"rounded-xl border border-rose-500/40 bg-rose-950/20 p-4 min-h-44",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-rose-300 mb-3",children:"Perdió contra"},void 0,!1,void 0,this),J.losses.length?Q("ul",{className:"space-y-2",children:J.losses.map((Y,Z)=>Q("li",{className:"text-sm text-rose-200 font-semibold",children:Y},`loss-${Y}-${Z}`,!1,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"text-xs text-rose-200/70",children:"No hay batallas perdidas registradas."},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),gQ?.arenaName&&Q("div",{className:"mt-5 rounded-2xl border border-cyan-500/40 bg-cyan-950/15 p-4 max-h-[48vh] overflow-y-auto themed-scrollbar",children:[Q("div",{className:"flex items-center justify-between gap-3 mb-4",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-cyan-200",children:["Ítem: ",gQ.arenaName]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>FQ(null),className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black",children:"Cerrar detalle"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:["wins","losses"].map((Y)=>{const Z=Y==="wins",$=gQ[Y]||[];return Q("div",{className:`rounded-xl border p-3 min-h-36 ${Z?"border-emerald-500/40 bg-emerald-950/15":"border-rose-500/40 bg-rose-950/15"}`,children:[Q("h5",{className:`text-[10px] font-black uppercase tracking-[0.15em] mb-2 ${Z?"text-emerald-300":"text-rose-300"}`,children:Z?"Ganadas":"Perdidas"},void 0,!1,void 0,this),$.length?Q("ul",{className:"space-y-2",children:$.map((H,L)=>Q("li",{className:"flex items-center justify-between gap-2",children:[Q("span",{className:`text-sm font-semibold ${Z?"text-emerald-100":"text-rose-100"}`,children:H.opponentName},void 0,!1,void 0,this),Q("button",{type:"button",className:"btn-metal btn-metal--red px-2 py-1 rounded text-[9px] font-black",onClick:async()=>{if(!window.confirm("¿Seguro que querés deshacer esta batalla?"))return;try{await KZ(H.arenaName,H.profileId,H.opponentId);const O=eX(BJ.profile.firebaseId,H.arenaName);FQ(O)}catch(O){console.error("No se pudo eliminar la batalla del desglose:",O);alert("No se pudo eliminar la batalla. Verificá tu conexión con Firebase e intentá de nuevo.")}},children:"Eliminar"},void 0,!1,void 0,this)]},`${Y}-${H.pairKey}-${L}`,!0,void 0,this))},void 0,!1,void 0,this):Q("p",{className:`text-xs ${Z?"text-emerald-200/70":"text-rose-200/70"}`,children:Z?"No hay batallas ganadas registradas.":"No hay batallas perdidas registradas."},void 0,!1,void 0,this)]},`item-detail-${Y}`,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)})(),TX.isOpen&&TX.profile&&(()=>{const J=TX.profile,X=uX(J),Y=Object.entries(iJ);return Q("div",{className:"fixed inset-0 z-[140] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4",onClick:()=>fQ({isOpen:!1,profile:null}),children:Q("div",{className:"w-full max-w-3xl theme-surface-card border theme-border-secondary rounded-2xl p-6 space-y-6",onClick:(Z)=>Z.stopPropagation(),children:[Q("div",{className:"flex items-start justify-between gap-4",children:[Q("div",{children:[Q("h3",{className:"font-title text-xl font-black text-white tracking-wide",children:[J.nombre," · Puntaje"]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-slate-300 mt-1",children:"Panel de detalle por ítems, características y G2 Score."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:(Z)=>{Z.stopPropagation();fQ({isOpen:!1,profile:null})},className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black",children:"Cerrar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("section",{className:"space-y-3",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-emerald-300",children:"Ítems"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:QQ.map((Z)=>Q("button",{type:"button",onClick:($)=>$.stopPropagation(),className:"px-3 py-2 rounded-lg text-xs font-bold border border-slate-600/80 bg-slate-900/80 text-slate-100",children:[Z,": ",Number(X[Z]||0).toFixed(0)]},Z,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("section",{className:"space-y-3",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-cyan-300",children:"Características"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:Y.map(([Z,$])=>Q("button",{type:"button",onClick:(H)=>H.stopPropagation(),className:"px-3 py-2 rounded-lg text-xs font-bold border border-cyan-500/50 bg-cyan-950/25 text-cyan-100",children:[Z,": ",jZ(J,Z).toFixed(0)]},Z,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("section",{className:"space-y-3",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-[var(--metal-gold)]",children:"G2 Score"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:(Z)=>Z.stopPropagation(),className:"w-full px-4 py-3 rounded-xl text-sm font-black border border-[var(--metal-gold)]/50 bg-[color:color-mix(in_srgb,var(--metal-gold)_18%,rgba(15,23,42,0.82))] text-[var(--metal-gold)]",children:["G2 SCORE TOTAL: ",LJ(J)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)})()]},void 0,!0,void 0,this),D==="CATEGORIAS"&&!XJ&&Q("div",{className:"space-y-10 animate-in fade-in duration-500",children:[Q("div",{className:"flex justify-between items-end",children:[Q("div",{children:Q("h2",{className:"text-3xl font-black italic text-white uppercase tracking-tighter",children:"Carpetas"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("button",{onClick:()=>{mX();hQ(!0)},className:"btn-metal btn-metal--gold px-8 py-3 rounded-xl text-xs",children:"NUEVA CATEGORÍA"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),p.length===0?Q("div",{className:"py-20 border-2 border-dashed theme-border-secondary rounded-2xl text-center",children:Q("p",{className:"text-slate-600 font-black italic uppercase",children:"No hay categorías personalizadas"},void 0,!1,void 0,this)},void 0,!1,void 0,this):Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:p.map((J)=>Q("div",{onClick:()=>RQ(J.firebaseId),className:"group relative bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] rounded-xl overflow-hidden border theme-border-secondary cursor-pointer hover:border-[var(--metal-gold)]/70 transition-all duration-500 shadow-[inset_0_1px_0_rgba(148,163,184,0.2),0_18px_30px_rgba(2,6,23,0.55)] aspect-[3/4]",children:[Q("div",{className:"absolute top-5 right-5 z-50 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300",children:[Q("button",{onClick:(X)=>{X.stopPropagation();OJ({...J,reglas:{...J.reglas,nacionalidades:J.reglas?.nacionalidades||[],profesiones:J.reglas?.profesiones||[],ciudades:J.reglas?.ciudades||[]}});hQ(!0)},className:"w-8 h-8 flex items-center justify-center bg-slate-900/95 hover:bg-[var(--metal-bronze)] text-white rounded-lg border theme-border-secondary transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_6px_16px_rgba(2,6,23,0.45)]",children:Q(l,{name:"pencil",size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("button",{onClick:(X)=>{X.stopPropagation();if(window.confirm("¿Seguro que querés borrar esta carpeta?"))h0(J.firebaseId)},className:"w-8 h-8 flex items-center justify-center bg-slate-900/95 hover:bg-red-600 text-white rounded-lg border theme-border-secondary transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_6px_16px_rgba(2,6,23,0.45)]",children:Q(l,{name:"x",size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"absolute inset-0",children:[Q("img",{src:_J(J.coverImg,"https://via.placeholder.com/400x600?text=Sin+Portada"),className:"w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500",onError:xJ},void 0,!1,void 0,this),Q("div",{className:"absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"absolute bottom-0 left-0 right-0 p-6 text-center",children:[Q("h3",{className:"text-xl font-black text-white uppercase italic tracking-tighter mb-2 drop-shadow-lg",children:J.label},void 0,!1,void 0,this),Q("div",{className:"inline-flex items-center gap-2 bg-[var(--metal-bronze)]/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)]",children:Q("span",{className:"text-[10px] font-black uppercase text-[var(--metal-gold)] tracking-widest",children:[E.filter((X)=>_X(X).includes(J.firebaseId)).length," Perfiles"]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},J.firebaseId,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),WY&&Q("div",{className:"fixed inset-0 z-[140] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm",children:Q("div",{className:"bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] w-full max-w-2xl rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(148,163,184,0.22),0_24px_60px_rgba(2,6,23,0.65)] border theme-border-secondary max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-300",children:[Q("button",{onClick:()=>uJ(!1),className:"p-2 hover:bg-slate-800 rounded-full transition-colors",children:Q(l,{name:"x",size:20,className:"text-slate-400"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("form",{onSubmit:I0,className:"flex-1 overflow-y-auto p-12 space-y-12",children:[Q("div",{className:"grid grid-cols-1 gap-16",children:Q("div",{className:"space-y-8",children:[Q("div",{className:"flex flex-col items-center gap-6",children:[Q("div",{className:"flex items-center gap-4 self-start",children:[Q("div",{className:"w-12 h-12 bg-[var(--metal-bronze)] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-cyan-900/50",children:Q(l,{name:t?"user":"user-plus"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("h3",{className:"text-xl font-black italic tracking-tighter text-white",children:t?"Editar Perfil":"Información del Perfil"},void 0,!1,void 0,this),t&&Q("button",{type:"button",onClick:()=>{B1({...P,firebaseId:t})},className:"btn-metal btn-metal--gold ml-4 px-4 py-2 rounded-xl text-[10px] flex items-center gap-2",children:[Q(l,{name:"image",size:14},void 0,!1,void 0,this),"Multimedia"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"w-48 h-60 rounded-2xl border-2 border-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.4)] overflow-hidden bg-slate-900 flex items-center justify-center relative group",children:P.fotos.length>0&&P.fotos[0]!==""?Q("img",{src:_J(P.fotos[0],OQ),className:"w-full h-full object-cover",alt:"Preview",onError:xJ},void 0,!1,void 0,this):Q("div",{className:"text-center p-4",children:[Q(l,{name:"image",size:32,className:"mx-auto text-slate-700 mb-2"},void 0,!1,void 0,this),Q("p",{className:"text-[9px] font-bold text-slate-600 uppercase tracking-widest",children:"Vista Previa"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-4",children:[Q("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[Q("div",{className:"rounded-2xl border border-emerald-400/30 bg-emerald-950/20 p-4",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300",children:"Datos actuales"},void 0,!1,void 0,this),$X.completed.length>0?Q("ul",{className:"mt-3 space-y-1",children:$X.completed.map((J)=>Q("li",{className:"text-xs text-emerald-100/90",children:[Q("span",{className:"font-black",children:[J.label,":"]},void 0,!0,void 0,this)," ",J.preview]},J.key,!0,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"mt-3 text-xs text-emerald-100/70",children:"Todavía no hay datos cargados."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"rounded-2xl border border-amber-300/30 bg-amber-950/20 p-4",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-amber-200",children:"Datos faltantes por completar"},void 0,!1,void 0,this),$X.missing.length>0?Q("ul",{className:"mt-3 space-y-1",children:$X.missing.map((J)=>Q("li",{className:"text-xs text-amber-100/90",children:Q("span",{className:"font-black",children:J.label},void 0,!1,void 0,this)},J.key,!1,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"mt-3 text-xs text-amber-100/70",children:"¡Perfil completo en esta sección!"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-2 gap-4",children:[Q("input",{required:!0,placeholder:"Nombre Artístico",className:"col-span-2 w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none focus:ring-2 focus:ring-[var(--glow-gold)] text-white font-bold",value:P.nombre,onChange:(J)=>o({...P,nombre:J.target.value})},void 0,!1,void 0,this),Q("div",{className:"col-span-2 space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"URL de la Foto (Avatar)"},void 0,!1,void 0,this),Q("input",{placeholder:"https://imagen.com/foto.jpg",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none focus:ring-2 focus:ring-[var(--glow-gold)] text-white font-bold text-xs",value:P.fotos[0]||"",onChange:(J)=>o((X)=>HZ(X,J.target.value))},void 0,!1,void 0,this),Q("input",{type:"file",accept:"image/*,.gif",onChange:E0,disabled:UQ||yQ,className:"w-full theme-surface-soft border border-dashed theme-border-secondary p-4 rounded-xl outline-none text-slate-200 font-semibold text-xs file:mr-3 file:rounded-lg file:border-0 file:bg-cyan-500/20 file:px-3 file:py-2 file:text-cyan-200 file:font-black"},void 0,!1,void 0,this),UQ&&Q("p",{className:"text-[11px] font-bold text-cyan-300",children:"Subiendo foto al servidor..."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"Nacimiento"},void 0,!1,void 0,this),Q("input",{type:"date",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:P.fechaNacimiento,onChange:(J)=>o({...P,fechaNacimiento:J.target.value})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"Estatura (cm)"},void 0,!1,void 0,this),Q("input",{placeholder:"170",type:"number",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:P.estaturaCm,onChange:(J)=>o({...P,estaturaCm:J.target.value})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("input",{placeholder:"Nacionalidad",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:P.nacionalidad,onChange:(J)=>o({...P,nacionalidad:J.target.value})},void 0,!1,void 0,this),Q("input",{placeholder:"Ciudad",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:P.ciudad,onChange:(J)=>o({...P,ciudad:J.target.value})},void 0,!1,void 0,this),Q("div",{className:"col-span-2 space-y-1 group",children:[Q("label",{className:"text-[9px] font-black text-[var(--metal-gold)]/60 ml-4 uppercase tracking-widest transition-colors group-focus-within:text-[var(--metal-gold)]",children:"Profesión"},void 0,!1,void 0,this),Q("select",{required:!0,className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold appearance-none cursor-pointer transition-all duration-300 focus:border-[var(--metal-gold)] focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] focus:bg-slate-900",value:P.profesion,onChange:(J)=>o({...P,profesion:J.target.value}),children:[Q("option",{value:"",className:"theme-surface-card",children:"Seleccionar..."},void 0,!1,void 0,this),Q("option",{value:"Cantante",className:"theme-surface-card",children:"\uD83C\uDFA4 Cantante"},void 0,!1,void 0,this),Q("option",{value:"Actriz",className:"theme-surface-card",children:"\uD83C\uDFAC Actriz"},void 0,!1,void 0,this),Q("option",{value:"Modelo",className:"theme-surface-card",children:"\uD83D\uDC60 Modelo"},void 0,!1,void 0,this),Q("option",{value:"NSFW",className:"theme-surface-card",children:"\uD83D\uDD25 NSFW"},void 0,!1,void 0,this),Q("option",{value:"Influencer",className:"theme-surface-card",children:"\uD83D\uDCF1 Influencer"},void 0,!1,void 0,this),Q("option",{value:"Bailarina y Atleta",className:"theme-surface-card",children:"\uD83D\uDC83\uD83C\uDFCB️‍♀️ Bailarina y Atleta"},void 0,!1,void 0,this),Q("option",{value:"Otro",className:"theme-surface-card",children:"\uD83D\uDCD6 Otro"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--metal-gold)]/50",children:Q(l,{name:"chevron-down",size:18},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"flex gap-4",children:[t&&Q("button",{type:"button",onClick:y0,className:"btn-metal btn-metal--danger px-10 py-8 rounded-xl text-xs",children:Q(l,{name:"trash-2",size:20},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("button",{type:"submit",disabled:yQ||UQ,className:"btn-metal btn-metal--gold flex-1 py-8 rounded-xl text-xs disabled:cursor-not-allowed disabled:opacity-60",children:UQ?"Subiendo archivo...":yQ?"Guardando...":t?"Actualizar Registro":"Guardar Perfil"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),lZ&&Q("div",{className:"fixed inset-0 z-[120] bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-6",onClick:pX,children:Q("div",{className:"w-full max-w-xl theme-surface-card border theme-border-secondary rounded-3xl p-8 space-y-6",onClick:(J)=>J.stopPropagation(),children:[Q("div",{className:"space-y-3",children:[Q("p",{className:"text-xs font-black uppercase tracking-[0.24em] text-red-300",children:"Acción destructiva"},void 0,!1,void 0,this),Q("h3",{className:"text-2xl font-black italic text-white tracking-tight",children:"¿Eliminar perfil?"},void 0,!1,void 0,this),Q("p",{className:"text-sm text-slate-300",children:["Esta acción eliminará de forma permanente a ",Q("span",{className:"font-black text-white",children:RJ?.nombre||"este perfil"},void 0,!1,void 0,this)," y sus datos en Firebase. No se puede deshacer."]},void 0,!0,void 0,this),UY&&Q("div",{className:"rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-xs font-semibold text-red-200",children:UY},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex justify-end gap-3",children:[Q("button",{type:"button",onClick:pX,className:"btn-metal btn-metal--silver px-6 py-3 rounded-xl text-[10px]",children:"Cancelar"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:u0,className:"btn-metal btn-metal--danger px-6 py-3 rounded-xl text-[10px]",children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),OY&&Q("div",{className:"fixed inset-0 z-[140] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm",children:Q("div",{className:"bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] w-full max-w-5xl rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(148,163,184,0.22),0_24px_60px_rgba(2,6,23,0.65)] border theme-border-secondary max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-300",children:[Q("button",{type:"button",onClick:()=>{mX();hQ(!1)},className:"p-4 hover:bg-slate-800 rounded-full transition-all",children:Q(l,{name:"x",size:24,className:"text-slate-400"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("form",{onSubmit:g0,className:"flex-1 overflow-y-auto p-12 space-y-12",children:[Q("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[Q("div",{className:"space-y-8",children:[Q("div",{className:"flex items-center gap-4",children:[Q("div",{className:"w-12 h-12 bg-[var(--metal-bronze)] rounded-2xl flex items-center justify-center text-white",children:Q(l,{name:"scroll"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("h3",{className:"text-xl font-black italic text-white",children:"Nuevo Archivo del Reino"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-4",children:[Q("input",{required:!0,placeholder:"Nombre de la Carpeta",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none font-bold text-lg text-white",value:G.label,onChange:(J)=>OJ({...G,label:J.target.value})},void 0,!1,void 0,this),Q("div",{className:"w-full",children:Q("div",{className:"space-y-1 w-full",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"URL de Portada"},void 0,!1,void 0,this),Q("input",{placeholder:"https://...",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold text-xs",value:G.coverImg,onChange:(J)=>OJ({...G,coverImg:J.target.value})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-6",children:[Q("h4",{className:"text-[10px] font-black uppercase text-slate-500 tracking-widest flex items-center gap-2",children:[Q(l,{name:"shield",size:12},void 0,!1,void 0,this)," Mandatos de Clasificación del Consejo"]},void 0,!0,void 0,this),Q("div",{className:"p-8 bg-slate-950/50 border theme-border-secondary rounded-2xl space-y-6",children:[Q("div",{className:"grid grid-cols-2 gap-4",children:[Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"NACIONALIDADES"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]",children:G.reglas.nacionalidades.map((J)=>Q("span",{className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1",children:[J," ",Q("button",{type:"button",onClick:()=>OJ({...G,reglas:{...G.reglas,nacionalidades:G.reglas.nacionalidades.filter((X)=>X!==J)}}),children:"×"},void 0,!1,void 0,this)]},J,!0,void 0,this))},void 0,!1,void 0,this),Q("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(J)=>{if(J.target.value&&!G.reglas.nacionalidades.includes(J.target.value))OJ({...G,reglas:{...G.reglas,nacionalidades:[...G.reglas.nacionalidades,J.target.value]}})},children:[Q("option",{value:"",children:"Añadir país..."},void 0,!1,void 0,this),C0.filter((J)=>J!=="Todas").map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"CIUDADES"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]",children:G.reglas.ciudades.map((J)=>Q("span",{className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1",children:[J," ",Q("button",{type:"button",onClick:()=>OJ({...G,reglas:{...G.reglas,ciudades:G.reglas.ciudades.filter((X)=>X!==J)}}),children:"×"},void 0,!1,void 0,this)]},J,!0,void 0,this))},void 0,!1,void 0,this),Q("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(J)=>{if(J.target.value&&!G.reglas.ciudades.includes(J.target.value))OJ({...G,reglas:{...G.reglas,ciudades:[...G.reglas.ciudades,J.target.value]}})},children:[Q("option",{value:"",children:"Añadir ciudad..."},void 0,!1,void 0,this),R0.filter((J)=>J!=="Todas").map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"PROFESIONES"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]",children:G.reglas.profesiones.map((J)=>Q("span",{className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1",children:[J," ",Q("button",{type:"button",onClick:()=>OJ({...G,reglas:{...G.reglas,profesiones:G.reglas.profesiones.filter((X)=>X!==J)}}),children:"×"},void 0,!1,void 0,this)]},J,!0,void 0,this))},void 0,!1,void 0,this),Q("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(J)=>{if(J.target.value&&!G.reglas.profesiones.includes(J.target.value))OJ({...G,reglas:{...G.reglas,profesiones:[...G.reglas.profesiones,J.target.value]}})},children:[Q("option",{value:"",children:"Añadir profesión..."},void 0,!1,void 0,this),Object.keys(qY).map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-2 gap-2",children:[Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"EDAD MIN"},void 0,!1,void 0,this),Q("input",{type:"number",placeholder:"18",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-white",value:G.reglas.edadMin,onChange:(J)=>OJ({...G,reglas:{...G.reglas,edadMin:J.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"EDAD MAX"},void 0,!1,void 0,this),Q("input",{type:"number",placeholder:"30",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-white",value:G.reglas.edadMax,onChange:(J)=>OJ({...G,reglas:{...G.reglas,edadMax:J.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1 pt-4 border-t theme-border-secondary",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"Condición de Score"},void 0,!1,void 0,this),Q("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[Q("select",{className:"theme-surface-card p-3 rounded-xl text-[10px] font-bold outline-none border theme-border-secondary text-white",value:G.reglas.caracteristica,onChange:(J)=>OJ({...G,reglas:{...G.reglas,caracteristica:J.target.value}}),children:QQ.map((J)=>Q("option",{children:J},J,!1,void 0,this))},void 0,!1,void 0,this),Q("select",{className:"theme-surface-card p-3 rounded-xl text-[10px] font-bold outline-none border theme-border-secondary text-white",value:G.reglas.operador,onChange:(J)=>OJ({...G,reglas:{...G.reglas,operador:J.target.value}}),children:[Q("option",{children:"Superior a"},void 0,!1,void 0,this),Q("option",{children:"Inferior a"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("input",{type:"number",placeholder:"Umbral (0-10)",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-[var(--metal-gold)]",value:G.reglas.umbral,onChange:(J)=>OJ({...G,reglas:{...G.reglas,umbral:J.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"submit",className:"btn-metal btn-metal--gold w-full py-8 rounded-xl text-xs",children:"CREAR CARPETA INTELIGENTE"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},G1=ReactDOM.createRoot(document.getElementById("root"));G1.render(Q(w1,{},void 0,!1,void 0,this));