import React from "react";
import { StyleSheet, View, Image, Dimensions, Text, TouchableHighlight, TouchableOpacity, FlatList} from 'react-native';
import Images from './images'
import SvgUri from 'react-native-svg-uri';
import Background from './background'

const dataList = [{img: 'duck1', name:'sticker1', data:'claimed'}, {img: 'duck2', name:'sticker2', data:'unclaimed'}]
let ScreenHeight = Dimensions.get("window").height + 82;
let ScreenWidth = Dimensions.get("window").width;

export default class StoreScreen extends React.Component {
  // #region Listview code
  constructor(props) {
    super(props);
    this.state = {
      data: dataList,
    }
  }

  _onPress(item){

  }
  //#endregion

  render() {
    return(
      <View>
        <Background />  
        <View style={styles.c_points_container}>
          <View style={styles.c_points_flexcontainer}>
            <Text style={styles.c_points_amount}>800<Text style={styles.c_points_pts}>Pts</Text></Text>
          </View>
        </View>
        <FlatList data={dataList}
          renderItem={({item, index}) => (
            <TouchableHighlight>
              <View style={styles.c_index_container}>
                <View style={styles.c_index}>
                  <Image style={styles.c_index__picture} source={Images.ducks[item.img]}/>
                  <View>
                    <Text style={styles.c_index_data__name}>{item.name}</Text>
                    <Text style={styles.c_index_data__points}>800Pts</Text>
                  </View>
                </View>  
                <TouchableOpacity onPress={() => this._onPress(item)}>
                  <View style = {styles.c_index__button__unclaimed}>
                      <Text style={ styles.c_index__button_text__unclaimed}>Claim</Text>
                  </View>
            </TouchableOpacity>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    )
  }
}
  StoreScreen.navigationOptions={
    tabBarIcon: ({tintColor}) => (
      <SvgUri height="30" width="30" style={styles.c_nav__item} fill={'#FFFFFF' ? tintColor : '#A8A8A8'} source={require('../assets/Store.svg')}/>
      )
  }

// #region Stylesheet
const styles = StyleSheet.create({
  c_index_container:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 24,
  },

  c_points_container:{
    margin: 24,
    marginTop: 48,
    width: ScreenWidth,
  },

  c_points_amount:{
    fontSize:88,
    color:'white',
  },

  c_points_pts:{
    color: 'white',
    fontSize: 24
  },

  c_index:{
    flex:1,
    flexDirection: 'row',
  },
  
  c_index__picture:{
    height: 88,
    width: 88,
    marginRight: 24,
    borderRadius: 500
  },

  c_index_data__name:{
    fontSize:32,
    color: 'white',
    marginRight: 200
  },
  c_index_data__points:{
    fontSize:24,
    color: 'white',
    marginRight: 200
  },

  c_index_data__data:{
    color: 'white',
  },

  c_index__button__claimed:{
    margin: 24,
    width: 88,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
  },

  c_index__button_text__claimed:{
    color: "#405F7E"
  },

  c_index__button_text__unclaimed:{
    color: "#405F7E"
  },

  c_index__button__unclaimed:{
    margin: 24,
    width: 88,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
  },

  c_nav__item:{
    color: '#A8A8A8',
    fontSize: 14,
  }

});
// #endregion