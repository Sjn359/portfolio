import Button from "../components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-28 lg:py-32 container mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-32 h-32 md:w-40 md:h-40 relative overflow-hidden rounded-full border-4 border-pink-100 shadow-lg">
          <img
            src="/professional-portrait.png"
            alt="Salma Jahan"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
            Hey there! I'm Salma 👋✨
          </h1>
          <p className="text-xl text-gray-600 mb-4 max-w-2xl">
            I'm a frontend developer who loves turning coffee into beautiful,
            interactive websites!
          </p>
          <p className="text-lg text-gray-500 mb-6 max-w-2xl">
            When I'm not coding, you'll find me exploring new cafes,
            binge-watching design tutorials, or trying to keep my plants alive
            🌱
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-pink-500 hover:bg-pink-600 text-white"
            >
              Check Out My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-pink-500 text-pink-500 hover:bg-pink-50"
            >
              Let's Chat!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
