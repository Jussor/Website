import React from 'react';
import "./Field.css"

const Field = (props) => {
  return (
    <div>
      <div className="form-group">
        <label className='label-style'>
          {props.label}
       
          <input
            className="contact-form-text"
            type={props.type} 
            name={props.name}
            placeholder={props.placeholder}
            onChange={props.onChange}
            onBlur={props.onBlur}
            required
          />
           </label>
       
        {/* Check if props.touched is true and props.errors is an array with at least one element to display the error messages */}
        <p className='help-block text-danger'>
          {props.touched && Array.isArray(props.errors) && props.errors.map((error, index) => (
            <span key={index}>{error}</span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Field;
