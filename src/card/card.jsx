import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
    render() {
        var displaydetails;
        console.log('[KEY] :', this.props.index)
        if (typeof this.props.index === 'undefined')
            displaydetails = this.props.cardtitle;
        else {
            displaydetails = this.props.cardtitle + this.props.index;
        }
        return (
            <div className="row" >
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{displaydetails}</span>
                        </div>
                        <div className="card-action">
                            <Link to={{ pathname: `${this.props.pathname}`, params: this.props.program }} className="waves-effect waves-light btn">
                                {this.props.linktitle}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Card;