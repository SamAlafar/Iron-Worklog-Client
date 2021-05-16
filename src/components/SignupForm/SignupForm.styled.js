import styled from 'styled-components'

export const SCImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22vw;
  height: 22vh;
  object-fit: contain;
  padding-bottom: 51px;
`;

export const SCForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;

export const SCInput = styled.input`
  width: 35vw;
  height: 6vh;
  background-color: rgba(247, 255, 247, 0.5);
  border: 2px solid #f7fff7;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 2.2rem;
  ::placeholder {
    color: #1a535c;
    padding-left: 19px;
  }
`;

export const SCButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffe66d;
  color: #1a535c;
  border-radius: 30px;
  width: 19vw;
  height: 6vh;
  margin-top: 10px;
  font-size: 2.5rem;
  border: #ffe66d;
  filter: drop-shadow(0px 4px 4px rgba(26, 83, 92, 0.7));
  cursor: pointer;
    &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
`;