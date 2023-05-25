import React, {useState} from "react";
import Box from './Box.js';
import NewBoxForm from './NewBoxForm.js';
import { v4 as uuid } from 'uuid';


function BoxList () {
  const [boxes, setBoxes] = useState([]);

  /** Add new box to box list. */
  function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }

  function deleteBox(id) {
  setBoxes(boxes => boxes.filter(box => box.id !== id));
  }

  function renderBoxes() {
    return (
        <div>
          {boxes.map(box => (
            <Box
              key={box.id}
              id={box.id}
              height={`${box.height}px`}
              width={`${box.width}px`}
              backgroundColor={box.backgroundColor}
              deleteBox={deleteBox}
            />
          ))}
        </div>
    );
  }

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox}/>
      {renderBoxes()}
    </div>
  )
}


export default BoxList;