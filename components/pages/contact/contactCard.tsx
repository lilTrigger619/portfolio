import { Box, Circle, Text, Table, Tbody, Tr, Td, Flex } from "@chakra-ui/react";

const ContactCard = () => {
  return (
    <>
      <Box
        width={["100%", "80%"]}
        height="auto"
        rounded="lg"
        border="1px solid gray"
      >
        <Box backgroundColor="red" minHeight="9rem"></Box>
        <Box
          width="100%"
          position="relative"
          bottom="5rem"
        >
          <Circle
            backgroundColor="yellow"
            size="12rem"
            //margin="0px"
            padding="0px"
            margin="auto"
          ></Circle>
          <br/> 
          <Text align="center" as="h3" fontWeight="600">Shadrack Opoku</Text>
					<Flex direction="column" justifyContent="center" alignItems="center">
					<Table>
						<Tbody>
							<Tr>
								<Td><Text align="center">Hello</Text></Td>
								<Td><Text align="center">Hello</Text></Td>
							</Tr>
						</Tbody>
					</Table>
					</Flex>
        </Box>
      </Box>
    </>
  );
};

export default ContactCard;
