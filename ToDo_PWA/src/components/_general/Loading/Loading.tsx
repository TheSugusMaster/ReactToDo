import * as React from "react";
import { Spinner } from "react-bootstrap";

import "./loading.css";

const Loading: React.FC = () => {
    return (
        <div className="loadingScreen">
            <Spinner animation="border" />
        </div>
    );
}

export default Loading;