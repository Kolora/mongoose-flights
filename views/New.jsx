import React from "react";
let airlines = ["American", "Southwest", "United"];
let airports = ["AUS", "DAL", "LAX", "SAN", "SEA"];
let myStyle = {
  width: "fit-content",
  fontSize: "1.5rem",
  margin: "1rem",
  padding: "5px",
};
function New({ departsDate }) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Add a new flight:</h1>
      <form
        style={{ width: "fit-content", margin: "auto" }}
        action="/flights"
        method="POST"
      >
        <div
          style={{ display: "flex", flexWrap: "wrap", width: "fit-content" }}
        >
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
              <option key={i} value={airport} required>
                {airport}
              </option>
            ))}
          </select>
        </div>
        <div
          style={{ display: "flex", flexWrap: "wrap", width: "fit-content" }}
        >
          <label style={myStyle} htmlFor="airline-select">
            Airline:
          </label>
          <select
            style={myStyle}
            type="text"
            id="airline-select"
            name="airline"
          >
            {airlines.map((airline, i) => (
              <option key={i} value={airline} required>
                {airline}
              </option>
            ))}
          </select>
        </div>
        <div
          style={{ display: "flex", flexWrap: "wrap", width: "fit-content" }}
        >
          <label style={myStyle} htmlFor="flightNo">
            Flight NO.:
          </label>
          <input
            style={myStyle}
            type="number"
            id="flightNo"
            name="flightNo"
            required
          ></input>
        </div>
        <div
          style={{ display: "flex", flexWrap: "wrap", width: "fit-content" }}
        >
          <label style={myStyle} htmlFor="depart">
            Departure Date:
          </label>
          <input
            style={myStyle}
            type="datetime-local"
            id="depart"
            name="depart"
            defaultValue={departsDate}
          ></input>
        </div>
        <div>
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
              <option key={i} value={airport} required>
                {airport}
              </option>
            ))}
          </select>
        </div>
        <div
          style={{ display: "flex", flexWrap: "wrap", width: "fit-content" }}
        >
          <label style={myStyle} htmlFor="arrival">
            Arrival Date:
          </label>
          <input
            style={myStyle}
            type="datetime-local"
            id="arrival"
            name="arrival"
            defaultValue={departsDate}
          ></input>
        </div>
        <div style={{ width: "fit-content", margin: "auto" }}>
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
        </div>
      </form>
    </div>
  );
}

export default New;
