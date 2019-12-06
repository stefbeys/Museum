import {Dimensions} from 'react-native';


const CONST={
    ScreenHeight : Dimensions.get("window").height+48,
    ScreenWidth : Dimensions.get("window").width,
    ENDPOINT: "http://192.168.0.176/api/",
    SCREENS:{
        TabScreen:"TabScreen",
        CameraScreen:"CameraScreen",
        InfoScreen:"InfoScreen"
    }
}
export default CONST;