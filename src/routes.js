import {createAppContainer, createStackNavigator} from 'react-navigation';

import Header1 from './components/Headers/Header1';
import Header2 from './components/Headers/Header2';
import Header3 from './components/Headers/Header3';

import Main from './pages/Main';
import PageHeader1 from './pages/PageHeader1/index';
import PageHeader2 from './pages/PageHeader2/index';
import PageHeader3 from './pages/PageHeader3/index';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          header: null,
        },
      },
      Page1: {
        screen: PageHeader1,
        navigationOptions: Header1,
      },
      Page2: {
        screen: PageHeader2,
        navigationOptions: Header2,
      },
      Page3: {
        screen: PageHeader3,
        navigationOptions: Header3,
      },
    },
    {
      initialRouteName: 'Main',
    },
  ),
);

export default Routes;
