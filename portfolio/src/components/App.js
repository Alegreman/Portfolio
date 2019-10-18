import React, { Component } from 'react';
import Projects from './Projects';
import Links from './Links';
import Title from './Title';
import About from './About';

class App extends Component {
  state = { displayBio: false };

  toogleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };
  render() {
    return (
      <div>
        <div className='presentation'>
          <h1>Hello</h1>
          <p>My Name is Jorge.</p>
          <Title />
          <p>I'm always looking forward to working on meaningful projects.</p>
          {this.state.displayBio ? (
            <div className='presentation'>
              <p>I live in Tepic, and i code almostevery day.</p>
              <p>
                My favourite language right now is JavaScript, and i think
                React.js is awesome.
              </p>
              <p>
                Besides coding, i love playing Age of Empires 2 at a
                professional level and watch tv series.{' '}
              </p>
              <button onClick={this.toogleDisplayBio}>Show Less</button>
            </div>
          ) : (
            <div>
              <button onClick={this.toogleDisplayBio}>Read More</button>
            </div>
          )}
        </div>
        <About />
        <Projects />
        <Links />
      </div>
    );
  }
}

export default App;
