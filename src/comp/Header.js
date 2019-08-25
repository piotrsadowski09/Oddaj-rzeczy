import React from 'react'
import AdminBar from './AdminBar/AdminBar';
import NavBar from './NavBar/NavBar';



class Header extends React.Component {

    
    render() {
        return (
          <>
            
            <div id="header" className={"showcase"}>
                <NavBar />
            </div>
            <header>    
                <div className={"containerOne"}>
                    <AdminBar />
                    <p className={"maintext"}>Zacznij pomagac! <br/>Oddaj niechciane rzeczy w zaufane rece!</p>
                    <div className={"decor"}></div>
                    <ul>
                        <button className={"butOne"} type="button">ODDAJ<br/> RZECZY</button>
                        <button className={"butTwo"} type="button">ZORGANIZUJ<br/> ZBIORKE</button>
                    </ul>
                    
                </div>
                
            </header>
          
          
          
          </>
        )
    }
}

export default Header;