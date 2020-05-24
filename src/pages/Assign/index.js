import React from 'react'
import { useSelector } from "react-redux"
import { selectCC } from "../../store/classes/selectors"
import CharacterClass from "../../components/Classes"


export default function Assign() {


  const classes = useSelector(selectCC)



  return (


    <div>
      {classes.map((classes) => (
        <CharacterClass key={classes.id} characterclass={classes} />
      ))}
    </div>


  )
}
