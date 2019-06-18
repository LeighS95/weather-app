import React from 'react'

const Form = props => {

    return (
        <form onSubmit={props.getWeather} style={container}>
            <label htmlFor="city" style={labelStyle}>City</label>
            <input name="city" type="text" style={inputStyle} />
            <label htmlFor="country" style={labelStyle}>Country</label>
            <input name="country" type="text" style={inputStyle} />
            <button style={btnStyle}>Get Weather</button>
        </form>
    )
}

export default Form

/**STYLES */

const container = {
    margin: '0 auto',
    padding: '10px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxHeight: '200px',
    width: '70%',
    minWidth: '250px',
    maxWidth: '350px',
    justifyItems: 'center',
    alignItems: 'center',
    boxShadow: '0 1px 5px #000',
    backgroundColor: '#f4f4f4'
}

const inputStyle = {
    width: '70%',
    padding: '5px',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '3px',
    backgroundColor: '#f4f4f4',
    boxShadow: '0 1px 5px #333',
    marginBottom: '20px'
}

const labelStyle = {
    width: '30%',
    marginBottom: '20px',
    fontSize: '1rem'
}

const btnStyle = {
    margin: '0 auto',
    padding: '10px 15px',
    borderRadius: '10px',
    border: 'none',
    color: '#fff',
    backgroundColor: 'lightBlue'
}