import { createGlobalStyle } from 'styled-components';
import { Switch, withRouter } from 'react-router-dom';
import { MainRoutes } from './navigation/Routes';
import CustomPropsRoute from './navigation/RenderPath';
import Store from 'utils/store';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: monospace;
    width: 100vW;
    margin: auto;
    background: whitesmoke;
    position: fixed;
    top: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    box-shadow: 0 4px 5px -2px $primary;
  }
`;

const App = () => (
  <Store>
    <GlobalStyle />
    <Switch>
      {MainRoutes.map((route, key) => (
        <CustomPropsRoute {...route} key={key} />
      ))}
    </Switch>
  </Store>
);

export default withRouter(App);
