import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  Code2,
  Database,
  Smartphone,
  Cloud,
  Palette,
} from "lucide-react";

export const Logo = "Sol Monineath";

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/NeathFrontEndDeveloper",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sol-monineath-95b3ba345/",
    icon: Linkedin,
  },
  {
    name: "Facebook",
    url: "https://web.facebook.com/arata.daisuke.2025",
    icon: Facebook,
  },
  {
    name: "Email",
    url: "mailto:salmonineath31@gmail.com", // Use mailto: for email links
    icon: Mail,
  },
];

export const titles = [
  "Front-end Developer",
  "Graphic Designer",
  "Problem Solver",
];

// My skills data
export const skillsData = [
  {
    title: "Frontend Development",
    icon: Code2,
    color: "#00ff99",
    skills: [
      { name: "React", level: 95, color: "#61DAFB" },
      { name: "Next.js", level: 90, color: "#000000" },
      { name: "TypeScript", level: 88, color: "#3178C6" },
      { name: "JavaScript", level: 92, color: "#F7DF1E" },
      { name: "HTML5", level: 96, color: "#E34F26" },
      { name: "CSS3", level: 94, color: "#1572B6" },
      { name: "Tailwind CSS", level: 90, color: "#06B6D4" },
      { name: "SASS/SCSS", level: 85, color: "#CC6699" },
    ],
  },
  {
    title: "Backend Development",
    icon: Database,
    color: "#ff6b6b",
    skills: [
      { name: "Node.js", level: 87, color: "#339933" },
      { name: "Express.js", level: 85, color: "#000000" },
      { name: "Python", level: 80, color: "#3776AB" },
      { name: "PostgreSQL", level: 82, color: "#336791" },
      { name: "MongoDB", level: 78, color: "#47A248" },
      { name: "REST APIs", level: 90, color: "#ff6b6b" },
      { name: "GraphQL", level: 75, color: "#E10098" },
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "#a855f7",
    skills: [
      { name: "React Native", level: 83, color: "#61DAFB" },
      { name: "Flutter", level: 70, color: "#02569B" },
      { name: "iOS Development", level: 65, color: "#000000" },
      { name: "Android Development", level: 68, color: "#3DDC84" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "#f59e0b",
    skills: [
      { name: "AWS", level: 75, color: "#FF9900" },
      { name: "Docker", level: 80, color: "#2496ED" },
      { name: "Kubernetes", level: 65, color: "#326CE5" },
      { name: "CI/CD", level: 78, color: "#f59e0b" },
      { name: "Vercel", level: 88, color: "#000000" },
      { name: "Netlify", level: 85, color: "#00C7B7" },
    ],
  },
  {
    title: "Design & Tools",
    icon: Palette,
    color: "#ec4899",
    skills: [
      { name: "Figma", level: 82, color: "#F24E1E" },
      { name: "Adobe XD", level: 75, color: "#FF61F6" },
      { name: "Git", level: 90, color: "#F05032" },
      { name: "VS Code", level: 95, color: "#007ACC" },
      { name: "Photoshop", level: 70, color: "#31A8FF" },
    ],
  },
];
