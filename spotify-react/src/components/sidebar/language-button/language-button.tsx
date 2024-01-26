import React from 'react';
import './language-button.css';

interface LanguageButtonProps {
  label: string;
}

export const LanguageButton: React.FC<LanguageButtonProps> = ({label}) => {
  return (
    <button className="languages__button">
      <span className="fa fa-globe"></span>
      <span>{label}</span>
    </button>
  );
}
