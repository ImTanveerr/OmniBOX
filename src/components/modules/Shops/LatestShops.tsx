import { useEffect, useState } from "react";
import axios from "axios";

import { motion } from "framer-motion";
import ShopCard from "@/components/ShopCard";

export default function LatestShops() {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    axios.get("/api/shops/latest").then((res) => setShops(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-background px-6 md:px-12 lg:px-20 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-10 text-center">
        Latest Added Shops
      </h1>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shops.map((shop, index) => (
          <motion.div
            key={shop.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ShopCard shop={shop} />
          </motion.div>
        ))}
      </div> */}
    </div>
  );
}
