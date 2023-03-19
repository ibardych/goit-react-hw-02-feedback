import { PropTypes } from 'prop-types';
import { ButtonsList } from '../ButtonsList/ButtonsList.styled';
import { Button } from '../Button/Button.styled';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <ButtonsList>
      {Object.keys(options).map(item => (
        <Button key={item} type={item} onClick={() => onLeaveFeedback(item)}>
          {item}
        </Button>
      ))}
    </ButtonsList>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};

export default FeedbackOptions;
