import React from 'react';

import Loader from './loader'

const Weather = props => {
    if(props.isLoaded === false) {
        return (
            <Loader />
        )
    } else {
        return (
            <div style={container}>
                <div style={dataStyle}>Location: <span style={infoStyle}>{props.city}, {props.country}</span></div>
    
                <div style={dataStyle}>Temperature: <span>{props.temperature}</span></div>
    
                <div style={dataStyle}>Humidity: <span>{props.humidity}</span></div>
    
                <div style={dataStyle}>Condition: <span>{props.description}</span></div>
    
                <div style={errorStyle}>{props.error}</div>
            </div>
        )
    }
}

export default Weather;

/**STYLES */

const container = {
    position: 'relative',
    margin: '20px auto',
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    width: '70%',
    minWidth: '250px',
    maxWidth: '450px',
    padding: '20px',
    border: '1px solid #333'
}

const dataStyle = {
    display: 'flex',
    marginTop: '10px',
    padding: '5px 0',
    fontWeight: '700'
}

const infoStyle = {
    fontWeight: '500',
    textAlign: 'right'
}

const errorStyle = {
    color: 'red'
}