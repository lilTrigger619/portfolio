import type { NextPage } from "next";
import Layout from "../components/layout";
import { BiLinkExternal } from "react-icons/bi";
import {
  ContextContainer,
  ReachOutForm,
  Bio,
  BlogCard,
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
	//ObjectFit,
} from "@chakra-ui/react";
import type {ResponsiveValue} from "@chakra-ui/react";

export default function HomeOrAbout <NextPage> (){
  const bp = useBreakpointValue(["xs", "sm", "md", "lg"]);
  return (
    <Layout>
		<>
      <br />
      <Center
        width={bp == "xs" ? "100%" : "90%"}
        height="3rem"
        bg={useColorModeValue("gray.100", "blue.800")}
        p=".3rem"
        rounded=".7rem"
      >
        <Text as="h3" fontSize="1.2rem">
          Hi there i&apos;m a full stack developer.
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
              Developer / Linux Enthusiast / Entreprenuer
            </Text>
          </Box>
          <Circle
            backgroundColor={useColorModeValue("gray.200", "blue.800")}
            size="7rem"
            margin=".8rem"
          >
            <Image src="/shadrack_face.svg" fit={true as any} alt="Shadrack's profile image"/>
          </Circle>
        </Box>
      </Box>

      <ContextContainer title="About">
			<>
        <Text>
          Shadrack is a {new Date().getFullYear() - 2002} year old guy who loves being creative with a computer. 
					He is a passionate developer with a love for Linux open source and web development. He believes in the power of collaboration 
					and the benefits of sharing knowledge to improve technology for everyone. 
					This portfolio showcases his expertise in developing innovative solutions with a focus on efficiency, security, and scalability.
					He is constantly learning and exploring new technologies, and really excited to bring his skills to your next project
        </Text>
        <br />
        <Button
          size="md"
          variant="solid"
          bg={useColorModeValue("yellow.300", "teal.500")}
        >
          Hit me up
        </Button>
				</>
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

			<ContextContainer title="Projects">
			<>
			</>
			</ContextContainer>

      <ContextContainer title="Blog posts">
			<>
        <SimpleGrid spacing="1rem" columns={[1, 2, 3]}>
          <Center>
          <BlogCard
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
          </Center>
          <Center>
          <BlogCard
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
          </Center>
          <Center>
          <BlogCard
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
          </Center>
          <Center>
          <BlogCard
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
          </Center>
          <Center>
          <BlogCard
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
          </Center>
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
				</>
      </ContextContainer>

      <br />

      {/*contact form*/}
      <Divider />
      <ContextContainer title="Reach out">
        <ReachOutForm />
      </ContextContainer>
			</>
    </Layout>
  );
}
