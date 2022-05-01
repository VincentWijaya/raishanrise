import { Image } from "@chakra-ui/react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const ImageSlider = ({ slides, height, width }) => {
  return (
    <Carousel infiniteLoop>
      {slides.map((slide) => {
        return <Image src={slide.image} height={height} width={width} crossOrigin='anonymous'/>
      })}
    </Carousel>
  )
}

export default ImageSlider
