
import Slick from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Score from '../Score/Score'

import Constants from '../data/Constants'

import cover1 from '../../assets/movie1.jpg'
import cover2 from '../../assets/movie2.jpg'
import cover3 from '../../assets/movie3.jpg'

import { faChevronLeft, faChevronRight, faPlayCircle } from '@fortawesome/free-solid-svg-icons'

import './Carousel.css';


const mockData: Movie[] = [
    {
        title: 'Avengers',
        cover: cover1,
    },
    {
        title: 'Missãi Impossível',
        cover: cover2,
    },
    {
        title: 'Mega Tubarão',
        cover: cover3,
    },
    {
        title: 'Avengers',
        cover: cover1,
    },
    {
        title: 'Missãi Impossível',
        cover: cover2,
    },
    {
        title: 'Mega Tubarão',
        cover: cover3,
    },
    {
        title: 'Avengers',
        cover: cover1,
    },
    {
        title: 'Missãi Impossível',
        cover: cover2,
    },
    {
        title: 'Mega Tubarão',
        cover: cover3,
    },
    {
        title: 'Avengers',
        cover: cover1,
    },
    {
        title: 'Missãi Impossível',
        cover: cover2,
    },
    {
        title: 'Mega Tubarão',
        cover: cover3,
    },
]

interface Movie {
    title?: string;
    name?: string;
    cover?: string;
    poster_path?: string;
    vote_average?: string | number
}


const Poster = ({ cover, poster_path, title, name, vote_average}: Movie, index: number) =>{
    const { IMAGEURL } = Constants
    return (
    <article
    className='relative transition-all duration-500 ease-in-out transform hover:scale-110'
     key={index}>
        <img src={poster_path ?`${IMAGEURL}/w200/${poster_path}` : cover} alt={title} />
        <div className='poster cursor-pointer absolute inset-0 w-full h-full px-4 py-8 grid place-items-center text-center leading-6 bg-black bg-opacity-75 transition-all duration-500 ease-in-out opacity-0 leading-6'>
            <h2 className='text-2xl'>{title ? title : name}</h2>
            <FontAwesomeIcon icon={faPlayCircle} size='5x' />
            <Score value={vote_average} />
        </div>
    </article>
    )
}




export default function Carousel({title='Filmes em destaque', data= mockData}){

    enum Direction {
        left,
        right,
    }

    const SlickArrow = ({direction, onClick}:{direction: Direction, onClick: () => void}) =>(
        <button
        type='button'
        className={`absolute w-16 h-full z-10 bg-black bg-opacity-50 top-0 ${direction ? 'right-0' : 'left-0' }`}
        onClick={onClick}
        >
            <FontAwesomeIcon icon={direction ? faChevronRight : faChevronLeft} size='3x'/>
        </button>
    )

    const options = {
        infinite: true,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: <SlickArrow direction={Direction.left} />,
        nextArrow: <SlickArrow direction={Direction.right} />,
    }

    return (
      <>
        <section>
            <h2 className='relative font-bold text-2xl ml-8 mb-4'>{title}</h2>
            <Slick  className='relative mb-8' {...options}>
            {data.map((movie, index) => Poster(movie, index))}
            </Slick>
        </section>
      </>
    );
}