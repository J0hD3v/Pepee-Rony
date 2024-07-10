let map = L.map('map').setView([43.635087, 1.39703], 13);

//openstrretmap

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//polygones

let marker = L.marker([43.635087, 1.39703]).addTo(map);

marker.bindPopup("<b>Chez La Pépée Rony</b>").openPopup();
