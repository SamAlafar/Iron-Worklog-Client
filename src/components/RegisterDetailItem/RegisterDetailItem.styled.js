import styled from 'styled-components';

const SCRegisterDetailItem = styled.div`
  font-size: 2rem;
  .details-wrapper {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .work-hour > p {
    margin-bottom: 30px;
    padding-top: 15px;
  }

  .break-hour > p {
    margin-bottom: 30px;
    margin-left: 40px;
    padding-top: 15px;
  }

  .worked-hours > p {
    margin-bottom: 30px;
    margin-left: 40px;
    padding-top: 15px;
  }

  .start-style {
    background-color: #ffe66d;
    width: 190px;
    height: 50px;
    border-radius: 30px;
  }

  .end-style {
    background-color: #ff6b6b;
    width: 190px;
    height: 50px;
    border-radius: 30px;
  }

  .worked-style,
  .extra-style {
    background-color: #ffe66d;
    width: 190px;
    height: 50px;
    border-radius: 30px;
  }

  .standup-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
    label {
      display: flex;
      flex-direction: column;
      text-decoration: underline;
      text-align: center;
      padding-bottom: 10px;
      
    }
    p {
    margin-right: 20px;
    padding-top: 10px;
    border: 2px solid #f7fff7;
    width: 350px;
    height: 350px;
    background-color: rgba(247, 255, 247, 0.4);
    border-radius: 5px;
  }
        textarea {
      text-align: left;
      margin-right: 20px;
      padding-top: 10px;
      border: 2px solid #f7fff7;
      width: 350px;
      height: 150px;
      background-color: rgba(247, 255, 247, 0.4);
      border-radius: 5px;
      margin-bottom: 5px;
  }
`;

export default SCRegisterDetailItem;
