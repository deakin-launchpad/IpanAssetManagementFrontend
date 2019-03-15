import React, { Component } from 'react';
import M from 'materialize-css'
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loginstatus: false
        }
    }

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems);
        });
    }
    render() {
        console.log('Login', window.localStorage.getItem('loginStatus'))
        return (
            <header className="App-header">
                Header Component
                    <a className="waves-effect" href="/home"><i className="material-icons left">home</i></a>
                <ul id="slide-out" className="sidenav">
                    <li>
                        <div className="user-view">
                            <div className="background">
                                <img src="images/office.jpg" alt="background" />
                            </div>
                            <a href="#!">Image</a>
                            <a href="#!"><span className="black-text name">John Doe</span></a>
                            <a href="#!"><span className="black-text email">jdandturk@gmail.com</span></a>
                        </div>
                    </li>
                    <li><a href="/programs">Programs List</a></li>
                    <li><a href="/modules">Modules List</a></li>
                    <li><a href="/activity">Activity List</a></li>
                    <li><a href="/tasks">Tasks List</a></li>
                </ul>
                <a href="#!" data-target="slide-out" className="sidenav-trigger "><i className="material-icons left">menu</i></a>
            </header>

        )
    }

}

export default Header;