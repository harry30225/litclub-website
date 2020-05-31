const express = require('express');
const router = express.Router();


const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Blog = require('../../models/Blog');

// @route    POST api/blog
// @desc     POST blog by admin
// @access   Private

router.post('/',[auth,[
    check('title', 'title is required').not().isEmpty()
]],
async (req,res)=>{

    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    try{
        content="";
        if(req.body.content!=null) content=req.body.content; 
         
        const newBlog= new Blog({
            title: req.body.title,
            content:content,
        });

        const blog = await newBlog.save();

        res.json(blog);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }


});

// @route    GET api/blog
// @desc     get blog by anybody
// @access   Public

router.get('/',
async (req,res)=>{

    try {
        const blogs = await Blog.find().sort({ date: -1 });
        res.json(blogs);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }

});

module.exports = router;