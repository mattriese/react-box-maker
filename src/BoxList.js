import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import NewBoxForm from "./NewBoxForm";
import Box from "./Box"



// main div for the new box form and all current boxes to be displayed 

/** BoxList
 *    state:
 *      boxes: [{height, width, color, id, removeBox}, ....]
 * 
 *  main parent component to Box and NewBoxForm
 */ 

function BoxList() {
  const [boxes, setBoxes] = useState([]);
  console.log("STATE ===>", boxes)

  // function to pass to each box to remove that box from state
  // TODO don't delete our old state!!!!!! write with callback method! - DONE
  function removeBox(id) {
    setBoxes(boxes => boxes.filter(b => b.id !== id))
  }

  // function to pass to form to add a box
  function addBox(box) {
    let newBox = { ...box, id: uuid() }
    setBoxes(boxes => [...boxes, newBox]);
  }

  // render form, and map over boxes array and render box components
  // COULD DO - make a render box func for more complicated structures
  const boxList = boxes.map(b => {
    return <Box
      id={b.id}
      height={b.height}
      width={b.width}
      color={b.color}
      removeBox={removeBox}
    />

    // display form and all current boxes in state
  })
  return <div
    className="BoxList">
    <NewBoxForm addBox={addBox} />
    {boxList}
  </div>
}

export default BoxList