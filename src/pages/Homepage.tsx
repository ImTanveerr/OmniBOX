import { FeaturesSection } from "@/components/modules/HomePage/FeaturesSection";
import HeroSection from "@/components/modules/HomePage/HeroSection";
import { HowItWorksSection } from "@/components/modules/HomePage/HowItWorksSection";

export default function Homepage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      
    

    

  
    </div>
  );
}
