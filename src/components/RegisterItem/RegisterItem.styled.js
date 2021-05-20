import styled from 'styled-components'

const SCRegisterItem = styled.div`
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

  .registers-wrapper {
    display: flex;

    p {
      padding-right: 2.5rem;
    }

    .start{
      color: #ffe66d;
    }
    .end {
      color: #ff6b6b;
    }
  }

  .action-wrapper {
    display: flex;
    color: #f7fff7;

    a {
      padding: 0 1rem;
    }

    .fa-eye {
      color: #f7fff7;
    }

    .fa-edit {
      color: #ffe66d;
    }

    .fa-trash-alt {
      color: #ff6b6b;
    }
  }
`;

export default SCRegisterItem;