import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/portfolio' },
    { text: 'Resume', path: '/resume' },
    { text: 'Projects', path: '/projects' },
    { text: 'Game', path: '/game' },
  ];

  const socialLinks = [
    { text: 'GitHub', icon: <GitHubIcon />, href: 'https://github.com/g33krock' },
    { text: 'YouTube', icon: <YouTubeIcon />, href: 'https://www.youtube.com/@dallasmakesstuff' },
    { text: 'LinkedIn', icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/dallas-lovell-9b70645b/' },
  ];

  const drawer = (
    <Box sx={{ width: 250, bgcolor: 'primary.main' }} role="presentation" onClick={handleDrawerToggle}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} component={RouterLink} to={item.path} sx={{ color: 'white', textDecoration: 'none' }}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        {socialLinks.map((item) => (
          <ListItem key={item.text} component="a" href={item.href} target="_blank" sx={{ color: 'white', textDecoration: 'none' }}>
            <Box sx={{ mr: 1, color: 'white' }}>{item.icon}</Box>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        ) : null}
        
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {menuItems.map((item) => (
            <Button
              key={item.text}
              color="inherit"
              component={RouterLink}
              to={item.path}
            >
              {item.text}
            </Button>
          ))}
        </Box>
        
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {socialLinks.map((item) => (
            <Button
              key={item.text}
              color="inherit"
              startIcon={item.icon}
              href={item.href}
              target="_blank"
            >
              {item.text}
            </Button>
          ))}
        </Box>

        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
