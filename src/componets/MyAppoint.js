import React from 'react'
import {
    Box,
    Center,
    useColorModeValue,
    FormControl,
    Input,
    FormLabel,

  } from '@chakra-ui/react';

function MyAppoint() {
  
  return (
    <> 
    <Center height={"100vh"} py={12}>

    
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        alignItems={"center"}
        >
       <FormControl mb="2">
          <FormLabel color="#076467" mb="1rem"><strong>اسم مقدم الخدمة :</strong></FormLabel>
          <Input readOnly type="text">محمد بدر</Input>
        </FormControl>
        <FormControl>
          <FormLabel color="#076467" mb="1rem"><strong>الوقت والتاريخ:</strong></FormLabel>
          <Input readOnly type="text">20 jul</Input>
        </FormControl>
      </Box>

      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        alignItems={"center"}
        >
       <FormControl mb="2">
          <FormLabel color="#076467" mb="1rem"><strong>اسم مقدم الخدمة :</strong></FormLabel>
          <Input readOnly type="text">سعد خالد</Input>
        </FormControl>
        <FormControl>
          <FormLabel color="#076467" mb="1rem"><strong>الوقت والتاريخ:</strong></FormLabel>
          <Input readOnly type="text">20 jul</Input>
        </FormControl>
      </Box>
    </Center>
    </>
  )
}

export default MyAppoint