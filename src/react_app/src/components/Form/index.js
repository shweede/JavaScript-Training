import React from "react";
import "../Provider/index.js";

const Form = ({ onPauseClick, pauseCaption }) => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="sizeX">Size X</label>
          <input type="number" name="sizeX" id="sizeX" />
        </div>
        <div>
          <label htmlFor="sizeY">Size Y</label>
          <input type="number" name="sizeY" id="sizeY" />
        </div>
        <div>
          <label htmlFor="speed">Speed</label>
          <input type="number" name="speed" id="speed" />
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
