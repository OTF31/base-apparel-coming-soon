import { useState } from "react";
import {
  Box,
  Center,
  FormControl,
  Heading,
  HStack,
  Image,
  Input,
  Pressable,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "native-base";

import logo from "./assets/logo.svg";
import bgDesktop from "./assets/bg-pattern-desktop.svg";
import heroDesktop from "./assets/hero-desktop.jpg";
import heroMobile from "./assets/hero-mobile.jpg";
import iconArrow from "./assets/icon-arrow.svg";
import iconError from "./assets/icon-error.svg";

const App = () => {
  const [email, setEmail] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const hero = useBreakpointValue({ base: heroMobile, lg: heroDesktop });

  const from1 = "#FFFFFF";
  const to1 = "#FFF5F5";
  const from2 = "#F8BFBF";
  const to2 = "#EE8C8C";

  const handleChange = value => setEmail(value);

  const handleSubmit = () => {
    const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

    regexEmail.test(email) ? setIsInvalid(false) : setIsInvalid(true);
  };

  return (
    <Box minHeight={"100vh"}>
      <Stack direction={"row"} flex={1}>
        <VStack
          w={{ base: "full", xl: "3/5" }}
          alignItems={"center"}
          px={{ base: 0, xl: 32 }}
          py={8}
          space={5}
          bg={{
            linearGradient: {
              colors: [from1, to1],
              start: [0, 0],
              end: [1, 1],
            },
          }}
        >
          <Image
            source={{ uri: bgDesktop }}
            alt={"bg"}
            position={"absolute"}
            top={0}
            bottom={0}
            right={0}
            left={0}
            resizeMode={"cover"}
            zIndex={-5}
            display={{ base: "none", xl: "block" }}
          />
          <Box w={40} alignSelf={"flex-start"} mb={{ base: 5, xl: 20 }} ml={{ base: 20, xl: 0 }}>
            <Image source={{ uri: logo }} w={40} h={9} alt="logo" />
          </Box>
          <Box display={{ base: "block", xl: "none" }} h={"full"} w={"full"}>
            <Image source={{ uri: heroMobile }} resizeMode={"cover"} size="full" alt={"hero"} />
          </Box>
          <Heading
            fontSize={"5xl"}
            letterSpacing={12}
            lineHeight={"xs"}
            mt={{ base: 20, xl: 0 }}
            textAlign={{ base: "center", xl: "start" }}
            mx={{ base: 32, xl: 0 }}
          >
            <Text color={"DesaturatedRed"} fontWeight={300}>
              WE'RE
            </Text>{" "}
            COMING SOON
          </Heading>
          <Text color={"DesaturatedRed"} mx={{ base: 32, xl: 0 }}>
            Hello fellow shoppers! We're currently building our new fashion store. Add your email
            below to stay up-to-date with announcements and our launch deals.
          </Text>
          <Box mt={4} mx={{ base: 32, xl: 0 }} flex={1} w={{ base: "3/4", xl: "full" }}>
            <FormControl isInvalid={isInvalid}>
              <Input
                value={email}
                onChangeText={handleChange}
                keyboardType="email-address"
                placeholder={"Email Adress"}
                w={"full"}
                size={"lg"}
                variant={"rounded"}
                overflow={"hidden"}
                _input={{ ml: 3 }}
                rightElement={
                  <HStack space={3} h={"full"} alignItems={"center"}>
                    <Image
                      source={{ uri: iconError }}
                      alt={"icon-error"}
                      size={6}
                      display={isInvalid ? "block" : "none"}
                    />
                    <Pressable h="full" onPress={handleSubmit} _hover={{ opacity: 80 }}>
                      <Center
                        h={"full"}
                        w={{ base: 16, xl: 20 }}
                        rounded="full"
                        shadow={9}
                        bg={{
                          linearGradient: {
                            colors: [from2, to2],
                            start: [0, 0],
                            end: [1, 1],
                          },
                        }}
                      >
                        <Image
                          source={{ uri: iconArrow }}
                          alt={"icon-arrow"}
                          size={8}
                          top={1}
                          left={2.5}
                        />
                      </Center>
                    </Pressable>
                  </HStack>
                }
              />
              <FormControl.ErrorMessage ml={6}>
                Please provide a valid email
              </FormControl.ErrorMessage>
            </FormControl>
          </Box>
          <Box display={{ base: "block", xl: "none" }} size={16} />
        </VStack>
        <Box display={{ base: "none", xl: "block" }} w={"2/5"} h={"contain"} flex={1}>
          <Image source={{ uri: hero }} resizeMode={"cover"} w={"full"} h={"full"} alt={"hero"} />
        </Box>
      </Stack>
    </Box>
  );
};

export default App;
