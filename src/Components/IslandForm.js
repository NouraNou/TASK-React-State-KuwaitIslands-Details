import { useState } from "react";

export default function IslandForm({ island }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function getname(event) {
    setName(event.target.value);
  }

  const getphone = (event) => {
    setPhone(event.target.value);
  };

  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input onChange={getname} placeholder="Type Full Name" />
      <input onChange={getphone} type="tel" placeholder="Type Phone Number" />
      <button
        className="book"
        onClick={() => {
          window.confirm(
            `Are you sure you want to book to ${island.name} with the Name: ${name}, phone : ${phone}`
          );
        }}
      >
        Book for today!
      </button>
    </div>
  );
}
