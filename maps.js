
//  window.markers = [];

  
async function init(){
    let retreived = await _runGet()
    console.log(retreived)
    window.markers.push(retreived)
    window.markers = retreived
    LoadMap();
    let map1 = retreived.map(markers => markers)
    map1 = markers[0]
    }

    init()
    console.log(window.markers)

// console.log(window.markers)
 function _runGet () {
    return fetch(`http://localhost:3001/stops/firstfive`)
       .then(res => res.json())
       .then(res => res)
       .catch(err => console.log(err, 'Error fetching'))
  };


var markers = []
// {
//     "_id": "5c9194aa878d08b5878e6cc8",
//     "stop_id": 24645,
//     "stop_code": 24645,
//     "stop_name": "Highlands Ranch Pkwy & Foothills Canyon Blvd",
//     "stop_desc": "Vehicles Travelling Northeast",
//     "stop_lat": 39.53933,
//     "stop_lon": -105.013239
// }
    /* 1 */
// {
 
//     "stop_id" : 33835,
//     "stop_code" : 33835,
//     "stop_name" : "Paradise Hills",
//     "stop_desc" : "Vehicles Travelling North",
//     "stop_lat" : 39.704446,
//     "stop_lon" : -105.250268
// },

// /* 2 */
// {
 
//     "stop_id" : 34118,
//     "stop_code" : 34118,
//     "stop_name" : "20th St / Welton Station",
//     "stop_desc" : "Vehicles Travelling North",
//     "stop_lat" : 39.748163,
//     "stop_lon" : -104.986671
// },

// /* 3 */
// {

//     "stop_id" : 33820,
//     "stop_code" : 33820,
//     "stop_name" : "Longmont",
//     "stop_desc" : "Vehicles Travelling North",
//     "stop_lat" : 40.149505,
//     "stop_lon" : -105.103068
// },

// /* 4 */
// {
 
//     "stop_id" : 33702,
//     "stop_code" : 33702,
//     "stop_name" : "Market Street Station",
//     "stop_desc" : "Vehicles Travelling North",
//     "stop_lat" : 39.75058,
//     "stop_lon" : -104.997926
// },

// /* 5 */
// {
 
//     "stop_id" : 26157,
//     "stop_code" : 26157,
//     "stop_name" : "40th Ave & Airport Blvd-Gateway Park Stn Gate D",
//     "stop_desc" : "Vehicles Travelling West",
//     "stop_lat" : 39.770084,
//     "stop_lon" : -104.786985
// },

// /* 6 */
// {
 
//     "stop_id" : 24890,
//     "stop_code" : 24890,
//     "stop_name" : "Englewood Station",
//     "stop_desc" : "Vehicles Travelling North",
//     "stop_lat" : 39.655904,
//     "stop_lon" : -104.999736
// },

// /* 7 */
// {
 
//     "stop_id" : 25428,
//     "stop_code" : 25428,
//     "stop_name" : "Broncos Stadium at Mile High Station",
//     "stop_desc" : "Vehicles Travelling Northeast",
//     "stop_lat" : 39.743543,
//     "stop_lon" : -105.013526
// },

// /* 8 */
// {
 
//     "stop_id" : 34313,
//     "stop_code" : 34313,
//     "stop_name" : "Union Station Gate B15",
//     "stop_desc" : "Vehicles Travelling Southeast",
//     "stop_lat" : 39.754647,
//     "stop_lon" : -105.001853
// },

// // /* 9 */
// {
 
//     "stop_id" : 24591,
//     "stop_code" : 24591,
//     "stop_name" : "Downtown Boulder Station Gate F",
//     "stop_desc" : "Vehicles Travelling South",
//     "stop_lat" : 40.01698,
//     "stop_lon" : -105.27697
// },


// {

//     "stop_id" : 10907,
//     "stop_code" : 10907,
//     "stop_name" : "W 32nd Ave & Quail St",
//     "stop_desc" : "Vehicles Travelling East",
//     "stop_lat" : 39.761872,
//     "stop_lon" : -105.123312
// }


     function LoadMap() {
        
        
         var mapOptions = {
             center: new google.maps.LatLng(markers[0].stop_lat, markers[0].stop_lon),
             zoom: 8,
             mapTypeId: google.maps.MapTypeId.ROADMAP
         };

         var infoWindow = new google.maps.InfoWindow();
         var latlngbounds = new google.maps.LatLngBounds();
         var map = new google.maps.Map(document.getElementById("map"), mapOptions);

         map.addListener('click', function (e){
            console.log('hello', e.stop_id)
        })

         for (var i = 0; i < markers.length; i++) {
             var data = markers[i]
             var myLatlng = new google.maps.LatLng(data.stop_lat, data.stop_lon);
             var marker = new google.maps.Marker({
                 position: myLatlng,
                 map: map,
                 title: data.title
             });

             (function (marker, data) {
                 google.maps.event.addListener(marker, "click", function (e) {
                     infoWindow.setContent("<div style = 'width:200px;min-height:40px'>" + data.stop_name+ "</div>");
                     infoWindow.open(map, marker);
                 });
             })(marker, data);
             latlngbounds.extend(marker.position);

         }
         
         var bounds = new google.maps.LatLngBounds();
         map.setCenter(latlngbounds.getCenter());
         map.fitBounds(latlngbounds);
     }

    

