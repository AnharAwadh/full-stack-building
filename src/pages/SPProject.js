import React from 'react'
import {
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
import Comments from '../componets/Comments';
import AddProject from '../componets/AddProject';

  
function SPProject() {
    const array = [
        {
          id: 1,
          text: "فلة تحدي",
          details: "The project board is an exclusive resource for contract work. It'sperfect for freelancers, agencies, and moonlighters." ,
          img: "https://www.ubm-development.com/magazin/wp-content/uploads/2020/03/kl-main-building-d-Kopie.jpg"
        },
        {
            id: 2,
            text: "فلة تحدي",
            details: "The project board is an exclusive resource for contract work. It'sperfect for freelancers, agencies, and moonlighters." ,
            img: "https://www.ubm-development.com/magazin/wp-content/uploads/2020/03/kl-main-building-d-Kopie.jpg"
          },
        {
        id: 3,
        text: "فلة تحدي",
        details: "The project board is an exclusive resource for contract work. It'sperfect for freelancers, agencies, and moonlighters." ,
        img: "https://www.ubm-development.com/magazin/wp-content/uploads/2020/03/kl-main-building-d-Kopie.jpg"
        },
        
      ];
  return (
    <>
   
    <Flex m={"4rem"} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Stack maxH={'40vh'} flex={2}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://usernameproperties.com/blog/wp-content/uploads/2021/12/New-Project-1-1024x576.webp'
          }
        />
      </Stack>
      <Stack maxH={'40vh'} p={8} flex={2} align={'center'} justify={'center'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'auto',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: '#076467',
                zIndex: -1,
              }}>
              Freelance
            </Text>
            <br />{' '}
            <Text color={'#076467'} as={'span'}>
              Design Projects
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'black'}>
            <strong>
                The project board is an exclusive resource for contract work. It's
                perfect for freelancers, agencies, and moonlighters.
            </strong>
          </Text>
          <Button  
            as={"a"} 
            href=""
            loadingText="Submitting"
            size="lg"
            bg={"#076467"}
            color={"white"}
            _hover={{
            bg: "#076467",
            }}
            >
            حذف المشروع 
          </Button>
      </Stack>
    </Flex>
    

    <Center>
      <Button  
      as={"a"} 
      href="/add-project"
      loadingText="Submitting"
      m={"2rem"}
      w={'30%'}
      size="md"
      bg={"#076467"}
      color={"white"}
      _hover={{
      bg: "#076467",
      }}
      >
      إضافة مشروع  
      </Button>
    </Center>


    </>
    )
}

export default SPProject