import React, { Component } from 'react';
import axios from 'axios'
//import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class Createtask extends Component {
    constructor(props) {
        super(props)

        this.state = {
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
            statusCode: 0
        }

        this.createtask = this.createtask.bind(this)
    }
    createtask = async () => {
        console.log('[AXIOS REQUEST]')
        let copydata = {
            questionType: this.state.questionType,
            answerType: this.state.answerType,
            taskSummary: this.state.taskSummary,
            questionSet: [{
                id: this.state.questionid,
                question: this.state.question,
                options: this.state.options,
                popup: this.state.popup,
                correct: this.state.correct
            }]
        }
        if (this.state.description !== "" &&
            this.state.title !== "" &&
            this.state.sections.length > 0) {
            await axios.post('http://localhost:8000/api/assetmanagement/task', {
                id: this.state.id,
                shortDescription: this.state.description,
                title: this.state.title,
                sections: this.state.sections,
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

    componentDidUpdate() {

        console.log(this.state.id)
    }

    handlesubmit = () => {
        console.log('[Submit]');
        this.createtask();
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
    addpopup = (e) => {
        e.preventDefault()
        var array = this.state.popup;

        array.push(<div>
            <div className="input-field col s6">
                <input placeholder="popup" id="popup" type="text" className="validate" onChange={this.handlepopupchange} required />
                <label className="active" htmlFor="popup">popup</label>
            </div>
        </div>);
        console.log('[ARRAY] :', array)
        this.setState({
            popup: array
        })
    }
    addoptions = (e) => {
        e.preventDefault()
        var array = this.state.options;

        array.push(<div>
            <div className="input-field col s6">
                <input placeholder="options" id="options" type="text" className="validate" onChange={this.handleoptionschange} required />
                <label className="active" htmlFor="options">options</label>
            </div>
        </div>);
        console.log('[ARRAY] :', array)
        this.setState({
            options: array
        })
    }
    render() {
        if (this.state.statusCode === 201) {
            return <Redirect to='/tasks' />
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
                            <label className="active" >Data</label>
                            <div className="input-field col s6">
                                <input placeholder="description" id="description" type="text" className="validate" onChange={this.handlequestiontypechange} required />
                                <label className="active" htmlFor="description">QuestionType</label>
                            </div>
                            <div className="input-field col s6">
                                <input placeholder="description" id="description" type="text" className="validate" onChange={this.handleanswertypechange} required />
                                <label className="active" htmlFor="description">AnswerType</label>
                            </div>
                            <div className="input-field col s6">
                                <input placeholder="description" id="description" type="text" className="validate" onChange={this.handletasksummarychange} required />
                                <label className="active" htmlFor="description">TaskSummary</label>
                            </div>
                            {
                                this.state.questionSet.map((mappedObject, id) =>
                                    <ul key={id} hidden>
                                        <li>
                                            {mappedObject.id = this.state.questionid}
                                            {mappedObject.question = this.state.question}
                                            {mappedObject.options = this.state.options}
                                            {mappedObject.popup = this.state.popup}
                                            {mappedObject.correct = this.state.correct}
                                        </li>
                                    </ul>
                                )
                            }
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="id" id="id" type="id" className="validate" onChange={this.handlequestionidchange} required />
                            <label className="active" htmlFor="id">id</label>
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="question" id="question" type="text" className="validate" onChange={this.handlequestionchange} required />
                            <label className="active" htmlFor="question">question</label>
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="options" id="options" type="text" className="validate" onChange={this.handleoptionchange} required />
                            <label className="active" htmlFor="options">options</label>
                            <button className="btn-floating btn-large waves-effect waves-light red" onClick={this.addoptions} > <i className="material-icons" >add</i></button>
                            <div className="input-field col s6">
                                {
                                    this.state.options.map((input, id) => {

                                        return (
                                            <div key={id}>
                                                {input}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="popup" id="popup" type="text" className="validate" onChange={this.handlepopupchange} required />
                            <label className="active" htmlFor="popup">popup</label>
                            <button className="btn-floating btn-large waves-effect waves-light red" onClick={this.addpopup} > <i className="material-icons" >add</i></button>
                            <div className="input-field col s6">
                                {
                                    this.state.popup.map((input, id) => {

                                        return (
                                            <div key={id}>
                                                {input}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="correct" id="correct" type="text" className="validate" onChange={this.handlecorrectanschange} required />
                            <label className="active" htmlFor="correct">correct</label>
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


export default Createtask;