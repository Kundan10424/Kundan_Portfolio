import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    java,
    sql,
    school,
    college,
    coboard,
    netflix,
    editor,
    python,
    github1,
    insta,
    facebook,
    linkedin,
    resume,
  } from "../assets";

  export const socialLinks = [
    { 
      id: "github", 
      name: "GitHub", 
      icon: github1, 
      iconBg: "#E6DEDD",
      url: "https://github.com/kundan10424" 
    },
    { 
      id: "linkedin", 
      name: "Linkedin", 
      icon: linkedin, 
      url: "https://www.linkedin.com/in/kundan10424" 
    },
    { 
      id: "insta", 
      name: "Instagram", 
      icon: insta, 
      url: "https://www.instagram.com/kundan_10424/" 
    },
    { 
      id: "facebook", 
      name: "Facebook", 
      icon: facebook, 
      url: "https://facebook.com/kundan10424" 
    },
    {
      id: "resume",
      name: "Resume",
      icon: resume,
      url: "./resume/Resume.pdf",
      
    },
  ];

  
  export const navLinks = [
    {
      id: "social",
      title: "Social"
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
      
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "FrontEnd Developer",
      icon: backend,
    },
    {
      title: "Software Engineer",
      icon: creator,
    },
  ];

  const technologies = [
    {
      index: 1,
      name: "html",
      icon: html,
    },
    {
      index: 2,
      name: "css",
      icon: css,
    },
    {
      index: 3,
      name:"javascript",
      icon: javascript,
    },
    {
      index: 4,
      name: "typescript",
      icon: typescript,
    },
    {
      index: 5,
      name: "react",
      icon: reactjs,
    },
    {
      index: 6,
      name: "redux",
      icon: redux,
    },
    {
      index: 7,
      name: "tailwind",
      icon: tailwind,
    },
    {
      index: 8,
      name: "nodejs",
      icon: nodejs,
    },
    {
      index: 9,
      name: "mongodb",
      icon: mongodb,
    },
    {
      index: 10,
      name: "python",
      icon: python,
    },
    {
      index: 11,
      name: "git",
      icon: git,
    },
    {
      index: 12,
      name: "java",
      icon: java,
    },
    {
      index: 13,
      name: "sql",
      icon: sql,
    },

  ];
 

  const experiences = [
    {
      title: "J.C. Bose UNiversity of Science and Technology",
      company_name: "B.Tech (Computer Science)",
      icon: college,
      iconBg: "#E6DEDD",
      date: "2019 - 2023",
      points: [
        "8.4 CGPA",
      ],
    },
    {
      title: "Kautilya Govt. Sarvodya Bal Vidyalaya",
      company_name: "Higher Secondary 12th",
      icon: school,
      iconBg: "#383E56",
      date: "2018 - 2019",
      points: [
        "7.5 CGPA",
      ],
    },
    {
      title: "Kautilya Govt. Sarvodya Bal Vidyalaya",
      company_name: "Secondary school 10th",
      icon: school,
      iconBg: "#E6DEDD",
      date: "2016 - 2017",
      points: [
        "8.8 CGPA",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Kundan proved me wrong.",
      name: "Sara Lee",
      // designation: "CFO",
      // company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Kundan does.",
      name: "Chris Brown",
      // designation: "COO",
      // company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Kundan optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      // designation: "CTO",
      // company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Co-Board",
      description:
        "Co-Board is an exhilarating real-time collaborative whiteboard application designed to foster creativity and teamwork. Co-Board offers a captivating platform for users to seamlessly connect, brainstorm, and innovate together on a digital canvas.",

      tags: [
        {
          name: "TypeScript",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "pink-text-gradient",
        },
        {
          name: "Socket.IO",
          color: "text-purple-gradient",
        },
        {
          name: "JavaScript",
          color: "orange-text-gradient",
        },
        {
          name: "Axios",
          color: "text-red-gradient",
        },
      ],
      image: coboard,
      source_code_link: "https://github.com/kundan10424/Co-Board",
    },
    {
      name: "Netflix",
      description:
        "Netflix Hub is an immersive web application thoughtfully crafted to deliver endless entertainment. Netflix Hub offers a seamless platform for users to effortlessly explore, stream, and enjoy their favorite movies, TV shows, and series.",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
          {
            name: "javaScript",
            color: "green-text-gradient",
          },
          {
            name: "Redux",
            color: "pink-text-gradient",
          },
          {
            name: "Axios",
            color: "text-purple-gradient",
          },
          {
            name: "Node.js",
            color: "orange-text-gradient",
          },
          {
            name: "MongoDB",
            color: "text-red-gradient",
          },
        ],        
      image: netflix,
      source_code_link: "https://github.com/kundan10424/Netflix",
    },
    {
      name: "Code Sync",
      description:
        "Code Sync is a web application designed to provide a collaborative code editor where users can work together in real-time. The editor supports syntax for 21 programming languages and offers 63 design themes to customize the coding environment.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "CodeMirror",
          color: "green-text-gradient",
        },
        {
          name: "Axios",
          color: "pink-text-gradient",
        },
        {
          name: "Node.js",
          color: "text-purple-gradient",
        },
        {
          name: "Socket.IO",
          color: "orange-text-gradient",
        },
        {
          name: "Express.js",
          color: "text-red-gradient",
        },
      ],
      image: editor,
      source_code_link: "https://github.com/Kundan10424/Realtime-Editor",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };