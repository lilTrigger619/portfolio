import type { FC } from "react";
import { useState } from "react";
import { Box, FormControl, FormControlLabel, Input, Textarea, Button } from "@chakra-ui/react";

const Form: FC<{ email: string; message: string }> = () => {
  const [input, setInput] = useState({
    email: "",
    message: "",
  });

  return (
    <>
      <Box my="1rem">
        <FormControl>
          <Box my=".8rem">
            <Input placeholder="email" type="email" label="email" />
          </Box>
          <Textarea marginBottom=".8rem" placeholder="send me a message *not required"></Textarea>
          <Button variant="solid">Submit</Button>
        </FormControl>
      </Box>
    </>
  );
};

export default Form;
