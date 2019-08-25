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
              <div className={"foundations"} onClick={this.handleClick}
                key={i}> {e}
              </div>
            );
          });
        return (
            <div className={"foundations_box"}>
                <p className={"foundations_title"}>Komu pomagamy?</p>
                <div className={"decor"}></div>
                <div className={"foundations_cont"}>{orgs}</div>
                <p className={"foundations_text"}>W naszej bazie znajdziesz liste zweryfikowanych Fundacji, z ktorymi wspolpracujemy. Mozesz sprawdzic czym sie zajmuja, komu pomagaja i czego potrzebuja.</p>
                <div className={"Five_container"}>
                  <div className={"left_con"}>
                  <div id="foundations">
                    <div className={"left_con"}>
                      <p className={"foundations_name"}>Fundacja "Dbam o Zdrowie"</p>
                      <p className={"foundations_goals"}>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej</p>
                      <hr align="left"/>
                      <p className={"foundations_name"}>Fundacja "Dla dzieci"</p>
                      <p className={"foundations_goals"}>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                      <hr align="left"/>
                      <p className={"foundations_name"}>Fundacja "Bez domu"</p>
                      <p className={"foundations_goals"}>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                      <hr align="left"/>
                    </div>
                    <div className={"Right_con"}>
                      
                    <p className={"stuff_description"}>Ubrania, jedzenie, sprzet RTV AGD, meble, zabawki.</p>
                    <hr className={"stuff_underline"} align="right"/>
                    
                    <p className={"stuff_description"}>Ubrania, meble, zabawki.</p>
                    <hr className={"stuff_underline"} align="right"/>
                    
                    <p className={"stuff_description"}>Ubrania, jedzenie, cieple koce.</p>
                    <hr className={"stuff_underline"} align="right"/>
                    </div>
                </div>
                <div id="organisations" className={"hidden"}>
                    <div className={"left_con"}>
                      <p className={"foundations_name"}>Organizacja "O zdrowie dbam"</p>
                      <p className={"foundations_goals"}>Cel i misja: Lorem ipsum ipsum spsum lorem Lorem ipsum spsum.</p>
                      <hr align="left"/>
                      <p className={"foundations_name"}>Organizacja "Dzieci dla"</p>
                      <p className={"foundations_goals"}>Cel i misja: Lorem ipsum ipsum Lorem ipsum spsum lorem lorem.</p>
                      <hr align="left"/>
                      <p className={"foundations_name"}>Organizacja "Domu bez"</p>
                      <p className={"foundations_goals"}>Cel i misja: Lorem Lorem ipsum ipsum spsum ipsum lorem lorem.</p>
                      <hr align="left"/>
                    </div>
                    <div className={"Right_con"}>
                        
                      <p className={"stuff_description"}>Lorem ipsum ipsum lorem.</p>
                      <hr className={"stuff_underline"} align="right"/>
                    
                      <p className={"stuff_description"}>Sed ut perspiciatis unde omnis iste.</p>
                      <hr className={"stuff_underline"} align="right"/>
                      
                      <p className={"stuff_description"}>Lorem ipsum ipsum lorem.</p>
                      <hr className={"stuff_underline"} align="right"/>
                    </div>
                </div>
                <div id="local" className={"hidden"}>
                  <div className={"left_con"}>
                    <p className={"foundations_name"}>Lokalna zbiorka w Warszawie</p>
                    <p className={"foundations_goals"}>Cel i misja: Lorem ipsum Lorem ipsum spsum ipsum spsum lorem.</p>
                    <hr align="left"/>
                    <p className={"foundations_name"}>Lokalna zbiorka W Lodzi</p>
                    <p className={"foundations_goals"}>Cel i misja: Lorem ipsum Lorem ipsum spsum ipsum lorem lorem.</p>
                    <hr align="left"/>
                    <p className={"foundations_name"}>Lokalna zbiorka w Krakowie</p>
                    <p className={"foundations_goals"}>Cel i misja: Lorem ipsum lorem ipsum Lorem ipsum spsum lorem.</p>
                    <hr align="left"/>
                  </div>
                  <div className={"Right_con"}>
                      <p className={"stuff_description"}>Nemo enim ipsam voluptatem quia.</p>
                      <hr className={"stuff_underline"} align="right"/>
                    
                      <p className={"stuff_description"}>Quis autem vel eum iure reprehenderit.</p>
                      <hr className={"stuff_underline"} align="right"/>
              
                      <p className={"stuff_description"}>Consequuntur magni dolores eos.</p>
                      <hr className={"stuff_underline"} align="right"/>
                  </div>
                </div>
                </div>
              </div>
            

            </div>
        )
    }
}

export default HelpInfo;