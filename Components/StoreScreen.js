import React from "react";
import { StyleSheet, View, Image, Dimensions, Text, TouchableHighlight, ListView, Button, FlatList} from 'react-native';
import Images from './images'
import SvgUri from 'react-native-svg-uri';

const dataList = [{img: 'duck1', name:'sticker1', data:'Bought'}, {img: 'duck2', name:'sticker2', data:'not bought'}]
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
  //#endregion

  render() {
    return(
      <View>
        <Image resizeMode={'stretch'} style={styles.c_background} source={require('../assets/BackgroundL.png')}/>  
        <View style={styles.c_points_container}>
          <View style={styles.c_points_flexcontainer}>
            <Text style={styles.c_points_amount}>800<Text style={styles.c_points_pts}>Pts</Text></Text>
          </View>
        </View>
        <FlatList data={dataList}
          renderItem={({item, index, separators}) => (
            <TouchableHighlight onShowUnderlay={separators.highlight} onHideUnderlay={separators.unhighlight}>
              <View style={styles.c_index}>
                  <Image style={styles.c_index__picture} source={Images.ducks[item.img]}/>
                  <Text style={styles.c_index_data__name}>{item.name}</Text>
                  <Button style={styles.c_index__button} title="Buy"/>
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
  c_lvw:{

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

  c_background:{
    height: ScreenHeight,
    width: ScreenWidth,
    position: 'absolute'
  },

  c_index:{
    margin: 24,
    flex:1,
    flexDirection: 'row',
    width: ScreenWidth,
  },
  
  c_index__picture:{
    height: 88,
    width: 88,
    marginRight: 24
  },

  c_index_data:{
  },

  c_index_data__name:{
    fontSize:24,
    color: 'white',
    marginRight: 200
  },

  c_index_data__data:{
    color: 'white',
  },

  c_index__button:{
    marginLeft: 100,
    width: 48
  },

  c_nav__item:{
    color: '#A8A8A8',
    fontSize: 14,
  }

});
// #endregion