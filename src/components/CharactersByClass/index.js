import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCharacters } from "../../store/characters/selectors"
import { useParams } from 'react-router-dom';
import { fetchCharacters } from "../../store/characters/actions"
import { useEffect } from "react"
import { Link } from "react-router-dom"


export default function CharactersByClass({ match }) {

  const dispatch = useDispatch();
  const characters = useSelector(selectCharacters)
  const { name } = useParams();

  useEffect(() => {
    dispatch(fetchCharacters())
  }, [dispatch])

  console.log("character", characters)
  console.log("name", name)
  console.log("match", match)
  const selectClassOfCharacter = characters.filter((charClass) => {
    return charClass.characterclass.name === name
  })
  console.log("classof", selectClassOfCharacter)

  return (
    <div>
      <p>{match.params.name}</p>
      {selectClassOfCharacter.map((characters) => (
        <div key={characters.id}>
          <Link to={`/assign/${characters.characterclass.name}/${characters.id}`}>
            <p>{characters.name}</p>
          </Link>
        </div >
      ))
      }


    </div >
  )
}