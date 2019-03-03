import React, { Component } from 'react';
import axios from 'axios'
//import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class Createmodule extends Component {
    constructor(props) {
        super(props)

        this.state = {
            addmodule: [],
            addsections: [],
            addtasks: [],
            addgoals: [],
            addpills: [],
            addactivies: [],
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
            goals: [],
            pills: [],
            resources: {
                type: '',
                data: { value: '' }
            },
            statusCode: 0
        }

        this.createmodule = this.createmodule.bind(this)
    }
    createmodule = async () => {
        console.log('[AXIOS REQUEST]')

        if (this.state.description !== "" &&
            this.state.title !== "" &&
            this.state.module.length > 0 &&
            this.state.sections.length > 0 &&
            this.state.tasks.length > 0 &&
            this.state.goals.length > 0 &&
            this.state.activities.length > 0 &&
            this.state.pills.length > 0) {
            await axios.post('http://localhost:8002/api/modules', {
                id: this.state.id,
                description: this.state.description,
                title: this.state.title,
                modules: this.state.module,
                sections: this.state.sections,
                tasks: this.state.tasks,
                activities: this.state.activities,
                goals: this.state.goals,
                pills: this.state.pills,
                resources: this.state.resources
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
    addmodule = (e) => {
        e.preventDefault()
        var modulearray = this.state.addmodule;

        modulearray.push(<div>
            <input placeholder="modules" id="modules" type="text" className="validate" onChange={this.handlemodulechange} required />
            <label className="active" htmlFor="modules"></label>
        </div>);
        console.log('[ARRAY] :', modulearray)
        this.setState({
            addmodule: modulearray
        })
    }

    addtasks = (e) => {
        e.preventDefault()
        var taskarray = this.state.addtasks;

        taskarray.push(<div>
            <input placeholder="tasks" id="tasks" type="text" className="validate" onChange={this.handletaskchange} required />
            <label className="active" htmlFor="tasks"></label>
        </div>);
        console.log('[ARRAY] :', taskarray)
        this.setState({
            addtasks: taskarray
        })
    }

    addgoals = (e) => {
        e.preventDefault()
        var goalsarray = this.state.addgoals;

        goalsarray.push(<div>
            <input placeholder="goals" id="goals" type="text" className="validate" onChange={this.handletaskchange} required />
            <label className="active" htmlFor="goals"></label>
        </div>);
        console.log('[ARRAY] :', goalsarray)
        this.setState({
            addgoals: goalsarray
        })
    }

    addpills = (e) => {
        e.preventDefault()
        var pillsarray = this.state.addpills;

        pillsarray.push(<div>
            <input placeholder="pills" id="pills" type="text" className="validate" onChange={this.handlepillschange} required />
            <label className="active" htmlFor="pills"></label>
        </div>);
        console.log('[ARRAY] :', pillsarray)
        this.setState({
            addpills: pillsarray
        })
    }
    addactivies = (e) => {
        e.preventDefault()
        var activityarray = this.state.addactivies;

        activityarray.push(<div>
            <input placeholder="activites" id="activites" type="text" className="validate" onChange={this.handleactivitychange} required />
            <label className="active" htmlFor="activites"></label>
        </div>);
        console.log('[ARRAY] :', activityarray)
        this.setState({
            addactivies: activityarray
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
        this.createmodule();
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
    render() {
        if (this.state.statusCode === 201) {
            return <Redirect to='/modules' />
        }
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Id" id="id" type="number" className="validate" disabled onChange={this.handleidchange}></input>
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
                            <button className="btn-floating btn-large waves-effect waves-light red" onClick={this.addmodule} > <i className="material-icons" >add</i></button>
                        </div>
                        <div className="input-field col s6">
                            <label className="active">Tasks</label>
                            <input placeholder="tasks" id="tasks" type="text" className="validate" onChange={this.handletaskchange} required />
                            <label className="active" htmlFor="tasks"></label>
                            <div>
                                {
                                    this.state.addtasks.map((input, id) => {

                                        return (
                                            <div key={id}>
                                                {input}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <button className="btn-floating btn-large waves-effect waves-light red" onClick={this.addtasks} > <i className="material-icons" >add</i></button>
                        </div>
                        <div className="input-field col s6">
                            <label className="active">Pills</label>
                            <input placeholder="pills" id="pills" type="text" className="validate" onChange={this.handlepillschange} required />
                            <label className="active" htmlFor="pills"></label>
                            <div>
                                {
                                    this.state.addpills.map((input, id) => {

                                        return (
                                            <div key={id}>
                                                {input}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <button className="btn-floating btn-large waves-effect waves-light red" onClick={this.addpills} > <i className="material-icons" >add</i></button>
                        </div>
                        <div className="input-field col s6">
                            <label className="active">Goals</label>
                            <input placeholder="goals" id="goals" type="text" className="validate" onChange={this.handlegoalschange} required />
                            <label className="active" htmlFor="goals"></label>
                            <div>
                                {
                                    this.state.addgoals.map((input, id) => {

                                        return (
                                            <div key={id}>
                                                {input}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <button className="btn-floating btn-large waves-effect waves-light red" onClick={this.addgoals} > <i className="material-icons" >add</i></button>
                        </div>
                        <div className="input-field col s6">
                            <label className="active">Activities</label>
                            <input placeholder="activities" id="activities" type="text" className="validate" onChange={this.handleactivitychange} required />
                            <label className="active" htmlFor="activities"></label>
                            <div>
                                {
                                    this.state.addactivies.map((input, id) => {

                                        return (
                                            <div key={id}>
                                                {input}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <button className="btn-floating btn-large waves-effect waves-light red" onClick={this.addactivies} > <i className="material-icons" >add</i></button>
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


export default Createmodule;