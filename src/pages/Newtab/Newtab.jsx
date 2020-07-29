import React from 'react';
import { tiles } from './tiles';
import {
  App,
  Header,
  TopBar,
  User,
  Container,
  Tile,
  Logo,
  Env,
} from './styles';

const Newtab = () => {
  return (
    <App>
      <Header>
        <TopBar>
          <Logo
            src="https://www.netent.com/en/wp-content/themes/netent_corp/assets/img/logotype/netent-logotype.svg"
            alt="logo"
          />
          <User />
        </TopBar>
      </Header>
      <Container>
        {tiles.map((tile, i) => {
          return (
            <Tile key={i}>
              <Env env={tile.env}>{tile.env}</Env>
              <p>{tile.title}</p>
            </Tile>
          );
        })}
      </Container>
    </App>
  );
};

export default Newtab;
