import React, { Component } from 'react';
import axios from 'axios'
//import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class Createactivity extends Component {
    constructor(props) {
        super(props)

        this.state = {
            addsections: [],
            id: '',
            description: '',
            title: '',
            sectiontype: '',
            sectionvalue: '',

            sections: [{
                type: '',
                value: ''
            }],
            statusCode: 0
        }

        this.createactivity = this.createactivity.bind(this)
    }
    createactivity = async () => {
        console.log('[AXIOS REQUEST]')

        if (this.state.description !== "" && this.state.title !== "" && this.state.sections.length > 0) {
            await axios.post('http://localhost:8000/api/assetmanagement/activity', {
                id: this.state.id,
                shortDescription: this.state.description,
                title: this.state.title,
                sections: this.state.sections
            })
                .then(response => {

                    if (response.data.statusCode === 201) {
                        this.setState({
                            statusCode: 201
                        })
                    }
                    else
                        alert(JSON.stringify(response));

                })
                .catch(err => {
                    console.log('[ERROR] :' + err)
                });
        }
        else {
            return (alert('Form fields cannot be empty'))
        }

    }

    addsections = (e) => {
        e.preventDefault()
        var array = this.state.addsections;

        array.push(<div>
            <div className="input-field col s6">
                <input placeholder="type" id="type" type="text" className="validate" onChange={this.handlesectiontypechange} required />
                <label className="active" htmlFor="type"></label>
            </div>
            <div className="input-field col s6">
                <input placeholder="value" id="value" type="text" className="validate" onChange={this.handlesectionvaluechange} required />
                <label className="active" htmlFor="value">value</label>
            </div>
        </div>);
        console.log('[ARRAY] :', array)
        this.setState({
            addsections: array
        })
    }
    componentDidUpdate() {

        console.log(this.state.id)
    }

    handlesubmit = () => {
        console.log('[Submit]');
        this.createactivity();
    }
    handleidchange = (e) => {
        this.setState({
            id: e.target.value
        })
    }

    handledecriptionchange = (e) => {
        this.setState({
            description: e.target.value
        })
    }
    handlesectiontypechange = (e) => {
        this.setState({
            sectiontype: e.target.value
        })
    }
    handlesectionvaluechange = (e) => {
        this.setState({
            sectionvalue: e.target.value
        })

    }
    handletitlechange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    render() {
        if (this.state.statusCode === 201) {
            return <Redirect to='/programs' />
        }
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Id" id="id" type="id" className="validate" disabled onChange={this.handleidchange}></input>
                            <label className="active" htmlFor="id">ID</label>
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="title" id="title" type="text" className="validate" onChange={this.handletitlechange} required />
                            <label className="active" htmlFor="title">Title</label>
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="description" id="description" type="text" className="validate" onChange={this.handledecriptionchange} required />
                            <label className="active" htmlFor="description">Description</label>
                        </div>
                        <div className="input-field col s6">
                            <label className="active" >Sections</label>
                            {
                                this.state.sections.map((mappedObject, id) =>
                                    <ul key={id} hidden>
                                        <li>
                                            {mappedObject.type = this.state.sectiontype}
                                            {mappedObject.value = this.state.sectionvalue}
                                        </li>
                                    </ul>
                                )
                            }
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="type" id="type" type="text" className="validate" onChange={this.handlesectiontypechange} required />
                            <label className="active" htmlFor="type">type</label>
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="value" id="value" type="text" className="validate" onChange={this.handlesectionvaluechange} required />
                            <label className="active" htmlFor="value">value</label>
                            <button className="btn-floating btn-large waves-effect waves-light red" onClick={this.addsections} > <i className="material-icons" >add</i></button>
                        </div>
                        <div>
                            {
                                this.state.addsections.map((input, id) => {

                                    return (
                                        <div key={id}>
                                            {input}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <a href="#!" className="btn waves-effect waves-light" name="action" onClick={this.handlesubmit}>Submit
                            <i className="material-icons right">send</i>
                        </a>

                    </div>
                </form>
            </div >
        );
    }
}


export default Createactivity;