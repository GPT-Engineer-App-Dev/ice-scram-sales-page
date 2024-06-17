import { Container, Text, VStack, Box, Heading, Button, Image } from "@chakra-ui/react";
import { FaIceCream } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Ice Cream Delight
          </Heading>
          <Text fontSize="lg">The best ice cream in town!</Text>
        </Box>
        <Image src="/images/ice-cream.jpg" alt="Delicious Ice Cream" boxSize="300px" objectFit="cover" borderRadius="full" />
        <Button colorScheme="teal" size="lg" leftIcon={<FaIceCream />}>
          Order Now
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;