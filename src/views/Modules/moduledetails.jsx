import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import M from 'materialize-css'
class Moduledetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            axiosflag: false,
            params: ''
        }
    }
    componentDidMount() {
        let collapsible = document.querySelectorAll('.collapsible');
        M.Collapsible.init(collapsible)
    }

    render() {
        console.log('[ID]', this.props.location.params)
        if (typeof this.props.location.params === 'undefined')
            return <Redirect to='/modules' />
        else {
            return (
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input placeholder="Id" id="id" type="text" className="validate" disabled defaultValue={this.props.location.params.id}></input>
                                <label className="active" htmlFor="id">ID</label>
                            </div>
                            <div className="input-field col s6">
                                <input placeholder="title" id="title" type="text" className="validate" disabled defaultValue={this.props.location.params.title}></input>
                                <label className="active" htmlFor="title">Title</label>
                            </div>
                            <div className="input-field col s6">
                                <input placeholder="description" id="description" type="text" className="validate" disabled defaultValue={this.props.location.params.description}></input>
                                <label className="active" htmlFor="description">Description</label>
                            </div>
                            <div className="input-field col s6">
                                <label className="active" >Sections</label>
                                {
                                    this.props.location.params.sections.map((item, key) => {
                                        return (
                                            <div key={key}>
                                                <div className="input-field col s6">
                                                    <input placeholder="type" id="type" type="text" className="validate" disabled defaultValue={item.type}></input>
                                                    <label className="active" htmlFor="type"></label>
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
                            <div className="input-field col s6">
                                <label className="active">Modules</label>
                                {
                                    this.props.location.params.modules.map((item, key) => {
                                        return (
                                            <div key={key}>
                                                <div className="input-field col s6">
                                                    <input placeholder="modules" id="modules" type="text" className="validate" disabled defaultValue={item}></input>
                                                    <label className="active" htmlFor="modules"></label>
                                                </div>
                                            </div>
                                        );

                                    })
                                }
                            </div>
                            <div className="input-field col s6">
                                <label className="active">Tasks</label>
                                {
                                    this.props.location.params.tasks.map((item, key) => {
                                        return (
                                            <div key={key}>
                                                <div className="input-field col s6">
                                                    <input placeholder="tasks" id="tasks" type="text" className="validate" disabled defaultValue={item}></input>
                                                    <label className="active" htmlFor="tasks"></label>
                                                </div>
                                            </div>
                                        );

                                    })
                                }
                            </div>
                            <div className="input-field col s6">
                                <label className="active">Pills</label>
                                {
                                    this.props.location.params.pills.map((item, key) => {
                                        return (
                                            <div key={key}>
                                                <div className="input-field col s6">
                                                    <input placeholder="pills" id="pills" type="text" className="validate" disabled defaultValue={item}></input>
                                                    <label className="active" htmlFor="pills"></label>
                                                </div>
                                            </div>
                                        );

                                    })
                                }
                            </div>
                            <div className="input-field col s6">
                                <label className="active">Goals</label>
                                {
                                    this.props.location.params.goals.map((item, key) => {
                                        return (
                                            <div key={key}>
                                                <div className="input-field col s6">
                                                    <input placeholder="goals" id="goals" type="text" className="validate" disabled defaultValue={item}></input>
                                                    <label className="active" htmlFor="goals"></label>
                                                </div>
                                            </div>
                                        );

                                    })
                                }
                            </div>
                            <div className="input-field col s6">
                                <label className="active">Activities</label>
                                {
                                    this.props.location.params.activities.map((item, key) => {
                                        return (
                                            <div key={key}>
                                                <div className="input-field col s6">
                                                    <input placeholder="activities" id="activities" type="text" className="validate" disabled defaultValue={item}></input>
                                                    <label className="active" htmlFor="activities"></label>
                                                </div>
                                            </div>
                                        );

                                    })
                                }
                            </div>
                            <div className="input-field col s6">
                                <label className="active" >Resources</label>
                                <div className="input-field col s6">
                                    <input placeholder="type" id="type" type="text" className="validate" disabled defaultValue={this.props.location.params.resources.title}></input>
                                    <label className="active" htmlFor="type">title</label>
                                </div>
                                <div className="input-field col s6">
                                    <input placeholder="value" id="type" type="text" className="validate" disabled defaultValue={this.props.location.params.resources.shortDescription}></input>
                                    <label className="active" htmlFor="value">short description</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            );
        }
    }
}

export default Moduledetails;