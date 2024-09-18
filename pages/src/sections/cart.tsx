import {
  Heading,
  VStack,
  HStack,
  Text,
  SimpleGrid,
  GridItem,
  Button,
  Divider,
  AspectRatio,
  Image,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whileAlpha.50");
  const secondaryTextColor = useColorModeValue("gray.500", "gray.400");
  return (
    <VStack
      width="full"
      height="full"
      padding={10}
      spacing={10}
      alignItems="flex-start"
      background={bgColor}
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your cart</Heading>
        <Text>
          If price is too hard for your eyes,{" "}
          <Button onClick={toggleColorMode} variant="link" colorScheme="black">
            try changeing the theme.
          </Button>
        </Text>
      </VStack>
      <HStack width="full" spacing={6} alignItems="center">
        <AspectRatio ratio={1} width={24}>
          <Image src="/images/1.png" alt="Product" borderRadius="md" />
        </AspectRatio>
        <Stack
          direction="row"
          width="full"
          spacing={0}
          alignItems="center"
          justifyContent="space-between"
        >
          <VStack width="full" spacing={0} alignItems="flex-start">
            <Heading size="md">Product</Heading>
            <Text color={secondaryTextColor}>PRDT345609-2015</Text>
          </VStack>
          <Heading size="sm" textAlign="end">
            $119.00
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems="stretch" width="full">
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size="sm">$19.99</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Taxes (estimated)</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent="space-between" width="full">
        <Text color={secondaryTextColor}>Total</Text>
        <Heading size="lg">$162.79</Heading>
      </HStack>
    </VStack>
  );
};

export default Cart;
