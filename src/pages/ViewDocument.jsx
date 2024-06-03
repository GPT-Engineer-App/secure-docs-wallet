import React from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";

const ViewDocument = () => {
  const { id } = useParams();

  return (
    <Box p={5}>
      <Heading>Document ID: {id}</Heading>
      <Text>This is where the document content will be displayed.</Text>
    </Box>
  );
};

export default ViewDocument;
