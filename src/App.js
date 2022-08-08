import React from 'react';
import {
  ChakraProvider,
  Box,
  Image,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Stack,
  Container,
} from '@chakra-ui/react';
import Banner  from './Component/Majelis.svg';
import { Header } from './Component/Header';
import { Footer } from './Component/Footer';

function App() {
  return (
    <ChakraProvider>
      <Box>
        <Header />
        <Image src={Banner}/>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
