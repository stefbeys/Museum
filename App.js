import React from "react";
import { StyleSheet } from "react-native";
import TabScreen from "./Components/TabScreen";
import  FAB  from "./Components/TestComponent";
import IndexScreen from "./Components/IndexScreen";

export default function App() {
  return <TabScreen/>;
  //return <IndexScreen/>
  return <FAB icon={require("./assets/dove.png")} onTap={(()=>{console.warn("test")})}/>
}

// #region Stylesheet
const styles = StyleSheet.create({});
// #endregion
