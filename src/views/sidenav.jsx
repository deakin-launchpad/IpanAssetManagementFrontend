import React, { Component } from 'react';
import M from 'materialize-css'
class Sidenav extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems);
        });
    }
    render() {
        return (
            <div>
                <ul id="slide-out" className="sidenav">
                    <li>
                        <div className="user-view">
                            <div className="background">
                                <img src="images/office.jpg" alt="background" />
                            </div>
                            <a href="#!">Image</a>
                            <a href="#!"><span className="white-text name">John Doe</span></a>
                            <a href="#!"><span className="white-text email">jdandturk@gmail.com</span></a>
                        </div>
                    </li>
                    <li><a href="/programs">Programs List</a></li>
                    <li><a href="/modules">Modules List</a></li>
                    <li><a href="/activity">Activity List</a></li>
                    <li><div className="divider"></div></li>
                    <li><a href="#!" className="subheader">Subheader</a></li>
                    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                </ul>
                <a href="#!" data-target="slide-out" className="sidenav-trigger left"><i className="material-icons ">menu</i></a>
            </div>

        )
    }
}

export default Sidenav;