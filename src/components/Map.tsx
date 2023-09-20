import "leaflet/dist/leaflet.css"
import "./Map.css"
import "leaflet-geosearch/dist/geosearch.css"
import pin from "../assets/pin.png"
import { useEffect, useState } from "react";
import { Icon, map, } from "leaflet"
import { MapContainer, TileLayer, useMap} from "react-leaflet"
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch"

const customIcon = new Icon({
    iconUrl: pin,
    iconSize: [38, 38],
  })

function Map() {
    const [langLong, setLangLong] = useState<[number, number]>([0,0])

    const SearchControl = (props: any) => {
        const map = useMap();
      
        useEffect((): any => {
          const searchControl = GeoSearchControl({
            style: "bar",
            provider: new OpenStreetMapProvider(),
            marker: {
                icon: customIcon
            },
            popupFormat: (result: any) => {
                return <p>{result.label}</p>
            }
        })
    
        map.on("geosearch/showlocation", (result: any) => {
        let lang: number = result.location.y
        let long: number = result.location.x
        setLangLong([lang, long])
        })

        map.addControl(searchControl);
        return () => map.removeControl(searchControl)
    
        }, [props]);
      
        return null;
    }

    return (
        <div className="master-container">
            <MapContainer className="map" center={[35.652832, 139.839478]} zoom={8} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <SearchControl
                    // showMarker={true}
                    // showPopup={false}
                    // popupFormat={(result: any) => result.label}
                    // maxMarkers={3}
                    // retainZoomLevel={false}
                    // animateZoom={true}
                    // autoClose={false}
                    // searchLabel={"Enter address, please"}
                    // keepResult={true}
                />
            </MapContainer>
        </div>
    )
}

export default Map