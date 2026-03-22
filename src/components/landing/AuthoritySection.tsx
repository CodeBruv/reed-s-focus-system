import { useScrollReveal } from "@/hooks/useScrollReveal";
import danielAvatar from "@/assets/daniel-avatar.png";

const AuthoritySection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="px-6 py-16 md:py-20">
      <div
        className={`mx-auto max-w-xl flex flex-col items-center text-center transition-all duration-700 ${
          visible ? "animate-fade-up" : "opacity-0"
        }`}
      >
        <img
          src={danielAvatar}
          alt="Daniel Reed, productivity coach"
          className="w-20 h-20 rounded-full object-cover shadow-md"
          loading="lazy"
        />
        <p className="mt-6 text-lg leading-relaxed text-foreground">
          "I help freelancers and solo professionals build simple systems that
          reduce overwhelm and increase focus."
        </p>
        <p className="mt-3 text-sm font-medium text-muted-foreground">
          — Daniel Reed, Productivity Coach
        </p>
      </div>
    </section>
  );
};

export default AuthoritySection;
