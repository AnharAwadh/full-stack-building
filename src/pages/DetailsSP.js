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

  
const DetailsSP = () => {

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
   
    <Flex m={"4rem"} minH={'100vh'} direction={{ base: 'column', md: 'row' }} backgroundImage={""}>
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
              مشروع  
            </Text>
            <br />{' '}
            <Text color={'#076467'} as={'span'}>
             الماجدية ١٢١
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'black'}>
            <p><strong>
            يدعم ⁦‪مشروع‬⁩ ⁦‪الماجدية‬⁩ ١٢١ توجهنا في أن نصبح يد العون الأولى فيما يخص المساكن والعقارات، بمواصفات ومقاييس تتناسب مع احتياجات العميل وتطلعاته، مُظهراً التزام ⁦‪الماجدية‬⁩ بمعايير جودة الحياة وحرصها على تحقيق رغبات المتملك لمنزله.
            </strong></p>

            
          </Text>
      </Stack>
    </Flex>
  

    {/* <Comments/> */}
    </>
    )
}

export default DetailsSP