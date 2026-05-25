import ProductCard from "@/app/components/ProductCard";

export default function Section({ title, subtitle, products, tone = "soft" }) {
  return (
    <section className={`section section-${tone}`}>
      <div className="section-head">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="grid">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  );
}
