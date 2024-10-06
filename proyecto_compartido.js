
/* ================================ MAP CUNDINAMARCA ====================================*/ 

let map = L.map("map").setView([5.1096596,-74.0995854],8); // coordenadas y zoom

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}", {foo: "bar", attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}). addTo(map); 

/* ====================== ANIMACIÓN (1) ==================== */ 

document.getElementById("seleccionar-paramo").addEventListener("change", function(e) {
    let coordenadas = e.target.value.split(",");
    if (coordenadas.length === 2) {
        let lat = parseFloat(coordenadas[0]);
        let lng = parseFloat(coordenadas[1]);

        // Usa flyTo con las coordenadas y el nivel de zoom
        map.flyTo([lat, lng], 11);
    }
});

/* ======== (2) AGREGAMOS MARCADORES (ESTO ES LO MAS SENCILLO) ======= */

let marcador_chingaza = L.marker([4.517864102432524, -73.75027924754262]).addTo(map); 

marcador_chingaza.bindPopup(`
    <div style="text-align: center;">
        <b>Páramo de Chingaza</b><br>
        <img src="https://paramosdecolombia.com/wp-content/uploads/2020/01/como-llegar-al-paramo-de-chingaza.jpg" alt="Imagen del Páramo de Chingaza" style="width: 100px; height: auto;"><br>
        Cuenta con una extensión de 76.600 Ha <br>
        El PNN se ubica en la cordillera oriental de los Andes
    </div>
`); 

let marcador_cruz_verde = L.marker([4.541342718736326, -74.03636698913603]).addTo(map);
marcador_cruz_verde.bindPopup(`
    <div style="text-align: center;">
        <b>Páramo de Cruz Verde</b><br>
        <img src="https://imagenes.eltiempo.com/files/image_1200_600/uploads/2020/04/15/5e97799698d89.jpeg" alt="Imagen del Páramo Cruz Verde" style="width: 100px; height: auto;"><br>
        Ubicación: Cundinamarca, Colombia
    </div>
`);

let marcador_sumapaz = L.marker([3.753167070675843, -74.41779599122788]).addTo(map);
marcador_sumapaz.bindPopup(`
    <div style="text-align: center;">
        <b>Páramo de Sumapaz</b><br>
        <img src="https://lanotapositiva.com/wp-content/uploads/2019/11/Ambientalistas-y-campesinos-buscan-proteger-el-p%C3%A1ramo-del-Sumapaz-el-m%C3%A1s-grande-del-mundo-La-Nota-Positiva-1.jpg" alt="Imagen del Páramo Sumapaz" style="width: 100px; height: auto;"><br>
        Se ubica en 5 municipios del departamento de Cundinamarca <br>
        Es uno de los más grandes del mundo.
    </div>
`);

let marcador_rabanal = L.marker([5.428500464300887, -73.57006135021037]).addTo(map);
marcador_rabanal.bindPopup(`
    <div style="text-align: center;">
        <b>Páramo de Rabanal y Río Bogotá</b><br>
        <img src="https://i0.wp.com/humedalesbogota.com/wp-content/uploads/2015/12/paramodeguerrero.jpg?fit=720%2C480&ssl=1&w=640" alt="Imagen del Páramo de Rabanal y Río Bogotá" style="width: 100px; height: auto;"><br>
        Cuenta con una extensión de 415,744 ha <br>
        Se encuentra en la parte oriental de Boyacá y Cundinamarca
    </div>
`);

let marcador_guerrero = L.marker([5.066883733156485, -74.09999708931178]).addTo(map);
marcador_guerrero.bindPopup(`
    <div style="text-align: center;">
        <b>Páramo de Guerrero</b><br>
        <img src="https://i0.wp.com/humedalesbogota.com/wp-content/uploads/2015/12/paramodeguerrero.jpg?fit=720%2C480&ssl=1&w=640" alt="Imagen del Páramo de Guerrero" style="width: 100px; height: auto;"><br>
        Se ubica al norte de Cundinamarca <br>
        Se encuentra entre los 3200 y 3780 msmm
    </div>
`);


/* ================================ MAP BOYACÁ ====================================*/ 

let map_boyaca = L.map("map-boy").setView([5.4541666666667, -73.361944444444],8);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}", {foo: "bar", attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}). addTo(map_boyaca);

/* ====================== ANIMACIÓN (1) ==================== */ 

document.getElementById("seleccionar-paramo2").addEventListener("change", function(e) {
    let coordenadas = e.target.value.split(",");
    if (coordenadas.length === 2) { 

        let lat = parseFloat(coordenadas[0]); 

        // Usa flyTo con las coordenadas y el nivel de zoom
        map_boyaca.flyTo([lat, lng], 11);
    }
});

/* ======== (2) AGREGAMOS MARCADORES (ESTO ES LO MAS SENCILLO) ======= */

let marcador_altiplano_cundiboyacense = L.marker([5.420082140104871, -73.42149735572102]).addTo(map_boyaca); 

marcador_altiplano_cundiboyacense.bindPopup(`
    <div style="text-align: center;">
        <b>Páramo Altiplano Cundiboyacense</b><br>
        <img src="https://entreojos.co/wp-content/uploads/2020/10/k2_items_src_c3698948bbef8e01b61b372d4a29088b.jpg" alt="Imagen del Páramo de Chingaza" style="width: 100px; height: auto;"><br>
        Cuenta con una extensión de 3.070,83 Ha <br>
        Se encuentran aproximadamente 27 ríos y 504 quebradas
    </div>
`); 

let marcador_iguaque_merchan = L.marker([5.703416051527476, -73.46653917347882]).addTo(map_boyaca);
marcador_iguaque_merchan.bindPopup(`
    <div style="text-align: center;">
        <b>Páramo Iguaque - Merchán</b><br>
        <img src="https://www.researchgate.net/publication/363947410/figure/fig1/AS:11431281087134057@1664462420298/Figura-23-Loma-ML-Complejo-Iguaque-Merchan-municipio-de-Saboya-Fotografia.png" alt="Imagen del Páramo Cruz Verde" style="width: 100px; height: auto;"><br>
        Cuenta con una extensión de 20.125,85 ha <br>
        Cuenta con áreas protegidas de orden Nacional y Regional.
    </div>
`);

let marcador_rabanal_rio_bogota = L.marker([5.434280662263399, -73.56604449693455]).addTo(map_boyaca);
marcador_rabanal_rio_bogota.bindPopup(`
    <div style="text-align: center;">
        <b>Páramo de Rabanal y Río Bogotá</b><br>
        <img src="https://boyaca7dias.com.co/wp-content/uploads/2019/12/Laguna-Verde-Rabanal-Ventaquemada.jpg" alt="Imagen del Páramo Sumapaz" style="width: 100px; height: auto;"><br>
        Se encuentra en la Cordillera Oriental <br>
        Cuenta con una extensión de 24650 ha 
    </div>
`);

let marcador_tota_bijagual_mamapacha = L.marker([5.2828753111968405, -73.24663715971354]).addTo(map_boyaca);
marcador_tota_bijagual_mamapacha.bindPopup(`
    <div style="text-align: center;">
        <b>Páramo Tota - Bijagual - Mamapacha</b><br>
        <img src="https://entreojos.co/wp-content/uploads/2020/10/k2_items_src_1ba6f013b03d3119f460bad3db0fbe5d.jpg" style="width: 100px; height: auto;"><br>
        Cuenta con una extensión de 151.247,98 ha <br>
        Se encuentra en la Cordillera Oriental
    </div>
`);

let marcador_sierra_nevada_del_cocuy = L.marker([6.424428164269133, -72.32894114692405]).addTo(map_boyaca);
marcador_sierra_nevada_del_cocuy.bindPopup(`
    <div style="text-align: center;">
        <b>Páramo Sierra Nevada del Cocuy</b><br>
        <img src="https://ecoglobalexpeditions.com/wp-content/uploads/2017/04/cocuy.jpg" alt="Imagen del Páramo de Guerrero" style="width: 100px; height: auto;"><br>
        Cuenta con una extensión de 271167 ha <br>
        Se encuentra en la Cordillera Oriental y hace parte de 5 departamentos
    </div>
`);

let marcador_pisba = L.marker([5.888060799980661, -72.56631811289154]).addTo(map_boyaca);
marcador_pisba.bindPopup(`
    <div style="text-align: center;">
        <b>Páramo de Pisba</b><br>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAvBMgX7EIGdRGvOxH7v0OtCav9FddUQWkvQ&s" alt="Imagen del Páramo de Guerrero" style="width: 100px; height: auto;"><br>
        Cuenta con una extensión de 81.481  ha <br>
        Se encuentra en la Cordillera Oriental y hace parte de Boyacá y Casanare
    </div>
`);

// ===================== DARK MODE ======================

const btnSwitch = document.querySelector('#Switch'); 

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark'); 
    btnSwitch.classList.toggle('active');

    // GUARDAMOS MODO EN LOCALSTORAGE 
    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');
    }else{
        localStorage.setItem('dark-mode', 'false');
    } // -> con esto guardamos si el usuario esta en modo nocturno o no 

});

// OBTENEMOS EL MODO ACTUAL EN EL QUE NOS ENCONTRAMOS

if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark');
    btnSwitch.classList.add('active'); 
} else{
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active'); 
}