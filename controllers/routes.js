const router = require('express').Router();
const fs = require('fs');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  
    res.render('homepage');
    res.status(200);
  }
);

router.get('/the-frontend', async (req, res) => {
  const jsonProjects = fs.readFileSync('./config/projects.json');
  const projectData = { projects : JSON.parse(jsonProjects) };
  console.log(projectData);
  res.render('projects', projectData);
  res.status(200); 
});

router.get('/the-backend', async (req, res) => {
  res.render('about');
  res.status(200);
});

router.get('/the-api', async (req, res) => {
  res.render('contact-me');
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
