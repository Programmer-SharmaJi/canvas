/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Programmer",
  title: "Hallo, I'm Prince",
  subTitle: emoji(
    "I am a versatile Software Developer with a strong foundation in both frontend and backend technologies, specializing in Web Development. My core competencies include crafting dynamic and responsive websites, as well as developing intelligent systems to solve complex problems and enhance user experiences. I am passionate about problem-solving and continuously learning new technologies, eager to contribute to innovative projects in a software engineering role."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1HGII58gvaT03MuHoTRm9h2nfzmP9Gwzt/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Programmer-SharmaJi",
  linkedin: "https://www.linkedin.com/in/prince-sharma-1a359121b/",
  gmail: "princesharmacool123@@gmail.com",
  instagram: "https://instagram.com/_prince_.12?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D",
  medium: "https://medium.com/@princesharmacool123",
  leetcode: "https://leetcode.com/princesharmacool123/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do ?",  
  skills: [
    emoji(" - Full Stack Web Developer (HTML , CSS , JavaScript , Node.js , React, Php )"),
    emoji(" - Database (MySQL , Mongodb, Firebase)"),
    emoji(" - Known Languages : C++ , Java , Python"),
    emoji(" - Tools : VS Code, Canva, GitHub, Figma, IntelliJ IDEA"),
    emoji(" - Hands On: Blockchain, Cloud, AI/ML"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "",
    },
    {
      skillName: "",
      fontAwesomeClassname: ""
    },
    {
      skillName: "",
      fontAwesomeClassname: ""
    },
    {
      skillName: "",
      fontAwesomeClassname: " "
    },
    {
      skillName: "",
      fontAwesomeClassname: ""
    },
    {
      skillName: "",
      fontAwesomeClassname: " "
    },
    {
      skillName: "",
      fontAwesomeClassname: " "
    },
    {
      skillName: "",
      fontAwesomeClassname: " "
    },
    {
      skillName: "",
      fontAwesomeClassname: " "
    },
    {
      skillName: "",
      fontAwesomeClassname: " "
    },
    {
      skillName: "",
      fontAwesomeClassname: " "
    },
    {
      skillName: "",
      fontAwesomeClassname: " "
    },
    {
      skillName: "",
      fontAwesomeClassname: " "
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "DELHI PUBLIC SCHOOL",
      logo: require("./assets/images/dps.png"),
      subHeader: "XII - Senior Secondary Education",
      duration: "End of School - May 2021",
      descBullets: [
        "Percentage Obtained - 85.16%",
        "Bulandshahr"
      ]
    },
    {
      schoolName: "DELHI PUBLIC SCHOOL",
      logo: require("./assets/images/dps.png"),
      subHeader: "X - Secondary School Education",
      duration: "End of School - May 2019",
      descBullets: [
        "Percentage Obtained - 93.60%",
        "Bulandshahr"
      ]
    },
    {
      schoolName: "Bennett University",
      logo: require("./assets/images/benn.png"),
      subHeader: "Bachelor of Technology (B.Tech)",
      duration: "September 2021 - April 2025",
      descBullets: ["Current CGPA - 9.27","Greater Noida"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "English", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Hindi",
      progressPercentage: "85%"
    },
    {
      Stack: "German",
      progressPercentage: "55%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Head of Management",
      company: "Indian Blockchain Fraternity Club (IBF)",
      companylogo: require("./assets/images/ibf.png"),
      date: "April 2022 – April 2023",
      descBullets: [
        "I was responsible for leading, organizing, and coordinating club activities, including budget management, event planning, and member engagement, to ensure the club's success and achievement of its goals."
      ]
    },
    {
      role: "Head of sponsorship",
      company: "Indian Blockchain Fraternity Club (IBF)",
      companylogo: require("./assets/images/ibf.png"),
      date: "April 2023 – April 2024",
      descBullets: [
        "I'm responsible for securing financial support and partnerships from external organizations, coordinating sponsorship agreements, and ensuring that sponsors' needs are met while aligning with the club's objectives"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/e4.png"),
      projectName: "CyberLock",
      projectDesc: "Websites against automated attacks and ensures genuine user interactions, contribut- ing to a safer online environment",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Programmer-SharmaJi"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/eve.png"),
      projectName: "Farm India",
      projectDesc: "Empowering agriculture: modern methods, tech access, market links. Solving soil, finance, and info gaps via precision farming, loans, and online markets. Growing a resilient sector.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Programmer-SharmaJi"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/e2.png"),
      projectName: "Zephyr !",
      projectDesc: "Streamlined event management site with Google integration and admin controls. Simplifying event planning for upcoming college fests.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Programmer-SharmaJi"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/e3.png"),
      projectName: "Audiator",
      projectDesc: "Voice assistants are programs on digital devices that listen and respond to verbal commands.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Programmer-SharmaJi"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Bennett University",
      subtitle:
        "LETTER OF APPRECIATION OBTAINING 10/10 SGPA",
      image: require("./assets/images/benn.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1nzqdBNjvmNTU5lh2TYpI4ZVJNceWzM2-/view?usp=sharing"
        },
        
      ]
    },
    {
      title: "COURSERA CERTIFICATIONS",
      subtitle:
        "All my certificates are on LinkedIn Click Below to Access all my certificates",
      image: require("./assets/images/CO.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/in/prince-sharma-1a359121b/"
        }
      ]
    },

    {
      title: "Indian Blockchain Fraternity Club (IBF)",
      subtitle: "Certification for the Selection as Head of Sponsorship in IBF !",
      image: require("./assets/images/ib.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/14rDaNZIEwaT4nDKTQZA4TVU8eurZEHgG/view?usp=sharing"},
      ]
    }
  ], 
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@princesharmacool123/oft-club-e91b33fbde43",
      title: "Empowering Health: The Digital Evolution of Solo Fitness Training",
      description:
        "Unlock the future of fitness with our blog on online solo training. Explore the vast array of virtual training apps and technological options that are reshaping the way we achieve peak physical and mental health. Discover the convenience and effectiveness of solo fitness in today's digital age"
    },
    {
      url: "https://medium.com/@princesharmacool123/permutation-cc0d13a4310b",
      title: "Mastering the Art of Counting: Unraveling the Mathematics Behind Possible Outcomes",
      description:
        "Dive into the fascinating world of mathematical counting theories in our blog. Explore how to calculate the number of possible outcomes for various scenarios, from selecting judges from a group to generating complex identification numbers. Learn about fundamental counting, permutations, and combinations for solving real-life puzzles."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  
};

// Podcast Section

const podcastSection = {
  
};

const contactInfo = {
  title: emoji("Contact Me 📞"),
  subtitle:
    "Feel free to reach out for any inquiries or collaborations at",
  number: "+91-9368900671",
  github: "https://github.com/Programmer-SharmaJi",
  linkedin: "https://www.linkedin.com/in/prince-sharma-1a359121b/",
  gmail: "princesharmacool123@@gmail.com",
  instagram: "https://instagram.com/_prince_.12?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D",
  medium: "https://medium.com/@princesharmacool123",
  leetcode: "https://leetcode.com/princesharmacool123/",
};

// Twitter Section

const twitterDetails = {
  
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};