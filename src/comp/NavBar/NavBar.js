import React from 'react'




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
                                    <li><a>Start</a></li>
                                    <li><a>O co chodzi?</a></li>
                                    <li><a>O nas</a></li>
                                    <li><a>Fundacje i organizacje</a></li>
                                    <li><a>Kontakt</a></li>
                                </ul> 
                            </div>
                        </div>
                    </div>
                </div>  
        )
    }
}

export default NavBar;