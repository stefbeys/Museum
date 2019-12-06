import {Dimensions} from 'react-native';
const CONST={
    ScreenHeight : Dimensions.get("window").height+48,
    ScreenWidth : Dimensions.get("window").width,
    ENDPOINT: "http://192.168.0.176/api/",
    SCREENS:{
        TabScreen:"TabScreen",
        CameraScreen:"CameraScreen",
        InfoScreen:"InfoScreen"
    },
    dataList : [
        {
          img: "pack1",
          name: "Proud Duck, Proud Duck V2, Kvaak Duck",
          pack: 1,
          claimed: false,
          price: 400
        },
        {
          img: "pack2",
          name: "Hugging Ducks, Sleeping Duck, LOL Duck",
          claimed: false,
          pack: 2,
          price: 400
        },
        {
          img: "pack3",
          name: "Moikka Duck, Moikkelis Duck, Laughing Duck",
          claimed: false,
          pack: 3,
          price: 800
        }
      ],
}
export default CONST;