import SneakerItem from './SneakerItem.js';

// import sneaker images from folder
import yeezy700 from '../img/sneakers/yeezy-700-waverunner.jpeg';
import yeezy350 from '../img/sneakers/yeezy-350-bred.jpeg';
import benJerry from '../img/sneakers/ben-jerry-dunks.jpeg';
import bred4 from '../img/sneakers/bred-4.jpeg';
import fire4 from '../img/sneakers/fire-red-4.jpeg';
import bred11 from '../img/sneakers/bred-11.jpeg';
import travis4 from '../img/sneakers/travis-4.jpeg';
import travisHighMocha from '../img/sneakers/travis-high-mocha.jpeg';
import travisLowMocha from '../img/sneakers/travis-low-mocha.jpeg';
import blackOwAf1 from '../img/sneakers/af1-ow-black.jpeg';
import mcaOwAf1 from '../img/sneakers/af1-ow-mca.jpeg';
import uncOw1 from '../img/sneakers/unc-ow-jordan-1.jpeg';

function SneakerList() {
  return(
    <div>
        <SneakerItem name="Adidas Yeezy Boost 700 Wave Runner (2017/2023)" sneakerImage={yeezy700} condition="Lightly Worn" price="$100"/>
        <SneakerItem name="Adidas Yeezy Boost 350 V2 Black Red (2017/2020))" sneakerImage={yeezy350} condition="Lightly Worn" price="$100"/>
        <SneakerItem name="Nike SB Dunk Low Ben & Jerry's Chunky Dunky" sneakerImage={benJerry} condition="Lightly Worn" price="$250"/>

        <SneakerItem name="Jordan 4 Retro Bred (2019)" sneakerImage={bred4} condition="Lightly Worn" price="$100"/>
        <SneakerItem name="Jordan 4 Retro Fire Red (2020)" sneakerImage={fire4} condition="Good" price="$80"/>
        <SneakerItem name="Jordan 11 Retro Playoffs Bred (2019)" sneakerImage={bred11} condition="Good" price="$80"/>

        <SneakerItem name="Jordan 4 Retro Travis Scott Cactus Jack" sneakerImage={travis4} condition="Good" price="$200"/>
        <SneakerItem name="Jordan 1 Retro High OG SP Travis Scott Mocha" sneakerImage={travisHighMocha} condition="Good" price="$250"/>
        <SneakerItem name="Jordan 1 Retro Low OG SP Travis Scott Mocha" sneakerImage={travisLowMocha} condition="Good" price="$250"/>

        <SneakerItem name="Nike Air Force 1 Low Off-White Black White" sneakerImage={blackOwAf1} condition="Lightly Worn" price="$200"/>
        <SneakerItem name="Nike Air Force 1 Low Off-White MCA University Blue" sneakerImage={mcaOwAf1} condition="Lightly Worn" price="$225"/>
        <SneakerItem name="Jordan 1 Retro High Off-White University Blue" sneakerImage={uncOw1} condition="Lightly Worn" price="$300"/>
    </div>
  );
}

export default SneakerList;