import React from "react";

export default function Show({ flight }) {
  let { airport, airline, flightNo, depart, destinations, _id } = flight;
  let airports = ["AUS", "DAL", "LAX", "SAN", "SEA"];
  //destinations are sorted by arrival time
  destinations.sort((a, b) => new Date(a.arrival) - new Date(b.arrival));
  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        {airline} Airline {flightNo}
      </h1>
      <h2 style={{ backgroundColor: "grey", color: "white", padding: "5px" }}>
        Departure:
      </h2>
      <div
        style={{
          fontSize: "1.5rem",
          width: "fit-content",
          textAlign: "left",
          margin: "auto",
        }}
      >
        <p>Airport:{airport}</p>
        <p>Time:{depart.toString()}</p>
      </div>
      <h2 style={{ backgroundColor: "grey", color: "white", padding: "5px" }}>
        Destinations:
      </h2>
      {destinations != [] &&
        destinations.map((destination, i) => (
          <div
            style={{
              fontSize: "1.5rem",
              width: "fit-content",
              textAlign: "left",
              margin: "auto",
            }}
          >
            <p>Airport: {destination.airport}</p>
            <p>Time: {destination.arrival.toString()}</p>
          </div>
        ))}
      <h3 style={{ backgroundColor: "grey", color: "white", padding: "5px" }}>
        Add a new destination:
      </h3>
      <form
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
        action={`/flights/update/${flight._id}?_method=PUT`}
        method="POST"
      >
        <div style={{ display: "flex", flexWrap: "wrap", margin: "1rem" }}>
          <label
            style={{ fontSize: "1.5rem", margin: "1rem" }}
            htmlFor="airport"
          >
            Airport:
          </label>
          <br />
          <select
            style={{ fontSize: "1.5rem", padding: "0.5rem" }}
            type="text"
            id="airport-select"
            name="arrivalAirport"
          >
            {airports.map((airport, i) => (
              <option key={i} value={airport} required>
                {airport}
              </option>
            ))}
          </select>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", margin: "1rem" }}>
          <label
            style={{ fontSize: "1.5rem", margin: "1rem" }}
            htmlFor="arrival"
          >
            Arrival Date:
          </label>
          <input
            style={{ fontSize: "1.5rem", padding: "0.5rem" }}
            type="datetime-local"
            id="arrival"
            name="arrival"
            required
          ></input>
        </div>
        <button
          style={{
            backgroundColor: "blue",
            fontSize: "2rem",
            color: "white",
            margin: "1rem",
            padding: "0.5rem",
            border: "none",
            borderRadius: "1rem",
          }}
        >
          Submit
        </button>
      </form>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form style={{ margin: "1rem" }} action={`/flights/${_id}/edit`}>
          <button
            style={{
              backgroundColor: "blue",
              fontSize: "2rem",
              color: "white",
              padding: "1rem",
              border: "none",
              borderRadius: "1rem",
            }}
          >
            Edit
          </button>
        </form>
        <br />
        <form
          style={{ margin: "1rem" }}
          action={`/flights/${_id}?_method=DELETE`}
          method="POST"
        >
          <button
            style={{
              backgroundColor: "blue",
              fontSize: "2rem",
              color: "white",
              padding: "1rem",
              border: "none",
              borderRadius: "1rem",
            }}
          >
            Remove
          </button>
        </form>
        <br />
        <a style={{ margin: "1rem" }} href="/flights">
          <button
            style={{
              backgroundColor: "blue",
              fontSize: "2rem",
              color: "white",
              padding: "1rem",
              border: "none",
              borderRadius: "1rem",
            }}
          >
            Back
          </button>
        </a>
      </div>
    </div>
  );
}
