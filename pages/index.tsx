import type {NextPage} from "next";
import Layout from "../components/layout";
import {HeroSection, ContextContainer} from "../components/pages/homepage";
import {Box, Text} from "@chakra-ui/react";

export default function Home():NextPage{
  return (
    <Layout>
      <HeroSection imageLocation=""/>
      <Box>
        <Text>Hi there i'm Shadrack Opoku </Text>
        <Text>A full-Stack developer</Text>
      </Box>

      <ContextContainer title="Work">
        hello
      </ContextContainer>
    </Layout>
  )
}

