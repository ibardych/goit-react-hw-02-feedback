import PropTypes from 'prop-types';
import { Item, List } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <List>
      <Item type="good">
        <span>Good:</span> {good}
      </Item>
      <Item type="neutral">
        <span>Nuetral:</span> {neutral}
      </Item>
      <Item type="bad" last="">
        <span>Bad:</span> {bad}
      </Item>
      <Item>
        <span>Total:</span> {total}
      </Item>
      <Item>
        <span>Positive feedback:</span> {positivePercentage}%
      </Item>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
