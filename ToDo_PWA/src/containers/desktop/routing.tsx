import * as React from "react";
import Loadable from "react-loadable";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Loading from "../../components/_general/Loading/Loading";

const AsyncHomeContainer = Loadable({ loader: () => import("./Home/Home"), loading: Loading });
const AsyncNewToDoContainer = Loadable({ loader: () => import("./ToDo/NewToDo/") });

const Routing: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<AsyncHomeContainer />} />
            <Route path='/NewToDo' element={<AsyncNewToDoContainer />} />
        </Routes>
    );
}

export default Routing;