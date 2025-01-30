import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/resume">
            Resume
          </Button>
          <Button color="inherit" component={RouterLink} to="/projects">
            Projects
          </Button>
          <Button color="inherit" component={RouterLink} to="/game">
            Game
          </Button>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            color="inherit"
            startIcon={<GitHubIcon />}
            href="https://github.com/g33krock"
            target="_blank"
          >
            GitHub
          </Button>
          <Button
            color="inherit"
            startIcon={<YouTubeIcon />}
            href="https://www.youtube.com/@dallasmakesstuff"
            target="_blank"
          >
            YouTube
          </Button>
          <Button
            color="inherit"
            startIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/dallas-lovell-9b70645b/"
            target="_blank"
          >
            LinkedIn
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
