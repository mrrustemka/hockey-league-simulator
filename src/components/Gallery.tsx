import { Carousel } from 'antd';
import '../styles/Gallery.css';

function Gallery(props: { photos: string[]; team: string }) {
  return (
    <div className='gallery-carousel' role='region' aria-label={`${props.team} photo gallery`} aria-roledescription='carousel'>
      <Carousel adaptiveHeight draggable autoplay speed={2000}>
        {props.photos.map((photo: string, i: number) => (
          <div key={photo}>
            <img src={photo} alt={`${i + 1} of ${props.team}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Gallery;
