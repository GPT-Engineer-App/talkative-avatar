import React from "react";
import { Box, Button, Text, Image, VStack, Heading } from "@chakra-ui/react";
import { FaMicrophone, FaVolumeUp } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5} textAlign="center">
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Interactive AI Avatar
        </Heading>
        <Image src="https://images.unsplash.com/photo-1633957897986-70e83293f3ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMGF2YXRhcnxlbnwwfHx8fDE3MTM3MTY2MDN8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxSize="150px" alt="AI Avatar" />
        <Text>Interact with our AI-powered avatar using voice commands!</Text>
        <Box d="flex" alignItems="center" justifyContent="center" gap="20px">
          <Button leftIcon={<FaMicrophone />} colorScheme="blue">
            Speak to Avatar
          </Button>
          <Button leftIcon={<FaVolumeUp />} colorScheme="green">
            Listen to Avatar
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
