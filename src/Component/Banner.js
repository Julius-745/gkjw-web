import {
    Box,
    Container,
    Stack,
    Image
  } from '@chakra-ui/react'
  import * as React from 'react'
  import Photo  from './Majelis.svg';

  export const Banner = () => {
    return(
        <Container maxW={"100%"} >
            <Stack 
            direction={{ base: 'column', md: 'row' }} 
            justify="center">
                <Stack spacing={{ base: '4', md: '' }} >
                    <Box>
                        <Image 
                        src={Photo} 
                        maxWidth='100%'
                        height='auto'
                        />
                    </Box>
                </Stack>
            </Stack>
        </Container>
    )
  }