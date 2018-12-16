import { createStackNavigator } from 'react-navigation';
import { TabFollow } from './TabFollow';
import Autor from './Profile';
import Publicacion from './Publicacion';
import Comentarios from './Comentarios';

const StackFollow = createStackNavigator({
  TabFollow:{
    screen: TabFollow,
    navigationOptions:{
      header: null,
    }
  },
  Autor:{
    screen: Autor,
  },
  Publicacion:{
    screen: Publicacion,
  },
  Comentarios:{
    screen: Comentarios,
  },
});

//Ocultar navbar en comentarios > v2
StackFollow .navigationOptions = ({ navigation }) => {
let { routeName } = navigation.state.routes[navigation.state.index];
let navigationOptions = {};
  if (routeName === 'Comentarios') {    navigationOptions.tabBarVisible = false;  }
  return navigationOptions;};

export { StackFollow };
