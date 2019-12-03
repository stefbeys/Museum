import React from 'react';
import { StyleSheet,  View,  Text,  Image,  Dimensions,  ScrollView, Animated, TouchableWithoutFeedback} from "react-native";
import { responsiveFontSize} from "react-native-responsive-dimensions";
import Images from "./images";
import NavigationService from '../Utils/NavigationService';
import Background from "./background";
import SvgUri from "react-native-svg-uri";

let ScreenHeight = Dimensions.get("window").height + 40;
let ScreenWidth = Dimensions.get("window").width;
const HEADER_EXPANDED_HEIGHT = ScreenWidth
const HEADER_COLLAPSED_HEIGHT = 48

export default class InfoScreen extends React.Component{
    constructor(props){
        super(props)
        this.scrollY = new Animated.Value(0)
        this._onClosePress = this._onClosePress.bind(this)
    }

    _onClosePress(){
        NavigationService.popToTop()
    }

    render(){
        const headerHeight = this.scrollY.interpolate({
            inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
            outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
            extrapolate: 'clamp'
          })

        return(
            <View style={styles.contentContainer}>
                <Background />
                <View style={styles.c_close}>
                    <TouchableWithoutFeedback  onPress={() => this._onClosePress()}>
                        <SvgUri height="30" width="30"  source={require("../assets/close.svg")}/>
                    </TouchableWithoutFeedback>
                </View>
                <Animated.Image  style={{height: headerHeight, width: ScreenWidth, position: 'absolute', top: 0, left: 0}}  source={Images.ducks["duck1"]}/>
                <ScrollView scrollbarVisible={false} style={styles.c_infoScreen__container} onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: this.scrollY}}}])} scrollEventThrottle={16} contentContainerStyle={{padding: 16, paddingTop: HEADER_EXPANDED_HEIGHT}}>
                    <View style={styles.c_infoScreen__name_container}>
                        <Text style={styles.c_infoScreen__name}>{NavigationService.getParam("selectedName")}</Text>
                    </View>
                    <Text style={styles.c_infoScreen__title}>Appearance</Text>
                    <Text style={styles.c_infoScreen__appearance}>{NavigationService.getParam("selectedAppearance")}</Text>
                    <Text style={styles.c_infoScreen__title}>Diet</Text>
                    <Text style={styles.c_infoScreen__diet}>{NavigationService.getParam("selectedDiet")}</Text>
                    <Text style={styles.c_infoScreen__title}>Behaviour</Text>
                    <Text style={styles.c_infoScreen__behaviour}>{NavigationService.getParam("selectedBehaviour")}</Text>
                    <Text style={styles.c_infoScreen__title}>Endangerment</Text>
                    <Text style={styles.c_infoScreen__endangerment}>{NavigationService.getParam("selectedEndangerment")}</Text>
                </ScrollView>
          </View>)
    }
}

InfoScreen.navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <SvgUri
        height="30"
        width="30"
        style={styles.c_nav__item}
        fill={"#FFFFFF" ? tintColor : "#A8A8A8"}
        source={require("../assets/Index.svg")}
      />
    )
};

// #region Stylesheet
const styles = StyleSheet.create({
    contentContainer: {
      flex: 1
    },

    c_infoScreen_image: {
        width: "100%",
        height: ScreenWidth
    },
    c_infoScreen__name:{
        color: 'white',
        marginBottom: 12,
        fontSize: responsiveFontSize(4)
    },
    c_infoScreen__title:{
        color: 'white',
        marginTop: 12,
        fontSize: responsiveFontSize(2.7)
    },
    c_infoScreen__appearance:{
        color: 'white',
        fontSize: responsiveFontSize(1.8)

    },
    c_infoScreen__diet:{
        color: 'white',
        fontSize: responsiveFontSize(1.8)

    },
    c_infoScreen__behaviour:{
        color: 'white',
        fontSize: responsiveFontSize(1.8)

    },
    c_infoScreen__endangerment:{
        color: 'white',
        fontSize: responsiveFontSize(1.8)

    },
    c_infoScreen__container: {
        margin: 24,
    },

    c_infoScreen__name_container: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    c_close:{
        zIndex: 7,
        position: 'absolute',
        top: 64,
        left: 32
      },
  });
  // #endregion