// Create map
const map = L.map('mapid').setView([-8.0586488,-34.9076639], 15);

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

// Create popup overlay
const popup = L.popup({
  closeButton: false,
  className: 'map-popup',
  minwidth: 240,
  minheight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>');

// Create and add marker
L
.marker([-8.0586488,-34.9076639], {icon: icon})
.addTo(map)
.bindPopup(popup);