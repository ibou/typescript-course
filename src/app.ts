
import axios from 'axios';
 
const addressInput = document.getElementById('address')! as HTMLInputElement;;
const GOOGLE_API_KEY = 'AIzaSyCDYs3FhDOC5qQBCF8eIINBt4oLn6cY1TI';

declare var google: any;

type GoogleGeoCodingResponse = {
  results: {
    geometry: {
      location: {
        lat: number,
        lng: number
      }
    }
  }[];
  status: 'OK' | 'ZERO_RESULTS';
}

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`;
  axios.get<GoogleGeoCodingResponse>(url)
    .then(response => {
      if (response.data.status !== 'OK') {
        throw new Error('Could not fetch this location ');
      }
      const coordinates = response.data.results[0].geometry.location;
      console.log(coordinates);
      
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: coordinates 
      });
      new google.maps.Marker({ position: coordinates, map: map });
      console.log(coordinates);
    })
    .catch(err => {
      console.log("Error from my API: ", err);
    })
}

declare var ol: any;
 
function searchAddressHandlerFree(event: Event) {
  event.preventDefault();
 
  const coordinates = {lat: 48.7977784, lng: 2.427084}; // Can't fetch coordinates from Google API, use dummy ones
 
  document.getElementById('map')!.innerHTML = ''; // clear <p> from <div id="map">
  new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
      zoom: 16
    })
  });
}
 
document.getElementById("googleapi").addEventListener("click", searchAddressHandler);
document.getElementById("openlayer").addEventListener("click", searchAddressHandlerFree);
 