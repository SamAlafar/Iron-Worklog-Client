import styled from 'styled-components';

const SCRegisterEditItem = styled.form`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .details-wrapper {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .time-picker {
    width: 10px;
    height: 35px;
    padding-bottom: 10px;
  }

  .time-picker-end {
    width: 10px;
    height: 35px;
    padding-bottom: 10px;
  }
  .work-hour > p {
    margin-bottom: 30px;
    padding-left: 20px;
    padding-top: 15px;
    display: flex;
  }

  .break-hour > p {
    margin-bottom: 30px;
    margin-left: 40px;
    padding-left: 20px;
    padding-top: 15px;
    display: flex;
  }

  .start-style {
    background-color: #ffe66d;
    width: 270px;
    height: 50px;
    border-radius: 30px;
  }

  .end-style {
    background-color: #ff6b6b;
    width: 270px;
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
  }

  .btn-submit {
    font-size: 30px;
    background-color: #1a535c;
    width: 250px;
    height: 38px;
    border-radius: 10px;
    color: #ffe66d;
    margin-top: 30px;
  }
`;

export default SCRegisterEditItem;
