import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Card from '../../card/card'
class Programs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lisofprograms: [],
            stateflag: false
        };
    }

    getPrograms = async () => {
        await axios.get('http://localhost:8002/api/programs')
            .then((response) => {
                let data = [];
                response.data.forEach(element => {
                    data.push(element);
                });
                this.setState({
                    lisofprograms: data
                });

            })
            .catch(error => {
                console.log(error);
            })
    }
    componentDidMount() {
        this.getPrograms();
    }


    render() {
        console.log('Program', this.state.lisofprograms)
        if ((typeof this.state.listofprograms) !== "undefined") {
            return (
                <div className="container">
                    <Link to={{ pathname: '/createprogram' }} className="btn-floating btn-large waves-effect waves-light red" >
                        <i className="material-icons">add</i>
                    </Link>
                    {
                        this.state.lisofprograms.map((value, i) => {
                            return <div key={i}><div>
                                {
                                    <Card index={i} program={value} cardtitle="Program" linktitle="Program Details" pathname="/programdetails">{i}</Card>
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
                    <Link to={{ pathname: '/createprogram' }} className="btn-floating btn-large waves-effect waves-light red" >
                        <i className="material-icons">add</i>
                    </Link>
                </div>
            );
        }
    }
}

export default Programs;