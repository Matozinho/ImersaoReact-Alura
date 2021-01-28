import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
  display: flex;
  width: 100%;
  padding: 10px;
  margin: 20px 0;
  border-radius: 10px;
  border-style: none;
  background-color: #303138;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  &:focus{
    outline: none;
  }
  color: white;
`;

// eslint-disable-next-line react/prop-types
export default function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputBase
        onChange={onChange}
        placeholder={placeholder}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
}

Input.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  value: PropTypes.string.isRequired,
};
