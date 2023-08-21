// Load the Fruit model so we can interact with the collection
const Flight = require("../models/Flight");
const Destination = require("../models/Flight");

// GET /flights
module.exports.index = async (req, res) => {
  let flights;

  try {
    flights = await Flight.find().sort({ departs: 1 });
  } catch (err) {
    console.log("Failed to create a flight document: ", err);
  }

  console.log(flights);
  res.render("Index", { flights });
};

//  GET /flights/new
module.exports.new = (req, res) => {
  const newFlight = new Flight();
  // Obtain the default date
  const dt = newFlight.departs;

  let dateTime = `${dt.getFullYear()}-${dt
    .getMonth()
    .toString()
    .padStart(2, "0")}-${dt.getDate().toString().padStart(2, "0")}T${dt
    .getHours()
    .toString()
    .padStart(2, "0")}:${dt.getMinutes().toString().padStart(2, "0")}:${dt
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;
  // Format the date for the value attribute of the input

  const departsDate = dt.toISOString().slice(0, 19);

  res.render("New", { dateTime });
};

// // POST /flights
module.exports.create = async (req, res) => {
  console.log("POST /flights");
  console.log(req.body);

  try {
    let flight = await Flight.create(req.body);
    console.log(flight);
  } catch (err) {
    console.log("Failed to create a flight document: ", err);
  }

  res.redirect("/flights");
};

module.exports.show = async (req, res) => {
  console.log("GET /flights/:id");
  let flight;

  try {
    flight = await Flight.findById(req.params.id);
    console.log(flight);
  } catch (err) {
    console.log("Failed to find flight document with id " + req.params.id, err);
  }

  if (flight) {
    res.render("Show", { flight });
  } else {
    res.redirect("/flights");
  }
};

// DELETE /flights/:id
module.exports.destroy = async (req, res) => {
  console.log("DELETE /flights/:id");

  try {
    await Flight.findByIdAndDelete(req.params.id);
  } catch (err) {
    console.log(err.message);
  }

  res.redirect("/flights");
};

// PUT /flights/:indexOfFruit
module.exports.update = (req, res) => {
  console.log("PUT /flights/:indexOfFlight");

  flights[req.params.indexOfFlight] = req.body;

  res.redirect("/flights");
};

//  GET /fruits/:indexOfFruit/edit
module.exports.edit = async (req, res) => {
  let flight;
  try {
    flight = await Flight.findById(req.params.id);
    console.log(flight);
    res.render("Edit", { flight });
  } catch (err) {
    console.log("Failed to find Flight document with id " + req.params.id, err);
    res.redirect(`/flights/${req.params.id}`);
  }
  res.render("Edit", { flight });
};

module.exports.clear = async (req, res) => {
  console.log("DELETE /flights/clear");

  try {
    await Flight.deleteMany({});
  } catch (err) {
    console.log(err.message);
  }

  res.redirect("/flights");
};
module.exports.updateDestination = async (req, res) => {
  console.log("/PUT ");
  try {
    let newFlight = await Flight.findById(req.params.id);
    newFlight.destinations.push({
      airport: req.body.arrivalAirport,
      arrival: req.body.arrival,
    });
    await Flight.findByIdAndUpdate(req.params.id, newFlight);

    res.redirect(`/flights/${req.params.id}`);
  } catch (err) {
    console.log(err.message);
  }
};
