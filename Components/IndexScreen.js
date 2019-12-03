import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableHighlight,
  FlatList,
  Animated,
  SafeAreaView
} from "react-native";
import Images from "./images";
import Background from "./background";
import NavigationService from "../Utils/NavigationService";
import FAB from "./TestComponent";
import SvgUri from "react-native-svg-uri";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import Points from "./points";
import CustomList from "./CustomList";
import { ENDPOINT } from "./CameraScreen";
let ScreenHeight = Dimensions.get("window").height + 40;
let ScreenWidth = Dimensions.get("window").width;

export default class IndexScreen extends React.Component {
  //#region listview code
  constructor(props) {
    super(props);
    this.state = {
      animals:[],
      img: "",
      name: "",
      info: ""
    };
    this._renderItem = this._renderItem.bind(this);
    this._onPress = this._onPress.bind(this);
    this.openCamera = this.openCamera.bind(this);
  }
  componentDidMount(){
   this.getAnimals(); 
  }
  openCamera() {
    NavigationService.navigate("InfoScreen",{ selectedAnimal:this.state.name})
    //NavigationService.navigate("CameraScreen");
  }
  addPad(s,size){
      while (s.length < (size || 2)) {s = "0" + s;}
      return s;
  }
  async getAnimals(){
    //TODO: check if animals are in DB?
    let httpresult=await fetch(ENDPOINT+"ai/categories");
    if(httpresult.status==200){
      let results=await httpresult.json();
      let endresult=[]
      for(let item of results.categories){
        const check=this.isDiscovered(item);
        endresult.push({name:check?item:"---",img:check?"duck1":"unknown",info:check?"placeholder data":"Unknown"})
      }
      this.setState({animals:endresult,...endresult[0]})
    }
  }
  isDiscovered(animalname){
    //check in db if user has discovered the animal
    if(animalname=="ooievaar"){
      return false;
    }
    return false
  }
  _renderItem(item,Index) {
    return (
      <TouchableHighlight style={styles.c_index__container} key={Index}>
        <View style={styles.c_index__list}>
          <Image
            style={styles.c_index__picture}
            source={Images.ducks[item.img]}
          />
          <View style={{flex:1,flexDirection:"row"}}>
            <Text  style={styles.c_index_data__name}>{this.addPad((Index+1).toString(),3)}</Text>
            <Text  style={styles.c_index_data__name}> | </Text>
          <Text style={styles.c_index_data__name}>{item.name}</Text>

          </View>
        </View>
      </TouchableHighlight>
    );
  }
  _onPress(item) {
    this.setState({
      img: item.img,
      name: item.name,
      info: item.info
    });
  }
  //#endregion

  render() {
    return (
      <View style={styles.contentContainer}>
        <Background />
        <View style={styles.c_info}>
          <View style={styles.c_index}>
            <Image
              style={styles.c_index__picture_selected}
              source={Images.ducks[this.state.img]}
            />
            <View>
              <Text style={styles.c_index_data__name}>{this.state.name}</Text>
              <Text style={styles.c_index_data__name}>{this.state.info}</Text>
            </View>
          </View>
        </View>
        <CustomList selectedEvent={this._onPress} data={this.state.animals} renderItem={this._renderItem} />

        <FAB
          style={styles.FAB}
          icon={require("../assets/dove.png")}
          onTap={this.openCamera}
        />
     
      <FAB
      style={styles.FAB}
        onTap={this.openCamera}
      />
      </View>
    );
  }
}
IndexScreen.navigationOptions = {
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
  c_index__container:{
    height:100,
    flex:1,
  },
  contentContainer: {
    flex: 1
  },
  FAB: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#0f0"
  },
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  c_info: {
    marginTop: 48,
    marginBottom: 124
  },

  c_background: {
    height: ScreenHeight,
    width: ScreenWidth,
    position: "absolute"
  },

  c_index: {
    margin: 24,
    marginTop: 8,
    marginBottom: 8,
    flex: 1,
    flexDirection: "row",
  },
  c_index__list:{
    margin: 24,
    marginTop: 8,
    marginBottom: 8,
    flex: 1,
    flexDirection: "row",
    alignItems:"center"
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

  c_index_data: {},
  c_index_data__name: {
    fontSize: responsiveFontSize(3),
    color: "white"
  },
  c_index_data__data: {
    color: "white"
  }
});
// #endregion
