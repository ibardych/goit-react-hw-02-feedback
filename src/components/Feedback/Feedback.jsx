import { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import { ButtonsList } from '../ButtonsList/ButtonsList.styled';
import { Button } from '../Button/Button.styled';
import { FeedbackContainer } from './Feedback.styled';

const FEEDBACK_OPTIONS = {
  good: 'Good',
  neutral: 'Neutral',
  bad: 'Bad',
};

const defaultState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

class Feedback extends Component {
  state = { ...defaultState };

  leaveFeedback = item => {
    this.setState(prevState => ({ ...prevState, [item]: prevState[item] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.keys(FEEDBACK_OPTIONS).reduce(
      (total, option) => (total += this.state[option]),
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();

    return total !== 0 ? Math.ceil((100 * this.state.good) / total) : 0;
  };

  clearFeedback = () => {
    this.setState({ ...defaultState });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <FeedbackContainer>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={FEEDBACK_OPTIONS}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback yet"></Notification>
          )}
        </Section>

        {total !== 0 && (
          <Section>
            <ButtonsList>
              <Button type="default" onClick={this.clearFeedback}>
                Clear feedback
              </Button>
            </ButtonsList>
          </Section>
        )}
      </FeedbackContainer>
    );
  }
}

export default Feedback;
