import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import M from 'materialize-css'
import axios from 'axios'
class Moduledetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            statusCode: '',
            editStatus: false,
            prerequisitemodule: [],
            prerequisitegoals: [],
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
            tasks: [],
            activities: [],
            refreshers: [],
            goals: [],
            pills: [],
            prerequisities: {
                modules: [],
                goals: []
            },
        }
    }

    updateModule = async () => {
        console.log('[AXIOS REQUEST]')

        //if (this.state.description !== "" && this.state.title !== "" && this.state.module.length > 0 && this.state.sections.length > 0) 
        //{
        await axios.put('http://localhost:8000/api/assetmanagment/modules', {
            id: this.state.id,
            description: this.state.description,
            title: this.state.title,
            modules: this.state.module,
            sections: this.state.sections,
            tasks: this.state.tasks,
            activities: this.state.activities,
            goals: this.state.goals,
            pills: this.state.pills,
            refreshers: this.state.refreshers,
            prerequisities: this.state.prerequisities
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
        // }
        //   else {
        //         return (alert('Form fields cannot be empty'))
        //     }

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
    handlerefresherchange = (e) => {
        var array = this.state.refreshers;

        array.push(e.target.value)
        this.setState({
            refreshers: array
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

    handletaskchange = (e) => {
        var array = this.state.tasks;

        array.push(e.target.value)
        this.setState({
            tasks: array
        })
    }

    handleactivitychange = (e) => {
        var array = this.state.activities;

        array.push(e.target.value)
        this.setState({
            activities: array
        })
    }

    handlepillschange = (e) => {
        var array = this.state.pills;

        array.push(e.target.value)
        this.setState({
            pills: array
        })
    }

    handlegoalschange = (e) => {
        var array = this.state.goals;

        array.push(e.target.value)
        this.setState({
            goals: array
        })
    }

    handleEditStatus = () => {
        this.setState({
            editStatus: true
        })
    }

    handleprerequisitiesmodulechange = (e) => {
        var array = this.state.prerequisitemodule;

        array.push(e.target.value)

        this.setState({
            prerequisitemodule: array
        })
    }

    handleprerequisitiesgoalschange = (e) => {
        var array = this.state.prerequisitegoals;

        array.push(e.target.value)

        this.setState({
            prerequisitegoals: array
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
            refreshers: this.props.location.params.refreshers,
            sections: [{
                type: this.props.location.params.sections.type,
                value: this.props.location.params.sections.value
            }],
            tasks: this.props.location.params.tasks,
            activities: this.props.location.params.activities,
            goals: this.props.location.params.goals

        })
        let collapsible = document.querySelectorAll('.collapsible');
        M.Collapsible.init(collapsible)
    }

    render() {
        if (this.state.statusCode !== 200) {
            if (typeof this.props.location.params === 'undefined')
                return <Redirect to='/modules' />
            else {
                console.log('[SECTIONS]', this.props.location.params);
                if (this.state.editStatus === false) {
                    return (
                        <div className="row">
                            <button className="btn waves-effect waves-light " onClick={this.handleEditStatus} >Edit</button>
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
                                        <input placeholder="description" id="description" type="text" className="validate" disabled defaultValue={this.props.location.params.shortDescription}></input>
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
                                                            <input placeholder="value" id="type" type="text" className="validate" disabled defaultValue={item.value}></input>
                                                            <label className="active" htmlFor="value">value</label>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="input-field col s6">
                                        <label className="active">Refreshers</label>
                                        {
                                            this.props.location.params.refreshers.length > 0 ?
                                                this.props.location.params.refreshers.map((item, key) => {
                                                    return (
                                                        <div key={key}>
                                                            <div className="input-field col s6">
                                                                <input placeholder="modules" id="modules" type="text" className="validate" disabled defaultValue={item}></input>
                                                                <label className="active" htmlFor="modules"></label>
                                                            </div>
                                                        </div>
                                                    );

                                                }) :
                                                <div className="input-field col s6">
                                                    <input placeholder="modules" id="modules" type="text" className="validate" disabled defaultValue={this.props.location.params.refreshers[0]}></input>
                                                    <label className="active" htmlFor="modules"></label>
                                                </div>
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
                                        <label className="active" >Prerequisities</label>
                                        <div className="input-field col s6">
                                            <label className="active" htmlFor="type">Modules</label>
                                            {
                                                this.props.location.params.prerequisities.modules > 0 ?
                                                    this.props.location.params.prerequisities.modules.map((item, key) => {
                                                        return (
                                                            <div key={key}>
                                                                <div className="input-field col s6">
                                                                    <input placeholder="type" id="prprerequisitiesmodules" type="text" className="validate" defaultValue={item}></input>
                                                                    <label className="active" htmlFor="prerequisitiesmodules"></label>
                                                                </div>
                                                            </div>
                                                        );

                                                    }) : <div className="input-field col s6">
                                                        <input placeholder="type" id="prprerequisitiesmodules" type="text" className="validate" defaultValue={this.props.location.params.prerequisities.modules[0]}></input>
                                                        <label className="active" htmlFor="prerequisitiesmodules"></label>
                                                    </div>
                                            }
                                        </div>
                                        <div className="input-field col s6">
                                            <label className="active" htmlFor="value">Goals</label>
                                            {
                                                this.props.location.params.prerequisities.goals > 0 ?
                                                    this.props.location.params.prerequisities.goals.map((item, key) => {
                                                        return (
                                                            <div key={key}>
                                                                <div className="input-field col s6">
                                                                    <input placeholder="type" id="prprerequisitiesgoals" type="text" className="validate" defaultValue={item}></input>
                                                                    <label className="active" htmlFor="prerequisitiesgoals"></label>
                                                                </div>
                                                            </div>
                                                        );

                                                    }) : <div className="input-field col s6">
                                                        <input placeholder="type" id="prprerequisitiesgoals" type="text" className="validate" defaultValue={this.props.location.params.prerequisities.goals[0]}></input>
                                                        <label className="active" htmlFor="prerequisitiesgoals"></label>
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    );
                }
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
                                        <input placeholder="title" id="title" type="text" className="validate" defaultValue={this.props.location.params.title} onChange={this.handletitlechange}></input>
                                        <label className="active" htmlFor="title">Title</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input placeholder="description" id="description" type="text" className="validate" defaultValue={this.props.location.params.shortDescription} onChange={this.handledecriptionchange}></input>
                                        <label className="active" htmlFor="description">Description</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <label className="active" >Sections</label>
                                        {
                                            this.props.location.params.sections.map((item, key) => {
                                                return (
                                                    <div key={key}>
                                                        <div className="input-field col s6">
                                                            <input placeholder="type" id="type" type="text" className="validate" defaultValue={item.type} onChange={this.handlesectiontypechange}></input>
                                                            <label className="active" htmlFor="type"></label>
                                                        </div>
                                                        <div className="input-field col s6">
                                                            <input placeholder="value" id="type" type="text" className="validate" defaultValue={item.value} onChange={this.handlesectionvaluechange}></input>
                                                            <label className="active" htmlFor="value">value</label>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="input-field col s6">
                                        <label className="active">Refreshers</label>
                                        {
                                            this.props.location.params.refreshers.length > 0 ?
                                                this.props.location.params.refreshers.map((item, key) => {
                                                    return (
                                                        <div key={key}>
                                                            <div className="input-field col s6">
                                                                <input placeholder="refreshers" id="refreshers" type="text" className="validate" defaultValue={item} onChange={this.handlerefresherchange}></input>
                                                                <label className="active" htmlFor="refreshers"></label>
                                                            </div>
                                                        </div>
                                                    );

                                                }) :
                                                <div className="input-field col s6">
                                                    <input placeholder="refreshers" id="refreshers" type="text" className="validate" defaultValue={this.props.location.params.refreshers[0]} onChange={this.handlerefresherchange}></input>
                                                    <label className="active" htmlFor="refreshers"></label>
                                                </div>
                                        }
                                    </div>
                                    <div className="input-field col s6">
                                        <label className="active">Tasks</label>
                                        {
                                            this.props.location.params.tasks.map((item, key) => {
                                                return (
                                                    <div key={key}>
                                                        <div className="input-field col s6">
                                                            <input placeholder="tasks" id="tasks" type="text" className="validate" defaultValue={item} onChange={this.handletaskchange}></input>
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
                                                            <input placeholder="pills" id="pills" type="text" className="validate" defaultValue={item} onChange={this.handlepillschange}></input>
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
                                                            <input placeholder="goals" id="goals" type="text" className="validate" defaultValue={item} onChange={this.handlegoalschange}></input>
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
                                                            <input placeholder="activities" id="activities" type="text" className="validate" defaultValue={item}></input>
                                                            <label className="active" htmlFor="activities"></label>
                                                        </div>
                                                    </div>
                                                );

                                            })
                                        }
                                    </div>
                                    <div className="input-field col s6">
                                        <label className="active" >Prerequisities</label>
                                        <div className="input-field col s6">
                                            <label className="active" htmlFor="type">Modules</label>
                                            {
                                                this.props.location.params.prerequisities.modules > 0 ?
                                                    this.props.location.params.prerequisities.modules.map((item, key) => {
                                                        return (
                                                            <div key={key}>
                                                                <div className="input-field col s6">
                                                                    <input placeholder="type" id="prprerequisitiesmodules" type="text" className="validate" defaultValue={item} onChange={this.handleprerequisitiesmodulechange}></input>
                                                                    <label className="active" htmlFor="prerequisitiesmodules"></label>
                                                                </div>
                                                            </div>
                                                        );

                                                    }) : <div className="input-field col s6">
                                                        <input placeholder="type" id="prprerequisitiesmodules" type="text" className="validate" defaultValue={this.props.location.params.prerequisities.modules[0]} onChange={this.handleprerequisitiesgoalschange}></input>
                                                        <label className="active" htmlFor="prerequisitiesmodules"></label>
                                                    </div>
                                            }
                                        </div>
                                        <div className="input-field col s6">
                                            <label className="active" htmlFor="value">Goals</label>
                                            {
                                                this.props.location.params.prerequisities.goals > 0 ?
                                                    this.props.location.params.prerequisities.goals.map((item, key) => {
                                                        return (
                                                            <div key={key}>
                                                                <div className="input-field col s6">
                                                                    <input placeholder="type" id="prprerequisitiesgoals" type="text" className="validate" defaultValue={item}></input>
                                                                    <label className="active" htmlFor="prerequisitiesgoals"></label>
                                                                </div>
                                                            </div>
                                                        );

                                                    }) : <div className="input-field col s6">
                                                        <input placeholder="type" id="prprerequisitiesgoals" type="text" className="validate" defaultValue={this.props.location.params.prerequisities.goals[0]}></input>
                                                        <label className="active" htmlFor="prerequisitiesgoals"></label>
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    {
                                        this.state.prerequisities.modules.map((mappedObject, id) =>
                                            <ul key={id} hidden>
                                                <li>
                                                    {mappedObject.modules = this.state.prerequisitemodule}
                                                </li>
                                            </ul>
                                        )

                                    }
                                    {
                                        this.state.prerequisities.goals.map((mappedObject, id) =>
                                            <ul key={id} hidden>
                                                <li>
                                                    {mappedObject.modules = this.state.prerequisitegoals}
                                                </li>
                                            </ul>
                                        )
                                    }
                                </div>
                            </form>
                            <button className="btn waves-effect waves-light " onClick={this.updateModule} >Update</button>
                        </div>
                    );
                }
            }
        }
        else {
            return <Redirect to='/modules'></Redirect>
        }
    }
}

export default Moduledetails;