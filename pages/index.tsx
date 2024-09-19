import { Container, Flex, VStack } from "@chakra-ui/react";
import Cart from "./src/sections/cart";
import Details from "./src/sections/details";
import { base } from "framer-motion/client";

const IndexPage = () => (
  <Container maxWidth="container.xl" padding={0}>
    <Flex
      height={{ base: "auto", md: "100vh" }}
      py={[0, 10, 20]}
      direction={{ base: "column-reverse", md: "row" }}
    >
      <Details />
      <Cart />
    </Flex>
  </Container>
);

export default IndexPage;
