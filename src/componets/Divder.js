import React from 'react'
import { Box, Container, Divider, HStack, Text } from '@chakra-ui/react'


const Divder = () => {
  return (
    <Box bg="bg-surface">
    <Container py={{ base: '4', md: '8' }}>
      <HStack>
        <Divider />
        <Text fontSize="lg" fontWeight="medium" whiteSpace="nowrap">
        </Text>
        <Divider />
      </HStack>
    </Container>
  </Box>
  )
}

export default Divder