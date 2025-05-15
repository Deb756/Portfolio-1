import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes } from "lucide-react";

// Separate ShowMore/ShowLess button component
const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-3 py-1.5
      text-slate-300 
      hover:text-white 
      text-sm 
      font-medium 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-white/5 
      hover:bg-white/10
      rounded-md
      border 
      border-white/10
      hover:border-white/20
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          transition-transform 
          duration-300 
          ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}
        `}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  // Static project data - replace with your own projects
  const projects = [
    {
      id: 1,
      Img: "chat.avif",
      Title: "FlowTalk",
      Description: "A real-time chat application built with Java, Spring Boot, WebSockets, JDBC, MySql, Vite. Features include user authentication, message persistence, and real-time communication between users.",
      Link: "https://github.com/Deb756/FlowTalk",
      TechStack: ["Java","Spring Boot","Hibernate","Hibernate ORM","WebSockets","StompJS","MySql","Vite", "Tailwind", "Material UI"]
    },
    {
      id: 2,
      Img: "blogapp.jpg",
      Title: "BlogSpace",
      Description: "A full-featured blogging platform where users can create, edit, and publish content with a rich text editor and image uploads.",
      Link: "https://github.com/Deb756/BlogApp-V-R",
      TechStack: ["Java","Spring Boot","Hibernate","Hibernate ORM","MySql","Vite", "Tailwind", "Material UI"]
    },
    {
      id: 3,
      Img: "textutil.avif",
      Title: "Text-Formatter",
      Description: "A web-based text formatter tool that allows users to format, style, and enhance text effortlessly. Features include text case conversion, indentation, spacing adjustments, and other formatting options for improved readability and presentation.",
      Link: "https://deb756.github.io/textutils/",
      TechStack: ["React", "Tailwind","TypeScript"]
    },
    {
      id: 4,
      Img: "news.avif",
      Title: "Newsify",
      Description: "A dynamic news application that delivers real-time updates across various categories, including politics, sports, technology, and entertainment. Features include user authentication, personalized news feeds, and an intuitive interface for seamless browsing",
      Link: "https://github.com/Deb756/News-app-React",
      TechStack: ["React", "Tailwind", "JSX","News Api"]
    },
    {
      id: 5,
      Img: "userMng.avif",
      Title: "User Management System",
      Description: "A secure authentication and user management solution with role-based access control and profile management features.",
      Link: "https://github.com/Deb756/User-Management-System-Proj1",
      TechStack: ["Java","Servlet","JSP","JDBC","MySql","JavaScript","CSS"]
    },
    {
      id: 6,
      Img: "notes.avif",
      Title: "E-Notes",
      Description: "A digital notes application that enables users to create, organize, and manage their notes efficiently. Features include user authentication, rich text editing, note categorization, and secure cloud storage for easy access anytime, anywhere.",
      Link: "https://github.com/Deb756/e-notes-application",
      TechStack: ["Java","Spring MVC","Hibernate ","Hibernate ORM","MySql","JavaScript","CSS"]
    },
    {
      id: 7,
      Img: "music.jpg",
      Title: "Echos",
      Description: "Echos is a web-based music player that offers seamless audio streaming with a sleek and user-friendly interface. Features include song categorization, and a responsive design for an immersive listening experience.",
      Link: "https://github.com/Deb756/Music-player-website2",
      TechStack: ["Html", "css", "Vanilla JavaScript"]
    },
    {
      id: 8,
      Img: "pyChatbot.avif",
      Title: "Chat-Bot",
      Description: "Acess the AI ChatBot through your local terminal.",
      Link: "https://github.com/Deb756/ChatBot-Py",
      TechStack: ["Python", "Google-GenAi"]
    },
  ];

  // Static certificate data - replace with your own certificates
  const certificates = [
    { Img: "JavaCertificateGFG.jpg", Title: "Full Stack Web Development", Issuer: "Udemy" },
    // { Img: "certificate-react.jpg", Title: "React - The Complete Guide", Issuer: "Coursera" },
    // { Img: "certificate-javascript.jpg", Title: "Advanced JavaScript", Issuer: "freeCodeCamp" },
    // { Img: "certificate-nodejs.jpg", Title: "Node.js Masterclass", Issuer: "Udemy" },
    // { Img: "certificate-aws.jpg", Title: "AWS Certified Developer", Issuer: "Amazon Web Services" },
    // { Img: "certificate-ui-ux.jpg", Title: "UI/UX Design Fundamentals", Issuer: "Interaction Design Foundation" },
    // { Img: "certificate-mongodb.jpg", Title: "MongoDB for Developers", Issuer: "MongoDB University" },
    // { Img: "certificate-docker.jpg", Title: "Docker and Kubernetes", Issuer: "LinkedIn Learning" }
  ];

  // Tech stacks (unchanged)
  const techStacks = [
    { icon: "java.svg", language: "Java" },
    { icon: "Spring_Boot.svg.png", language: "Spring Boot" },
    { icon: "hibernate.svg", language: "Hibernate" },
    { icon: "jsp.svg", language: "JSP" },
    { icon: "mysql.svg", language: "MySql" },
    { icon: "python.svg", language: "Python" },
    { icon: "html.svg", language: "HTML" },
    { icon: "css.svg", language: "CSS" },
    { icon: "javascript.svg", language: "JavaScript" },
    { icon: "tailwind.svg", language: "Tailwind CSS" },
    { icon: "reactjs.svg", language: "ReactJS" },
    { icon: "vite.svg", language: "Vite" },
    { icon: "nodejs.svg", language: "Node JS" },
    { icon: "bootstrap.svg", language: "Bootstrap" },
    { icon: "nextjs.svg", language: "NextJs" },
    { icon: "MUI.svg", language: "Material UI" },
    { icon: "vercel.svg", language: "Vercel" },
    { icon: "mongo.svg", language: "MongoDb" },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = (type) => {
    if (type === 'projects') {
      setShowAllProjects(prev => !prev);
    } else {
      setShowAllCertificates(prev => !prev);
    }
  };

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems);

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">
      {/* Header section */}
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span style={{
            color: '#6366f1',
            backgroundImage: 'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical expertise.
          Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        {/* AppBar and Tabs section */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="md:px-4"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                  "& .lucide": {
                    transform: "scale(1.1) rotate(5deg)",
                  },
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                  "& .lucide": {
                    color: "#a78bfa",
                  },
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
            }}
          >
            <Tab
              icon={<Code className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={<Award className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Certificates"
              {...a11yProps(1)}
            />
            <Tab
              icon={<Boxes className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Tech Stack"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                {displayedProjects.map((project, index) => (
                  <div
                    key={project.id || index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <CardProject
                      Img={project.Img}
                      Title={project.Title}
                      Description={project.Description}
                      Link={project.Link}
                      id={project.id}
                      TechStack={project.TechStack}
                    />
                  </div>
                ))}
              </div>
            </div>


            {projects.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore('projects')}
                  isShowingMore={showAllProjects}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
                {displayedCertificates.map((certificate, index) => (
                  <div
                    key={index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <Certificate ImgSertif={certificate.Img} />
                  </div>
                ))}
              </div>
            </div>
            {certificates.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore('certificates')}
                  isShowingMore={showAllCertificates}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                {techStacks.map((stack, index) => (
                  <div
                    key={index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}