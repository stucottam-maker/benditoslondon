import { useEffect, useState } from 'react';

const pageRoutes = {
  '/': 'home',
  '/menu': 'menu',
  '/artisanal-mexican-honey': 'miel',
  '/miel': 'miel',
  '/visit': 'visit',
  '/contact': 'contact',
  '/es': 'es',
};

const routePaths = {
  home: '/',
  menu: '/menu',
  miel: '/artisanal-mexican-honey',
  visit: '/visit',
  contact: '/contact',
  es: '/es',
};

function getPageFromPath() {
  return pageRoutes[window.location.pathname] || 'home';
}

const heroSlides = [
  {
    label: 'Birria',
    image:
      'https://www.dropbox.com/scl/fi/h2fvqq9qoxkw2fglqcxig/a_digital_photograph_showcases_two_beef_birria_tac.png?rlkey=160t4r9gz3r2nwq6h1ugnn8yh&st=gayadk32&raw=1',
  },
  {
    label: 'Fish Taco',
    image:
      'https://www.dropbox.com/scl/fi/u8xau043f7fqofxqhjkz9/benditos_taco_cream_watermark_fresh.png?rlkey=kkf1vy0kw8vp1gyywbkbjq2fk&st=fzwc4rhm&raw=1',
  },
  {
    label: 'Tuna Tostada',
    image:
      'https://www.dropbox.com/scl/fi/h2936480f05rtdn1sirvo/tuna_tostada_cream_watermark_v2.png?rlkey=oj3ccj6xdfs0zhrak542xanar&st=lc4ojexd&raw=1',
  },
  {
    label: 'Ceviche',
    image:
      'https://www.dropbox.com/scl/fi/ga1m334fs5bjee8ewka43/pexels-nano-erdozain-120534369-28448397.jpg?rlkey=31nxg80db5rf7hlz29u39v33a&st=9oi9xb4s&raw=1',
  },
];

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'menu', label: 'Menu' },
  { id: 'miel', label: 'Artisanal Mexican Honey' },
  { id: 'visit', label: 'Visit' },
  { id: 'contact', label: 'Contact' },
  { id: 'es', label: 'ES' },
];

const approachCards = [
  {
    title: 'Fire',
    text: 'Char, smoke, heat and grill-led cooking.',
  },
  {
    title: 'Citrus',
    text: 'Lime, sharpness, brightness and lift.',
  },
  {
    title: 'Earth',
    text: 'Corn, slow cooking, roots and richness.',
  },
  {
    title: 'Honey',
    text: 'Golden Mexican sweetness for glazes, drinks and pantry goods.',
  },
];

const mielCards = [
  {
    title: 'Raw Mexican Honey',
    text: 'Artesanal honey selected for flavour, origin, aroma and natural character.',
  },
  {
    title: 'Hot Honey',
    text: 'Mexican honey with chilli heat, built for tacos, fried food, cheese and marinades.',
  },
  {
    title: 'Glazes & Marinades',
    text: 'Honey-led flavour for chicken, pork belly, squash, ribs, vegetables and grill cooking.',
  },
  {
    title: 'Drinks & Syrups',
    text: 'Honey for margaritas, palomas, agua frescas, highballs and future honey ferments.',
  },
  {
    title: 'Pantry Goods',
    text: 'Salsa macha, sauces, honey caramel, small-batch drops and future gift boxes.',
  },
  {
    title: 'Tastings & Events',
    text: 'Honey flights, taco pairings, hot honey tastings, markets and collaborations.',
  },
];

const spanishCards = [
  {
    title: 'Miel Cruda',
    text: 'Miel artesanal, natural y llena de carácter, seleccionada por su origen, aroma y sabor.',
  },
  {
    title: 'Miel Picante',
    text: 'Miel mexicana con chile, creada para tacos, pollo, quesos, marinados y cocina con fuego.',
  },
  {
    title: 'Glaseados y Marinados',
    text: 'Dulzor, humo, acidez y picante para carnes, verduras, salsas y cocina de parrilla.',
  },
  {
    title: 'Bebidas y Cocteles',
    text: 'Miel para margaritas, palomas, aguas frescas, jarabes y futuras fermentaciones.',
  },
  {
    title: 'Despensa Mexicana',
    text: 'Salsas, salsa macha, caramelos de miel, productos de temporada y futuras cajas de regalo.',
  },
  {
    title: 'Catas y Experiencias',
    text: 'Catas de miel, maridajes, eventos, mercados, colaboraciones y experiencias con sabor.',
  },
];

const wholesaleTags = [
  'Restaurants',
  'Cafés',
  'Bakeries',
  'Cocktail bars',
  'Delis',
  'Food halls',
  'Independent retailers',
];

const spanishWholesaleTags = [
  'Restaurantes',
  'Cafeterías',
  'Panaderías',
  'Coctelerías',
  'Delis',
  'Mercados gastronómicos',
  'Tiendas independientes',
];

const visitInfo = [
  { label: 'Launching', value: 'London — coming soon' },
  { label: 'Best for', value: 'Walk-ins, tacos, drinks, all-day bites' },
  { label: 'Follow', value: '@benditosldn', isLink: true },
];

const menuSections = [
  {
    title: 'For the Table / Antojitos',
    items: [
      { name: 'Guacamole & Totopos', price: '8', description: 'Fresh guacamole, crisp tortilla chips' },
      { name: 'Pico de Gallo & Totopos', price: '6', description: 'Bright tomato salsa, tortilla chips' },
      { name: 'Yucatán Sikil Pak & Totopos', price: '7', description: 'Roasted pumpkin seed dip, tortilla chips' },
      { name: 'Esquites', price: '6', description: 'Mexican street-style corn, lime, chilli' },
      { name: 'Frijoles Refritos & Totopos', price: '6', description: 'Refried beans, tortilla chips' },
    ],
  },
  {
    title: 'House Salsas',
    items: [
      { name: 'Verde', price: '2', description: 'Fresh, bright, herb-led heat' },
      { name: 'Roja', price: '2', description: 'Smoky red chilli salsa' },
      { name: 'Mango Habanero', price: '2', description: 'Sweet fruit, sharp heat' },
      { name: 'Benditos Hot Sauce', price: '2', description: 'For those who love the salsa que pica' },
      { name: 'Salsa Tasting Platter', price: '7', description: 'All four house salsas with totopos' },
    ],
  },
  {
    title: 'Tacos',
    note: '2 tacos per portion',
    items: [
      { name: 'Cochinita Pibil', price: '10', description: 'Slow-cooked pork, onion, coriander' },
      { name: 'Birria', price: '11', description: 'Slow-cooked beef, served with its broth, coriander' },
      { name: 'Baja Fish', price: '10', description: 'Crispy fish, honey-lime slaw, morita mayo' },
      {
        name: 'Chipotle Honey Chicken',
        price: '10',
        description: 'Charred chicken, chipotle, Mexican honey glaze, coriander',
      },
      {
        name: 'Honey-Glazed Pork Belly',
        price: '11',
        description: 'Crisp pork belly, chilli honey, pickled onion',
      },
      { name: 'Taco del Día', price: 'MP', description: 'Ask for today’s special' },
    ],
  },
  {
    title: 'Quesadillas',
    items: [
      { name: 'Build Your Own Quesadilla', price: '11', description: 'Choose any taco filling, Mexican cheese' },
      {
        name: 'The Sin Queso',
        price: '10',
        description: 'Grilled corn, roasted red pepper, caramelised onion, white bean purée',
      },
      { name: 'Quesabirria', price: '12', description: 'Slow-cooked beef, Mexican cheese' },
      {
        name: 'Miso-Honey Squash',
        price: '11',
        description: 'Roasted squash, miso honey, corn, onion, herbs',
      },
    ],
  },
  {
    title: 'From Down South',
    items: [
      { name: 'Choripán', price: '11', description: 'Grilled sausage roll, chimichurri' },
      { name: 'Venezuelan Cachapa', price: '12', description: 'Sweetcorn pancake, Latin soft cheese' },
      { name: 'Tequeños', price: '8', description: 'Cheese-filled sticks, guasacaca salsa' },
    ],
  },
  {
    title: 'From the Cold Room',
    items: [
      { name: 'Classic Ceviche', price: '12', description: 'White fish, lime, onion, chilli' },
      { name: 'King Prawn Aguachile Verde', price: '14', description: 'King prawns, green chilli, lime, cucumber' },
      { name: 'Ceviche Tostada', price: '11', description: 'Crisp tostada, fresh ceviche, bright herbs' },
      { name: 'Tuna Tostada', price: '12', description: 'Tuna, citrus, chilli, tostada' },
    ],
  },
  {
    title: 'Desserts',
    items: [
      { name: 'Tres Leches Cake', price: '8', description: 'Classic milk-soaked sponge' },
      { name: 'Churros', price: '7', description: 'Cinnamon sugar, Mexican honey caramel' },
    ],
  },
  {
    title: 'Cocktails',
    items: [
      { name: 'Margarita', price: '11', description: 'Classic / Tommy’s / Chilli' },
      { name: 'Honey Picante Margarita', price: '12', description: 'Tequila, lime, chilli, Mexican honey' },
      { name: 'Paloma', price: '11', description: 'Tequila, grapefruit, lime, soda' },
      { name: 'Honey Paloma', price: '12', description: 'Tequila, grapefruit, lime, Mexican honey' },
      { name: 'Pineapple & Miso Highball', price: '12', description: 'Charred pineapple tequila, miso, ginger' },
      { name: 'Michelada', price: '9', description: 'Beer, lime, spice' },
    ],
  },
  {
    title: 'Fresh Juices',
    items: [
      { name: 'Pineapple & Lime', price: '5', description: '' },
      { name: 'Watermelon Agua Fresca', price: '5', description: '' },
      { name: 'Hibiscus Iced Tea', price: '5', description: '' },
      { name: 'Mango & Passionfruit', price: '5', description: '' },
    ],
  },
];

export default function App() {
  const [page, setPage] = useState(getPageFromPath);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handlePopState() {
      setPage(getPageFromPath());
      setMobileMenuOpen(false);
    }

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  function handleNavigate(target) {
    const nextPath = routePaths[target] || '/';

    setPage(target);
    setMobileMenuOpen(false);
    window.history.pushState({}, '', nextPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <button className="brand-button" onClick={() => handleNavigate('home')}>
            BENDITOS
          </button>

          <nav className="nav-desktop" aria-label="Primary navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={page === item.id ? 'nav-link active' : 'nav-link'}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            Menu
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu-panel">
            <div className="container mobile-menu-panel-inner">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={page === item.id ? 'mobile-menu-link active' : 'mobile-menu-link'}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        {page === 'home' && <HomePage setPage={handleNavigate} />}
        {page === 'menu' && <MenuPage />}
        {page === 'miel' && <MielPage />}
        {page === 'visit' && <VisitPage />}
        {page === 'contact' && <ContactPage />}
        {page === 'es' && <SpanishPage />}
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© Benditos</p>
          <p>Latin street food · Benditos Miel · Mexican pantry goods</p>
        </div>
      </footer>
    </div>
  );
}

function HomePage({ setPage }) {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [currentApproachSlide, setCurrentApproachSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  function goHeroPrev() {
    setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }

  function goHeroNext() {
    setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
  }

  function goHeroTo(index) {
    setCurrentHeroSlide(index);
  }

  function goApproachPrev() {
    setCurrentApproachSlide((prev) => (prev - 1 + approachCards.length) % approachCards.length);
  }

  function goApproachNext() {
    setCurrentApproachSlide((prev) => (prev + 1) % approachCards.length);
  }

  function goApproachTo(index) {
    setCurrentApproachSlide(index);
  }

  return (
    <>
      <section className="hero-slider-section">
        <div className="hero-slider-shell">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.label}
              className={index === currentHeroSlide ? 'hero-slide active' : 'hero-slide'}
              style={{ backgroundImage: `url("${slide.image}")` }}
              aria-hidden={index !== currentHeroSlide}
            >
              <div className="hero-overlay" />
            </div>
          ))}

          <div className="hero-content">
            <div className="hero-copy-group">
              <p className="eyebrow hero-eyebrow">Latin Street Food · Benditos Miel</p>
              <h1 className="hero-title hero-title-large">
                Big flavours.
                <br />
                Good times.
              </h1>
              <p className="hero-copy hero-copy-light">
                Bold Latin street food, cold drinks, Mexican honey and pantry goods — from tacos
                and birria to hot honey, glazes and small-batch flavour drops.
              </p>
            </div>

            <div className="hero-bottom">
              <div className="button-row hero-button-row">
                <button onClick={() => setPage('menu')} className="btn btn-primary">
                  View Menu
                </button>

                <button onClick={() => setPage('miel')} className="btn btn-secondary btn-secondary-light">
                  Benditos Miel
                </button>

                <button onClick={() => setPage('visit')} className="btn btn-secondary btn-secondary-light">
                  Follow the Launch
                </button>
              </div>

              <div className="hero-slider-controls">
                <div className="hero-slide-tag">{heroSlides[currentHeroSlide].label}</div>

                <div className="hero-dots" aria-label="Hero slides">
                  {heroSlides.map((slide, index) => (
                    <button
                      key={slide.label}
                      className={index === currentHeroSlide ? 'hero-dot active' : 'hero-dot'}
                      onClick={() => goHeroTo(index)}
                      aria-label={`Show ${slide.label}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button className="hero-arrow hero-arrow-left" onClick={goHeroPrev} aria-label="Previous slide">
            ‹
          </button>
          <button className="hero-arrow hero-arrow-right" onClick={goHeroNext} aria-label="Next slide">
            ›
          </button>
        </div>
      </section>

      <section className="container about-us-section">
        <div className="about-us-panel">
          <div className="about-us-grid">
            <div className="about-us-lead">
              <p className="eyebrow">About Us</p>
              <h2 className="section-title">Rooted in Mexico. Built for London.</h2>
            </div>

            <div className="about-us-copy">
              <p className="about-us-strap">
                Benditos brings together Latin street food and Mexican honey through fire, citrus,
                smoke and golden sweetness.
              </p>

              <p>
                Born from friendship and a shared love of Mexican history, culture and food,
                Benditos is a Mexican-rooted kitchen shaped by wider Latin American influence.
                It began with tacos, birria, ceviche, salsas and good times around the table.
              </p>

              <p>
                The honey idea started separately: a celebration of Mexican honey, origin, aroma,
                flavour and craft. Now it lives inside Benditos as Benditos Miel — our golden thread
                running through glazes, drinks, pantry goods, tastings and future retail drops.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container miel-feature-section">
        <div className="miel-feature-panel">
          <div>
            <p className="eyebrow eyebrow-light">Benditos Miel</p>
            <h2 className="section-title miel-feature-title">Golden origins. Miel & sabores.</h2>
          </div>

          <div className="miel-feature-copy">
            <p>
              Our Mexican honey story gives Benditos a deeper ingredient identity — raw honey, hot
              honey, glazes, marinades, drinks, sauces and pantry goods with flavour, place and purpose.
            </p>

            <button onClick={() => setPage('miel')} className="btn btn-light">
              Explore Benditos Miel
            </button>
          </div>
        </div>
      </section>

      <section className="container approach-section">
        <div className="approach-grid">
          <div className="approach-lead">
            <p className="eyebrow">Our Approach</p>
            <h2 className="section-title">Come hungry. Leave happy.</h2>
          </div>

          <div className="approach-content">
            <div className="approach-cards-desktop">
              {approachCards.map((item) => (
                <div key={item.title} className="approach-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            <div className="approach-slider-mobile">
              <button
                className="approach-arrow approach-arrow-left"
                onClick={goApproachPrev}
                aria-label="Previous approach card"
              >
                ‹
              </button>

              <div className="approach-card approach-card-mobile">
                <h3>{approachCards[currentApproachSlide].title}</h3>
                <p>{approachCards[currentApproachSlide].text}</p>
              </div>

              <button
                className="approach-arrow approach-arrow-right"
                onClick={goApproachNext}
                aria-label="Next approach card"
              >
                ›
              </button>
            </div>

            <div className="approach-dots" aria-label="Approach cards">
              {approachCards.map((item, index) => (
                <button
                  key={item.title}
                  className={index === currentApproachSlide ? 'approach-dot active' : 'approach-dot'}
                  onClick={() => goApproachTo(index)}
                  aria-label={`Show ${item.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container instagram-section">
        <div className="instagram-panel">
          <div className="instagram-content">
            <p className="eyebrow">Instagram</p>
            <h2 className="section-title">Follow Benditos</h2>
            <p className="instagram-copy">
              Launch updates, behind the scenes, tacos, salsas, honey drops, markets and what’s
              coming next.
            </p>
          </div>

          <a
            href="https://www.instagram.com/benditosldn/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary instagram-button"
          >
            @benditosldn
          </a>
        </div>
      </section>
    </>
  );
}

function MenuPage() {
  return (
    <section className="container page-section menu-page">
      <section className="menu-hero-banner">
        <div className="menu-hero-overlay" />

        <div className="menu-hero-content">
          <p className="eyebrow menu-hero-eyebrow">Menu</p>
          <h2 className="section-title menu-hero-title">What we’re serving.</h2>
          <p className="menu-hero-copy">
            Bold, fresh, fire-led food built for sharing, grabbing and coming back for — with Mexican
            honey appearing in glazes, drinks and specials.
          </p>
        </div>
      </section>

      <div className="menu-sections">
        {menuSections.map((section) => (
          <section key={section.title} className="menu-section-card">
            <div className="menu-section-header">
              <h3 className="menu-section-title">{section.title}</h3>
              {section.note ? <p className="menu-section-note">{section.note}</p> : null}
            </div>

            <div className="menu-items">
              {section.items.map((item) => (
                <div key={item.name} className="menu-item">
                  <div className="menu-item-top">
                    <h4 className="menu-item-name">{item.name}</h4>
                    <span className="menu-item-price">{item.price}</span>
                  </div>
                  {item.description ? (
                    <p className="menu-item-description">{item.description}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

function MielPage() {
  return (
    <section className="container page-section miel-page">
      <section className="miel-hero-banner">
        <div className="miel-hero-overlay" />

        <div className="miel-hero-content">
          <p className="eyebrow miel-hero-eyebrow">Benditos Miel</p>
          <h2 className="section-title miel-hero-title">Golden origins. Miel & sabores.</h2>
          <p className="miel-hero-copy">
            Mexican honey, hot honey and bold pantry goods — built for tacos, cocktails, kitchens,
            markets and good times.
          </p>
        </div>
      </section>

      <div className="miel-intro-panel">
        <div>
          <p className="eyebrow">The idea</p>
          <h2 className="section-title">Not a separate brand. A Benditos flavour story.</h2>
        </div>

        <div className="miel-intro-copy">
          <p>
            The original honey idea began with a simple thought: Mexican honey deserves to be treated
            as more than a sweetener. It has origin, aroma, colour, season, landscape and story.
          </p>

          <p>
            Now that idea lives inside Benditos as Benditos Miel — not as a separate company, but as
            a golden thread running through our food, drinks, glazes, pantry goods, tastings and
            future retail drops.
          </p>
        </div>
      </div>

      <div className="miel-card-grid">
        {mielCards.map((item) => (
          <div key={item.title} className="miel-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <div className="miel-wholesale-panel">
        <div>
          <p className="eyebrow eyebrow-light">Wholesale</p>
          <h2 className="section-title miel-wholesale-title">For chefs, makers and retailers.</h2>
        </div>

        <div className="miel-wholesale-copy">
          <p>
            Benditos Miel is being developed for restaurants, cafés, bakeries, cocktail bars, delis,
            food halls and independent retailers looking for Mexican honey, hot honey, glazes and
            pantry goods with stronger origin, character and flavour.
          </p>

          <div className="miel-wholesale-tags">
            {wholesaleTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VisitPage() {
  return (
    <section className="container page-section visit-page">
      <section className="visit-hero-banner">
        <div className="visit-hero-overlay" />

        <div className="visit-hero-content">
          <p className="eyebrow visit-hero-eyebrow">Visit</p>
          <h2 className="section-title visit-hero-title">Catch us when we land.</h2>
          <p className="visit-hero-copy">
            Benditos is built for tacos, cold drinks, all-day bites, honey tastings and dropping in
            whenever the craving hits.
          </p>

          <a
            href="https://www.instagram.com/benditosldn/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary visit-hero-button"
          >
            Follow @benditosldn
          </a>
        </div>
      </section>

      <div className="visit-info-grid">
        {visitInfo.map((item) => (
          <div key={item.label} className="visit-card">
            <p className="eyebrow">{item.label}</p>
            {item.isLink ? (
              <h3>
                <a
                  href="https://www.instagram.com/benditosldn/"
                  target="_blank"
                  rel="noreferrer"
                  className="visit-link"
                >
                  {item.value}
                </a>
              </h3>
            ) : (
              <h3>{item.value}</h3>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="container page-section">
      <div className="contact-block">
        <div>
          <p className="eyebrow eyebrow-light">Contact</p>
          <h2 className="contact-title">London — coming soon.</h2>
          <p className="contact-copy">
            Follow along, watch the food and be first to know when Benditos lands in London.
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-item">
            <strong>Instagram</strong>
            <a
              href="https://www.instagram.com/benditosldn/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              @benditosldn
            </a>
          </div>

          <div className="contact-item">
            <strong>Email</strong>
            <span>hello@benditosldn.com</span>
          </div>

          <div className="contact-item">
            <strong>Location</strong>
            <span>London, UK</span>
          </div>

          <div className="contact-item">
            <strong>Enquiries</strong>
            <span>Markets, events, honey, wholesale and collaborations</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpanishPage() {
  return (
    <section className="container page-section spanish-page">
      <section className="spanish-hero-banner">
        <div className="spanish-hero-overlay" />

        <div className="spanish-hero-content">
          <p className="eyebrow spanish-hero-eyebrow">Benditos Miel</p>
          <h2 className="section-title spanish-hero-title">
            Miel mexicana. Sabores vivos. Raíces profundas.
          </h2>
          <p className="spanish-hero-copy">
            Nacido del amor por la cultura mexicana, la apicultura y los sabores naturales,
            Benditos Miel celebra la miel artesanal de México como algo más que un endulzante:
            como origen, aroma, territorio y tradición.
          </p>
        </div>
      </section>

      <div className="spanish-intro-panel">
        <div>
          <p className="eyebrow">Nuestra historia</p>
          <h2 className="section-title">Un hilo dorado de México a Londres.</h2>
        </div>

        <div className="spanish-intro-copy">
          <p>
            Benditos Miel nace de un amor profundo por México: su tierra, sus rituales,
            sus mercados, sus colores y su respeto por la naturaleza.
          </p>

          <p>
            También nace de la apicultura: el trabajo de las abejas, el cuidado de la colmena
            y la belleza de la miel en su forma más natural.
          </p>

          <p>
            Hoy esta historia vive dentro de Benditos, como un hilo dorado que conecta nuestra
            comida, nuestras bebidas, nuestras salsas y nuestros futuros productos de despensa.
          </p>
        </div>
      </div>

      <div className="spanish-statement-panel">
        <p className="eyebrow eyebrow-light">Miel y sabores</p>
        <h2 className="section-title spanish-statement-title">
          No es solo miel. Es una forma de contar el sabor de México.
        </h2>
      </div>

      <div className="spanish-card-grid">
        {spanishCards.map((item) => (
          <div key={item.title} className="spanish-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <div className="spanish-wholesale-panel">
        <div>
          <p className="eyebrow eyebrow-light">Para profesionales</p>
          <h2 className="section-title spanish-wholesale-title">
            Para chefs, creadores y tiendas.
          </h2>
        </div>

        <div className="spanish-wholesale-copy">
          <p>
            Benditos Miel se está desarrollando para restaurantes, cafeterías, panaderías,
            coctelerías, delis, mercados gastronómicos y tiendas independientes que buscan
            miel mexicana, miel picante, glaseados y productos de despensa con origen,
            carácter y sabor.
          </p>

          <div className="spanish-wholesale-tags">
            {spanishWholesaleTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="spanish-closing-panel">
        <h2 className="section-title spanish-closing-title">De México a Londres.</h2>
        <p>
          Benditos Miel lleva consigo el trabajo de las abejas, la riqueza de la tierra
          y el sabor de una cultura viva.
        </p>
      </div>
    </section>
  );
}