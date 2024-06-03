import React from "react";
import { Box, Heading, Input, VStack, Text } from "@chakra-ui/react";

const VerDocumentos = () => {
  return (
    <Box p={5}>
      <Heading as="h1" mb={5}>
        Ver Documentos
      </Heading>
      <Input placeholder="Pesquisar documentos..." mb={5} />
      <VStack spacing={4} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Documento 1</Heading>
          <Text mt={4}>Detalhes do documento 1...</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Documento 2</Heading>
          <Text mt={4}>Detalhes do documento 2...</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default VerDocumentos;
