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
import { AsyncStorage } from "react-native";
export default function App() {
  const [loginUser, setLoginUser] = useState();
  useEffect(() => {
    getLoginUser();
  }, []);

  const getLoginUser = async () => {
    await AsyncStorage.getItem("loginUser", (err, res) => {
      if (res !== null) {
        const asyncUser = JSON.parse(res);
        if (Object.keys(asyncUser).length > 0) setLoginUser(asyncUser);
      }
    });
  };
  const Store = createStore(() => {
    return loginUser;
  });

  return (
    <Provider store={Store}>
      <AppIndex />
    </Provider>
  );
}
