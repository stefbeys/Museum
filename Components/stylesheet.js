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
    height: CONSTS.ScreenHeight,
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
    margin: 24,
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
    height: "100%"
  },
  c_tabs: {
    backgroundColor: "#405F7E",
    borderTopWidth: 0,
    height: 60
  },
  c_flatlist: {
    marginBottom: "20%"
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
    width: "100%"
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
    height: CONSTS.ScreenHeight,
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
  c_container: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    top: CONSTS.ScreenHeight / 2.5,
    zIndex: 8
  },
  c_point_image: {
    marginLeft: 45,
    height: 250,
    width: 250
  },
  c_companionPoints_overall_container: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 12
  },
  c_companionPoints_container: {
    margin: 24,
    height: CONSTS.ScreenWidth / 1.4,
    width: CONSTS.ScreenWidth / 1.4,
    top: 0
  },
  c_companionPoints_1: {
    fontSize: responsiveFontSize(3.5),
    marginBottom: 24
  },
  c_companionPoints_2_1: {
    fontSize: responsiveFontSize(5)
  },
  c_companionPoints_2_2: {
    fontSize: responsiveFontSize(1.5)
  },
  c_shortInfo__touchable: {
    width: CONSTS.ScreenWidth,
    height: CONSTS.ScreenHeight,
    zIndex: 10,
    backgroundColor: "white"
  },
  c_shortInfo__img: {
    margin: 24,
    height: CONSTS.ScreenWidth / 2,
    width: CONSTS.ScreenWidth / 2,
    top: 0,
    backgroundColor: "white",
    borderRadius: 15
  },
  c_shortInfo: {
    height: CONSTS.ScreenWidth / 1.4,
    width: CONSTS.ScreenWidth / 1.4,
    top: 0,
    marginTop: 0,
    top: -150
  },
  c_shortInfo__title: {
    fontSize: responsiveFontSize(3),
    marginLeft: 24,
    marginRight: 24
  },
  c_shortInfo__name: {
    fontSize: responsiveFontSize(3.5),
    marginLeft: 24,
    marginBottom: 12,
    marginRight: 24
  },
  c_shortInfo__data: {
    fontSize: responsiveFontSize(1.7),
    marginBottom: 8,
    marginLeft: 24,
    marginRight: 24
  },
  c_shortInfo__data_1: {
    fontSize: responsiveFontSize(1.7),
    marginLeft: 24,
    marginRight: 24
  },
  c_shortInfo__data_last: {
    fontSize: responsiveFontSize(1.7),
    marginLeft: 24,
    marginBottom: 24,
    marginRight: 24
  },
  c_companion_touch: {
    position: "absolute",
    height: CONSTS.ScreenHeight,
    width: CONSTS.ScreenWidth,
    zIndex: 5
  },
  c_companion_upper_cover: {
    width: CONSTS.ScreenWidth,
    height: 35,
    position: "absolute",
    backgroundColor: "#000000B3"
  },

  c_companion_container: {
    width: CONSTS.ScreenWidth,
    height: CONSTS.ScreenHeight,
    position: "absolute",
    zIndex: 4
  },

  c_companion__cover: {
    width: CONSTS.ScreenWidth,
    height: CONSTS.ScreenHeight - 200,
    position: "absolute",
    backgroundColor: "#000000B3",
    bottom: 0
  },

  c_companionContainer: {
    backgroundColor: "white",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    position: "absolute",
    width: "100%",
    height: 235,
    bottom: -50,
    flex: 1,
    flexDirection: "row",
    display: "none"
  },

  c_companion: {
    margin: 12,
    marginTop: 24,
    height: 140,
    width: 140,
    resizeMode: "contain"
  },

  c_companion__text_container: {
    marginTop: 24,
    marginLeft: 12,
    width: "50%"
  },

  c_companion__title: {
    fontSize: responsiveFontSize(3.5)
  },

  c_companion__text: {
    fontSize: responsiveFontSize(2),
    marginBottom: 12
  },
  contentContainer: {
    flex: 1
  },

  c_infoScreen_image: {
    width: "100%",
    height: CONSTS.ScreenWidth
  },
  c_infoScreen__name: {
    color: "white",
    marginBottom: 12,
    fontSize: responsiveFontSize(4)
  },
  c_infoScreen__title: {
    color: "white",
    marginTop: 12,
    fontSize: responsiveFontSize(2.7)
  },
  c_infoScreen__appearance: {
    color: "white",
    fontSize: responsiveFontSize(1.8)
  },
  c_infoScreen__diet: {
    color: "white",
    fontSize: responsiveFontSize(1.8)
  },
  c_infoScreen__behaviour: {
    color: "white",
    fontSize: responsiveFontSize(1.8)
  },
  c_infoScreen__endangerment: {
    color: "white",
    fontSize: responsiveFontSize(1.8)
  },
  c_infoScreen__container: {
    margin: 24,
    marginTop: 124
  },

  c_infoScreen__name_container: {
    justifyContent: "center",
    alignItems: "center"
  },

  c_close: {
    zIndex: 2,
    position: "absolute",
    top: 64,
    left: 32
  },
  c_fab_container: {
    zIndex: 100,
    width: 50,
    height: 50,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    position: "absolute",
    right: 25,
    bottom: 25
  },
  c_fab: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 10,
    borderRadius: 50,
    borderWidth: 0,
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#87AAD2"
  },
  c_fab__icon: {
    resizeMode: "contain",
    width: 30,
    marginRight: 2
  },
  //#endregion
  //#region utilities
  u_margin_bottom: {
    marginBottom: 12
  },
  u_status_margin: {
    marginTop: 48
  },
  u_flex: {
    flex: 1
  }
  //#endregion
});
export default Stylesheet;
