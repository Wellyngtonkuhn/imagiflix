
import Slick from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import cover1 from '../../assets/movie1.jpg'
import cover2 from '../../assets/movie2.jpg'
import cover3 from '../../assets/movie3.jpg'

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

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
    title: string;
    cover: string;
}


const Poster = ({ cover, title}: Movie, index: number) =>(
    <article key={index}>
        <img src={cover} alt={title} />
    </article>
)




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