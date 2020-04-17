import React, { Component } from 'react';
import styled from 'styled-components';
/*
let popUpWindoStyles = {
    backgroundColor: '#000',
    color: '#dcdcdc',
    height: '75%',
    width: '75%',
    bottom: '125px',
    left: '25px',
    border: '2px solid #c4c7c4',
    borderTop: 'none',
    marginTop: '50px',
    position: 'relative',
    zIndex: '20'
};
*/
const Wrapper = styled.section`
    background-color: #000;
    color: #dcdcdc;
    height: 75%;
    width: 75%;
    bottom: 125px;
    left: 25px;
    border: 2px solid #c4c7c4;
    border-top: none;
    margin-top: 50px;
    position: relative;
    z-index: 20;
    @media (max-width: 450px) {
        bottom: 0px;
        left: 0px;
        height: 100%;
        width: auto;
        margin: 0;
        position: fixed;
        overflow-y:auto;
        text-align: center;
        word-spacing: 10px;
    }
`;


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


export default class About extends Component {
    render() {
        let about = (
            <Wrapper>
                <div style={upperBorder}>
                    <img style={closeButton} src={require('../assets/closeButton.png')} alt="close-popup" onClick={this.props.onClose}/>
                </div>
                <div>
                    {this.props.children}
                </div>
            </Wrapper>

        );
        
        if(!this.props.aboutIsOpen) {
            about = null;
        }

        return (
            <div>
                {about}
            </div>
        )
    }
}
