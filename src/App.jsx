const honeyImage =
  "https://www.dropbox.com/scl/fi/s4us44letybfugzljsy16/1000_F_322399633_ZXVpTR7wm6iMfVqgKtGUKHpjDT6SVb2v.jpg?rlkey=oq27bmp8cqhd0oczo12e17hxw&st=krgzg6s0&dl=1";

const heroImage =
  "https://images.unsplash.com/photo-1613514785940-daed07799d9b?auto=format&fit=crop&w=1800&q=80";

export default function App() {
  return (
    <main className="site">
      <header className="siteHeader">
        <a href="#home" className="brand">
          Benditos
        </a>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#miel">Artisanal Mexican Honey</a>
          <a href="#visit">Visit</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="heroImage" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="heroOverlay">
            <p className="eyebrow light">Latin street food · Benditos Miel</p>

            <h1>
              Big flavours.
              <br />
              Good times.
            </h1>

            <p className="heroText">
              Bold Latin street food, cold drinks, Mexican honey and pantry
              goods — from tacos and birria to hot honey, glazes and small-batch
              flavour drops.
            </p>

            <div className="actions">
              <a href="#menu" className="btn primary">
                View Menu
              </a>
              <a href="#miel" className="btn glass">
                Benditos Miel
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="splitSection" id="about">
        <div>
          <p className="eyebrow">About us</p>
          <h2>Rooted in Mexico. Built for London.</h2>
        </div>

        <div className="copy">
          <p className="strong">
            Benditos brings together Latin street food and Mexican honey through
            fire, citrus, smoke and golden sweetness.
          </p>

          <p>
            Born from friendship and a shared love of Mexican history, culture
            and food, Benditos is a Mexican-rooted kitchen shaped by wider Latin
            American influence. It began with tacos, birria, ceviche, salsas and
            good times around the table.
          </p>

          <p>
            The honey idea started separately: a celebration of Mexican honey,
            origin, aroma, flavour and craft. Now it lives inside Benditos as
            Benditos Miel — our golden thread running through glazes, drinks,
            pantry goods, tastings and future retail drops.
          </p>
        </div>
      </section>

      <section className="section" id="menu">
        <div className="sectionHead">
          <p className="eyebrow">Menu</p>
          <h2>Street food with fire, smoke and soul.</h2>
        </div>

        <div className="cardGrid">
          <article className="card">
            <span>01</span>
            <h3>Tacos</h3>
            <p>
              Corn tortillas, slow-cooked fillings, fresh salsas, pickles,
              herbs and proper heat.
            </p>
          </article>

          <article className="card">
            <span>02</span>
            <h3>Birria</h3>
            <p>
              Rich, slow-cooked, deep-flavoured birria built for dipping,
              sharing and messy good times.
            </p>
          </article>

          <article className="card">
            <span>03</span>
            <h3>Ceviche & snacks</h3>
            <p>
              Bright citrus, fresh seafood, crunchy tostadas, corn, chillies and
              Latin drinking food.
            </p>
          </article>
        </div>
      </section>

      <section className="visitBand" id="visit">
        <div>
          <p className="eyebrow light">Visit</p>
          <h2>London pop-ups, markets and future home.</h2>
        </div>

        <p>
          Benditos is being built for food markets, events, collaborations,
          pop-ups and a future neighbourhood taqueria. Follow the launch for
          tastings, drops and locations.
        </p>
      </section>

      <section className="mielHero" id="miel">
        <div className="mielPanel">
          <p className="eyebrow light">Benditos Miel</p>

          <h2>
            Golden origins.
            <br />
            Miel & sabores.
          </h2>

          <p>
            Mexican honey, hot honey and bold pantry goods — built for tacos,
            cocktails, kitchens, markets and good times.
          </p>
        </div>
      </section>

      <section className="splitSection">
        <div>
          <p className="eyebrow">The honey</p>
          <h2>Golden heat. Wild sweetness. Mexican soul.</h2>
        </div>

        <div className="copy">
          <p className="strong">
            Benditos Miel is our love letter to Mexican honey — floral, earthy,
            golden and full of body.
          </p>

          <p>
            Born from a love of Mexico’s indigenous culture, the land, the
            rituals, the food and the deep respect for nature, Benditos Miel
            celebrates honey in its most natural form.
          </p>

          <p>
            It is also rooted in apiculture: the craft of the hive, the work of
            the bees and the beauty of raw honey with real character. No nasties,
            no shortcuts — just the best of the hive.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="sectionHead">
          <p className="eyebrow">Miel y sabores</p>
          <h2>Made for chefs, shops and sweet things.</h2>
        </div>

        <div className="cardGrid">
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
              delis, cocktails and food service.
            </p>
          </article>
        </div>
      </section>

      <section className="trade" id="contact">
        <div className="tradePanel">
          <div
            className="honeyPhoto"
            style={{ backgroundImage: `url(${honeyImage})` }}
          >
            <span className="photoBadge">Honey enquiries</span>

            <div className="photoBox">
              <p>
                For Mexican honey, hot honey, glazes, pastry goods, tastings,
                chef samples, wholesale or retail enquiries, get in touch.
              </p>

              <a href="mailto:hello@benditos.co.uk">Contact Benditos Miel</a>
            </div>
          </div>

          <div className="tradeCopy">
            <p className="eyebrow light">Wholesale</p>

            <h2>For chefs, makers and retailers.</h2>

            <p>
              Benditos Miel is being developed for restaurants, cafés, bakeries,
              cocktail bars, delis, food halls and independent retailers looking
              for Mexican honey, hot honey, glazes and pantry goods with
              stronger origin, character and flavour.
            </p>

            <div className="pills">
              <span>Restaurants</span>
              <span>Cafés</span>
              <span>Bakeries</span>
              <span>Cocktail bars</span>
              <span>Delis</span>
              <span>Food halls</span>
              <span>Retailers</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Benditos</p>
        <p>Latin street food · Mexican honey · London</p>
        <a href="mailto:hello@benditos.co.uk">hello@benditos.co.uk</a>
      </footer>
    </main>
  );
}