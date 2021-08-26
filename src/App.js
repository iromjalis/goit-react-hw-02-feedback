import { Component } from 'react';
import './App.css';
import Container from './components/Container';
import FeedbackOptions from './components/FeedbackOptions';
// import Statistics from './components/Statistics';

//file
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container title="Feedback:">
            {Object.keys(this.state).map((item, i) => (
              // <button key={i}>{item} </button>
              <FeedbackOptions key={i} item={item} />
            ))}

            {/* <Statistics /> */}
            <ul>
              {Object.entries(this.state).map((item, i) => (
                <li key={i}>
                  {item[0]}: {item[1]}
                </li>
              ))}
            </ul>
          </Container>
          {/* <Statistics good={} neutral={} bad={} total={} positivePercentage={}></Statistics> */}

          {/* <Notification message="No feedback given"></Notification> */}
        </header>
      </div>
    );
  }
}

export default App;
