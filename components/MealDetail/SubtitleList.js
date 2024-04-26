import { StyleSheet, Text, View } from "react-native";

const SubtitleList = ({ title, data }) => {
  return (
    <>
      <View style={styles.subTitleView}>
        <Text style={styles.subTitle}>{title}</Text>
      </View>
      {data.map((d) => (
        <View key={d} style={styles.listView}>
          <Text style={styles.listText}>{d}</Text>
        </View>
      ))}
    </>
  );
};

export default SubtitleList;

const styles = StyleSheet.create({
  listView: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: "#e2b497",
  },
  listText: {
    color: "#351401",
    textAlign: "center",
  },
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleView: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomWidth: 2,
    borderBottomColor: "#e2b497",
  },
});
