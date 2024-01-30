import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #111315;
  color: #fff;
  width: 100vw;
  height: 100vh;
  img {
    width: 180px;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #1b1d1f;
  padding: 4rem 5rem;
  max-width: 776px;
  border-radius: 20px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 2rem;
  height: 180px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.8px;
`;

export const paragraph = styled.p`
  font-size: 1.2rem;
  font-weight: lighter;
  opacity: 0.5;
  letter-spacing: 1px;
`;

export const ButtonsFlex = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 1rem;

  button {
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
    background-color: #111315;
    color: #fff;
    transition: all 0.3s;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 1px;

    &:hover {
      background-color: #6f757c;
    }
  }
`;

export const ContainerProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 16px;
`;

export const Products = styled.div``;

export const CoffeeContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  p {
    font-size: 14px;
    font-weight: lighter;
    letter-spacing: 1;
  }

  span {
    font-size: 14px;
    font-weight: lighter;
    color: black;
    background-color: aquamarine;
    border-radius: 5px;
    font-weight: bold;
    padding: 5px;
  }
`;

export const CoffeeNotes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  button {
    background-color: transparent;
    outline: none;
    border: none;
  }
`;

export const Notes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;

  p {
    color: red;
  }
`;
