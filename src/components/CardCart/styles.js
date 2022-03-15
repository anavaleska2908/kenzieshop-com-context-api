import styled from 'styled-components';

export const Li = styled.li`
  display: flex;
  list-style-type: none;
  width: 100vw;
  max-width: 220px;
  margin-bottom: 1em;
  height: 7em;
  border-radius: 5px;
  background-color: var(--color-secondary-50);
  border: 1px solid var(--color-primary);
  justify-content: space-between;
  align-items: flex-start;
`;

export const ImgButton = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.3em;
  margin-top: 0.6em;
  margin-left: 0.7em;

  img {
    border-radius: 50%;
    width: 5.5em;
    border: 2px solid var(--color-primary);
    margin-right: -1.3em;
  }
`;

export const Context = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1.5em;
  margin-left: 1.4em;
  align-items: center;

  p {
    color: var(--color-primary);
    font-weight: bold;
    font-size: 0.8em;
    margin-top: 0.4em;
  }
`;

export const DivButton = styled.div`
  button {
    border-radius: 50%;
    margin-top: 0.5em;
    margin-right: 2px;

    svg {
      margin-top: 0.1em;
    }
  }
`;

export const Quantity = styled.div`
  padding: 0.2em 0.4em 0.2em 0.4em;
  margin-top: 5em;
  margin-left: 0.6em;
  border-radius: 5px;
  background-color: var(--color-primary);

  P {
    font-size: 0.7em;
    color: var(--grey-3);
  }
`;
