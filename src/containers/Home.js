/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import styled from 'styled-components';
import { GlobalStyle } from '../theme/globalStyle';
import { Container } from '../theme/grid/Container';
import About from './About';
import Work from './Work';
import Player from './Player';
import Typist from 'react-typist';
import '../../node_modules/react-typist/dist/Typist.css';

const Image = styled.img`
    width: 50%;
    position: fixed;
    bottom: 0px;
    right: 0px;
    opacity: 0.7;
    z-index: -1;
`;

const BlackLink = styled.a`
    color: #dc7aa4;
    font-size: 25px;
    :hover {
        font-size: 25px;
        color: #dcdcdc;
    }
`;

const PinkLink = styled.a`
    color: #000;
    font-size: 25px;
    :hover {
        font-size: 25px;
        color: #dcdcdc;
    }
`;

export default class Home extends Component {

    state = {
        aboutIsOpen: false,
        workIsOpen: false,
        playerIsOpen: false
    }

    render() {
        return (
            <Container>
            <GlobalStyle/>
                <Typist avgTypingDelay={35} cursor={'blink: true;'}>
                Hi! My name is Karl and this is a brief web page <a onClick={(e) => this.setState({ aboutIsOpen: true })}>about me</a>. 
                I am an ambitious and enthused software developer offering knowledge in full stack development.
                My previous work experience includes mobile and web development. 
                I am seeking a position where I would have the opportunity to enhance my capabilities and work with talented people on exciting tech.
                
                </Typist>
                <About aboutIsOpen={this.state.aboutIsOpen} 
                    onClose={(e) => this.setState({ aboutIsOpen: false })}>
                    <br/>
                    <p>Name:</p> Karl Kallas <br/>
                    <p>Contact: <BlackLink href="mailto:karlkallas@gmail.com" target="_top">karlkallas@gmail.com</BlackLink></p><br/>
                    <p>Attributes:</p> ambitious, quick learner, conscientious, diligent, creative <br/>
                    <p>Current home:</p> Tallinn <br/>
                    <p>Education:</p> Bachelor of Science: Software Engineering — Expected in 2020 (Tal Tech)<br/><br/>
                    <p>Experience:</p> <BlackLink target="_blank" rel="noopener noreferrer" href="https://sidekik.ai/">Sidekik.ai</BlackLink> (Full Stack Developer - 2019)<br/><br/>
                    <p>Technologies:</p> Python, Java, c# (dot Net Core), React, MongoDB, FireBase, SQL, Adobe XD, xcode, Android Studio, Git, Ableton <br/><br/>
                    <p>Skills:</p> API design, Distributed Systems, Database Systems, CI/CD, Machine Learning Basics<br/><br/>
                    <p>Personal info:</p> I really love music, especially electronic music.
                    I collect vinyl, <BlackLink onClick={(e) => this.setState({ playerIsOpen: true })}>produce music</BlackLink> and DJ as well. I like to listen to podcasts and read books. I find doing sports and working out very meditative.
                    I've also been a volunteer producer for Estonia's internet radio called IDA Raadio.
                    <br/><br/>
                </About>
                <Work workIsOpen={this.state.workIsOpen} 
                    onClose={(e) => this.setState({ workIsOpen: false })}>
                    <br></br>
                    <p>Personal projects:</p> <br/>
                    <PinkLink target="_blank" rel="noopener noreferrer" href="https://github.com/karlkallas/MapMessage">◕ Map Message</PinkLink> <br/>
                    <PinkLink target="_blank" rel="noopener noreferrer" href="https://github.com/karlkallas/socketMessenger">◕ Socket Messenger</PinkLink> <br/>
                    <PinkLink target="_blank" rel="noopener noreferrer" href="https://github.com/karlkallas/minesweeper">◕ Minesweeper</PinkLink> <br/>
                    <PinkLink target="_blank" rel="noopener noreferrer" href="https://github.com/karlkallas/battleship">◕ Battlefield</PinkLink> <br/>
                    <PinkLink target="_blank" rel="noopener noreferrer" href="https://github.com/karlkallas/BrickGame">◕ Brick Game</PinkLink>  <br/>
                    <br/>
                </Work>
                <Player playerIsOpen={this.state.playerIsOpen} 
                    onClose={(e) => this.setState({ playerIsOpen: false })}>
                    <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/559381953&color=%23dc7aa4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                </Player>
            </Container>
        );
    }
}
