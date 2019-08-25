import React from 'react';
import { Link } from "react-scroll";




class NavBar extends React.Component {

    
    render() {
        return (
                <div className={"menu-wrap"}>
                    <input type="checkbox" className={"toggler"}/>
                    <div className={"hamburger"}><div></div></div>
                    <div className={"menu"}>
                        <div>
                            <div>
                                <ul className={"Nav"}>
                                    <Link
                                    activeClass="active"
                                    to="header"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration= {500}
                                    > <li>Start</li>
                                    </Link>
                                    <Link
                                    activeClass="active"
                                    to="fourStepsInfo"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration= {500}
                                    > <li>O co chodzi?</li>
                                    </Link>
                                    <Link
                                    activeClass="active"
                                    to="aboutUs"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration= {500}
                                    > <li>O nas</li>
                                    </Link>
                                    <Link
                                    activeClass="active"
                                    to="helpInfo"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration= {500}
                                    > <li>Fundacje i organizacje</li>
                                    </Link>
                                    <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration= {500}
                                    >  <li>Kontakt</li>
                                    </Link>   
                                </ul> 
                            </div>
                        </div>
                    </div>
                </div>  
        )
    }
}

export default NavBar;