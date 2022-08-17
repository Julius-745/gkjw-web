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
<<<<<<< HEAD
import { CardSection } from './Component/CardSection';
import {Carousel} from './Component/Carousel';
=======
import { CardJadwalSection } from './Component/CardJadwalSection';
import { CardIbadahLalu } from './Component/CardIbadahLalu';
>>>>>>> 97a8795cd5bd42ecbffea34a29e6d1101117521e

function App() {
  return (
    <ChakraProvider>
      <Box>
        <Header />
<<<<<<< HEAD
        <Banner />
        <Carousel />
        <CardSection/>
=======
        <CardJadwalSection/>
        <CardIbadahLalu/>
>>>>>>> 97a8795cd5bd42ecbffea34a29e6d1101117521e
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
