
import { Route, Routes } from 'react-router-dom';

import Bookshelf from "../pages/Bookshelf/Bookshelf";
import Home from "../pages/Home/Home";
import Messages from "../pages/Messages/Messages";

function ProjectRoutes() {
    return (
            <Routes>
                <Route exact path="/home" Component={Home} />
                <Route exact path="/minha-estante" Component={Bookshelf} />
                <Route exact path="/mensagens" Component={Messages} />
            </Routes>

    );
}

export default ProjectRoutes;
