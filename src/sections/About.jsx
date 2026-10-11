import { Code2, Lightbulb, Rocket, Users , GraduationCap , Calendar , MapPin} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className=" text-2xl font-semibold tracking-wider uppercase">
                About <span className="text-cyan-300">Me</span>
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Computer Science Engineering student and a passionate software developer who enjoys turning ideas into real, functional products. I work primarily with JavaScript, React, and the MERN stack, while continuously sharpening my Data Structures and Algorithms skills.
              </p>
              <p>
                From building full-stack applications to experimenting with AI-powered ideas and participating in hackathons, I learn best by creating. I'm curious about how technology can solve practical problems, and I'm always looking for the next challenging project to build.
              </p>
            </div>

            
<div className="glass glow-border animate-fade-in animation-delay-300 rounded-2xl p-6 sm:p-8">
  {/* Header */}
  <div className="flex items-center gap-3 mb-6">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
      <GraduationCap
        size={28}
        className="text-primary"
        aria-hidden="true"
      />
    </div>

    <h3 className="text-xl font-semibold text-foreground">
      Education
    </h3>
  </div>

  {/* Education Details */}
  <div className="ml-1 border-l-2 border-primary/30 pl-5 sm:pl-6">
    <h4 className="text-lg sm:text-xl font-semibold leading-snug text-foreground">
      Baderia Global Institute of Engineering and Management
    </h4>

    <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
      Bachelor of Technology in Computer Science and Engineering
    </p>

    {/* Date and Location */}
    <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Calendar size={17} className="shrink-0 text-primary" aria-hidden="true" />
        <span>2023 - 2027</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin size={17} className="shrink-0 text-primary" aria-hidden="true" />
        <span>Jabalpur, Madhya Pradesh</span>
      </div>
    </div>
  </div>
</div>

          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};