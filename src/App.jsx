import "./App.css";

const honeyImage =
  "https://www.dropbox.com/scl/fi/s4us44letybfugzljsy16/1000_F_322399633_ZXVpTR7wm6iMfVqgKtGUKHpjDT6SVb2v.jpg?rlkey=oq27bmp8cqhd0oczo12e17hxw&st=krgzg6s0&dl=1";

export default function App() {
  return (
    <main className="site">
      <header className="nav">
        <a href="/" className="logo">
          Benditos
        </a>

        <nav className="navLinks">
          <a href="#story">Story</a>
          <a href="#honey">Honey</a>
          <a href="#trade">Trade</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">Benditos Miel y Sabores</p>

          <h1>
            Golden
            <br />
            Heat
          </h1>

          <p className="heroText">
            Artisanal Mexican honey, hot honey and natural sweet glazes, rooted
            in the craft of the hive and the deep flavours of Mexico.
          </p>

          <div className="heroButtons">
            <a href="#contact" className="btn btnRed">
              Honey enquiries
            </a>
            <a href="#story" className="btn btnGhost">
              Our story
            </a>
          </div>
        </div>

        <div className="heroNote">
          <p>
            Golden, floral, earthy and full of body. No nasties, no shortcuts,
            just the best of the hive.
          </p>
        </div>
      </section>

      <section className="story" id="story">
        <div className="storyTitle">
          <p className="eyebrow">Rooted in Mexico</p>
          <h2>Honey with soul</h2>
        </div>

        <div className="storyCopy">
          <p>
            Benditos Miel y Sabores comes from a love of Mexico’s indigenous
            culture — the land, the rituals, the food, the colour and the deep
            respect for nature.
          </p>

          <p>
            It is also rooted in apiculture: the craft of the hive, the work of
            the bees and the beauty of honey in its most natural form.
          </p>

          <p>
            Golden, floral, earthy and full of body — our honey is artisanal,
            natural and full of character.
          </p>
        </div>
      </section>

      <section className="products" id="honey">
        <div className="sectionHead">
          <p className="eyebrow">Miel y sabores</p>
          <h2>Made for chefs, shops and sweet things</h2>
        </div>

        <div className="productGrid">
          <article className="productCard">
            <span>01</span>
            <h3>Mexican honey</h3>
            <p>
              Natural artisanal honey with floral, earthy and golden notes.
              Perfect for retail, gifting, cheese boards, pastries and drinks.
            </p>
          </article>

          <article className="productCard">
            <span>02</span>
            <h3>Hot honey</h3>
            <p>
              Sweet heat for tacos, fried chicken, pizza, marinades, breakfast
              dishes and finishing sauces.
            </p>
          </article>

          <article className="productCard">
            <span>03</span>
            <h3>Glazes & sauces</h3>
            <p>
              Natural honey-based glazes for restaurants, cafés, bakeries,
              delis and food service.
            </p>
          </article>
        </div>
      </section>

      <section className="trade" id="trade">
        <div className="tradePanel">
          <div
            className="imageCard"
            style={{ backgroundImage: `url(${honeyImage})` }}
          >
            <div className="imageBadge">Honey enquiries</div>

            <div className="imageOverlay">
              <p>
                For Mexican honey, hot honey, glazes, pastry goods, tastings,
                chef samples, wholesale or retail enquiries, get in touch.
              </p>

              <a href="mailto:hello@benditos.co.uk">Contact Benditos Miel</a>
            </div>
          </div>

          <div className="tradeCopy">
            <p className="eyebrow eyebrowLight">Wholesale & retail</p>

            <h2>Bring Mexican honey to your kitchen, shop or menu.</h2>

            <p>
              We are building supply for chefs, restaurants, cafés, bakeries,
              delis, independents and retail partners looking for something
              natural, warm and full of character.
            </p>

            <div className="pills">
              <span>Chef samples</span>
              <span>Retail jars</span>
              <span>Hot honey</span>
              <span>Glazes</span>
              <span>Wholesale</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let’s talk honey</h2>
        </div>

        <div className="contactCard">
          <p>
            For wholesale, retail, tasting, chef samples or collaboration
            enquiries, email:
          </p>

          <a href="mailto:hello@benditos.co.uk">hello@benditos.co.uk</a>
        </div>
      </section>

      <footer className="footer">
        <p>Benditos Miel y Sabores</p>
        <p>Mexican honey, hot honey and natural sweet glazes.</p>
      </footer>
    </main>
  );
}