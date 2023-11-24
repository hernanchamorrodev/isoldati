(function(){

        // utilizar provider y geocoder
        const latitud = document.querySelector("#lat").value || -34.6141937;
        const longitud = document.querySelector('#lng').value || -58.4593684;
        const mapa = L.map('map').setView([latitud, longitud], 12);

        const geocodeService = L.esri.Geocoding.geocodeService();

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Mapa CABA',
            maxZoom: 18,
        }).addTo(mapa);

        // PIN
        var marker = new L.marker([latitud, longitud], {
            draggable: true,
            autoPan: true
        }).addTo(mapa);

        // detectar lat long 
        marker.on('moveend', (e) => {
            marker = e.target;
            var posicion = marker.getLatLng();
            mapa.panTo(new L.LatLng(posicion.lat, posicion.lng));
            
            geocodeService.reverse().latlng(posicion, 15).run((error, result) => {
                console.log(result)
                marker.bindPopup(result.address.LongLabel);

                // llenar los campos de direccion
                document.querySelector(".calle").textContent = result.address.Address ?? "";
                document.querySelector('#calle').value = result.address.Address ?? '';
                document.querySelector("#lat").value = result.latlng.lat ?? "";
                document.querySelector("#lng").value = result.latlng.lng ?? "";
            }
            )

        });
    }
)();


