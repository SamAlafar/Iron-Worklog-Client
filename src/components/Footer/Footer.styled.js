import styled from 'styled-components'

export const SCFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(235, 195, 64);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8vh;
  background: #f7fff7;
`;

export const SCFooterList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style-type: none;
  color: #1a535c;
  font-size: 2rem;
  position: absolute;
  li {
    padding-right: 50px;
  }
`;

export const SCFooterCopyright = styled.div`
  display: flex;
  padding-left: 80vw;
  color: #1a535c;
  font-size: 2rem;
`;