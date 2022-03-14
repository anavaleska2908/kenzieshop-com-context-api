import styled from 'styled-components';

export const ButtonStyled = styled.button`
  padding: 0.6em 0.9em 0.6em 0.9em;
  border: none;
  background-color: var(--color-primary);
  color: #fff;
  outline: none;
  margin: -0.2em 1em 1em 1em;
  border-radius: 5px;
  font-size: 0.7em;
  font-weight: medium;
  cursor: pointer;
  max-width: 150px;

  :hover {
    background-color: var(--color-primary-50);
  }
`;
