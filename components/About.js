import { Box, Flex, Image, Text, Img, Button } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <>
      {/* main container */}
      <Flex
        className="about_container"
        w="100%"
        h={["100vh", "100vh", "100vh", "100vh"]}
        bgColor="black"
        justifyContent="center"
        alignItems="center"
        py="50px"
      >
        <Flex
          width={["100%", "100%", "90%", "90%"]}
          height="100%"
          flexDirection={["column", "column", "row", "row"]}
          alignItems="center"

        >
          {/* left container */}
         
          <Flex width={["90%", "90%", "50%", "50%"]} height="50%" justifyContent="center">
            <Image
              src="images/aboutpik.png"
              alt="homepik"
            />
          </Flex>
          <Flex
            width={["80%", "80%", "40%", "40%"]}
            flexDirection="column"
            gap={["20px", "20px", "43px", "43px"]}
            textAlign={["center", "center", "start", "start"]}
            margin="auto"
          >
            <Text
              fontSize={["10px", "10px", "21px", "21px"]}
              fontWeight="500"
              lineHeight="32px"
              fontFamily="Poppins"
              color="#AD1987"
            >
              ABOUT US
            </Text>
            <Flex flexDirection="column">
            <Text
              fontSize={["25px", "25px", "50px", "50px"]}
              color="#FFFFFF"
              lineHeight="54px"
              fontFamily="Orbitron"
              fontWeight="700"
              textAlign={["center", "center", "start", "start"]}
            >
              WE BRING           <Text as="span" color="#AD1987">
              CREATIVE IDEAS
              </Text>
              
              &nbsp; TO LIFE.
            </Text>

            <Text
              fontSize={["10px", "10px", "21px", "21px"]}
              fontWeight="500"
              lineHeight="15px"
              fontFamily="Poppins"
              color="#AD1987"
            >
              We love Creating
            </Text>
            </Flex>
            <Box
              width="144px"
              border={[
                "1.5px solid white",
                "2px solid white",
                "3px solid white",
                "3px solid white",
              ]}
              alignSelf={["center", "center", "start", "start"]}
            ></Box>
            <Text
              color="#FFFFFF"
              fontSize={["10px", "10px", "21px", "21px"]}
              lineHeight="32px"
              fontFamily="Poppins"
              textAlign={["center", "center", "start", "start"]}
            >
              Lorem ipsumNeque porro quisquam est qui dolorem ipsum quia dolor
              sit amet, consectetur, adipisci velit Neque porro elit Neque porro
              quis ipsum
            </Text>
            <Button
              border="2px solid #AD1987"
              fontFamily="Poppins"
              fontSize="17px"
              lineHeight="26px"
              fontWeight="400"
              px="25px"
              py="10px"
              bgColor="transparent"
              color="white"
              width={["256px", "256px", "175px", "175px"]}
              alignSelf={["center", "center", "start", "start"]}
            //   mb="20px"
              _hover={{
                bgColor: "transparent",
                color: "green",
              }}
            >
              READ MORE
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default About;
