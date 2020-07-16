import styled from 'styled-components';

export const ULList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const LIList = styled.li`
  width: 200px;
  height: auto;
  cursor: pointer;
  animation: all 0.3s ease-in-out;
  margin: 8px;
  list-style: none;
  border: 2px solid grey;
`;

export const ImagePopContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: black;
  opacity: 0.9;
`;

export const Author = styled.div`
  color: #464646;
  margin-bottom: 10px;
`;

export const Tags = styled.div`
  color: #464646;
`;
