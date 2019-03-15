import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import M from 'materialize-css'
class Taskdetails extends Component {
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
        console.log('TASKS', JSON.stringify(this.props.location.params))
        if (typeof this.props.location.params === 'undefined')
            return <Redirect to='/tasks' />
        else {
            return (
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input placeholder="Id" id="id" type="id" className="validate" disabled defaultValue={this.props.location.params.id}></input>
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
                                <input placeholder="type" id="type" type="text" className="validate" disabled defaultValue={this.props.location.params.type}></input>
                                <label className="active" htmlFor="type">Description</label>
                            </div>
                            <div className="input-field col s6">
                                <input placeholder="questiontype" id="questiontype" type="text" className="validate" disabled defaultValue={this.props.location.params.data.questionType}></input>
                                <label className="active" htmlFor="questiontype">Question Type</label>
                            </div>
                            <div className="input-field col s6">
                                <input placeholder="answertype" id="answertype" type="text" className="validate" disabled defaultValue={this.props.location.params.data.answerType}></input>
                                <label className="active" htmlFor="answertype">Answer Type</label>
                            </div>
                            <div className="input-field col s6">
                                <input placeholder="tasksummary" id="tasksummary" type="text" className="validate" disabled defaultValue={this.props.location.params.data.taskSummary}></input>
                                <label className="active" htmlFor="tasksummary">Task Summary</label>
                            </div>
                            <div className="input-field col s6">
                                <label className="active" >Question Set</label>
                                {
                                    this.props.location.params.data.questionSet.map((item, key) => {
                                        return (
                                            <div key={key}>
                                                <div className="input-field col s6">
                                                    <input placeholder="id" id="id" type="id" className="validate" disabled defaultValue={item.id}></input>
                                                    <label className="active" htmlFor="id">id</label>
                                                </div>
                                                <div className="input-field col s6">
                                                    <input placeholder="question" id="question" type="text" className="validate" disabled defaultValue={item.question}></input>
                                                    <label className="active" htmlFor="question">Question</label>
                                                </div>
                                                <div className="input-field col s6">
                                                    <label className="active">Options</label>
                                                    {
                                                        item.options.map((item, key) => {
                                                            return (
                                                                <div key={key}>
                                                                    <input placeholder="options" id="options" type="text" className="validate" disabled defaultValue={item}></input>
                                                                    <label className="active" htmlFor="options">Options</label>
                                                                </div>
                                                            );
                                                        })
                                                    }
                                                </div>
                                                <div className="input-field col s6">
                                                    <label className="active">Popup</label>
                                                    {
                                                        item.popup.map((item, key) => {
                                                            return (<div key={key}>
                                                                <input placeholder="popup" id="popup" type="text" className="validate" disabled defaultValue={item}></input>
                                                                <label className="active" htmlFor="popup">Pop Up</label>
                                                            </div>
                                                            );

                                                        })
                                                    }
                                                </div>
                                                <div className="input-field col s6">
                                                    <label className="active" htmlFor="correct">Correct</label>
                                                    <div className="input-field col s6">
                                                        <input placeholder="optionid" id="optionid" type="text" className="validate" disabled defaultValue={item.correct.optionId}></input>
                                                        <label className="active" htmlFor="optionid">Option id</label>
                                                    </div>
                                                    <div className="input-field col s6">
                                                        <input placeholder="optionvalue" id="optionvalue" type="text" className="validate" disabled defaultValue={item.correct.optionValue}></input>
                                                        <label className="active" htmlFor="optionvalue">Option value</label>
                                                    </div>
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
    }
}

export default Taskdetails;