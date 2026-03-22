import ebookMockup from "@/assets/ebook-mockup.png";

const HeroSection = () => {
  return (
    <section className="px-6 pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium tracking-wide uppercase text-muted-foreground animate-fade-up">
          Daniel Reed
        </p>
        <h1
          className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-foreground animate-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          Stop working all day and still feeling behind
        </h1>
        <p
          className="mt-6 text-lg md:text-xl leading-relaxed text-muted-foreground max-w-xl mx-auto animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          A simple system to help freelancers focus better, finish what matters,
          and finally feel in control of their work.
        </p>
        <div className="mt-8 animate-fade-up" style={{ animationDelay: "300ms" }}>
          <a
            href="#capture"
            className="inline-block rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.97]"
          >
            Download Free Guide
          </a>
          <p className="mt-3 text-sm text-muted-foreground">
            Free PDF · No spam · Instant access
          </p>
        </div>
        <div className="mt-12 animate-fade-up" style={{ animationDelay: "400ms" }}>
          <img
            src={ebookMockup}
            alt="The Focus System — A simple guide for freelancers"
            className="mx-auto w-64 md:w-72 drop-shadow-2xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
