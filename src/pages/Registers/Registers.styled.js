import styled from 'styled-components'

const SCRegisters = styled.div`
padding: 4rem;

.registers-container {
  display: flex;
}
  h1 {
    font-size: 4rem;
    padding-bottom: 5rem;
  }

  .registers-wrapper {
      width: 100%;
      margin: 1.5rem;
  }

  .calendar-wrapper {
    display: flex;

    .react-calendar {
      margin: 1rem 10rem;
      background-color: rgba(247, 255, 247, 0.5);
      border: 2px solid #f7fff7;
    }
  }

  .register-item{
    margin-bottom: 10px;
  }
`;

export default SCRegisters;