const details = {
  "traveler-jose": {
    icon: "JM", title: "José María Perez Garcia", subtitle: "Datos del viajero.",
    rows: [["Nombre", "José María Perez Garcia"], ["Fecha de nacimiento", '<span class="sensitive">15/11/2000</span>'], ["Pasaporte", '<span class="sensitive">N00783037</span>'], ["Expira", '<span class="sensitive">2032-01-04</span>'], ["Nacionalidad", "Mexicana"], ["Tipo", "Pasaporte mexicano"]]
  },
  "traveler-maria": {
    icon: "MH", title: "Maria Hakim Morfin", subtitle: "Datos de la viajera.",
    rows: [["Nombre", "Maria Hakim Morfin"], ["Fecha de nacimiento", '<span class="sensitive">10/05/2001</span>'], ["Pasaporte", '<span class="sensitive">G40226002</span>'], ["Expira", '<span class="sensitive">2031-02-23</span>'], ["Nacionalidad", "Mexicana"], ["Tipo", "Pasaporte mexicano"]]
  },
  "cdmx-madrid": {
    icon: "✈", title: "Ciudad de México → Madrid", subtitle: "Aeroméxico AM 1 · jueves 16 de julio de 2026.",
    rows: [["Salida", "17:25 · Ciudad de México (MEX)"], ["Llegada", "12:35 · Madrid (MAD) · 17 julio"], ["Duración", "11 h 10 min"], ["Confirmación", '<span class="sensitive">HXOWUR</span>'], ["Pasajeros", "José María Perez Garcia · Maria Hakim Morfin"]],
    note: "No se adjunta documento: los boletos están en la app de Aeroméxico."
  },
  "madrid-hotel": {
    icon: "⌂", title: "One Shot Fortuny", subtitle: "Primera estancia en Madrid, por 3 noches.",
    rows: [["Entrada", "17 julio 2026"], ["Salida", "20 julio 2026"], ["Dirección", "Calle Fortuny 7, 28010 Madrid, España"], ["Confirmación", '<span class="sensitive">26063091381</span>'], ["Huéspedes", "2 adultos"]],
    links: [["Abrir en Google Maps", "https://www.google.com/maps/dir//one+shot+fortuny/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd4229107c9ee78d:0xbbfd7008c7bc1ca8?sa=X&ved=1t:155782&ictx=111"]]
  },
  "madrid-malaga": {
    icon: "↟", title: "Madrid → Málaga", subtitle: "Iryo 06118 · lunes 20 de julio de 2026.",
    rows: [["Salida", "11:55 · Madrid-Puerta de Atocha"], ["Llegada", "14:39 · Málaga-María Zambrano"], ["Localizador", '<span class="sensitive">DM1A3S</span>'], ["José María", "Coche 4 · asiento 2A"], ["María", "Coche 4 · asiento 2B"], ["Total", "€81.74"]],
    links: [["Abrir boletos PDF", "./public/documents/tren-madrid-malaga.pdf"]]
  },
  "malaga-stay": {
    icon: "⌂", title: "Casa de Iker & Sofía", subtitle: "Estancia en Málaga del 20 al 25 de julio.",
    rows: [["Anfitriones", "Iker y Sofía"], ["Dirección", "Calle Estébanez Calderón 13, Málaga, España"], ["Referencia", "@iker&sofia's"], ["Noches", "5"]],
    links: [["Abrir en Google Maps", "https://www.google.com/maps/search/?api=1&query=Calle+Est%C3%A9banez+Calder%C3%B3n+13%2C+M%C3%A1laga%2C+Espa%C3%B1a"]]
  },
  "malaga-palma": {
    icon: "✈", title: "Málaga → Palma", subtitle: "Ryanair FR5677 · sábado 25 de julio.",
    rows: [["Salida", "19:35 · Málaga (AGP)"], ["Llegada", "21:05 · Palma (PMI)"], ["Localizador", '<span class="sensitive">O71RTN</span>'], ["José María", "10A · 20 kg + prioridad"], ["María", "10B · 20 kg + prioridad"]],
    links: [["Gestionar reserva", "https://www.ryanair.com/es/es/trip/manage/BookingId:946316152?utm_source=itinerary-email&utm_medium=email"], ["Ver comprobante", "./public/documents/reserva-ryanair.png"]]
  },
  "mallorca-car": {
    icon: "🚗", title: "Coche en Mallorca", subtitle: "Booking.com Cars · Wiber · Hyundai Kona o similar.",
    rows: [["Confirmación", '<span class="sensitive">742705751</span>'], ["Recogida", "25 julio 2026 · 22:00"], ["Lugar", "Palma de Mallorca Aeropuerto · 16 Carrer Can Singala, Palma"], ["Devolución", "28 julio 2026 · 07:30"], ["Empresa", "Wiber"], ["Coche", "Hyundai Kona o similar · automático · aire acondicionado"], ["Pasajeros / equipaje", "5 asientos · 4 puertas · 2 maletas grandes"], ["Conductor", "José María Perez Garcia"], ["Vuelo", "FR5677"]],
    note: "Para recoger: vale de confirmación, carné de conducir, pasaporte/DNI y tarjeta de crédito a nombre del conductor principal.",
    links: [["Gestionar reserva", "https://cars.booking.com/my-booking/8NWFRhgabZErya_QgGEUCLRaNcqO4IIY4Ym-hrilUNtPVFD82CSYc0wTapAeGgTBhkse6V2qhGJYOuoauUhNgaYKkIbQX6CpzT1oijsOFVvw_5Nzgd8BVs2GJfdb9uUCs1FIYKBXYBHnAKZWfFW8A5yFfHfMK3fMWy8T142Zx1E?adcamp=bookingcom-PBBC+-2026-07-09&preflang=ES&mailType=2008&adco=0&envelopeId=bd2eeb77-1cc1-42b9-8832-7b7653bf6727&cor=MX&adplat=email&prefcurrency=MXN&mailTypeName=PBBC+&aid=2311236&affiliateCode=booking-cars"]]
  },
  aquamarin: {
    icon: "⌂", title: "Universal Hotel Aquamarin", subtitle: "Sant Elm, Mallorca · del 25 al 28 de julio.",
    rows: [["Entrada", "25 julio · desde 14:00"], ["Salida", "28 julio · 07:00–12:00"], ["Habitación", "Doble vista al mar · 2 camas"], ["Confirmación", '<span class="sensitive">6367610656</span>'], ["PIN", '<span class="sensitive">1274</span>'], ["Dirección", "Cala Conils 4, 07159 Sant Elm"]],
    links: [["Abrir en Google Maps", "https://www.google.com/maps/search/?api=1&query=Universal+Hotel+Aquamarin%2C+Cala+Conils+4%2C+07159+Sant+Elm%2C+Espa%C3%B1a"], ["Gestionar en Booking", "https://secure.booking.com/confirmation.es.html?label=mkt123sc-3a76c34a-9532-47d1-9cc5-f97d089189fd&aid=2311236&sid=04cb871c7b25a45e15f51bfe75907595&source=confirmation_error_validation&bn=6367610656"], ["Ver comprobante", "./public/documents/reserva-aquamarin.png"]]
  },
  ferry: {
    icon: "≈", title: "Alcúdia → Ciutadella", subtitle: "Balearia · buque Jaume III · martes 28 de julio.",
    rows: [["Salida", "08:30 · Alcúdia"], ["Llegada", "09:45 · Ciutadella"], ["Embarque", "Comienza 60 min antes"], ["Localizador", '<span class="sensitive">DSNTK0E</span>'], ["Pasajeros", "José María y María"], ["Acomodación", "Butaca Sirena"]],
    links: [["Gestionar reserva", "https://www.balearia.com/es/web/balearia-booking/mis-reservas?documento=XDE566647&localizador=DSNTK0E"], ["Ver confirmación", "./public/documents/reserva-ferry-confirmacion.png"], ["Ver detalle", "./public/documents/reserva-ferry-detalle.png"]]
  },
  caramelo: {
    icon: "⌂", title: "Caramelo Marina Cala'n Bosch", subtitle: "Menorca · Adults Only · del 28 de julio al 1 de agosto.",
    rows: [["Entrada", "28 julio · desde 15:00"], ["Salida", "1 agosto · hasta 11:00"], ["Habitación", "Double Caramelo Room"], ["Confirmación", '<span class="sensitive">5334074345</span>'], ["PIN", '<span class="sensitive">7861</span>'], ["Dirección", "Paseo Marítimo S/N, 07769 Cala'n Bosch"]],
    links: [["Abrir en Google Maps", "https://www.google.com/maps/search/?api=1&query=Caramelo+Marina+Cala%27n+Bosch%2C+Paseo+Mar%C3%ADtimo+S%2FN%2C+07769+Cala%27n+Bosch%2C+Espa%C3%B1a"], ["Gestionar en Booking", "https://secure.booking.com/confirmation.es.html?label=mkt123sc-2111cbfe-230f-4606-96a3-0903ef5dc9a9&aid=2311236&sid=04cb871c7b25a45e15f51bfe75907595&source=confirmation_error_validation&bn=5334074345"], ["Ver comprobante", "./public/documents/reserva-caramelo.png"]]
  },
  "menorca-car": {
    icon: "🚗", title: "Coche en Menorca", subtitle: "Booking.com Cars · Owners Cars · Peugeot 308 o similar.",
    rows: [["Confirmación", '<span class="sensitive">717389764</span>'], ["Recogida", "28 julio 2026 · 10:30"], ["Lugar", "Menorca - Cala'n Bosch · Carrer Circumval·lació, Local 1"], ["Devolución", "1 agosto 2026 · 09:00"], ["Empresa", "Owners Cars"], ["Coche", "Peugeot 308 o similar · automático · aire acondicionado"], ["Pasajeros / equipaje", "5 asientos · 4 puertas · 2 maletas grandes"], ["Conductor", "José María Perez Garcia"], ["Pagado", "MXN 4,428.91"]],
    note: "Para recoger: vale de confirmación, carné de conducir, pasaporte/DNI y tarjeta de crédito a nombre del conductor principal.",
    links: [["Gestionar reserva", "https://cars.booking.com/my-booking/8NWFRhgabZErya_QgGEUCLRaNcqO4IIY4Ym-hrilUNtPVFD82CSYc0wTapAeGgTBhkse6V2qhGJYOuoauUhNgaYKkIbQX6CpzT1oijsOFVvw_5Nzgd8BVs2GJfdb9uUCPLr303W-EfqFgUur89dAxZyFfHfMK3fMWy8T142Zx1E?adcamp=bookingcom-PBBC+-2026-07-09&preflang=ES&mailType=2008&adco=0&envelopeId=f2969b07-06d9-4778-b4a8-1ef6ab466407&cor=MX&adplat=email&prefcurrency=MXN&mailTypeName=PBBC+&aid=2311236&affiliateCode=booking-cars"]]
  },
  "menorca-santander": {
    icon: "✈", title: "Menorca → Santander", subtitle: "Volotea V73872 · sábado 1 de agosto.",
    rows: [["Salida", "09:45 · Menorca (MAH)"], ["Llegada", "11:25 · Santander (SDR)"], ["Reserva Kiwi", '<span class="sensitive">809 161 529</span>'], ["PNR aerolínea", "Pendiente de emisión"], ["María", "15A · mano 8 kg + facturada 20 kg"], ["José María", "15B · mano 8 kg + facturada 20 kg"]],
    note: "El e-ticket indica hacer el check-in directamente con la aerolínea.",
    links: [["Abrir e-ticket PDF", "./public/documents/vuelo-menorca-santander.pdf?v=3"]]
  },
  "santander-car": {
    icon: "🚗", title: "Coche en Santander", subtitle: "Booking.com Cars · Hertz · Volkswagen T-Cross o similar.",
    rows: [["Confirmación", '<span class="sensitive">790121495</span>'], ["Recogida", "1 agosto 2026 · 13:00"], ["Lugar", "Santander Aeropuerto · Seve Ballesteros, Maliaño"], ["Devolución", "18 agosto 2026 · 13:00"], ["Empresa", "Hertz"], ["Coche", "Volkswagen T-Cross o similar · automático · aire acondicionado"], ["Pasajeros / equipaje", "5 asientos · 5 puertas · 2 maletas grandes"], ["Conductor", "José María Perez Garcia"], ["Pagado", "MXN 14,214.46"]],
    note: "Para recoger: vale de confirmación, carné de conducir, pasaporte/DNI y tarjeta de crédito a nombre del conductor principal.",
    links: [["Gestionar reserva", "https://cars.booking.com/my-booking/8NWFRhgabZErya_QgGEUCLRaNcqO4IIY4Ym-hrilUNtPVFD82CSYc0wTapAeGgTBhkse6V2qhGJYOuoauUhNgaYKkIbQX6CpzT1oijsOFVvw_5Nzgd8BVs2GJfdb9uUCyq_RfuhnpH0TmzTkQnme8pyFfHfMK3fMWy8T142Zx1E?adcamp=bookingcom-PBBC+-2026-07-09&preflang=ES&mailType=2008&adco=0&envelopeId=bc9b4e38-0c0c-41a2-b350-caf8aaec0dea&cor=MX&adplat=email&prefcurrency=MXN&mailTypeName=PBBC+&aid=2311236&affiliateCode=booking-cars"]]
  },
  llanes: {
    icon: "⌂", title: "Departamento en Llanes", subtitle: "Llegada el 1 de agosto después de recoger el coche en Santander.",
    rows: [["Entrada", "1 agosto 2026"], ["Salida", "18 agosto 2026"], ["Estancia", "17 noches"], ["Traslado", "Santander → Llanes en coche"], ["Dirección", "Avenida de la Paz 3, departamento 1B, Llanes, España"], ["Coche", "Hertz · Volkswagen T-Cross o similar"]],
    links: [["Abrir en Google Maps", "https://www.google.com/maps/search/?api=1&query=Avenida+de+la+Paz+3%2C+Llanes%2C+Espa%C3%B1a"]]
  },
  london: {
    icon: "✈", title: "Escapada a Londres", subtitle: "Fechas tentativas del 3 al 8 de agosto.",
    rows: [["Estado", "Pendiente de reservar"], ["Ida", "3 agosto · fecha tentativa"], ["Regreso", "8 agosto · fecha tentativa"], ["Origen / destino", "Pendiente"], ["Alojamiento", "Pendiente"]]
  },
  "return-home": {
    icon: "↟", title: "Llanes → Santander → Madrid", subtitle: "Primera parte del regreso, el martes 18 de agosto.",
    rows: [["Salida de Llanes", "18 agosto 2026"], ["Coche", "Entrega en Santander Aeropuerto · 13:00"], ["Reserva coche", '<span class="sensitive">790121495</span> · Hertz'], ["Tren", "Santander → Madrid"], ["Estado tren", "Pendiente de reservar"], ["Horario tren", "Pendiente"]],
    links: [["Gestionar coche", "https://cars.booking.com/my-booking/8NWFRhgabZErya_QgGEUCLRaNcqO4IIY4Ym-hrilUNtPVFD82CSYc0wTapAeGgTBhkse6V2qhGJYOuoauUhNgaYKkIbQX6CpzT1oijsOFVvw_5Nzgd8BVs2GJfdb9uUCyq_RfuhnpH0TmzTkQnme8pyFfHfMK3fMWy8T142Zx1E?adcamp=bookingcom-PBBC+-2026-07-09&preflang=ES&mailType=2008&adco=0&envelopeId=bc9b4e38-0c0c-41a2-b350-caf8aaec0dea&cor=MX&adplat=email&prefcurrency=MXN&mailTypeName=PBBC+&aid=2311236&affiliateCode=booking-cars"]]
  },
  "return-flight": {
    icon: "✈", title: "Madrid → Ciudad de México", subtitle: "Aeroméxico AM 2 · martes 18 de agosto de 2026 · por confirmar.",
    rows: [["Estado", "Por confirmar"], ["Salida", "10:45 · Madrid (MAD) · Terminal 1"], ["Llegada", "14:20 · Ciudad de México (MEX) · Terminal 2"], ["Duración", "11 h 35 min"], ["Confirmación", '<span class="sensitive">HXOWUR</span>'], ["Pasajeros", "José María Perez Garcia · Maria Hakim Morfin"]],
    note: "No se adjunta documento: los boletos están en la app de Aeroméxico."
  }
};

const main = document.querySelector("main");
main.insertBefore(document.querySelector("#itinerario"), document.querySelector("#pendientes"));
main.insertBefore(document.querySelector("#lugares"), document.querySelector("#pendientes"));

const modal = document.querySelector("#detailModal");
const modalContent = document.querySelector("#modalContent");
const isLocalDocument = href => href.startsWith("./public/documents/");
const linkMarkup = (label, href, index = 0) => {
  const className = index ? ' class="secondary"' : "";
  const externalAttrs = isLocalDocument(href) ? "" : ' target="_blank" rel="noreferrer"';
  return `<a${className} href="${href}"${externalAttrs}>${label}</a>`;
};
const openDocumentViewer = (href, title = "Documento") => {
  const cleanHref = href.split("#")[0];
  const isPdf = cleanHref.toLowerCase().includes(".pdf");
  const media = isPdf
    ? `<iframe class="document-frame" src="${href}" title="${title}"></iframe>`
    : `<img class="document-image" src="${href}" alt="${title}" />`;
  modalContent.innerHTML = `<div class="modal-body document-viewer">
    <p class="eyebrow dark">DOCUMENTO</p>
    <h2>${title}</h2>
    ${media}
    <div class="modal-actions"><a class="secondary" href="${href}">Abrir archivo directo</a></div>
  </div>`;
  if (!modal.open) modal.showModal();
};
document.querySelectorAll("[data-modal]").forEach(button => button.addEventListener("click", () => {
  const d = details[button.dataset.modal];
  modalContent.innerHTML = `<div class="modal-body">
    <div class="modal-icon">${d.icon}</div><p class="eyebrow dark">DETALLES DE LA RESERVA</p>
    <h2>${d.title}</h2><p>${d.subtitle}</p>
    <div class="detail-list">${d.rows.map(([label, value]) => `<div class="detail-row"><span>${label}</span><strong>${value}</strong></div>`).join("")}</div>
    ${d.note ? `<p>${d.note}</p>` : ""}
    ${d.links ? `<div class="modal-actions">${d.links.map(([label, href], index) => linkMarkup(label, href, index)).join("")}</div>` : ""}
  </div>`;
  modal.showModal();
}));

document.addEventListener("click", event => {
  const documentLink = event.target.closest('a[href^="./public/documents/"]');
  if (!documentLink) return;
  event.preventDefault();
  const card = documentLink.closest(".document-card");
  const title = card?.querySelector("strong")?.textContent?.trim() || documentLink.textContent.trim() || "Documento";
  openDocumentViewer(documentLink.getAttribute("href"), title);
});

document.querySelector("#modalClose").addEventListener("click", () => modal.close());
modal.addEventListener("click", event => {
  const box = modal.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) modal.close();
});

const taskBoxes = [...document.querySelectorAll("[data-task]")];
const updateTasks = () => {
  taskBoxes.forEach(box => localStorage.setItem(`trip-task-${box.dataset.task}`, box.checked));
  document.querySelector("#pendingCount").textContent = taskBoxes.filter(box => !box.checked).length;
};
taskBoxes.forEach(box => {
  box.checked = localStorage.getItem(`trip-task-${box.dataset.task}`) === "true";
  box.addEventListener("change", updateTasks);
});
updateTasks();

document.querySelectorAll("[data-filter]").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll("[data-filter]").forEach(b => b.classList.toggle("active", b === button));
  document.querySelectorAll(".timeline-day").forEach(day => day.classList.toggle("hidden", button.dataset.filter !== "all" && !day.dataset.kind.includes(button.dataset.filter)));
}));

const notes = document.querySelector("#tripNotes");
const saveState = document.querySelector("#saveState");
notes.value = localStorage.getItem("trip-notes") || "";
let noteTimer;
notes.addEventListener("input", () => {
  saveState.textContent = "Guardando…";
  clearTimeout(noteTimer);
  noteTimer = setTimeout(() => {
    localStorage.setItem("trip-notes", notes.value);
    saveState.textContent = "Guardadas";
  }, 350);
});

document.querySelector("#privacyButton").addEventListener("click", () => {
  document.body.classList.toggle("private");
  document.querySelector("#privacyIcon").textContent = document.body.classList.contains("private") ? "○" : "◉";
});

const navLinks = [...document.querySelectorAll(".bottom-nav a")];
navLinks.forEach(link => link.addEventListener("click", () => {
  navLinks.forEach(item => item.classList.toggle("active", item === link));
}));

const expenseForm = document.querySelector("#expenseForm");
const expenseId = document.querySelector("#expenseId");
const expenseTitle = document.querySelector("#expenseTitle");
const expenseAmount = document.querySelector("#expenseAmount");
const expenseCurrency = document.querySelector("#expenseCurrency");
const expensePayer = document.querySelector("#expensePayer");
const displayCurrency = document.querySelector("#displayCurrency");
const expenseList = document.querySelector("#expenseList");
const emptyExpenses = document.querySelector("#emptyExpenses");
const cancelExpense = document.querySelector("#cancelExpense");
const saveExpense = document.querySelector("#saveExpense");
let expenses = [];
let rates = { EUR: 1, USD: 1.137, MXN: 20.02 };
let rateDate = "referencia sin conexión";

try {
  const storedExpenses = JSON.parse(localStorage.getItem("trip-expenses") || "[]");
  expenses = Array.isArray(storedExpenses) ? storedExpenses.map(item => ({ ...item, currency: item.currency || "EUR" })) : [];
  const storedRates = JSON.parse(localStorage.getItem("trip-exchange-rates") || "null");
  if (storedRates?.rates?.USD && storedRates?.rates?.MXN) {
    rates = { EUR: 1, USD: storedRates.rates.USD, MXN: storedRates.rates.MXN };
    rateDate = storedRates.date || "última actualización";
  }
} catch {
  expenses = [];
}

displayCurrency.value = localStorage.getItem("trip-display-currency") || "EUR";
if (!["EUR", "MXN", "USD"].includes(displayCurrency.value)) displayCurrency.value = "EUR";
expenseCurrency.value = displayCurrency.value;
const money = (value, currency = displayCurrency.value) => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(value);
const convert = (amount, from, to) => (amount / rates[from]) * rates[to];
const escapeText = value => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const placeCategories = {
  restaurante: { label: "Restaurante", plural: "Restaurantes", icon: "🍽️" },
  playa: { label: "Playa", plural: "Playas", icon: "🏖️" },
  hotel: { label: "Hotel", plural: "Hoteles", icon: "🛏️" },
  heladeria: { label: "Heladería", plural: "Heladerías", icon: "🍦" },
  cafeteria: { label: "Cafetería", plural: "Cafeterías", icon: "☕" },
  museo: { label: "Museo", plural: "Museos", icon: "🖼️" },
  tienda: { label: "Tienda", plural: "Tiendas", icon: "🛍️" },
  bar: { label: "Bar / fiesta", plural: "Bares / fiesta", icon: "🍸" },
  mirador: { label: "Mirador", plural: "Miradores", icon: "🌅" },
  otro: { label: "Otro", plural: "Otros", icon: "📍" }
};
const destinationOrder = ["Madrid", "Málaga", "Mallorca", "Menorca", "Llanes", "Santander", "Londres", "Otro"];
const placeForm = document.querySelector("#placeForm");
const placeId = document.querySelector("#placeId");
const placeSearch = document.querySelector("#placeSearch");
const placeTitle = document.querySelector("#placeTitle");
const placeDestination = document.querySelector("#placeDestination");
const placeCategory = document.querySelector("#placeCategory");
const placeMaps = document.querySelector("#placeMaps");
const placeNote = document.querySelector("#placeNote");
const placeAutoPreview = document.querySelector("#placeAutoPreview");
const placeResults = document.querySelector("#placeResults");
const placeDestinationFilter = document.querySelector("#placeDestinationFilter");
const placeCategoryFilter = document.querySelector("#placeCategoryFilter");
const placeList = document.querySelector("#placeList");
const emptyPlaces = document.querySelector("#emptyPlaces");
const placeCount = document.querySelector("#placeCount");
const cancelPlace = document.querySelector("#cancelPlace");
const savePlace = document.querySelector("#savePlace");
let places = [];
let placeSearchTimer;
let placeSearchResults = [];

try {
  const storedPlaces = JSON.parse(localStorage.getItem("trip-places") || "[]");
  places = Array.isArray(storedPlaces) ? storedPlaces : [];
} catch {
  places = [];
}

const normalizePlaceCategory = category => placeCategories[category] ? category : "otro";
const destinationAliases = {
  Madrid: ["madrid", "mad"],
  Málaga: ["malaga", "málaga", "marbella", "estepona", "nerja", "torremolinos", "benalmadena"],
  Mallorca: ["mallorca", "palma", "sant elm", "andratx", "alcudia", "alcúdia", "soller", "sóller", "deia", "deià"],
  Menorca: ["menorca", "ciutadella", "cala'n bosch", "calan bosch", "mahon", "mahón", "mah"],
  Llanes: ["llanes", "asturias", "ribadesella", "picos de europa"],
  Santander: ["santander", "cantabria"],
  Londres: ["londres", "london", "heathrow", "gatwick", "stansted"]
};
const detectDestination = text => {
  const value = text.toLocaleLowerCase("es");
  const found = destinationOrder.find(destination => destinationAliases[destination]?.some(alias => value.includes(alias)));
  if (found) return found;
  if (placeDestinationFilter.value !== "all") return placeDestinationFilter.value;
  return "Otro";
};
const destinationBounds = [
  ["Madrid", { minLat: 40.05, maxLat: 40.75, minLng: -4.05, maxLng: -3.35 }],
  ["Málaga", { minLat: 36.4, maxLat: 37.2, minLng: -5.2, maxLng: -3.5 }],
  ["Mallorca", { minLat: 39.15, maxLat: 40.1, minLng: 2.15, maxLng: 3.55 }],
  ["Menorca", { minLat: 39.75, maxLat: 40.15, minLng: 3.75, maxLng: 4.55 }],
  ["Llanes", { minLat: 43.2, maxLat: 43.55, minLng: -5.05, maxLng: -4.55 }],
  ["Santander", { minLat: 43.35, maxLat: 43.55, minLng: -3.95, maxLng: -3.65 }],
  ["Londres", { minLat: 51.25, maxLat: 51.75, minLng: -0.55, maxLng: 0.3 }]
];
const detectDestinationFromCoords = ({ lat, lng } = {}) => {
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return "";
  const found = destinationBounds.find(([, bounds]) => lat >= bounds.minLat && lat <= bounds.maxLat && lng >= bounds.minLng && lng <= bounds.maxLng);
  return found?.[0] || "";
};
const detectCategory = text => {
  const value = text.toLocaleLowerCase("es");
  if (/playa|cala|beach|arenal|mar|bah[ií]a|cal[oó]n|caleta/.test(value)) return "playa";
  if (/restaurante|restaurant|comida|cena|tapas|bistro|asador|marisquer[ií]a|taquer[ií]a|oster[ií]a/.test(value)) return "restaurante";
  if (/hotel|hostal|resort|alojamiento|apartamento|departamento/.test(value)) return "hotel";
  if (/helado|helader[ií]a|gelato|ice cream/.test(value)) return "heladeria";
  if (/caf[eé]|cafeter[ií]a|coffee|brunch|panader[ií]a|pasteler[ií]a/.test(value)) return "cafeteria";
  if (/museo|museum|galer[ií]a|gallery|exposici[oó]n/.test(value)) return "museo";
  if (/tienda|shop|shopping|boutique|mercado|market|souvenir/.test(value)) return "tienda";
  if (/bar|cocktail|fiesta|club|discoteca|pub|vino|cerveza|rooftop/.test(value)) return "bar";
  if (/mirador|viewpoint|atardecer|sunset|faro|lighthouse|vista/.test(value)) return "mirador";
  if (placeCategoryFilter.value !== "all") return placeCategoryFilter.value;
  return "otro";
};
const decodeMapsText = value => {
  try {
    return decodeURIComponent(value.replace(/\+/g, " "));
  } catch {
    return value;
  }
};
const parseMapsLink = url => {
  const raw = (url || "").trim();
  if (!raw) return {};
  const text = decodeMapsText(raw);
  const placeMatch = text.match(/\/place\/([^/?@]+)/i);
  const queryMatch = text.match(/[?&]query=([^&]+)/i);
  const searchMatch = text.match(/\/search\/([^/?@]+)/i);
  const rawTitle = (placeMatch?.[1] || queryMatch?.[1] || searchMatch?.[1] || "")
    .replace(/\s*-\s*Google Maps.*$/i, "")
    .replace(/\s+/g, " ")
    .trim();
  const titleIsCoordinates = /^-?\d+(?:\.\d+)?\s*,\s*-?\d+(?:\.\d+)?$/.test(rawTitle);
  const title = titleIsCoordinates ? "" : rawTitle;
  const atMatch = text.match(/@(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/);
  const bangMatch = text.match(/!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+)?)/);
  const queryCoordsMatch = rawTitle.match(/^(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)$/);
  const lat = Number(atMatch?.[1] || bangMatch?.[1] || queryCoordsMatch?.[1]);
  const lng = Number(atMatch?.[2] || bangMatch?.[2] || queryCoordsMatch?.[2]);
  const destination = detectDestinationFromCoords({ lat, lng }) || detectDestination(text);
  return { title, lat, lng, destination, text };
};
const cleanPlaceTitle = (text, destination) => {
  let title = text.trim().replace(/\s+/g, " ");
  for (const alias of destinationAliases[destination] || []) {
    title = title.replace(new RegExp(`\\b${alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "ig"), "").trim();
  }
  return title.replace(/^[,·-]+|[,·-]+$/g, "").trim() || text.trim();
};
const googleMapsSearchUrl = query => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
const detectPlace = (text, mapsLink = "") => {
  const mapsData = parseMapsLink(mapsLink);
  const detectionText = [text, mapsData.title, mapsData.text].filter(Boolean).join(" ");
  const destination = mapsData.destination || detectDestination(detectionText);
  const category = detectCategory(detectionText);
  const title = cleanPlaceTitle(mapsData.title || text, destination);
  const maps = mapsLink.trim() || googleMapsSearchUrl(text);
  return { title, destination, category, maps };
};
const mapsUrlFromCoords = ({ lat, lng, fallback }) => {
  if (Number.isFinite(lat) && Number.isFinite(lng)) return googleMapsSearchUrl(`${lat},${lng}`);
  return googleMapsSearchUrl(fallback);
};
const categoryFromSearchResult = result => {
  const value = [result.name, result.display_name, result.category, result.type, result.class].filter(Boolean).join(" ").toLocaleLowerCase("es");
  if (/restaurant|restaurante|food|comida/.test(value)) return "restaurante";
  if (/beach|playa|cala/.test(value)) return "playa";
  if (/hotel|hostel|resort|guest_house/.test(value)) return "hotel";
  if (/ice_cream|helad|gelato/.test(value)) return "heladeria";
  if (/cafe|coffee|caf[eé]|bakery|panader/.test(value)) return "cafeteria";
  if (/museum|museo|gallery/.test(value)) return "museo";
  if (/shop|store|mall|market|tienda/.test(value)) return "tienda";
  if (/bar|pub|nightclub|club|cocktail/.test(value)) return "bar";
  if (/viewpoint|mirador|attraction|lighthouse|faro/.test(value)) return "mirador";
  return detectCategory(value);
};
const searchResultToPlace = result => {
  const lat = Number(result.lat);
  const lng = Number(result.lon);
  const title = (result.name || result.display_name?.split(",")[0] || placeSearch.value).trim();
  const destination = detectDestinationFromCoords({ lat, lng }) || detectDestination(result.display_name || title);
  const category = categoryFromSearchResult(result);
  return {
    title: cleanPlaceTitle(title, destination),
    destination,
    category,
    maps: mapsUrlFromCoords({ lat, lng, fallback: `${title}, ${destination}` }),
    address: result.display_name || "",
    lat,
    lng
  };
};
const renderPlaceResults = (results = placeSearchResults) => {
  if (!placeSearch.value.trim()) {
    placeResults.innerHTML = "";
    return;
  }
  if (!results.length) {
    placeResults.innerHTML = `<div class="place-result-state">No hay opciones todavía. Sigue escribiendo o prueba otro nombre.</div>`;
    return;
  }
  placeResults.innerHTML = results.map((result, index) => {
    const place = searchResultToPlace(result);
    const category = placeCategories[normalizePlaceCategory(place.category)];
    return `<button type="button" class="place-result" data-place-result="${index}">
      <span>${category.icon}</span>
      <strong>${escapeText(place.title)}</strong>
      <small>${escapeText(place.destination)} · ${escapeText(category.label)} · ${escapeText(place.address)}</small>
    </button>`;
  }).join("");
};
const fillPlaceFromSearchResult = result => {
  const place = searchResultToPlace(result);
  placeTitle.value = place.title;
  placeDestination.value = place.destination;
  placeCategory.value = normalizePlaceCategory(place.category);
  placeMaps.value = place.maps;
  const category = placeCategories[normalizePlaceCategory(place.category)];
  placeAutoPreview.innerHTML = `${category.icon} <strong>${escapeText(place.title)}</strong> · ${escapeText(place.destination)} · ${escapeText(category.label)} · Maps con coordenadas`;
};
const searchPlaces = async () => {
  const query = placeSearch.value.trim();
  if (query.length < 2) {
    placeResults.innerHTML = "";
    return;
  }
  placeResults.innerHTML = `<div class="place-result-state">Buscando opciones…</div>`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 7000);
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&addressdetails=1&limit=7&countrycodes=es,gb&q=${encodeURIComponent(query)}`, { signal: controller.signal });
    if (!response.ok) throw new Error("Search failed");
    const data = await response.json();
    if (placeSearch.value.trim() !== query) return;
    placeSearchResults = Array.isArray(data) ? data : [];
    renderPlaceResults(placeSearchResults);
  } catch {
    if (placeSearch.value.trim() !== query) return;
    placeSearchResults = [];
    placeResults.innerHTML = `<div class="place-result-state">No pude cargar opciones ahora. Intenta de nuevo en unos segundos.</div>`;
  } finally {
    clearTimeout(timeout);
  }
};
const updatePlaceAutofill = ({ force = false } = {}) => {
  const query = placeSearch.value.trim();
  const mapsLink = placeMaps.value.trim();
  if (!query) {
    placeAutoPreview.textContent = "Escribe un lugar y elige una opción para autollenar la ficha.";
    return null;
  }
  const detected = detectPlace(query, mapsLink);
  if (force || !placeTitle.value.trim()) placeTitle.value = detected.title;
  if (!placeMaps.value.trim()) placeMaps.value = detected.maps;
  if (force || placeDestination.value === "Otro" || placeDestinationFilter.value !== "all") placeDestination.value = detected.destination;
  if (force || placeCategory.value === "otro" || placeCategoryFilter.value !== "all") placeCategory.value = detected.category;
  const category = placeCategories[detected.category];
  const linkKind = mapsLink && !mapsLink.startsWith("https://www.google.com/maps/search/") ? "link real de Maps" : "link de Maps";
  placeAutoPreview.innerHTML = `${category.icon} <strong>${escapeText(detected.title)}</strong> · ${escapeText(detected.destination)} · ${escapeText(category.label)} · ${linkKind}`;
  return detected;
};
const mapsUrlFor = place => {
  const raw = (place.maps || "").trim();
  if (/^https?:\/\//i.test(raw)) return raw;
  const query = [place.title, raw, place.destination].filter(Boolean).join(", ");
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
};
const filteredPlaces = () => places.filter(place =>
  (placeDestinationFilter.value === "all" || place.destination === placeDestinationFilter.value) &&
  (placeCategoryFilter.value === "all" || place.category === placeCategoryFilter.value)
);
const groupedPlaces = list => destinationOrder
  .map(destination => [destination, list.filter(place => place.destination === destination)])
  .filter(([, items]) => items.length);
const resetPlaceForm = () => {
  placeForm.reset();
  placeId.value = "";
  placeSearch.value = "";
  placeDestination.value = placeDestinationFilter.value === "all" ? "Madrid" : placeDestinationFilter.value;
  placeCategory.value = placeCategoryFilter.value === "all" ? "restaurante" : placeCategoryFilter.value;
  placeSearchResults = [];
  placeResults.innerHTML = "";
  placeAutoPreview.textContent = "Escribe un lugar y elige una opción para autollenar la ficha.";
  savePlace.textContent = "Agregar lugar";
  cancelPlace.hidden = true;
};
const renderPlaceList = list => {
  placeList.innerHTML = groupedPlaces(list).map(([destination, items]) => `
    <section class="place-destination-group">
      <div class="place-destination-title"><strong>${escapeText(destination)}</strong><span>${items.length} ${items.length === 1 ? "lugar" : "lugares"}</span></div>
      <div class="place-cards">
        ${items.map(place => {
          const category = placeCategories[normalizePlaceCategory(place.category)];
          return `<article class="place-card" data-place-id="${place.id}">
            <span class="place-icon" aria-hidden="true">${category.icon}</span>
            <span class="place-info">
              <strong>${escapeText(place.title)}</strong>
              <small>${escapeText(category.label)} · ${escapeText(place.destination)}</small>
              ${place.note ? `<em>${escapeText(place.note)}</em>` : ""}
            </span>
            <span class="place-actions">
              <a href="${escapeText(mapsUrlFor(place))}" target="_blank" rel="noreferrer">Maps</a>
              <button type="button" data-edit-place="${place.id}">Editar</button>
              <button type="button" class="delete" data-delete-place="${place.id}">Borrar</button>
            </span>
          </article>`;
        }).join("")}
      </div>
    </section>
  `).join("");
};
const renderPlaces = () => {
  places = places.map(place => ({ ...place, category: normalizePlaceCategory(place.category || "otro"), destination: place.destination || "Otro" }));
  const list = filteredPlaces();
  emptyPlaces.hidden = list.length > 0;
  placeCount.textContent = `${list.length} ${list.length === 1 ? "lugar" : "lugares"}`;
  renderPlaceList(list);
  localStorage.setItem("trip-places", JSON.stringify(places));
};

placeForm.addEventListener("submit", event => {
  event.preventDefault();
  if (!placeTitle.value.trim()) updatePlaceAutofill({ force: true });
  const title = placeTitle.value.trim() || placeSearch.value.trim();
  if (!title) return;
  const payload = {
    title,
    destination: placeDestination.value,
    category: normalizePlaceCategory(placeCategory.value),
    maps: placeMaps.value.trim(),
    note: placeNote.value.trim()
  };
  if (placeId.value) {
    places = places.map(place => place.id === placeId.value ? { ...place, ...payload } : place);
  } else {
    places.unshift({ id: `${Date.now()}-${Math.random().toString(16).slice(2)}`, ...payload });
  }
  resetPlaceForm();
  renderPlaces();
});

placeList.addEventListener("click", event => {
  const editButton = event.target.closest("[data-edit-place]");
  const deleteButton = event.target.closest("[data-delete-place]");
  if (editButton) {
    const item = places.find(place => place.id === editButton.dataset.editPlace);
    if (!item) return;
    placeId.value = item.id;
    placeSearch.value = item.title;
    placeTitle.value = item.title;
    placeDestination.value = item.destination;
    placeCategory.value = normalizePlaceCategory(item.category);
    placeMaps.value = item.maps || "";
    placeNote.value = item.note || "";
    savePlace.textContent = "Guardar cambios";
    cancelPlace.hidden = false;
    updatePlaceAutofill();
    placeTitle.focus();
    placeForm.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  if (deleteButton) {
    places = places.filter(place => place.id !== deleteButton.dataset.deletePlace);
    if (placeId.value === deleteButton.dataset.deletePlace) resetPlaceForm();
    renderPlaces();
  }
});
cancelPlace.addEventListener("click", resetPlaceForm);
placeSearch.addEventListener("input", () => {
  if (!placeId.value) {
    placeAutoPreview.textContent = "Elige una opción de la lista para llenar nombre, destino, categoría y link.";
  }
  clearTimeout(placeSearchTimer);
  placeSearchTimer = setTimeout(searchPlaces, 350);
});
placeResults.addEventListener("click", event => {
  const button = event.target.closest("[data-place-result]");
  if (!button) return;
  const result = placeSearchResults[Number(button.dataset.placeResult)];
  if (!result) return;
  fillPlaceFromSearchResult(result);
  placeResults.innerHTML = "";
});
placeSearch.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    event.preventDefault();
    if (placeSearchResults[0]) {
      fillPlaceFromSearchResult(placeSearchResults[0]);
      placeResults.innerHTML = "";
    } else {
      searchPlaces();
    }
  }
});
placeMaps.addEventListener("input", () => updatePlaceAutofill({ force: true }));
placeMaps.addEventListener("change", () => updatePlaceAutofill({ force: true }));
placeDestinationFilter.addEventListener("change", () => {
  if (!placeId.value && placeDestinationFilter.value !== "all") placeDestination.value = placeDestinationFilter.value;
  renderPlaces();
});
placeCategoryFilter.addEventListener("change", () => {
  if (!placeId.value && placeCategoryFilter.value !== "all") placeCategory.value = placeCategoryFilter.value;
  renderPlaces();
});
resetPlaceForm();
renderPlaces();

const expenseIcon = title => {
  const value = title.toLocaleLowerCase("es");
  if (/vuelo|avión|avion|aeropuerto|aerolínea|aerolinea/.test(value)) return "✈️";
  if (/comida|cena|restaurante|desayuno|almuerzo|café|cafe|taco|pizza/.test(value)) return "🍽️";
  if (/fiesta|bar|copas|discoteca|club|cerveza|vino/.test(value)) return "🎉";
  if (/hotel|alojamiento|hostal|airbnb|departamento/.test(value)) return "🛏️";
  if (/tren|metro|ferrocarril/.test(value)) return "🚆";
  if (/ferry|barco|lancha/.test(value)) return "⛴️";
  if (/taxi|uber|coche|auto|gasolina|parking|estacionamiento/.test(value)) return "🚕";
  if (/compra|regalo|ropa|tienda|souvenir/.test(value)) return "🛍️";
  if (/museo|entrada|ticket|tour|excursión|excursion/.test(value)) return "🎟️";
  return "🧾";
};

const resetExpenseForm = () => {
  expenseForm.reset();
  expenseId.value = "";
  expensePayer.value = "maria";
  expenseCurrency.value = displayCurrency.value;
  saveExpense.textContent = "Agregar gasto";
  cancelExpense.hidden = true;
};

const renderExpenses = () => {
  const selected = displayCurrency.value;
  const totalFor = payer => expenses
    .filter(item => item.payer === payer)
    .reduce((sum, item) => sum + convert(item.amount, item.currency, selected), 0);
  const maria = totalFor("maria");
  const jose = totalFor("jose");
  document.querySelector("#mariaTotal").textContent = money(maria, selected);
  document.querySelector("#joseTotal").textContent = money(jose, selected);
  document.querySelector("#grandTotal").textContent = money(maria + jose, selected);
  document.querySelector("#rateStatus").textContent = `Cambio: ${rateDate}`;
  document.querySelector("#expenseCount").textContent = `${expenses.length} ${expenses.length === 1 ? "gasto" : "gastos"}`;
  emptyExpenses.hidden = expenses.length > 0;
  expenseList.innerHTML = expenses.map(item => `
    <article class="expense-row" data-expense-id="${item.id}">
      <span class="expense-concept-icon" aria-hidden="true">${expenseIcon(item.title)}</span>
      <span class="expense-info">
        <strong>${escapeText(item.title)}</strong>
        <small><i class="payer-dot ${item.payer}"></i> Pagó ${item.payer === "maria" ? "Maria" : "José María"}</small>
      </span>
      <span class="expense-amounts">
        <strong class="expense-value">${money(item.amount, item.currency)}</strong>
        ${item.currency === selected ? "" : `<small>${money(convert(item.amount, item.currency, selected), selected)}</small>`}
      </span>
      <span class="expense-actions">
        <button type="button" data-edit-expense="${item.id}" aria-label="Editar ${escapeText(item.title)}">Editar</button>
        <button type="button" class="delete" data-delete-expense="${item.id}" aria-label="Borrar ${escapeText(item.title)}">Borrar</button>
      </span>
    </article>
  `).join("");
  localStorage.setItem("trip-expenses", JSON.stringify(expenses));
};

expenseForm.addEventListener("submit", event => {
  event.preventDefault();
  const title = expenseTitle.value.trim();
  const amount = Number(expenseAmount.value);
  if (!title || !Number.isFinite(amount) || amount <= 0) return;
  if (expenseId.value) {
    expenses = expenses.map(item => item.id === expenseId.value ? { ...item, title, amount, currency: expenseCurrency.value, payer: expensePayer.value } : item);
  } else {
    expenses.unshift({ id: `${Date.now()}-${Math.random().toString(16).slice(2)}`, title, amount, currency: expenseCurrency.value, payer: expensePayer.value });
  }
  resetExpenseForm();
  renderExpenses();
});

expenseList.addEventListener("click", event => {
  const editButton = event.target.closest("[data-edit-expense]");
  const deleteButton = event.target.closest("[data-delete-expense]");
  if (editButton) {
    const item = expenses.find(expense => expense.id === editButton.dataset.editExpense);
    if (!item) return;
    expenseId.value = item.id;
    expenseTitle.value = item.title;
    expenseAmount.value = item.amount;
    expenseCurrency.value = item.currency;
    expensePayer.value = item.payer;
    saveExpense.textContent = "Guardar cambios";
    cancelExpense.hidden = false;
    expenseTitle.focus();
    expenseForm.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  if (deleteButton) {
    expenses = expenses.filter(expense => expense.id !== deleteButton.dataset.deleteExpense);
    if (expenseId.value === deleteButton.dataset.deleteExpense) resetExpenseForm();
    renderExpenses();
  }
});

cancelExpense.addEventListener("click", resetExpenseForm);
displayCurrency.addEventListener("change", () => {
  localStorage.setItem("trip-display-currency", displayCurrency.value);
  renderExpenses();
});
renderExpenses();

fetch("https://api.frankfurter.dev/v1/latest?base=EUR&symbols=USD,MXN")
  .then(response => {
    if (!response.ok) throw new Error("No exchange rates");
    return response.json();
  })
  .then(data => {
    if (!data.rates?.USD || !data.rates?.MXN) throw new Error("Incomplete exchange rates");
    rates = { EUR: 1, USD: data.rates.USD, MXN: data.rates.MXN };
    rateDate = data.date || "actualizado";
    localStorage.setItem("trip-exchange-rates", JSON.stringify({ rates, date: rateDate }));
    renderExpenses();
  })
  .catch(() => {
    document.querySelector("#rateStatus").textContent = `Cambio: ${rateDate}`;
  });

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker.getRegistrations()
    .then(registrations => Promise.all(registrations.map(registration => registration.unregister())))
    .catch(() => {});
}
