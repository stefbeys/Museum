import {StyleSheet} from 'react-native';
import CONSTS from './Constants';
const Stylesheet= StyleSheet.create({
    c_background:{
        height: CONSTS.ScreenHeight,
        width: CONSTS.ScreenWidth,
        position: 'absolute'
    },
    js_animate_bird_1:{
        position: 'absolute',
        left: -60,
        top: CONSTS.ScreenHeight - 100,
        height: 60,
        width: 60,
  
      },
      js_animate_bird_2:{
        position: 'absolute',
        height: 50,
        width: 50,
        left: CONSTS.ScreenWidth + 75,
        top: CONSTS.ScreenHeight - 300,
      },
      js_animate_bird_3:{
        position: 'absolute',
        height: 50,
        width: 50,
        left: -50,
        top: CONSTS.ScreenHeight/2
      },
      js_animate_bird_4:{
        position: 'absolute',
        height: 50,
        width: 50,
        left: CONSTS.ScreenWidth + 50,
        top: +350
      },
      js_animate_bird_5:{
        position: 'absolute',
        height: 50,
        width: 50,
        left: CONSTS.ScreenWidth + 50,
        top: CONSTS.ScreenHeight - 250
      },
});
export default Stylesheet;
