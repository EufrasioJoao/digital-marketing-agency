import React, { useState } from "react";
import Sign_in from "../Modals/Sign-in_users_Modal/Index";
import Log_in from "../Modals/Log-in_users_Modal/Index";
import Menu from "./img/menu.png";
import Cancel from "./img/cancelar.png";
import Style from "./Style.module.css";

const Navbar = () => {
    // states
    const [menuToggle, setMenuToggle] = useState(false);
    const [sign_in_Toggle, setSign_in_toggle] = useState(false);
    const [Log_in_Toggle, setLog_in_toggle] = useState(false);
    var [loggedIn, setLoggedIn] = useState(
        localStorage.getItem("administrator_key_value")
    );

    // handles menu toggle
    const handleClick = () => {
        setMenuToggle(!menuToggle);
    };

    return (
        <div>
            <nav>
                <div className={Style.logo_container}>
                    <img src="logo.jpg" alt="" />
                    <div>
                        Soma<span>Best</span>
                    </div>
                </div>
                <ul style={menuToggle ? { top: "70px" } : { top: "-770px" }}>
                    <div>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">Sobre Nos</a>
                        </li>
                        <li>
                            <a href="/services">Nossos Servicos</a>
                        </li>
                        <li>
                            <a href="/contact">Contactar</a>
                        </li>
                    </div>
                    <div>
                        {!loggedIn && (
                            <div>
                                <li>
                                    <button onClick={() => setLog_in_toggle(true)} >Log in</button>
                                </li>
                            </div>
                        )}
                        {loggedIn && (
                            <div>
                                <li>
                                    <button onClick={() => { 
                                        localStorage.removeItem("administrator_key_value");
                                        setLoggedIn(null);
                                    }}
                                    >Log out</button>
                                </li>
                                <li><button onClick={() => setSign_in_toggle(true)}>Adicionar administrador</button></li>
                                <li><a href="/" >Adicionar Sevicos</a></li>
                                <li><a href="/" >Adicionar Afiliados</a></li>
                            </div>
                        )}
                    </div>
                </ul>
                <img src={!menuToggle ? Menu : Cancel} onClick={handleClick} className={Style.logo} />
            </nav>

            

            {/* modals toggle part */}
            {sign_in_Toggle && (
                <Sign_in
                    onClose={() => setSign_in_toggle(false)}
                    logUser={() => setLoggedIn(true)}
                />
            )}

            {Log_in_Toggle && (
                <Log_in
                    onClose={() => setLog_in_toggle(false)}
                    logUser={() => setLoggedIn(true)}
                />
            )}
        </div>
    );
};

export default Navbar;
