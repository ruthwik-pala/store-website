import StorefrontClient from "@/app/components/StorefrontClient";
import { categories, instagramVideos, products } from "@/lib/products";
import { assetPath } from "@/lib/site";

const chatNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999999999";
const storePhone = process.env.NEXT_PUBLIC_STORE_PHONE || "098491 99707";
const storeAddress = "Door No. 12-7-5, S V N Road, Batala Bazaar, Warangal, Telangana 506002";

function buildBuyLink(message) {
  return `https://wa.me/${chatNumber}?text=${encodeURIComponent(message)}`;
}

export default function HomePage() {
  return (
    <main>
      <div className="sale-strip">Premium sarees, bridal silks and festive collections from Ananthula Kedari, Warangal</div>

      <header className="site-header">
        <a className="brand-wrap" href="#top" aria-label="Ananthula Kedari home">
          <img src={assetPath("/ananthula-wordmark.svg")} alt="Ananthula Kedari" />
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#collections">Sarees</a>
          <a href="#categories">Categories</a>
          <a href="#videos">Videos</a>
          <a href="#footer">Contact</a>
        </nav>

        <a
          className="header-cta"
          href={buildBuyLink("Hi Ananthula Kedari, I want to buy from your saree collection.")}
          target="_blank"
          rel="noreferrer"
        >
          Buy
        </a>
      </header>

      <section id="top" className="hero-showcase">
        <div className="hero-copy">
          <span>Since 1951 • Warangal</span>
          <h1>Luxury sarees for every celebration.</h1>
          <p>
            Discover pattu, bridal and designer sarees with a premium boutique shopping experience. Choose your style and
            buy directly through the store.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#collections">Shop Collection</a>
            <a
              className="btn-outline"
              href={buildBuyLink("Hi Ananthula Kedari, please help me choose a saree.")}
              target="_blank"
              rel="noreferrer"
            >
              Ask Store
            </a>
          </div>
        </div>
        <div className="hero-images" aria-hidden="true">
          <img className="hero-main-img" src={assetPath("/catalog/shimmer-saree-portrait.jpg")} alt="" />
          <img className="hero-float-img" src={assetPath("/lookbook/editorial-2.jpg")} alt="" />
        </div>
      </section>

      <section className="trust-row" aria-label="Store benefits">
        <span>Curated Sarees</span>
        <span>Live Stock on WhatsApp</span>
        <span>Bridal Friendly</span>
        <span>Warangal Store</span>
      </section>

      <section id="categories" className="category-block">
        <div className="section-heading">
          <span>Shop By Category</span>
          <h2>Find your occasion faster.</h2>
        </div>
        <div className="category-grid">
          {categories.map((item) => (
            <a className="category-card" href={item.href} key={item.title}>
              <img src={assetPath(item.image)} alt={item.title} loading="lazy" />
              <strong>{item.title}</strong>
            </a>
          ))}
        </div>
      </section>

      <StorefrontClient products={products} />

      <section className="experience-band">
        <div>
          <span>Ananthula Heritage</span>
          <h2>Trusted saree curation since 1951.</h2>
        </div>
        <p>
          From wedding silks to festive pattu sarees, every edit is presented for customers who want rich colors,
          elegant drapes and direct guidance from the Warangal store before they buy.
        </p>
      </section>

      <section id="videos" className="video-block">
        <div className="section-heading center">
          <span>Instagram Videos</span>
          <h2>Watch latest store videos.</h2>
        </div>
        <div className="video-grid video-link-grid">
          {instagramVideos.map((video) => (
            <a className="video-link-card" href={video.url} target="_blank" rel="noreferrer" key={video.title}>
              <img src={assetPath(video.image)} alt={video.title} loading="lazy" />
              <span className="play-button">Play</span>
              <div>
                <small>{video.eyebrow}</small>
                <h3>{video.title}</h3>
                <p>{video.copy}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="contact-panel">
        <div>
          <span>Ready to buy?</span>
          <h2>Message Ananthula Kedari directly.</h2>
          <p>Ask for price, colors, stock availability, blouse details and delivery support.</p>
        </div>
        <a
          className="btn-primary"
          href={buildBuyLink("Hi Ananthula Kedari, I want to buy from the website. Please help me with available options.")}
          target="_blank"
          rel="noreferrer"
        >
          Buy on WhatsApp
        </a>
      </section>

      <footer id="footer" className="site-footer">
        <div className="footer-brand">
          <img src={assetPath("/ananthula-wordmark.svg")} alt="Ananthula Kedari" />
          <p>Premium saree and ethnic wear showcase for Ananthula Kedari, serving Warangal since 1951.</p>
        </div>

        <div className="footer-column">
          <h3>Shop</h3>
          <a href="#collections">Pattu Sarees</a>
          <a href="#collections">Bridal Sarees</a>
          <a href="#collections">Designer Sarees</a>
          <a href="#videos">Instagram Videos</a>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <a href={buildBuyLink("Hi Ananthula Kedari, I want help buying a saree.")} target="_blank" rel="noreferrer">
            WhatsApp Order Support
          </a>
          <a href="https://www.instagram.com/ananthula_online/" target="_blank" rel="noreferrer">@ananthula_online</a>
          <a href={`tel:${storePhone.replace(/\s/g, "")}`}>{storePhone}</a>
        </div>

        <div className="footer-column footer-address">
          <h3>Shop Address</h3>
          <p>{storeAddress}</p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(storeAddress)}`}
            target="_blank"
            rel="noreferrer"
          >
            Open in Maps
          </a>
          <small>Open daily around 10:30 AM - 10:00 PM. Please confirm before visiting.</small>
        </div>
      </footer>
    </main>
  );
}
