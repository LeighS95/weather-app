import React from 'react';

const Loader = (props) => {
    return (
        <div style={container}>
            <span style={circle}></span>
        </div>
    )
}

export default Loader;

const container = {
    position: 'absolute',
    top: '0',
    left: '0',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)'
}


const circle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: '75px',
    width: '75px',
    borderRadius: '50%',
    backgroundColor: 'none',
    transform: 'translate(-50%, -50%)',
    border: '10px solid #f3f3f3',
    borderTop: '10px solid #3498db',
    borderRight: '10px solid #3498db',
    borderBottom: '10px solid #3498db',
    animation: 'spin 2s linear infinite',
}