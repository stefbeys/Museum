import { StyleSheet } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import CONSTS from "./Constants";
const Stylesheet = StyleSheet.create({
  //#region animations
  js_animate_bird_1: {
    position: "absolute",
    left: -60,
    top: CONSTS.ScreenHeight - 100,
    height: 60,
    width: 60
  },
  js_animate_bird_2: {
    position: "absolute",
    height: 50,
    width: 50,
    left: CONSTS.ScreenWidth + 75,
    top: CONSTS.ScreenHeight - 300
  },
  js_animate_bird_3: {
    position: "absolute",
    height: 50,
    width: 50,
    left: -50,
    top: CONSTS.ScreenHeight / 2
  },
  js_animate_bird_4: {
    position: "absolute",
    height: 50,
    width: 50,
    left: CONSTS.ScreenWidth + 50,
    top: +350
  },
  js_animate_bird_5: {
    position: "absolute",
    height: 50,
    width: 50,
    left: CONSTS.ScreenWidth + 50,
    top: CONSTS.ScreenHeight - 250
  },
  //#endregion
  //#region components
  c_background: {
    height: CONSTS.ScreenHeight + 48,
    width: CONSTS.ScreenWidth,
    position: "absolute"
  },
  c_index__container: {
    height: 100
  },
  c_index: {
    margin: 24,
    marginTop: 8,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  c_points_container: {
    margin:24,
    marginTop: 48
  },
  c_index__picture: {
    height: 88,
    width: 88,
    marginRight: 24,
    borderRadius: 500
  },

  c_index__picture_selected: {
    height: 124,
    width: 124,
    marginRight: 24,
    borderRadius: 500
  },
  c_index_data__name: {
    fontSize: responsiveFontSize(3),
    color: "white"
  },
  c_fab: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  c_tabs:{
    backgroundColor: "#405F7E",
    borderTopWidth: 0,
    height: 60
  },
  c_flatlist:{
    marginBottom:"20%"
  },
  c_points_amount: {
    fontSize: responsiveFontSize(6),
    color: "white"
  },

  c_points_pts: {
    color: "white",
    fontSize: responsiveFontSize(2.5)
  },

  c_store__picture: {
    height: 150,
    resizeMode: "contain",
    width: "100%",
    marginRight: 24
  },

  c_store_data__name: {
    fontSize: responsiveFontSize(2.5),
    color: "white",
    width: "100%"
  },
  c_index_data__points: {
    fontSize: responsiveFontSize(2),
    flex: 1,
    color: "white",
    width: "100%",
  },

  c_index__button__claimed: {
    marginTop: 8,
    width: "100%",
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff77",
    borderRadius: 5
  },

  c_index__button_text__claimed: {
    color: "#405F7E"
  },
  c_index__button__unclaimed: {
    backgroundColor: "white"
  },
  c_scanningImage_image: {
    margin: 24,
    zIndex: 12,
    width: CONSTS.ScreenWidth - 48,
    resizeMode: "contain"
  },
  c_scanningImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 11
  },
  c_touchable: {
    width: CONSTS.ScreenWidth,
    height: CONSTS.ScreenHeight + 48,
    zIndex: 10
  },
  c_touchableView: {
    zIndex: 6,
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  c_close: {
    zIndex: 7,
    position: "absolute",
    top: 64,
    left: 32
  },

  c_scanner: {
    width: "100%",
    height: 3,
    backgroundColor: "white",
    position: "absolute",
    zIndex: 7,
    shadowColor: "#000000",
    shadowOffset: {
      width: 10,
      height: 50
    },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 13
  },
  c_scanner__button: {
    zIndex: 6,
    justifyContent: "center",
    alignItems: "center"
  },
  c_scanner__container: {
    bottom: "10%",
    zIndex: 6,
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },

  c_scanner__button_container: {
    width: 100,
    height: 100,
    zIndex: 7
  },
  //#endregion
  

  c_container:{
    position: 'absolute',
    justifyContent: 'center',
    alignItems:'center',
    width: '100%',
    height: '100%',
    top: CONSTS.ScreenHeight/2.5,
    zIndex: 8,
    
},
c_point_image:{
    marginLeft:45, 
    height: 250, 
    width: 250
},
c_companionPoints_overall_container:{
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 15,
    marginTop: 12
},

c_companionPoints_container:{
    margin:24,        
    height: CONSTS.ScreenWidth/1.3,
    width: CONSTS.ScreenWidth/1.4,
    top: 0,
},
c_companionPoints_1:{
    fontSize: responsiveFontSize(3.5),
    marginBottom: 24,
    marginTop: 24
},
c_companionPoints_2_1:{
    fontSize: responsiveFontSize(5),
},
c_companionPoints_2_2:{
    fontSize: responsiveFontSize(1.5),
},



  //#region utilities
  u_status_margin: {
    marginTop: 48
  },
  u_flex: {
    flex: 1
  }
  //#endregion
});
export default Stylesheet;
