import styled from 'styled-components';

const SCJourneyCreateForm = styled.div`
  .button-actions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .btn-submit {
    color: #1a535c;
    background-color: #ffe66d;
    font-size: 2.5rem;
    width: 250px;
    height: 38px;
    border-radius: 30px;
    text-align: center;
    margin: 5px;

    &.end-button {
      color: #ffe66d;
      background-color: #1a535c;
    }

    &:disabled {
      background-color: rgba(247, 255, 247, 0.4);
      color: grey;
      cursor: not-allowed;
    }
  }

  form {
    padding: 30px 0; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;   
    
    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    
      label {
        font-size: 2rem;
        padding-bottom: 1rem;
        text-decoration: underline;
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
`;

export default SCJourneyCreateForm;
