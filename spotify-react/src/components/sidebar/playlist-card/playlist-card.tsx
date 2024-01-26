import React from 'react';
import './playlist-card.css';

interface PlaylistCardProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
}

export const PlaylistCard: React.FC<PlaylistCardProps> = ({title, subtitle, buttonLabel}) => {
  return (
    <div className="section-playlist__card">
      <div className="card__content">
        <span className="text title">{title}</span>
        <span className="text subtitle">{subtitle}</span>
      </div>
      <button className="section-playlist__button">
        <span>{buttonLabel}</span>
      </button>
    </div>
  );
}
