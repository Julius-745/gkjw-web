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
import { Banner }  from './Component/Banner';
import { Header } from './Component/Header';
import { Footer } from './Component/Footer';
import { CardSection } from './Component/CardSection';

function App() {
  return (
    <ChakraProvider>
      <Box>
        <Header />
        <CardSection/>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
