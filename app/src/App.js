import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import News from './components/News';

const About = (props) => {
  return (
    <article className="container">
      <p> 
        This is a basic Component utilizing properties!
        <br/>
        <br/>
        Made by: {props.name}
      </p>
    </article>
  );
}

class App extends Component {

  render() {
    return (
      <div>
        <header className="container">
          <Header />
        </header>

        <section>
          <News />
        </section>

        <section>
          <About name="Thomas" />
        </section>
      </div>
    );
  }

}

export default App