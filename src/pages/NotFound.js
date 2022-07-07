import { Box, Heading, Text, Button } from '@chakra-ui/react';

export default function NotFound() {
  return (
    <>
    <Box spacing={8} mx={"auto"} maxW={["sm","sm","lg"]} height={"100vh"} textAlign="center" py={"8rem"} w={'full'}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, #076467, #076467)"
        backgroundClip="text">
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        <strong>Page Not Found</strong>
      </Text>
      <Text color={"black"} mb={6}>
        The page you're looking for does not seem to exist
      </Text>

      <Button
        colorScheme="#076467"
        bgGradient="linear(to-r, #076467, #076467, #076467)"
        color="white"
        variant="solid"
        as={"a"}
        href="/"
        >
        Go to Home
      </Button>
    </Box>
    </>
  );
}