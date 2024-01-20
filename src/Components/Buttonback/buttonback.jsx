
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

function BackButton() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <StyledButton onClick={goBack}>
      Go Back
    </StyledButton>
  );
}

export default BackButton;