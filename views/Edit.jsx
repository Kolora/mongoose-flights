import React from "react";

function Edit({ flight }) {
  let { airline, flightNo, depart, destinations, _id } = flight;
  let airlines = ["American", "Southwest", "United"];
  let airports = ["AUS", "DAL", "LAX", "SAN", "SEA"];
  let dt = depart;
  let myStyle = {
    width: "fit-content",
    fontSize: "1.5rem",
    margin: "1rem",
    padding: "5px",
  };
  return (
    <div style={{ textAlign: "center" }}>
      <form action={`/flights/${_id}?_method=PUT`} method="POST">
        <div style={{ fontSize: "2rem", fontWeight: "bold", padding: "5px" }}>
          <label
            style={{ margin: "1rem", padding: "5px" }}
            htmlFor="airline-select"
          >
            Airline:
          </label>
          <select
            style={{ margin: "1rem", fontSize: "1.5rem", padding: "5px" }}
            type="text"
            id="airline-select"
            name="airline"
            defaultValue={airline}
          >
            {airlines.map((airline, i) => (
              <option key={i} required>
                {airline}
              </option>
            ))}
          </select>
          <label style={{ margin: "1rem", padding: "5px" }} htmlFor="flightNo">
            Flight NO.:
          </label>
          <input
            style={{ fontSize: "1.5rem", margin: "1rem", padding: "5px" }}
            type="number"
            id="flightNo"
            name="flightNo"
            min="10"
            max="9999"
            defaultValue={flightNo}
          ></input>
        </div>
        <div>
          <h2 style={{ backgroundColor: "grey", padding: "5px" }}>
            Departure:
          </h2>
          <label style={myStyle} htmlFor="airport-select">
            Airport:
          </label>
          <select
            style={myStyle}
            type="text"
            id="airport-select"
            name="departAirport"
          >
            {airports.map((airport, i) => (
              <option key={i} value={airport} defaultValue={airport} required>
                {airport}
              </option>
            ))}
          </select>

          <label style={myStyle} htmlFor="depart">
            Departure Date:
          </label>
          <input
            style={myStyle}
            type="datetime-local"
            id="depart"
            name="depart"
            defaultValue={dt.toISOString().slice(0, 19)}
          ></input>
        </div>
        <div>
          <h2 style={{ backgroundColor: "grey", padding: "5px" }}>
            Destinations:
          </h2>
          {destinations.map((destination, i) => (
            <div key={i} style={{ margin: "1rem" }}>
              <label style={myStyle} htmlFor="airport">
                Airport:
              </label>
              <select
                style={myStyle}
                type="text"
                id="airport-select"
                name="arrivalAirport"
              >
                {airports.map((airport, i) => (
                  <option
                    key={i}
                    value={airport}
                    defaultValue={destination.airport}
                    required
                  >
                    {airport}
                  </option>
                ))}
              </select>
              <label style={myStyle} htmlFor="arrival">
                Arrival Date:
              </label>
              <input
                style={myStyle}
                type="datetime-local"
                id="arrival"
                name="arrival"
                defaultValue={destination.arrival.toISOString().slice(0, 19)}
              ></input>
            </div>
          ))}
        </div>
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
          Submit
        </button>
      </form>
      <a href={`/flights/${_id}`}>
        <button
          style={{
            backgroundColor: "blue",
            fontSize: "2rem",
            color: "white",
            padding: "1rem",
            border: "none",
            borderRadius: "1rem",
            margin: "1rem",
          }}
        >
          Back
        </button>
      </a>
    </div>
  );
}

export default Edit;
