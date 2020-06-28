import React from 'react';
import './index.css'
import Card from './Card'

const Work = (props) => {
    return (
        <React.Fragment>
            <h1>{props.name} Page</h1>
            <div className="cards">
            <Card 
                name="Chat Boat"
                title="Socket, Javscript, CSS3, HTML5"
            />
            <Card 
                 name="Weather API"
                title="API, Javscript,Heroku"
            />
            <Card 
                 name="Utterance"
                title="Jquery"
            />
            <Card 
                 name="Game"
                title="SCSS, Javascript"
            />
            </div>
            <div className="cards">
            <Card 
                name="Google Keep"
                title="ReactJS, JSX, Babel"
            />
            <Card 
                 name="Drawing"
                title="Canvas, HTML5"
            />
            <Card 
                 name="Word"
                title="Bootstrap, JqueryUI"
            />
            <Card 
                 name="SF"
                title="Salesforce Admin"
            />
            </div>
        </React.Fragment>
    )
}

export default Work;