import React from 'react'




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
              <div className={"foundations_type"} onClick={this.handleClick}
                key={i}> {e}
              </div>
            );
          });
        return (
            <div id="helpInfo" className={"foundations_box"}>
                <p className={"foundations_title"}>Komu pomagamy?</p>
                <div className={"decor"}></div>
                <div className={"foundations_cont"}>{orgs}</div>
                <p className={"foundations_text"}>W naszej bazie znajdziesz liste zweryfikowanych Fundacji, z ktorymi wspolpracujemy. Mozesz sprawdzic czym sie zajmuja, komu pomagaja i czego potrzebuja.</p>
                
                  
                  <div id="foundations" className={"foundations_container"}>
                        <div className={"left_con"}>
                          <p className={"foundations_name"}>Fundacja "Dbam o Zdrowie"</p>
                          <p className={"foundations_goals"}>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej</p>
                          
                          <p className={"foundations_name"}>Fundacja "Dla dzieci"</p>
                          <p className={"foundations_goals"}>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                          
                          <p className={"foundations_name"}>Fundacja "Bez domu"</p>
                          <p className={"foundations_goals"}>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                          
                        </div>
                    <div className={"right_con"}>
                      
                    <p className={"stuff_description"}>ubrania, jedzenie, sprzet RTV AGD, meble, zabawki.</p>
                    
                    
                    <p className={"stuff_description"}>ubrania, meble, zabawki.</p>
                    
                    
                    <p className={"stuff_description"}>ubrania, jedzenie, cieple koce.</p>
                    
                    </div>
                </div>
                <div id="organisations" className={"hidden foundations_container"}>
                    <div className={"left_con"}>
                      <p className={"foundations_name"}>Organizacja "O zdrowie dbam"</p>
                      <p className={"foundations_goals"}>Cel i misja: Lorem ipsum ipsum spsum lorem Lorem ipsum spsum.</p>
                      
                      <p className={"foundations_name"}>Organizacja "Dzieci dla"</p>
                      <p className={"foundations_goals"}>Cel i misja: Lorem ipsum ipsum Lorem ipsum spsum lorem lorem.</p>
                      
                      <p className={"foundations_name"}>Organizacja "Domu bez"</p>
                      <p className={"foundations_goals"}>Cel i misja: Lorem Lorem ipsum ipsum spsum ipsum lorem lorem.</p>
                      
                    </div>
                    <div className={"right_con"}>
                        
                      <p className={"stuff_description"}>voluptatem quia, enim ipsam.</p>
                      
                    
                      <p className={"stuff_description"}>sed ut, perspiciatis, unde omnis, iste.</p>
                      
                      
                      <p className={"stuff_description"}>nemo enim, ipsam, voluptatem, quia.</p>
                      
                    </div>
                </div>
                <div id="local" className={"hidden foundations_container"}>
                  <div className={"left_con"}>
                    <p className={"foundations_name"}>Lokalna zbiorka w Warszawie</p>
                    <p className={"foundations_goals"}>Cel i misja: ipsum spsum ipsum spsum lorem.</p>
                    
                    <p className={"foundations_name"}>Lokalna zbiorka W Lodzi</p>
                    <p className={"foundations_goals"}>Cel i misja: Lorem spsum ipsum lorem lorem.</p>
                    
                    <p className={"foundations_name"}>Lokalna zbiorka w Krakowie</p>
                    <p className={"foundations_goals"}>Cel i misja: Lorem  Lorem ipsum spsum lorem.</p>
                    
                  </div>
                  <div className={"right_con"}>
                      <p className={"stuff_description"}>nemo, enim, ipsam, voluptatem, quia.</p>
                      
                    
                      <p className={"stuff_description"}>quis, autem,vel eum iure, reprehenderit.</p>
                      
              
                      <p className={"stuff_description"}>consequuntur, magni, dolores eos.</p>
                      
                  </div>
                </div>
                
              
            

            </div>
        )
    }
}

export default HelpInfo;