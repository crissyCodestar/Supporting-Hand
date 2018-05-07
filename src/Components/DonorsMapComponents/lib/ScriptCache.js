/*
Asynchronously loads JS <script> tags. It will only load a  single
script tag on a page. If it's already loaded it calls the callback from
the onLoad event.
*/

this.scriptCache = cache({
  google: 'https://maps.googleapis.com/maps/api/js'
});
