import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    flex: 1,
  },
  list: {
    width: "100%",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 4,
    padding: 16,
    flex: 1,
    flexDirection: "row",
    margin: 8,
  },
  row: {
    flexDirection: "row",
  },
  mediumTemp: {
    fontSize: 36,
    lineHeight: 40,
    fontFamily: "gilroy-light",
    color: "#000000",
    textAlign: "right",
  },
  cityName: {
    fontSize: 20,
    lineHeight: 40,
    color: "#000000",
    fontFamily: "gilroy-light",
    marginRight: 16,
    flex: 3,
  },
  mediumIcon: {
    width: 36,
    height: 36,
  },
  imageAndTempHolder: {
    flexDirection: "row",
    flex: 2,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
