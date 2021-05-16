import styled from 'styled-components'

const SCRegisters = styled.div`
padding: 4rem;

  h1 {
    font-size: 4rem;
    padding-bottom: 5rem;
  }

  .registers-wrapper {
      width: 60%;
      margin: 1.5rem;
  }

  .calendar {
    display: flex;
    align-items: center;

    .react-calendar {
      margin: 1rem 100rem;
      background-color: rgba(247, 255, 247, 0.5);
      border: 2px solid #f7fff7;
    }
  }
`;

export default SCRegisters;