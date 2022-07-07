import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Center,
  HStack
} from '@chakra-ui/react';
import '../img/n86.png';

const Testimonial = ({ children }) => {
  return <Box align={'center'}>{children}</Box>;
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};


const Team = () => {
  return (
   
    <Box id={"app-team"} width={"100%"} bg={useColorModeValue('#E5E5E5', 'gray.700')}  align={'center'}>
    <Container py={12} spacing={8} align={'center'}>
        <Heading color={"#5E5542"}>فريق العمل</Heading>
      <Flex
      direction={{ base: 'column', md: 'row' }}
        spacing={{ base: 10, md: 4, lg: 10 }}
         align={'center'}
      >
      <HStack
        mr={["2rem","6.5rem"]}
        >
        <Testimonial align={'center'}>
          <TestimonialAvatar
            src={'../img/n86.png'
        }
            name={'أنهار اللهيبي'}
            title={'علوم حاسب'}
          />
        </Testimonial>
        <Testimonial>
          <TestimonialAvatar
            src={
              ''
            }
            name={'نجود المبارك'}
            title={'تقنية المعلومات'}
          />
        </Testimonial>
        <Testimonial>
        
          <TestimonialAvatar
            src={
              ''
            }
            name={'لينا العقيلي'}
            title={'علوم الحاسب'}
          />
        </Testimonial>
      </HStack>
      </Flex>
    </Container>
  </Box>


  )
}

export default Team