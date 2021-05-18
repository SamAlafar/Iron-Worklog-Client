import styled from 'styled-components';

const SCRegisterEditItem = styled.form`
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

  .standup-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
  }

  .standup-wrapper > textarea {
    text-align: left;
    margin-right: 20px;
    padding-top: 10px;
    border: 2px solid #f7fff7;
    width: 350px;
    height: 350px;
    background-color: rgba(247, 255, 247, 0.4);
    border-radius: 5px;
  }

  .standup-label {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: underline;
    margin-top: 20px;
  }

  .btn-submit {
    font-size: 30px;
    background-color: #1a535c;
    width: 250px;
    height: 38px;
    border-radius: 10px;
    color: #ffe66d;
    display: flex;
    align-ietms: center;
    justify-content: center;
    margin-left: 830px;
    margin-top: 30px;
  }

`;

export default SCRegisterEditItem;
