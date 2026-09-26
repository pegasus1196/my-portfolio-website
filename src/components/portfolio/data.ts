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
    period: "Sept 2026 – Present",
    detail: "CGPA 8.99",
  },
  {
    school: "Delhi Public School, Nashik",
    degree: "Class 12, Intermediate",
    period: "July 2024",
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
    items: ["Node.js", "React", "JavaScript (ES6+)", "RESTful APIs", "HTML", "CSS"],
  },
  {
    group: "Cloud & DevOps",
    items: ["AWS EC2", "S3", "RDS", "IAM", "Lambda", "ECR", "Docker", "Kubernetes", "AWS CLI", "Jenkins"],
  },
  { group: "Languages", items: ["Python", "C++", "C", "JavaScript (ES6+)"] },
  { group: "Databases", items: ["MongoDB", "MySQL", "Data Modeling", "Mongoose"] },
  {
    group: "Testing",
    items: ["Unit Testing", "White Box Testing", "Black Box Testing", "CPM"],
  },
  { group: "Machine Learning", items: ["TensorFlow", "OpenCV"] },
  {
    group: "Tools",
    items: ["VS Code", "Cursor", "Docker Desktop", "GitHub", "Windows / Linux / macOS"],
  },
];

export const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
