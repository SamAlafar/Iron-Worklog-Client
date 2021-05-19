import styled from 'styled-components';

const SCUserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  font-size: 1.8rem;

  .user-info {
    display: flex;

    div {
      padding: 2rem;
    }

    p {
      background-color: #1a535c;
      width: 22vw;
      height: 5vh;
      border-radius: 1rem;
      color: #f7fff7;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding-top: 1.2vh;
      margin-top: 1.2vh;
      margin-bottom: 2.5vh;
      margin-right: 5vw;;
    }
  }

  label{
  }

  img {
    width: 13vw;
    height: 13vw;
    border-radius: 50%;
    object-fit: fill;
  }
`;

export default SCUserInfo;
