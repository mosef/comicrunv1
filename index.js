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
//function to get comic information
const COMIC_URL = 'http://comicvine.gamespot.com/api/issues/?api_key=6a6bc4387dea4888385c676865344a6317d4bdc9&format=json';
function getComicInfo (searchTerm, callBack) {
  const settings = {
    url: COMIC_URL,
    data: {
      q: `${searchTerm} in:name`,
      limit: 5
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };

  $.ajax(settings);
}
//function to handle user search
function searchSubmit() {
    $('.js-search-form').click(e=>{
    event.preventDefault();
    const searchTarget = $(event.currentTarget).find('.js-query');
    const query = searchTarget.val();
    getComicInfo(query,callBack)
    })
}

//function for pressing the find comics button

//function to render user search
//function to render comic information
//function to take location from user and find near by comic shops
