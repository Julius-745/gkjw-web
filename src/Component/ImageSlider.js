import { Image,Box, Text, Flex } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ slides }) => {
  return (
    <Carousel infiniteLoop>
      {slides.data?.map((slide) => {
        return (
          <Flex justifyContent={'center'} alignItems={'center'} >
            <Box
            height={388} 
            width={396}
            display="flex"
            marginRight={16}
            >
              <Image w={396} h={388} src={slide.attributes.image?.data.attributes.url}/>
            </Box>
            <Flex flexDirection={'column'} w={'568px'} textAlign={'left'}>
              <Text color={'black'} fontWeight={'bold'}>{slide.attributes.title}</Text>
              <Text color={'black'} paddingTop={5}>{slide.attributes.content}</Text>
            </Flex>
          </Flex>
        )
      })}
    </Carousel>
  );
};

export default ImageSlider;