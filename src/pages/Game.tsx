import { Container, Paper, Typography, Box, Link } from '@mui/material';
import React from 'react';

const Game = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Paper Dungeon
      </Typography>
      <Typography variant="h5" color="text.secondary" gutterBottom align="center" sx={{ mb: 4 }}>
        A browser-based dungeon crawler game
      </Typography>

      <Paper sx={{ p: 2, mb: 4 }}>
        <Box
          sx={{
            width: '100%',
            height: '1000px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'background.default',
            overflow: 'hidden',
            '@media (max-width: 960px)': {
              height: '800px',
            },
          }}
        >
          <iframe
            src="https://g33krock.github.io/"
            title="Paper Dungeon"
            style={{
              width: '1024px',
              height: '1024px',
              border: 'none',
              transform: 'scale(0.95)',
              transformOrigin: 'center',
              maxWidth: '100%',
              maxHeight: '100%'
            }}
            allow="fullscreen"
            scrolling="no"
          />
        </Box>
      </Paper>

      <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
        <Typography variant="h4" sx={{ mb: 3 }} gutterBottom>
          About the Game
        </Typography>
        <Typography paragraph>
          Paper Dungeon is an interactive browser-based dungeon crawler where you explore a unique paper-themed world. 
          Navigate through different areas, face challenges, and discover new paths in this engaging gaming experience.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }} gutterBottom>
          How to Play
        </Typography>
        <Typography paragraph>
          Use the following controls to navigate through the dungeon:
        </Typography>
        <Box component="ul" sx={{ pl: 3 }}>
          <Typography component="li" paragraph>
            Use the arrow keys or WASD to move your character
          </Typography>
          <Typography component="li" paragraph>
            Explore different areas of the dungeon
          </Typography>
          <Typography component="li" paragraph>
            Interact with objects and discover new paths
          </Typography>
        </Box>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }} gutterBottom>
          Development
        </Typography>
        <Typography paragraph>
          Paper Dungeon was developed using JavaScript, HTML5, and CSS3. The game showcases interactive gameplay mechanics
          and creative design elements. You can view the source code on{' '}
          <Link 
            href="https://github.com/g33krock/g33krock.github.io" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub
          </Link>.
        </Typography>
      </Box>
    </Container>
  );
};

export default Game;
