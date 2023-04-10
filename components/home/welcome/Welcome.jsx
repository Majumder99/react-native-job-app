import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const Welcome = () => {
  const router = useRouter();
  return (
    <>
      <View>
        <View style={styles.container}>
          <Text style={styles.userName}>Hello Sourav</Text>
          <Text style={styles.welcomeMessage}>Find perfect job</Text>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value=""
              onChange={() => {}}
              placeholder="Search"
            />
          </View>
          <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
            <Image
              source={icons.search}
              style={styles.searchBtnImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Welcome;
