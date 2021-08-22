import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import axios from "axios";
import { Con } from "../assets/common/common";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";

const Profile = ({ loginUser }) => {
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={{ padding: 15 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 150, height: 150, borderRadius: 35 }}
          source={{
            uri: "https://cdnweb01.wikitree.co.kr/webdata/editor/202009/16/img_20200916152758_395c9c8b.webp",
          }}
        />
        <View>
          <Text style={{ fontSize: 25 }}>{loginUser.name}</Text>
        </View>
      </View>

      <View>
        <View>
          <Text>예약 목록</Text>
        </View>
        <View>
          <Text>사진관김에</Text>
          <Text>3일전</Text>
        </View>
      </View>
      <View>
        <Text>찜 목록</Text>
      </View>
    </SafeAreaView>
  );
};

function StateChange(loginUser) {
  return {
    loginUser: loginUser,
  };
}

export default connect(StateChange)(Profile);
