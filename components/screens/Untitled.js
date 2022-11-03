import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import OcticonsIcon from "react-native-vector-icons/Octicons";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.tấnTaiColumnRow}>
          <View style={styles.tấnTaiColumn}>
            <Text style={styles.tấnTai}>Tấn Tài</Text>
            <Text style={styles.vừaMớiTruyCập}>Vừa mới truy cập</Text>
          </View>
          <MaterialIconsIcon
            name="phone"
            style={styles.icon}
          ></MaterialIconsIcon>
          <OcticonsIcon
            name="device-camera-video"
            style={styles.icon2}
          ></OcticonsIcon>
        </View>
      </View>
      <View style={styles.rect2}>
        <View style={styles.image2Row}>
          <Image
            source={require("../assets/images/seo-off-page_imucfs2.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <View style={styles.rect3Stack}>
            <View style={styles.rect3}>
              <Text style={styles.okEm}>OK em</Text>
            </View>
            <View style={styles.image3Stack}>
              <Image
                source={require("../assets/images/seo-off-page_imucfs2.png")}
                resizeMode="contain"
                style={styles.image3}
              ></Image>
              <View style={styles.rect4}>
                <Text style={styles.oKeA}>OKe a</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  rect: {
    width: 375,
    height: 114,
    backgroundColor: "rgba(41,27,148,1)"
  },
  tấnTai: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)"
  },
  vừaMớiTruyCập: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 10
  },
  tấnTaiColumn: {
    width: 106
  },
  icon: {
    fontSize: 32,
    color: "rgba(255,255,255,1)",
    height: 32,
    width: 32,
    marginLeft: 91,
    marginTop: 2
  },
  icon2: {
    fontSize: 32,
    color: "rgba(255,255,255,1)",
    height: 35,
    width: 32,
    marginLeft: 40
  },
  tấnTaiColumnRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 39,
    marginLeft: 28,
    marginRight: 46
  },
  rect2: {
    width: 375,
    height: 698,
    backgroundColor: "rgba(194,191,191,1)",
    flexDirection: "row"
  },
  image2: {
    width: 44,
    height: 62,
    borderRadius: 100,
    borderWidth: 0,
    borderColor: "#000000"
  },
  rect3: {
    top: 0,
    left: 0,
    width: 180,
    height: 71,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  okEm: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 12,
    marginLeft: 11
  },
  image3: {
    top: 0,
    left: 178,
    width: 44,
    height: 62,
    position: "absolute",
    borderRadius: 100,
    borderWidth: 0,
    borderColor: "#000000"
  },
  rect4: {
    top: 15,
    left: 0,
    width: 180,
    height: 71,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  oKeA: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 9,
    marginLeft: 13
  },
  image3Stack: {
    top: 70,
    left: 90,
    width: 222,
    height: 86,
    position: "absolute"
  },
  rect3Stack: {
    width: 312,
    height: 156,
    marginLeft: 1,
    marginTop: 10
  },
  image2Row: {
    height: 166,
    flexDirection: "row",
    flex: 1,
    marginRight: 2,
    marginLeft: 16,
    marginTop: 10
  }
});

export default Untitled;
