import * as React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {

    const renderHeaderBar = () => {

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/newTodo">
                        <button className="btn btn-outline-success" type="submit">Create New</button>
                    </Link>
                </div>
            </nav>
        )
    }

    return (
        <>
            {renderHeaderBar()}
        </>
    )
}

export default Header;