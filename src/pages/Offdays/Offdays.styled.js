import styled from 'styled-components';

const SCOffdays = styled.div`
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

    .holidays-wrapper, .offdays-wrapper{
      width: 50%;
      margin: 1.5rem;
    }
  }
`;

export default SCOffdays;
