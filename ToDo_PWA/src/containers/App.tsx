import * as React from "react";
import DesktopContainer from "./desktop/index";

const App: React.FC = () => {

    const renderContent = () => {
        return <DesktopContainer />
    }

    return (
        <>
            {renderContent()}
        </>
    )
}

export default App;