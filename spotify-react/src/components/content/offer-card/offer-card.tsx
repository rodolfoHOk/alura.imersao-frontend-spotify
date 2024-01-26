import './offer-card.css';

interface OfferCardProps {
  image: string;
  label: string;
  className: string;
}

export const OfferCard = ({image, label, className}: OfferCardProps) => {
  return (
    <a href="" className="cards">
      <div className={`cards ${className}`}>
        <img src={image} alt="" />
        <span>{label}</span>
      </div>
    </a>
  );
}
