import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote: "This helped me finally structure my day without burnout.",
    name: "Mara Jennings",
    role: "Freelance Designer",
  },
  {
    quote: "I went from scattered to focused in less than a week. Can't recommend this enough.",
    name: "Leo Castillo",
    role: "Independent Copywriter",
  },
  {
    quote: "Simple, practical, and it actually sticks. Exactly what I needed.",
    name: "Priya Shetty",
    role: "UX Consultant",
  },
];

const TestimonialsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="px-6 py-16 md:py-24 bg-card">
      <div className="mx-auto max-w-xl space-y-8">
        {testimonials.map((t, i) => (
          <blockquote
            key={i}
            className={`text-center transition-all duration-700 ${
              visible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <p className="text-base md:text-lg italic text-foreground/90 leading-relaxed">
              "{t.quote}"
            </p>
            <footer className="mt-3 text-sm text-muted-foreground">
              — {t.name}, {t.role}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
