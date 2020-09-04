import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  View,
  FlatList,
  Text,
  Image,
  ActivityIndicator,
  TouchableHighlight,
} from "react-native";
import { fetchCityTemp } from "../Api/ApiCalls.js";
import styles from "../styles/HomeScrStyle.js";
import { getImage } from "../images/index.js";

function loadData(list) {
  var array = [];
  for (let city of list) {
    var info = {
      id: city.id,
      name: city.name,
      temp: city.main.temp,
      icon: city.weather[0].main,
    };
    array.push(info);
  }
  return array;
}

export default function homeScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [data, setData] = useState([]);

  function refreshData() {
    setIsRefreshing(true);
    fetchCityTemp()
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        const array = loadData(responseJson.list);
        setData(array);
        setIsRefreshing(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchCityTemp()
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        const array = loadData(responseJson.list);
        setData(array);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        style={styles.list}
        onRefresh={refreshData}
        refreshing={isRefreshing}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({ item, separators }) => (
          <TouchableHighlight
            underlayColor="#ffffff"
            onPress={() =>
              navigation.navigate("Detail Info", {
                id: item.id,
                name: item.name,
              })
            }
          >
            <View style={styles.row}>
              <View style={styles.card}>
                <Text style={styles.cityName}>{item.name}</Text>
                <View style={styles.imageAndTempHolder}>
                  <Image
                    source={getImage(item.icon)}
                    style={styles.mediumIcon}
                  />
                  <Text style={styles.mediumTemp}>
                    {Math.round(item.temp)}°
                  </Text>
                </View>
              </View>
            </View>
          </TouchableHighlight>
        )}
      />
    </View>
  );
}
