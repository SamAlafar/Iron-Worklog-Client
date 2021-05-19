import styled from 'styled-components';

const SCDashboard = styled.div`
  .top-section {
    display: flex;
    justify-content: space-evenly;
    padding: 30px;

    .add-register-container{

    }

    .calendar-wrapper {
  
      .react-calendar {
        margin: 1rem 10rem;
        background-color: rgba(247, 255, 247, 0.5);
        border: 2px solid #f7fff7;
      }
    }
  }
  .lists-wrapper {
    display: flex;
    justify-content: space-evenly;
    text-align: center;

    h2 {
      font-size: 1.8rem;
      padding: 5px;
    }

    .offdays-counter, .registers-counter{
      font-size: 1.5rem;
      padding: 5px;
    }

    .registers-wrapper, .offdays-wrapper{
      margin: 1.5rem;

      .list-header{
        background-color: #F7FFF7;
        border-radius: 5px;
      }

      .offday-item, .register-item{
        margin-bottom: 10px;
      }
    }
  }
`;

export default SCDashboard;
