import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Autor from './Profile';
import Comentarios from './Comentarios';
import Publicacion from './Publicacion';





const StackHome = createStackNavigator({
  Home: {
    screen: Home,
  },
  Autor: {
    screen: Autor,
  },
  Publicacion: {
    screen: Publicacion,
  },
  Comentarios:{
    screen: Comentarios,
  }
});

//Ocultar navbar en comentarios > v2
StackHome .navigationOptions = ({ navigation }) => {
let { routeName } = navigation.state.routes[navigation.state.index];
let navigationOptions = {};
  if (routeName === 'Comentarios') {    navigationOptions.tabBarVisible = false;  }
  return navigationOptions;};


export { StackHome };
