import React from 'react';
import './footer.css';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer">
      <div className="footer__banner">
        <div className="footer__banner__content">
          <p className="text title">Testar o Premium de graça</p>
          <p className="text">Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.</p>
        </div>
        <button className="footer__banner__button">
          <span>Inscreva-se grátis</span>
        </button>
      </div>
    </footer>
  );
}
