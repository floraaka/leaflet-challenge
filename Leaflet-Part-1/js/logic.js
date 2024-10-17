// Create the map object
var map = L.map('map').setView([37.7749, -122.4194], 5); // Starting location: San Francisco

// Add tile layer to the map (base layer)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '© OpenStreetMap'
}).addTo(map);

// Function to determine marker size based on earthquake magnitude
function markerSize(magnitude) {
  return magnitude * 5;
}

// Function to determine marker color based on earthquake depth
function markerColor(depth) {
  if (depth > 90) return "#FF0000";    // Red for deeper earthquakes
  if (depth > 70) return "#FF8C00";    // Orange for moderately deep
  if (depth > 50) return "#FFD700";    // Yellow for shallow
  if (depth > 30) return "#ADFF2F";    // Light green
  return "#00FF00";                    // Bright green for very shallow
}

// Fetch earthquake data from the USGS API
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {

  // Loop through the earthquake data to create markers
  data.features.forEach(function(feature) {
    var coords = feature.geometry.coordinates;  // [longitude, latitude, depth]
    var magnitude = feature.properties.mag;
    var depth = coords[2];

    // Create circle markers based on magnitude and depth
    L.circleMarker([coords[1], coords[0]], {
      radius: markerSize(magnitude),      // Radius based on magnitude
      fillColor: markerColor(depth),      // Color based on depth
      color: "#000",                      // Border color
      weight: 1,                          // Border weight
      opacity: 1,
      fillOpacity: 0.8
    }).bindPopup(
      `<h3>${feature.properties.place}</h3>
       <hr>
       <p><strong>Magnitude:</strong> ${magnitude}</p>
       <p><strong>Depth:</strong> ${depth} km</p>`
    ).addTo(map);
  });

  // Add legend to the map
  var legend = L.control({ position: "bottomright" });

  legend.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [-10, 30, 50, 70, 90],
        colors = ["#00FF00", "#ADFF2F", "#FFD700", "#FF8C00", "#FF0000"];

    // Loop through our intervals and generate a label with a colored square for each range
    div.innerHTML += '<h4>Earthquake Depth (km)</h4>';
    for (var i = 0; i < grades.length; i++) {
      div.innerHTML +=
        '<i style="background:' + colors[i] + '"></i> ' +
        grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }
    return div;
  };

  // Add the legend to the map
  legend.addTo(map);
});
