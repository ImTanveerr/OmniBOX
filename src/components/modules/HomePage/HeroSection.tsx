import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const images = [
  "https://cdn-icons-png.flaticon.com/512/706/706164.png",
  "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
  "https://cdn-icons-png.flaticon.com/512/2910/2910761.png"
];

// Floating icons
const floatingIcons = [
  { icon: "🍎", size: 30, top: "10%", left: "15%" },
  { icon: "🥦", size: 25, top: "25%", left: "70%" },
  { icon: "🥖", size: 28, top: "50%", left: "40%" },
  { icon: "🧃", size: 22, top: "15%", left: "55%" },
  { icon: "🍫", size: 24, top: "65%", left: "20%" },
];

export default function HeroSection() {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // rotate image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[50vh] flex items-center px-6 md:px-12 lg:px-20 bg-background overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left-Center Content */}
        <div className="flex-1 flex flex-col justify-center gap-4 md:max-w-lg md:ml-10">
          <motion.div
            className="inline-block bg-primary/20 text-primary font-semibold px-4 py-1 rounded-full w-fit"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            🛒 Fresh & Fast
          </motion.div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-snug">
            Groceries & Food <br />
            <span className="text-primary">Delivered Faster</span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg">
            Experience seamless shopping for fresh groceries, meals, and essentials —
            all at your fingertips.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <Button
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 text-base rounded-lg shadow"
              onClick={() => navigate("/shop")}
            >
              Shop Now
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-6 py-3 text-base rounded-lg"
              onClick={() => navigate("/deals")}
            >
              View Deals
            </Button>
          </div>

          <div className="mt-4 overflow-hidden">
            <motion.div
              className="flex gap-6 text-primary font-medium text-sm md:text-base"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <span>🍎 Fresh Vegetables</span>
              <span>🚚 Fast Delivery</span>
              <span>💰 Exclusive Discounts</span>
              <span>🥖 Daily Essentials</span>
            </motion.div>
          </div>
        </div>

        {/* Right Illustration with rotating images and floating icons */}
        <div className="flex-1 flex justify-center mt-6 md:mt-0 relative w-full h-[350px] md:h-[400px]">
          
          {/* Floating Icons */}
          {floatingIcons.map((item, index) => (
            <motion.span
              key={index}
              className="absolute"
              style={{ top: item.top, left: item.left, fontSize: item.size }}
              animate={{
                y: ["0%", "-15%", "0%"],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3, // random duration
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {item.icon}
            </motion.span>
          ))}

          {/* Main Rotating Image */}
          <AnimatePresence>
            <motion.img
              key={currentImage}
              src={images[currentImage]}
              alt="Shopping Delivery"
              className="absolute w-[250px] md:w-[350px] drop-shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
