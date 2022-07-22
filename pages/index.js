import {
  Box,
  HStack,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Head from "next/head";
import { MdOutlineEmail } from "react-icons/md";
import { BiLocationPlus, BiWorld } from "react-icons/bi";
import { AiFillGithub, AiOutlinePhone } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { ImLinkedin } from "react-icons/im";


export default function Home() {
  return (
    <>
      <Head>
        <title>Viashima Collins CV</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/cv.PNG" />
      </Head>
      <Box border={"1px solid gray"} mb={{ base: "40px", md: "40px" }} mx='10%'>
        <Box bg="gray.700" textAlign={"center"}>
          <Text
            color="white"
            fontWeight={"500"}
            lineHeight="80px"
            letterSpacing="15px"
            fontSize={{ base: "3xl", md: "5xl" }}
          >
            VIASHIMA COLLINS
          </Text>
          <Text
            pb="20px"
            color="white"
            fontWeight={"400"}
            letterSpacing="4px"
            fontSize={{ base: "sm", md: "2xl" }}
          >
            SOFTWARE ENGINEER
          </Text>
        </Box>

        <Stack w={"100%"} direction={{ base: "column", md: "row" }}>
          <Box w={{ base: "100%", md: "35%" }} pt="50px" bg={"#f7f7f7"}>
            <HStack textAlign={{ base: "left", md: "right" }} mb="30px">
              <Text
                pl={{ base: "20px" }}
                w="100%"
                pr="20px"
                letterSpacing="2px"
                color={"black"}
                fontSize="2xl"
                fontWeight="bold"
              >
                CONTACT
              </Text>
            </HStack>

            <HStack
              textAlign={{ base: "left", md: "right" }}
              pb="6px"
              pr="20px"
            >
              <Link
                _hover={{ textDecoration: "none" }}
                href="mailto:vnongu@gmail.com"
                pl={{ base: "20px" }}
                w="100%"
                color={"#007bff"}
              >
                vnongu@gmail.com
              </Link>
              <MdOutlineEmail />
            </HStack>
            <HStack
              textAlign={{ base: "left", md: "right" }}
              pb="6px"
              pr="20px"
            >
              <Link
                href="tel:+23480-3094-7177"
                pl={{ base: "20px" }}
                w="100%"
                color={"#007bff"}
              >
                +2348070714328
              </Link>
              <AiOutlinePhone />
            </HStack>
            <HStack
              textAlign={{ base: "left", md: "right" }}
              pb="6px"
              pr="20px"
            >
              {/* <Spacer /> */}
              <Text pl={{ base: "20px" }} w="100%" color={"black"}>
                Nigeria
              </Text>{" "}
              <BiLocationPlus />
            </HStack>
            <HStack
              textAlign={{ base: "left", md: "right" }}
              pb="6px"
              pr="20px"
            >
              <Link
                w="100%"
                _hover={{ textDecoration: "none" }}
                cursor={"pointer"}
                as={Link}
                href="https://twitter.com/CollinsViashima"
              >
                <Text pl={{ base: "20px" }} w="100%" color={"#007bff"}>
                  Twitter
                </Text>{" "}
              </Link>
              <FiTwitter />
            </HStack>
            <HStack
              textAlign={{ base: "left", md: "right" }}
              pb="6px"
              pr="20px"
            >
              <Link
                w="100%"
                _hover={{ textDecoration: "none" }}
                cursor={"pointer"}
                as={Link}
                href="https://github.com/clins10"
              >
                <Text pl={{ base: "20px" }} w="100%" color={"#007bff"}>
                  Github
                </Text>{" "}
              </Link>
              <AiFillGithub />
            </HStack>
            <HStack
              textAlign={{ base: "left", md: "right" }}
              mb="30px"
              pb="6px"
              pr="20px"
            >
              <Link
                w="100%"
                _hover={{ textDecoration: "none" }}
                cursor={"pointer"}
                as={Link}
                href="https://www.linkedin.com/in/collinsv/"
              >
                <Text pl={{ base: "20px" }} w="100%" color={"#007bff"}>
                  Linkedin
                </Text>{" "}
              </Link>
              <ImLinkedin/>
            </HStack>

            <HStack
              textAlign={{ base: "left", md: "right" }}
              mb="25px"
              w="100%"
            >
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="2xl"
                fontWeight="bold"
              >
                EDUCATION
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
                fontWeight="bold"
              >
                Bachelor of Science
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
                // fontWeight="bold"
              >
                Computer Science
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
                // fontWeight="bold"
              >
                Benue State University
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
                // fontWeight="bold"
              >
                2013 - 2018
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
              >
                Makurdi, Benue State.
              </Text>
            </HStack>

            <HStack
              textAlign={{ base: "left", md: "right" }}
              mt="40px"
              mb="8px"
              w="100%"
            >
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="2xl"
                fontWeight="bold"
                mt ='60px'
              >
                SKILLS
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="1px"
                color={"black"}
                fontSize="lg"
              >
                JavaScript
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
              >
                React Js
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="1px"
                color={"black"}
                fontSize="lg"
              >
                Next Js
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="1px"
                color={"black"}
                fontSize="lg"
              >
                Laravel
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="1px"
                color={"black"}
                fontSize="lg"
              >
                Python/Django
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="1px"
                color={"black"}
                fontSize="lg"
              >
                Chackra UI
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="1px"
                color={"black"}
                fontSize="lg"
              >
                Bootstrap
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="1px"
                color={"black"}
                fontSize="lg"
              >
                MYSQL
              </Text>
            </HStack>

            <HStack
              textAlign={{ base: "left", md: "right" }}
              mt="40px"
              mb="8px"
              w="100%"
            >
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="1px"
                color={"black"}
                fontSize="2xl"
                fontWeight="bold"
                
              >
                UDEMY
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
              >
                Data structure and
              </Text>
            </HStack>
            <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
              <Text
                pr="20px"
                pl={{ base: "20px" }}
                w="100%"
                letterSpacing="2px"
                color={"black"}
                fontSize="lg"
              >
                Algorithm
              </Text>
            </HStack>
          </Box>
          <Box w={{ base: "100%", md: "75%" }} pt="50px" bg="white">
            <Text
              mb="30px"
              pl="20px"
              letterSpacing="2px"
              color={"black"}
              fontSize="2xl"
              fontWeight="bold"
            >
              PERSONAL SUMMARY
            </Text>

            <Text
              pr={{ base: "20px", md: "20px" }}
              pl={{ base: "20px", md: "20px" }}
            >
              I am a gritty and goal driven software Engineer with 1+ years of
              industry experience. Proficient in JavaScript, ReactJs, SQL/MYSQL,
              Chakra UI, and Bootstrap.<br/><br/>
              I have a strong desire to make a positive impact in any
              organization with my technical and soft skill, and good work etiquette. I am apt to learn,
              unlearn, and relearn while delivering efficient services.
              Currently learning C and Python/Django at ALX and SE at AltSchool Africa.
              
            </Text>

            <Text
              mt="60px"
              mb="10px"
              pl="20px"
              letterSpacing="2px"
              color={"black"}
              fontSize="2xl"
              fontWeight="bold"
            >
              WORK EXPERIENCE
            </Text>
            
            <Text fontSize={"2xl"} fontWeight="500" pl="20px" mt='20px'>
              Full Stack Intern (Remote).
            </Text>
            <Text fontSize={"xl"} fontWeight="400" pl="20px">
              I4G+Zuri Inc.
            </Text>
            <Text mb="15px" fontSize={"xl"} fontWeight="400" pl="20px">
              May 2022 - Present.
            </Text> 
            <UnorderedList mb="25px" pr="20px" pl="40px">
              <ListItem>
                conversion of UI designs to fully responsive, pixel perfect and optimized web pages using semantic HTML5 and CSS3.
              </ListItem>
              <ListItem>
                Implementation of web functionalities using Python/Danjo and JavaScript.
              </ListItem>
              <ListItem>
                initiating git pull requests and merging them to the master branch.
                and collaborating with the team to ensure the code is clean and well structured.
              </ListItem>
              <ListItem>Consumption of API’s</ListItem>
            </UnorderedList>

            <Text fontSize={"2xl"} fontWeight="500" pl="20px" mt='20px'>
              Frontend developer
            </Text>
            <Text fontSize={"xl"} fontWeight="400" pl="20px">
              ITskillsCenter
            </Text>
            <Text mb="15px" fontSize={"xl"} fontWeight="400" pl="20px">
              Oct 2021 - Apr 2022.
            </Text>

            <UnorderedList mb="25px" pr="20px" pl="40px">
              <ListItem>
                Assisted in converting an old website (https://eespace.com.ng)
                to new (https://staging.eespace.com.ng)
              </ListItem>
              <ListItem>
                Building both desktop and mobile friendly web apps interfaces.
              </ListItem>
              <ListItem>
                Review codes and ensure quality of designs and implementations,
                and advocating clarity within the team
              </ListItem>
              <ListItem>Consumption of API’s</ListItem>
            </UnorderedList>

          
            <Text fontSize={"2xl"} fontWeight="500" pl="20px">
              IT Instructor
            </Text>
            <Text fontSize={"xl"} fontWeight="400" pr="150px" pl="20px">
              Ideal Surge Computer institute
            </Text>
            <Text fontSize={"xl"} fontWeight="400" pl="20px">
              2020 - June 2021
            </Text>
            <Text mb="15px" fontSize={"xl"} fontWeight="400" pl="20px">
              Makurdi, Benue, Nigeria
            </Text>

            <UnorderedList mb="25px" pr="20px" pl="40px">
              <ListItem>Network, software and hardware maintenance</ListItem>
              <ListItem>
                Provided guidance to students at the institution, on how to carried out assigned tasks
        
              </ListItem>
              <ListItem>
                Configuring and supporting company’s computers in LAN/WAN
                environment
              </ListItem>
              <ListItem>
                Providing technical support via phone, email and remotely
              </ListItem>
              <ListItem>
                Installation and configuration of Routers, Switches and cabling
              </ListItem>
              <ListItem>provide lectures to students</ListItem>
            </UnorderedList>

            <Text fontSize={"xl"} fontWeight="500" pl="20px" pt ='10px'>
              IT Intern
            </Text>
            <Text fontSize={"xl"} fontWeight="400" pr="150px" pl="20px">
              Geemla Technologies
            </Text>
            <Text fontSize={"xl"} fontWeight="400" pl="20px">
              June 2015 - Jan 2016
            </Text>
            <Text mb="15px" fontSize={"xl"} fontWeight="400" pl="20px">
              144 High-Level, Makurdi, Benue State
            </Text>

            <UnorderedList mb="40px" pr="20px" pl="40px">
              <ListItem>Basic PHP and Java</ListItem>
              <ListItem>
                Basics of Networking  LAN/WAN
                environment
              </ListItem>
              <ListItem>
                Installation and configuration of Routers, Switches and cabling
              </ListItem>

              <ListItem>Network troubleshooting</ListItem>
            </UnorderedList>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
