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
import { Carousel } from './Component/Carousel';

function App() {
  return (
    <ChakraProvider>
      <Box>
        <Header />
        <Carousel />
        <CardSection/>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
