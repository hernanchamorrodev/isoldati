(function(){

        // utilizar provider y geocoder

        const latitud = document.querySelector("#lat").value || -34.6141937;
        const longitud = document.querySelector('#lng').value || -58.4593684;
        const mapa = L.map('map').setView([latitud, longitud], 12);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Mapa CABA',
            maxZoom: 18,
        }).addTo(mapa);

        // PIN
        const marker = new L.marker([latitud, longitud], {
            draggable: true,
            autoPan: true
        }).addTo(mapa);

        // detectar lat long 
        marker = addEventListener('moveend', (e) => {
            marker = e.target;
            const posicion = marker.getLatLng();
            mapa.panTo(new L.LatLng(posicion.lat, posicion.lng));
            document.querySelector('#lat').value = posicion.lat;
            document.querySelector('#lng').value = posicion.lng;

        });
    }
)();


