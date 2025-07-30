"use client";

import React from "react";
import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Cloud,
  Palette,
  GitBranch,
  Settings,
  Zap,
  Trophy,
  Star,
} from "lucide-react";

// Types
interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: React.ReactNode;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  color: string;
}

const Skills: React.FC = () => {
  // Skills data
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-6 h-6" />,
      color: "#00ff99",
      skills: [
        { name: "React", level: 95, category: "frontend", color: "#61DAFB" },
        { name: "Next.js", level: 90, category: "frontend", color: "#000000" },
        {
          name: "TypeScript",
          level: 88,
          category: "frontend",
          color: "#3178C6",
        },
        {
          name: "JavaScript",
          level: 92,
          category: "frontend",
          color: "#F7DF1E",
        },
        { name: "HTML5", level: 96, category: "frontend", color: "#E34F26" },
        { name: "CSS3", level: 94, category: "frontend", color: "#1572B6" },
        {
          name: "Tailwind CSS",
          level: 90,
          category: "frontend",
          color: "#06B6D4",
        },
        {
          name: "SASS/SCSS",
          level: 85,
          category: "frontend",
          color: "#CC6699",
        },
      ],
    },
    {
      title: "Backend Development",
      icon: <Database className="w-6 h-6" />,
      color: "#ff6b6b",
      skills: [
        { name: "Node.js", level: 87, category: "backend", color: "#339933" },
        {
          name: "Express.js",
          level: 85,
          category: "backend",
          color: "#000000",
        },
        { name: "Python", level: 80, category: "backend", color: "#3776AB" },
        {
          name: "PostgreSQL",
          level: 82,
          category: "backend",
          color: "#336791",
        },
        { name: "MongoDB", level: 78, category: "backend", color: "#47A248" },
        { name: "REST APIs", level: 90, category: "backend", color: "#ff6b6b" },
        { name: "GraphQL", level: 75, category: "backend", color: "#E10098" },
      ],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      color: "#a855f7",
      skills: [
        {
          name: "React Native",
          level: 83,
          category: "mobile",
          color: "#61DAFB",
        },
        { name: "Flutter", level: 70, category: "mobile", color: "#02569B" },
        {
          name: "iOS Development",
          level: 65,
          category: "mobile",
          color: "#000000",
        },
        {
          name: "Android Development",
          level: 68,
          category: "mobile",
          color: "#3DDC84",
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      color: "#f59e0b",
      skills: [
        { name: "AWS", level: 75, category: "cloud", color: "#FF9900" },
        { name: "Docker", level: 80, category: "cloud", color: "#2496ED" },
        { name: "Kubernetes", level: 65, category: "cloud", color: "#326CE5" },
        { name: "CI/CD", level: 78, category: "cloud", color: "#f59e0b" },
        { name: "Vercel", level: 88, category: "cloud", color: "#000000" },
        { name: "Netlify", level: 85, category: "cloud", color: "#00C7B7" },
      ],
    },
    {
      title: "Design & Tools",
      icon: <Palette className="w-6 h-6" />,
      color: "#ec4899",
      skills: [
        { name: "Figma", level: 82, category: "design", color: "#F24E1E" },
        { name: "Adobe XD", level: 75, category: "design", color: "#FF61F6" },
        { name: "Git", level: 90, category: "tools", color: "#F05032" },
        { name: "VS Code", level: 95, category: "tools", color: "#007ACC" },
        { name: "Photoshop", level: 70, category: "design", color: "#31A8FF" },
      ],
    },
  ];

  // Get skill level color
  const getSkillLevelColor = (level: number) => {
    if (level >= 90) return "#00ff99";
    if (level >= 80) return "#00d4ff";
    if (level >= 70) return "#fbbf24";
    return "#f87171";
  };

  // Get skill level text
  const getSkillLevelText = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Beginner";
  };

  return (
    <section className="w-full min-h-screen text-white mb-28 ">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block mb-4">
            <span className="text-[#00ff99] text-sm sm:text-base font-semibold uppercase tracking-wider mb-2 block">
              What I Know
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
              My Skills
            </h1>
          </div>

          {/* Decorative line */}
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#00ff99] to-[#00ff99]/50 rounded-full mx-auto mb-6" />

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and expertise across
            different domains of software development.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {skillCategories.map((category) => (
            <div key={category.title} className="relative">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8 sm:mb-10">
                <div
                  className="p-3 sm:p-4 rounded-xl shadow-lg border-2 backdrop-blur-sm"
                  style={{
                    backgroundColor: `${category.color}20`,
                    borderColor: `${category.color}40`,
                    color: category.color,
                  }}
                >
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                    {category.title}
                  </h2>
                  <div
                    className="w-16 sm:w-20 h-0.5 rounded-full mt-2"
                    style={{ backgroundColor: category.color }}
                  />
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative p-4 sm:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    {/* Skill Header */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-[#00ff99] transition-colors duration-300">
                        {skill.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        <Star
                          className="w-4 h-4"
                          style={{ color: getSkillLevelColor(skill.level) }}
                          fill={
                            skill.level >= 90
                              ? getSkillLevelColor(skill.level)
                              : "none"
                          }
                        />
                        <span
                          className="text-sm font-medium"
                          style={{ color: getSkillLevelColor(skill.level) }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative mb-3">
                      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            backgroundColor: getSkillLevelColor(skill.level),
                            width: `${skill.level}%`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Skill Level Badge */}
                    <div className="flex items-center justify-between">
                      <span
                        className="text-xs font-medium px-2 py-1 rounded-full"
                        style={{
                          backgroundColor: `${getSkillLevelColor(
                            skill.level
                          )}20`,
                          color: getSkillLevelColor(skill.level),
                        }}
                      >
                        {getSkillLevelText(skill.level)}
                      </span>

                      {/* Decorative elements */}
                      <div className="flex gap-1">
                        {[...Array(Math.floor(skill.level / 25))].map(
                          (_, i) => (
                            <div
                              key={i}
                              className="w-1.5 h-1.5 rounded-full"
                              style={{
                                backgroundColor: getSkillLevelColor(
                                  skill.level
                                ),
                              }}
                            />
                          )
                        )}
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at center, ${category.color}40 0%, transparent 70%)`,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-[#00ff99]/20">
            <div className="text-3xl sm:text-4xl font-bold text-[#00ff99] mb-2">
              {skillCategories.reduce(
                (total, category) => total + category.skills.length,
                0
              )}
              +
            </div>
            <div className="text-sm sm:text-base text-gray-400 uppercase tracking-wide">
              Total Skills
            </div>
          </div>

          <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-[#00ff99]/20">
            <div className="text-3xl sm:text-4xl font-bold text-[#00ff99] mb-2">
              {skillCategories.length}
            </div>
            <div className="text-sm sm:text-base text-gray-400 uppercase tracking-wide">
              Categories
            </div>
          </div>

          <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-[#00ff99]/20">
            <div className="text-3xl sm:text-4xl font-bold text-[#00ff99] mb-2">
              {skillCategories.reduce(
                (total, category) =>
                  total +
                  category.skills.filter((skill) => skill.level >= 90).length,
                0
              )}
            </div>
            <div className="text-sm sm:text-base text-gray-400 uppercase tracking-wide">
              Expert Level
            </div>
          </div>

          <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-[#00ff99]/20">
            <div className="text-3xl sm:text-4xl font-bold text-[#00ff99] mb-2">
              3+
            </div>
            <div className="text-sm sm:text-base text-gray-400 uppercase tracking-wide">
              Years Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
