import { Container, Flex, VStack } from "@chakra-ui/react";

const IndexPage = () => (
  <Container maxWidth="container.xl" padding={0}>
    <Flex height="100vh" py={20}>
      <VStack
        width="full"
        height="full"
        padding={10}
        spacing={10}
        alignItems="flex-start"
      ></VStack>
      <VStack
        width="full"
        height="full"
        padding={10}
        spacing={10}
        alignItems="flex-start"
        background={"gray.50"}
      ></VStack>
    </Flex>
  </Container>
);

export default IndexPage;
