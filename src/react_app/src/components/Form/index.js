import React from "react";
import "../Provider/index.js";

const Form = ({ onPauseClick, onSubmitClick, onUserInputChange, pauseCaption, sizeX, sizeY, speed }) => {
  return (
    <div>
      <form onSubmit={onSubmitClick}>
        <div>
          <label htmlFor="sizeX">Size X</label>
          <input type="number" name="sizeX" id="sizeX" value={sizeX} onChange={onUserInputChange} />
        </div>
        <div>
          <label htmlFor="sizeY">Size Y</label>
          <input type="number" name="sizeY" id="sizeY" value={sizeY} onChange={onUserInputChange} />
        </div>
        <div>
          <label htmlFor="speed">Speed</label>
          <input type="number" name="speed" id="speed" value={speed} onChange={onUserInputChange} />
        </div>
        <div>
          <button type="submit">Update</button>
          <button type="button" id="pause" onClick={onPauseClick}>
            {pauseCaption}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
