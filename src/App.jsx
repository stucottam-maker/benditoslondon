import { useEffect, useMemo, useState } from "react";

const heroSlides = [
  {
    label: "Latin street food · Benditos Miel",
    title: "Big flavours. Good times.",
    copy:
      "Bold Latin street food, cold drinks, Mexican honey and pantry goods — from tacos and birria to hot honey, glazes and small-batch flavour drops.",
    image:
      "https://www.dropbox.com/scl/fi/0a9e7h6gjhqpi489xt2fj/birriaceviche.png?rlkey=9mh8ew59rqvynqn8dk026z3ri&st=68e49qqq&raw=1",
    tag: "Birria",
  },
  {
    label: "Tacos · Salsas · Drinks",
    title: "Rooted in Mexico. Built for London.",
    copy:
      "A Mexican-rooted kitchen shaped by Latin flavours, friendship, fire, citrus, smoke and good times around the table.",
    image:
      "https://www.dropbox.com/scl/fi/blt8bfiv0fzdjlpmzci2f/istockphoto-2176660544-612x612.jpg?rlkey=0t6za0ddo9f0uo0di7pvrpmqn&st=re915b3s&raw=1",
    tag: "Benditos",
  },
];

const menuSections = [
  {
    title: "Tacos",
    note: "Corn tortillas, salsas, pickles and proper heat.",
    items: [
      {
        name: "Birria taco",
        price: "£8.5",
        desc: "Slow cooked beef, consommé, onion, coriander and salsa.",
      },
      {
        name: "Pork belly chicharrón",
        price: "£8",
        desc: "Crispy pork belly, salsa, herbs and lime.",
      },
      {
        name: "Chicken pastor",
        price: "£7.5",
        desc: "Achiote, pineapple, chilli, onion and coriander.",
      },
    ],
  },
  {
    title: "Seafood",
    note: "Bright, fresh, citrusy and made for cold drinks.",
    items: [
      {
        name: "Ceviche tostada",
        price: "£9",
        desc: "Fish, lime, chilli, onion, herbs and tostada crunch.",
      },
      {
        name: "Tempura prawn taco",
        price: "£8.5",
        desc: "Crispy prawn, salsa, crema and pickles.",
      },
      {
        name: "Coco prawn taco",
        price: "£8.5",
        desc: "King prawn, coconut, chilli and lime.",
      },
    ],
  },
  {
    title: "Sides",
    note: "Corn, potatoes, cabbage, beans and market bits.",
    items: [
      {
        name: "Elote",
        price: "£5.5",
        desc: "Corn, crema, cheese, chilli and lime.",
      },
      {
        name: "Hispi cabbage",
        price: "£6",
        desc: "Charred cabbage, salsa macha and herbs.",
      },
      {
        name: "Pink fir potatoes",
        price: "£5",
        desc: "Crispy potatoes, aioli and chilli salt.",
      },
    ],
  },
  {
    title: "Drinks & sweets",
    note: "Cold drinks, honey drops and sweet things.",
    items: [
      {
        name: "Agua fresca",
        price: "£4",
        desc: "Seasonal fruit, lime and fresh herbs.",
      },
      {
        name: "Honey paloma",
        price: "£9",
        desc: "Tequila, grapefruit, lime and Benditos honey.",
      },
      {
        name: "Mochi selection",
        price: "£6",
        desc: "Green tea, chocolate, mango passion fruit or coconut.",
      },
    ],
  },
];

const honeyCards = [
  {
    title: "Raw Mexican honey",
    copy:
      "Artesanal honey selected for flower, origin, aroma and natural character.",
  },
  {
    title: "Hot honey",
    copy:
      "Mexican honey with chilli heat, built for tacos, fried food, cheese and marinades.",
  },
  {
    title: "Glazes & marinades",
    copy:
      "Honey-led flavour for chicken, pork belly, squash, vegetables and grill cooking.",
  },
  {
    title: "Drinks & syrups",
    copy:
      "Honey for margaritas, palomas, agua frescas, highballs and future honey ferments.",
  },
  {
    title: "Pantry goods",
    copy:
      "Salsa macha, sauces, honey caramel, small-batch drops and future gift boxes.",
  },
  {
    title: "Tastings & events",
    copy:
      "Honey flights, taco pairings, hot honey tastings, markets and collaborations.",
  },
];

const producerTags = [
  "Apicultores",
  "Cooperativas",
  "Miel cruda",
  "Miel artesanal",
  "Origen mexicano",
  "Comercio honesto",
  "Colaboraciones",
];

const routes = {
  "/": "home",
  "/menu": "menu",
  "/artisanal-mexican-honey": "honey",
  "/miel": "productores",
  "/visit": "visit",
  "/contact": "contact",
};

function getPageFromPath() {
  const path = window.location.pathname;
  return routes[path] || "home";
}

function goTo(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function TagList({ items }) {
  return (
    <div className="tag-list">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function Header({ page }) {
  const links = [
    ["Home", "/"],
    ["Menu", "/menu"],
    ["Artisanal Mexican Honey", "/artisanal-mexican-honey"],
    ["Visit", "/visit"],
    ["Contact", "/contact"],
    ["Productores", "/miel"],
  ];

  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <button className="brand-button" onClick={() => goTo("/")}>
          Benditos
        </button>

        <nav className="nav-desktop">
          {links.map(([label, path]) => (
            <button
              key={path}
              className={`nav-link ${routes[path] === page ? "active" : ""}`}
              onClick={() => goTo(path)}
            >
              {label}
            </button>
          ))}
        </nav>

        <button className="mobile-menu-toggle" onClick={() => setOpen(!open)}>
          Menu
        </button>
      </div>

      {open && (
        <div className="mobile-menu-panel">
          <div className="container mobile-menu-panel-inner">
            {links.map(([label, path]) => (
              <button
                key={path}
                className={`mobile-menu-link ${
                  routes[path] === page ? "active" : ""
                }`}
                onClick={() => {
                  setOpen(false);
                  goTo(path);
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function HomePage() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActive((current) => (current + 1) % heroSlides.length),
      4500
    );

    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[active];

  return (
    <>
      <section className="hero-section">
        <div className="hero-shell">
          {heroSlides.map((item, index) => (
            <div
              key={item.title}
              className={`hero-slide ${active === index ? "active" : ""}`}
              style={{ backgroundImage: `url(${item.image})` }}
            />
          ))}

          <div className="hero-overlay" />

          <button
            className="hero-arrow hero-arrow-left"
            onClick={() =>
              setActive((active - 1 + heroSlides.length) % heroSlides.length)
            }
          >
            ‹
          </button>

          <button
            className="hero-arrow hero-arrow-right"
            onClick={() => setActive((active + 1) % heroSlides.length)}
          >
            ›
          </button>

          <div className="hero-content">
            <div className="hero-main">
              <p className="eyebrow eyebrow-light">{slide.label}</p>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-copy">{slide.copy}</p>

              <div className="button-row">
                <button className="btn btn-primary" onClick={() => goTo("/menu")}>
                  View Menu
                </button>
                <button
                  className="btn btn-ghost-light"
                  onClick={() => goTo("/artisanal-mexican-honey")}
                >
                  Benditos Miel
                </button>
              </div>
            </div>

            <div className="hero-controls">
              <span>{slide.tag}</span>
              <div className="hero-dots">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${active === index ? "active" : ""}`}
                    onClick={() => setActive(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-card">
          <div>
            <p className="eyebrow">About us</p>
            <h2 className="section-title">
              Rooted in Mexico. Built for London.
            </h2>
          </div>

          <div className="copy-stack">
            <p className="lead-copy">
              Benditos brings together Latin street food and Mexican honey
              through fire, citrus, smoke and golden sweetness.
            </p>

            <p>
              Born from friendship and a shared love of Mexican history, culture
              and food, Benditos is a Mexican-rooted kitchen shaped by wider
              Latin American influence.
            </p>

            <p>
              The honey idea started separately: a celebration of Mexican honey,
              origin, aroma, flavour and craft. Now it lives inside Benditos as
              Benditos Miel.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container gold-panel">
          <div>
            <p className="eyebrow eyebrow-light">Benditos Miel</p>
            <h2 className="section-title light-title">
              Golden heat. Wild sweetness.
            </h2>
          </div>

          <div className="copy-stack light-copy">
            <p>
              Mexican honey, hot honey and bold pantry goods — built for tacos,
              cocktails, kitchens, markets and good times.
            </p>

            <button
              className="btn btn-light"
              onClick={() => goTo("/artisanal-mexican-honey")}
            >
              Explore Mexican Honey
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

function MenuPage() {
  return (
    <section className="page">
      <div className="container">
        <div className="page-hero page-hero-menu">
          <div className="page-hero-overlay" />
          <div className="page-hero-content">
            <p className="eyebrow eyebrow-light">Food menu</p>
            <h1 className="page-hero-title">Tacos. Birria. Ceviche.</h1>
            <p className="page-hero-copy">
              A tight Latin street food menu built around fire, citrus, salsas,
              slow cooking and cold drinks.
            </p>
          </div>
        </div>

        <div className="menu-grid">
          {menuSections.map((section) => (
            <article className="menu-card" key={section.title}>
              <div className="menu-card-header">
                <h3>{section.title}</h3>
                <p>{section.note}</p>
              </div>

              <div className="menu-items">
                {section.items.map((item) => (
                  <div className="menu-item" key={item.name}>
                    <div className="menu-item-top">
                      <h4>{item.name}</h4>
                      <span>{item.price}</span>
                    </div>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MelodisaSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="melodisa-product-panel">
          <div className="melodisa-image-wrap">
          
      
          <img

src="https://www.dropbox.com/scl/fi/j7wv3g1yflmnbady3p7c8/Screenshot-2026-05-20-at-09.32.04.png?rlkey=ay0f700qfqh719785sju3tzju&st=32xmu4z7&raw=1"

alt="Melodisa Hidromiel bottle"

className="melodisa-image"

/>
          </div>

          <div className="melodisa-product-copy">
            <p className="eyebrow eyebrow-light">Melodisa Hidromiel</p>

            <h2 className="melodisa-title">
              It's not Wine. It's not Pulque. This is hidromiel.
            </h2>

            <p>
              <strong>
                Melodisa is a fermented honey drink with Mexican soul.
              </strong>{" "}
              Light, bright, naturally different and full of character.
            </p>

            <p>
              Made for curious drinkers, taco nights, tastings, markets and
              sunny afternoons.
            </p>

            <div className="melodisa-tags">
              <span>Hidromiel</span>
              <span>Fermented honey</span>
              <span>Mexican drink</span>
              <span>Tastings</span>
            </div>

            <a href="mailto:hola@benditos.co.uk" className="btn btn-light">
              Enquire about Melodisa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HoneyPage() {
  return (
    <section className="page">
      <div className="container">
        <div className="page-hero page-hero-miel">
          <div className="page-hero-overlay" />
          <div className="page-hero-content">
            <p className="eyebrow eyebrow-light">Benditos Miel</p>
            <h1 className="page-hero-title">
              Golden origins. Miel & sabores.
            </h1>
            <p className="page-hero-copy">
              Mexican honey, hot honey and bold pantry goods — built for tacos,
              cocktails, kitchens, markets and good times.
            </p>
          </div>
        </div>

        <div className="split-card">
          <div>
            <p className="eyebrow">Rooted in nature</p>
            <h2 className="section-title">Miel with body, origin and soul.</h2>
          </div>

          <div className="copy-stack">
            <p className="lead-copy">
              Benditos Miel comes from a love of Mexico’s indigenous culture —
              the land, the rituals, the food, the colour and the deep respect
              for nature.
            </p>

            <p>
              It is also rooted in apiculture: the craft of the hive, the work
              of the bees and the beauty of honey in its most natural form.
            </p>

            <p>
              Golden, floral, earthy and full of body — our honey is artisanal,
              natural and full of character. No nasties, no shortcuts, just the
              best of the hive.
            </p>
          </div>
        </div>
      </div>

      <MelodisaSection />

      <div className="container">
        <div className="card-grid">
          {honeyCards.map((card) => (
            <article className="feature-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>

        <div className="contact-strip honey-contact-strip">
          <div>
            <p className="eyebrow">Honey enquiries</p>
            <h2 className="section-title">For chefs, makers and retailers.</h2>
            <p>
              For Mexican honey, hot honey, glazes, pantry goods, tastings, chef
              samples, wholesale or retail enquiries, get in touch.
            </p>
          </div>

          <a href="mailto:hola@benditos.co.uk" className="btn btn-primary">
            Contact Benditos Miel
          </a>
        </div>
      </div>
    </section>
  );
}

function ProductoresPage() {
  return (
    <section className="page">
      <div className="container">
        <div className="page-hero page-hero-spanish">
          <div className="page-hero-overlay" />
          <div className="page-hero-content">
            <p className="eyebrow eyebrow-light">Productores</p>
            <h1 className="page-hero-title">De México a Londres.</h1>
            <p className="page-hero-copy">
              Buscamos colaborar con apicultores, cooperativas y productores
              mexicanos que trabajan con respeto por la colmena, la tierra y el
              origen.
            </p>
          </div>
        </div>

        <div className="orange-panel">
          <div>
            <p className="eyebrow eyebrow-light">Hablemos</p>
            <h2 className="section-title light-title">
              Miel mexicana con historia, origen y carácter.
            </h2>
          </div>

          <div className="copy-stack light-copy">
            <p>
              Benditos Miel busca presentar en Londres miel mexicana honesta,
              artesanal y gastronómica.
            </p>

            <p>
              Si eres productor, apicultor, cooperativa o proyecto mexicano de
              miel, escríbenos para explorar una colaboración.
            </p>

            <TagList items={producerTags} />

            <a href="mailto:hello@benditosldn.com" className="btn btn-light">
              hello@benditosldn.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisitPage() {
  return (
    <section className="page">
      <div className="container">
        <div className="page-hero page-hero-visit">
          <div className="page-hero-overlay" />
          <div className="page-hero-content">
            <p className="eyebrow eyebrow-light">Visit</p>
            <h1 className="page-hero-title">Markets. Pop-ups. Future home.</h1>
            <p className="page-hero-copy">
              Benditos is being built for London food markets, collaborations,
              events, tastings and a future neighbourhood taqueria.
            </p>
          </div>
        </div>

        <div className="visit-grid">
          <article className="visit-card">
            <h3>Pop-ups</h3>
            <p>Collaborations, market dates and special events coming soon.</p>
          </article>

          <article className="visit-card">
            <h3>Tastings</h3>
            <p>Honey tastings, hot honey pairings and Melodisa previews.</p>
          </article>

          <article className="visit-card">
            <h3>Follow</h3>
            <p>
              Follow the launch on Instagram for drops, menus and locations.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="page">
      <div className="container">
        <div className="contact-panel">
          <div>
            <p className="eyebrow eyebrow-light">Contact</p>
            <h1 className="contact-title">Let’s talk tacos, honey and good times.</h1>
            <p>
              For markets, pop-ups, restaurant enquiries, honey samples,
              Melodisa, collaborations or producer conversations, get in touch.
            </p>
          </div>

          <div className="contact-card">
            <div className="contact-item">
              <strong>Email</strong>
              <a href="mailto:hello@benditosldn.com">hello@benditosldn.com</a>
            </div>

            <div className="contact-item">
              <strong>Instagram</strong>
              <span>@benditosldn</span>
            </div>

            <div className="contact-item">
              <strong>Location</strong>
              <span>London</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AppContent({ page }) {
  return useMemo(() => {
    switch (page) {
      case "menu":
        return <MenuPage />;
      case "honey":
        return <HoneyPage />;
      case "productores":
        return <ProductoresPage />;
      case "visit":
        return <VisitPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  }, [page]);
}

export default function App() {
  const [page, setPage] = useState(getPageFromPath());

  useEffect(() => {
    const onChange = () => setPage(getPageFromPath());

    window.addEventListener("popstate", onChange);
    return () => window.removeEventListener("popstate", onChange);
  }, []);

  return (
    <main className="site-shell">
      <Header page={page} />
      <AppContent page={page} />

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>Benditos</p>
          <p>Latin street food · Mexican honey · Hidromiel · London</p>
        </div>
      </footer>
    </main>
  );
}