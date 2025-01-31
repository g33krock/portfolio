import { Container, Typography, Button, Box, Grid, Paper } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { useRef } from 'react';
import html2pdf from 'html2pdf.js';

const Resume = () => {
  const resumeRef = useRef<HTMLDivElement>(null);
  
  const handleDownloadPDF = () => {
    const element = resumeRef.current;
    const opt = {
      margin: 1,
      filename: 'dallas-lovell-resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    if (element) {
      html2pdf().set(opt).from(element).save();
    }
  };

  const contactInfo = {
    email: 'dallaslovell@gmail.com',
    phone: '480-823-1141',
    location: 'Phoenix, AZ'
  };

  const skills = {
    languages: ['C#', 'TypeScript', 'JavaScript', 'Python', 'C++', 'Haitian Creole'],
    frameworks: ['.NET Web API', 'Angular', 'React', 'Node.js', 'Express'],
    cloud: ['Azure Cloud', 'AWS', 'Azure DevOps', 'Azure Functions', 'Azure Logic Apps'],
    databases: ['SQL Server', 'PostgreSQL', 'MongoDB', 'MySQL'],
    other: ['Git', 'HTML5', 'SCSS', 'Redux', 'RxJS', 'PowerShell', 'Microcontroller programming']
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          onClick={handleDownloadPDF}
          sx={{ mb: 2 }}
        >
          Download PDF
        </Button>
      </Box>
      
      <div ref={resumeRef}>
        {/* Header Section */}
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h3" gutterBottom>Dallas Lovell</Typography>
          <Typography variant="h5" color="primary" gutterBottom>Full Stack Software Engineer</Typography>
          
          <Box sx={{ display: 'flex', gap: 3, mt: 2, flexWrap: 'wrap' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography>Email: {contactInfo.email}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography>Phone: {contactInfo.phone}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography>Location: {contactInfo.location}</Typography>
            </Box>
          </Box>
        </Paper>

        {/* Work Experience Section */}
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h5" gutterBottom color="primary">Work Experience</Typography>
          
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6">Software Engineer</Typography>
            <Typography variant="subtitle1" color="primary">Health Catalyst — Feb 2022 - Feb 2025</Typography>
            <Typography variant="body1">Led development of budget adjustment features in planning tools for healthcare systems.</Typography>
            <Typography variant="body1">Contributed to features and improvements throughout the stack, including database queries, HTTP endpoints, and front-end UI.</Typography>
            <Typography variant="body1">Used .NET Web API to connect frontend code to stored procedures in SQL Server, write business logic for sorting, filtering, calculations, and data shaping, and implement unit tests.</Typography>
            <Typography variant="body1">Implemented Angular 15 for the front-end of patient management systems, ensuring compliance with web standards and accessibility guidelines.</Typography>
            <Typography variant="body1">Utilized Azure Cloud Services for deploying scalable healthcare applications, achieving 99.9% uptime.</Typography>
            <Typography variant="body1">Integrated Azure AI services and GPT-3 for healthcare data analysis and chatbot enhancement.</Typography>
            <Typography variant="body1">Maintained automated deployment pipelines for over 150 client environments in Azure DevOps.</Typography>
            <Box sx={{ mt: 1 }}>
              <Typography variant="subtitle2" gutterBottom>Technologies:</Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {['C#', '.NET Web API', 'SQL Server', 'Angular 15', 'RxJS', 'Redux', 'SCSS', 'Azure Cloud', 'Azure Active Directory'].map((tech) => (
                  <Typography key={tech} variant="body2">{tech}</Typography>
                ))}
              </Box>
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6">Software Developer (Contract)</Typography>
            <Typography variant="subtitle1" color="primary">Agate Software — Feb 2024 - Apr 2024</Typography>
            <Typography variant="body1">Developed state government solutions using .NET Framework, improving data integrity and workflow efficiency.</Typography>
            <Typography variant="body1">Managed Azure SQL databases and implemented Azure DevOps CI/CD pipelines.</Typography>
            <Typography variant="body1">Integrated AI-driven analytics features using Azure Cognitive Services.</Typography>
            <Box sx={{ mt: 1 }}>
              <Typography variant="subtitle2" gutterBottom>Technologies:</Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {['SQL Server', 'Visual Basic', 'C#', 'Javascript', 'Azure'].map((tech) => (
                  <Typography key={tech} variant="body2">{tech}</Typography>
                ))}
              </Box>
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6">Full Stack Developer (Contract)</Typography>
            <Typography variant="subtitle1" color="primary">MPI Unlimited — Nov 2021 - Feb 2022</Typography>
            <Typography variant="body1">Created a configurable website generator used by 40+ financial services agencies.</Typography>
            <Typography variant="body1">Led development of an event management platform using .NET and React.</Typography>
            <Typography variant="body1">Maintained company landing page and five interconnected marketing sites.</Typography>
            <Box sx={{ mt: 1 }}>
              <Typography variant="subtitle2" gutterBottom>Technologies:</Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {['PostgreSQL', 'Node', 'Express', 'React', 'WordPress', 'JavaScript', 'PHP', 'CSS'].map((tech) => (
                  <Typography key={tech} variant="body2">{tech}</Typography>
                ))}
              </Box>
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6">Technology Director</Typography>
            <Typography variant="subtitle1" color="primary">AZ Aspire Academy — Aug 2020 - Feb 2022</Typography>
            <Typography variant="body1">Developed CyberCampus student information platform used by 60+ teachers across 5 campuses.</Typography>
            <Typography variant="body1">Built features for tracking grades, attendance, accommodations, and automated reporting.</Typography>
            <Box sx={{ mt: 1 }}>
              <Typography variant="subtitle2" gutterBottom>Technologies:</Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {['PostgreSQL', 'TypeORM', 'Node', 'Express', 'React', 'CSS'].map((tech) => (
                  <Typography key={tech} variant="body2">{tech}</Typography>
                ))}
              </Box>
            </Box>
          </Box>
        </Paper>

        {/* Current Project */}
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h5" gutterBottom color="primary">Current Project</Typography>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6">Lead Developer</Typography>
            <Typography variant="subtitle1" color="primary">TukeeToolbox, NonProfit Project — Oct 2023 - Present</Typography>
            <Typography variant="body1">Lead team of 3 engineers developing organization and data presentation product.</Typography>
            <Typography variant="body1">Built features for data integration, comparison, and automated alerting.</Typography>
            <Box sx={{ mt: 1 }}>
              <Typography variant="subtitle2" gutterBottom>Technologies:</Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {['AWS', 'Terraform', 'SQL', 'Python', 'Javascript'].map((tech) => (
                  <Typography key={tech} variant="body2">{tech}</Typography>
                ))}
              </Box>
            </Box>
          </Box>
        </Paper>

        {/* Education Section */}
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h5" gutterBottom color="primary">Education</Typography>
          
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6">Certificate in Full Stack Web Development</Typography>
            <Typography variant="subtitle1">Nucamp — Feb 2020</Typography>
            <Typography variant="body2">Technologies: MongoDB, React, React Native, Bootstrap</Typography>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography variant="h6">M.S. in Educational Leadership</Typography>
            <Typography variant="subtitle1">Northern Arizona University — May 2017</Typography>
            <Typography variant="body2">Graduated with honors</Typography>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography variant="h6">M.S. in Elementary Education</Typography>
            <Typography variant="subtitle1">Arizona State University — May 2013</Typography>
            <Typography variant="body2">Minor: Educational Technology</Typography>
          </Box>

          <Box>
            <Typography variant="h6">B.S. in Business Administration</Typography>
            <Typography variant="subtitle1">Brigham Young University Idaho — Dec 2005</Typography>
          </Box>
        </Paper>

        {/* Skills Section */}
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom color="primary">Technical Skills</Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>Languages</Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {skills.languages.map((skill) => (
                  <Typography key={skill} variant="body2">{skill}</Typography>
                ))}
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>Frameworks</Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {skills.frameworks.map((skill) => (
                  <Typography key={skill} variant="body2">{skill}</Typography>
                ))}
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>Cloud & DevOps</Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {skills.cloud.map((skill) => (
                  <Typography key={skill} variant="body2">{skill}</Typography>
                ))}
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>Databases</Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {skills.databases.map((skill) => (
                  <Typography key={skill} variant="body2">{skill}</Typography>
                ))}
              </Box>
            </Grid>
            
            <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>Other Technologies</Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {skills.other.map((skill) => (
                  <Typography key={skill} variant="body2">{skill}</Typography>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Container>
  );
};

export default Resume;
