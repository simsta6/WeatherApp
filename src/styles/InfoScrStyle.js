import { StyleSheet } from "react-native";

export default StyleSheet.create({
  dateHolder: {
    flex: 3,
  },
  imageTempHolder: {
    flexDirection: "row",
    flex: 2,
    alignItems: "center",
    justifyContent: "space-between",
  },
  smallTimeAndTemp: {
    marginLeft: 32,
    marginRight: 32,
    fontSize: 16,
    fontFamily: "gilroy-light",
    textAlign: "left",
    color: "#000000",
  },
  prediction: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingBottom: 12,
    paddingTop: 12,
    flex: 1,
    flexDirection: "row",
  },
  smallText: {
    fontSize: 16,
    fontFamily: "gilroy-light",
    color: "#000000",
    marginLeft: 32,
    marginBottom: 32,
  },
  windAndHumidity: {
    flex: 1,
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between",
  },
  feelAndPressure: {
    flex: 1,
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between",
  },
  infoAboutNow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  largeIcon: {
    width: 100,
    height: 100,
    margin: 32,
  },
  largeTemp: {
    fontSize: 80,
    fontFamily: "gilroy-light",
    color: "#000000",
    margin: 32,
  },
  tempAndIcon: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  infoContainer: {
    flexDirection: "column",
    flex: 1,
    height: "100%",
  },
  upperCard: {
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 4,
    flex: 1,
    flexDirection: "column",
    marginBottom: 4,
    margin: 8,
  },
  lowerCard: {
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 4,
    flex: 1,
    flexDirection: "row",
    marginTop: 4,
    margin: 8,
  },
  list: {
    width: "100%",
  },
  mediumTemp: {
    fontSize: 36,
    lineHeight: 40,
    fontFamily: "gilroy-light",
    color: "#000000",
    textAlign: "right",
  },
  mediumIcon: {
    width: 36,
    height: 36,
  },
});
