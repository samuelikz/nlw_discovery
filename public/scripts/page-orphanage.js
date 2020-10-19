const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
// Create map
const map = L.map('mapid', options).setView([-8.0586488,-34.9076639], 15);

// Create and add tile layer
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  ).addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
});

// Create and add marker
L
.marker([-8.0586488,-34.9076639], {icon: icon})
.addTo(map)

/* image gallery*/

function selectImage(event) {
    const button = event.currentTarget

    //Remover todas as class active
    const buttons = document.querySelectorAll(".images button") // Pesquisar todos
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }
    //Selecionar a imagem 
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanages-details > img")
    
    //atualizar o container de imagem
    imageContainer.src = image.src


    //Adicionar a class active para o botão clicado
    button.classList.add("active")
}
