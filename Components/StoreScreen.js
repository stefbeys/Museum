import React from "react";
import { StyleSheet, View, Image, Dimensions, Text, TouchableHighlight, TouchableOpacity, FlatList} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import Background from './background'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import Stickers from './stickers'
import CONSTANT_STRINGS from "../assets/fi/strings";

const dataList = [
{img: 'Sticker3', name:'Proud Duck', data:'claimed'}, 
{img: 'Sticker1', name:'Proud Duck V2', data:'claimed'}, 
{img: 'Sticker5', name:'LOL Duck', data:'claimed'}, 
{img: 'Sticker6', name:'Sleeping Duck', data:'unclaimed'},
{img: 'Sticker7', name:'Hugging Ducks', data:'claimed'}, 
{img: 'Sticker8', name:'Moikka Duck', data:'unclaimed'},
{img: 'Sticker9', name:'Kvaak Duck', data:'claimed'}, 
{img: 'Sticker10', name:'Laughing Duck', data:'unclaimed'},
{img: 'Sticker11', name:'Moikkelis Duck', data:'claimed'}]
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
        <Background background={require('../assets/Background2L.png')}/>  
        <View style={styles.c_points_container}>
          <View style={styles.c_points_flexcontainer}>
            <Text style={styles.c_points_amount}>1200<Text style={styles.c_points_pts}>Pts</Text></Text>
          </View>
        </View>
        <FlatList
        style={{
          marginBottom: '15%'
        }}
        data={dataList}
          renderItem={({item, index}) => (
            <TouchableHighlight>
              <View style={styles.c_index_container}>
                <View style={styles.c_index}>
                <View style={{flex:1, flexDirection: 'row'}}>
                  <Image style={styles.c_index__picture} source={Stickers.stickers[item.img]}/>
                  
                  <View>
                    <Text style={styles.c_index_data__name}>{item.name}</Text>
                    <Text style={styles.c_index_data__points}>800Pts</Text>
                <TouchableOpacity onPress={() => this._onPress(item)}>
                  <View style = {styles.c_index__button__unclaimed}>
                      <Text style={ styles.c_index__button_text__unclaimed}>{CONSTANT_STRINGS.CLAIM}</Text>
                  </View>
            </TouchableOpacity>
                  </View>
                </View>  
                  </View>
                  
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
    fontSize:responsiveFontSize(6),
    color:'white',
  },

  c_points_pts:{
    color: 'white',
    fontSize: responsiveFontSize(2.5)
  },

  c_index:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  
  c_index__picture:{
    height: 108,
    width: 108,
    marginRight: 24
  },

  c_index_data__name:{
    fontSize: responsiveFontSize(3),
    color: 'white',
    width: '100%'
  },
  c_index_data__points:{
    fontSize: responsiveFontSize(2),
    color: 'white',
    width: '100%'
  },

  c_index_data__data:{
    color: 'white',
  },

  c_index__button__claimed:{
    marginTop:8,
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
    marginTop:8,
    width: 88,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
  },

  c_nav__item:{
    color: '#A8A8A8',
  }

});
// #endregion