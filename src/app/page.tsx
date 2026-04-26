// Content objects are intentionally data-driven so sections can be updated
// without touching the JSX layout/render logic.
const ABOUT_ITEMS = [
  {
    title: "Student Journey",
    text: "I am currently a high school student in the Class of 2029, focused on building strong foundations in computer science, communication, and leadership. I enjoy taking initiative in projects that challenge me to think beyond the classroom and grow every semester.",
  },
  {
    title: "Builder Mindset",
    text: "I am passionate about software development because it lets me transform ideas into real products. From designing clean interfaces to writing maintainable logic, I enjoy the full process of building thoughtful, user-centered digital experiences.",
  },
  {
    title: "Continuous Learning",
    text: "I actively explore new technologies, practice problem-solving, and study modern development workflows. Every project is an opportunity to sharpen my technical depth while improving how I plan, document, and deliver quality work.",
  },
  {
    title: "Collaboration & Growth",
    text: "Beyond coding, I value teamwork, feedback, and clear communication. I want this portfolio to reflect not only what I have built, but also how I approach challenges, work with others, and continue growing as a developer.",
  },
];

const EDUCATION_TIMELINE = [
  {
    period: "2025 - Present",
    title: "Mission San Jose High School",
    subtitle: "Fremont, California",
    highlights: [
      "Expected graduation: 2029",
    ],
  },
];

const PROJECT_ITEMS = [
    {
    name: "locora-app",
    description:
      "Locora is a curated platform for discovering what is happening in Brentwood now, combining events, businesses, places, and opportunities into a clean local-exploration experience.",
    status: "Live on Vercel",
    repoUrl: "https://github.com/yajathb/locora-app",
    liveUrl: "https://locora-app-alpha.vercel.app",
    badges: ["TypeScript", "Next.js", "CSS", "JavaScript"],
  },
  {
    name: "personal-portfolio",
    description:
      "My personal portfolio website built with React and Next.js to showcase projects, experience, and growth as a developer.",
    status: "Actively Maintained",
    repoUrl: "https://github.com/yajathb/personal-portfolio",
    liveUrl: "",
    badges: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "otto",
    description: "A highly customizable, Jarvis-inspired terminal assistant written in Python. It features context-aware fuzzy autocomplete, non-blocking background execution, and dynamic shell command routing. Built for Linux.",
    status: "Actively Maintained",
    repoUrl: "https://github.com/yajathb/otto",
    badges: ["Python", "Shell"],
  }
];

const SKILL_GROUPS = [
  { title: "Languages", badges: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"] },
  { title: "Frameworks", badges: ["Next.js", "React", "Tailwind CSS"] },
  { title: "Tools", badges: ["Git", "GitHub", "VS Code", "Figma"] },
  { title: "Core Strengths", badges: ["Problem Solving", "Teamwork", "Communication", "Time Management"] },
];

const CONTACT_ITEMS = [
  {
    label: "Email",
    value: "yajath.barve@gmail.com",
    href: "mailto:yajath.barve@gmail.com",
  },
  {
    label: "Instagram",
    value: "instagram.com/yajath.barve",
    href: "https://instagram.com/yajath.barve",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/yajathb",
    href: "https://github.com/yajathb",
    external: true,
  },
];

export default function Home() {
  return (
    <main className="bg-background text-foreground casual-page">
      <div className="cursor-glow" aria-hidden="true" />
      {/* Hero section with typewriter intro animation hooks. */}
      <section id="home" className="section-anchor casual-hero hero-center">
        <div className="container mx-auto px-5 sm:px-6">
          <h1 className="mx-auto w-fit text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[-0.04em] hero-typewriter">Hi, I&#39;m Yajath.</h1>
        </div>
      </section>

      {/* About items are generated from ABOUT_ITEMS for easy copy updates. */}
      <section className="wireframe-section section-reveal container mx-auto px-5 sm:px-6 py-16 md:py-20" id="about">
        <h2 className="wireframe-title text-2xl md:text-3xl font-black mb-10 md:mb-12 flex justify-center">About Me</h2>
        <div className="about-cards">
          {ABOUT_ITEMS.map((item) => (
            <article key={item.title} className="about-card">
              <p className="about-card-header">
                <span className="about-card-title">{item.title}</span>
              </p>
              <p className="text-lg leading-relaxed font-normal">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Timeline layout renders from EDUCATION_TIMELINE milestones. */}
      <section className="wireframe-section section-reveal container mx-auto px-5 sm:px-6 py-16 md:py-20" id="education">
        <h2 className="wireframe-title text-2xl md:text-3xl font-black mb-10 md:mb-12 flex justify-center">Education</h2>
        <div className="timeline">
          {EDUCATION_TIMELINE.map((item) => (
            <article key={item.title} className="timeline-item">
              <span className="timeline-dot" aria-hidden="true" />
              <div className="timeline-content casual-card">
                <p className="timeline-period">{item.period}</p>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-subtitle">{item.subtitle}</p>
                <ul className="timeline-list">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Projects include repo/live links and tech badges. */}
      <section className="wireframe-section section-reveal container mx-auto px-5 sm:px-6 py-16 md:py-20" id="projects">
        <h2 className="wireframe-title text-2xl md:text-3xl font-black mb-10 md:mb-12 flex justify-center">Projects</h2>
        <div className="projects-grid">
          {PROJECT_ITEMS.map((item) => (
            <article key={item.name} className="project-card casual-card">
              <div className="project-card-head">
                <h3 className="project-title">{item.name}</h3>
                <p className="project-status">{item.status}</p>
              </div>
              <p className="project-description">{item.description}</p>
              <div className="project-badges" role="list" aria-label={`${item.name} technologies`}>
                {item.badges.map((badge) => (
                  <span key={badge} className="project-badge" role="listitem">
                    {badge}
                  </span>
                ))}
              </div>
              <div className="project-actions">
                <a className="project-link" href={item.repoUrl} target="_blank" rel="noreferrer">
                  View Code
                </a>
                {item.liveUrl ? (
                  <a className="project-link" href={item.liveUrl} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills grouped into categories with badge-style chips. */}
      <section className="wireframe-section section-reveal container mx-auto px-5 sm:px-6 py-16 md:py-20" id="skills">
        <h2 className="wireframe-title text-2xl md:text-3xl font-black mb-10 md:mb-12 flex justify-center">Skills</h2>
        <div className="skills-grid">
          {SKILL_GROUPS.map((group) => (
            <article key={group.title} className="skill-card casual-card">
              <h3 className="skill-title">{group.title}</h3>
              <div className="skill-badges" role="list" aria-label={group.title}>
                {group.badges.map((badge) => (
                  <span key={badge} className="skill-badge" role="listitem">
                    {badge}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact channels stay easy to scan and update. */}
      <section className="wireframe-section section-reveal container mx-auto px-5 sm:px-6 py-16 md:py-20" id="contact">
        <h2 className="wireframe-title text-2xl md:text-3xl font-black mb-10 md:mb-12 flex justify-center">Contact</h2>
        <div className="wireframe-grid">
          {CONTACT_ITEMS.map((item) => (
            <a
              key={item.label}
              className="skill-card casual-card contact-link"
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
              aria-label={`${item.label}: ${item.value}`}
            >
              <span className="contact-link-label">{item.label}</span>
              <span className="contact-link-value">{item.value}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
