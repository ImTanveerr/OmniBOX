// ShopCard.tsx
import { motion } from "framer-motion";

interface Shop {
  id: string;
  name: string;
  image?: string;
  category?: string;
  rating?: number;
  ordersCount?: number;
}

interface ShopCardProps {
  shop: Shop;
}

export default function ShopCard({ shop }: ShopCardProps) {
  return (
    <motion.div
      className="bg-card/80 dark:bg-card p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer flex flex-col items-center text-center"
      whileHover={{ scale: 1.05 }}
    >
      {/* Shop Image */}
      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary/50">
        <img
          src={shop.image || "https://via.placeholder.com/150"}
          alt={shop.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Shop Name */}
      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">
        {shop.name}
      </h3>

      {/* Category */}
      {shop.category && (
        <p className="text-sm text-muted-foreground mb-2">{shop.category}</p>
      )}

      {/* Rating & Orders */}
      <div className="flex items-center gap-2 text-sm text-primary">
        {shop.rating && (
          <span>⭐ {shop.rating.toFixed(1)}</span>
        )}
        {shop.ordersCount && (
          <span>• {shop.ordersCount} orders</span>
        )}
      </div>

      {/* View Button */}
      <button
        className="mt-4 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition"
      >
        View Shop
      </button>
    </motion.div>
  );
}
