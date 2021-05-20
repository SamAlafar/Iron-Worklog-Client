import styled from 'styled-components';

const SCOffdayItem = styled.div`
  font-size: 2rem;
  color: #f7fff7;
  width: 100%;
  height: 4rem;
  padding: 2rem;
  border-radius: 5px;
  background-color: #1a535c;
  opacity: 0.75;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .days-wrapper {
    display: flex;

    p {
      padding-right: 2.5rem;
    }
  }

  .action-wrapper {
    color: #f7fff7;

    a {
      padding: 0 1rem;
    }

    .fa-edit {
      color: #FFE66D
    }

    .fa-trash-alt{
      color: #FF6B6B
    }
  }
`;

export default SCOffdayItem;
