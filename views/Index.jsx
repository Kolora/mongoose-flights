import React from "react";

function Index({ flights }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "3rem" }}>Flight Index</h1>
      {flights.map((flight, i) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          key={i}
        >
          <p
            style={{
              fontSize: "2rem",
              color: new Date(flight.depart) > new Date() ? "green" : "red",
              margin: "1rem",
              padding: "1rem",
            }}
          >{`${flight.airline} ${flight.flightNo} ${flight.depart}`}</p>
          <a
            style={{ fontSize: "2rem", color: "blue" }}
            href={`/flights/${flight._id}`}
          >
            Detail
          </a>
        </div>
      ))}
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          style={{ margin: "1rem", padding: "1rem" }}
          action={`/flights/new`}
        >
          <button
            style={{
              backgroundColor: "pink",
              fontSize: "2rem",
              color: "white",
              padding: "1rem",
              border: "none",
              borderRadius: "1rem",
            }}
          >
            Add Flight
          </button>
        </form>
        <br />
        <form
          style={{ margin: "1rem", padding: "1rem" }}
          action={`/flights/clear?_method=DELETE`}
          method="POST"
        >
          <button
            style={{
              backgroundColor: "pink",
              fontSize: "2rem",
              color: "white",
              padding: "1rem",
              border: "none",
              borderRadius: "1rem",
            }}
          >
            CLEAR
          </button>
        </form>
      </div>
    </div>
  );
}

export default Index;
