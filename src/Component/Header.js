import {
    Box,
    Button,
    Container,
    Flex,
    HStack,
    Image,
    Spacer,
    useColorModeValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import Logo from './logos.svg'

  
  export const Header = () => {
    return (
      <Box pb={{ base: '1', md: '' }} >
        <Box boxShadow={useColorModeValue('md', 'md-dark')}>
          <Container maxW={"100%"} py={{ base: '5', lg: '5' }}>
            <Flex px={[2,3]}>
              <Box>
                <Image src={Logo} alt="Logo"/>
              </Box>
              <Spacer />
              <Box>
                <Button colorScheme='facebook' size={'lg'}>Contact Person</Button>
              </Box>
            </Flex>
          </Container>
        </Box>
      </Box>
    )
  }