import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export const DivHeader = styled.div`
  display: flex;
`;

export const DisplayCart = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    align-content: space-between;
  }
`;

export const DivCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-right: 4em;
`;
