import { useState, type FormEvent } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const EmailCaptureSection = () => {
  const { ref, visible } = useScrollReveal();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section ref={ref} id="capture" className="px-6 py-16 md:py-24">
      <div
        className={`mx-auto max-w-md text-center transition-all duration-700 ${
          visible ? "animate-fade-up" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl md:text-4xl leading-tight tracking-tight">
          Get the free guide
        </h2>
        <p className="mt-3 text-muted-foreground">
          Enter your details and get instant access to The Focus System.
        </p>

        {submitted ? (
          <div className="mt-8 rounded-lg bg-card border border-border p-8">
            <p className="text-lg font-display text-foreground">You're in! 🎉</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Check your inbox for the download link.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-4 text-left">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                First name
              </label>
              <input
                id="name"
                type="text"
                required
                maxLength={100}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Daniel"
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 outline-none ring-ring focus:ring-2 transition-shadow duration-200"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                maxLength={255}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 outline-none ring-ring focus:ring-2 transition-shadow duration-200"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.97]"
            >
              Get the Free Guide
            </button>
            <p className="text-center text-xs text-muted-foreground">
              No spam, ever. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailCaptureSection;
