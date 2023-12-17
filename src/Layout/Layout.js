import React from "react";

import Header from "../shared/Header/header";
// import Tecnologies from "../Pages/Tecnologies/Tecnologies";
// import AboutMe from "../Pages/About/About";

const Layout = ({children}) =>{
    return (
            <div className="layout bg-slate-800">
            <Header/>
            <main>{children}</main>
        </div>
    )

}

export default Layout;