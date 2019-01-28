import React, { Component } from 'react';

class App extends Component{
    constructor(){
        super();
        this.state = { displayBio: false};
        console.log('component this', this);

        this.toogleDisplayBio = this.toogleDisplayBio.bind(this);
    }

    toogleDisplayBio(){
        this.setState({ displayBio: !this.state.displayBio });
    }

    render(){

        return(
            <div>
                <h1>Hello</h1>
                <p>My Name is Jorge. I'm a software Engineer.</p>
                <p>I'm always looking forward to working on meaningful projects.</p>
                {
                    this.state.displayBio ? ( 
                        <div>
                            <p>I live in Tepic, and i code every day.</p>
                            <p>My favourite language right now is JavaScript, and i think React.js is awesome.</p>
                            <p>Besides coding, i love playing Age of Empires 2 at a professional level and watch tv series. </p>
                            <button onClick={this.toogleDisplayBio}>Show Less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toogleDisplayBio}>Read More</button>
                        </div>
                    )
                }
            </div>
        )
    }
} 

export default App;