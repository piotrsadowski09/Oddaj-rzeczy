import React from 'react'




class Four extends React.Component {

    
    render() {
        const fourSteps = [
            {
              title: "Wybierz rzeczy",
              icon: "fas fa-check-circle",
              articles: "ubrania, zabawki, sprzęt i inne"
            },
            {
              title: "Spakuj je",
              icon: "fas fa-cart-arrow-down",
              articles: "skorzystaj z worków na śmieci"
            },
            {
              title: "Zdecyduj komu chcesz pomóc",
              icon: "fas fa-binoculars",
              articles: "wybierz zaufane miejsce"
            },
            {
              title: "Zamów kuriera",
              icon: "fas fa-car",
              articles: "kurier przyjedzie w dogodnym terminie"
            }
          ];
      
          const boxesWithFourSteps = fourSteps.map((e, i) => {
            return (
              <div key={i} className="foursteps">
                <i className={e.icon} />
                <h3 className={"text"}>{e.title}</h3>
                <p className={"description"}>{e.articles}</p>
              </div>
            );
          });

        return (
            <div id="fourStepsInfo" className="four-steps-container">
                <p className={"fourstepstext"}>Wystarcza 4 proste kroki</p>
                <div className={"decor"}></div>
                <div className={"fourContainer"}>
                  {boxesWithFourSteps}
                </div>
                <button className={"fourStepsBut"} type="button">Zaloz konto</button>
            </div>
        )
    }
}

export default Four;