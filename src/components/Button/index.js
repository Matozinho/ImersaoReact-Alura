import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  padding: 7px;
  border-radius: 10px;
  border-style: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  transition: 0.5s;

  cursor: pointer;

  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  justify-content: center;
  color: white;
  
  &:hover,
  &:focus {
    opacity: .5;
  }

  &:disabled{
    background-color: #303138;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
