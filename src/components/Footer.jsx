import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';


const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'} >
          <Heading
            size="md"
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2" w={['200px','400px']} alignItems={['left','center']} >
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
              
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack w={'full'}
        borderRight={['none','1px solid white']}
        borderLeft={['none','1px solid white']}
        >
            <Heading textTransform={'uppercase'} p={'2'} fontSize={'larger'}>
                Video Labs
            </Heading>
            <Text>All rights reserved</Text>
        </VStack>
        <VStack w={'full'}>
        <Heading textTransform={'uppercase'} p={'2'} fontSize={'larger'}>
                Social Media
        </Heading>
        <Button variant={'link'} color={'white'}>
            <a href="https://youtube.com">Youtube</a>
        </Button>
        <Button variant={'link'} color={'white'} >
            <a href="https://instagram.com" >Instagram</a>
        </Button>
        <Button variant={'link'} color={'white'} >
            <a href="https://github.com">Github</a>
        </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
