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
  username: "Alessandro Tripodi",
  title: "Hi, I'm Alessandro",
  subTitle: emoji(
    "A passionate Software Developer 🚀 specialized in the .NET ecosystem (C#, ASP.NET Core) and Azure cloud architectures with over 4 years of experience. I have always been passionate about computer science, and after obtaining my technical diploma in IT, I immediately wanted to challenge myself by gaining as much experience as possible. Over the years, I decided to focus on the .NET environment with C# and all its related cloud technologies (Azure Functions, etc.). I strive to apply the best practices to write clean and maintainable code."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/TriposDev",
  linkedin: "https://www.linkedin.com/in/alessandro-tripodi-55a326198",
  gmail: "tripodi.alessandro.dev@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "SOFTWARE DEVELOPER PASSIONATE ABOUT MODERN TECHNOLOGIES & CLEAN CODE",
  skills: [
    emoji(
      "⚡ Development of web portals, serverless cloud workflows, and RESTful APIs"
    ),
    emoji("⚡ Modernization of legacy architectures and system integrations"),
    emoji(
      "⚡ Application of design patterns (Factory, Strategy, Singleton) for maintainable code"
    ),
    emoji(
      "⚡ Migration of legacy systems to the latest technologies, from Stored Procedures to high-performance Entity Framework queries"
    )
  ],

  softwareSkills: [
    {
      skillName: "C# / .NET",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "HTML/CSS",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "ITIS Fauser",
      subHeader: "Diploma in Informatica (100/100)",
      duration: "2016 - 2021",
      desc: "Novara, Italia",
      descBullets: [],
      logo: require("./assets/images/fauser.jpg")
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend / .NET",
      progressPercentage: "90%"
    },
    {
      Stack: "Cloud / Azure",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend (Blazor, React, JQuery, HTML/CSS Bootstrap)",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Key to Business S.r.l",
      companylogo: require("./assets/images/key2.webp"),
      date: "September 2025 – Present",
      desc: "Software development and maintenance of an internal web portal in ASP.NET Core MVC (.NET 6).",
      descBullets: [
        "Development and maintenance of an 'internal' web portal in ASP.NET Core MVC (.NET 6).",
        "Integration of Oracle database using Entity Framework Core and optimization of LINQ queries.",
        "Refactoring of legacy stored procedures into application code with LINQ queries (EF Core).",
        "Implementation of a solid system architecture with centralized logging and automatic retries."
      ]
    },
    {
      role: "Business Central Developer",
      company: "DSC Group S.r.l",
      companylogo: require("./assets/images/dsc.png"),
      date: "August 2022 – October 2025",
      desc: "Microsoft Business Central ERP & Cloud Integrations",
      descBullets: [
        "Design of backend services and RESTful APIs in .NET 8 to integrate Business Central.",
        "Automation of serverless cloud workflows using Azure Functions and Azure Storage Account.",
        "Migration of legacy business logic managing database with Entity Framework Core.",
        "Development of a complex web portal with Blazor and MudBlazor, used by hundreds of concurrent clients.",
        "Real-time data synchronization with Dynamics 365 Business Central via APIs, leveraging Azure Service Bus message queues to handle asynchronous operations efficiently."
      ]
    }
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
  projects: [],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+39 331 492 1905",
  email_address: "tripodi.alessandro.dev@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
