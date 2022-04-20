import React, { useState } from "react";
import BreadCrumb from "../Components/BreadCrumb";

const CreateDeck = () => {
  const _initialFormData = { name: "", desc: "" };
  const [formData, setFormData] = useState(_initialFormData);

  function onSubmit(event) {
    event.preventDefault();
  }

  function changeHandler(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  return (
    <div className="container w-75">
      <BreadCrumb current={"Create Deck"} />
      <form onSubmit={onSubmit} className="d-flex flex-column">
        <label htmlFor="newDeck" className="h4">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="newDeck"
          placeholder="Deck Name"
          className="my-3 py-1"
          value={formData.name}
          onChange={changeHandler}
        />
        <label htmlFor="newDesc" className="h4">
          Description
        </label>
        <input
          type="text"
          name="desc"
          id="newDesc"
          placeholder="Brief Description of the deck"
          className="my-3 py-1"
          value={formData.desc}
          onChange={changeHandler}
        />
        <div className="pt-2">
          <button className="btn btn-secondary me-3">Cancel</button>
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateDeck;
