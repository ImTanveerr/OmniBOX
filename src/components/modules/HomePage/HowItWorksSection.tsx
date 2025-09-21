import { motion } from "framer-motion";

// Steps data
const steps = [
  { icon: "🛒", title: "Browse Products", description: "Find your favorite groceries easily." },
  { icon: "🧺", title: "Add to Cart", description: "Add items to your cart in a click." },
  { icon: "💳", title: "Checkout", description: "Secure payment options for smooth checkout." },
  { icon: "🚚", title: "Fast Delivery", description: "Get your products delivered quickly." },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-[var(--color-background)]">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mb-16">
          How It Works
        </h2>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="bg-[var(--color-card)] shadow-lg rounded-2xl p-8 flex-1 flex flex-col items-center text-center relative hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              {/* Step Icon */}
              <div className="text-6xl mb-4 animate-bounce">
                {step.icon}
              </div>
              {/* Step Title */}
              <h3 className="text-xl font-bold mb-2 text-[var(--color-foreground)]">
                {step.title}
              </h3>
              {/* Step Description */}
              <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Connecting arrow for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-[-50px] w-16 h-1 bg-[var(--color-primary)] rounded-full"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
