const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');


// @route    GET api/admin
// @desc     Get user by token
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
      res.json({
        id: req.user.id
      });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/admin
// @desc     Authenticate admin & get token
// @access   Public
router.post(
  '/',
  [
    check('username', 'Please include a valid username').exists(),
    check('password', 'Password is required').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    try {

      if (username!="admin") {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }


      if (password!="admin") {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const payload = {
        user: {
          id: "admin"
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;