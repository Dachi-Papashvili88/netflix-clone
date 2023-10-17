import axios from 'axios'
import {useEffect, useState} from 'react'
import Movie from './Movie'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Row = ({title, fetchURL}) => {
   const [movies, setMovies] = useState([])

   useEffect(()=> {
     axios.get(fetchURL).then((Response)=> {
      setMovies(Response.data.results)
     })
   }, [fetchURL])

  return (
    <>
    <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
    <div className="relative flex items-center group">
      <MdChevronLeft className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursour-pointer z-10 hidden group-hover:block' size={40}/>
       <div id={'slider'} className="w-full left-0 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
           {movies.map((item, id) => (
             <Movie key={id} item={item}/>
           ))}
       </div>
       <MdChevronRight className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursour-pointer z-10 hidden group-hover:block' size={40}/>
    </div>
    </>
  )
}

export default Row 