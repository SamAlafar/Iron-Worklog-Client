import styled from 'styled-components';

const SCEditProfileForm = styled.form`
  font-size: 1.8rem;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    padding-left: 5px;
    font-size: 1.5rem;
    margin-bottom: 5px;
    margin-top: 10px;
    background-color: rgba(247, 255, 247, 0.5);
    border: 2px solid #f7fff7;
    border-radius: 5px;
    margin-bottom: 10px;
    ::placeholder {
      color: #1a535c;
      padding-left: 20px;
    }
  }
  .picture-wrapper {
    padding-top: 20px;
  }

  .calendar-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    .react-calendar {
      margin: 1rem 4rem;
      background-color: rgba(247, 255, 247, 0.5);
      border: 2px solid #f7fff7;
    }
    label {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  .save-button > button {
    font-size: 20px;
    background-color: #1a535c;
    width: 250px;
    height: 38px;
    border-radius: 10px;
    color: #ffe66d;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }

  label{
      margin-left: 30px;
  }
`;

export default SCEditProfileForm;
