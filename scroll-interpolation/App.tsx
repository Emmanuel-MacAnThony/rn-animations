import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import Page from "./components/Page";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

const WORDS = ["What's", "up", "mobile", "devs?"];

export default function App() {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <Animated.ScrollView
      horizontal
      style={styles.container}
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      pagingEnabled
    >
      {WORDS.map((title, index) => {
        return (
          <Page
            title={title}
            index={index}
            key={index.toString()}
            translateX={translateX}
          />
        );
      })}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
