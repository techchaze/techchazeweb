import jump from "jump.js";
import React, { useRef } from "react";

import {
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      {/* main container */}
      <Box position="absolute" left="0" top="0" w="100%" h="150px">
        <Flex
          justifyContent={["space-between", "space-between", "start", "start"]}
          alignItems="center"
          position="absolute"
          w="100%"
          pt="30px"
          gap={["0px", "0px", "432px", "432px"]}
        >
          <Box ml={["20px", "50px", "251px", "251px"]}>
            <Image
              src="images/navlogo.png"
              alt="LOGO"
              width={["100px", "60px", "118px", "118px"]}
              height={["100px", "46px", "92px", "92px"]}
              h="100%"
            />
          </Box>

          {/* Navbar container desktop */}
          <Flex
            flexDirection=""
            justifyContent="end"
            gap="2"
            pr="6"
            // ml={["400px","400px","432px","432px"]}
            display={["none", "none", "flex", "flex"]}
            position="relative"
          >
            <Button
              fontSize="21px"
              color="#FFFFFF"
              bgColor="transparent"
              fontWeight="500"
              lineHeight="32px"
              fontFamily="Poppins"
              link="latestblog"
              onClick={() => jump(".home_container", { duration: 1000 })}
             _hover={{
                bgColor:"transparent",
                color:"red"
             }}
            >
              Home
            </Button>
            <Button
              fontSize="21px"
              color="#FFFFFF"
              bgColor="transparent"
              fontWeight="500"
              lineHeight="32px"
              fontFamily="Poppins"
              onClick={() => jump(".about_container", { duration: 2000 })}
              _hover={{
                bgColor:"transparent",
                color:"red"
             }}
            >
              About Us
            </Button>
            <Button
              fontSize="21px"
              color="#FFFFFF"
              bgColor="transparent"
              fontWeight="500"
              lineHeight="32px"
              fontFamily="Poppins"
              onClick={() => jump(".service_container", { duration: 3000 })}
              _hover={{
                bgColor:"transparent",
                color:"red"
             }}
            >
              Service
            </Button>
            <Button
              fontSize="21px"
              color="#FFFFFF"
              bgColor="transparent"
              fontWeight="500"
              lineHeight="32px"
              fontFamily="Poppins"
              onClick={() => jump(".gallery_container", { duration: 4000 })}
              _hover={{
                bgColor:"transparent",
                color:"red"
             }}
            >
              Portfolio
            </Button>
            <Button
              fontSize="21px"
              color="#FFFFFF"
              bgColor="transparent"
              fontWeight="500"
              lineHeight="32px"
              fontFamily="Poppins"
              onClick={() => jump(".blogs_container", { duration: 5000 })}
              _hover={{
                bgColor:"transparent",
                color:"red"
             }}
            >
              Contact Us
            </Button>
            <Flex display={["none", "none", "flex", "flex"]} ml="17px">
            <svg width="100" height="40" viewBox="0 0 100 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="100" height="52" rx="26" fill="#AD1987"/>
<rect x="8" y="6" width="40" height="40" rx="20" fill="black"/>
<path d="M40.8 27.6083C40.5846 29.9396 39.7096 32.1613 38.2776 34.0135C36.8456 35.8657 34.9156 37.2717 32.7137 38.0671C30.5117 38.8625 28.1287 39.0143 25.8436 38.5047C23.5585 37.9952 21.4658 36.8454 19.8103 35.1899C18.1548 33.5345 17.005 31.4417 16.4955 29.1566C15.9859 26.8715 16.1377 24.4885 16.9331 22.2866C17.7285 20.0846 19.1345 18.1547 20.9867 16.7226C22.8389 15.2906 25.0606 14.4156 27.3919 14.2002C26.027 16.0467 25.3702 18.3219 25.541 20.6117C25.7117 22.9016 26.6987 25.0541 28.3224 26.6778C29.9461 28.3015 32.0986 29.2885 34.3885 29.4592C36.6784 29.63 38.9535 28.9732 40.8 27.6083Z" stroke="#AD1987" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </Flex>
          </Flex>

          <Box mr="20px" display={["flex", "flex", "none", "none"]}>
            <svg
              width="50"
              height="26"
              viewBox="0 0 50 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="50" height="26" rx="13" fill="#AD1987" />
              <rect x="4" y="3" width="20" height="20" rx="10" fill="black" />
              <path
                d="M20.4 13.8042C20.2923 14.9698 19.8548 16.0807 19.1388 17.0068C18.4228 17.9328 17.4578 18.6359 16.3568 19.0335C15.2558 19.4312 14.0644 19.5071 12.9218 19.2524C11.7792 18.9976 10.7329 18.4227 9.90513 17.595C9.07738 16.7672 8.50249 15.7209 8.24773 14.5783C7.99297 13.4357 8.06887 12.2443 8.46656 11.1433C8.86424 10.0423 9.56726 9.07733 10.4934 8.3613C11.4194 7.64528 12.5303 7.20782 13.696 7.1001C13.0135 8.02337 12.6851 9.16093 12.7705 10.3059C12.8559 11.4508 13.3494 12.5271 14.1612 13.3389C14.973 14.1507 16.0493 14.6442 17.1942 14.7296C18.3392 14.815 19.4767 14.4866 20.4 13.8042Z"
                stroke="#AD1987"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Box>

          {/* <IconButton
            ref={btnRef}
            colorScheme="teal"
            onClick={onOpen}
            aria-label="Search database"
            // icon={<HamburgerIcon />}
            bgColor="red"
            display={["flex", "flex", "none", "none"]}
            color="red"
            background="tranparent"
            fontSize="40px"
          /> */}
          <Button
            ref={btnRef}
            onClick={onOpen}
            aria-label="Search database"
            display={["flex", "flex", "none", "none"]}
            background="tranparent"
            position="absolute"
            top="300px"
            right="0px"
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="25" fill="#B0AFB1" />
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="#111111"
                fill-opacity="0.7"
              />
              <circle cx="25" cy="25" r="15" fill="#AD1987" />
            </svg>
          </Button>

          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent
              backdropFilter="blur(50px)"
              bg="#1A1110"
            >
              <DrawerCloseButton fontSize="30px" color="red" m="4" />

              {/* Navbar container desktop */}

              <Flex
                flexDirection="column"
                justifyContent="center"
                display={["flex", "flex", "none", "none"]}
                alignItems="center"
                height="100%"
              >
                <Button
color="white"
bgColor="transparent"                  onClick={() => {
                    onClose();
                    jump(".home_container", { duration: 1000 });
                  }}
                >
                  Home
                </Button>
                <Button
                  onClick={() => {
                    onClose();
                    jump(".about_container", { duration: 2000 });
                  }}
                  color="white"
bgColor="transparent"
                >
                  About Us
                </Button>
                <Button
                  onClick={() => {
                    onClose();
                    jump(".service_container", { duration: 3000 });
                  }}
                  color="white"
bgColor="transparent"
                >
                  Service
                </Button>
                <Button
                  onClick={() => {
                    onClose();
                    jump(".gallery_container", { duration: 4000 });
                  }}
                  color="white"
                  bgColor="transparent"
                >
                  Gallery
                </Button>
                <Button
                  onClick={() => {
                    onClose();
                    jump(".blogs_container", { duration: 5000 });
                  }}
                  color="white"
bgColor="transparent"
                >
                  Latest Blog
                </Button>
                <Link href="/contact">
                  <Button color="white"
bgColor="transparent">Contact </Button>
                </Link>
              </Flex>

              {/* ***************Navbar  footer mobile view******************** */}
              <DrawerFooter borderTopWidth="1px">
                <Flex
                  height="4vh"
                  width="100%"
                  justifyContent="space-evenly"
                  alignItems="center"
                  py="6"
                >
                  {/* <a
                    href={`tel:${settings?.contact}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      h="30px"
                      w="30px"
                      src="./images/viber.png"
                      alt="call icon"
                    />
                  </a>
                  <a
                    href={`https://wa.me/91${settings?.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      h="30px"
                      w="30px"
                      src="./images/whatsapp.png"
                      alt="whatsapp icon"
                    />
                  </a>
                  <a
                    href={`mailto:${settings?.email}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      h="30px"
                      w="30px"
                      src="./images/gmail.png"
                      alt="gmail icon"
                    />
                  </a>
                  <a
                    href={settings?.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      h="30px"
                      w="30px"
                      src="./images/instagram.png"
                      alt="instagram icon"
                    />
                  </a> */}
                </Flex>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
