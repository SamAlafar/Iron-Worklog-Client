import styled from 'styled-components'

export const SCButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffe66d;
  color: #1a535c;
  border-radius: 30px;
  width: 19vw;
  height: 6vh;
  font-size: 2.5rem;
  border: #ffe66d;
  filter: drop-shadow(0px 4px 4px rgba(26, 83, 92, 0.7));
  margin: 0 auto;
  margin-top: 20px;
  padding-left: 10px;
  cursor: pointer;
      &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
`;

export const SCImage = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2vw;
  height: 4vh;
  object-fit: contain;
  padding-bottom: 0px;
`;
