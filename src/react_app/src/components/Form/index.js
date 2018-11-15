import React from "react";
import "../Provider/index.js";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Form = ({ onPauseClick, onSubmitClick, onUserInputChange, pauseCaption, sizeX, sizeY, speed }) => {
  return (
    <div>
      <form onSubmit={onSubmitClick}>
        <div>
          <TextField label="Size X" type="number" name="sizeX" id="sizeX" value={sizeX} onChange={onUserInputChange} />
        </div>
        <div>
          <TextField label="sizeY" type="number" name="sizeY" id="sizeY" value={sizeY} onChange={onUserInputChange} />
        </div>
        <div>
          <TextField label="speed" type="number" name="speed" id="speed" value={speed} onChange={onUserInputChange} />
        </div>
        <div>
          <Button variant="contained" color="primary" type="submit">
            Update
          </Button>
          <Button variant="contained" color="secondary" type="button" id="pause" onClick={onPauseClick}>
            {pauseCaption}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
