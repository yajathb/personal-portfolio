const ABOUT_ITEMS = [
  "I am a high schooler graduating with the Class of 2029.",
  "I have a passion for technology, programming, and problem-solving. I'm always eager to learn new things and take on challenges.",
  "In my free time, I enjoy coding, playing video games, and exploring the latest tech trends.",
  "I'm excited to share my projects and experiences with you through this portfolio. Feel free to explore and connect with me!",
];

export default function Home() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="min-h-[calc(100svh-4rem)] flex items-center justify-center text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-9xl font-bold tracking-tight">Hi, I&#39;m Yajath.</h1>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20" id="about">
        <h2 className="text-2xl font-semibold mb-12 flex justify-center">About Me</h2>
        <div className="about-cards">
          {ABOUT_ITEMS.map((item) => (
            <div key={item} className="about-card text-lg leading-relaxed">
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
