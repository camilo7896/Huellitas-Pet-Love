import Slider1 from "../image/slider1.jpg";
const images = [
  {Slider1},
  "https://via.placeholder.com/800x300?text=Image+2",
  "https://via.placeholder.com/800x300?text=Image+3",
];

const ImageSlider = () => {
  return (
    <div className="carousel w-full">
      {images.map((img, index) => (
        <div key={index} id={`slide${index}`} className="carousel-item relative w-full">
          <img src={img} className="w-full" alt={`Slide ${index}`} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${index === 0 ? images.length - 1 : index - 1}`} className="btn btn-circle">❮</a> 
            <a href={`#slide${index === images.length - 1 ? 0 : index + 1}`} className="btn btn-circle">❯</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
