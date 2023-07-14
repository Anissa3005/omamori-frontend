import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom"
import "./Launch.css"


function Launch() {
    const [goToHome, setGoToHome] = useState<boolean>(false);

    // useEffect(() => {
    //     console.log(goToHome)
    // }, [goToHome])

    if (goToHome) {
        return <Navigate to={"/home"} />
    }

    function handleGoToHome() {
        setGoToHome(!goToHome)
    }

    return (
        <div className="container-home">
            <div className="container-items">
                <h1 className="title">Omamori Finder</h1>
                <div className="container-paragraph">
                    <div className="overlap-shape">
                    <p className="explanation-app">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nemo atque pariatur, est omnis deleniti sint perferendis nobis totam. Quidem optio mollitia architecto voluptatum quos? Labore ab consequatur illum voluptates.</p>
                    </div>
                </div>
                <div className="container-button">
                    <div className="container-arrow" >
                        <button className="findButton" onClick={handleGoToHome}></button>
                        <div className="arrow"></div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Launch;