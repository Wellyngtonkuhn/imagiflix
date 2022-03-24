

import Constants from '../data/Constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'

import Score from '../Score/Score';
import placeholder from '../../assets/hero.jpg'


export default function Hero({ backdrop_path = null, title = 'Avengers Endgame', overview = 'Teste', vote_average = 10}){

  const {IMAGEURL} = Constants
    

    return (
      <>
        <header className="box-border relative min-h-screen -mb-32">
          <img
            className="object-cover object-left h-full w-full"
            src={backdrop_path? `${IMAGEURL}/original/${backdrop_path}` : placeholder}
            alt="Filme em destaque"
          />
            <div className='absolute left-0 bottom-0 w-full h-full bg-gradient-to-b from-transparent to-black'></div>
          <article className="absolute bottom-0 mb-64 px-8">
            <p className="text-3xl">Assista agora:</p>
            <h2 className="text-6xl font-bold">{title}</h2>
            <p className="text-base w-32 py-2 ">{overview}</p>
            <p className="text-base">
              Nota
              <Score value={vote_average}/>
            </p>
            <button className="text-base py-2 px-8 mr-2 mt-8 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-75 hover:text-black">
              <FontAwesomeIcon className="mr-2" icon={faPlay} />
              Assistir
            </button>
            <button className="text-base py-2 px-8 mr-2 mt-8 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-75 hover:text-black">
              <FontAwesomeIcon className="mr-2" icon={faPlus} />
              Minha Lista
            </button>
          </article>
        </header>
      </>
    );
}