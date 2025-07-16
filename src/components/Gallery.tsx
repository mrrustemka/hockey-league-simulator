import { Carousel } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import '../styles/Gallery.css';

function Gallery(props: { photos: string[]; team: string }) {
  return (
    <div className='gallery-carousel'>
      <Carousel adaptiveHeight draggable autoplay speed={2000}>
        {props.photos.map((photo: string, i: number) => (
          <div key={uuidv4()}>
            <img src={photo} alt={`${props.team} ${i}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Gallery;
