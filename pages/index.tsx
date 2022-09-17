import type { NextPage } from "next";
import Layout from "../components/layout";
import { HeroSection, ContextContainer, ReachOutForm } from "../components/pages/homepage";
import {
  Box,
  Text,
  Button,
  List,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

export default function Home(): NextPage {
  return (
    <Layout>
      <HeroSection imageLocation="" />
      <Box>
        <Text>Hi there i'm Shadrack Opoku </Text>
        <Text>A full-Stack developer based in Ghana gh_flag_icon </Text>
      </Box>

      <ContextContainer title="Work">
        <Text>
          A highly skilled website and web-app developer with lots of experience
          in the world of programming. I'm well versed in building real world
          scalable and robust web applications for both individuals and
          entreprises, ranging from sole-proprietorships to large-scale
          corporations. Have an idea for a startup?{" "}
          <Button
            size="sm"
            variant="solid"
            color="white"
            backgroundColor="teal.500"
          >
            Hit me up
          </Button>
        </Text>
      </ContextContainer>

      {/*get in touch*/}
      <ContextContainer title="skills">
        <UnorderedList>
          <ListItem>Languages</ListItem>
          <UnorderedList>
            <ListItem>html, css</ListItem>
            <ListItem>Javascript</ListItem>
            <ListItem>Python</ListItem>
            <ListItem>Java</ListItem>
            <ListItem>C/C++</ListItem>
          </UnorderedList>

          <ListItem>Frameworks (for making work faster).</ListItem>
          <UnorderedList>
            <ListItem>React / Nextjs</ListItem>
            <ListItem>Django / Django-rest-framework</ListItem>
            <ListItem>Bootstrap</ListItem>
            <ListItem>Chakra-ui</ListItem>
            <ListItem>Material-ui</ListItem>
          </UnorderedList>
        </UnorderedList>
      </ContextContainer>


      {/*contact form*/}
      <ContextContainer title="Reach out">
        <ReachOutForm/>
      </ContextContainer>
    </Layout>
  );
}
