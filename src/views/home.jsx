import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '../card/card';

class Home extends Component {
    render() {
        return (
            <div className='container'>
                <Card cardtitle='Programs' linktitle=" Programs List" pathname='/programs'>
                    <Link to={{ pathname: '/programs' }} className="waves-effect waves-light btn" >
                    </Link>
                </Card>
                <Card cardtitle='Modules' linktitle='Modules List' pathname='/modules'>
                    <Link to={{ pathname: '/modules' }} className="waves-effect waves-light btn" >
                        Modules
          </Link>
                </Card>
                <Card cardtitle='Activities' linktitle='Activity List' pathname='/activity'>
                    <Link to={{ pathname: '/activity' }} className="waves-effect waves-light btn" >
                        Modules
          </Link>
                </Card>
            </div>
        );

    }
}

export default Home;