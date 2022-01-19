import * as React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Routing from "../routing";

const HomeContainer: React.FC = () => {

    return (
        <>
            <NavBar />
            <main>
                <Routing />
            </main>
        </>
    )
}

export default HomeContainer;