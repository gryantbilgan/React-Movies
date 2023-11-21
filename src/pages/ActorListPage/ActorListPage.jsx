import React from 'react'
import ActorCard from '../../components/ActorCard/ActorCard'

export default function ActorListPage({ movies }) {
  
  const actorList = movies.reduce((actors, movie) => {
    movie.cast.forEach((act) => {
      if (!actors.includes(act)) actors.push(act)
    })
    return actors
  }, [])
  
  return (
    <div>
      {actorList.map((actor) => {
        return <ActorCard key={actor} actor={actor} />
      })}
    </div>
  )
}

// const uniqueActors = [...new Set(movies.flatMap(movie => movie.cast))];