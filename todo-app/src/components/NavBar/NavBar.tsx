import * as React from "react";
import "./navBar.css";

const NavBar: React.FC = () => {

    const renderNavBar = () => {

        return (
            <>
                <nav>
                    <ul>
                        <li><a href="/todo-list">Todo Liste</a></li>
                    </ul>
                </nav>
            </>
        )
    }

    return (
        <>
            {renderNavBar()}
        </>
    );
}

export default NavBar;