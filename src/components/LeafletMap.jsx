export const prerender = false;

import {useEffect} from "preact/compat";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import '@raruto/leaflet-elevation/src/index.js';
import '@raruto/leaflet-elevation/src/index.css';

export default function LeafletMap({gpxFile}) {

    useEffect(() => {

            if (import.meta.env.PROD) { // dodgy leaflet stuff
                L.Icon.Default.mergeOptions({
                    iconRetinaUrl: "/images/marker-icon-2x.png",
                    iconUrl: "/images/marker-icon.png",
                    shadowUrl: "/images/marker-shadow.png",
                });
            }

            // Initialize the map.
            const mapOptions = {
                maxZoom: 20,
                center: [54.425, -2.968],
                zoom: 14,
                maxBounds: [
                    [49.528423, -10.76418],
                    [61.331151, 1.9134116]
                ],
                attributionControl: false,
                rotate: true,
                preferCanvas: false,
                debug: false,
            };

            const map = L.map("map", mapOptions).setView([45, 10], 8);


            // Add OS raster tile layer
            L.tileLayer(`api/os-tiles/{z}/{x}/{y}.png`, {
                maxZoom: 19,
                attribution: 'Contains OS data © Crown copyright and database rights 2025',
                updateWhenIdle: true,  // reduces unnecessary requests
                reuseTiles: true,
                debug: false,
            }).addTo(map);

            L.marker([54.425, -2.968], {
                rotationAngle: 0,
                rotationOrigin: 'center'
            }).addTo(map);

            // Add elevation control
            const controlElevation = L.control.elevation({
                position: "topright",
                rotate: false,
                theme: "steelblue-theme",
                collapsed: false,
                hotLine: false,
                followMarker: false,
                markers: false,
                detached: true,
                elevationDiv: "#elevation-div",
                debug: false,
                srcFolder: `${window.location.origin}/leaflet-elevation/src/`
            }).addTo(map);

            controlElevation.load(gpxFile);

            return () => map.remove();
        }
        ,
        []
    )
    ;

    return (
        <div className="flex flex-col justify-center align-middle h-screen">
            <div id="map" className="flex-[2] w-4/5 min-h-0" />
            <div id="elevation-div" className="flex-[1] w-4/5 min-h-0" />
        </div>
    );
}