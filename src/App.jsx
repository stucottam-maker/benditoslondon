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

function HomePage({ changePage }) {
  return (
    <section className="homePage">
      <div className="homeIntro">
        <p className="eyebrow">London — coming soon</p>

        <h1>
          Latin street food.
          <span>Mexican soul.</span>
        </h1>

        <p className="lead">
          Fire, citrus, smoke, honey and chilli — bold Latin street food built
          for London.
        </p>

        <div className="buttonRow">
          <button className="primaryButton" onClick={() => changePage("menu")}>
            View menu
          </button>
          <button
            className="secondaryButton"
            onClick={() => changePage("story")}
          >
            Our story
          </button>
        </div>
      </div>

      <div className="homeVisual">
        <div className="imageCard mainFoodImage">
          <span>Tacos · Honey · Chilli · Smoke</span>
        </div>

        <div className="smallInfoGrid">
          <article>
            <h3>Street food</h3>
            <p>Tacos, ceviche, quesadillas and cold drinks.</p>
          </article>

          <article>
            <h3>Sweet heat</h3>
            <p>Mexican honey, chilli, lime and smoke.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function StoryPage({ changePage }) {
  return (
    <section className="contentPage">
      <div className="pageHero">
        <p className="eyebrow">The story</p>
        <h1>Big flavour with a Mexican heart.</h1>
      </div>

      <div className="textGrid">
        <article className="largeTextBlock">
          <p>
            Benditos is Latin street food with a Mexican heart — tacos, chilli,
            lime, smoke, slow-cooked meats and a little honey where it belongs.
          </p>

          <p>
            The food is bold, bright and made for good times: smoky meats, sharp
            salsas, warm tortillas, cold drinks and sweet heat running through
            the menu.
          </p>

          <p>
            From chilli honey to honey-lime dressings and smoky glazes, we use
            honey to bring balance, depth and a little fire to every bite.
          </p>
        </article>

        <aside className="sideNote">
          <h3>Made for good times.</h3>
          <p>
            No white tablecloths, no stiff service — just bold food, cold
            drinks, messy hands and proper flavour.
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
      <div className="pageHero">
        <p className="eyebrow">Food</p>
        <h1>Simple food. Big flavour.</h1>
        <p className="pageIntro">
          A first look at the Benditos menu direction — tacos, quesadillas,
          ceviche, sides, sweets and sweet heat.
        </p>
      </div>

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
      <div className="pageHero">
        <p className="eyebrow">Mexican honey</p>
        <h1>Honey, chilli and sweet heat.</h1>
        <p className="pageIntro">
          A quiet little sweetness running through the heat — never too much,
          just enough to bring the flavour alive.
        </p>
      </div>

      <div className="honeyGrid">
        <div className="imageCard honeyVisual">
          <span>Mexican Honey & Sweet Heat</span>
        </div>

        <div className="honeyText">
          <p>
            The honey side of Benditos is about balance: sweet, smoky, sharp and
            spicy, working together rather than fighting for attention.
          </p>

          <p>
            You’ll find it in chilli honey, honey-lime dressings, smoky glazes,
            marinades and sauces that bring a little fire to every bite.
          </p>

          <p>
            Over time, we’ll build a small Benditos pantry too — honey, sauces,
            marinades and gift boxes made for home kitchens.
          </p>

          <button className="primaryButton" onClick={() => changePage("story")}>
            Read the story
          </button>
        </div>
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
      <div className="pageHero">
        <p className="eyebrow">London</p>
        <h1>Coming soon.</h1>
        <p className="pageIntro">
          We’re building Benditos for markets, neighbourhood sites, pop-ups and
          food lovers across London.
        </p>
      </div>

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