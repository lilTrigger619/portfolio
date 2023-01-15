import { FC } from "react";
import { Box, Text, Link, HStack, Image, Divider, StackDivider } from "@chakra-ui/react";
import NextLink from "next/link";

interface projectCardProps {
  image_src: string;
  title: string;
  summary: string;
  langs: [string];
}

const ProjectCard: FC<projectCardProps> = ({ image_src, summary, langs, title }) => (
  <Box maxWidth="14rem" border="1px solid gray" height="auto" rounded="5px">
    <Image src={image_src} fit="cover" width="100%" height="5rem" />
    <Box padding=".5rem">
      <Text fontWeight="600" as="h3">{title}</Text>
      <Text as="p" fontSize=".8rem">
        {summary.substring(0, 120).length == summary.length
          ? summary
          : summary.substring(0, 120) + "  ...."}
        <br />
        <Link as={NextLink} href="#" color="teal.500">
          Show more
        </Link>
      </Text>
      <br />
      <Divider mb=".5rem"/>
      <HStack wrap="wrap" fontSize=".8rem" divider={<StackDivider/>}>
        {langs.map((lang, key) => (
          <Text>{lang}</Text>
        ))}
      </HStack>
    </Box>
  </Box>
);

export default ProjectCard;
