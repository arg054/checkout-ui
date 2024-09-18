import { Container, Flex, VStack } from "@chakra-ui/react";
import Cart from "./src/sections/cart";
import Details from "./src/sections/details";

//current lesson: 5 implement responsive design in chakra ui

const IndexPage = () => (
  <Container maxWidth="container.xl" padding={0}>
    <Flex height="100vh" py={20}>
      <Details />
      <Cart />
    </Flex>
  </Container>
);

export default IndexPage;
