import React from 'react'




class Contact extends React.Component {
    state = {
        name: "",
        email:"",
        message: ""
    };
    
    onNameChange = event => {
        this.setState({
            name: event.target.value
          });
    };
    onEmailChange = event => {
        this.setState({
            email: event.target.value
        });
    };
    onMessageChange = event => {
        this.setState({
            message: event.target.value
        });
    };
    onFormSubmit = event => {
        event.preventDefault(event);
    };
    
    render() {
        return (
            <div>
                <h2>Skontaktuj sie z nami !</h2>
                <div className={"decor"}></div>
                <p>Formularz kontaktowy</p>
                <input type="text" placeholder="Imie" value={this.state.name} onChange={this.onNameChange}/>
                <input type="email" placeholder="E-mail" value={this.state.email} onChange={this.onEmailChange}/>
                <input type="text" placeholder="Wiadomosc" value={this.state.Message} onChange={this.MessageChange}/>
                <button onSubmit={this.onFormSubmit}>Wyslij</button>
               
            </div>
        )
    }
}

export default Contact;