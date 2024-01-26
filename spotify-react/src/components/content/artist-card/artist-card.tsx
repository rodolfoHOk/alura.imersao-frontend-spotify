import './artist-card.css';

interface ArtistCardProps {
  name: string;
  image: string;
  category: string;
}

export const ArtistCard : React.FC<ArtistCardProps> = ({name, image, category}) => {
  return (
    <div className="artist-card" id="base-artist-card">
      <div className="card-img">
        <img id="artist-img" className="artist-img" src={image} />
        <div className="play">
          <span className="fa fa-solid fa-play"></span>
        </div>
      </div>
      <div className="card-text">
        <a title="Artista" className="vst" href="">
          <span className="artist-name" id="artist-name">{name}</span>
          <span id="artist-category" className="artist-category">{category}</span>
        </a>
      </div>
    </div>
  );
}
