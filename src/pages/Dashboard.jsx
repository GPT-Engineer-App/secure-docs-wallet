import React from "react";
import { Box, Heading, VStack, Text, Button } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Box p={5}>
      <Heading mb={6}>Dashboard</Heading>
      <VStack spacing={4} align="stretch">
        <Text>Welcome to your document wallet dashboard!</Text>
        <Button colorScheme="teal">Add New Document</Button>
        <Button colorScheme="teal">View Documents</Button>
        <Button colorScheme="teal">User Profile</Button>
      </VStack>
    </Box>
  );
};

export default Dashboard;
