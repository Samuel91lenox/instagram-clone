import { createStackNavigator } from 'react-navigation';
import Publicacion from './Publicacion';
import Search from './Search';
import Autor from './Profile';
import Comentarios from './Comentarios';

const StackSearch = createStackNavigator({
  Search: {
    screen: Search,
  },
  Publicacion:{
    screen: Publicacion,
  },
  Comentarios:{
    screen: Comentarios,
  },
  Autor:{
    screen: Autor,
  },
});

//Ocultar navbar en comentarios > v2
StackSearch .navigationOptions = ({ navigation }) => {
let { routeName } = navigation.state.routes[navigation.state.index];
let navigationOptions = {};
  if (routeName === 'Comentarios') {    navigationOptions.tabBarVisible = false;  }
  return navigationOptions;};

export { StackSearch };
