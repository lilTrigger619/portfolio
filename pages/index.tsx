import type { NextPage } from "next";
import Layout from "../components/layout";
import { BiLinkExternal } from "react-icons/bi";
import {
  ContextContainer,
  ReachOutForm,
  Bio,
  ProjectCard,
} from "../components/pages/homepage";
import {
  Box,
  Text,
  Button,
  List,
  ListItem,
  UnorderedList,
  useColorModeValue,
  Circle,
  Center,
  HStack,
  Image,
  useBreakpointValue,
  Divider,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";

export default function Home(): NextPage {
  const bp = useBreakpointValue(["xs", "sm", "md", "lg"]);
  return (
    <Layout page="about">
      <br />
      <Center
        width={bp == "xs" ? "100%" : "90%"}
        height="3rem"
        bg={useColorModeValue("gray.100", "blue.800")}
        p=".3rem"
        rounded=".7rem"
        align="center"
      >
        <Text as="h3" fontSize="1.2rem">
          Hi there i'm a full stack developer.
        </Text>
      </Center>
      <br />
      <Box width="100%">
        <Box
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-around"
        >
          <Box>
            <Text
              as="h4"
              fontSize="2.8rem"
              textDecoration="underline"
              fontWeight="900"
            >
              Opoku Shadrack.
            </Text>
            <Text as="p" fontSize="1.1rem">
              Artist / Developer / Linux Admin
            </Text>
          </Box>
          <Circle
            backgroundColor={useColorModeValue("gray.200", "blue.800")}
            size="7rem"
            margin=".8rem"
          >
            <Image src="/shadrack_face.svg" fit />
          </Circle>
        </Box>
      </Box>

      <ContextContainer title="About">
        <Text>
          Shadrack is a 21 years old student pursuing a degree at Ghana
          Communication Technology University (GCTU). He is currently based at
          Accra in Ghana with his family. Being the only child of his parents,
          he really got acquinted with his personal computer from a very young
          age. mostly for gaming and touch typing. Shadrack was then introduced
          to programming by a friend
          <Link href="#">
            {" "}
            link_to_phish_linkdin
          </Link>
          . On being enlightend for the first time about programming, he decided
          to venture into it. That was when the journey of a thousand miles
          began. Picking up course on udemy and following tutorials on youtube.
          He manage to find the best tech stack to get job done and has being
          growing his knowledge base ever since.
        </Text>
            <BiLinkExternal />

        <br />
        <Button
          size="md"
          variant="solid"
          bg={useColorModeValue("yellow.300", "teal.500")}
        >
          Hit me up
        </Button>
      </ContextContainer>

      <ContextContainer title="Skills">
        <UnorderedList>
          <ListItem>
            <strong>Skill highlights</strong>
          </ListItem>
          <Text>
            Web developer | Full-stack developer | Front-end development |
            Back-end developement | Linux system Administration.
          </Text>
          <br />
          <ListItem>
            <strong>
              Programming languages, frameworks and markup languages.
            </strong>
          </ListItem>
          <Text>
            Markdown (MD) | Html | Css | Javascript | Typescript | Python | C |
            React | Redux | Nextjs | Django | Django-rest-framework .
          </Text>
        </UnorderedList>
      </ContextContainer>

      {/*Bio*/}
      <ContextContainer title="Bio">
        <Bio />
      </ContextContainer>

      <ContextContainer title="Pinned projects">
        <SimpleGrid spacing="1rem" columns={[1, 2, 3]}>
          <ProjectCard
            image_src="/glock_blue.jpg"
            summary="Still not able
            to restore your session?
            Sometimes a tab is causing
            the issue. View previous
            tabs, remove the checkmark
            from the tabs you don’t
            need to recover, and
            then restore."
            title="Test title"
            langs={["js", "html", "js", "html", "css", "json", "sh"]}
          />
          <ProjectCard
            image_src="/glock_blue.jpg"
            summary="Still not able
            to restore your session?
            Sometimes a tab is causing
            the issue. View previous
            tabs, remove the checkmark
            from the tabs you don’t
            need to recover, and
            then restore."
            title="Test title"
            langs={["js"]}
          />
          <ProjectCard
            image_src="/glock_blue.jpg"
            summary="Still not able
            to restore your session?
            Sometimes a tab is causing
            the issue. View previous
            tabs, remove the checkmark
            from the tabs you don’t
            need to recover, and
            then restore."
            langs={["js"]}
            title="Test title"
          />
          <ProjectCard
            image_src="/glock_blue.jpg"
            summary="Still not able
            to restore your session?
            Sometimes a tab is causing
            the issue. View previous
            tabs, remove the checkmark
            from the tabs you don’t
            need to recover, and
            then restore."
            langs={["js"]}
            title="Test title"
          />
          <ProjectCard
            image_src="/glock_blue.jpg"
            summary="Still not able
            to restore your session?
            Sometimes a tab is causing
            the issue. View previous
            tabs, remove the checkmark
            from the tabs you don’t
            need to recover, and
            then restore."
            langs={["js"]}
            title="Test title"
          />
        </SimpleGrid>
        <br />
        <br />
        <Text textAlign="center" color="teal.500" textDecoration="underline">
          <Link href="#">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View all{" "}
            <strong>pinned projects</strong> and <strong>other projects</strong>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Link>
        </Text>
      </ContextContainer>

      <br />

      {/*contact form*/}
      <Divider />
      <ContextContainer title="Reach out">
        <ReachOutForm />
      </ContextContainer>
    </Layout>
  );
}
