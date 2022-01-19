

import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoContainer from "./Todo/index";

const Routing: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/todo-list" element={<TodoContainer />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;