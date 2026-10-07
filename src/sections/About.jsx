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

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                <span className="flex gap-4 "> <GraduationCap size={32} color="aqua"/> Education</span>
                <div className="ml-12">
                 <h3> Baderia Global Institute of Engineering and Management, Jabalpur </h3>
 <p className="text-sm font-medium mt-2 "> Bachelor of Technology in Computer Science and Engineering </p>
 <div className="flex gap-4">
    <p className="flex text-sm gap-2 mt-4 items-center"> <Calendar size={22} /> 2023 - 2027</p>

 <p className="flex text-sm gap-2 mt-4 items-center"> <MapPin />  Jabalpur , Madhya Pradesh</p>
 </div>
                </div>
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
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