import React from 'react';
import { Spring, animated } from 'react-spring';

const Loader = () => {
    return (
        <div style={container}>
            <Spring 
                config={{ duration: 10000 }}
                from={{ 
                    position: 'absolute',
                    top: '30%',
                    left: '40%',
                    height: '75px',
                    width: '75px',
                    borderRadius: '50%',
                    border: '10px solid #f3f3f3',
                    borderTop: '10px solid #3498db',
                    borderRight: '10px solid #3498db',
                    borderBottom: '10px solid #3498db',
                    transform: 'rotate(0deg)' }}
                to={{ 
                    position: 'absolute',
                    top: '30%',
                    left: '40%',
                    height: '75px',
                    width: '75px',
                    borderRadius: '50%',
                    border: '10px solid #f3f3f3',
                    borderTop: '10px solid #3498db',
                    borderRight: '10px solid #3498db',
                    borderBottom: '10px solid #3498db',
                    transform: 'rotate(360deg)' }}
                >
                {props => (
                    <animated.div style={props}>
                        <div>{props.circle}</div>
                    </animated.div>
                )}
            </Spring>
        </div>
    )
}

const container = {
    position: 'absolute',
    top: '0',
    left: '0',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)'
}

export default Loader;

/**<div style={container}>
                    <div style={props}>
                        <div style={circle}></div>
                    </div>
                </div> */