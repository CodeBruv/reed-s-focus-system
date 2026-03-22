import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = [
  { title: "Simple daily workflow system", desc: "A clear structure you can follow every morning" },
  { title: "How to prioritize what actually matters", desc: "Cut through noise and focus on high-impact work" },
  { title: "A repeatable structure for productive days", desc: "Build consistency without relying on motivation" },
];

const LeadMagnetSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-xl">
        <h2
          className={`text-3xl md:text-4xl leading-tight tracking-tight text-center transition-all duration-700 ${
            visible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          What you'll get inside the Focus&nbsp;System
        </h2>
        <div className="mt-10 space-y-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-700 hover:shadow-md ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 1) * 120}ms` }}
            >
              <h3 className="font-display text-lg text-foreground">{b.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
