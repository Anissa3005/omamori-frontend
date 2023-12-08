import Navbar from "../components/Navbar"
import Map from "../components/Map"
import "./Home.css"
import { useState } from "react"



function Home() {
    const [newImage, setNewImage] = useState<string>("")

    const handelImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const image = e.target.files
        if (image && image?.length > 0) {
            setNewImage(URL.createObjectURL(image[0]))
        }
    }
    return (
        <div>
            <Navbar />
                <div className="container">
                     <Map />
                </div>
                {/* <div className="container">
                    {newImage && <img src={newImage} height="400"/>}
                    <input type="file" onChange={handelImage} />
                </div> */}

            
        </div>
        

    )
}

export default Home;