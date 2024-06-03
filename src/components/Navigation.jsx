import { Link } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";

function Navigation() {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between">
        <Button as={Link} to="/" colorScheme="teal" variant="ghost">
          Home
        </Button>
        <Button as={Link} to="/seus-documentos" colorScheme="teal" variant="ghost">
          Seus Documentos
        </Button>
        <Button as={Link} to="/usuario" colorScheme="teal" variant="ghost">
          Usuário
        </Button>
        <Button as={Link} to="/dashboard" colorScheme="teal" variant="ghost">
          Dashboard
        </Button>
        <Button as={Link} to="/login" colorScheme="teal" variant="ghost">
          Login
        </Button>
      </Flex>
    </Box>
  );
}

export default Navigation;
