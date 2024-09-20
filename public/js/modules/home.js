const map = L.map('map').setView([48.8566, 2.3522], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

const nteMarker = L.marker([47.2184, -1.5536]).addTo(map).bindPopup('Nantes (NTE)');
const cdgMarker = L.marker([49.0097, 2.5479]).addTo(map).bindPopup('Paris Charles de Gaulle (CDG)');
const bslMarker = L.marker([47.5881, 7.5294]).addTo(map).bindPopup('Basel-Mulhouse (BSL)');

const latlngs = [
    [47.2184, -1.5536],
    [49.0097, 2.5479],
    [47.5881, 7.5294]
];

const polyline = L.polyline(latlngs, { color: 'blue' }).addTo(map);

map.fitBounds(polyline.getBounds());

const airplaneElement = document.createElement('div');
airplaneElement.style.width = '32px';
airplaneElement.style.height = '32px';
airplaneElement.style.backgroundImage = 'url(https://upload.wikimedia.org/wikipedia/commons/a/a6/Avion_silouhette.png)';
airplaneElement.style.backgroundSize = 'cover';
airplaneElement.style.position = 'absolute';
map.getPanes().overlayPane.appendChild(airplaneElement);

let currentIndex = 0;
const steps = 100;
const flightSpeed = 800;

function getDistance(start, end) {
    const R = 6371;
    const dLat = (end[0] - start[0]) * Math.PI / 180;
    const dLng = (end[1] - start[1]) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(start[0] * Math.PI / 180) * Math.cos(end[0] * Math.PI / 180) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function getTotalDistance(latlngs) {
    let totalDistance = 0;
    for (let i = 0; i < latlngs.length - 1; i++) {
        totalDistance += getDistance(latlngs[i], latlngs[i + 1]);
    }
    return totalDistance;
}

const totalDistance = getTotalDistance(latlngs);
let distanceCovered = 0;

function formatTime(hours, minutes) {
    const h = Math.floor(hours);
    const m = Math.floor(minutes % 60);
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
}
    const timeRemaining = (totalDistance - distanceCovered) / flightSpeed;
    const currentTime = new Date();
    const arrivalTime = new Date(currentTime.getTime() + timeRemaining * 3600000);
    const arrivalTimeFormatted = formatTime(arrivalTime.getHours(), arrivalTime.getMinutes());
    document.getElementById('arrivalTime').textContent = arrivalTimeFormatted;

function updateAirplanePosition(latLng, angle) {
    const point = map.latLngToLayerPoint(latLng);
    airplaneElement.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
    airplaneElement.style.left = `${point.x}px`;
    airplaneElement.style.top = `${point.y}px`;

    const timeRemaining = (totalDistance - distanceCovered) / flightSpeed;

    document.getElementById('remainingTime').textContent = `${Math.floor(timeRemaining)}h ${(timeRemaining % 1 * 60).toFixed(0)}m`;
    document.getElementById('distanceCovered').textContent = `${distanceCovered.toFixed(2)} km`;
    document.getElementById('totalDistance').textContent = `${totalDistance.toFixed(2)} km`;
}

function getAngle(reference, target) {
    const deltaLng = target[1] - reference[1];
    const deltaLat = target[0] - reference[0];
    return Math.atan2(deltaLng, deltaLat) * (180 / Math.PI);
}

function moveAirplane() {
    if (currentIndex < latlngs.length - 1) {
        const startLatLng = latlngs[currentIndex];
        const endLatLng = latlngs[currentIndex + 1];
        const segmentDistance = getDistance(startLatLng, endLatLng);

        for (let i = 0; i <= steps; i++) {
            setTimeout(() => {
                const lat = startLatLng[0] + (endLatLng[0] - startLatLng[0]) * (i / steps);
                const lng = startLatLng[1] + (endLatLng[1] - startLatLng[1]) * (i / steps);
                const currentLatLng = [lat, lng];

                const angle = getAngle(startLatLng, endLatLng);
                distanceCovered += segmentDistance / steps;
                updateAirplanePosition(currentLatLng, angle);
            }, i * 100);
        }

        currentIndex++;
        setTimeout(moveAirplane, (steps + 1) * 100);
    } else {
        currentIndex = 0;
        distanceCovered = 0;
        moveAirplane();
    }
}

moveAirplane();