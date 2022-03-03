
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'

import placeholder from '../../assets/hero.jpg'


export default function Hero({ title = 'Avengers Endgame', score = 10}){
    const getBorderColor = () =>{
        if(score >= 7) return 'border-green-400'
        if(score > 4 &&  score < 7 ){ 
            return 'border-yellow-400'
        }else{
            return 'border-red-400'
        }
    }

    return(
        <>
            <header className='box-border relative min-h-screen -mb-32'>
                <img
                className='object-cover object-left h-full w-full'
                src={placeholder}
                alt='Filme em destaque'
                />

                <article className='absolute bottom-0 mb-64 px-8'>
                    <p className='text-3xl'>Assista agora:</p>
                    <h2 className='text-6xl font-bold'>{title}</h2>
                    <p className='text-base'>Nota 
                        <span 
                        className={`inline-block mx-2 py-2 px-3 rounded-full border-4 bg-black bg-opacity-75 ${getBorderColor()}`}>{score}
                        </span>
                    </p>      
                    <button className='text-base py-2 px-8 mr-2 mt-8 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-75 hover:text-black'>
                        <FontAwesomeIcon className='mr-2' icon={faPlay} />
                        Assistir
                    </button>
                    <button className='text-base py-2 px-8 mr-2 mt-8 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-75 hover:text-black'>
                        <FontAwesomeIcon className='mr-2' icon={faPlus} />
                        Minha Lista
                    </button>
                </article>

            </header>
        </>
    )
}