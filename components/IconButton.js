import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ name, color, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressable}
      onPress={onPress}
    >
      <Ionicons name={name} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressable: {
    opacity: 0.7,
  },
});
