import {
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

const Details = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <VStack
      width="full"
      height="full"
      padding={10}
      spacing={10}
      alignItems="flex-start"
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your details</Heading>
        <Text>If you already have an account, click here to log in.</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} width="full">
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="John" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Doe" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="Baker Street 1" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="London" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select placeholder="Select country">
              <option value="uk">United Kingdom</option>
              <option value="us">United States</option>
              <option value="de">Germany</option>
              <option value="fr">France</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to billing address.</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button variant="primary" width="full" size="lg">
            Place Order
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Details;
