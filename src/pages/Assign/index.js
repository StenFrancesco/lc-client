import React, { useState, useCallback, useEffect } from 'react'
import ReactDOM from "react-dom"
import { useDispatch, useSelector } from "react-redux"
import Dustbin from "../../components/Dustbin"
import Box from "../../components/Box"
import ItemTypes from "../../components/ItemTypes"
import update from "immutability-helper"
import Container from "react-bootstrap/Container"
import { selectItems } from "../../store/items/selectors"
import { fetchItems } from "../../store/items/actions"
import { ReactSearchAutocomplete } from "react-search-autocomplete"


export default function Assign() {

  const dispatch = useDispatch()
  const items = useSelector(selectItems)
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
    dispatch(fetchItems())
  }, [dispatch])

  const [dustbins, setDustbins] = useState([
    { accepts: [ItemTypes.GLASS], lastDroppedItem: null },
    { accepts: [ItemTypes.FOOD], lastDroppedItem: null },
    {
      accepts: [ItemTypes.PAPER, ItemTypes.GLASS], lastDroppedItem: null
    },
    { accepts: [ItemTypes.PAPER], lastDroppedItem: null },
  ])
  console.log(itemName.name)
  const [boxes] = useState([
    { name: `test`, type: ItemTypes.GLASS },
    { name: 'Banana', type: ItemTypes.FOOD },
    { name: 'Magazine', type: ItemTypes.PAPER },
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

  const Test = () => {
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


  console.log("itemname", itemName)
  return (

    <div>
      {render ? <Test /> : null}




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
  )
}
