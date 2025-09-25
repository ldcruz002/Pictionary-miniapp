// ==========================
// Palabras con dificultad
// ==========================
const D = { FACIL:'facil', MEDIA:'media', DIFICIL:'dificil' };
function W(w, d='media'){ return { w, d }; }

const WORDS = {
  objetos: [
    W("Lámpara",D.FACIL), W("Reloj",D.FACIL), W("Tijeras",D.MEDIA), W("Paraguas",D.FACIL), W("Escalera",D.MEDIA),
    W("Cámara",D.MEDIA), W("Telescopio",D.DIFICIL), W("Micrófono",D.MEDIA), W("Bicicleta",D.MEDIA), W("Maleta",D.FACIL),
    W("Mapa",D.MEDIA), W("Anillo",D.FACIL), W("Llave",D.FACIL), W("Brocha",D.FACIL), W("Gafas",D.FACIL), W("Libro",D.FACIL),
    W("Imán",D.MEDIA), W("Dado",D.FACIL), W("Cohete",D.MEDIA), W("Robot",D.DIFICIL)
  ],
  animales: [
    W("Pulpo",D.MEDIA), W("León",D.FACIL), W("Panda",D.FACIL), W("Colibrí",D.MEDIA), W("Tiburón",D.MEDIA), W("Elefante",D.MEDIA),
    W("Camaleón",D.DIFICIL), W("Jirafa",D.MEDIA), W("Cangrejo",D.MEDIA), W("Lobo",D.MEDIA), W("Zorro",D.FACIL), W("Koala",D.FACIL),
    W("Ballena",D.MEDIA), W("Murciélago",D.MEDIA), W("Pingüino",D.FACIL), W("Caballito de mar",D.DIFICIL), W("Abeja",D.FACIL),
    W("Búho",D.FACIL), W("Rinoceronte",D.MEDIA), W("Iguana",D.MEDIA)
  ],
  acciones: [
    W("Correr",D.FACIL), W("Saltar",D.FACIL), W("Atrapar",D.MEDIA), W("Coser",D.MEDIA), W("Nadar",D.FACIL), W("Bailar",D.FACIL),
    W("Pintar",D.FACIL), W("Cocinar",D.FACIL), W("Leer",D.FACIL), W("Escribir",D.FACIL), W("Tocar guitarra",D.MEDIA), W("Cavar",D.MEDIA),
    W("Soplar",D.MEDIA), W("Tomar fotos",D.FACIL), W("Cargar",D.MEDIA), W("Navegar",D.DIFICIL), W("Patear",D.FACIL), W("Regar",D.FACIL),
    W("Cepillar",D.MEDIA), W("Pescar",D.FACIL)
  ],
  lugares: [
    W("Faro",D.MEDIA), W("Biblioteca",D.MEDIA), W("Puerto",D.MEDIA), W("Montaña",D.MEDIA), W("Desierto",D.MEDIA), W("Museo",D.DIFICIL),
    W("Castillo",D.MEDIA), W("Estadio",D.MEDIA), W("Selva",D.MEDIA), W("Granja",D.FACIL), W("Playa",D.FACIL), W("Aeropuerto",D.DIFICIL),
    W("Mercado",D.MEDIA), W("Templo",D.MEDIA), W("Glaciar",D.DIFICIL), W("Isla",D.FACIL), W("Parque",D.FACIL), W("Volcán",D.MEDIA),
    W("Bosque",D.MEDIA), W("Cueva",D.MEDIA)
  ],
  profesiones: [
    W("Médico",D.FACIL), W("Carpintero",D.MEDIA), W("Arquitecta",D.MEDIA), W("Chef",D.FACIL), W("Bombero",D.MEDIA), W("Piloto",D.MEDIA),
    W("Bailarina",D.MEDIA), W("Reportero",D.MEDIA), W("Jardinero",D.FACIL), W("Programador",D.DIFICIL), W("Abogada",D.MEDIA),
    W("Mecánico",D.MEDIA), W("Panadera",D.FACIL), W("Fotógrafo",D.MEDIA), W("Astronauta",D.DIFICIL), W("Maestra",D.FACIL),
    W("Electricista",D.MEDIA), W("Diseñadora",D.MEDIA), W("Albañil",D.MEDIA), W("Músico",D.MEDIA)
  ],
  comida: [
    W("Taco",D.FACIL), W("Sushi",D.FACIL), W("Sandía",D.FACIL), W("Pastel",D.FACIL), W("Chocolate",D.FACIL), W("Quesadilla",D.FACIL),
    W("Ensalada",D.FACIL), W("Hamburguesa",D.FACIL), W("Helado",D.FACIL), W("Mole",D.MEDIA), W("Tamales",D.FACIL), W("Churros",D.FACIL),
    W("Paella",D.MEDIA), W("Arepa",D.MEDIA), W("Ceviche",D.MEDIA), W("Café",D.FACIL), W("Naranja",D.FACIL), W("Pozole",D.FACIL),
    W("Empanada",D.FACIL), W("Pasta",D.FACIL)
  ],
  ebc: [
    W("Campus",D.MEDIA), W("Beca",D.FACIL), W("Emprendimiento",D.DIFICIL), W("Catapulta",D.MEDIA), W("Aula",D.FACIL), W("Biblioteca EBC",D.MEDIA),
    W("Caso de negocio",D.DIFICIL), W("Mentor",D.MEDIA), W("Pitch",D.MEDIA), W("Plan de estudios",D.DIFICIL), W("Excelencia",D.DIFICIL),
    W("Comunidad EBC",D.DIFICIL), W("Vinculación",D.DIFICIL), W("Prestigio",D.DIFICIL), W("Servicio",D.MEDIA), W("Costo–beneficio",D.DIFICIL),
    W("Bolsa de trabajo",D.MEDIA), W("Alumno",D.FACIL), W("Egresado",D.MEDIA)
  ],
  negocios: [
    W("Factura",D.MEDIA), W("Balance",D.DIFICIL), W("Flujo de caja",D.DIFICIL), W("Marketing",D.MEDIA), W("Logística",D.DIFICIL),
    W("Prototipo",D.MEDIA), W("Startup",D.MEDIA), W("Inversor",D.MEDIA), W("KPI",D.DIFICIL), W("Pitch deck",D.DIFICIL), W("Benchmark",D.DIFICIL),
    W("Branding",D.MEDIA), W("Auditoría",D.DIFICIL), W("Inventario",D.MEDIA), W("Margen",D.DIFICIL), W("Demanda",D.MEDIA), W("Oferta",D.MEDIA),
    W("Proveedor",D.MEDIA), W("Cliente",D.FACIL)
  ],
  mexicanismos: [
    W("Nopal",D.FACIL), W("Mariachi",D.MEDIA), W("Lucha libre",D.MEDIA), W("Catrina",D.MEDIA), W("Piñata",D.FACIL), W("Huipil",D.MEDIA),
    W("Sombrero charro",D.MEDIA), W("Tlacuache",D.MEDIA), W("Chapulín",D.MEDIA), W("Xoloitzcuintle",D.DIFICIL), W("Alebrije",D.DIFICIL),
    W("Tianguis",D.MEDIA), W("Metate",D.MEDIA), W("Molcajete",D.MEDIA), W("Sarape",D.MEDIA), W("Huarache",D.MEDIA), W("Barranca",D.MEDIA)
  ]
};

const ALL = Object.values(WORDS).flat();

// ==========================
// DOM refs
// ==========================
const elWord = document.getElementById('word');
const elTime = document.getElementById('time');
const elBar  = document.getElementById('bar');
const elCat  = document.getElementById('category');
const elDiff = document.getElementById('difficulty');
const elCatLabel = document.getElementById('catLabel');

const btnGenerate = document.getElementById('btnGenerate');
const btnStart = document.getElementById('btnStart');
const btnReset = document.getElementById('btnReset');
const btnReveal = document.getElementById('btnReveal');
const btnHide = document.getElementById('btnHide');
const btnCopy = document.getElementById('btnCopy');
const btnFull = document.getElementById('btnFull');
const btnPlus30 = document.getElementById('btn30');
const btnMinus15 = document.getElementById('btn-15');
const btnBeep = document.getElementById('btnBeep');

// ==========================
// Estado del juego
// ==========================
let duration = 90; // segundos
let remaining = duration;
let interval = null;
let currentWord = '';
let hidden = false;

function fmtTime(s){
  const m = Math.floor(s/60).toString().padStart(2,'0');
  const r = Math.floor(s%60).toString().padStart(2,'0');
  return `${m}:${r}`;
}

function setTimeUI(s){
  elTime.textContent = fmtTime(s);
  const progress = 100 * (1 - (s / duration));
  elBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}

function randomFrom(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}

function chooseByDifficulty(list){
  const diff = elDiff.value; // 'facil' | 'media' | 'dificil' | 'mix'
  if(diff !== 'mix'){
    const filtered = list.filter(x => x.d === diff);
    return filtered.length ? randomFrom(filtered) : randomFrom(list);
  }
  // ⚖️ Equilibrada: 40% fácil · 40% media · 20% difícil
  const roll = Math.random();
  let target = 'facil';
  if(roll > 0.4 && roll <= 0.8) target = 'media';
  else if(roll > 0.8) target = 'dificil';
  const pool = list.filter(x => x.d === target);
  return (pool.length ? randomFrom(pool) : randomFrom(list));
}

function pickWord(){
  const cat = elCat.value;
  const pool = (cat === 'todas') ? ALL : WORDS[cat];
  const choice = chooseByDifficulty(pool);
  currentWord = choice.w;
  elWord.textContent = currentWord;
  elCatLabel.textContent = (cat === 'todas') ? 'Todas' : elCat.options[elCat.selectedIndex].text;
}

function startTimer(){
  if(interval) return; // ya corriendo
  const startAt = Date.now();
  const target = startAt + remaining*1000;
  blink(false);
  interval = setInterval(()=>{
    const now = Date.now();
    remaining = Math.max(0, Math.round((target - now)/1000));
    setTimeUI(remaining);
    if(remaining <= 0){
      stopTimer();
      beep();
      blink(true);
    }
  }, 200);
}

function stopTimer(){ clearInterval(interval); interval = null; }

function resetTimer(seconds = 90){
  stopTimer(); duration = seconds; remaining = seconds;
  setTimeUI(remaining); elBar.style.width = '0%'; blink(false);
}

function toggleHide(){ hidden = !hidden; elWord.classList.toggle('hidden', hidden); }
function reveal(){ hidden = false; elWord.classList.remove('hidden'); if(currentWord) navigator.clipboard?.writeText(currentWord).catch(()=>{}); }

// Beep
let audioCtx;
function beep(){
  try{
    audioCtx = audioCtx || new (window.AudioContext||window.webkitAudioContext)();
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type='triangle';
    o.frequency.setValueAtTime(880,audioCtx.currentTime);
    g.gain.setValueAtTime(0.0001,audioCtx.currentTime);
    o.connect(g); g.connect(audioCtx.destination);
    g.gain.exponentialRampToValueAtTime(0.6,audioCtx.currentTime+0.02);
    o.start();
    g.gain.exponentialRampToValueAtTime(0.0001,audioCtx.currentTime+0.6);
    o.stop(audioCtx.currentTime+0.65);
  }catch(e){}
}

function blink(active){
  if(active){
    document.body.animate([
      {filter:'brightness(1)'},
      {filter:'brightness(1.8)'},
      {filter:'brightness(1)'}
    ], {duration:900, iterations:3});
  }
}

// Eventos
btnGenerate.addEventListener('click', ()=>{ pickWord(); hidden=false; elWord.classList.remove('hidden'); });
btnStart.addEventListener('click', ()=> startTimer());
btnReset.addEventListener('click', ()=> resetTimer());
btnReveal.addEventListener('click', ()=> reveal());
btnHide.addEventListener('click', ()=> toggleHide());
btnCopy.addEventListener('click', ()=> { if(currentWord) navigator.clipboard?.writeText(currentWord); });
btnFull.addEventListener('click', ()=>{ const el = document.documentElement; if(!document.fullscreenElement){ el.requestFullscreen?.(); } else { document.exitFullscreen?.(); } });
btnPlus30.addEventListener('click', ()=>{ remaining = Math.min(600, remaining + 30); setTimeUI(remaining); });
btnMinus15.addEventListener('click', ()=>{ remaining = Math.max(0, remaining - 15); setTimeUI(remaining); });
btnBeep.addEventListener('click', ()=> beep());

// Accesos rápidos
window.addEventListener('keydown', (e)=>{
  if(e.code === 'Space'){ e.preventDefault(); if(interval) { stopTimer(); } else { startTimer(); } }
  if(e.key.toLowerCase() === 'g'){ pickWord(); }
});

// Inicial
resetTimer(90);
