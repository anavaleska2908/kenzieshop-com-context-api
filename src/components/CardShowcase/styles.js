import styled from 'styled-components';

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style-type: none;
  border: 1px solid var(--color-secondary);
  width: 100vw;
  max-width: 180px;
  margin-bottom: 1em;
  border-radius: 5px;
  height: 15em;
  margin-right: 1em;
  scroll-snap-align: center;
  background-color: var(--color-secondary-50);
  margin-left: 0.6em;

  :hover {
    border: 1px solid var(--color-secondary-50);
  }

  @media (min-width: 768px) {
    scroll-snap-align: none;
    max-width: 170px;
  }
`;

export const ImgButton = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.5em;
  margin-top: 0.7em;
  margin-left: 0.7em;

  img {
    border-radius: 50%;
    width: 8em;
    border: 2px solid var(--color-primary);
    margin-right: -1.3em;
    margin-left: 0.4em;
  }

  button {
    border-radius: 50%;

    svg {
      margin-top: 0.1em;
    }
  }
`;

export const Category = styled.div`
  background-color: var(--details);
  padding-top: 0.1em;
  padding-bottom: 0.1em;
  padding-left: 1em;
  padding-right: 1em;
  box-shadow: 0px 0px 40px -20px rgba(0, 0, 0, 0.25);
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;

  p {
    margin-top: 0.1em;
    text-transform: uppercase;
    font-size: 0.8em;
    color: var(--grey-2);
    font-weight: bold;
  }
`;

export const Context = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 0.2em;
  margin-left: 0.4em;

  p {
    color: var(--color-primary);
    font-weight: bold;
    font-size: 0.8em;
    margin-top: 0.4em;
  }
`;
