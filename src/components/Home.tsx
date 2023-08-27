import Navbar from "./Navbar"
import Map from "./Map"
import "./Home.css"



function Home() {
    return (
        <div>
            <Navbar />
            <div className="grid-container">
                <div className="container">
                     <Map />
                </div>
                <div className="container">
                    <input type="file" />
                </div>
            </div>
            
        </div>
        

    )
}

export default Home;