import { Link } from "react-router-dom";
import Logo from "@/assets/icons/Logo";
import { RegisterForm } from "@/components/modules/Authentication/RegisterForm";
import { motion } from "framer-motion";

export default function Register() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden p-6">

      {/* Floating background icons */}
      <motion.div
        className="absolute top-0 left-1/4 text-6xl text-primary/20"
        animate={{ y: [0, 20, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        🥦
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/4 text-7xl text-secondary/20"
        animate={{ y: [0, -25, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        🍎
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/2 text-8xl text-accent/20"
        animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        🛒
      </motion.div>

      {/* Register Form */}
      <div className="relative w-full max-w-md bg-card p-10 rounded-xl shadow-lg z-10">
        <div className="flex justify-center mb-6">
          <Link to="/" className="flex items-center gap-2 font-medium">
            <Logo />
            <span className="text-lg font-bold text-foreground">OmniBox</span>
          </Link>
        </div>

        <RegisterForm />

      </div>
    </div>
  );
}
