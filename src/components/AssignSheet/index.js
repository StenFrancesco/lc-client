import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCharacters } from "../../store/characters/selectors"
import { useParams } from 'react-router-dom';
import { fetchCharacters } from "../../store/characters/actions"
import Dustbin from "../../components/Dustbin"
import Box from "../../components/Box"
import ItemTypes from "../../components/ItemTypes"
import update from "immutability-helper"
import Container from "react-bootstrap/Container"
import { selectItems } from "../../store/items/selectors"
import { fetchItems } from "../../store/items/actions"
import { ReactSearchAutocomplete } from "react-search-autocomplete"
import { fetchCC } from "../../store/classes/actions"

export default function AssignSheet({ match }) {

  const dispatch = useDispatch();
  const characters = useSelector(selectCharacters)
  const { id } = useParams();
  const items = useSelector(selectItems)

  useEffect(() => {
    dispatch(fetchCharacters())
  }, [dispatch])

  const selectCharacter = characters.filter((char) => { return char.id == id })
  console.log(selectCharacter)

  const [render, setRender] = useState(false)
  const [itemName, setItemName] = useState("")
  const handleOnSearch = (string, cached) => {
    console.log(string, cached);
  }

  const handleOnSelect = itemname => {
    console.log(itemname);
    setRender(true)
    setItemName(itemname)
  }

  const handleOnFocus = () => {
    console.log("Focused");
  }

  useEffect(() => {
    dispatch(fetchCC())
  }, [dispatch])

  console.log(items)


  useEffect(() => {
    dispatch(fetchItems())
  }, [dispatch])

  const [dustbins, setDustbins] = useState([
    { accepts: [ItemTypes.ITEM], lastDroppedItem: null }
  ])
  console.log(itemName.name)
  const [boxes] = useState([
    { name: `item`, type: ItemTypes.ITEM }
  ])
  const [droppedBoxNames, setDroppedBoxNames] = useState([])
  function isDropped(boxName) {
    return droppedBoxNames.indexOf(boxName) > -1
  }
  const handleDrop = useCallback(
    (index, item) => {
      const { name } = item
      setDroppedBoxNames(
        update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }),
      )
      setDustbins(
        update(dustbins, {
          [index]: {
            lastDroppedItem: {
              $set: item,
            },
          },
        }),
      )
    },
    [droppedBoxNames, dustbins],
  )
  console.log("itemname", itemName)

  const DustBinContainer = () => {
    return (
      <Container>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          {dustbins.map(({ accepts, lastDroppedItem }, index) => (
            <Dustbin
              accept={accepts}
              lastDroppedItem={lastDroppedItem}
              onDrop={(item) => handleDrop(index, item)}
              key={index}
            />
          ))}
        </div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          {boxes.map(({ name, type }, index) => (
            <Box
              name={itemName.name}
              type={type}
              isDropped={isDropped(name)}
              key={index}
            />
          ))}
        </div>
      </Container>
    )
  }

  return (
    <div>
      <div>
        {render ? <DustBinContainer /> : null}
        <p>Assign</p>
        <div className="App">
          <div style={{ width: 400, margin: 20 }}>

            <ReactSearchAutocomplete
              items={items}
              onSearch={handleOnSearch}
              onSelect={handleOnSelect}
              onFocus={handleOnFocus}
              placeholder="Search item"
              styling={
                {
                  placeholderColor: "grey",
                  color: "white",
                  backgroundColor: "blue",
                  hoverBackgroundColor: "#black",
                  border: "1px solid #dfe1e5",
                  borderRadius: "24px"
                }
              }
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  )
}