import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loginstatus: false
        }
    }
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit = () => {

        var validationflag;
        if (this.state.email === 'abc@gmail.com' && this.state.email !== '') {
            validationflag = true;
            console.log('[Email]', validationflag)
        }
        else
            validationflag = false;

        if (this.state.password === '1234' && this.state.password !== '') {
            validationflag = true;
            console.log('[Password]', validationflag)
        }
        else
            validationflag = false;

        if (validationflag === true) {
            console.log('[VALIDATION]', validationflag)
            this.setState({
                loginstatus: true
            })
        }
        else {
            console.log('[VALIDATION]', validationflag)
        }

    }
    componentDidUpdate() {
        return <Redirect to={{ pathname: '/home' }} />
    }
    render() {
        if (this.state.loginstatus === true) {
            this.props.loginStatus(this.state.loginstatus)
            return <Redirect to={{ pathname: '/home' }} />

        }
        else
            return (
                <div className='container'>
                    <div className="input-field col s6">
                        <input placeholder="email" id="email" type="email" className="validate" onChange={this.handleEmail} required></input>
                    </div>
                    <div className="input-field col s6">
                        <input placeholder="password" id="password" type="password" className="validate" onChange={this.handlePassword} required></input>
                    </div>
                    <button className="btn waves-effect waves-light" name="action" onClick={this.handleSubmit}>Login
                            <i className="material-icons right">send</i>
                    </button>
                </div>
            );

    }
}

export default Login;