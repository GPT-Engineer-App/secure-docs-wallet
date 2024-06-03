import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {};

  return (
    <Box p={5} maxW="md" mx="auto" mt={10}>
      <Heading mb={6}>Login</Heading>
      <VStack spacing={4}>
        <FormControl id="email" isRequired>
          <FormLabel>Email/Username</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" onClick={handleLogin}>
          Login
        </Button>
        <Link as={RouterLink} to="/forgot-password" color="teal.500">
          Forgot Password?
        </Link>
      </VStack>
    </Box>
  );
};

export default Login;
