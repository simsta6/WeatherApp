import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator, Image } from "react-native";

import { fetchCityInfoByID } from "../Api/ApiCalls.js";
import styles from "../styles/InfoScrStyle.js";
import { getImage } from "../images/index.js";

function getWeekDay(day) {
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
}

function formatDate(date) {
  return getWeekDay(date.getDay()) + "\n" + date.getHours() + ":00";
}

function loadData(list) {
  var array = [];
  for (let cityObject of list) {
    var t = new Date(cityObject.dt * 1000);
    var info = {
      temp: cityObject.main.temp,
      icon: cityObject.weather[0].main,
      feels_like: cityObject.main.feels_like,
      wind: cityObject.wind.speed,
      pressure: cityObject.main.pressure,
      humidity: cityObject.main.humidity,
      time: formatDate(t),
    };
    array.push(info);
  }
  return array;
}

export default function infoScreen({ route }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const id = route.params.id;

  useEffect(() => {
    fetchCityInfoByID(id)
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
    <View style={styles.infoContainer}>
      <View style={styles.upperCard}>
        <View style={styles.tempAndIcon}>
          <Text style={styles.largeTemp}>{Math.round(data[0].temp)}°</Text>
          <Image
            style={styles.largeIcon}
            source={getImage(data[0].icon)}
          ></Image>
        </View>
        <View style={styles.infoAboutNow}>
          <View style={styles.feelAndPressure}>
            <Text style={styles.smallText}>
              Feels like{"\n"}
              {Math.round(data[0].feels_like)}°
            </Text>
            <Text style={styles.smallText}>
              Pressure{"\n"}
              {Math.round(data[0].pressure)} mbar
            </Text>
          </View>
          <View style={styles.windAndHumidity}>
            <Text style={styles.smallText}>
              Wind speed{"\n"}
              {Math.round(data[0].wind)} m/s
            </Text>

            <Text style={styles.smallText}>
              Humidity{"\n"}
              {Math.round(data[0].humidity)} %
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.lowerCard}>
        <FlatList
          data={data}
          style={styles.list}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, separators }) => (
            <View style={styles.prediction}>
              <View style={styles.dateHolder}>
                <Text style={styles.smallTimeAndTemp}>{item.time}</Text>
              </View>
              <View style={styles.imageTempHolder}>
                <Image
                  style={styles.mediumIcon}
                  source={getImage(item.icon)}
                ></Image>
                <Text style={styles.smallTimeAndTemp}>
                  {Math.round(item.temp)}°
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}
