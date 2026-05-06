import { useState } from "react";

const menuItems = [
  {
    title: "Birria Tacos",
    text: "Slow-cooked beef, melted cheese, onion, coriander and rich dipping consommé.",
    tag: "Smoke",
  },
  {
    title: "Crispy Fish Taco",
    text: "Crisp fish, zesty slaw, chilli, lime and crunchy cabbage.",
    tag: "Citrus",
  },
  {
    title: "Chipotle Honey Chicken",
    text: "Charred chicken with chipotle, lime and a Mexican honey glaze.",
    tag: "Sweet heat",
  },
  {
    title: "Salsa Macha Honey",
    text: "Crunchy chilli oil, nuts, seeds and artesanal honey.",
    tag: "Pantry",
  },
];

const pantryItems = [
  "Mexican honey",
  "Chilli honey",
  "Salsa macha",
  "Honey-lime dressing",
  "Smoky marinades",
  "Gift boxes",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site">
      <header className="header">
        <a href="#top" className="logo" aria-label="Benditos homepage">
          Benditos
        </a>

        <button
          className="menuButton"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <nav className={menuOpen ? "nav navOpen" : "nav"}>
          <a href="#story" onClick={() => setMenuOpen(false)}>
            Story
          </a>
          <a href="#food" onClick={() => setMenuOpen(false)}>
            Food
          </a>
          <a href="#honey" onClick={() => setMenuOpen(false)}>
            Honey
          </a>
          <a href="#pantry" onClick={() => setMenuOpen(false)}>
            Pantry
          </a>
          <a href="#london" onClick={() => setMenuOpen(false)}>
            London
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="heroText">
            <p className="eyebrow">London — coming soon</p>
            <h1>
              Latin street food.
              <span> Mexican soul.</span>
            </h1>
            <p className="heroCopy">
              Fire, citrus, smoke, honey and chilli — Benditos brings bold Latin
              street food to London with deep Mexican flavour at its heart.
            </p>

            <div className="heroActions">
              <a href="#food" className="buttonPrimary">
                Explore the food
              </a>
              <a href="#story" className="buttonSecondary">
                Our story
              </a>
            </div>
          </div>

          <div className="heroCard">
            <div className="heroImage heroImageMain">
              <div className="imageOverlay">
                <p>Fire</p>
                <p>Honey</p>
                <p>Smoke</p>
              </div>
            </div>

            <div className="heroMiniGrid">
              <div className="miniCard">
                <span>01</span>
                <p>Tacos, tostadas, ceviche and cold drinks.</p>
              </div>
              <div className="miniCard darkMini">
                <span>02</span>
                <p>Mexican honey, chilli and sweet heat.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="intro" id="story">
          <p className="sectionLabel">The idea</p>
          <h2>Street food with depth.</h2>
          <p>
            Benditos is built around the flavours that make Latin food feel
            alive: smoke from the grill, citrus on fresh seafood, slow-cooked
            meat, warm tortillas, sharp salsas, cold drinks and a little honey
            running through the heat.
          </p>
        </section>

        <section className="threeCards">
          <article>
            <span className="cardNumber">01</span>
            <h3>Street food</h3>
            <p>
              Tacos, quesadillas, tostadas, ceviche and sharing plates made for
              markets, neighbourhoods and late-night good times.
            </p>
          </article>

          <article>
            <span className="cardNumber">02</span>
            <h3>Mexican soul</h3>
            <p>
              Inspired by taquerías, mercados, home cooking, slow meats, bright
              salsas and the deep flavour of Mexican ingredients.
            </p>
          </article>

          <article>
            <span className="cardNumber">03</span>
            <h3>Sweet heat</h3>
            <p>
              Chilli, honey, lime, smoke and spice — the Benditos signature
              flavour running through sauces, glazes and marinades.
            </p>
          </article>
        </section>

        <section className="splitSection" id="honey">
          <div className="splitImage honeyImage">
            <p>Honey · Chilli · Lime</p>
          </div>

          <div className="splitText">
            <p className="sectionLabel">Where the honey comes in</p>
            <h2>Mexican honey, folded into the food.</h2>
            <p>
              Part of the Benditos story began with Mexican honey — rich, floral
              and artesanal. That influence still runs through the food:
              chilli honey, honey-lime dressings, smoky glazes, marinades and
              sauces built around sweet heat.
            </p>
            <p>
              It gives the brand another layer: not just tacos, but a deeper
              pantry of Mexican flavour.
            </p>
          </div>
        </section>

        <section className="menuSection" id="food">
          <div className="sectionHead">
            <p className="sectionLabel">Food preview</p>
            <h2>Big flavour. No shortcuts.</h2>
          </div>

          <div className="menuGrid">
            {menuItems.map((item) => (
              <article className="menuItem" key={item.title}>
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pantrySection" id="pantry">
          <div>
            <p className="sectionLabel">Future range</p>
            <h2>The Benditos Pantry.</h2>
            <p>
              The next step for Benditos is a small pantry range: Mexican honey,
              chilli honey, salsa macha, marinades and gift boxes — bringing the
              same sweet heat from the kitchen into people’s homes.
            </p>
          </div>

          <div className="pantryList">
            {pantryItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="quoteSection">
          <h2>
            “Latin street food with Mexican soul — built on fire, finished with
            honey.”
          </h2>
        </section>

        <section className="locationSection" id="london">
          <div>
            <p className="sectionLabel">London</p>
            <h2>Coming soon.</h2>
          </div>

          <p>
            We’re building Benditos for markets, neighbourhood sites, pop-ups
            and food lovers across London. Bold food, casual service and proper
            good times.
          </p>
        </section>
      </main>

      <footer className="footer">
        <div>
          <a href="#top" className="footerLogo">
            Benditos
          </a>
          <p>Latin street food. Mexican soul.</p>
        </div>

        <div className="footerLinks">
          <a href="#story">Story</a>
          <a href="#food">Food</a>
          <a href="#pantry">Pantry</a>
        </div>
      </footer>
    </div>
  );
}

export default App;