import styled from 'styled-components';

const SCOffdaysEdit = styled.div`
  padding: 4rem;

  h1 {
    font-size: 4rem;
  }

  .add-wrapper{
    text-align: right;
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

  .lists-wrapper {
    display:flex;
    justify-content: space-between;
    text-align: center;

    h2 {
      font-size: 1.8rem;
      padding: 5px;
    }

    .offdays-counter{
      font-size: 1.5rem;
      padding: 5px;
    }

    .holidays-wrapper, .offdays-wrapper{
      width: 50%;
      margin: 1.5rem;

      .list-header{
        background-color: #F7FFF7;
        border-radius: 5px;
      }

      .offday-item{
        margin-bottom: 10px;
      }
    }
  }
`;

export default SCOffdaysEdit;
