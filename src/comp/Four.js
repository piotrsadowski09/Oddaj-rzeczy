import React from 'react'
import FourSteps from './FourSteps/FourSteps';



class Four extends React.Component {

    
    render() {
        return (
            <div className="four-steps-container">
                <p className={"fourstepstext"}>Wystarcza 4 proste kroki</p>
                <div className={"decor"}></div>
                <FourSteps />
                <button type="button">Zaloz konto</button>
            </div>
        )
    }
}

export default Four;