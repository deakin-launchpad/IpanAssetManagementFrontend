import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios'
class Taskdetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editStatus: false,
            params: '',
            questionSet: [{}],
            questionType: '',
            answerType: '',
            taskSummary: '',
            questionid: '',
            question: '',
            options: [],
            popup: [],
            correct: '',
            id: '',
            description: '',
            title: '',
            type: '',
        }
    }
    componentDidMount() {
        console.log('[QuestionSet]', this.props.location.params.data.questionSet)
        this.setState({
            questionSet: this.props.location.params.data.questionSet,
            questionType: this.props.location.params.data.questionType,
            answerType: this.props.location.params.data.answerType,
            taskSummary: this.props.location.params.data.taskSummary,
            id: this.props.location.params.id,
            description: this.props.location.params.shortDescription,
            title: this.props.location.params.title,
            type: this.props.location.params.type
        })
        this.props.location.params.data.questionSet.map(element => {
            return this.setState({
                questionid: element.id,
                question: element.question,
                options: element.options,
                popup: element.popup,
                correct: element.correct,
            })
        })
    }

    handleidchange = (e) => {
        this.setState({
            id: e.target.value
        })
    }
    handlequestionidchange = (e) => {
        this.setState({
            questionid: e.target.value
        })
    }
    handledecriptionchange = (e) => {
        this.setState({
            description: e.target.value
        })
    }
    handletitlechange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handlepopupchange = (e) => {
        var array = this.state.popup;

        array.push(e.target.value);
        this.setState({
            popup: array
        })
    }
    handleanswertypechange = (e) => {
        this.setState({
            answerType: e.target.value
        })
    }
    handlequestiontypechange = (e) => {
        this.setState({
            questionType: e.target.value
        })
    }
    handletasksummarychange = (e) => {
        this.setState({
            taskSummary: e.target.value
        })
    }
    handleoptionschange = (e) => {
        var array = this.state.options;

        array.push(e.target.value);
        this.setState({
            options: array
        })
    }
    handlecorrectanschange = (e) => {
        this.setState({
            correct: e.target.value
        })
    }
    handleEditStatus = () => {
        this.setState({
            editStatus: true
        })
    }
    updateActivity = async () => {
        console.log('[AXIOS REQUEST]')
        let copydata = {
            questionType: this.state.questionType,
            answerType: this.state.answerType,
            taskSummary: this.state.taskSummary,
            questionSet: this.state.questionSet
        }
        if (1) {
            await axios.put('http://localhost:8000/api/assetmanagment/tasks', {
                id: this.state.id,
                shortDescription: this.state.description,
                title: this.state.title,
                type: this.state.type,
                data: copydata

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
    render() {
        if (this.state.statusCode !== 200) {
            console.log('[==================]', this.props.location.params.data)
            if (typeof this.props.location.params === 'undefined')
                return <Redirect to='/tasks' />
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
                                                            <input placeholder="question" id="question" type="text" className="validate" disabled defaultValue={item.question.text}></input>
                                                            <label className="active" htmlFor="question">Question</label>
                                                        </div>
                                                        <div className="input-field col s6">
                                                            <label className="active">Options</label>
                                                            {
                                                                item.options.map((item, key) => {
                                                                    return (
                                                                        <div key={key}>
                                                                            <input placeholder="options" id="options" type="text" className="validate" disabled defaultValue={item.text}></input>
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
                                                                <input placeholder="correct" id="correct" type="text" className="validate" disabled defaultValue={item.correct}></input>
                                                                <label className="active" htmlFor="correct"></label>
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
                                        <input placeholder="title" id="title" type="text" className="validate" defaultValue={this.props.location.params.title}></input>
                                        <label className="active" htmlFor="title">Title</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input placeholder="description" id="description" type="text" className="validate" defaultValue={this.props.location.params.shortDescription}></input>
                                        <label className="active" htmlFor="description">Description</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input placeholder="type" id="type" type="text" className="validate" defaultValue={this.props.location.params.type}></input>
                                        <label className="active" htmlFor="type">Description</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input placeholder="questiontype" id="questiontype" type="text" className="validate" defaultValue={this.props.location.params.data.questionType}></input>
                                        <label className="active" htmlFor="questiontype">Question Type</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input placeholder="answertype" id="answertype" type="text" className="validate" defaultValue={this.props.location.params.data.answerType}></input>
                                        <label className="active" htmlFor="answertype">Answer Type</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input placeholder="tasksummary" id="tasksummary" type="text" className="validate" defaultValue={this.props.location.params.data.taskSummary}></input>
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
                                                            <input placeholder="question" id="question" type="text" className="validate" defaultValue={item.question.text}></input>
                                                            <label className="active" htmlFor="question">Question</label>
                                                        </div>
                                                        <div className="input-field col s6">
                                                            <label className="active">Options</label>
                                                            {
                                                                item.options.map((item, key) => {
                                                                    return (
                                                                        <div key={key}>
                                                                            <input placeholder="options" id="options" type="text" className="validate" defaultValue={item.text}></input>
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
                                                                        <input placeholder="popup" id="popup" type="text" className="validate" defaultValue={item}></input>
                                                                        <label className="active" htmlFor="popup">Pop Up</label>
                                                                    </div>
                                                                    );

                                                                })
                                                            }
                                                        </div>
                                                        <div className="input-field col s6">
                                                            <label className="active" htmlFor="correct">Correct</label>
                                                            <div className="input-field col s6">
                                                                <input placeholder="correct" id="optionid" type="text" className="validate" defaultValue={item.correct}></input>
                                                                <label className="active" htmlFor="optionid"></label>
                                                            </div>
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
            return <Redirect to='/tasks' />
        }
    }
}

export default Taskdetails;