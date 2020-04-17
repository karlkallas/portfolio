import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    background-color: #dc7aa4;
    color: #dcdcdc;
    height: 55%;
    width: 40%;
    border: 2px solid #c4c7c4;
    border-top: none;
    margin-top: 150px;
    margin-left: 250px;
    position: relative;
    z-index: 99;
    @media (max-width: 450px) {
        bottom: 25px;
        left: 25px;
        height: 50%;
        width: auto;
        margin: 0;
        position: fixed;
        overflow-y: auto;
        text-align: center;
        word-spacing: 10px;
    }
`
;

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


export default class Work extends Component {
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
        
        if(!this.props.workIsOpen) {
            about = null;
        }

        return (
            <div>
                {about}
            </div>
        )
    }
}
