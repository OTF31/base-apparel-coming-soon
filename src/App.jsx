import { Box, Text, VStack } from "native-base";
import LinearGradient from "react-native-web-linear-gradient";

const App = () => {
  const from1 = "#FFFFFF";
  const to1 = "#FFF5F5";
  const from2 = "#F8BFBF";
  const to2 = "#EE8C8C";

  return (
    <Box minHeight="100vh" justifyContent="center" px={4}>
      <VStack space={5} alignItems="center">
        <Box
          size={48}
          bg={{
            linearGradient: {
              colors: [from2, to2],
              start: [0, 0.5],
              end: [1, 0.5],
            },
          }}
        ></Box>
        <LinearGradient
          useAngle
          angle={135}
          colors={[from2, to2]}
          style={{
            flex: 1,
            paddingLeft: 15,
            paddingRight: 15,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Gill Sans",
              textAlign: "center",
              margin: 10,
              color: "#ffffff",
              backgroundColor: "transparent",
            }}
          >
            Base apparel coming soon
          </Text>
        </LinearGradient>
      </VStack>
    </Box>
  );
};

export default App;
