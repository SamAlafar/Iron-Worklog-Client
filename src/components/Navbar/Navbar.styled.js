import styled from 'styled-components';

const SCNavbar = styled.nav`
  background: linear-gradient(180deg, #1a535c 0%, #4ecdc4 100%), #f7fff7;
  height: 70px;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 0.2rem calc((100vw - 1000px) / 2);
  color: #ffe66d;

  img {
    width: 200px;
  }

  .nav-menu {
    display: flex;
    align-items: center;
    a {
      color: #ffe66d;
      font-size: 2rem;
      text-decoration: none;
      padding: 3rem;
      height: 100%;
      cursor: pointer;
      &:hover {
        color: #f7fff7;
      }
      &.active {
        color: #ff6b6b;
      }
    }
    p {
      font-size: 2.4rem;
      padding: 3rem;
    }

    .user-menu {
      display: flex;
      flex-direction: column;
      background-color: #4ecdc4;
      position: absolute;
      top: 70px;
      right: 30px;
      a:hover {
        background-color: #1a535c;
      }
    }
  }
`;

export default SCNavbar;