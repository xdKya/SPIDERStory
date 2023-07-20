import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../screens/profile";
import BottomTabNavigator from "./tabNavigator"
const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component {
  
  render() {
    return (
    <Drawer.Navigator screenOptions={{headerShown:false}}>
      <Drawer.Screen name="Tela Inicial" component={BottomTabNavigator}/>
      <Drawer.Screen name="Perfil" component={Profile} />
    </Drawer.Navigator>
  );
  }
}
