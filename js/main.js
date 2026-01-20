const breeds = [
  {
    id:"golden-retriever",
    name:"Golden Retriever",
    size:"grande",
    energy:"media",
    summary:"Cariñoso, paciente y muy dócil. Excelente para familias y convivencia social.",
    points:[
      "Alta tolerancia con niños y personas mayores",
      "Ejercicio regular (juego + caminata)",
      "Cepillado frecuente por el tipo de pelaje",
      "Muy recomendable para terapia y asistencia"
    ]
  },
  {
    id:"pastor-aleman",
    name:"Pastor Alemán",
    size:"grande",
    energy:"alta",
    summary:"Extremadamente inteligente, leal y protector. Aprende rápido y necesita estructura.",
    points:[
      "Entrenamiento constante y socialización temprana",
      "Actividad física y mental diaria (no solo paseos)",
      "Excelente guardián y perro de trabajo",
      "Ideal para dueños responsables con rutinas"
    ]
  },
  {
    id:"labrador-retriever",
    name:"Labrador Retriever",
    size:"grande",
    energy:"alta",
    summary:"Sociable, confiable y equilibrado. Muy fácil de entrenar y gran compañero familiar.",
    points:[
      "Alta inteligencia emocional y adaptabilidad",
      "Requiere ejercicio diario + estimulación mental",
      "Ideal como perro familiar, de asistencia o terapia",
      "Ojo con el peso: tiende a comer de más"
    ]
  },
  {
    id:"bulldog-ingles",
    name:"Bulldog Inglés",
    size:"mediano",
    energy:"baja",
    summary:"Tranquilo, afectuoso y poco activo. Prefiere la vida hogareña y rutinas calmadas.",
    points:[
      "Paseos cortos y evitar calor fuerte",
      "Sensibilidad respiratoria: controlar esfuerzo",
      "Tendencia a sobrepeso: dieta y control",
      "Ideal para personas calmadas"
    ]
  },
  {
    id:"bulldog-frances",
    name:"Bulldog Francés",
    size:"pequeño",
    energy:"media",
    summary:"Juguetón y muy apegado. Excelente perro de compañía y buena opción para departamento.",
    points:[
      "Ejercicio moderado (juego + paseos cortos)",
      "Necesita atención: no le gusta estar solo",
      "Evitar calor excesivo",
      "Muy expresivo y sociable"
    ]
  },
  {
    id:"poodle",
    name:"Poodle (Caniche)",
    size:"mediano",
    energy:"alta",
    summary:"Una de las razas más inteligentes. Aprende rápido, es activo y muy entrenable.",
    points:[
      "Ideal para trucos, obediencia y deportes caninos",
      "No suelta mucho pelo, pero requiere grooming",
      "Necesita retos mentales constantes",
      "Perfecto para dueños activos"
    ]
  },
  {
    id:"chihuahua",
    name:"Chihuahua",
    size:"pequeño",
    energy:"media",
    summary:"Pequeño, alerta y valiente. Se apega fuerte a una persona y puede ser territorial.",
    points:[
      "Socialización temprana para evitar reactividad",
      "Paseos cortos y rutinas constantes",
      "Cuidado dental importante",
      "Ideal para espacios pequeños"
    ]
  },
  {
    id:"husky-siberiano",
    name:"Husky Siberiano",
    size:"grande",
    energy:"alta",
    summary:"Independiente, energético y resistente. Necesita mucho ejercicio y espacio.",
    points:[
      "No ideal para dueños primerizos",
      "Requiere actividad intensa y constancia",
      "Le encanta correr y explorar (ojo escapes)",
      "Tolera mejor climas fríos"
    ]
  },
  {
    id:"beagle",
    name:"Beagle",
    size:"mediano",
    energy:"alta",
    summary:"Curioso, alegre y muy olfativo. Ama seguir rastros y necesita paseos largos.",
    points:[
      "Gran olfato: puede distraerse con facilidad",
      "Sociable, aunque algo terco",
      "Ideal para familias activas",
      "Juegos de olfato lo cansan bastante"
    ]
  },
  {
    id:"rottweiler",
    name:"Rottweiler",
    size:"grande",
    energy:"media",
    summary:"Fuerte, seguro y muy leal. Protector con su familia; necesita liderazgo firme.",
    points:[
      "Socialización temprana obligatoria",
      "Ejercicio regular y estructura",
      "Excelente guardián",
      "Dueño responsable y consistente"
    ]
  },
  {
    id:"doberman",
    name:"Dóberman",
    size:"grande",
    energy:"alta",
    summary:"Atlético, rápido y protector. Muy leal y sensible con su dueño.",
    points:[
      "Ejercicio diario + estimulación mental",
      "Excelente para seguridad y compañía activa",
      "Necesita rutina y límites claros",
      "Mejor con refuerzo positivo"
    ]
  },
  {
    id:"alaskan-malamute",
    name:"Alaskan Malamute",
    size:"grande",
    energy:"alta",
    summary:"Grande, fuerte y trabajador. Sociable pero dominante; requiere experiencia.",
    points:[
      "Ejercicio intenso y espacio",
      "Ideal para climas fríos",
      "Pelaje: cepillado frecuente",
      "Mejor con dueños experimentados"
    ]
  },
  {
    id:"border-collie",
    name:"Border Collie",
    size:"mediano",
    energy:"alta",
    summary:"Considerado el perro más inteligente. Necesita trabajo y retos mentales constantes.",
    points:[
      "No recomendado para vida sedentaria",
      "Entrenamiento avanzado y deportes caninos",
      "Requiere actividad diaria real",
      "Excelente para dueños muy activos"
    ]
  },
  {
    id:"schnauzer",
    name:"Schnauzer",
    size:"mediano",
    energy:"media",
    summary:"Alerta, obediente y protector. Muy buen guardián y gran compañero familiar.",
    points:[
      "Disponible en varios tamaños",
      "Rutina de paseos y juego moderado",
      "Grooming recomendado",
      "Ideal para familias que quieren un perro vigilante"
    ]
  }
];

const $ = (s) => document.querySelector(s);

const grid = $("#grid");
const empty = $("#empty");
const search = $("#search");
const size = $("#size");
const energy = $("#energy");
const clearBtn = $("#clear");
const resultsChip = $("#resultsChip");

const modal = $("#modal");
const modalBody = $("#modalBody");
const modalBackdrop = $("#modalBackdrop");
const modalClose = $("#modalClose");

function imagePath(id){
  return `assets/imagenes/${id}.png`;
}

function openModal(b){
  modalBody.innerHTML = `
    <div class="modal-grid">
      <div class="modal-img">
        <img src="${imagePath(b.id)}" alt="${b.name}"
          onerror="this.outerHTML='<div style=&quot;height:100%;display:grid;place-items:center;font-weight:900;color:rgba(31,31,31,.7)&quot;>Imagen no encontrada</div>'">
      </div>
      <div>
        <h3 id="modalTitle">${b.name}</h3>
        <p>${b.summary}</p>
        <p style="margin:10px 0 6px;font-weight:900;">Detalles</p>
        <ul class="list">
          <li><b>Tamaño:</b> ${b.size}</li>
          <li><b>Energía:</b> ${b.energy}</li>
        </ul>
        <p style="margin:12px 0 6px;font-weight:900;">Puntos clave</p>
        <ul class="list">
          ${b.points.map(x => `<li>${x}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal(){
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

modalBackdrop?.addEventListener("click", closeModal);
modalClose?.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape") closeModal();
});

function buildItem(b){
  const item = document.createElement("article");
  item.className = "breed-item";

  const photo = document.createElement("div");
  photo.className = "breed-photo";

  const img = document.createElement("img");
  img.src = imagePath(b.id);
  img.alt = b.name;
  img.loading = "lazy";
  img.onerror = () => {
    img.style.display = "none";
    photo.innerHTML = `<div style="font-weight:900;color:rgba(31,31,31,.7);text-align:center;">
      Imagen no encontrada<br><small>${imagePath(b.id)}</small>
    </div>`;
  };
  photo.appendChild(img);

  const panel = document.createElement("div");
  panel.className = "breed-panel";

  const name = document.createElement("h3");
  name.className = "breed-name";
  name.textContent = b.name;

  const badges = document.createElement("div");
  badges.className = "badges";
  badges.innerHTML = `
    <span class="badge">Tamaño: ${b.size}</span>
    <span class="badge">Energía: ${b.energy}</span>
  `;

  const summary = document.createElement("p");
  summary.className = "breed-summary";
  summary.textContent = b.summary;

  const actions = document.createElement("div");
  actions.className = "breed-actions";

  const btn = document.createElement("button");
  btn.className = "smallbtn";
  btn.textContent = "Ver más";
  btn.addEventListener("click", () => openModal(b));

  actions.appendChild(btn);

  panel.appendChild(name);
  panel.appendChild(badges);
  panel.appendChild(summary);
  panel.appendChild(actions);

  item.appendChild(photo);
  item.appendChild(panel);

  return item;
}

function render(){
  const q = (search.value || "").toLowerCase().trim();
  const s = size.value;
  const e = energy.value;

  const filtered = breeds.filter(b => {
    const matchQ = !q || b.name.toLowerCase().includes(q);
    const matchS = (s === "all") || (b.size === s);
    const matchE = (e === "all") || (b.energy === e);
    return matchQ && matchS && matchE;
  });

  grid.innerHTML = "";
  filtered.forEach(b => grid.appendChild(buildItem(b)));

  empty.style.display = filtered.length ? "none" : "block";
  resultsChip.textContent = `Mostrando ${filtered.length}`;
}

search.addEventListener("input", render);
size.addEventListener("change", render);
energy.addEventListener("change", render);
clearBtn.addEventListener("click", () => {
  search.value = "";
  size.value = "all";
  energy.value = "all";
  render();
});

render();



