import { useEffect, useState } from 'react';

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
    text: 'Big flavour, char, heat, and grill-led cooking.',
  },
  {
    title: 'Citrus',
    text: 'Fresh lime, sharpness, brightness, and lift.',
  },
  {
    title: 'Earth',
    text: 'Corn, slow-cooked depth, roots, and richness.',
  },
  {
    title: 'Water',
    text: 'Fresh juices, cold drinks, balance, and reset.',
  },
];

const visitInfo = [
  { label: 'Launching', value: 'London — coming soon' },
  { label: 'Best for', value: 'Walk-ins, tacos, drinks, all-day bites' },
  { label: 'Follow', value: '@benditosldn', isLink: true },
];

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'menu', label: 'Menu' },
  { id: 'visit', label: 'Visit' },
  { id: 'contact', label: 'Contact' },
];

export default function App() {
  const [page, setPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleNavigate(target) {
    setPage(target);
    setMobileMenuOpen(false);
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
        {page === 'home' && <HomePage setPage={setPage} />}
        {page === 'menu' && <MenuPage />}
        {page === 'visit' && <VisitPage visitInfo={visitInfo} />}
        {page === 'contact' && <ContactPage />}
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© Benditos</p>
          <p>Latin street food. Big flavours. Good times.</p>
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
              <p className="eyebrow hero-eyebrow">Latin Street Food</p>
              <h1 className="hero-title hero-title-large">
                Big flavours.
                <br />
                Good times.
              </h1>
              <p className="hero-copy hero-copy-light">
                Bold Latin American street food, cold drinks, and all-day bites worth coming back for.
              </p>
            </div>

            <div className="hero-bottom">
              <div className="button-row">
                <button onClick={() => setPage('menu')} className="btn btn-primary">
                  View Menu
                </button>
                <button
                  onClick={() => setPage('visit')}
                  className="btn btn-secondary btn-secondary-light"
                >
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
              <h2 className="section-title">Rooted in Mexico. Shaped by experience.</h2>
            </div>

            <div className="about-us-copy">
              <p>
                Born from friendship and a shared love of Mexican history, culture, and its
                extraordinarily varied cuisine, Benditos brings flavour and culture together in a
                casual, vibrant dining experience. Created by chef friends with experience spanning
                Mexico, Central America, London, Barcelona, and kitchens around the world, it brings
                together bold flavour, fresh thinking, and a wider Latin American perspective. With
                its heart in Mexico, Benditos is a place for bold food, cold drinks, and good times
                around the table.
              </p>
            </div>
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
    </>
  );
}

function MenuPage() {
  const menuSections = [
    {
      title: 'For the Table / Antojitos',
      items: [
        {
          name: 'Guacamole & Totopos',
          price: '8',
          description: 'Fresh guacamole, crisp tortilla chips',
        },
        {
          name: 'Pico de Gallo & Totopos',
          price: '6',
          description: 'Bright tomato salsa, tortilla chips',
        },
        {
          name: 'Yucatán Sikil Pak & Totopos',
          price: '7',
          description: 'Roasted pumpkin seed dip, tortilla chips',
        },
        {
          name: 'Esquites',
          price: '6',
          description: 'Mexican street-style corn, lime, chilli',
        },
        {
          name: 'Frijoles Refritos & Totopos',
          price: '6',
          description: 'Refried beans, tortilla chips',
        },
      ],
    },
    {
      title: 'House Salsas',
      items: [
        {
          name: 'Verde',
          price: '2',
          description: 'Fresh, bright, herb-led heat',
        },
        {
          name: 'Roja',
          price: '2',
          description: 'Smoky red chilli salsa',
        },
        {
          name: 'Mango Habanero',
          price: '2',
          description: 'Sweet fruit, sharp heat',
        },
        {
          name: 'Benditos Hot Sauce',
          price: '2',
          description: 'For those who love the salsa que pica',
        },
        {
          name: 'Salsa Tasting Platter',
          price: '7',
          description: 'All four house salsas with totopos',
        },
      ],
    },
    {
      title: 'Tacos',
      note: '2 tacos per portion',
      items: [
        {
          name: 'Cochinita Pibil',
          price: '10',
          description: 'Slow-cooked pork, onion, coriander',
        },
        {
          name: 'Birria',
          price: '11',
          description: 'Slow-cooked beef, served with its broth, coriander',
        },
        {
          name: 'Baja Fish',
          price: '10',
          description: 'Crispy fish, slaw, morita mayo',
        },
        {
          name: 'Chicken Tinga',
          price: '10',
          description: 'Chipotle chicken, coriander',
        },
        {
          name: 'Taco del Día',
          price: 'MP',
          description: 'Ask for today’s special',
        },
      ],
    },
    {
      title: 'Quesadillas',
      items: [
        {
          name: 'Build Your Own Quesadilla',
          price: '11',
          description: 'Choose any taco filling, Mexican cheese',
        },
        {
          name: 'The Sin Queso',
          price: '10',
          description: 'Grilled corn, roasted red pepper, caramelised onion, white bean purée',
        },
        {
          name: 'Quesabirria',
          price: '12',
          description: 'Slow-cooked beef, Mexican cheese',
        },
        {
          name: 'Confit Chorizo',
          price: '11',
          description: 'Confit chorizo, onion, cheese',
        },
      ],
    },
    {
      title: 'From Down South',
      items: [
        {
          name: 'Choripán',
          price: '11',
          description: 'Grilled sausage roll, chimichurri',
        },
        {
          name: 'Venezuelan Cachapa',
          price: '12',
          description: 'Sweetcorn pancake, Latin soft cheese',
        },
        {
          name: 'Tequeños',
          price: '8',
          description: 'Cheese-filled sticks, guasacaca salsa',
        },
      ],
    },
    {
      title: 'From the Cold Room',
      items: [
        {
          name: 'Classic Ceviche',
          price: '12',
          description: 'White fish, lime, onion, chilli',
        },
        {
          name: 'King Prawn Aguachile Verde',
          price: '14',
          description: 'King prawns, green chilli, lime, cucumber',
        },
        {
          name: 'Ceviche Tostada',
          price: '11',
          description: 'Crisp tostada, fresh ceviche, bright herbs',
        },
        {
          name: 'Tuna Tostada',
          price: '12',
          description: 'Tuna, citrus, chilli, tostada',
        },
      ],
    },
    {
      title: 'Desserts',
      items: [
        {
          name: 'Tres Leches Cake',
          price: '8',
          description: 'Classic milk-soaked sponge',
        },
        {
          name: 'Churros',
          price: '7',
          description: 'Cinnamon sugar, dulce de leche',
        },
      ],
    },
    {
      title: 'Cocktails',
      items: [
        {
          name: 'Margarita',
          price: '11',
          description: 'Classic / Tommy’s / Chilli',
        },
        {
          name: 'Paloma',
          price: '11',
          description: 'Tequila, grapefruit, lime, soda',
        },
        {
          name: 'Pineapple & Miso Highball',
          price: '12',
          description: 'Charred pineapple tequila, miso, ginger',
        },
        {
          name: 'Michelada',
          price: '9',
          description: 'Beer, lime, spice',
        },
      ],
    },
    {
      title: 'Fresh Juices',
      items: [
        {
          name: 'Pineapple & Lime',
          price: '5',
          description: '',
        },
        {
          name: 'Watermelon Agua Fresca',
          price: '5',
          description: '',
        },
        {
          name: 'Hibiscus Iced Tea',
          price: '5',
          description: '',
        },
        {
          name: 'Mango & Passionfruit',
          price: '5',
          description: '',
        },
      ],
    },
    {
      title: 'Beer & Wine',
      items: [
        {
          name: 'Lager / Pale Ale',
          price: 'from 6',
          description: '',
        },
        {
          name: 'House Red / White / Rosé',
          price: 'from 7',
          description: '',
        },
        {
          name: 'Sparkling',
          price: 'from 8',
          description: '',
        },
      ],
    },
  ];

  return (
    <section className="container page-section menu-page">
      <section className="menu-hero-banner">
        <div className="menu-hero-overlay" />

        <div className="menu-hero-content">
          <p className="eyebrow menu-hero-eyebrow">Menu</p>
          <h2 className="section-title menu-hero-title">What we’re serving.</h2>
          <p className="menu-hero-copy">
            Bold, fresh, fire-led food built for sharing, grabbing, and coming back for.
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

function VisitPage({ visitInfo }) {
  return (
    <section className="container page-section visit-page">
      <section className="visit-hero-banner">
        <div className="visit-hero-overlay" />

        <div className="visit-hero-content">
          <p className="eyebrow visit-hero-eyebrow">Visit</p>
          <h2 className="section-title visit-hero-title">Catch us when we land.</h2>
          <p className="visit-hero-copy">
            Benditos is built for tacos, cold drinks, all-day bites, and dropping in whenever the
            craving hits. Follow along and be first to know when we open in London.
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
            Follow along, watch the food, and be first to know when Benditos lands in London.
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
        </div>
      </div>
    </section>
  );
}