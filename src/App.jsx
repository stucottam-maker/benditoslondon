import { useEffect, useMemo, useState } from "react";
import "./styles.css";

import birriaTacos from "./birria-tacos.jpeg";
import tunaTostada from "./tuna-tostada.jpeg";
import sharingTable from "./benditos-sharing-table.jpg";
import guestsImage from "./benditos-guests.jpg";
import honeyTable from "./honey-table.jpg";
import honeycombCloseup from "./honeycomb-closeup.jpg";

import melodisaBottles from "./melodisa-bottles.jpg";
import melodisaLogo from "./melodisa-logo.jpg";
import melodisaAward from "./melodisa-award.jpg";
import melodisaSonata from "./melodisa-sonata.jpeg";

const FORM_ENDPOINT = "https://formspree.io/f/mvzjwqeg";
const UK_INSTAGRAM = "https://instagram.com/benditosldn";
const MX_INSTAGRAM = "https://instagram.com/benditosldn";
const MELODISA_INSTAGRAM = "https://instagram.com/mielysabores_mx";
const WHATSAPP_URL = "https://wa.me/";

const regions = {
  uk: {
    code: "UK",
    base: "",
    location: "London",
    locale: "en-GB",

    metaTitle: "Benditos | Latin street food in London",

    metaDescription:
      "Benditos brings Latin street food, Mexican soul, big flavours and good times to London.",

    brandLine: "Latin street food. Mexican soul.",

    heroEyebrow: "London · Coming soon",

    heroTitle: "Big flavours. Good times.",

    heroCopy:
      "A lively menu built around corn, fire, citrus, slow cooking and proper cravings.",

    primaryCta: "Explore the menu",
    secondaryCta: "Our story",

    nav: {
      home: "Home",
      menu: "Menu",
      honey: "Honey",
      melodisa: "Melodisa",
      about: "About",
      visit: "Visit",
      contact: "Contact",
    },
  },

  mx: {
    code: "MX",
    base: "/mx",
    location: "Mexicali",
    locale: "es-MX",

    metaTitle: "Benditos Mexicali | Cocina mexicana",

    metaDescription:
      "Benditos Mexicali: tacos, brasas, cítricos, antojitos y miel mexicana. Próximamente en Mexicali, Baja California.",

    brandLine: "Cocina mexicana. Mucho carácter.",

    heroEyebrow: "Próximamente en Mexicali",

    heroTitle: "Fuego, maíz y sabor sin fronteras.",

    heroCopy:
      "Cocina mexicana con raíces, carácter y mucho antojo. Brasas, cítricos, salsas y miel mexicana en una propuesta creada para compartir.",

    primaryCta: "Ver el menú",
    secondaryCta: "Nuestra historia",

    nav: {
      home: "Inicio",
      menu: "Menú",
      honey: "Nuestra miel",
      melodisa: "Melodisa",
      about: "Nosotros",
      visit: "Visítanos",
      contact: "Contacto",
    },
  },
};

const ukMenu = [
  {
    title: "Antojitos",

    items: [
      [
        "Guacamole & totopos",
        "£8",
        "Avocado, lime, coriander and house-made totopos.",
      ],

      [
        "Sikil pak",
        "£7",
        "Yucatecan pumpkin seed dip, roasted tomato and chilli.",
      ],

      [
        "Esquites",
        "£6",
        "Charred corn, chipotle mayo, cheese and salsa macha.",
      ],

      [
        "Refried beans & totopos",
        "£6",
        "Creamy beans, cheese and chilli oil.",
      ],
    ],
  },

  {
    title: "Tacos · 2 per order",

    items: [
      [
        "Cochinita pibil",
        "£10",
        "Achiote pork, pickled red onion and habanero.",
      ],

      [
        "Birria",
        "£11",
        "Slow-cooked beef, onion, coriander and consommé.",
      ],

      [
        "Baja fish",
        "£10",
        "Crisp fish, slaw, crema and salsa.",
      ],

      [
        "Chipotle honey chicken",
        "£10",
        "Charred chicken, chipotle, honey and pickles.",
      ],

      [
        "Honey-glazed pork belly",
        "£11",
        "Caramelised pork, chilli and citrus.",
      ],
    ],
  },

  {
    title: "Quesadillas",

    items: [
      [
        "Build your own",
        "£11",
        "Cheese and your choice of filling.",
      ],

      [
        "Quesabirria",
        "£12",
        "Birria, cheese, onion, coriander and consommé.",
      ],

      [
        "Miso-honey squash",
        "£11",
        "Roasted squash, miso, honey and seeds.",
      ],
    ],
  },

  {
    title: "From the sea",

    items: [
      [
        "Classic ceviche",
        "£12",
        "Fresh fish, lime, onion, chilli and coriander.",
      ],

      [
        "King prawn aguachile",
        "£14",
        "Prawn, cucumber, green chilli and citrus.",
      ],

      [
        "Tuna tostada",
        "£12",
        "Tuna, avocado, cucumber and house salsa.",
      ],
    ],
  },

  {
    title: "Sweet",

    items: [
      [
        "Tres leches",
        "£8",
        "Soft sponge, cream and cinnamon.",
      ],

      [
        "Churros",
        "£7",
        "Cinnamon sugar and honey caramel.",
      ],
    ],
  },
];

const mxMenu = [
  {
    title: "Antojitos",

    items: [
      [
        "Guacamole y totopos",
        "$145",
        "Aguacate, limón, cilantro y totopos recién hechos.",
      ],

      [
        "Sikil pak",
        "$130",
        "Dip yucateco de pepita, tomate asado y chile.",
      ],

      [
        "Esquites",
        "$120",
        "Maíz asado, mayonesa de chipotle, queso y salsa macha.",
      ],

      [
        "Frijoles refritos y totopos",
        "$110",
        "Frijoles cremosos, queso y aceite de chile.",
      ],
    ],
  },

  {
    title: "Tacos · 2 piezas",

    items: [
      [
        "Cochinita pibil",
        "$175",
        "Cerdo al achiote, cebolla morada y habanero.",
      ],

      [
        "Birria",
        "$190",
        "Res cocinada lentamente, cebolla, cilantro y consomé.",
      ],

      [
        "Pescado estilo Baja",
        "$180",
        "Pescado crujiente, col, crema y salsa.",
      ],

      [
        "Pollo con chipotle y miel",
        "$175",
        "Pollo a las brasas, chipotle, miel y encurtidos.",
      ],

      [
        "Panceta glaseada con miel",
        "$190",
        "Cerdo caramelizado, chile y cítricos.",
      ],
    ],
  },

  {
    title: "Quesadillas",

    items: [
      [
        "Arma la tuya",
        "$185",
        "Quesillo y el relleno que elijas.",
      ],

      [
        "Quesabirria",
        "$205",
        "Birria, quesillo, cebolla, cilantro y consomé.",
      ],

      [
        "Calabaza con miso y miel",
        "$185",
        "Calabaza asada, miso, miel y semillas.",
      ],
    ],
  },

  {
    title: "Del mar",

    items: [
      [
        "Ceviche clásico",
        "$215",
        "Pescado fresco, limón, cebolla, chile y cilantro.",
      ],

      [
        "Aguachile verde de camarón",
        "$245",
        "Camarón, pepino, chile verde y cítricos.",
      ],

      [
        "Tostada de atún",
        "$225",
        "Atún, aguacate, pepino y salsa de la casa.",
      ],
    ],
  },

  {
    title: "Postres",

    items: [
      [
        "Tres leches",
        "$135",
        "Bizcocho suave, crema y canela.",
      ],

      [
        "Churros",
        "$125",
        "Azúcar, canela y caramelo de miel.",
      ],
    ],
  },
];

function getRoute(pathname) {
  const clean =
    pathname.replace(/\/+$/, "") || "/";

  const isMexico =
    clean === "/mx" ||
    clean.startsWith("/mx/");

  const region =
    isMexico ? "mx" : "uk";

  const base =
    regions[region].base;

  const relative =
    clean === base || clean === "/"
      ? "/"
      : clean.slice(base.length) || "/";

  return {
    clean,
    region,
    relative,
  };
}

function useNavigation() {
  const [pathname, setPathname] =
    useState(window.location.pathname);

  useEffect(() => {
    const syncPath = () => {
      setPathname(
        window.location.pathname
      );
    };

    window.addEventListener(
      "popstate",
      syncPath
    );

    return () => {
      window.removeEventListener(
        "popstate",
        syncPath
      );
    };
  }, []);

  const navigate = (path) => {
    if (
      path ===
      window.location.pathname
    ) {
      return;
    }

    window.history.pushState(
      {},
      "",
      path
    );

    setPathname(path);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return {
    pathname,
    navigate,
  };
}

function AppLink({
  to,
  navigate,
  children,
  className = "",
  onClick,
}) {
  return (
    <a
      href={to}
      className={className}
      onClick={(event) => {
        if (
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          event.button !== 0
        ) {
          return;
        }

        event.preventDefault();

        navigate(to);

        if (onClick) {
          onClick();
        }
      }}
    >
      {children}
    </a>
  );
}

function routePath(
  region,
  page = ""
) {
  const base =
    regions[region].base;

  if (
    !page ||
    page === "/"
  ) {
    return base || "/";
  }

  return `${base}/${page.replace(
    /^\/+/,
    ""
  )}`;
}

function Header({
  route,
  navigate,
}) {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const copy =
    regions[route.region];

  const pages = [
    ["home", ""],
    ["menu", "menu"],
    ["honey", "honey"],
    ["melodisa", "melodisa"],
    ["about", "about"],
    ["visit", "visit"],
    ["contact", "contact"],
  ];

  const switchTo =
    route.region === "uk"
      ? "/mx"
      : "/";

  return (
    <header className="site-header">
      <AppLink
        to={routePath(
          route.region
        )}
        navigate={navigate}
        className="brand"
        onClick={() => {
          setMenuOpen(false);
        }}
      >
        <span className="brand__mark">
          B
        </span>

        <span className="brand__text">
          <strong>
            BENDITOS
          </strong>

          <small>
            {copy.location}
          </small>
        </span>
      </AppLink>

      <button
        type="button"
        className="menu-toggle"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => {
          setMenuOpen(
            (current) => !current
          );
        }}
      >
        <span />
        <span />
      </button>

      <nav
        className={`nav ${
          menuOpen
            ? "nav--open"
            : ""
        }`}
      >
        {pages.map(
          ([label, slug]) => {
            const path =
              routePath(
                route.region,
                slug
              );

            const active =
              slug === ""
                ? route.relative === "/"
                : route.relative ===
                  `/${slug}`;

            return (
              <AppLink
                key={label}
                to={path}
                navigate={navigate}
                className={
                  active
                    ? "active"
                    : ""
                }
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                {copy.nav[label]}
              </AppLink>
            );
          }
        )}

        <AppLink
          to={switchTo}
          navigate={navigate}
          className="region-switch"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          {route.region === "uk"
            ? "MX"
            : "UK"}
        </AppLink>
      </nav>
    </header>
  );
}

function Footer({
  region,
  navigate,
}) {
  const copy =
    regions[region];

  return (
    <footer className="footer">
      <div>
        <p className="eyebrow">
          {copy.location}
        </p>

        <h2>
          {copy.brandLine}
        </h2>
      </div>

      <div className="footer__links">
        <AppLink
          to={routePath(
            region,
            "menu"
          )}
          navigate={navigate}
        >
          {copy.nav.menu}
        </AppLink>

        <AppLink
          to={routePath(
            region,
            "honey"
          )}
          navigate={navigate}
        >
          {copy.nav.honey}
        </AppLink>

        <AppLink
          to={routePath(
            region,
            "melodisa"
          )}
          navigate={navigate}
        >
          Melodisa
        </AppLink>

        <a
          href={
            region === "uk"
              ? UK_INSTAGRAM
              : MX_INSTAGRAM
          }
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </div>

      <div className="footer__bottom">
        <span>
          ©{" "}
          {new Date().getFullYear()}{" "}
          Benditos.
        </span>

        <span>
          {region === "uk"
            ? "London, United Kingdom"
            : "Mexicali, Baja California"}
        </span>
      </div>
    </footer>
  );
}

function ImagePanel({
  label = "",
  className = "",
  src = "",
}) {
  return (
    <div
      className={`image-panel ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={label}
        />
      ) : (
        <span>
          {label}
        </span>
      )}
    </div>
  );
}

function Button({
  to,
  navigate,
  children,
  secondary = false,
}) {
  return (
    <AppLink
      to={to}
      navigate={navigate}
      className={`button ${
        secondary
          ? "button--secondary"
          : ""
      }`}
    >
      {children}
    </AppLink>
  );
}

function HomePage({
  region,
  navigate,
}) {
  const copy =
    regions[region];

  const isMexico =
    region === "mx";

  const principles =
    isMexico
      ? [
          [
            "01",
            "Fuego",
            "Brasas, tiempo y paciencia para construir sabores profundos.",
          ],

          [
            "02",
            "Cítricos",
            "Limón, naranja y toronja para dar frescura y equilibrio.",
          ],

          [
            "03",
            "Tierra",
            "Maíz, chiles, semillas y productos conectados con sus raíces.",
          ],

          [
            "04",
            "Miel",
            "Miel mexicana en glaseados, bebidas, salsas y marinados.",
          ],
        ]
      : [
          [
            "01",
            "Fire",
            "Char, patience and slow cooking for deep, layered flavour.",
          ],

          [
            "02",
            "Citrus",
            "Lime, orange and grapefruit bringing freshness and balance.",
          ],

          [
            "03",
            "Earth",
            "Corn, chillies, seeds and ingredients connected to their roots.",
          ],

          [
            "04",
            "Honey",
            "Mexican honey in glazes, drinks, sauces and marinades.",
          ],
        ];

  return (
    <main>
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">
            {copy.heroEyebrow}
          </p>

          <h1>
            {copy.heroTitle}
          </h1>

          <p className="hero__copy">
            {copy.heroCopy}
          </p>

          <div className="actions">
            <Button
              to={routePath(
                region,
                "menu"
              )}
              navigate={navigate}
            >
              {copy.primaryCta}
            </Button>

            <Button
              to={routePath(
                region,
                "about"
              )}
              navigate={navigate}
              secondary
            >
              {copy.secondaryCta}
            </Button>
          </div>
        </div>

        <ImagePanel
          className="hero__image"
          src={birriaTacos}
          label="Benditos birria tacos"
        />
      </section>

      <section className="marquee">
        {(isMexico
          ? [
              "BRASAS",
              "MAÍZ",
              "CÍTRICOS",
              "CHILE",
              "MIEL",
            ]
          : [
              "FIRE",
              "CORN",
              "CITRUS",
              "CHILLI",
              "HONEY",
            ]
        ).map((item) => (
          <span key={item}>
            {item}
            <i>✦</i>
          </span>
        ))}
      </section>

      <section className="section intro-grid">
        <div>
          <p className="eyebrow">
            {isMexico
              ? "Nuestra manera de cocinar"
              : "Our approach"}
          </p>

          <h2>
            {isMexico
              ? "Ingredientes con origen. Comida con carácter."
              : "Ingredients with roots. Food with character."}
          </h2>
        </div>

        <p className="large-copy">
          {isMexico
            ? "Benditos reúne recetas mexicanas, cocina a las brasas y una visión contemporánea que respeta el producto. Aquí venimos a comer con las manos, probar salsas y pedir otro taco."
            : "Benditos brings together Latin street food, Mexican soul and a modern approach that respects the ingredient. Come hungry, eat with your hands and order another taco."}
        </p>
      </section>

      <section className="principles section">
        {principles.map(
          ([
            number,
            title,
            text,
          ]) => (
            <article
              className="principle"
              key={title}
            >
              <span>
                {number}
              </span>

              <h3>
                {title}
              </h3>

              <p>
                {text}
              </p>
            </article>
          )
        )}
      </section>

      <section className="split-feature section">
        <ImagePanel
          src={sharingTable}
          label="Benditos sharing table"
        />

        <div className="split-feature__content">
          <p className="eyebrow">
            {isMexico
              ? "Hecho para compartir"
              : "Made for sharing"}
          </p>

          <h2>
            {isMexico
              ? "Una mesa llena sabe mejor."
              : "A full table tastes better."}
          </h2>

          <p>
            {isMexico
              ? "Tacos, antojitos, ceviches, quesadillas, salsas y bebidas pensados para poner al centro, compartir y volver a pedir."
              : "Tacos, antojitos, ceviche, quesadillas, salsas and drinks designed for the middle of the table."}
          </p>

          <Button
            to={routePath(
              region,
              "menu"
            )}
            navigate={navigate}
          >
            {copy.nav.menu}
          </Button>
        </div>
      </section>

      <section className="honey-banner section">
        <div>
          <p className="eyebrow">
            {isMexico
              ? "Miel mexicana"
              : "Mexican honey"}
          </p>

          <h2>
            {isMexico
              ? "No sólo para el postre."
              : "Not just for dessert."}
          </h2>

          <p>
            {isMexico
              ? "La usamos para equilibrar el picante, caramelizar, marinar y crear bebidas con más textura y profundidad."
              : "We use it to balance heat, glaze, marinate and create drinks with greater texture and depth."}
          </p>

          <div className="actions">
            <Button
              to={routePath(
                region,
                "honey"
              )}
              navigate={navigate}
            >
              {copy.nav.honey}
            </Button>

            <Button
              to={routePath(
                region,
                "melodisa"
              )}
              navigate={navigate}
              secondary
            >
              Melodisa
            </Button>
          </div>
        </div>

        <ImagePanel
          src={honeyTable}
          label="Mexican honey"
        />
      </section>

      <LaunchSection
        region={region}
        navigate={navigate}
      />
    </main>
  );
}

function MenuPage({
  region,
}) {
  const isMexico =
    region === "mx";

  const menu =
    isMexico
      ? mxMenu
      : ukMenu;

  return (
    <main>
      <PageHero
        eyebrow={
          isMexico
            ? "Benditos Mexicali"
            : "Benditos London"
        }
        title={
          isMexico
            ? "Menú"
            : "Menu"
        }
        copy={
          isMexico
            ? "Platos para compartir, tacos para repetir y bebidas con mucho carácter."
            : "Food for sharing, tacos worth repeating and drinks with plenty of character."
        }
        src={tunaTostada}
        label="Benditos tuna tostada"
      />

      <section className="menu-section section">
        <div className="menu-notice">
          <strong>
            {isMexico
              ? "Menú de lanzamiento"
              : "Launch menu"}
          </strong>

          <p>
            {isMexico
              ? "Los precios son provisionales y podrán ajustarse antes de la apertura. Avísanos sobre cualquier alergia o restricción alimentaria."
              : "Prices and dishes may change before launch. Please tell us about any allergies or dietary requirements."}
          </p>
        </div>

        <div className="menu-columns">
          {menu.map(
            (section) => (
              <article
                className="menu-group"
                key={section.title}
              >
                <h2>
                  {section.title}
                </h2>

                {section.items.map(
                  ([
                    name,
                    price,
                    description,
                  ]) => (
                    <div
                      className="menu-item"
                      key={name}
                    >
                      <div className="menu-item__top">
                        <h3>
                          {name}
                        </h3>

                        <strong>
                          {price}
                        </strong>
                      </div>

                      <p>
                        {description}
                      </p>
                    </div>
                  )
                )}
              </article>
            )
          )}
        </div>
      </section>
    </main>
  );
}

function HoneyPage({
  region,
  navigate,
}) {
  const isMexico =
    region === "mx";

  const cards =
    isMexico
      ? [
          [
            "Miel cruda",
            "Aromas y sabores que cambian según la floración, la temporada y la región.",
          ],

          [
            "Miel picante",
            "Miel y chile para tacos, pollo, cerdo, quesadillas y mucho más.",
          ],

          [
            "Glaseados",
            "Brillo, caramelización y capas de sabor en carnes y verduras.",
          ],

          [
            "Bebidas",
            "Margaritas, palomas, jarabes y aguas frescas con mayor profundidad.",
          ],

          [
            "Despensa",
            "Salsa macha, miel picante, glaseados y pequeños productos para casa.",
          ],

          [
            "Colaboración",
            "Recetas creadas junto a productores que respetan su entorno.",
          ],
        ]
      : [
          [
            "Raw honey",
            "Aromas and flavours shaped by blossom, season and region.",
          ],

          [
            "Hot honey",
            "Honey and chilli for tacos, chicken, pork, quesadillas and more.",
          ],

          [
            "Glazes",
            "Shine, caramelisation and layered flavour on meat and vegetables.",
          ],

          [
            "Drinks",
            "Margaritas, palomas, syrups and soft drinks with extra depth.",
          ],

          [
            "Pantry",
            "Salsa macha, hot honey, glazes and small-batch products.",
          ],

          [
            "Collaboration",
            "Recipes created with producers who respect their environment.",
          ],
        ];

  return (
    <main>
      <PageHero
        eyebrow={
          isMexico
            ? "Un ingrediente central"
            : "A central ingredient"
        }
        title={
          isMexico
            ? "Nuestra miel"
            : "Honey"
        }
        copy={
          isMexico
            ? "Miel mexicana seleccionada por su sabor, procedencia y capacidad para transformar un plato."
            : "Mexican honey selected for its flavour, origin and ability to transform a dish."
        }
        src={honeyTable}
        label="Mexican honey and honeycomb"
      />

      <section className="section intro-grid">
        <div>
          <p className="eyebrow">
            {isMexico
              ? "Más que dulzor"
              : "More than sweetness"}
          </p>

          <h2>
            {isMexico
              ? "Equilibrio, profundidad y carácter."
              : "Balance, depth and character."}
          </h2>
        </div>

        <p className="large-copy">
          {isMexico
            ? "En Benditos, la miel no está reservada para los postres. La utilizamos para equilibrar el picante, dar profundidad a marinados, caramelizar carnes y verduras, preparar bebidas y crear salsas propias."
            : "At Benditos, honey is not reserved for dessert. We use it to balance heat, deepen marinades, glaze meat and vegetables, build drinks and create our own sauces."}
        </p>
      </section>

      <section className="editorial-grid section">
        {cards.map(
          ([
            title,
            text,
          ], index) => (
            <article key={title}>
              <span>
                0{index + 1}
              </span>

              <h3>
                {title}
              </h3>

              <p>
                {text}
              </p>
            </article>
          )
        )}
      </section>

      <section className="split-feature section">
        <ImagePanel
          src={honeycombCloseup}
          label="Honeycomb close-up"
        />

        <div className="split-feature__content">
          <p className="eyebrow">
            {isMexico
              ? "De la cocina a tu casa"
              : "From our kitchen to yours"}
          </p>

          <h2>
            {isMexico
              ? "Productos Benditos con miel mexicana."
              : "Benditos products made with Mexican honey."}
          </h2>

          <p>
            {isMexico
              ? "Estamos desarrollando una pequeña línea de miel picante, salsas, glaseados y productos de despensa."
              : "We are developing a small line of hot honey, sauces, glazes and pantry products."}
          </p>

          <Button
            to={routePath(
              region,
              "contact"
            )}
            navigate={navigate}
          >
            {isMexico
              ? "Recibir novedades"
              : "Get updates"}
          </Button>
        </div>
      </section>
    </main>
  );
}

function MelodisaPage() {

  return (

    <main className="melodisa-page">

      {/* Introduction */}

      <section className="melodisa-intro">

        <div className="melodisa-intro__image">

          <img

            src={melodisaBottle}

            alt="Bottle of Melodisa Mexican mead"

          />

        </div>

        <div className="melodisa-intro__content">

          <img

            src={melodisaLogo}

            alt="Melodisa Hidromiel"

            className="melodisa-logo"

          />

          <p className="eyebrow">Hidromiel mexicana</p>

          <h1>

            Ancient tradition,

            <br />

            made in Mexico.

          </h1>

          <p className="melodisa-intro__lead">

            Melodisa transforms Mexican honey into expressive,

            award-winning mead made with patience, imagination and

            respect for the ingredients.

          </p>

          <p>

            Rooted in one of the world’s oldest fermented drinks,

            Melodisa brings the tradition into the present through

            carefully selected honey, fruit, botanicals and distinctly

            Mexican flavours.

          </p>

          <div className="melodisa-actions">

            <a

              href="https://www.instagram.com/melodisa.mx/"

              target="_blank"

              rel="noreferrer"

              className="button"

            >

              Discover Melodisa

            </a>

            <a href="/miel" className="button button--secondary">

              Explore our honey

            </a>

          </div>

        </div>

      </section>

      {/* Brand statement */}

      <section className="melodisa-statement">

        <p className="eyebrow">Honey, time and fermentation</p>

        <h2>

          A drink shaped by the character of Mexican honey.

        </h2>

        <p>

          Every batch begins with honey. Its aroma, origin and natural

          complexity provide the foundation for a drink that sits

          somewhere between wine, tradition and experimentation.

        </p>

      </section>

      {/* Process */}

      <section className="melodisa-feature">

        <div className="melodisa-feature__content">

          <p className="eyebrow">From hive to bottle</p>

          <h2>Made slowly and with intention.</h2>

          <p>

            Honey is blended with water and fermented carefully,

            allowing its floral, fruity and earthy characteristics to

            develop naturally.

          </p>

          <p>

            The result is a layered drink that can be bright and fresh,

            rich and warming, or delicately aromatic depending on the

            honey and ingredients used.

          </p>

        </div>

        <div className="melodisa-feature__image">

          <img

            src={melodisaHoney}

            alt="Mexican honey used to produce Melodisa mead"

          />

        </div>

      </section>

      {/* Award */}

      <section className="melodisa-award">

        <div className="melodisa-award__copy">

          <p className="eyebrow">International recognition</p>

          <h2>Award-winning Mexican mead.</h2>

          <p>

            Melodisa has received recognition for the quality,

            personality and craftsmanship of its meads, helping bring

            Mexican hidromiel to a wider audience.

          </p>

        </div>

        <div className="melodisa-award__image">

          <img

            src={melodisaAward}

            alt="Melodisa receiving an award for Mexican mead"

          />

        </div>

      </section>

      {/* Final feature */}

      <section className="melodisa-feature melodisa-feature--reverse">

        <div className="melodisa-feature__content">

          <p className="eyebrow">Benditos × Melodisa</p>

          <h2>Part of our story of Mexican honey.</h2>

          <p>

            Melodisa represents the creativity, knowledge and

            craftsmanship behind the Mexican producers we want to

            celebrate through Benditos.

          </p>

          <p>

            Their work shows that honey is more than a sweetener. It is

            an ingredient shaped by landscape, season and culture.

          </p>

          <a href="/contact" className="button">

            Make an enquiry

          </a>

        </div>

        <div className="melodisa-feature__image">

          <img

            src={melodisaPour}

            alt="Melodisa Mexican mead being poured"

          />

        </div>

      </section>

      {/* Closing CTA */}

      <section className="melodisa-cta">

        <p className="eyebrow">From Mexico to London</p>

        <h2>Honey with origin, flavour and purpose.</h2>

        <div className="melodisa-actions melodisa-actions--center">

          <a href="/miel" className="button">

            Explore Benditos honey

          </a>

          <a href="/contact" className="button button--secondary">

            Contact us

          </a>

        </div>

      </section>

    </main>

  );

}

export default MelodisaPage;

function AboutPage({
  region,
  navigate,
}) {
  const isMexico =
    region === "mx";

  return (
    <main>
      <PageHero
        eyebrow={
          isMexico
            ? "Nuestra historia"
            : "Our story"
        }
        title="Benditos"
        copy={
          isMexico
            ? "Cocina mexicana de raíces profundas, creada con curiosidad, respeto y muchas ganas de compartir."
            : "Latin street food with Mexican soul, built with curiosity, respect and a love of sharing."
        }
        src={guestsImage}
        label="Guests enjoying Benditos"
      />

      <section className="story section">
        <ImagePanel
          src={sharingTable}
          label="Benditos shared table"
        />

        <div className="story__copy">
          <p className="eyebrow">
            {isMexico
              ? "Nacido entre cocinas"
              : "Born in kitchens"}
          </p>

          <h2>
            {isMexico
              ? "Tradición sin quedarse quieta."
              : "Tradition that keeps moving."}
          </h2>

          <p>
            {isMexico
              ? "Benditos nace de una vida entre cocinas y del deseo de crear un lugar donde la comida mexicana pueda sentirse familiar y, al mismo tiempo, descubrir nuevas combinaciones."
              : "Benditos comes from a life spent in kitchens and a desire to make food that feels familiar while still finding new combinations."}
          </p>

          <Button
            to={routePath(
              region,
              "menu"
            )}
            navigate={navigate}
          >
            {isMexico
              ? "Ver lo que cocinamos"
              : "See what we cook"}
          </Button>
        </div>
      </section>
    </main>
  );
}

function VisitPage({
  region,
  navigate,
}) {
  const isMexico =
    region === "mx";

  return (
    <main>
      <PageHero
        eyebrow={
          isMexico
            ? "Próximamente"
            : "Coming soon"
        }
        title={
          isMexico
            ? "Visítanos en Mexicali"
            : "Find us in London"
        }
        copy={
          isMexico
            ? "Estamos preparando nuestro nuevo espacio. Muy pronto compartiremos la dirección y la fecha de apertura."
            : "We are preparing our next London home. Follow along for dates, location and launch news."
        }
        src={guestsImage}
        label="Benditos guests"
      />

      <section className="visit-grid section">
        <article>
          <p className="eyebrow">
            {isMexico
              ? "Ubicación"
              : "Location"}
          </p>

          <h2>
            {isMexico
              ? "Mexicali, Baja California"
              : "London, United Kingdom"}
          </h2>

          <p>
            {isMexico
              ? "Dirección por anunciar."
              : "Location to be announced."}
          </p>
        </article>

        <article>
          <p className="eyebrow">
            {isMexico
              ? "Horario"
              : "Opening hours"}
          </p>

          <h2>
            {isMexico
              ? "Próximamente"
              : "Coming soon"}
          </h2>

          <p>
            {isMexico
              ? "Síguenos para conocer los horarios."
              : "Follow us for opening days and times."}
          </p>
        </article>

        <article>
          <p className="eyebrow">
            {isMexico
              ? "Novedades"
              : "Updates"}
          </p>

          <h2>
            {isMexico
              ? "Sé de los primeros."
              : "Be first to know."}
          </h2>

          <Button
            to={routePath(
              region,
              "contact"
            )}
            navigate={navigate}
          >
            {isMexico
              ? "Quiero enterarme"
              : "Keep me posted"}
          </Button>
        </article>
      </section>
    </main>
  );
}

function ContactPage({
  region,
}) {
  const isMexico =
    region === "mx";

  return (
    <main>
      <PageHero
        eyebrow={
          isMexico
            ? "Hablemos"
            : "Let’s talk"
        }
        title={
          isMexico
            ? "Contacto"
            : "Contact"
        }
        copy={
          isMexico
            ? "Colaboraciones, prensa, eventos o preguntas sobre nuestra apertura en Mexicali."
            : "Collaborations, press, events or questions about Benditos."
        }
        src={sharingTable}
        label="Benditos dining table"
      />

      <section className="contact section">
        <div className="contact__intro">
          <p className="eyebrow">
            {isMexico
              ? "Escríbenos"
              : "Get in touch"}
          </p>

          <h2>
            {isMexico
              ? "Nos encantará saber de ti."
              : "We would love to hear from you."}
          </h2>

          <div className="contact__links">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp ↗
            </a>

            <a
              href={
                isMexico
                  ? MX_INSTAGRAM
                  : UK_INSTAGRAM
              }
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>
          </div>
        </div>

        <form
          className="contact-form"
          action={FORM_ENDPOINT}
          method="POST"
        >
          <input
            type="hidden"
            name="region"
            value={
              isMexico
                ? "Mexicali"
                : "London"
            }
          />

          <label>
            {isMexico
              ? "Nombre"
              : "Name"}

            <input
              type="text"
              name="name"
              required
            />
          </label>

          <label>
            {isMexico
              ? "Correo electrónico"
              : "Email"}

            <input
              type="email"
              name="email"
              required
            />
          </label>

          <label>
            {isMexico
              ? "Teléfono"
              : "Phone"}

            <input
              type="tel"
              name="phone"
            />
          </label>

          <label>
            {isMexico
              ? "Mensaje"
              : "Message"}

            <textarea
              name="message"
              rows="6"
              required
            />
          </label>

          <button
            className="button"
            type="submit"
          >
            {isMexico
              ? "Enviar mensaje"
              : "Send message"}
          </button>
        </form>
      </section>
    </main>
  );
}

function PageHero({
  eyebrow,
  title,
  copy,
  label = "",
  src = "",
}) {
  return (
    <section className="page-hero">
      <div className="page-hero__copy">
        <p className="eyebrow">
          {eyebrow}
        </p>

        <h1>
          {title}
        </h1>

        <p>
          {copy}
        </p>
      </div>

      <ImagePanel
        label={label}
        src={src}
      />
    </section>
  );
}

function LaunchSection({
  region,
  navigate,
}) {
  const isMexico =
    region === "mx";

  return (
    <section className="launch-block section">
      <p className="eyebrow">
        {isMexico
          ? "Mexicali · Baja California"
          : "London · United Kingdom"}
      </p>

      <h2>
        {isMexico
          ? "Algo bueno se está cocinando."
          : "Something good is cooking."}
      </h2>

      <p>
        {isMexico
          ? "Síguenos para descubrir la ubicación, la fecha de apertura y todo lo que estamos preparando."
          : "Follow us for locations, launch dates and everything we are preparing."}
      </p>

      <div className="actions">
        <a
          className="button"
          href={
            isMexico
              ? MX_INSTAGRAM
              : UK_INSTAGRAM
          }
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>

        <Button
          to={routePath(
            region,
            "contact"
          )}
          navigate={navigate}
          secondary
        >
          {isMexico
            ? "Recibir novedades"
            : "Get updates"}
        </Button>
      </div>
    </section>
  );
}

function NotFound({
  region,
  navigate,
}) {
  const isMexico =
    region === "mx";

  return (
    <main className="not-found section">
      <p className="eyebrow">
        404
      </p>

      <h1>
        {isMexico
          ? "Esta página no existe."
          : "This page does not exist."}
      </h1>

      <Button
        to={routePath(region)}
        navigate={navigate}
      >
        {isMexico
          ? "Volver al inicio"
          : "Back home"}
      </Button>
    </main>
  );
}

export default function App() {
  const {
    pathname,
    navigate,
  } = useNavigation();

  const route = useMemo(
    () => getRoute(pathname),
    [pathname]
  );

  const copy =
    regions[route.region];

  useEffect(() => {
    document.documentElement.lang =
      copy.locale;

    document.title =
      copy.metaTitle;

    let description =
      document.querySelector(
        'meta[name="description"]'
      );

    if (!description) {
      description =
        document.createElement(
          "meta"
        );

      description.name =
        "description";

      document.head.appendChild(
        description
      );
    }

    description.content =
      copy.metaDescription;
  }, [copy]);

  const pages = {
    "/": (
      <HomePage
        region={route.region}
        navigate={navigate}
      />
    ),

    "/menu": (
      <MenuPage
        region={route.region}
      />
    ),

    "/honey": (
      <HoneyPage
        region={route.region}
        navigate={navigate}
      />
    ),

    "/melodisa": (
      <MelodisaPage
        region={route.region}
        navigate={navigate}
      />
    ),

    "/about": (
      <AboutPage
        region={route.region}
        navigate={navigate}
      />
    ),

    "/visit": (
      <VisitPage
        region={route.region}
        navigate={navigate}
      />
    ),

    "/contact": (
      <ContactPage
        region={route.region}
      />
    ),
  };

  return (
    <div className="site-shell">
      <Header
        route={route}
        navigate={navigate}
      />

      {pages[route.relative] || (
        <NotFound
          region={route.region}
          navigate={navigate}
        />
      )}

      <Footer
        region={route.region}
        navigate={navigate}
      />
    </div>
  );
}
