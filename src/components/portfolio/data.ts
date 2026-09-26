/** All site content lives here — edit text, links and lists in one place. */

export const profile = {
  name: "Anjali Tripathi",
  tagline: ["Full-Stack Developer", "CS Undergrad @ MIT WPU"],
  intro:
    "I build secure, scalable full-stack systems — and spend the rest of my time exploring machine learning and the cloud.",
  email: "anjalitripathi.tech@gmail.com",
  phone: "+91-9423147098",
  github: "https://github.com/pegasus1196",
  linkedin: "https://www.linkedin.com/in/anjali-tripathi1196/",
};

export const education = [
  {
    school: "MIT WPU, Pune",
    degree: "B.Tech in Computer Science and Engineering",
    period: "Aug 2024 – Present",
    detail: "CGPA 8.99",
  },
  {
    school: "Delhi Public School, Nashik",
    degree: "Class 12, Intermediate",
    period: "July 2023",
    detail: "86.7%",
  },
];

export const coursework = [
  "Data Structures",
  "Algorithms Analysis",
  "Database Management",
  "Object Oriented Programming",
  "Computer Architecture",
  "Internet of Things",
  "Machine Learning",
  "Cloud Computing",
  "Web Development",
  "Generative AI",
];

export const projects = [
  {
    title: "Data Shuffling Attack Detection & Prevention System",
    period: "Sept 2026",
    summary:
      "A full-stack security module for a college admission portal, scoring every applicant submission in real time.",
    details: [
      "FastAPI + SQLAlchemy/PostgreSQL with a JWT-authenticated admin dashboard.",
      "Rule-based risk scoring — IP repetition, duplicate detection, submission velocity — with an Isolation Forest anomaly layer.",
      "Scheduled reporting, admin-confirmed cleanup and full audit logging via APScheduler.",
    ],
    stack: ["FastAPI", "PostgreSQL", "JWT", "scikit-learn", "APScheduler"],
  },
  {
    title: "Pune Metro Ticketing System",
    period: "2026",
    summary:
      "A full-stack metro ticket booking app built for correctness under concurrent bookings.",
    details: [
      "React.js frontend, Flask backend, MySQL database.",
      "Secure authentication and data integrity via stored procedures, triggers and cursors.",
      "Transaction control for parallel booking management.",
    ],
    stack: ["React", "Flask", "MySQL"],
  },
  {
    title: "The Fluid Curator (Media Hub)",
    period: "2026",
    summary:
      "A media cataloging platform modeling Movies, TV Shows and Games through a polymorphic class hierarchy.",
    details: [
      "C++ (Crow) REST backend with the MySQL C++ Connector and a custom JSON serializer.",
      "Normalized relational schema with stored procedures for cross-table rating aggregation.",
      "Multi-table LEFT JOINs exposed to a React client.",
    ],
    stack: ["C++", "Crow", "MySQL", "React"],
  },
];

export const skills = [
  {
    group: "Full-Stack Development",
    items: [
      { name: "Node.js", info: "Server-side JavaScript runtime for building scalable backend services" },
      { name: "React", info: "Component-based UI library for building interactive user interfaces" },
      { name: "JavaScript (ES6+)", info: "Modern JavaScript with arrow functions, async/await, destructuring & more" },
      { name: "RESTful APIs", info: "Designing and consuming HTTP-based APIs following REST architecture" },
      { name: "HTML", info: "Semantic markup for structuring accessible web content" },
      { name: "CSS", info: "Styling and layout with Flexbox, Grid, animations & responsive design" },
    ],
  },
  {
    group: "Cloud & DevOps",
    items: [
      { name: "AWS EC2", info: "Elastic Compute Cloud — scalable virtual servers in the cloud" },
      { name: "S3", info: "Simple Storage Service for scalable object storage" },
      { name: "RDS", info: "Managed relational database service on AWS" },
      { name: "IAM", info: "Identity & Access Management for secure AWS resource control" },
      { name: "Lambda", info: "Serverless compute — run code without provisioning servers" },
      { name: "ECR", info: "Elastic Container Registry for storing Docker images" },
      { name: "Docker", info: "Containerization platform for consistent dev-to-prod environments" },
      { name: "Kubernetes", info: "Container orchestration for automating deployment & scaling" },
      { name: "AWS CLI", info: "Command-line interface for managing AWS services" },
      { name: "Jenkins", info: "Open-source CI/CD automation server for build pipelines" },
    ],
  },
  {
    group: "Languages",
    items: [
      { name: "Python", info: "Versatile language for scripting, ML, web backends & automation" },
      { name: "C++", info: "High-performance systems programming with low-level memory control" },
      { name: "C", info: "Foundational systems language for OS-level and embedded programming" },
      { name: "JavaScript (ES6+)", info: "Full-stack language powering both browser and server applications" },
    ],
  },
  {
    group: "Databases",
    items: [
      { name: "MongoDB", info: "NoSQL document database for flexible, schema-less data storage" },
      { name: "MySQL", info: "Reliable open-source relational database with SQL querying" },
      { name: "Data Modeling", info: "Designing normalized schemas and entity relationships" },
      { name: "Mongoose", info: "Elegant ODM for MongoDB with schema validation & middleware" },
    ],
  },
  {
    group: "Testing",
    items: [
      { name: "Unit Testing", info: "Testing individual functions and components in isolation" },
      { name: "White Box Testing", info: "Testing internal code paths, branches and logic flow" },
      { name: "Black Box Testing", info: "Testing functionality without knowledge of internal implementation" },
      { name: "CPM", info: "Critical Path Method for project scheduling and test planning" },
    ],
  },
  {
    group: "Machine Learning",
    items: [
      { name: "TensorFlow", info: "Google's framework for building and training neural networks" },
      { name: "OpenCV", info: "Computer vision library for image processing and object detection" },
    ],
  },
  {
    group: "Tools",
    items: [
      { name: "VS Code", info: "Lightweight, extensible code editor with rich extension ecosystem" },
      { name: "Cursor", info: "AI-powered code editor built on VS Code for faster development" },
      { name: "Docker Desktop", info: "GUI for managing Docker containers, images and volumes" },
      { name: "GitHub", info: "Version control platform for collaborative code hosting and CI/CD" },
      { name: "Windows / Linux / macOS", info: "Cross-platform development across all major operating systems" },
    ],
  },
];

export const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
