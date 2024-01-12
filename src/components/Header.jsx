import React from 'react'
import {BiMenuAltLeft} from "react-icons/bi"
import { Link } from 'react-router-dom';
import { Drawer,DrawerOverlay,DrawerCloseButton,DrawerContent,DrawerBody,Button, useDisclosure, VStack,HStack, DrawerHeader } from '@chakra-ui/react';

const Header = () => {
  const {isOpen,onOpen,onClose }=useDisclosure()
  return( <>
    <Button   
    zIndex='overlay'
    pos={'fixed'}
    top={'4'}
    left={'4'}
    colorScheme="purple"
    p={'0'}
    w={'10'}
    h={'10'}
    borderRadius={'full'}
    onClick={onOpen}>
    
        <BiMenuAltLeft />
    </Button>
    
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
    <DrawerOverlay />
    <DrawerContent alignItems={'flex-start'}>
    <DrawerCloseButton/>
    <DrawerHeader>VIDEO LABS</DrawerHeader>
        <DrawerBody>
          <VStack>
            <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
              <Link to={'/home'}>Home</Link>
            </Button>
            
            <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
              <Link to={'/videos'}>Videos</Link>
            </Button>
            <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
              <Link to={'/videos?category=free'}>Free Videos</Link>
            </Button>
            <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
              <Link to={'/upload'}>Upload videos</Link>
            </Button>
          </VStack>
          <HStack
          position={'absolute'}
          justifyContent={'space-evenly'}
          bottom={'10'}
          left={'0'}
          w={'full'}>
            <Button onClick={onClose} variant={'solid'} colorScheme='purple'>
              <Link to="/login">Log In</Link>
            </Button>
            <Button onClick={onClose} variant={'outline'} colorScheme='purple'>
              <Link to="/SignUp">Sign Up</Link>
            </Button>
          </HStack>
        </DrawerBody>
    </DrawerContent>
        

    </Drawer>
    </>
    );
};

export default Header;
