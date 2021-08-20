import * as React from "react";
import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      position="fixed"
      left={0}
      right={0}
      bottom={0}
      textAlign="center"
      height="max-content"
      width="max-content"
      margin="auto"
      fontSize="md"
      p={3}
    >
      Website built with
      <Box
        as="span"
        mx="2"
        _before={{
          cursor: "default",
          content: '"❤️"'
        }}
        _hover={{
          _before: {
            content: '"☕️"'
          }
        }}
      />
      by <a href="https://github.com/blacky-yg" target="_blank">Blacky</a>
    </Box>
  );
};

export default Footer;
