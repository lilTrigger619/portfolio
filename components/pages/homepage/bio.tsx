import {FC} from "react";
import {ListItem, UnorderedList, Text} from "@chakra-ui/react";

const BioSection:FC = () =>(
        <UnorderedList>
          <ListItem>2020 - Till date.</ListItem>
          <UnorderedList>
            <ListItem>
              {" "}
              <Text as="span" fontWeight="800">
                Web-developer
              </Text>{" "}
              <br />
              Building projects and applying for jobs.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="800">
                Tertiary .
              </Text>{" "}
              <br /> Ghana Communication Technology University(GCTU) (2020).
            </ListItem>
          </UnorderedList>
          <br />
          <ListItem>2016 - 2020.</ListItem>
          <UnorderedList>
            <ListItem>
              <Text as="span" fontWeight="800">
                Secondary school.
              </Text>{" "}
              <br /> Odorgonnoh Senior Secondary Schooo (OSSA) (2019).
            </ListItem>
            <ListItem>
              {" "}
              <Text as="span" fontWeight="800">
                Learning web development
              </Text>{" "}
              <br />
              Started learning web development
            </ListItem>
          </UnorderedList>
          <br />
          <ListItem>Birth - 2016.</ListItem>
          <UnorderedList>
            <ListItem>
              <Text as="span" fontWeight="800">
                Completed basic education.
              </Text>{" "}
              <br /> Little Roses preperatory school (2016).
            </ListItem>
          </UnorderedList>
        </UnorderedList>
  
)

export default BioSection;
