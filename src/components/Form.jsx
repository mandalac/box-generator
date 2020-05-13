import React from "react";

const Form = ({ form, handleChange, handleSubmit }) => {
  return (
    <form className="col-5 mx-auto" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Type color below:</label>
        <br />
        <input
          className="form-control"
          type="text"
          value={form.color}
          name="color"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        {form.color.length === 0 ? (
          <input
            type="submit"
            className="btn btn-primary"
            value="Submit"
            disabled
          />
        ) : (
          <input type="submit" className="btn btn-primary" value="Submit" />
        )}
      </div>
    </form>
  );
};
export default Form;
