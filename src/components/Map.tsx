import "leaflet/dist/leaflet.css"
import "./Map.css"
import "leaflet-geosearch/dist/geosearch.css"
import { useEffect, useState } from "react";
import { MapContainer, TileLayer} from "react-leaflet"
import { SearchControl } from "./searchControl";

function Map() {
    const [langLong, setLangLong] = useState<number[]>([0,0])

    useEffect(() => {
        console.log(langLong)
    })

    const onChangeLocation = (location: number[]) => {
        setLangLong(location)
    }

    return (
        <div className="master-container">
            <MapContainer className="map" center={[35.652832, 139.839478]} zoom={8} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <SearchControl onChangeLocation={onChangeLocation} />
            </MapContainer>
        </div>
    )
}

export default Map