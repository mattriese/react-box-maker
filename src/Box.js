import React from "react";


/** Box component
 * 
 * Props :
 *    height
 *    width
 *    color
 *    remove box (()=>)
 * 
 *  app ==> BoxList ==> Box
 */
function Box({ height, width, color, id, removeBox }) {

  function handleRemove() {
    removeBox(id);
  }
// return a div with the box element (correct size and color) 
// along with a delete box button
  return (
    <div className="Box">

      <div className="Box-area"

        style={{
          display: "inline-block",
          backgroundColor: `${color}`,
          height: `${+height}em`,
          width: `${+width}em`
        }}
      >
      </div>
      <br />
      <button
        className="box-remove-button"
        onClick={ handleRemove }>
        X
        </button>
    </div>
  );
}

export default Box