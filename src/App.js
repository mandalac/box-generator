import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Box from "./components/Box";
import Form from "./components/Form";

const App = () => {
  const [boxen, setBoxen] = useState([]);
  const [form, setForm] = useState({
    color: "",
  });

  const handleColorChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let box = {
      color: form.color,
    };
    setBoxen((oldBoxen) => [...oldBoxen, box]);
    setForm({
      color: "",
    });
  };

  return (
    <div className="App">
      <Form
        form={form}
        handleChange={handleColorChange}
        handleSubmit={handleSubmit}
      />
      <div className="row justify-content-between">
        {boxen.map((box, i) => {
          return <Box color={box.color} key={i} />;
        })}
      </div>
    </div>
  );
};

export default App;
