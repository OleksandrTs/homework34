function initMap() {
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 2,
      center: {lat: 0, lng: 0}
    });
    directionsRenderer.setMap(map);

    var onChangeHandler = function() {
      calculateAndDisplayRoute(directionsService, directionsRenderer);
    };
    document.getElementById('submit').addEventListener("click", onChangeHandler);
    document.getElementById('start');
    document.getElementById('end');
  }

  function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    directionsService.route(
        {
          origin: {query: document.getElementById('start').value},
          destination: {query: document.getElementById('end').value},
          travelMode: 'DRIVING'
        },
        function(response, status) {
          if (status === 'OK') {
            directionsRenderer.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
  }