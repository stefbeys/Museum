import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import Images from "./images";
import Background from "./background";
import NavigationService from "../Utils/NavigationService";
import FAB from "./FABComponent";
import SvgUri from "react-native-svg-uri";
import CustomList from "./CustomList";
import CONSTS from "./Constants";
import DB from "../Utils/DatabaseService";
import CONSTANT_STRINGS from "../assets/en/strings";
import images from "./images";
import styles from "./stylesheet";

export default class IndexScreen extends React.Component {
  db = new DB();
  //#region componentFunctions
  constructor(props) {
    super(props);
    this.state = {
      animals: [],
      img: Images.unknown,
      name: "",
      info: ""
    };
    this._renderItem = this._renderItem.bind(this);
    this._onPress = this._onPress.bind(this);
    this.refresh = this.refresh.bind(this);
    this.openCamera = this.openCamera.bind(this);
    this.toInfoPage = this.toInfoPage.bind(this);
  }

  async componentDidMount() {
    await this.getAnimals();
  }

  render() {
    return (
      <View style={styles.u_flex}>
        <Background />
        <TouchableHighlight
          onPress={this.toInfoPage}
          style={styles.u_status_margin}
        >
          <View style={styles.c_index}>
            <Image
              style={styles.c_index__picture_selected}
              source={this.state.img}
            />
            <View
              style={{
                flex: 1,
                alignContent: "center",
                justifyContent: "center"
              }}
            >
              <Text style={styles.c_index_data__name}>{this.state.name}</Text>
              <Text style={styles.c_index_data__name}>{this.state.info}</Text>
            </View>
          </View>
        </TouchableHighlight>
        <CustomList
          selectedEvent={this._onPress}
          data={this.state.animals}
          renderItem={this._renderItem}
        />

        <FAB style={styles.c_fab} onTap={this.openCamera} />
      </View>
    );
  }
  //#endregion
  //#region List functions
  async refresh() {
    await this.getAnimals();
    await NavigationService.getParam("refreshCredits")();
  }
  async getAnimals() {
    let httpresult = await fetch(CONSTS.ENDPOINT + "ai/categories");
    if (httpresult.status == 200) {
      let results = await httpresult.json();
      let endresult = [];
      for (let item of results.categories) {
        const check = await this.isDiscovered(item);
        endresult.push({
          name: check != null ? item : "---",
          img:
            check != null
              ? { isStatic: true, uri: check.image }
              : Images.unknown,
          info:
            check != null
              ? CONSTANT_STRINGS.Click_INFO
              : CONSTANT_STRINGS.UNKNOWN
        });
      }
      this.setState({ animals: endresult, ...endresult[0] });
    }
  }
  //#endregion
  //#region event handlers
  openCamera() {
    NavigationService.navigate(CONSTS.SCREENS.CameraScreen, {
      onGoBack: () => this.refresh()
    });
  }
  _onPress(item) {
    this.setState({
      img: item.img,
      name: item.name,
      info: item.info
    });
  }
  _renderItem(item, Index) {
    return (
      <TouchableHighlight
        style={{ ...styles.c_index__container, ...styles.u_flex }}
        key={Index}
      >
        <View style={styles.c_index}>
          <Image style={styles.c_index__picture} source={item.img} />
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={styles.c_index_data__name}>
              {this.addPad((Index + 1).toString(), 3)}
            </Text>
            <Text style={styles.c_index_data__name}> | </Text>
            <Text style={styles.c_index_data__name}>{item.name}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  //#endregion
  //#region methods
  addPad(s, size) {
    while (s.length < (size || 2)) {
      s = "0" + s;
    }
    return s;
  }
  async isDiscovered(animalname) {
    const hasanimal = await this.db.getAnimalByName(animalname);
    if (hasanimal != null) {
      return hasanimal;
    }
    return null;
  }
  async toInfoPage() {
    const animalData = await new DB().getAnimalByName(this.state.name);
    if (animalData == null) {
      NavigationService.navigate(CONSTS.SCREENS.CameraScreen);
    } else {
      NavigationService.navigate(CONSTS.SCREENS.InfoScreen, {
        selectedName: animalData.name,
        selectedAppearance: animalData.appearance,
        selectedDiet: animalData.diet,
        selectedBehaviour: animalData.behaviour,
        selectedEndangerment: animalData.endangerment,
        selectedImage: { isstatic: true, uri: animalData.image }
      });
    }
  }
  //#endregion
}
IndexScreen.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <SvgUri
      height="30"
      width="30"
      fill={"#FFFFFF" ? tintColor : "#A8A8A8"}
      source={images.svg.Home}
    />
  )
};
