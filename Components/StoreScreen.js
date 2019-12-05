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
import DB from "../Utils/DatabaseService";

const dataList = [
{img: 'pack1', name:'Proud Duck, Proud Duck V2, Kvaak Duck', data:'claimed'}, 
{img: 'pack2', name:'Hugging Ducks, Sleeping Duck, LOL Duck', data:'claimed'}, 
{img: 'pack3', name:'Moikka Duck, Moikkelis Duck, Laughing Duck', data:'claimed'}]
let ScreenHeight = Dimensions.get("window").height + 82;
let ScreenWidth = Dimensions.get("window").width;

export default class StoreScreen extends React.Component {
  // #region Listview code
  _db=new DB();
  constructor(props) {
    super(props);
    
    this.state = {
      data: dataList,
      credits:0
    }
    this.getCredits()
  }
  async getCredits(){
    this.setState({
      credits: await this._db.getCredits()
    })
  }
  componentWillUpdate(){
    this.getCredits();
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
            <Text style={styles.c_points_amount}>{this.state.credits}<Text style={styles.c_points_pts}>Pts</Text></Text>
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
                  <View style={{flex: 1}}>
                    <Image style={styles.c_index__picture} source={Stickers.stickers[item.img]}/>
                    
                    <View style={{justifyContent: 'center'}}>
                      <Text style={styles.c_index_data__name}>{item.name}</Text>
                      <Text style={styles.c_index_data__points}>800Pts</Text>
                      <TouchableOpacity onPress={() => this._onPress(item)}>
                        <View style = {styles.c_index__button__unclaimed}>
                            <Text style={ styles.c_index__button_text__unclaimed}>Coming Soon</Text>
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
    fontSize: responsiveFontSize(2.5),
    color: 'white',
    width: '100%'
  },
  c_index_data__points:{
    fontSize: responsiveFontSize(2),
    color: 'white',
    width: '100%',
    justifyContent: 'center'
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
    width: '100%',
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