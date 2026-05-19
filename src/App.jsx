import { useEffect, useState } from 'react';

const pageRoutes = {
  '/': 'home',
  '/menu': 'menu',
  '/artisanal-mexican-honey': 'miel',
  '/miel': 'miel',
  '/visit': 'visit',
  '/contact': 'contact',
  '/productores': 'es',
  '/es': 'es',
};

const routePaths = {
  home: '/',
  menu: '/menu',
  miel: '/artisanal-mexican-honey',
  visit: '/visit',
  contact: '/contact',
  es: '/productores',
};

function getPageFromPath() {
  return pageRoutes[window.location.pathname] || 'home';
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'menu', label: 'Menu' },
  { id: 'miel', label: 'Mexican Honey' },
  { id: 'visit', label: 'Visit' },
  { id: 'contact', label: 'Contact' },
  { id: 'es', label: 'Productores' },
];

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

const approachCards = [
  {
    title: 'Fire',
    text: 'Char, smoke, heat and grill-led cooking.',
  },
  {
    title: 'Citrus',
    text: 'Lime, brightness, acidity and lift.',
  },
  {
    title: 'Earth',
    text: 'Corn, slow cooking, roots, depth and richness.',
  },
  {
    title: 'Honey',
    text: 'Mexican sweetness for glazes, drinks and pantry goods.',
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
    text: 'Honey-led flavour for chicken, pork belly, squash, vegetables and grill cooking.',
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

const producerCards = [
  {
    title: 'Miel Artesanal',
    text: 'Miel natural mexicana con carácter, origen, aroma y trazabilidad.',
  },
  {
    title: 'Productores y Apicultores',
    text: 'Buscamos colaborar con personas, familias y proyectos que respetan la colmena, la tierra y el proceso.',
  },
  {
    title: 'Origen y Territorio',
    text: 'Cada miel cuenta una historia distinta: flores, clima, región, temporada, paisaje y trabajo humano.',
  },
  {
    title: 'Mercado Gastronómico',
    text: 'Queremos conectar la miel mexicana con chefs, restaurantes, cafeterías, tiendas y experiencias en Londres.',
  },
  {
    title: 'Productos con Valor',
    text: 'Miel cruda, miel picante, glaseados, salsas, bebidas y productos de despensa con identidad.',
  },
  {
    title: 'Relaciones a Largo Plazo',
    text: 'Queremos construir colaboraciones honestas, cuidadas, sostenibles y con respeto por el origen.',
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

const producerTags = [
  'Productores',
  'Apicultores',
  'Cooperativas',
  'Proyectos familiares',
  'Miel artesanal',
  'Origen mexicano',
  'Colaboraciones',
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

    return () => window.removeEventListener('popstate', handlePopState);
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
      <section className="hero-section">
        <div className="hero-shell">
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
            <div className="hero-main">
              <p className="eyebrow eyebrow-light">Latin street food · Benditos Miel</p>

              <h1 className="hero-title">
                Big flavours.
                <br />
                Good times.
              </h1>

              <p className="hero-copy">
                Bold Latin street food, cold drinks, Mexican honey and pantry goods — from tacos
                and birria to hot honey, glazes and small-batch flavour drops.
              </p>
            </div>

            <div className="hero-actions">
              <div className="button-row hero-button-row">
                <button onClick={() => setPage('menu')} className="btn btn-primary">
                  View Menu
                </button>

                <button onClick={() => setPage('miel')} className="btn btn-ghost-light">
                  Benditos Miel
                </button>

                <button onClick={() => setPage('visit')} className="btn btn-ghost-light">
                  Follow the Launch
                </button>
              </div>

              <div className="hero-controls">
                <span>{heroSlides[currentHeroSlide].label}</span>

                <div className="hero-dots" aria-label="Hero slides">
                  {heroSlides.map((slide, index) => (
                    <button
                      key={slide.label}
                      onClick={() => goHeroTo(index)}
                      className={index === currentHeroSlide ? 'dot active' : 'dot'}
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

      <section className="container section">
        <div className="split-card">
          <div>
            <p className="eyebrow">About Us</p>
            <h2 className="section-title">Rooted in Mexico. Built for London.</h2>
          </div>

          <div className="copy-stack">
            <p className="lead-copy">
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
      </section>

      <section className="container section">
        <div className="gold-panel">
          <div>
            <p className="eyebrow eyebrow-light">Benditos Miel</p>
            <h2 className="section-title light-title">Golden origins. Miel & sabores.</h2>
          </div>

          <div className="copy-stack light-copy">
            <p>
              Our Mexican honey story gives Benditos a deeper ingredient identity — raw honey,
              hot honey, glazes, marinades, drinks, sauces and pantry goods with flavour, place
              and purpose.
            </p>

            <button onClick={() => setPage('miel')} className="btn btn-light">
              Explore Benditos Miel
            </button>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="split-card clean-card">
          <div>
            <p className="eyebrow">Our Approach</p>
            <h2 className="section-title">Come hungry. Leave happy.</h2>
          </div>

          <div className="approach-area">
            <div className="approach-grid-desktop">
              {approachCards.map((item) => (
                <div key={item.title} className="mini-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            <div className="approach-mobile">
              <button onClick={goApproachPrev} className="small-arrow" aria-label="Previous approach card">
                ‹
              </button>

              <div className="mini-card mobile-mini-card">
                <h3>{approachCards[currentApproachSlide].title}</h3>
                <p>{approachCards[currentApproachSlide].text}</p>
              </div>

              <button onClick={goApproachNext} className="small-arrow" aria-label="Next approach card">
                ›
              </button>
            </div>

            <div className="mobile-dots">
              {approachCards.map((item, index) => (
                <button
                  key={item.title}
                  onClick={() => goApproachTo(index)}
                  className={index === currentApproachSlide ? 'dot orange-dot active' : 'dot orange-dot'}
                  aria-label={`Show ${item.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <InstagramPanel />
    </>
  );
}

function MenuPage() {
  return (
    <section className="container page">
      <PageHero
        type="menu"
        eyebrow="Menu"
        title="What we’re serving."
        copy="Bold, fresh, fire-led food built for sharing, grabbing and coming back for — with Mexican honey appearing in glazes, drinks and specials."
      />

      <div className="menu-grid">
        {menuSections.map((section) => (
          <section key={section.title} className="menu-card">
            <div className="menu-card-header">
              <h3>{section.title}</h3>
              {section.note && <p>{section.note}</p>}
            </div>

            <div className="menu-items">
              {section.items.map((item) => (
                <div key={item.name} className="menu-item">
                  <div className="menu-item-top">
                    <h4>{item.name}</h4>
                    <span>{item.price}</span>
                  </div>

                  {item.description && <p>{item.description}</p>}
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
    <section className="container page">
      <PageHero
        type="miel"
        eyebrow="Benditos Miel"
        title="Golden origins. Miel & sabores."
        copy="Mexican honey, hot honey and bold pantry goods — built for tacos, cocktails, kitchens, markets and good times."
      />

      <div className="split-card">
        <div>
          <p className="eyebrow">The idea</p>
          <h2 className="section-title">Not a separate brand. A Benditos flavour story.</h2>
        </div>

        <div className="copy-stack">
          <p>
            The original honey idea began with a simple thought: Mexican honey deserves to be
            treated as more than a sweetener. It has origin, aroma, colour, season, landscape
            and story.
          </p>

          <p>
            Now that idea lives inside Benditos as Benditos Miel — not as a separate company,
            but as a golden thread running through our food, drinks, glazes, pantry goods,
            tastings and future retail drops.
          </p>
        </div>
      </div>

      <div className="card-grid">
        {mielCards.map((item) => (
          <div key={item.title} className="feature-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <div className="orange-panel">
      <div className="contact-strip honey-contact-strip">
  <div>
    <p className="eyebrow">Honey enquiries</p>
    <h2 className="section-title">Wholesale, kitchens and collaborations.</h2>
    <p>
      For Mexican honey, hot honey, glazes, pantry goods, tastings, chef samples,
      wholesale or retail enquiries, get in touch.
    </p>
  </div>

  <a
    href="mailto:hello@benditosldn.com?subject=Benditos%20Miel%20Enquiry"
    className="btn btn-primary"
  >
    Contact Benditos Miel
  </a>
</div>
        <div>
          <p className="eyebrow eyebrow-light">Wholesale</p>
          <h2 className="section-title light-title">For chefs, makers and retailers.</h2>
        </div>

        <div className="copy-stack light-copy">
          <p>
            Benditos Miel is being developed for restaurants, cafés, bakeries, cocktail bars,
            delis, food halls and independent retailers looking for Mexican honey, hot honey,
            glazes and pantry goods with stronger origin, character and flavour.
          </p>

          <TagList items={wholesaleTags} />
        </div>
      </div>
    </section>
  );
}

function SpanishPage() {
  return (
    <section className="container page spanish-page">
      <PageHero
        type="spanish"
        eyebrow="Benditos Miel"
        title="Miel mexicana. Origen, respeto y sabor."
        copy="Benditos Miel nace del amor por México, la apicultura y los productos naturales. Buscamos crear un puente entre productores mexicanos de miel artesanal y el mercado gastronómico en Londres, celebrando el origen, el trabajo de las abejas y la riqueza de cada territorio."
      />

      <div className="split-card">
        <div>
          <p className="eyebrow">Nuestra visión</p>
          <h2 className="section-title">Un puente entre México y Londres.</h2>
        </div>

        <div className="copy-stack">
          <p>
            Queremos trabajar con productores, apicultores, cooperativas y proyectos mexicanos
            que cuidan la tierra, respetan la colmena y entienden la miel como un producto vivo:
            con historia, temporada, aroma y carácter.
          </p>

          <p>
            Nuestro objetivo es llevar miel mexicana artesanal a restaurantes, cocinas, tiendas,
            cafeterías y experiencias gastronómicas en Londres, manteniendo siempre una conexión
            clara con su origen.
          </p>

          <p>
            No buscamos una miel genérica. Buscamos miel con identidad: miel que hable de su
            territorio, de sus flores, de sus abejas y de las manos que la producen.
          </p>
        </div>
      </div>

      <div className="brown-panel">
        <p className="eyebrow eyebrow-light">Más que importar miel</p>
        <h2 className="section-title light-title">Queremos contar su origen.</h2>
        <p>
          Cada miel tiene una historia distinta: la floración, el clima, la región, la colmena
          y el trabajo de quien la produce. Benditos Miel quiere llevar esas historias a chefs,
          tiendas, cafeterías y clientes que valoran productos naturales, artesanales y con carácter.
        </p>
      </div>

      <div className="card-grid">
        {producerCards.map((item) => (
          <div key={item.title} className="feature-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <div className="orange-panel">
        <div>
          <p className="eyebrow eyebrow-light">Colaboraciones</p>
          <h2 className="section-title light-title">
            Para productores, apicultores y proyectos mexicanos.
          </h2>
        </div>

        <div className="copy-stack light-copy">
          <p>
            Si produces miel artesanal en México y te interesa llevar tu producto a Londres,
            queremos conocerte.
          </p>

          <p>
            Benditos Miel busca colaborar con productores que trabajan con respeto por la naturaleza,
            la colmena y el origen. Nuestro objetivo es presentar la miel mexicana de forma cuidada,
            honesta y gastronómica.
          </p>

          <TagList items={producerTags} />
        </div>
      </div>

      <div className="contact-strip">
        <div>
          <p className="eyebrow">Hablemos</p>
          <h2 className="section-title">De México a Londres, con respeto.</h2>
          <p>
            Si eres productor, apicultor, cooperativa o proyecto mexicano de miel artesanal,
            escríbenos para explorar una colaboración.
          </p>
        </div>

        <a href="mailto:hello@benditosldn.com" className="btn btn-primary">
          hello@benditosldn.com
        </a>
      </div>
    </section>
  );
}

function VisitPage() {
  return (
    <section className="container page">
      <PageHero
        type="visit"
        eyebrow="Visit"
        title="Catch us when we land."
        copy="Benditos is built for tacos, cold drinks, all-day bites, honey tastings and dropping in whenever the craving hits."
      >
        <a
          href="https://www.instagram.com/benditosldn/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Follow @benditosldn
        </a>
      </PageHero>

      <div className="visit-grid">
        {visitInfo.map((item) => (
          <div key={item.label} className="visit-card">
            <p className="eyebrow">{item.label}</p>

            {item.isLink ? (
              <h3>
                <a href="https://www.instagram.com/benditosldn/" target="_blank" rel="noreferrer">
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
    <section className="container page">
      <div className="contact-panel">
        <div>
          <p className="eyebrow eyebrow-light">Contact</p>
          <h2 className="contact-title">London — coming soon.</h2>
          <p>
            Follow along, watch the food and be first to know when Benditos lands in London.
          </p>
        </div>

        <div className="contact-card">
          <ContactItem label="Instagram">
            <a href="https://www.instagram.com/benditosldn/" target="_blank" rel="noreferrer">
              @benditosldn
            </a>
          </ContactItem>

          <ContactItem label="Email">
            <span>hello@benditosldn.com</span>
          </ContactItem>

          <ContactItem label="Location">
            <span>London, UK</span>
          </ContactItem>

          <ContactItem label="Enquiries">
            <span>Markets, events, honey, wholesale, producers and collaborations</span>
          </ContactItem>
        </div>
      </div>
    </section>
  );
}

function PageHero({ type, eyebrow, title, copy, children }) {
  return (
    <section className={`page-hero page-hero-${type}`}>
      <div className="page-hero-overlay" />

      <div className="page-hero-content">
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1 className="page-hero-title">{title}</h1>
        <p className="page-hero-copy">{copy}</p>

        {children && <div className="page-hero-actions">{children}</div>}
      </div>
    </section>
  );
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

function InstagramPanel() {
  return (
    <section className="container section">
      <div className="instagram-panel">
        <div>
          <p className="eyebrow">Instagram</p>
          <h2 className="section-title">Follow Benditos</h2>
          <p>
            Launch updates, behind the scenes, tacos, salsas, honey drops, markets and what’s
            coming next.
          </p>
        </div>

        <a
          href="https://www.instagram.com/benditosldn/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          @benditosldn
        </a>
      </div>
    </section>
  );
}

function ContactItem({ label, children }) {
  return (
    <div className="contact-item">
      <strong>{label}</strong>
      {children}
    </div>
  );
}