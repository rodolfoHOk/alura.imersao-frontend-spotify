import React from 'react';
import playlist1Img from '../../assets/playlist/1.jpeg';
import playlist2Img from '../../assets/playlist/2.png';
import playlist3Img from '../../assets/playlist/3.jpeg';
import playlist4Img from '../../assets/playlist/4.jpeg';
import playlist5Img from '../../assets/playlist/5.jpeg';
import playlist6Img from '../../assets/playlist/6.jpeg';
import playlist7Img from '../../assets/playlist/7.jpeg';
import playlist8Img from '../../assets/playlist/8.jpeg';
import playlist9Img from '../../assets/playlist/9.jpeg';
import playlist10Img from '../../assets/playlist/10.jpeg';
import playlist11Img from '../../assets/playlist/11.jpeg';
import playlist12Img from '../../assets/playlist/12.jpeg';
import playlist13Img from '../../assets/playlist/13.jpeg';
import playlist14Img from '../../assets/playlist/14.jpeg';
import playlist15Img from '../../assets/playlist/15.jpeg';
import { Greeting } from './greeting/greeting';
import { OfferCard } from './offer-card/offer-card';
import { ArtistCard } from './artist-card/artist-card';
import { ArtistModel } from '../../models/artist-model';
import './content.css';

interface ContentProps {
  artistsList: ArtistModel[];
}

export const Content: React.FC<ContentProps> = ({artistsList}) => {
  return (
    <div className="playlist-container">
      { artistsList.length == 0
        ? (
          <div id="result-playlists">
            <Greeting />

            <div className="offer__scroll-container">
              <div className="offer__list">
                <section className="offer__list-item">
                  <OfferCard image={playlist1Img} label="Boas festas" className='card1' />
                  <OfferCard image={playlist2Img} label="Feitos para você" className='card2'/>
                  <OfferCard image={playlist3Img} label="Lançamentos" className='card3'/>
                  <OfferCard image={playlist4Img} label="Creators" className='card4'/>
                  <OfferCard image={playlist5Img} label="Para treinar" className='card5'/>
                  <OfferCard image={playlist6Img} label="Podcasts" className='card6'/>
                  <OfferCard image={playlist7Img} label="Sertanejo" className='card7'/>
                  <OfferCard image={playlist8Img} label="Samba e pagode" className='card8'/>
                  <OfferCard image={playlist9Img} label="Funk" className='card9'/>
                  <OfferCard image={playlist10Img} label="MPB" className='card10'/>
                  <OfferCard image={playlist11Img} label="Rock" className='card11'/>
                  <OfferCard image={playlist12Img} label="Hip Hop<" className='card12'/>
                  <OfferCard image={playlist13Img} label="Indie" className='card13'/>
                  <OfferCard image={playlist14Img} label="Relax" className='card14'/>
                  <OfferCard image={playlist15Img} label="Música Latina" className='card15'/>
                </section>
              </div>
            </div>
          </div>
        ) : (
          <div id="result-artist" className="">
            <div id="result-list" className="grid-container">
              {artistsList
                .map(artist => (<ArtistCard key={artist.id} name={artist.name} image={artist.urlImg} category={artist.genre} />))
              }
            </div>
          </div>
        )
      }
    </div>
  );
}
