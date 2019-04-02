import React, { Component } from 'react';
import axios from 'axios'
//import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class Createprogram extends Component {
    constructor(props) {
        super(props)

        this.state = {
            addmodule: [],
            addsections: [],
            id: '',
            description: '',
            title: '',
            sectiontype: '',
            sectionvalue: '',
            module: [],
            sections: [{
                type: '',
                value: ''
            }],
            statusCode: 0
        }

        this.createprogram = this.createprogram.bind(this)
    }
    createprogram = async () => {
        console.log('[AXIOS REQUEST]')

        if (this.state.description !== "" && this.state.title !== "" && this.state.module.length > 0 && this.state.sections.length > 0) {
            await axios.post('http://localhost:8000/api/assetmanagment/programs', {
                id: this.state.id,
                description: this.state.description,
                title: this.state.title,
                modules: this.state.module,
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
    addmodules = (e) => {
        e.preventDefault()
        var array = this.state.addmodule;

        array.push(<div>
            <input placeholder="modules" id="modules" type="text" className="validate" onChange={this.handlemodulechange} required />
            <label className="active" htmlFor="modules"></label>
        </div>);
        console.log('[ARRAY] :', array)
        this.setState({
            addmodule: array
        })
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
        this.createprogram();
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
    handlemodulechange = (e) => {
        var array = this.state.module;

        array.push(e.target.value)
        this.setState({
            module: array
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
                            <input placeholder="Id" id="id" type="id" className="validate" onChange={this.handleidchange}></input>
                            <label className="active" htmlFor="id">ID</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="title" id="title" type="text" className="validate" onChange={this.handletitlechange} required />
                            <label className="active" htmlFor="title">Title</label>
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="description" id="description" type="text" className="validate" onChange={this.handledecriptionchange} required />
                            <label className="active" htmlFor="description">Description</label>
                        </div>
                    </div>
                    <div className="row">
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
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="type" id="type" type="text" className="validate" onChange={this.handlesectiontypechange} required />
                            <label className="active" htmlFor="type">type</label>
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="value" id="value" type="text" className="validate" onChange={this.handlesectionvaluechange} required />
                            <label className="active" htmlFor="value">value</label>
                            <button className="btn-floating btn-large waves-effect waves-light red" onClick={this.addsections} > <i className="material-icons" >add</i></button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
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
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <label className="active">Modules</label>
                            <input placeholder="modules" id="modules" type="text" className="validate" onChange={this.handlemodulechange} required />
                            <label className="active" htmlFor="modules"></label>
                            <div>
                                {
                                    this.state.addmodule.map((input, id) => {

                                        return (
                                            <div key={id}>
                                                {input}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <button className="btn-floating btn-large waves-effect waves-light red" onClick={this.addmodules} > <i className="material-icons" >add</i></button>
                        </div>
                    </div>
                    <div className="row">
                        <a href="#!" className="btn waves-effect waves-light" name="action" onClick={this.handlesubmit}>Submit
                            <i className="material-icons right">send</i>
                        </a>
                    </div>
                </form>
            </div >
        );
    }
}


export default Createprogram;