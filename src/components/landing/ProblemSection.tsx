import { useScrollReveal } from "@/hooks/useScrollReveal";

const painPoints = [
  "You're always busy but rarely feel productive",
  "Your day gets filled with random tasks",
  "You struggle to stay focused on what matters",
  "You end the day feeling behind",
];

const ProblemSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="px-6 py-16 md:py-24 bg-card">
      <div className="mx-auto max-w-xl">
        <h2
          className={`text-3xl md:text-4xl leading-tight tracking-tight text-center transition-all duration-700 ${
            visible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          If this feels familiar, you're not alone
        </h2>
        <ul className="mt-10 space-y-5">
          {painPoints.map((point, i) => (
            <li
              key={i}
              className={`flex items-start gap-3 text-foreground/85 text-base md:text-lg transition-all duration-700 ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              <span className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-primary" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProblemSection;
