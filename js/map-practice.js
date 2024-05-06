
// JavaScript Document

var nbMap = L.map('map-div').setView([40.5, -74.45], 14);

var CartoDB_VoyagerLabelsUnder = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 18,
	minZoom: 13
}).addTo(nbMap);


var museumIcon = L.icon({
iconUrl: 'SVG/museum-icon2.svg',
iconSize: [30],
iconAnchor: [15, 35], // point of the icon which will correspond to marker's location
popupAnchor: [1, -30], // point from which the popup should open relative to the iconAnchor
tooltipAnchor: [5, -30]
});

var artIcon = L.icon({
iconUrl: 'SVG/art-icon2.svg',
iconSize: [30],
iconAnchor: [15, 35], // point of the icon which will correspond to marker's location
popupAnchor:  [1, -30], // point from which the popup should open relative to the iconAnchor
tooltipAnchor: [5, -30]
});

// location markers for images

var marker0 = L.marker([40.491443, -74.454511],{icon: artIcon}).addTo(nbMap); //dreams of our children
var marker1 = L.marker([40.496287, -74.444849],{icon: artIcon}).addTo(nbMap); //toward a more just future
var marker2 = L.marker([40.504873, -74.449382],{icon: artIcon}).addTo(nbMap); //convergence point
var marker3 = L.marker([40.500423, -74.447499],{icon: artIcon}).addTo(nbMap); //A World Turned Inside Out
var marker4 = L.marker([40.502163, -74.447264],{icon: artIcon}).addTo(nbMap); //Class of 1957 Stained Glass Window
var marker5 = L.marker([40.500018, -74.445751],{icon: museumIcon}).addTo(nbMap); //Zimmerli Art Museum
var marker6 = L.marker([40.504666, -74.449811],{icon: artIcon}).addTo(nbMap); //Triptych
var marker7 = L.marker([40.499863, -74.445371],{icon: artIcon}).addTo(nbMap); //Walking Man
var marker8 = L.marker([40.497865, -74.449695],{icon: artIcon}).addTo(nbMap); //edo takeout
var marker9 = L.marker([40.505206, -74.452607],{icon: artIcon}).addTo(nbMap); //alexander

// location markers for places
var marker10 = L.marker([40.495781, -74.444545],{icon: museumIcon}).addTo(nbMap); //alfa art gallery
var marker11 = L.marker([40.492975, -74.44521],{icon: museumIcon}).addTo(nbMap); //mason gross galleries
var marker12 = L.marker([40.483156, -74.435365],{icon: museumIcon}).addTo(nbMap); //nj media arts center

//location popups html
var popup0 = '<h4><em>Dreams of Our Children</em></h4><p>Referred to both as The Dreams of Our Children and Una Gota Rompe La Piedra (A Drop Breaks the Stone), this is a mural located... <a href="#murals">Read More</a></p><img src="images/map-images/social/dreams.jpg">'

var popup1 = '<h4><em>Toward a More Just Future</em></h4><p>The mural representing the School of Social work is a piece spelling out "Toward a More Just Future" in both English and American Sign... <a href="#murals">Read More</a></p><img src="images/map-images/social/social-1.jpg">'

var popup2 = '<h4><em>Convergence Point</em></h4><p><em>Convergence Point</em> is a mural created by Rutgers Mason Gross School of the Arts alum Ingrid Morales. This piece, located in... <a href="#murals">Read More</a></p><img src="images/map-images/social/convergence.jpg">'

var popup3 = '<h4><em>A World Turned Inside Out</em></h4><p><em>A World Turned Inside Out</em> is a World War II Memorial honoring the 7,618 woman and men of Rutgers University... <a href="#history">Read More</a></p><img src="images/map-images/common/world.jpg">'

var popup4 = '<h4><em>Class of 1972 and 1957 Stained Glass Windows</em></h4><p>As a gift for the 60th and 40th year reunion of the aforementioned class, these pieces symbolize the combining of the... <a href="#history"> Read More</a></p><img src="images/map-images/common/glass.jpg">'

var popup5 = '<h4><a href="https://zimmerli.rutgers.edu/" target="_blank">Zimmerli Art Museum</a></h4><p>Last Wednesday, Simon decided to take a trip out to the Zimmerli Art Museum to discover the unique pieces on display... <a href="#simon"> Read More </a></p><img src="images/map-images/zimmerli.jpg"><p>The facade of Zimmerli Art Museum, via <a href="https://en.wikipedia.org/wiki/Zimmerli_Art_Museum_at_Rutgers_University" target="_blank">Wikipedia</a>.<p>'

var popup6 = '<h4>Hardenbergh Hall Triptych</h4><p>In order, this triptych features some koi fish, jellyfish, and finally a lone turtle. I really enjoy how the paintings... <a href="#students"> Read More</a></p><img src="images/map-images/student/fish.jpg">'

var popup7 = '<h4><em>Walking Man</em> by George Segal</h4><p>The bronze life-size figure represents an iconic age in the career of Segal, as well as his influence in the area. As a South Brunswick resident... <a href="#history">Read More</a></p><img src="images/map-images/common/segal.jpg">'

var popup8 = '<h4><em>One Piece</em> Mural at Edo Takeout</h4><p>This is a small mural located right outside of the Japanese Eatery Edo Takeout depicting Zoro (left) and Luffy (right) from the long-running... <a href="#murals"> Read More</a></p><img src="images/map-images/student/one-piece.jpg">'

var popup9 = '<h4><em>Hazbin Hotel</em> Fan Art</h4><p>This is a white board drawing depicting characters (Charlie Morningstar is shown here) from a new animated series called... <a href="#students"> Read More</a></p><img src="images/map-images/student/alexander.jpg">'

var popup10 = '<h4><a href="https://www.alfaart.org/" target="_blank">Alfa Art Gallery</a></h4><img src="images/map-images/alfa-art-gallery.jpg"><p>The inside of the Alfa Art Gallery, via <a href="https://www.alfaart.org/event/november-16-6-pm-united-we-stand-new-brunswick-art-salon-fall-2012-open-studio-meet-the-artists-second-opening-reception/" target="_blank">Alfa Art Gallery</a>.<p>'

var popup11 = '<h4><a href="https://www.masongross.rutgers.edu/degrees-programs/art-design/galleries-facilities/" target="_blank">Mason Gross Galleries</a></h4><img src="images/map-images/mason-gross-gallery.jpg"><p>The inside of the Mason Gross Galleries, by Collin Pieters via <a href="https://dailytargum.com/article/2015/02/mason-gross-galleries-exhibit-graduate-student-artwork" target="_blank">The Daily Targum</a>.<p>'

var popup12 = '<h4><a href="http://njfilmfest.com/" target="_blank">Rutgers Film Coop</a></h4><img src="images/map-images/film-coop.jpg"><p>A room filled for the NJ Film Fest, via <a href="https://www.thealliance.media/members/rutgers-film-co-opnew-jersey-media-arts-centernew-jersey-film-festivals/" target="_blank">The Alliance</a>.<p>'

var popupOptions = {minWidth:200}

//binding popups
marker0.bindPopup(popup0,popupOptions);
marker1.bindPopup(popup1,popupOptions);
marker2.bindPopup(popup2,popupOptions);
marker3.bindPopup(popup3,popupOptions);
marker4.bindPopup(popup4,popupOptions);
marker5.bindPopup(popup5,popupOptions);
marker6.bindPopup(popup6,popupOptions);
marker7.bindPopup(popup7,popupOptions);
marker8.bindPopup(popup8,popupOptions);
marker9.bindPopup(popup9,popupOptions);
marker10.bindPopup(popup10,popupOptions);
marker11.bindPopup(popup11,popupOptions);
marker12.bindPopup(popup12,popupOptions);

//tool tips
marker0.bindTooltip('Dreams of Our Children');
marker1.bindTooltip('Toward a More Just Future');
marker2.bindTooltip('Convergence Point');
marker3.bindTooltip('A World Turned Inside Out');
marker4.bindTooltip('Class of 1957 Stained Glass Window');
marker5.bindTooltip('Zimmerli Art Museum');
marker6.bindTooltip('Hardenbergh Hall Triptych');
marker7.bindTooltip('Walking Man');
marker8.bindTooltip('One Piece Mural at Edo Takeout');
marker9.bindTooltip('Artists of Alexander');
marker10.bindTooltip('Alfa Art Gallery');
marker11.bindTooltip('Mason Gross Galleries');
marker12.bindTooltip('NJ Media Arts Center');

//icons




//function onMapClick(e) {
//alert('You clicked the map at ' + e.latlng);
//}
//nbMap.on('click', onMapClick);