const express = require('express');
const router = express.Router();


const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Image = require('../../models/Image');

// @route    POST api/image
// @desc     POST image by admin
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

            const newImage = new Image({
                picture: picture,
                title: title,
                caption: caption,
            });

            const image = await newImage.save();

            res.json(image);
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server Error");
        }
    }
);
router.get("/", async (req, res) => {
    try {
        const images = await Image.find().sort({ date: -1 });
        const reqimages = [];
        reqimages.push(images[images.length - 1]);
        reqimages.push(images[images.length - 2]);
        reqimages.push(images[images.length - 3]);
        res.json(reqimages);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
module.exports = router;