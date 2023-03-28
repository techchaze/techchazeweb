import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Portfolio = () => {
  return (
    <Flex bg="black" height="100vh" width="100%">
      {/* HEader container */}

      <Flex
        height="100%"
        width="100%"
        justifyContent="center"
        alignItems="center"
        border="2px solid white"
        flexDirection="column"
      >
        <Text
          fontFamily="Orbitron"
          fontStyle="normal"
          fontWeight="700"
          fontSize={["25px", "25px", "50px", "50px"]}
          color="#FFFFFF"
          lineHeight="109%"
          textAlign="center"
        >
          ENJOY OUR
          <Text as="span" color="#AD1987">
            LATEST
          </Text>
          <br />
          PROJECTS
        </Text>

        <Flex alignItems="center" pt={["34px","34px","50px","50px"]} gap={["10px","10px","14px","14px"]}>
          <Box border={["1px solid white","1px solid white","2px solid white","2px solid white"]} width="97px" height="0px"></Box>
          <Text
            fontFamily="Poppins"
            fontStyle="normal"
            fontWeight="500"
            fontSize={["15px","15px","21px","21px"]}
            lineHeight="32px"
            color="#AD1987"
          >
            our WORK
          </Text>
          <Box border={["1px solid white","1px solid white","2px solid white","2px solid white"]} width="97px" height="0px"></Box>

        </Flex>
      </Flex>
    </Flex>
  );
};

export default Portfolio;
