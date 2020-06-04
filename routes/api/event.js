const express = require("express");
const router = express.Router();

const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const Event = require("../../models/Event");

// @route    POST api/event
// @desc     POST event by admin
// @access   Private

router.post(
  "/",
  [auth, [check("name", "name is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      venue = "";
      if (req.body.venue != null) venue = req.body.venue;
      description = "";
      if (req.body.description != null) description = req.body.description;
      eventdate = "";
      if (req.body.eventdate != null) eventdate = req.body.eventdate;

      const newEvent = new Event({
        name: req.body.name,
        venue: venue,
        description: description,
        eventdate: eventdate,
      });

      const event = await newEvent.save();

      res.json(event);
      console.log(req.body);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    GET api/event
// @desc     get event by anybody
// @access   Public

router.get("/", async (req, res) => {
  try {
    const events = await Event.find().sort({ date: -1 });
    res.json(events);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
