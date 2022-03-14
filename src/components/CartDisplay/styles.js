import styled from 'styled-components';

export const Container = styled.div`
  max-width: 250px;
  width: 100vw;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: var(--color-primary);
  border: 1px solid var(--color-primary);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  div {
    h4 {
      font-size: 1.5em;
      color: var(--grey-3);
      height: 2em;
      margin-top: 0.5em;
    }
  }
`;

export const Content = styled.ul`
  max-width: 250px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
`;

export const EmptyCart = styled.div`
  background-color: var(--grey-3);
`;

export const Total = styled.div`
  color: var(--color-primary);
  margin-bottom: 1em;
  margin-top: 1em;

  p {
    font-weight: bold;
  }
`;

export const CartText = styled.div`
  margin-top: 1em;

  p {
    margin-bottom: 1em;
  }
`;
