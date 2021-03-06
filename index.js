// Load google maps
var map, infoWindow;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 6
        });
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }

// refined function that pulls specific data from comic vine api
const COMIC_URL = 'https://comicvine.gamespot.com/api/volumes/?api_key=6a6bc4387dea4888385c676865344a6317d4bdc9&format=jsonp';
$.ajax({
    url: COMIC_URL,
    jsonp: "json_callback",
    dataType: "jsonp",
    success: function (data) {
        console.log(data.results);
    }
});

//function to handle user search
function searchSubmit() {
    $('.js-search-form').click(e => {
    event.preventDefault();
    const searchTarget = $(event.currentTarget).find('.js-query');
    const query = searchTarget.val();
    getComicInfo(query,callBack)
    });
}
//function renderResults is currently a place holder to be later put into the success portion of the ajax call for the comicVine API
function renderResults(){
    console.log(results)
};

//function for pressing the find comics button *this requires the maps to be turned on*
//function to render comic information
//function to render user search
//function to take location from user and find near by comic shops
