import React, { Component } from 'react'

let popUpWindoStyles = {
    backgroundColor: '#dc7aa4',
    color: '#dcdcdc',
    height: '40%',
    width: '40%',
    border: '2px solid #c4c7c4',
    borderTop: 'none',
    marginTop: '150px',
    marginLeft: '250px',
    position: 'relative',
    zIndex: '99',
    position:'absolute',
    bottom:'20%',
    left:'0'
};

let closeButton = {
    size: '5px',
    top: '0px',
    right: '0px',
    position: 'absolute',
    cursor: 'pointer'
};

let upperBorder = {
    height: '15px',
    backgroundColor: '#c4c7c4'
};


export default class Player extends Component {
    render() {
        let about = (
            <div style={popUpWindoStyles}>
                <div style={upperBorder}>
                    <img style={closeButton} src={require('../assets/closeButton.png')} alt="close-popup" onClick={this.props.onClose}/>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>

        );
        
        if(!this.props.playerIsOpen) {
            about = null;
        }

        return (
            <div>
                {about}
            </div>
        )
    }
}
