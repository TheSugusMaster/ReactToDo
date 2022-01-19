import * as React from "react";
import HomeContainer from "./Home/index";

const App: React.FC = () => {

    const renderContent = () => {
        return (
            <>
            <HomeContainer />
            </>
        );
    }

    return (
        <>
            {renderContent()}
        </>
    );
}

export default App;