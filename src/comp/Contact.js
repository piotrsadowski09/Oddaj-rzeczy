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
            <div id="contact" className={"contactUs_box"}>
                <div className={"contactUs_boxtwo"}>
                    <p className={"contactUs"}>Skontaktuj sie z nami </p>
                    <div className={"decor"}></div>
                    <p className={"contactUs_info"}>Formularz kontaktowy</p>
                    <input className={"contactUs_input"} type="text" placeholder="Imie" value={this.state.name} onChange={this.onNameChange}/>
                    <input className={"contactUs_input"} type="email" placeholder="E-mail" value={this.state.email} onChange={this.onEmailChange}/>
                    <input className={"contactUs_input"} type="text" placeholder="Wiadomosc" value={this.state.Message} onChange={this.MessageChange}/>
                    <button onSubmit={this.onFormSubmit}>Wyslij</button>
                </div>
               
            </div>
        )
    }
}

export default Contact;