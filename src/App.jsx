import { useMemo, useState } from "react";

const pages = [
  { id: "home", label: "Home" },
  { id: "story", label: "Story" },
  { id: "menu", label: "Menu" },
  { id: "honey", label: "Honey" },
  { id: "locations", label: "Locations" },
];

const menuSections = [
  {
    title: "Tacos",
    items: [
      {
        name: "Birria Tacos",
        desc: "Slow-cooked beef, melted cheese, onion, coriander and rich dipping consommé.",
      },
      {
        name: "Crispy Fish Taco",
        desc: "Crisp fish, zesty slaw, chilli, lime and crunchy cabbage.",
      },
      {
        name: "Chipotle Honey Chicken",
        desc: "Charred chicken, chipotle, lime and Mexican honey glaze.",
      },
    ],
  },
  {
    title: "Quesadillas",
    items: [
      {
        name: "Cheese Quesadilla",
        desc: "Toasted tortilla, melted cheese, salsa and crema.",
      },
      {
        name: "Mushroom & Corn Quesadilla",
        desc: "Roasted mushrooms, corn, chilli, herbs and lime.",
      },
      {
        name: "No-Cheese Vegan Quesadilla",
        desc: "Bean purée, roasted corn, red peppers, onion, herbs and salsa.",
      },
    ],
  },
  {
    title: "Cold Plates",
    items: [
      {
        name: "Ceviche",
        desc: "Fresh fish, citrus, chilli, coriander and crisp tostadas.",
      },
      {
        name: "Tostada",
        desc: "Crunchy tostada with bright salsa, herbs and fresh toppings.",
      },
    ],
  },
  {
    title: "Sides",
    items: [
      {
        name: "Salsa Macha",
        desc: "Crunchy chilli oil with nuts, seeds and deep roasted flavour.",
      },
      {
        name: "Honey-Lime Slaw",
        desc: "Crisp cabbage, lime, herbs and a little Mexican honey.",
      },
    ],
  },
  {
    title: "Sweets",
    items: [
      {
        name: "Churros & Burnt Honey",
        desc: "Crisp churros, cinnamon sugar and warm burnt honey sauce.",
      },
    ],
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
  const [activePage, setActivePage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const pageTitle = useMemo(() => {
    const current = pages.find((page) => page.id === activePage);
    return current?.label || "Home";
  }, [activePage]);

  const changePage = (page) => {
    setActivePage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", `#${page}`);
  };

  return (
    <div className="site">
      <header className="siteHeader">
        <button className="brandMark" onClick={() => changePage("home")}>
          Benditos
        </button>

        <button
          className="mobileMenuButton"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <nav className={menuOpen ? "mainNav open" : "mainNav"}>
          {pages.map((page) => (
            <button
              key={page.id}
              className={activePage === page.id ? "active" : ""}
              onClick={() => changePage(page.id)}
            >
              {page.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="pageShell">
        <p className="pageMarker">{pageTitle}</p>

        {activePage === "home" && <HomePage changePage={changePage} />}
        {activePage === "story" && <StoryPage changePage={changePage} />}
        {activePage === "menu" && <MenuPage />}
        {activePage === "honey" && <HoneyPage changePage={changePage} />}
        {activePage === "locations" && <LocationsPage />}
      </main>

      <footer className="footer">
        <div>
          <button className="footerLogo" onClick={() => changePage("home")}>
            Benditos
          </button>
          <p>Latin street food. Mexican soul.</p>
        </div>

        <div className="footerNav">
          {pages.map((page) => (
            <button key={page.id} onClick={() => changePage(page.id)}>
              {page.label}
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
}

function PageHero({ eyebrow, title, intro, bannerClass, bannerText }) {
  return (
    <section className={`pageHeroBanner ${bannerClass}`}>
      <div className="heroOverlay">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {intro && <p className="pageIntro">{intro}</p>}
      </div>

      <span className="bannerTag">{bannerText}</span>
    </section>
  );
}

function HomePage({ changePage }) {
  return (
    <section className="contentPage">
      <PageHero
        eyebrow="London — coming soon"
        title="Latin street food. Mexican soul."
        intro="Fire, citrus, smoke, honey and chilli — bold Latin street food built for London."
        bannerClass="homeBanner"
        bannerText="Tacos · Honey · Chilli · Smoke"
      />

      <div className="homeActions">
        <button className="primaryButton" onClick={() => changePage("menu")}>
          View menu
        </button>
        <button className="secondaryButton" onClick={() => changePage("story")}>
          Our story
        </button>
      </div>

      <div className="homeCards">
        <article>
          <h3>Street food</h3>
          <p>Tacos, quesadillas, ceviche, cold drinks and proper good times.</p>
        </article>

        <article>
          <h3>Mexican soul</h3>
          <p>Chilli, lime, smoke, slow-cooked meats and warm tortillas.</p>
        </article>

        <article>
          <h3>Golden heat</h3>
          <p>Mexican honey, chilli glazes, sharp dressings and smoky sauces.</p>
        </article>
      </div>
    </section>
  );
}

function StoryPage({ changePage }) {
  return (
    <section className="contentPage">
      <PageHero
        eyebrow="The story"
        title="Food with fire, soul and heart."
        intro="Benditos is built on the kind of food people remember — smoky, bright, messy, generous and full of life."
        bannerClass="storyBanner"
        bannerText="Smoke · Lime · Tortillas · Good times"
      />

      <div className="textGrid">
        <article className="largeTextBlock">
          <p>
            Benditos comes from a love of the food that brings people together:
            tacos passed across a table, slow-cooked meats, sharp salsa, warm
            tortillas, cold drinks and that first bite that makes everyone stop
            talking for a second.
          </p>

          <p>
            It is Latin street food with a Mexican heart — full of smoke,
            chilli, lime, fire and feeling. The kind of food made for messy
            hands, loud tables and good nights out.
          </p>

          <p>
            Honey sits quietly inside the flavour, not as a gimmick, but as
            balance. A little golden heat against the chilli, a little sweetness
            against the smoke, a little depth in every bite.
          </p>
        </article>

        <aside className="sideNote">
          <h3>Made for good times.</h3>
          <p>
            No white tablecloths, no stiff service — just bold food, cold
            drinks, warm tortillas and proper flavour.
          </p>
          <button className="textButton" onClick={() => changePage("menu")}>
            See the food
          </button>
        </aside>
      </div>
    </section>
  );
}

function MenuPage() {
  return (
    <section className="contentPage">
      <PageHero
        eyebrow="Food"
        title="Simple food. Big flavour."
        intro="A first look at the Benditos menu direction — tacos, quesadillas, ceviche, sides, sweets and golden heat."
        bannerClass="menuBanner"
        bannerText="Tacos · Quesadillas · Ceviche · Sweets"
      />

      <div className="menuLayout">
        {menuSections.map((section) => (
          <section className="menuSection" key={section.title}>
            <h2>{section.title}</h2>

            <div className="menuItems">
              {section.items.map((item) => (
                <article className="menuItem" key={item.name}>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

function HoneyPage({ changePage }) {
  return (
    <section className="contentPage honeyPage">
      <PageHero
        eyebrow="Benditos Miel y Sabores"
        title="Golden heat."
        intro="Artisanal Mexican honey rooted in culture, nature and the craft of the hive."
        bannerClass="honeyBanner goldenBanner"
        bannerText="Mexican Honey · Chilli · Golden Heat"
      />

      <div className="honeyText fullWidthText">
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
          natural and full of character. No nasties, no shortcuts, just the best
          of the hive.
        </p>

        <button className="primaryButton" onClick={() => changePage("story")}>
          Read the story
        </button>
      </div>

      <div className="pantryStrip">
        {pantryItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

function LocationsPage() {
  return (
    <section className="contentPage locationsPage">
      <PageHero
        eyebrow="London"
        title="Coming soon."
        intro="We’re building Benditos for markets, neighbourhood sites, pop-ups and food lovers across London."
        bannerClass="locationsBanner"
        bannerText="Markets · Pop-ups · London"
      />

      <div className="locationCard">
        <h2>London — coming soon</h2>
        <p>
          Bold food, casual service, cold drinks and proper good times. Follow
          Benditos for launch updates, pop-ups and first locations.
        </p>
      </div>
    </section>
  );
}

export default App;