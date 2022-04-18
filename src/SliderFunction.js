import React, { useState } from 'react';
import Slider from 'react-input-slider';

function SliderFunction() {
    const [state, setState] = useState({ x: null});

    const handleChange = (event) =>{
        const value = event.target.value;
        if(value > 25000){
            window.alert("Допустимият размер е 25000 BGN")
        }
        setState(values => ({values, x:value}))
    }

    const handleSubmit = (event) =>{
      event.preventDefault();
        if(state.x <500){
          window.alert("Минимален размер - 500 BGN")
      }
    }

    return (
      <div className="margin">
        <div className = "col-1">
        <Slider
          xmin = {500} 
          xmax = {25000}
          axis="x"
          x={state.x}
          onChange={({ x }) => setState(state => ({ ...state, x }))}
          styles={{
            thumb: {
            backgroundColor: '#3f51b5'
            },
            track: {
              width: 400
            }
          }}
        />
        </div>

        <div className = "col-3">
        <form onSubmit={handleSubmit}>
        <label>
          Желан лимит:
        </label>
        <br/>
        <input 
          type="number"
          value = {state.x}
          onChange={handleChange}
        />
        </form>
        </div>

        <div className = "relative-position-right" style={{left:'60px',bottom:'7px'}}>
          <button className="btn" type='button'>
            ВИДЕО КОНСУЛТАЦИЯ
          </button>
        </div>
      </div>

    );
  }

  export default SliderFunction;