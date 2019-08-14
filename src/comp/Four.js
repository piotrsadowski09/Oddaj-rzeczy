import React from 'react'
import FourSteps from './FourSteps/FourSteps';



class Four extends React.Component {

    
    render() {
        return (
            <div>
                <h2>Wystarcza 4 proste kroki !</h2>
                <div className={"decor"}></div>
                <FourSteps />
                <button type="button">Zaloz konto</button>
            </div>
        )
    }
}

export default Four;