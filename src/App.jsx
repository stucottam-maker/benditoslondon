import { useState } from 'react';

export default function App() {
  const [page, setPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const galleryItems = [
    {
      title: 'Birria',
      alt: 'Slow-cooked birria tacos',
      src: 'https://www.dropbox.com/scl/fi/h2fvqq9qoxkw2fglqcxig/a_digital_photograph_showcases_two_beef_birria_tac.png?rlkey=160t4r9gz3r2nwq6h1ugnn8yh&st=gayadk32&raw=1',
    },
    {
      title: 'Fish Taco',
      alt: 'Crispy fish taco',
      src: 'https://www.dropbox.com/scl/fi/u8xau043f7fqofxqhjkz9/benditos_taco_cream_watermark_fresh.png?rlkey=kkf1vy0kw8vp1gyywbkbjq2fk&st=fzwc4rhm&raw=1',
    },
    {
      title: 'Tuna Tostada',
      alt: 'Tuna tostada',
      src: 'https://www.dropbox.com/scl/fi/h2936480f05rtdn1sirvo/tuna_tostada_cream_watermark_v2.png?rlkey=oj3ccj6xdfs0zhrak542xanar&st=lc4ojexd&raw=1',
    },
    {
      title: 'Ceviche',
      alt: 'Fresh ceviche',
      src: 'https://www.dropbox.com/scl/fi/ga1m334fs5bjee8ewka43/pexels-nano-erdozain-120534369-28448397.jpg?rlkey=31nxg80db5rf7hlz29u39v33a&st=9oi9xb4s&raw=1',
    },
  ];

  const visitInfo = [
    { label: 'Launching', value: 'London — coming soon' },
    { label: 'Best for', value: 'Walk-ins, tacos, drinks, all-day bites' },
    { label: 'Follow', value: '@benditosldn' },
  ];

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'visit', label: 'Visit' },
    { id: 'contact', label: 'Contact' },
  ];

  function handleNavigate(target) {
    setPage(target);
    setMobileMenuOpen(false);
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <button className="brand-button" onClick={() => handleNavigate('home')}>
            BENDITOS
          </button>

          <nav className="nav-desktop">
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
        {page === 'home' && <HomePage setPage={setPage} galleryItems={galleryItems} />}
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

function HomePage({ setPage, galleryItems }) {
  return (
    <>
      <section className="hero-section">
  <div className="hero-overlay"></div>

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

    <div className="button-row">
      <button onClick={() => setPage('menu')} className="btn btn-primary">
        View Menu
      </button>
      <button onClick={() => setPage('visit')} className="btn btn-secondary btn-secondary-light">
        Follow the Launch
      </button>
    </div>
  </div>
</section>

      <section className="container page-section">
        <div className="intro-block">
          <h2 className="section-title">Four favourites. One mood.</h2>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.title} className="gallery-card">
              <img src={item.src} alt={item.alt} className="gallery-image" />
              <div className="image-label">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container about-section">
        <div className="about-lead">
          <p className="eyebrow">About</p>
          <h2 className="section-title">Come hungry. Leave happy.</h2>
        </div>

        <div className="about-grid">
          {[
            {
              title: 'Fire',
              text: 'Big flavour, plenty of char, and the kind of food that grabs you straight away.',
            },
            {
              title: 'Citrus',
              text: 'Fresh, bright flavour running through tacos, slaws, and ceviches.',
            },
            {
              title: 'Smoke',
              text: 'Warm, deep flavour that keeps everything rich, bold, and properly moreish.',
            },
          ].map((item) => (
            <div key={item.title} className="info-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function MenuPage() {
  return (
    <section className="container page-section menu-page">
      <section className="menu-hero-banner">
        <div className="menu-hero-overlay"></div>
        <div className="menu-hero-content">
          <p className="eyebrow menu-hero-eyebrow">Menu</p>
          <h2 className="section-title menu-hero-title">What we’re serving.</h2>
          <p className="menu-hero-copy">
            Bold, fresh, fire-led food built for sharing, grabbing, and coming back for.
          </p>
        </div>
      </section>

      <div className="menu-headings-only">
        <div className="menu-heading-block">Tacos</div>
        <div className="menu-heading-block">Quesadillas</div>
        <div className="menu-heading-block">Ceviches</div>
        <div className="menu-heading-block">Tostadas</div>
        <div className="menu-heading-block menu-heading-small">Fresh Juices</div>
        <div className="menu-heading-block menu-heading-small">Drinks</div>
      </div>
    </section>
  );
}

function VisitPage({ visitInfo }) {
  return (
    <section className="container page-section">
      <div className="intro-block">
        <p className="eyebrow">Visit</p>
        <h2 className="section-title">Catch us when we land.</h2>
        <p className="intro-copy">
          Benditos is made for all-day bites, cold drinks, and dropping in whenever the craving hits.
          Follow along and be first to know when we open.
        </p>
      </div>

      <div className="visit-info-grid">
        {visitInfo.map((item) => (
          <div key={item.label} className="visit-card">
            <p className="eyebrow">{item.label}</p>

            {item.label === 'Follow' ? (
              <a
                href="https://www.instagram.com/benditosldn/"
                target="_blank"
                rel="noreferrer"
                className="visit-link"
              >
                {item.value}
              </a>
            ) : (
              <h3>{item.value}</h3>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
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