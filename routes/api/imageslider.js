const express = require('express');
const router = express.Router();


const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Imageslider = require('../../models/Imageslider');

// @route    POST api/imageslider
// @desc     POST imageslider by admin
// @access   Private

router.post(
    "/",
    [auth],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            picture = {};
            if (req.body.picture != null) picture = req.body.picture;
            title = "";
            if (req.body.title != null) title = req.body.title;
            caption = "";
            if (req.body.caption != null) caption = req.body.caption;

            const newImageslider = new Imageslider({
                picture: picture,
                title: title,
                caption: caption,
            });

            const imageslider = await newImageslider.save();

            res.json(imageslider);
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server Error");
        }
    }
);
router.get("/", async (req, res) => {
    try {
        const imagesliders = await Imageslider.find().sort({ date: -1 });
        const reqimageslider = [];
        reqimageslider.push(imagesliders[imagesliders.length - 1]);
        reqimageslider.push(imagesliders[imagesliders.length - 2]);
        reqimageslider.push(imagesliders[imagesliders.length - 3]);
        res.json(reqimageslider);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
module.exports = router;