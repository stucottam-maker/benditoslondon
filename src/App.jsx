const honeyImage =
  "https://www.dropbox.com/scl/fi/s4us44letybfugzljsy16/1000_F_322399633_ZXVpTR7wm6iMfVqgKtGUKHpjDT6SVb2v.jpg?rlkey=oq27bmp8cqhd0oczo12e17hxw&st=krgzg6s0&dl=1";

export default function App() {
  return (
    <main className="page">
      <header className="header">
        <a className="logo" href="/">
          Benditos
        </a>

        <nav className="nav">
          <a href="#story">Story</a>
          <a href="#honey">Honey</a>
          <a href="#trade">Trade</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroTextBlock">
          <p className="eyebrow">Benditos Miel y Sabores</p>

          <h1>
            Golden
            <br />
            Heat
          </h1>

          <p className="heroText">
            Mexican honey, hot honey and bold pantry goods — built for tacos,
            cocktails, kitchens, markets and good times.
          </p>

          <div className="heroActions">
            <a href="#contact" className="button primary">
              Honey enquiries
            </a>

            <a href="#story" className="button secondary">
              Our story
            </a>
          </div>
        </div>

        <div className="heroCard">
          <p>
            Golden, floral, earthy and full of body. No nasties, no shortcuts,
            just the best of the hive.
          </p>
        </div>
      </section>

      <section className="section split" id="story">
        <div>
          <p className="eyebrow">Rooted in Mexico</p>
          <h2>Honey with soul</h2>
        </div>

        <div className="copy">
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

      <section className="section" id="honey">
        <div className="sectionIntro">
          <p className="eyebrow">Miel y sabores</p>
          <h2>Made for chefs, shops and sweet things</h2>
        </div>

        <div className="grid">
          <article className="card">
            <span>01</span>
            <h3>Mexican honey</h3>
            <p>
              Natural artisanal honey with floral, earthy and golden notes.
              Perfect for retail, gifting, cheese boards, pastries and drinks.
            </p>
          </article>

          <article className="card">
            <span>02</span>
            <h3>Hot honey</h3>
            <p>
              Sweet heat for tacos, fried chicken, pizza, marinades, breakfast
              dishes and finishing sauces.
            </p>
          </article>

          <article className="card">
            <span>03</span>
            <h3>Glazes & sauces</h3>
            <p>
              Natural honey-based glazes for restaurants, cafés, bakeries,
              delis and food service.
            </p>
          </article>
        </div>
      </section>

      <section className="tradeSection" id="trade">
        <div className="tradePanel">
          <div
            className="photoCard"
            style={{ backgroundImage: `url(${honeyImage})` }}
          >
            <span className="photoLabel">Honey enquiries</span>

            <div className="photoOverlay">
              <p>
                For Mexican honey, hot honey, glazes, pastry goods, tastings,
                chef samples, wholesale or retail enquiries, get in touch.
              </p>

              <a href="mailto:hello@benditos.co.uk">Contact Benditos Miel</a>
            </div>
          </div>

          <div className="tradeCopy">
            <p className="eyebrow light">Wholesale & retail</p>

            <h2>For chefs, makers and retailers.</h2>

            <p>
              We are building supply for restaurants, cafés, bakeries, cocktail
              bars, delis, food halls and independent retailers looking for
              Mexican honey, hot honey, glazes and pantry goods with stronger
              origin, character and flavour.
            </p>

            <div className="pills">
              <span>Restaurants</span>
              <span>Cafés</span>
              <span>Bakeries</span>
              <span>Cocktail bars</span>
              <span>Delis</span>
              <span>Food halls</span>
              <span>Independent retailers</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let’s talk honey</h2>
        </div>

        <div className="contactCard">
          <p>
            For wholesale, retail, tastings, chef samples or collaboration
            enquiries, email:
          </p>

          <a href="mailto:hello@benditos.co.uk">hello@benditos.co.uk</a>
        </div>
      </section>

      <footer className="footer">
        <p>Benditos Miel y Sabores</p>
        <p>Mexican honey, hot honey and natural pantry goods.</p>
      </footer>
    </main>
  );
}