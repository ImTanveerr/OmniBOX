import AllShops from "@/components/modules/Shops/AllShops";
import LatestShops from "@/components/modules/Shops/LatestShops";
import PopularShops from "@/components/modules/Shops/PopularShops";

export default function Shops() {
  return (
    <div className="min-h-screen bg-background">
    
      <LatestShops />
      <PopularShops />
      <AllShops />
      
    </div>
  );
}