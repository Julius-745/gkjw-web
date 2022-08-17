import { Image,Box } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ slides }) => {
  return (
    <Carousel infiniteLoop>
      {slides.map((slide) => {
        return (
            <Box
            height="300px" 
            width="100%"
            display="flex"
            >
                <Image src={slide.image} />
                <Image src={slide.image}/>
            </Box>
        )
      })}
    </Carousel>
  );
};

export default ImageSlider;