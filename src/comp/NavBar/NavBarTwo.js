import React from 'react';
import { Link } from "react-scroll";




class NavBarTwo extends React.Component {

    
    render() {
        return (
                
                            <div className={"NavBarTwo"}>
                                <ul className={"NavTwo"}>
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
                       
        )
    }
}

export default NavBarTwo;