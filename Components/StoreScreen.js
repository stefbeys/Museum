import React from "react";
import {
  View,
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  FlatList
} from "react-native";
import SvgUri from "react-native-svg-uri";
import NavigationService from "../Utils/NavigationService";
import Background from "./background";
import Stickers from "./stickers";
import CONSTANT_STRINGS from "../assets/fi/strings";
import DB from "../Utils/DatabaseService";
import CONSTS from "./Constants";
import styles from './stylesheet';
import images from "./images";

export default class StoreScreen extends React.Component {
  _db = new DB();
  //#region Component functions
  constructor(props) {
    super(props);
    this.state = {
      list: CONSTS.dataList,
      credits: 0
    };
    this.getCredits = this.getCredits.bind(this);
    this._onPress = this._onPress.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
    NavigationService.addParams({ refreshCredits: this.refreshPage });
  }
  async componentDidMount() {
    await this.refreshPage();
  }
  render() {
    return (
      <View>
        <Background background={images.backgrounds[2]} />
        <View style={styles.c_points_container}>
          <View>
            <Text style={styles.c_points_amount}>
              {this.state.credits}
              <Text style={styles.c_points_pts}>Pts</Text>
            </Text>
          </View>
        </View>
        <FlatList
          style={styles.c_flatlist}
          data={this.state.list}
          renderItem={({ item, index }) => (
            <TouchableHighlight key={index}>
                <View style={styles.c_index}>
                  <View style={styles.u_flex}>
                    <Image
                      style={styles.c_store__picture}
                      source={Stickers.stickers[item.img]}
                    />
                    <View>
                      <Text style={styles.c_store_data__name}>{item.name}</Text>
                      <Text style={styles.c_index_data__points}>
                        {item.price}Pts
                      </Text>
                      <TouchableOpacity onPress={() => this._onPress(item)}>
                        <View
                          style={
                            item.claimed || item.price > this.state.credits
                              ? styles.c_index__button__claimed
                              : {
                                  ...styles.c_index__button__claimed,
                                  ...styles.c_index__button__unclaimed
                                }
                          }
                        >
                          <Text style={styles.c_index__button_text__unclaimed}>
                            {item.claimed
                              ? CONSTANT_STRINGS.CLAIMED
                              : item.price <= this.state.credits
                              ? CONSTANT_STRINGS.CLAIM
                              : CONSTANT_STRINGS.Not_ENOUGH_PT}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
            </TouchableHighlight>
          )}
        />
      </View>
    );
  }
  //#endregion
  //#region functions
  async getCredits() {
    var creds = await this._db.getCredits();
    if (creds != this.state.credits) {
      this.setState({
        credits: creds
      });
    }
  }
  async refreshPage() {
    await this.getCredits();
    const StickerList = [];
    for (let item of this.state.list) {
      item.claimed = await this._db.checkIfBought(item.pack);
      StickerList.push(item);
    }
    this.setState({ list: StickerList });
  }
  //#endregion
  //#region events
  async _onPress(item) {
    if (!item.claimed && item.price <= this.state.credits) {
      try {
        const buypack = item.pack;
        //buy price here
        await this._db.buyStickerPack(item);
        this.refreshPage();
      } catch (e) {
        console.warn(e);
      }
    }
  }
  //#endregion
}
//#region taboptions
StoreScreen.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <SvgUri
      height="30"
      width="30"
      fill={"#FFFFFF" ? tintColor : "#A8A8A8"}
      source={require("../assets/Store.svg")}
    />
  )
};
//#endregion
