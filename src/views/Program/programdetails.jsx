import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import M from 'materialize-css'
class Programdetails extends Component {
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
        if (typeof this.props.location.params === 'undefined')
            return <Redirect to='/programs' />
        else {
            return (
                <div className="row">
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
                        </div>
                        <div className="row">
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
                                                    <label className="active" htmlFor="type">type</label>
                                                </div>
                                                <div className="input-field col s6">
                                                    <input placeholder="value" id="type" type="text" className="validate" disabled defaultValue={item.value}></input>
                                                    <label className="active" htmlFor="value">value</label>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="row">
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
                        </div>
                    </form>
                </div >
            );
        }
    }
}

export default Programdetails;