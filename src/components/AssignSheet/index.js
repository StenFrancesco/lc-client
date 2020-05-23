import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCharacters } from "../../store/characters/selectors"
import { useParams } from 'react-router-dom';
import { fetchCharacters } from "../../store/characters/actions"
import { useEffect } from "react"

export default function AssignSheet({ match }) {

  console.log("matchtest", match)
  return (
    <div>
      testtest assignsheet
    </div>
  )
}