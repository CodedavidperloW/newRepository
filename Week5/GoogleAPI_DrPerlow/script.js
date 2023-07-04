const apiKey = "AIzaSyAYTkGO4BGuBP44peOqI_p69lPdfDOknmA";
const address = '3877 North 7th Street, Phoenix, Arizona, 85014, United States';

const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

fetch(geocodeUrl)
  .then(response => response.json())
  .then(data => {
    if (data.results.length > 0) {
      const location = data.results[0].geometry.location;
      const latitude = location.lat;
      const longitude = location.lng;

      const map= new google.maps.Map(document.getElementById('map'), {
        center: {lat: latitude, lng:longitude},
        zoom:12
      });

      const marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        title: 'Dr. Perlow\'s office'
      });
      
    } else {
      console.log('No results found');
    }
  })
  .catch(error => {
    console.log('Error occurred:', error);
  });
