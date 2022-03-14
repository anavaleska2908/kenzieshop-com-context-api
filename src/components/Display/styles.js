import styled from 'styled-components';

export const Container = styled.ul`
  max-width: 90%;
  padding: 0;
  margin-left: 1.2em;
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  @media (min-width: 768px) {
    overflow-x: inherit;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-left: 2em;
  }
`;
