import { Component } from 'react';
//styles
import './App.css';
//components
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';
import Container from './components/Container';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';

//file
const state = {
  good: 0,
  neutral: 0,
  bad: 0,
};
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    console.log('state', state);
    return (
      <div className="App">
        <Container>
          <Section title="Feedback:">
            <FeedbackOptions
            // options={options}
            // onLeaveFeedback={onLeaveFeedback}
            />
          </Section>

          {<Notification message="No feedback given"></Notification> || (
            <Section title="Feedback:">
              <Statistics
              // good={good}
              // neutral={neutral}
              // bad={bad}
              // total={total}
              // positivePercentage={positivePercentage}
              />
            </Section>
          )}
        </Container>
      </div>
    );
  }
}

export default App;
