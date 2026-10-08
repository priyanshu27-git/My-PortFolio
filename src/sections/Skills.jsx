import {
  Code2,
  Wrench,
  BookOpen,
  GitBranch,
  Server,
  Database,
  Globe,
} from "lucide-react";

import { FaJava, FaPython, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

import {
  SiGithub,
  SiCplusplus,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "C" },
      { name: "C++", icon: SiCplusplus },
      { name: "Java", icon: FaJava },
      { name: "Python", icon: FaPython },
      { name: "JavaScript", icon: FaJs },
    ],
  },
  {
    title: "Developer Tools & Technologies",
    icon: Wrench,
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: SiGithub },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "React.js", icon: FaReact },
      { name: "MongoDB", icon: SiMongodb },
      { name: "RESTful APIs", icon: Globe },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Coursework",
    icon: BookOpen,
    skills: [
      { name: "Data Structures & Algorithms" },
      { name: "Computer Networks" },
      { name: "Database Management Systems" },
      { name: "Operating Systems" },
      { name: "Object-Oriented Programming" },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-3">
            My Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Skills & Technologies
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Technologies, tools, and concepts I use to build modern, scalable,
            and user-focused applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;

            return (
              <div
                key={category.title}
                className="group relative rounded-2xl border border-border 
                bg-background/40 backdrop-blur-sm p-6 
                hover:border-primary/50 transition-all duration-500
                hover:-translate-y-1 animate-fade-in"
                style={{
                  animationDelay: `${categoryIndex * 150}ms`,
                }}
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 
                  group-hover:opacity-100 transition-opacity duration-500
                  bg-primary/5 pointer-events-none"
                />

                {/* Category Header */}
                <div className="relative flex items-center gap-4 mb-7">
                  <div
                    className="w-12 h-12 rounded-xl 
                    bg-primary/10 border border-primary/20
                    flex items-center justify-center
                    group-hover:bg-primary/15 transition-colors"
                  >
                    <CategoryIcon className="w-6 h-6 text-primary" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {category.title}
                    </h3>

                    <div className="h-1 w-8 bg-primary rounded-full mt-2" />
                  </div>
                </div>

                {/* Skills */}
                <div
                  className={`relative flex ${
                    category.title === "Coursework"
                      ? "flex-col gap-2"
                      : "flex-wrap gap-3"
                  }`}
                >
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className={`flex items-center gap-2 text-sm text-muted-foreground transition-all duration-300 ${
                          category.title === "Coursework"
                            ? "py-1"
                            : "px-3 py-2 rounded-lg border border-border bg-background/50 hover:text-foreground hover:border-primary/40 hover:bg-primary/5"
                        }`}
                      >
                        {category.title === "Coursework" && (
                          <span aria-hidden="true">•</span>
                        )}
                        {SkillIcon && <SkillIcon className="w-4 h-4" />}

                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
