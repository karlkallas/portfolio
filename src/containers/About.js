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
    background: rgb(34,193,195);
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
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

let passPortPicture = {
    boxShadow: '0 8px 6px -6px black',
    width: '100px',
    top:'20px',
    right:'5px',
    position:'absolute',
    zIndex: '-1'
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
                    <img style={passPortPicture} src={require('../assets/passipilt.jpg')}/>
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
