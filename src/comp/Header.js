import React from 'react'
import AdminBar from './AdminBar/AdminBar';
import NavBar from './NavBar/NavBar';
import NavBarTwo from './NavBar/NavBarTwo';



class Header extends React.Component {

    
    render() {
        return (
          
            
            
            <header> 
            <div id="header" className={"showcase"}>
                <NavBar />
            </div>  
                <div className={"containerOne"}>
                    <NavBarTwo/> 
                    <AdminBar />
                    <p className={"maintext"}>Zacznij pomagac! <br/>Oddaj niechciane rzeczy w zaufane rece!</p>
                    <div id="head_decor" className={"decor"}></div>
                    <ul className={"Nav_But"}>
                        <button className={"butOne"} type="button">ODDAJ<br/> RZECZY</button>
                        <button className={"butOne"} type="button">ZORGANIZUJ<br/> ZBIORKE</button>
                    </ul>
                    
                </div>
                
            </header>
          
          
          
          
        )
    }
}

export default Header;