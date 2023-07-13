import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom"

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
        <>
        <h1>Omamori Finder</h1>
        <p className="explanation-app">Text here</p>
        <button onClick={handleGoToHome}>Find</button>
        </>
    )
}

export default Launch;