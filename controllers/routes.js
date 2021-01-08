const router = require('express').Router();

// GET all galleries for homepage
router.get('/', async (req, res) => {
  
    res.render('homepage');
    res.status(200);
  }
);

router.get('/projects', async (req, res) => {
  res.render('projects');
  res.status(200);
});

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

module.exports = router;
