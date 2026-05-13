export const personalInfo = {
  name: "Sagar Kumar Yadav",
  title: "Java Backend Developer",
  tagline: "Building secure, scalable & efficient backend solutions",
  location: "New Delhi, India",
  email: "sagaryadav15052005@gmail.com",
  phone: "+91 - 7004483501",
  linkedin: "https://www.linkedin.com/in/sagar-yadav-154a61257/",
  github: "https://github.com/sag-yadav",
  gfg: "https://www.geeksforgeeks.org/profile/sagaryadav6q42",
  bio: "Java Developer with hands-on experience in building web applications using Spring Boot, Spring MVC, and Spring Security. Skilled in RESTful APIs, MVC architecture, and MySQL integration, with experience in developing E-Commerce and Employee Management systems.",
};

export const skills = {
  languages: [
    { name: "Java", level: 90 },
    { name: "SQL", level: 85 },
    { name: "C++", level: 70 },
    { name: "C", level: 65 },
  ],
  frameworks: [
    { name: "Spring Boot", level: 88 },
    { name: "Spring MVC", level: 85 },
    { name: "Spring Security", level: 80 },
    { name: "Spring Data JPA", level: 82 },
    { name: "Hibernate", level: 80 },
  ],
  tools: [
    "MySQL", "JDBC", "Maven", "Postman",
    "IntelliJ IDEA", "Eclipse", "VS Code", "Git",
    "RESTful APIs", "Thymeleaf", "Multithreading",
  ],
};

export const projects = [
  {
    title: "Employee Management System",
    subtitle: "RESTful APIs | Spring Boot",
    description:
      "A full-featured RESTful Employee Management System with complete CRUD operations, MySQL integration, and MVC layered architecture. Built with Spring Boot and JDBC for efficient data handling.",
    tags: ["Java", "Spring Boot", "RESTful APIs", "JDBC", "MySQL", "MVC"],
    github: "https://github.com/sag-yadav",
    color: "#6366f1",
    icon: "👥",
    highlights: [
      "Complete CRUD operations via REST endpoints",
      "MySQL database integration with JDBC",
      "MVC layered architecture",
      "Tested with Postman",
    ],
  },
  {
    title: "E-Commerce Web Application",
    subtitle: "Spring MVC | Spring Boot | Spring Security",
    description:
      "A secure E-Commerce platform with role-based authentication, product/user/order management, and full CRUD operations. Implements Spring Security for access control and Thymeleaf for server-side rendering.",
    tags: ["Spring Boot", "Spring Security", "Hibernate/JPA", "Thymeleaf", "MySQL"],
    github: "https://github.com/sag-yadav",
    color: "#8b5cf6",
    icon: "🛒",
    highlights: [
      "Role-based authentication & authorization",
      "Product, user & order management APIs",
      "Hibernate/JPA ORM integration",
      "Thymeleaf templating engine",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Technology in IT",
    institution: "Arya College of Engineering",
    period: "August 2022 – May 2026",
    cgpa: "8.01",
    courses: ["Object Oriented Programming", "Data Structures & Algorithms", "DBMS", "Operating Systems"],
  },
];

export const training = [
  {
    title: "Java Backend Developer",
    provider: "DUCAT INDIA, New Delhi",
    duration: "6 Months Industrial Training",
    description: "Advanced training in Core & Advanced Java with deep knowledge of Spring Framework and Spring Boot, including hands-on experience building real-time, production-ready applications.",
    color: "#6366f1",
    icon: "☕",
  },
  {
    title: "MERN Stack Developer",
    provider: "Upflairs Pvt Ltd, Jaipur",
    duration: "45 Days Industrial Training",
    description: "Beginner-level training in HTML, CSS, MongoDB, Express.js, React.js, and Node.js with hands-on full-stack development experience.",
    color: "#10b981",
    icon: "🌐",
  },
];

export const certifications = [
  {
    title: "Java Backend Developer",
    issuer: "DUCAT INDIA",
    description: "Advanced training in Core & Advanced Java, Spring Framework, and Spring Boot.",
    color: "#6366f1",
  },
  {
    title: "MERN Stack Developer",
    issuer: "Upflairs Pvt Ltd",
    description: "Full-stack development with MongoDB, Express.js, React.js, and Node.js.",
    color: "#10b981",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
