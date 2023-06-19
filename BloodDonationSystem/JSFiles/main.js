const navToggle = document.querySelector(".mobile-nav");
const primaryNav = document.querySelector(".nav");

navToggle.addEventListener("click", ()=> {
    primaryNav.hasAttribute("data-visible") ? navToggle.setAttribute("aria-expanded", false) : navToggle.setAttribute("aria-expanded", true);
    primaryNav.toggleAttribute("data-visible");
});

/* Search Bar */

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("map-list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("span")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


/* Map Settings */

var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


L.Control.geocoder().addTo(map);



var marker = L.marker([40.99130848477239, 28.83212363020195]).addTo(map);

marker.bindPopup("<b>İstanbul Kültür University</b><br/>Ataköy/İstanbul 34158<br/>054213287").openPopup();

var marker = L.marker([40.99230743962818, 28.846077827027372]).addTo(map);

marker.bindPopup("<b>Şirinevler Meydan</b><br>Bahçelievler/İstanbul 34188<br/>0212 453 29 00").openPopup();

var marker = L.marker([41.409567257132615, 27.354541036561933]).addTo(map);

marker.bindPopup("<b>Lüleburgaz Kan Bağışı Merkezi</b><br>Lüleburgaz/Kırklareli 39750<br/>0212 453 29 00").openPopup();

var marker = L.marker([41.66003859673592, 26.58908391301401]).addTo(map);

marker.bindPopup("<b>Edirne Kan Bağışı Merkezi</b><br>Merkez/Kırklareli 22100<br/>0212 453 29 00").openPopup();

var marker = L.marker([41.16388902204162, 27.804211105804256]).addTo(map);

marker.bindPopup("<b>Çorlu Atatürk Heykeli</b><br>Çorlu/Tekirdağ 59850<br/>0212 453 29 00").openPopup();

var marker = L.marker([39.652331842248394, 27.883391802804713]).addTo(map);

marker.bindPopup("<b>Balıkesir Kan Bağışı Merkezi</b><br>Karesi/Balıkesir<br/>0212 453 29 00").openPopup();

var marker = L.marker([39.9394445234391, 32.883943143692385]).addTo(map);

marker.bindPopup("<b>Ankara Kan Bağışı Merkezi</b><br/><br/>Mamak/Ankara 22100<br/>0212 453 29 00").openPopup();

var marker = L.marker([40.921181807875584, 29.175664215846318]).addTo(map);

marker.bindPopup("<b>Sümer Günay KAB</b><br/>Kartal/Istanbul<br/>0216 458 05 00").openPopup();



