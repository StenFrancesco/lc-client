import React from "react"
import { Link } from "react-router-dom"

export default function CharacterClass({ characterclass }) {

  return (
    <Link to={`/assign/${characterclass.name}`}>
      <div>
        <img width="300px" src="https://i.picsum.photos/id/228/300/300.jpg" alt={characterclass.name} />
        <h2>{characterclass.name}</h2>
      </div>
    </Link>
  )
}