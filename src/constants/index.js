import project1 from "../assets/CALRSLogin.png";
import project2 from "../assets/LIRCPortal.png";
import project3 from "../assets/Portfolio.png";
import project4 from "../assets/LIRCBarcode.jpg";


import experience1  from "../assets/Continental.png";
import experience2  from "../assets/CCC.png";

export const HERO_CONTENT = `I am a fresh graduate with a Bachelor of Science in Information Technology, eager to expand my knowledge and expertise in web development. I have hands-on experience with HTML, CSS, JavaScript, PHP, Bootstrap, Python, and React. I am passionate about building dynamic and responsive websites. To deliver innovative, high-quality solutions, I am committed to continuous learning and staying current with industry trends. Explore my portfolio to see the diverse projects I’ve worked on and my technical expertise in action.`;

export const ABOUT_TEXT = `I am a fresh graduate with a Bachelor of Science in Information Technology, eager to expand my knowledge and expertise in web development. I have hands-on experience with HTML, CSS, JavaScript, PHP, Bootstrap, Python, and React. I am passionate about building dynamic and responsive websites, and I look forward to enhancing my skills and contributing to innovative web projects.`;

export const EXPERIENCES = [
  {
    year: "2024",
    image: experience1,
    role: "IT Support Intern",
    company: " Continental Calamba",
    description: `Maintaining and implementing services inside and outside of the production and Server Rooms (Server Tracing)
,Assisting Technical Supports (File transfer, Fixing software and hardware problems),
Formatting laptops and desktops and setting up before deploying to the employees,
Maintaining the Inventory of the IT Office,
Maintaining and fixing printer bugs and problems`,
    technologies: ["Software and Hardware Technical Support", "Networking"],
  },
  {
    year: "2024",
    image: experience2,
    role: "Software Developer Intern",
    company: " LIRC at City College of Calamba",
    description: `Developed Two System for the CCC Library (LIRC)
| LIRC Barcode Logging System
| LIRC Portal`,
    technologies: ["HTML", "CSS", "JavaScript", "Php","Bootstrap", "Ajax" ],
  },
];

export const PROJECTS = [
  {
    title: "Capstone Project: Credit Application and Loan Recording System",
    image: project1,
    description:
      "The system focused on streamlining the credit application and making it simpler, faster, accessible, and more transparent for the applicants, reducing the use of a huge amount of paper and manual processes. also automating the recording procedure and monitoring loan transactions by enhancing the efficiency and accuracy of the loan recording system.",
    technologies: ["HTML", "CSS", "JavaScript", "Php","Bootstrap", "Ajax"],
  },
  {
    title: "LIRC Portal",
    image: project2,
    description:
      "The system was implemented to maximize the student's capability to access LIRC services. The system itself has the feature of admin access to set an event or announcement anytime and anywhere because the system is designed to give online services to students and faculty staff.",
    technologies: ["HTML", "CSS", "JavaScript", "Php","Bootstrap", "Ajax"],
  },
  {
    title: "LIRC Barcode Logging System",
    image: project4,
    description:
      "The system was developed to enhance the efficiency and security of accessing educational resources within the CCC Learning Information Resource Center. It's also designed to reduce the time spent on manual login procedures through the automated barcode system, improving overall operational efficiency.",
    technologies: ["HTML", "CSS", "JavaScript", "Php","Bootstrap", "Ajax"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "My personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "JavaScript" ,"React" ],
  },
];

export const CONTACT = {
  address: "Michael Angelo Medina",
  phoneNo: "0969-392-5786",
  email: "michaelmedina913@gmail.com",
};
