import styled from 'styled-components';

const SCHome = styled.div`
    margin: 30px;
    color: #1a535c;

    h1 {
      font-size: 3rem;
      padding-bottom: 2rem;
    }
    h2 {
      font-size: 2.5rem;
    }

    section {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      padding-bottom: 20px;

      img {
        height: 350px;
        box-shadow: 1px 1px 20px 2px #1a535c;
      }
    }
    .home-logo {
      width: 50%;
    }
    .home-button-container {
      text-align: center;

      .button-action {
        width: 280px;
        height: 51px;
        background-color: #ffe66d;
        color: #1a535c;
        font-weight: 600;
        font-size: 24px;
        border: none;
        border-radius: 30px;
        filter: drop-shadow(0px 4px 4px rgba(26, 83, 92, 0.7));

        &:hover {
          background-color: #fff1ad;
        }
      }

      button {
        margin: 20px;
      }
    }

  @media only screen and (max-width: 767px) {
    section {
      display: block;
      text-align: center;

      img {
        height: 60%;
      }

      .home-button-container {
        margin-top: 80px;
      }
    }
  }
`;

export default SCHome;
