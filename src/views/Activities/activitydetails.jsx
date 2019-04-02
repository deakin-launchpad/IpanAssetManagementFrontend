import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import M from 'materialize-css'
import axios from 'axios'
class Activitydetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            statusCode: '',
            editStatus: false,
            id: '',
            description: '',
            title: '',
            sectiontype: '',
            sectionvalue: '',
            module: '',
            sections: [{
                type: '',
                value: ''
            }]
        }
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
    handleEditStatus = () => {
        this.setState({
            editStatus: true
        })
    }
    componentDidMount() {
        this.setState({
            id: this.props.location.params.id,
            description: this.props.location.params.description,
            title: this.props.location.params.title,
            sectiontype: this.props.location.params.sections.type,
            sectionvalue: this.props.location.params.sections.value,
            module: this.props.location.params.module,
            sections: [{
                type: this.props.location.params.sections.type,
                value: this.props.location.params.sections.value
            }]

        })
        let collapsible = document.querySelectorAll('.collapsible');
        M.Collapsible.init(collapsible)
    }


    updateActivity = async () => {
        console.log('[AXIOS REQUEST]')

        if (this.state.description !== "" && this.state.title !== "" && this.state.module.length > 0 && this.state.sections.length > 0) {
            await axios.put('http://localhost:8000/api/assetmanagment/activity', {
                id: this.state.id,
                description: this.state.description,
                title: this.state.title,
                modules: this.state.module,
                sections: this.state.sections
            })
                .then(response => {

                    if (response.data.statusCode === 200) {
                        this.setState({
                            statusCode: 200
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


    render() {
        if (this.state.statusCode !== 200) {
            if (typeof this.props.location.params === 'undefined')
                return <Redirect to='/activity' />
            else {
                if (this.state.editStatus === false) {
                    return (
                        <div className="row">
                            <button className="btn waves-effect waves-light " onClick={this.handleEditStatus} >Edit</button>
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input placeholder="Id" id="id" type="id" className="validate" disabled defaultValue={this.props.location.params.id}></input>
                                        <label className="active" htmlFor="id">ID</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input placeholder="title" id="title" type="text" className="validate" disabled defaultValue={this.props.location.params.title}></input>
                                        <label className="active" htmlFor="title">Title</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input placeholder="description" id="description" type="text" className="validate" disabled defaultValue={this.props.location.params.shortDescription}></input>
                                        <label className="active" htmlFor="description">Description</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <label className="active" >Sections</label>
                                        {
                                            this.props.location.params.sections.map((item, key) => {
                                                return (
                                                    <div key={key}>
                                                        <div className="input-field col s6">
                                                            <input placeholder="type" id="type" type="text" className="validate" disabled defaultValue={item.type}></input>
                                                            <label className="active" htmlFor="type">type</label>
                                                        </div>
                                                        <div className="input-field col s6">
                                                            <input placeholder="value" id="type" type="text" className="validate" disabled defaultValue={item.data.value}></input>
                                                            <label className="active" htmlFor="value">value</label>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </form>
                        </div >
                    );
                }
                else {
                    return (
                        <div className="row">
                            <button className="btn waves-effect waves-light " onClick={this.handleEditStatus} >Edit</button>
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input placeholder="Id" id="id" type="id" className="validate" disabled defaultValue={this.props.location.params.id}></input>
                                        <label className="active" htmlFor="id">ID</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input placeholder="title" id="title" type="text" className="validate" defaultValue={this.props.location.params.title}></input>
                                        <label className="active" htmlFor="title">Title</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input placeholder="description" id="description" type="text" className="validate" defaultValue={this.props.location.params.shortDescription}></input>
                                        <label className="active" htmlFor="description">Description</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <label className="active" >Sections</label>
                                        {
                                            this.props.location.params.sections.map((item, key) => {
                                                return (
                                                    <div key={key}>
                                                        <div className="input-field col s6">
                                                            <input placeholder="type" id="type" type="text" className="validate" defaultValue={item.type}></input>
                                                            <label className="active" htmlFor="type">type</label>
                                                        </div>
                                                        <div className="input-field col s6">
                                                            <input placeholder="value" id="type" type="text" className="validate" defaultValue={item.data.value}></input>
                                                            <label className="active" htmlFor="value">value</label>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </form>
                            <button className="btn waves-effect waves-light " onClick={this.updateActivity} >Update</button>
                        </div >
                    );
                }

            }
        }
        else {
            return <Redirect to='/activity'></Redirect>
        }
    }
}

export default Activitydetails;