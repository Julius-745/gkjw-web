import { Box } from "@chakra-ui/react";
import ImageSlider from "./ImageSlider";
import { DataCarousel } from "./DataCarousel";

export const Carousel = () => {
  return (
    <Box
    w="100%"
    p={4}
    color="white"
    >
      <ImageSlider slides={DataCarousel} />
    </Box>
  );
};

