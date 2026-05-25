const chatNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999999999";

function getBuyLink(product) {
  const text = encodeURIComponent(
    `Hi Ananthula Kedari, I want to buy ${product.name}. Please share available colors, price, and delivery details.`
  );

  return `https://wa.me/${chatNumber}?text=${text}`;
}

export default function ProductCard({ product, index = 0 }) {
  return (
    <article className="product-card reveal" style={{ animationDelay: `${Math.min(index * 50, 280)}ms` }}>
      <a className="image-wrap" href={getBuyLink(product)} target="_blank" rel="noreferrer" aria-label={`Buy ${product.name}`}>
        <img src={product.image} alt={product.name} loading="lazy" />
        <div className="card-badges">
          <span className="pill">{product.category}</span>
          <span className="pill muted">{product.tag}</span>
        </div>
      </a>
      <div className="product-body">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <a className="product-buy" href={getBuyLink(product)} target="_blank" rel="noreferrer">
          Buy
        </a>
      </div>
    </article>
  );
}
