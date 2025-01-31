import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

// Import optimized images
import paperDungeonWebp from '../assets/images-optimized/paper-dungeon.webp';
import paperDungeonPng from '../assets/images-optimized/paper-dungeon.png';
import cyberCampusWebp from '../assets/images-optimized/cyber-campus.webp';
import cyberCampusPng from '../assets/images-optimized/cyber-campus.png';
import jobHubWebp from '../assets/images-optimized/job-hub.webp';
import jobHubPng from '../assets/images-optimized/job-hub.png';
import robotChickenCoopWebp from '../assets/images-optimized/robot_chicken_coop.webp';
import robotChickenCoopPng from '../assets/images-optimized/robot_chicken_coop.png';

interface Project {
  title: string;
  description: string;
  image: {
    webp: string;
    png: string;
  };
  githubUrl: string;
  demoUrl?: string;
  technologies: string[];
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Paper Dungeon',
      description: 'An interactive browser-based dungeon crawler game. Players explore a paper-themed dungeon, face challenges, and discover new areas in this unique gaming experience.',
      image: {
        webp: paperDungeonWebp,
        png: paperDungeonPng
      },
      githubUrl: 'https://github.com/g33krock/g33krock.github.io',
      demoUrl: 'https://g33krock.github.io/',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Game Development']
    },
    {
      title: 'Cyber Campus',
      description: 'A comprehensive student information platform used by 60+ teachers across 5 private school campuses. Features include grade tracking, attendance management, accommodation compliance, and automated reporting.',
      image: {
        webp: cyberCampusWebp,
        png: cyberCampusPng
      },
      githubUrl: 'https://github.com/g33krock/aspire-digicampus',
      technologies: ['PostgreSQL', 'TypeORM', 'Node.js', 'Express', 'React', 'TypeScript']
    },
    {
      title: 'Job Hub',
      description: 'A platform for managing job applications and tracking career opportunities. Helps users organize their job search process and maintain relevant documentation.',
      image: {
        webp: jobHubWebp,
        png: jobHubPng
      },
      githubUrl: 'https://github.com/g33krock/JobHub',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB']
    },
    {
      title: 'Robot Chicken Coop',
      description: 'An automated chicken coop management system. Features include automated door control, environmental monitoring, and remote management capabilities.',
      image: {
        webp: robotChickenCoopWebp,
        png: robotChickenCoopPng
      },
      githubUrl: 'https://github.com/g33krock/RobotChickenCoop',
      technologies: ['Python', 'IoT', 'Raspberry Pi', 'Sensors']
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Projects
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary" sx={{ mb: 6 }}>
        Featured Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <picture>
                <source srcSet={project.image.webp} type="image/webp" />
                <CardMedia
                  component="img"
                  sx={{
                    height: 300,
                    objectFit: 'cover'
                  }}
                  image={project.image.png}
                  alt={project.title}
                />
              </picture>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Technologies:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.technologies.map((tech, i) => (
                      <Typography
                        key={i}
                        variant="body2"
                        sx={{
                          bgcolor: 'primary.main',
                          color: 'white',
                          px: 1,
                          py: 0.5,
                          borderRadius: 1,
                          fontSize: '0.75rem'
                        }}
                      >
                        {tech}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </CardContent>
              <Box sx={{ p: 2 }}>
                <Button 
                  size="small" 
                  startIcon={<GitHubIcon />}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </Button>
                {project.demoUrl && (
                  <Button 
                    size="small" 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Demo
                  </Button>
                )}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
