const express = require('express');
const router = express.Router();


const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Blog = require('../../models/Blog');

// @route    POST api/blog
// @desc     POST blog by admin
// @access   Private

router.post('/', [auth, [
    check('title', 'title is required').not().isEmpty()
]],
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            content = "";
            if (req.body.content != null) content = req.body.content;

            const newBlog = new Blog({
                title: req.body.title,
                content: content,
            });

            const blog = await newBlog.save();

            res.json(blog);
        }
        catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }


    });

// @route    GET api/blog
// @desc     get blog by anybody
// @access   Public

router.get('/',
    async (req, res) => {

        try {
            const blogs = await Blog.find().sort({ date: -1 });
            res.json(blogs);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }

    });
// @route    delete api/blog/delete/:id
// @desc     delete blog by admin
// @access   private

router.delete('/delete/:id', auth,
    async (req, res) => {

        try {
            const blog = await Blog.findById(req.params.id);

            // Check for ObjectId format and post
            if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !blog) {
                return res.status(404).json({ msg: 'blog not found' });
            }

            await blog.remove();

            res.json({ msg: 'Blog removed' });


        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }

    });

// @route    PUT api/blog/edit/:id
// @desc     PUT blog by admin
// @access   Private

router.put(
    "/edit/:id",
    [auth, [check("title", "title is required").not().isEmpty()]],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {

            const blog = await Blog.findById(req.params.id);

            // Check for ObjectId format and post
            if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !blog) {
                return res.status(404).json({ msg: 'blog not found' });
            }

            content = "";
            if (req.body.content != null) content = req.body.content;

            blog.title = req.body.title;
            blog.content = content;


            await blog.save();

            res.json(blog);
            console.log(req.body);
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server Error");
        }
    }
);

// @route    GET api/blog/:id
// @desc     GET blog by admin
// @access   public

router.get('/:id',
    async (req, res) => {

        try {
            const blog = await Blog.findById(req.params.id);

            // Check for ObjectId format and post
            if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !blog) {
                return res.status(404).json({ msg: 'blog not found' });
            }

            res.json(blog);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }

    });

module.exports = router;