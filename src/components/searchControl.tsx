import "leaflet-geosearch/dist/geosearch.css"
import pin from "../assets/pin.png"
import { Icon } from "leaflet"
import { useEffect} from "react";
import { useMap} from "react-leaflet"
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch"

const customIcon = new Icon({
    iconUrl: pin,
    iconSize: [38, 38],
  })

export const SearchControl = (props: any) => {
    const {onChangeLocation} = props
    const map = useMap();
  
    useEffect((): any => {
      const searchControl = GeoSearchControl({
        style: "bar",
        provider: new OpenStreetMapProvider(),
        marker: {
            icon: customIcon
        },
        autoComplete: true
    })

    map.on("geosearch/showlocation", (result: any) => {
        let lang: number = result.location.y
        let long: number = result.location.x
        onChangeLocation([lang, long])
    })

    map.addControl(searchControl);
    return () => map.removeControl(searchControl)

    }, [props]);
  
    return null;
}