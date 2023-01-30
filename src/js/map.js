(
    // ubicacion : Buenos aires
    // zoom : 12
    // tipo de mapa : satelite
    // marcador : true

    function(){
        // Buenos Aires, Argentina
        const latitud = -34.6036844;
        const longitud = -58.3815591;
        const mapa = L.map('map').setView([latitud, longitud], 12);

        let marker = L.marker([latitud, longitud], {
            draggable: true,
            title: "Ubicalo en el mapa",
            alt: "El mapa de Buenos Aires",
            riseOnHover: true,
            autoPan: true,
        }).addTo(mapa);

        // Agregar el tile layer a openstreetmap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            }).addTo(mapa);

        }

)()