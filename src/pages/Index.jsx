import { useState } from "react";
import { Container, Text, VStack, HStack, Button, Input, Box, IconButton, useToast, Tag, TagLabel, TagCloseButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Select, Input as ChakraInput } from "@chakra-ui/react";
import { FaPlus, FaTrash, FaShareAlt } from "react-icons/fa";

const Index = () => {
  const [documents, setDocuments] = useState([]);
  const [newDoc, setNewDoc] = useState({ name: "", category: "" });
  const [file, setFile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toast = useToast();

  const handleAddDocument = () => {
    if (newDoc.name && newDoc.category) {
      setDocuments([...documents, { ...newDoc, file }]);
      setNewDoc({ name: "", category: "" });
      setFile(null);
      setIsModalOpen(false);
      toast({
        title: "Documento adicionado.",
        description: "Seu documento foi adicionado com sucesso.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Erro.",
        description: "Por favor, preencha todos os campos.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleDeleteDocument = (index) => {
    const updatedDocs = documents.filter((_, i) => i !== index);
    setDocuments(updatedDocs);
    toast({
      title: "Documento removido.",
      description: "Seu documento foi removido com sucesso.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Wallet de Documentos</Text>
        <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={() => setIsModalOpen(true)}>
          Adicionar Documento
        </Button>
        <VStack spacing={2} width="100%">
          {documents.map((doc, index) => (
            <HStack key={index} width="100%" justifyContent="space-between" p={2} borderWidth="1px" borderRadius="md">
              <Box>
                <Text fontWeight="bold">{doc.name}</Text>
                <Tag size="sm" colorScheme="blue" mt={1}>
                  <TagLabel>{doc.category}</TagLabel>
                </Tag>
                {doc.file && (
                  <Tag size="sm" colorScheme="green" mt={1}>
                    <TagLabel>{doc.file.name}</TagLabel>
                  </Tag>
                )}
                {doc.file && (
                  <Tag size="sm" colorScheme="green" mt={1}>
                    <TagLabel>{doc.file.name}</TagLabel>
                  </Tag>
                )}
              </Box>
              <HStack spacing={2}>
                <IconButton aria-label="Compartilhar" icon={<FaShareAlt />} size="sm" />
                <IconButton aria-label="Deletar" icon={<FaTrash />} size="sm" onClick={() => handleDeleteDocument(index)} />
              </HStack>
            </HStack>
          ))}
        </VStack>
      </VStack>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Adicionar Documento</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="doc-name" isRequired>
              <FormLabel>Nome do Documento</FormLabel>
              <Input value={newDoc.name} onChange={(e) => setNewDoc({ ...newDoc, name: e.target.value })} />
            </FormControl>
            <FormControl id="doc-file" isRequired mt={4}>
              <FormLabel>Arquivo</FormLabel>
              <ChakraInput type="file" onChange={(e) => setFile(e.target.files[0])} />
            </FormControl>
            <FormControl id="doc-category" isRequired mt={4}>
              <FormLabel>Categoria</FormLabel>
              <Select placeholder="Selecione a categoria" value={newDoc.category} onChange={(e) => setNewDoc({ ...newDoc, category: e.target.value })}>
                <option value="Pessoal">Pessoal</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Financeiro">Financeiro</option>
                <option value="Outros">Outros</option>
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAddDocument}>
              Adicionar
            </Button>
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;
