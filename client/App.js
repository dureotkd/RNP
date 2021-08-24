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
import { createStore, combineReducers } from "redux";
import * as Location from "expo-location";
import AppIndex from "./AppIndex";
import { Provider } from "react-redux";
import { AsyncStorage } from "react-native";
import Port from "./components/Port";

export default function App() {
  const [loginUser, setLoginUser] = useState(null);
  const [wishList, setWishList] = useState(null);
  const [reservationList, setReservationList] = useState(null);

  useEffect(() => {
    getLoginUser();
    getWishList();
    getReservationList();
  }, []);

  const getLoginUser = async () => {
    await AsyncStorage.getItem("loginUser", (err, res) => {
      if (res !== null) {
        const asyncUser = JSON.parse(res);
        if (Object.keys(asyncUser).length > 0) setLoginUser(asyncUser);
      }
    });
  };

  const getWishList = async () => {
    await axios({
      method: "get",
      url: `${Port}/getWishList`,
      params: {
        userNo: loginUser.seq,
      },
    })
      .then(({ data, status }) => {
        if (status === 200) setWishList(data);
      })
      .catch((e) => {
        alert(e);
      });
  };

  const getReservationList = async () => {
    await axios({
      method: "get",
      url: `${Port}/getReservationList`,
      params: {
        userNo: loginUser.seq,
      },
    })
      .then(({ data, status }) => {
        if (status === 200) setReservationList(data);
      })
      .catch((e) => {
        alert(e);
      });
  };

  const loginUserRd = (state = loginUser, action) => {
    switch (action.type) {
      case "하이": {
        console.log("Hi2");
        break;
      }

      default: {
        return state;
      }
    }

    return state;
  };

  const wishListRd = (state = wishList, action) => {
    switch (action.type) {
      case "하이": {
        console.log("Hi1");
        break;
      }

      default: {
        return state;
      }
    }

    return state;
  };

  const reservationListRd = (state = reservationList, action) => {
    return state;
  };

  const Store = createStore(
    combineReducers({ loginUserRd, wishListRd, reservationListRd })
  );

  return (
    <Provider store={Store}>
      <AppIndex />
    </Provider>
  );
}
