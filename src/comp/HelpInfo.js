import React from 'react'
import './HelpInfo.scss'



class HelpInfo extends React.Component {
    handleClick = e => {
        if (e.target.innerText === "Fundacjom") {
          document.querySelector("#foundations").classList.remove("hidden");
          document.querySelector("#organisations").classList.add("hidden");
          document.querySelector("#local").classList.add("hidden");
        } else if (e.target.innerText === "Organizacjom pozarządowym") {
          document.querySelector("#foundations").classList.add("hidden");
          document.querySelector("#organisations").classList.remove("hidden");
          document.querySelector("#local").classList.add("hidden");
        } else if (e.target.innerText === "Lokalnym zbiórkom") {
          document.querySelector("#foundations").classList.add("hidden");
          document.querySelector("#organisations").classList.add("hidden");
          document.querySelector("#local").classList.remove("hidden");
        }
      };

    
    render() {
        const organisations = [
            "Fundacjom",
            "Organizacjom pozarządowym",
             "Lokalnym zbiórkom"
        ]
        const orgs = organisations.map((e, i) => {
            return (
              <div onClick={this.handleClick}
                key={i}> {e}
              </div>
            );
          });
        return (
            <div>
                <h2>Komu pomagamy?</h2>
                <div className={"decor"}></div>
                <div>{orgs}</div>
                <p>W naszej bazie znajdziesz liste zweryfikowanych Fundacji, z ktorymi wspolpracujemy. Mozesz sprawdzic czym sie zajmuja, komu pomagaja i czego potrzebuja.</p>
                <div className={"Five_container"}>
                  <div className={"Left_con"}>
                  <div id="foundations">
                    <div className={"Left_con"}>
                      <p>Fundacja "Dbam o Zdrowie"</p>
                      <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej</p>
                      <hr align="left"/>
                      <p>Fundacja "Dla dzieci"</p>
                      <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                      <hr align="left"/>
                      <p>Fundacja "Bez domu"</p>
                      <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                      <hr align="left"/>
                    </div>
                    <div className={"Right_con"}>
                      
                    <p>Ubrania, jedzenie, sprzet RTV AGD, meble, zabawki.</p>
                    <hr align="right"/>
                    
                    <p>Ubrania, meble, zabawki.</p>
                    <hr align="right"/>
                    
                    <p>Ubrania, jedzenie, cieple koce.</p>
                    <hr align="right"/>
                    </div>
                </div>
                <div id="organisations" className={"hidden"}>
                    <div className={"Left_con"}>
                      <p>Organizacja "O zdrowie dbam"</p>
                      <p>Cel i misja: Lorem ipsum spsum lorem.</p>
                      <hr align="left"/>
                      <p>Organizacja "Dzieci dla"</p>
                      <p>Cel i misja: Lorem ipsum lorem lorem.</p>
                      <hr align="left"/>
                      <p>Organizacja "Domu bez"</p>
                      <p>Cel i misja: Lorem ipsum lorem lorem.</p>
                      <hr align="left"/>
                    </div>
                    <div className={"Right_con"}>
                        
                      <p>Lorem ipsum ipsum lorem.</p>
                      <hr align="right"/>
                    
                      <p>Sed ut perspiciatis unde omnis iste.</p>
                      <hr align="right"/>
                      
                      <p>Lorem ipsum ipsum lorem.</p>
                      <hr align="right"/>
                    </div>
                </div>
                <div id="local" className={"hidden"}>
                  <div className={"Left_con"}>
                    <p>Lokalna zbiorka w Warszawie</p>
                    <p>Cel i misja: Lorem ipsum spsum lorem.</p>
                    <hr align="left"/>
                    <p>Lokalna zbiorka W Lodzi</p>
                    <p>Cel i misja: Lorem ipsum lorem lorem.</p>
                    <hr align="left"/>
                    <p>Lokalna zbiorka w Krakowie</p>
                    <p>Cel i misja: Lorem ipsum lorem lorem.</p>
                    <hr align="left"/>
                  </div>
                  <div className={"Right_con"}>
                      <p>Nemo enim ipsam voluptatem quia.</p>
                      <hr align="right"/>
                    
                      <p>Quis autem vel eum iure reprehenderit.</p>
                      <hr align="right"/>
              
                      <p>Consequuntur magni dolores eos.</p>
                      <hr align="right"/>
                  </div>
                </div>
                </div>

              </div>
            

            </div>
        )
    }
}

export default HelpInfo;