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
      formurl = "";
      if (req.body.formurl != null) formurl = req.body.formurl;
      picture = {};
      if (req.body.picture != null) picture = req.body.picture;

      const newEvent = new Event({
        name: req.body.name,
        venue: venue,
        description: description,
        eventdate: eventdate,
        formurl: formurl,
        picture: req.body.picture,
      });

      const event = await newEvent.save();

      res.json(event);
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

// @route    GET api/event/latest
// @desc     GET event by admin
// @access   public

router.get('/latest',
  async (req, res) => {
    try {
      const events = await Event.find().sort({ eventdate: -1 });
      res.json(events[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });


// @route    delete api/event/delete/:id
// @desc     delete event by admin
// @access   private

router.delete('/delete/:id', auth,
  async (req, res) => {

    try {
      const event = await Event.findById(req.params.id);

      // Check for ObjectId format and post
      if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !event) {
        return res.status(404).json({ msg: 'event not found' });
      }

      await event.remove();

      res.json({ msg: 'Event removed' });


    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }

  });


// @route    PUT api/event/edit/:id
// @desc     PUT event by admin
// @access   Private

router.put(
  "/edit/:id",
  [auth, [check("name", "name is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {

      const event = await Event.findById(req.params.id);

      // Check for ObjectId format and post
      if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !event) {
        return res.status(404).json({ msg: 'event not found' });
      }

      venue = "";
      if (req.body.venue != null) venue = req.body.venue;
      description = "";
      if (req.body.description != null) description = req.body.description;
      eventdate = "";
      if (req.body.eventdate != null) eventdate = req.body.eventdate;
      formurl = "";
      if (req.body.formurl != null) formurl = req.body.formurl;
      picture = {};
      if (req.body.picture != null) picture = req.body.picture;

      event.name = req.body.name;
      event.venue = venue;
      event.description = description;
      event.eventdate = eventdate;
      event.formurl = formurl;
      event.picture = req.body.picture;


      await event.save();

      res.json(event);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);


// @route    GET api/event/:id
// @desc     GET event by admin
// @access   public

router.get('/:id',
  async (req, res) => {

    try {
      const event = await Event.findById(req.params.id);

      // Check for ObjectId format and post
      if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !event) {
        return res.status(404).json({ msg: 'event not found' });
      }

      res.json(event);

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }

  });

module.exports = router;
