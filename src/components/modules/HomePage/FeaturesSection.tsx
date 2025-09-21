import { motion } from "framer-motion";

// Features data
const features = [
  { icon: "🚚", title: "Fast Delivery", description: "Get your groceries delivered within hours." },
  { icon: "🍎", title: "Fresh Products", description: "Only fresh fruits, vegetables, and essentials." },
  { icon: "☑️", title: "Quality Checked", description: "All products are carefully inspected for quality." },
  { icon: "💳", title: "Easy Payments", description: "Multiple payment options for your convenience." },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-[var(--color-background)]">
      <div className="container mx-auto text-center px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mb-6">
          Why Choose <span className="text-[var(--color-primary)]">Us?</span>
        </h2>
        <p className="text-[var(--color-muted-foreground)] mb-14 max-w-xl mx-auto">
          We make shopping easier, faster, and better — so you can focus on what really matters.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="group relative bg-[var(--color-card)] p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              {/* Floating Icon */}
              <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                {feature.icon}
              </div>
              {/* Title */}
              <h3 className="text-lg font-semibold mb-3 text-[var(--color-foreground)]">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[var(--color-primary)/10] via-transparent to-[var(--color-accent)/10] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
