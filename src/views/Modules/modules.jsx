import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Card from '../../card/card'

class Modules extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listofmodules: [],
            stateflag: false
        };
    }

    getModules = async () => {
        await axios.get('http://localhost:8002/api/modules')
            .then((response) => {
                let data = [];
                response.data.forEach(element => {
                    data.push(element);
                });
                this.setState({
                    listofmodules: data
                });

            })
            .catch(error => {
                console.log(error);
            })
    }
    componentDidMount() {
        this.getModules();
    }


    render() {
        console.log('Modules', this.state.listofmodules)
        if ((typeof this.state.listofmodules) !== "undefined") {
            return (
                <div className="container">
                    <Link to={{ pathname: '/createmodule' }} className="btn-floating btn-large waves-effect waves-light red" >
                        <i className="material-icons">add</i>
                    </Link>
                    {
                        this.state.listofmodules.map((value, i) => {
                            return <div key={i}><div>
                                {
                                    <Card index={i} program={value} cardtitle="Modules" linktitle="Module Details" pathname="/moduledetails">{i}</Card>
                                }
                            </div></div>
                        })
                    }
                </div>
            );
        }
        else {
            return (
                <div className="container">
                    <Link to={{ pathname: '/creamodule' }} className="btn-floating btn-large waves-effect waves-light red" >
                        <i className="material-icons">add</i>
                    </Link>
                </div>
            );
        }
    }
}

export default Modules;