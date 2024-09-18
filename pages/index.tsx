import { Container, Flex, VStack } from "@chakra-ui/react";
import Cart from "./src/sections/cart";
import Details from "./src/sections/details";

const IndexPage = () => (
  <Container maxWidth="container.xl" padding={0}>
    <Flex height="100vh" py={20}>
      <Details />
      <Cart />
    </Flex>
  </Container>
);

export default IndexPage;
