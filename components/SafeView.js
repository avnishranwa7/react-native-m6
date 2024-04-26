import { Platform, SafeAreaView, StyleSheet, StatusBar } from "react-native";

const SafeView = ({ children, viewStyles }) => {
  return (
    <SafeAreaView style={[styles.safeView, viewStyles]}>
      {children}
    </SafeAreaView>
  );
};

export default SafeView;

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
