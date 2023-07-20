import "leaflet/dist/leaflet.css";
import "./Map.css";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

function Map() {
    return (
        <div className="master-container">
            <MapContainer className="map" center={[35.652832, 139.839478]} zoom={8} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    )
}

export default Map;