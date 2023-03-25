import { Box, Flex, Image, Text, Img, Button } from "@chakra-ui/react";
import React from "react";

const Home = () => {
 

  return (
    <>
      {/* main container */}
      <Flex
        className="home_container"
        w="100%"
        h={["100%","100%","100vh","100vh",]}
        bgColor="black"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
     <Flex width={["100%","100%","72%","72%"]} height={["100%","100%","970px","970px"]} mt={["80px","90px","0px","0px"]} pt={["0px","0px","157px","157px"]} flexDirection={["column-reverse","column-reverse","row","row"]}>
      {/* left container */}
      <Flex  width={["80%","100%","50%","50%"]} flexDirection="column" gap={["20px","20px","43px","43px"]} pt={["0px","0px","130px","130px"]} textAlign={["center","center","start","start"]} mt="-50px" margin="auto">
           <Text fontSize={["10px","10px","21px","21px"]} fontWeight="500" lineHeight="32px" fontFamily="Poppins" color="#AD1987">Welcome to creatic</Text>
           <Text fontSize={["34px","34px","70px","70px"]}  color="#FFFFFF" lineHeight="109%" fontFamily="Poppins" textAlign={["center","center","start","start"]}>WE ARE  <Text as="span" color="#AD1987">CREATIVE</Text>  DESIGN AGENCY</Text>
           <Box width="144px" border={["1.5px solid #AD1987","2px solid #AD1987","3px solid #AD1987","3px solid #AD1987"]} alignSelf={["center","center","start","start"]}></Box>
           <Text color="#FFFFFF" fontSize={["10px","10px","21px","21px"]} lineHeight="32px" fontFamily="Poppins" textAlign={["center","center","start","start"]}>Lorem ipsumNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro elit Neque porro quis ipsum</Text>
           <Button border="2px solid #AD1987" fontFamily="Poppins" fontSize="17px" lineHeight="26px" px="25px" py="10px" bgColor="transparent" color="white" width={["256px","256px","175px","175px"]} alignSelf={["center","center","start","start"]} mb="20px">GET IN TOUCH</Button>
      </Flex>
      <Flex  width={["100%","100%","50%","50%"]} justifyContent="center">
        <Image src="images/homepik.png" alt="homepik" width={["328px","328px","655px","655px"]}/>
      </Flex>
     </Flex>
      </Flex>
    </>
  );
};

export default Home;