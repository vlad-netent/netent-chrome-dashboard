import styled from 'styled-components';
import { colors } from '../../constants/colors';

const envs = {
  STA: colors.orange,
  STB: colors.yellow,
  DEV: colors.pink,
};

export const App = styled.div`
  background-color: ${colors.secondary};
  height: 100vh;
  width: 100vw;
  padding: 50px;
  box-sizing: border-box;
`;

export const Header = styled.div`
  margin-bottom: 50px;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Tile = styled.div`
  position: relative;
  background-image: linear-gradient(
    135deg,
    ${colors.primary},
    ${colors.green_1}
  );
  width: 300px;
  height: 180px;
  background-color: #ccc;
  margin: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 3px 40px 20px rgba(#222, 0.8);
  }
`;

export const Env = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1rem;
  font-weight: bold;
  background: ${(props) => envs[props.env]};
  padding: 5px 10px;
  border-radius: 10px;
`;

export const Logo = styled.img`
  width: 200px;
`;

export const User = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${colors.primary};
  border-radius: 50%;
`;
