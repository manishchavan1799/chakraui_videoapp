import {
  Button,
  Container,
  HStack,
  Input,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloudDownload } from 'react-icons/ai';

const Upload = () => {
  return (
    <Container h={'100vh'} maxW={'container.xl'} alignItems={'center'} p={'16'}>
      <VStack justifyContent={'center'} h={'full'} color={'purple.500'}>
        <AiOutlineCloudDownload size={'10rem'}  />
        <form>
          <HStack>
            <Input
              required
              type={'file'}
              css={{
                '&::file-selector-button': {
                  border: 'none',
                  width: ['23em'],
                  height:'100%',
                  backgroundColor:'white',
                  marginLeft:'-18px',
                  color:'purple',
                  cursor:'pointer'
                },
              }}
            ></Input>
            <Button colorScheme={'purple'} type={'submit'}>upload</Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;
