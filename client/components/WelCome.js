import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { SafeCon } from "../assets/common/common";
import { SwiperFlatList } from "react-native-swiper-flatlist";

const WelCome = ({ navigation }) => {
  const userWidth = Dimensions.get("window").width;
  const presentImg = [
    "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210723_159%2F1627019426922iv3cl_PNG%2FP5hBe-KoUjMp8WmzDPs1MvB2.PNG.png",
    "https://img.khan.co.kr/news/2020/10/16/l_2020101601001687000138341.jpg",
    "https://file.mk.co.kr/meet/neds/2021/04/image_readtop_2021_330747_16177500644599916.jpg",
    "https://dimg.donga.com/wps/NEWS/IMAGE/2021/01/17/104953245.2.jpg",
    "http://spnimage.edaily.co.kr/images/Photo/files/NP/S/2021/05/PS21051800093.jpg",
  ];

  return (
    <SafeCon>
      <ScrollView
        style={{
          padding: 15,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 30 }}>
          우리동네 사진관 확인하고 인생사진 얻자!
        </Text>
        <View
          style={{
            marginTop: 15,
          }}
        >
          <Image
            style={{ width: userWidth - 50, height: 300, borderRadius: 15 }}
            source={{
              uri: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210723_159%2F1627019426922iv3cl_PNG%2FP5hBe-KoUjMp8WmzDPs1MvB2.PNG.png",
            }}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={{ color: "white", fontSize: 20 }}>
            현재 동네 21개 사진관 예약가능
          </Text>
          <View style={{ width: userWidth - 50, flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 6,
                borderRadius: 12,
                height: 50,
                marginRight: 12,
              }}
            >
              <Text style={{ color: "black", fontSize: 16 }}>로그인</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "#3f51b5",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 6,
                borderRadius: 12,
                height: 50,
              }}
            >
              <Text style={{ color: "white", fontSize: 16 }}>회원가입</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeCon>
  );
};

export default WelCome;
