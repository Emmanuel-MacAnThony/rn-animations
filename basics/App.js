import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  withSpring,
  withRepeat,
} from "react-native-reanimated";
import { View, Button, Text } from "react-native";
import { useEffect } from "react";

const SIZE = 100;

export default function AnimatedStyleUpdateExample(props) {
  const progress = useSharedValue(1);
  const scale = useSharedValue(2);

  const handleRotation = (progress) => {
    "worklet";
    return `${progress.value * 2 * Math.PI}rad`;
  };

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [{ scale: scale.value }, { rotate: handleRotation(progress) }],
      borderRadius: (progress.value * SIZE) / 2,
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), 3, true);
    scale.value = withRepeat(withSpring(1), 3, true);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Animated.View
        style={[
          {
            height: SIZE,
            width: SIZE,
            backgroundColor: "blue",
          },
          reanimatedStyle,
        ]}
      ></Animated.View>
    </View>
  );
}
