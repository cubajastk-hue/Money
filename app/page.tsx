type HomePageData = {
  title: string;
  subtitle: string;
  description: string;
};

const homePageData: HomePageData = {
  title: "Money",
  subtitle: "Finance. Přehledně. Jednoduše.",
  description:
    "Money je moderní platforma pro správu osobních financí a přehled výdajů.",
};

export default function HomePage() {
  const { title, subtitle, description } = homePageData;

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <section className="max-w-2xl text-center space-y-6">
        <h1 className="text-5xl font-bold">{title}</h1>
        <h2 className="text-2xl text-gray-300">{subtitle}</h2>
        <p className="text-gray-400">{description}</p>
      </section>
    </main>
  );
}
