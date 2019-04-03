import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Card from '../../card/card'
class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listoftasks: [],
            stateflag: false
        };
    }

    gettasks = async () => {
        await axios.get('http://localhost:8000/api/assetmanagment/tasks')
            .then((response) => {
                let data = [];
                response.data.data.tasks.forEach(element => {
                    data.push(element);
                });
                this.setState({
                    listoftasks: data
                });

            })
            .catch(error => {
                console.log(error);
            })
    }
    componentDidMount() {
        this.gettasks();
    }


    render() {
        if ((this.state.listoftasks).length > 0) {
            return (
                <div className="container">
                    <Link to={{ pathname: '/createtasks' }} className="btn-floating btn-large waves-effect waves-light red" >
                        <i className="material-icons">add</i>
                    </Link>
                    {
                        this.state.listoftasks.map((value, i) => {
                            return <div key={i}><div>
                                {
                                    <Card index={i} program={value} cardtitle="Tasks" linktitle="Task Details" pathname="/taskdetails">{i}</Card>
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
                    <Link to={{ pathname: '/createtasks' }} className="btn-floating btn-large waves-effect waves-light red" >
                        <i className="material-icons">add</i>
                    </Link>
                </div>
            );
        }
    }
}

export default Tasks;