//module imports
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"

//store imports
import { selectCharacters } from "../../store/characters/selectors"
import { fetchCharacters } from "../../store/characters/actions"
import { selectAssignedItems } from "../../store/assigneditems/selectors"
import { fetchAssignedItems } from "../../store/assigneditems/actions"

//component imports
import Search from "../../components/Search"


//bootstrap imports


export default function Overview() {

  const dispatch = useDispatch();
  const characters = useSelector(selectCharacters)
  const assignedItems = useSelector(selectAssignedItems)

  useEffect(() => {
    dispatch(fetchCharacters())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchAssignedItems())
  }, [dispatch])

  return (
    <div>
      <p>Overview</p>
      <table>
        <tbody>
          {characters.map((character) => (
            <tr key={character.id}>
              <td>{character.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Assigned items</p>
      <table>
        <tbody>
          {assignedItems.map((assigneditem) => (
            <tr key={assigneditem.id}>
              <td>{assigneditem.character.name}</td>
              <td>{assigneditem.item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Search />

    </div>
  )
}