import React from "react";
import data from "../db";
import { FaEye, FaSave, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <Link className="my-3 btn btn-secondary" to={`/decks/new`}>
        + Create Decks
      </Link>
      {data.decks.map((deck) => (
        <div className="card p-3" key={deck.id}>
          <div className="d-flex justify-content-between">
            <h2>{deck.name}</h2> <span>3 cards</span>
          </div>
          <div className="middle">
            <span>{deck.description}</span>
          </div>
          <div className="bottom d-flex mt-3">
            <Link
              className="btn btn-secondary d-flex align-items-center me-3"
              to={`/decks/${deck.id}`}
            >
              <FaEye size={20} className="me-1" />
              View
            </Link>
            <Link
              className="btn btn-primary d-flex align-items-center"
              to={`/decks/${deck.id}/study`}
            >
              <FaSave size={20} className="me-1" />
              Study
            </Link>
            <button className="btn btn-danger ms-auto">
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
