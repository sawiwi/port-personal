import React, {useState} from "react";

import Proyects from '../../Pages/Proyect/proyect';
import Tecnologies from "../../Pages/Tecnologies/Tecnologies";
import AboutMe from "../../Pages/About/About";
import Hero from "../../Pages/Hero/Hero";
import {Link, Route, Routes} from 'react-router-dom'

// import { iconsList } from "../../components/Icons/icons";

import chrisLogo from '../../assets/img/logos/christmas-elf.png'
// import eggsLogo from '../../assets/img/logos/pascua-de-resurreccion.png'
// import halloLogo from '../../assets/img/logos/calabaza.png'


// const Home = () => <h1>Home</h1>
const Header = () => {
    // const {TbChristmasTree} = iconsList;

    // const [selectLogo, setSelectLogo] = useState(null);

    // const typeLogo = [
    //     {
    //         id:1,
    //         name : "eggsLogo",
    //         img: eggsLogo
    //     },
    //     {
    //         id:2,
    //         name : "christmasLogo",
    //         img: chrisLogo

    //     },
    //     {
    //         id:3,
    //         name : "halloweenLogo",
    //         img: halloLogo

    //     }
    // ]

    // const handleLogo = (Logo) => {
    //     setSelectLogo(Logo);
    // }

//     const menu = [
//     {
//         name:'Inicio',
//         icon:<></>,
//     },
//     {
//         name:'Inicio',
//         icon:<></>,
//     },
//     {
//         name:'Inicio',
//         icon:<></>,
//     },
//     {
//         name:'Inicio',
//         icon:<></>,
//     },
// ]


    

    return(
        <div>
            <header className="flex justify-center ">  
                <img src={chrisLogo} alt="me logo" className="w-[80px] md:w-[90px] p-3 object-cover ml-5"/>
                <nav className="flex items-center gap-8 p-4 ">            
                    <ul className="flex gap-5 text-lg font-semibold cursor-pointer ">
                        <li className="p-3"><Link  to="/" className="hover:border-b-4 transition-all duration-100">Home</Link></li>
                        <li className="p-3"><Link  to="/tecnologies" className="hover:border-b-4 transition-all duration-100">Tecnologias</Link></li>
                        <li className="p-3"><Link  to="/about" className="hover:border-b-4 transition-all duration-100">Sobre mí</Link></li>
                        <li className="p-3"><Link  to="/proyects" className="hover:border-b-4 transition-all duration-100">Proyectos</Link></li>
                    </ul>            
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Hero/>} />
                <Route path="/Tecnologies" element={<Tecnologies/>} />
                <Route path="/About" element={<AboutMe/>} />
                <Route path="/Proyects" element={<Proyects/>} />
                <Route path="/*" element={<h1>Page not Found</h1>} />
            </Routes>
         </div>

    )

}

export default Header