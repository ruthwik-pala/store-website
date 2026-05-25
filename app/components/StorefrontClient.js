"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/app/components/ProductCard";

export default function StorefrontClient({ products }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = useMemo(() => ["All", ...new Set(products.map((item) => item.category))], [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => activeCategory === "All" || product.category === activeCategory);
  }, [products, activeCategory]);

  return (
    <section id="collections" className="collection-block">
      <div className="section-heading center">
        <span>Featured Collection</span>
        <h2>Sarees worn by models, styled consistently.</h2>
      </div>

      <div className="chip-row">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={category === activeCategory ? "chip chip-active" : "chip"}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  );
}
