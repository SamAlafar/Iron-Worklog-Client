import styled from 'styled-components';

const SCAddOffdayForm = styled.form`
  color: #1A535C;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .form-item {
    display: flex;
    flex-direction: column;
    padding: 1.5rem 3rem;
    text-align: center;

    label {
      font-size: 1.75rem;
      font-weight: 600;
    }

    select {
      width: 15rem;
      padding: 1rem;
      margin-top: 1rem;
      background-color: rgba(247, 255, 247, 0.5);
      border: 2px solid #F7FFF7;
      border-radius: 5px;
    }
  }

  .calendar-wrapper {
    display: flex;

    .react-calendar {
      margin: 1rem 4rem;
      background-color: rgba(247, 255, 247, 0.5);
      border: 2px solid #F7FFF7;
    }
  }

  .btn-submit{
    background-color: #FFE66D;
    color:#1A535C;
    border-radius: 30px;
    width: 15rem;
    height: 3rem;
    font-size: 1.8rem;
    filter: drop-shadow(0px 4px 4px rgba(26, 83, 92, 0.7));
    cursor: pointer;
  }

  @media only screen and (max-width: 900px){
    .calendar-wrapper{
      display: block;
    }
  }
`;

export default SCAddOffdayForm;
