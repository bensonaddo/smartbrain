import React from "react";

class Register extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }
    
    // Method on email change
    onEmailChange = (event)=> {
        this.setState({email: event.target.value})
    }

    // Method on password change
    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    // Set Method on Name change
    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    // Function to submit details when user click submit
    onButtonSubmit = () => {
        // Send the request to the back-end Signin page
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })

        })
            .then(response => response.json())
            .then(user => {
                if (user){
                    // This would redirect user to the home page
                    // On submit
                    this.props.loadUser(user);
                    this.props.onRouteChange('signin')
                }
            })
    }

    render(){
        return (
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <div className="mt3">
                    <label className="ba b--transparent ph0 mh0" htmlFor="name">Name</label>
                    <input
                        className="b pa2 input-reset ba bg-transparent"
                        type="text"
                        name="name"
                        id="name"
                        onChange={this.onNameChange}
                    />
                </div>
                <div action="sign-up_submit" method="get" accept-charset="utf-8">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
                    <div className="mt3">
                        <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
                        <input 
                        className="pa2 input-reset ba bg-transparent w-100 measure" 
                        type="email" 
                        name="email-address"  
                        id="email-address" 
                        onChange={this.onEmailChange}
                        />
                    </div>
                    <div className="mt3">
                        <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                        <input 
                        className="b pa2 input-reset ba bg-transparent" type="password" 
                        name="password"  
                        id="password"
                        onChange={this.onPasswordChange}/>
                    </div>
                    </fieldset>
                    <div onClick={ this.onButtonSubmit } className="mt3"><input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign Up"/></div>
                </div>
            </article>
    
        )
    }
}
    

export default Register;