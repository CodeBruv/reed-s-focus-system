import { useScrollReveal } from "@/hooks/useScrollReveal";

const FinalCTASection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="px-6 py-16 md:py-24 bg-card">
      <div
        className={`mx-auto max-w-xl text-center transition-all duration-700 ${
          visible ? "animate-fade-up" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl md:text-4xl leading-tight tracking-tight">
          Start working with clarity, not&nbsp;chaos
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Download the free guide and take back control of your day.
        </p>
        <a
          href="#capture"
          className="mt-8 inline-block rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.97]"
        >
          Download Free Guide
        </a>
      </div>
    </section>
  );
};

export default FinalCTASection;
