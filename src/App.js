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

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClick = e => {
    const value = e.target.textContent;
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce(
      (acc, item) => acc + item,
      0,
    );
    return total;
  };

  render() {
    const state = this.state;
    const total = Object.values(state).reduce((acc, item) => acc + item, 0);
    const positivePercentage = Math.round(Number((state.good / total) * 100));

    return (
      <div className="App">
        <Container>
          <Section title="Feedback:">
            <FeedbackOptions
              options={state}
              handleClick={this.handleClick}
              // onLeaveFeedback={onLeaveFeedback}
            />
          </Section>

          {total <= 0 ? (
            <Notification message="No feedback given"></Notification>
          ) : (
            <Section title="Statistics">
              <Statistics
                options={state}
                total={total}
                positivePercentage={positivePercentage}
              />
            </Section>
          )}
        </Container>
      </div>
    );
  }
}

export default App;
