# Earthquake Visualization with Leaflet.js

## Overview
This project visualizes earthquake data using [Leaflet.js](https://leafletjs.com/) and data from the United States Geological Survey (USGS). The interactive map plots earthquake occurrences based on magnitude and depth, helping to provide an informative and easy-to-understand way to view seismic activity.

## Features
- Earthquake markers scaled based on **magnitude**.
- Earthquake markers colored based on **depth** (darker colors for deeper quakes).
- Popups with additional information about each earthquake, including **magnitude**, **depth**, and **location**.
- A **legend** to explain the color-coding for earthquake depth.
- Real-time data fetched from the **USGS GeoJSON Feed**, updated every five minutes.

## Visualization Preview
![Map Preview]([preview-image.png](https://github.com/floraaka/leaflet-challenge/blob/main/Leaflet-Part-1/Screenshot 2024-10-17 074319.png))

## Getting Started

### Prerequisites
To run this project locally, you need:
- A modern web browser (Chrome, Firefox, Edge, etc.).
- Basic understanding of JavaScript, HTML, and Leaflet.js.

### Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/floraaka/leaflet-challenge.git
   cd leaflet-challenge
## Technologies Used
1. HTML5 and CSS3 for the structure and styling of the page.
2. JavaScript for dynamic behavior and fetching data.
3. Leaflet.js for the interactive map and earthquake visualization.
4. D3.js for fetching and handling the GeoJSON data.
