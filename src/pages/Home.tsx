import { Container, Typography, Box, Avatar } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import optimized images
import robotChickenCoopWebp from '../assets/images-optimized/robot_chicken_coop.webp';
import robotChickenCoopPng from '../assets/images-optimized/robot_chicken_coop.png';
import jobHubWebp from '../assets/images-optimized/job-hub.webp';
import jobHubPng from '../assets/images-optimized/job-hub.png';
import cyberCampusWebp from '../assets/images-optimized/cyber-campus.webp';
import cyberCampusPng from '../assets/images-optimized/cyber-campus.png';
import paperDungeonWebp from '../assets/images-optimized/paper-dungeon.webp';
import paperDungeonPng from '../assets/images-optimized/paper-dungeon.png';

interface Testimonial {
  text: string;
  author: string;
  title: string;
  company: string;
  image: string;
}

interface Image {
  url: {
    webp: any;
    png: any;
  };
  referral: string;
  githubUrl: string;
}

const Home = () => {
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  const projectSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const testimonials: Testimonial[] = [
    {
      text: "I had the pleasure of working with Dallas during his time on our team. From the moment Dallas joined, I could tell they were eager to contribute and bring their best work to our codebase. Originally we sent the wrong laptop, Dallas quickly adjusted and integrated into the team, demonstrating an impressive ability to continue contributing effectively within just a week.  What stands out about Dallas is his determination to understand the problem first, then attacking the problem. We work in a variety of programming languages, and context can switch quickly. He showed a remarkable capacity for adaptability, which allowed him to maintain productivity despite the hiccup with the laptop. Dallas's work ethics were evident from day one, and consistently delivered results that aligned well with the team’s goals.  Dallas also displayed qualities of an engaged and supportive team member, working effectively in our development environment and positively contributing to the team culture. I gave Dallas a LOT of documentation to read, he was able to adapt and took on new responsibilities that went along with what he learned, supported his colleagues in their learning process, which helped with deployment duties and spread the responsibilities among team members. I am certain that Dallas will continue to be successful in whatever future pursued, and I wish them all the best. I would highly recommend Dallas for any future roles, as they bring a combination of technical knowledge, resilience, and collaboration that make them an asset to any team.",
      author: "Jordan Swapp",
      title: "Lead Software Engineer",
      company: "Health Catalyst",
      image: "https://media.licdn.com/dms/image/v2/C5103AQEyo957kDHZxA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516261553237?e=1743638400&v=beta&t=0U2dGl3cZhSCtCToEqsmydeb4chEf4OMXxEngF8l3R8"
    },
    {
      text: "Dallas is an excellent developer and an even better person. Dallas joined our team during a period of growth and fluctuation and quickly established himself as a meaningful contributor on our team. What impressed me most about Dallas was his eagerness to go outside his own comfort zone of skillset and domain knowledge to take on big tasks that required learning and growth. He eagerly stretched to reach new capabilities while leveraging his already formidable existing skillset. As a member of our remote team, he proactively created strong relationships with other team members, and exhibited ownership of a positive and strongly collaborative team culture. I would strongly recommend Dallas to anyone, with confidence that he'll have as positive an impact on your team as he has on ours.",
      author: "Aaron Johnson",
      title: "VP of Engineering, Business Decision Support, Improvement",
      company: "Health Catalyst",
      image: "https://media.licdn.com/dms/image/v2/D5635AQElx_VQGKuMiw/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1738077204973?e=1738872000&v=beta&t=ad5-IdXABJ1ShcktbiYsEa40DdC0npsee2dmdL4hbJo"
    },
    {
      text: "I had the pleasure of working with Dallas during my time leading the Technology Platform Group at Health Catalyst. Dallas joined our Core Platform Engineering group and onboarded quickly to a team that crossed a large range of responsibilities in technology that was new to Dallas. Dallas is a self-starter and fast learner and was able to start contributing to the success of the team and business very quickly (which was a huge help to that team at the time). He is a capable software engineer who understands the technology and processes to be successful across the full engineering stack (front end, backend, and DevOps) and isn't afraid to learn new things. Dallas is also a great cultural fit for any team he is a part of. He is willing to jump in and help on any task that needs doing and asks good questions when more understanding is needed. Dallas would be a valuable contributor to any frontend, backend or DevOps team.",
      author: "Brett Hinton",
      title: "Senior Site Reliability Engineer",
      company: "SelectHealth",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFQ7-iy20hTJw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705819671665?e=1743638400&v=beta&t=x60IkcVYrHLm0j62mK2B9wrfZt17gDI5u3f3cgXoi58"
    },
    {
      text: "Dallas is an incredibly kind, smart, and tenacious person and software engineer. He is not afraid of problems, nor new technologies, and is always willing to tackle a problem even if it will mean dealing with technology he hasn't encountered before. He is constantly learning new things, finding solutions, and wanting to grow his skill set.  Dallas is dedicated to helping people. He is the first person to volunteer to take on complex problems and will not give up until a solution has been found. While Dallas was on my team I could always count on him to do more than his share of the work. He is the ultimate team player.  Dallas is also incredibly emotionally intuitive and thoughtful. He brings a human element and camaraderie to his team, even if the team is remote. He paid for several trips himself to travel out of state to come to the office and meet up with his remote team, even when there wasn't a work budget to support the trips. He values human connection and relationships, and in the end this care strengthens the team around him, enabling them to be more effective than most remote teams. I'm sure this would only be compounded for a traditional office team.  Dallas would be an asset to any company. I am so grateful to know him.",
      author: "Angela Simmons",
      title: "Home entrepreneur",
      company: "Self Employed",
      image: "https://media.licdn.com/dms/image/v2/C5603AQFMWKdgQ9K4uA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1605545535778?e=1743638400&v=beta&t=9FJDVyZJLktoH7EY_Y9-Yhe-s7iKr8ubApw2Txehags"
    },
    {
      text: "Dallas is a multifaceted, highly skilled, software engineer. The breadth of his knowledge and talent across the computer engineering space is not only impressive, it's a bit intimidating. I've been able to work with Dallas on building a database and data pipeline that brings in JSON objects into a Postgres database and then building an API to connect a Regression Classification model to that database to automate reports for the non-profit we both work with. If you didn't know better, you would think he was a Staff Data Engineer, but I'm not surprised given his skills as Full Stack engineer. I highly recommend Dallas for any engineering position. He's a pleasure to work with and were he a basketball player, a franchise would build their team around him, he's that good. Best of luck with all your future endeavors Dallas...and remember me when you're famous.",
      author: "Karl Tilleman",
      title: "Data Engineer",
      company: "State Farm",
      image: "https://media.licdn.com/dms/image/v2/D5603AQEFAmlDHqCpzw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709989098524?e=1743638400&v=beta&t=zjeqLO5fp0QeufV9WO_qvwxnsRGTAUP8E-4J8KbUjTA"
    },
    {
      text: "Dallas is a motivated learner who cares deeply about being excellent at his job—you can tell right away that 'bare minimum' just isn't what he does. He proactively finds and fixes bugs before anyone else notices them, and never backs down from a difficult task. As a bonus, he brings a lot of versatility to the table, having worked in ops as well. I've really enjoyed working with him; he responds well to feedback and is a great teammate in every way.",
      author: "Isaac Lyman",
      title: "Principal Web Service Engineer • Indie App Developer • Author of 'Your First Year in Code'",
      company: "CardFlight",
      image: "https://media.licdn.com/dms/image/v2/D5603AQGFtUqz2oZinw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1667571008647?e=1743638400&v=beta&t=FDutzCDZ92_JdLncVWrWdjylmLlv_ffcaCIYGmqxZ2Q"
    },
  ];

  const images: Image[] = [
    { 
      url: {
        webp: robotChickenCoopWebp,
        png: robotChickenCoopPng
      },
      referral: 'Robot Chicken Coop',
      githubUrl: 'https://github.com/g33krock/RobotChickenCoop'
    },
    {
      url: {
        webp: jobHubWebp,
        png: jobHubPng
      },
      referral: 'Job Hub',
      githubUrl: 'https://github.com/g33krock/JobHub'
    },
    {
      url: {
        webp: cyberCampusWebp,
        png: cyberCampusPng
      },
      referral: 'Cyber Campus',
      githubUrl: 'https://github.com/g33krock/aspire-digicampus'
    },
    {
      url: {
        webp: paperDungeonWebp,
        png: paperDungeonPng
      },
      referral: 'Paper Dungeon',
      githubUrl: 'https://github.com/g33krock/g33krock.github.io'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Welcome to My Portfolio
      </Typography>
      
      <Box sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
        <Slider {...projectSettings}>
          {images.map((image, index) => (
            <div key={index}>
              <div style={{ position: 'relative', padding: '8px' }}>
                <a href={image.githubUrl} target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer', display: 'block' }}>
                  <picture>
                    <source srcSet={image.url.webp} type="image/webp" />
                    <img
                      src={image.url.png}
                      alt={image.referral}
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '400px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        display: 'block'
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '8px',
                        left: '8px',
                        right: '8px',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        color: 'white',
                        padding: '16px',
                        borderBottomLeftRadius: '8px',
                        borderBottomRightRadius: '8px',
                        textAlign: 'center'
                      }}
                    >
                      <Typography variant="h6">
                        {image.referral}
                      </Typography>
                    </div>
                  </picture>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </Box>

      <Box sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
          What People Say
        </Typography>
        <Slider {...testimonialSettings}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} sx={{ 
              textAlign: 'center',
              px: 4,
              py: 2
            }}>
              <Box sx={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                backgroundColor: 'background.paper',
                borderRadius: 2,
                p: 4,
                boxShadow: 1
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Avatar 
                    alt={testimonial.author} 
                    src={testimonial.image} 
                    sx={{ 
                      width: 100, 
                      height: 100 
                    }} 
                  />
                </Box>
                <Typography variant="body1" sx={{ 
                  fontStyle: 'italic',
                  mb: 2,
                  color: 'text.primary'
                }}>
                  "{testimonial.text}"
                </Typography>
                <Box>
                  <Typography variant="h6" component="p" sx={{ fontWeight: 'bold' }}>
                    {testimonial.author}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {testimonial.title}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {testimonial.company}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>

      <Typography variant="h5" gutterBottom>
        About Me
      </Typography>
      <Typography paragraph>
        Welcome to my personal website! I'm a passionate developer who loves creating
        interactive experiences and solving complex problems. Feel free to explore my
        projects, play my JavaScript game, or check out my professional experience.
      </Typography>
    </Container>
  );
};

export default Home;
