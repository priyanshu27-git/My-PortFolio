import {
  Trophy,
  Code2,
  Medal,
  Target,
  Flame,
  Award,
} from "lucide-react";

const stats = [
  {
    value: "Rank 1",
    title: "SIH Internal Hackathon",
    subtitle: "2024",
  },
  {
    value: "1500+",
    title: "LeetCode Rating",
    subtitle: "Coding Contests",
  },
  {
    value: "800+",
    title: "Codeforces Rating",
    subtitle: "Competitive Programming",
  },
  {
    value: "300+",
    title: "DSA Problems",
    subtitle: "Solved",
  },
];

const achievements = [
  {
    icon: Trophy,
    category: "Hackathon",
    year: "2024",
    title: "SIH Internal Hackathon - Rank 1",
    description:
      "Secured Rank 1 in the Smart India Hackathon internal round out of competing teams, demonstrating innovation, teamwork, and problem-solving skills.",
    featured: true,
  },
  {
    icon: Medal,
    category: "Competitive Programming",
    year: "2024-Present",
    title: "1500+ LeetCode Rating",
    description:
      "Achieved a 1500+ rating in LeetCode Coding Contests, demonstrating consistent competitive programming and algorithmic problem-solving skills.",
    featured: true,
  },
  {
    icon: Code2,
    category: "Competitive Programming",
    year: "2024-Present",
    title: "800+ Codeforces Rating",
    description:
      "Achieved an 800+ rating on Codeforces through regular participation in competitive programming contests and algorithmic challenges.",
    featured: false,
  },
  {
    icon: Target,
    category: "Data Structures & Algorithms",
    year: "2024-Present",
    title: "300+ DSA Problems Solved",
    description:
      "Solved 300+ Data Structures and Algorithms questions across competitive programming and coding platforms.",
    featured: false,
  },
  {
    icon: Flame,
    category: "Consistency",
    year: "2024-Present",
    title: "100-Day LeetCode Consistency Badge",
    description:
      "Earned the 100-day consistency badge on LeetCode by maintaining a regular coding practice streak.",
    featured: true,
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14 animate-fade-in">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-3">
            Milestones
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Achievements
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Highlights from my competitive programming, hackathon,
            and problem-solving journey.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className="group rounded-xl border border-border
              bg-card/40 backdrop-blur-sm
              px-5 py-7 text-center
              hover:border-primary/40
              transition-all duration-500
              hover:-translate-y-1
              animate-fade-in"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>

              <h3 className="text-sm md:text-base font-semibold text-foreground">
                {stat.title}
              </h3>

              <p className="text-sm text-muted-foreground mt-2">
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;

            return (
              <div
                key={achievement.title}
                className={`group relative rounded-2xl border
                ${
                  achievement.featured
                    ? "border-primary/40"
                    : "border-border"
                }
                bg-card/40 backdrop-blur-sm
                p-7
                hover:border-primary/50
                transition-all duration-500
                hover:-translate-y-1
                animate-fade-in`}
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                {/* Featured Badge */}
                {achievement.featured && (
                  <span
                    className="absolute -top-3 right-4
                    px-4 py-1 rounded-full
                    bg-primary text-primary-foreground
                    text-xs font-semibold"
                  >
                    Featured
                  </span>
                )}

                {/* Top Row */}
                <div className="flex items-start justify-between gap-4 mb-6">

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl
                    flex items-center justify-center
                    border
                    ${
                      achievement.featured
                        ? "bg-primary/10 border-primary/20"
                        : "bg-secondary border-border"
                    }`}
                  >
                    <Icon
                      className={`w-7 h-7 ${
                        achievement.featured
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                  </div>

                  {/* Year */}
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {achievement.year}
                  </span>
                </div>

                {/* Category */}
                <div className="mb-3">
                  <span
                    className="inline-flex px-3 py-1 rounded-full
                    border border-border
                    text-xs font-medium
                    text-muted-foreground"
                  >
                    {achievement.category}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold
                  text-foreground
                  leading-snug
                  mb-4
                  group-hover:text-primary
                  transition-colors duration-300"
                >
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {achievement.description}
                </p>

                {/* Bottom Accent */}
                <div
                  className="absolute bottom-0 left-7 right-7
                  h-px bg-primary/0
                  group-hover:bg-primary/40
                  transition-all duration-500"
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Achievements;