import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CameraScreen from '../Components/CameraScreen';
import IndexScreen from '../Components/IndexScreen';

const AppNavigator = createStackNavigator({
    Camera: CameraScreen,
  Home: IndexScreen ,
},{
    initialRouteName:"Home",
    defaultNavigationOptions:{
        header:null
    }
});

export default createAppContainer(AppNavigator);