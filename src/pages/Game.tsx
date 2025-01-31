import { Container, Paper, Typography, Box, Link } from '@mui/material';

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
          Paper Dungeon is an interactive browser-based card game where you explore a unique paper-themed world. 
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
          Home Screen: Click the doorknob on the door to start.
          </Typography>
          <Typography component="li" paragraph>
          Party Select: Choose your party size, assign roles, and select proficiencies for each role.
          </Typography>
          <Typography component="li" paragraph>
          Start Game: Begin the game; your players' decks are at the top, monsters' decks at the bottom.
          </Typography>
          <Typography component="li" paragraph>
          Play a Round: Click each player's deck to draw two cards, select a card, and target a monster or another player.
          </Typography>
          <Typography component="li" paragraph>
          Monster Turn: After all players have taken their turns, monsters resolve their actions.
          </Typography>
          <Typography component="li" paragraph>
          Round End: The round ends when all players or monsters are defeated. Repeat until the game concludes.
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
