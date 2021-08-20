import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import styled from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Home, ChatList, Chat, WelCome } from "./components";
import { Con, HeaderLogo } from "./assets/common/common";
import { photoShopDetail } from "./components/Home/photoShopDetail";
import { photoShopList } from "./components/Home/photoShopList";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Provier } from "react-redux";
import { createStore } from "redux";
import * as Location from "expo-location";
import AppIndex from "./AppIndex";
import { Provider } from "react-redux";

const Tab = createBottomTabNavigator();
const Store = createStore(() => {
  return { name: "성민", age: 27 };
});

export default function App() {
  return (
    <Provider store={Store}>
      <AppIndex />
    </Provider>
  );
}
