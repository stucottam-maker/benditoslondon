import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Flame, Droplets, MapPin, ShoppingBag, CalendarDays, Mail } from "lucide-react";

const menuHighlights = [
  "Slow-cooked birria tacos",
  "Crispy fish with zesty slaw",
  "Chipotle honey chicken",
  "Charred squash quesadilla",
  "Fresh ceviche specials",
  "House salsas and pickles",
];

const brandPillars = [
  {
    title: "Street Food",
    text: "Tacos, birria, quesadillas, ceviche and market specials with fire, smoke, citrus and crunch.",
    icon: Flame,
  },
  {
    title: "Mexican Honey",
    text: "A new Benditos layer: artesanal honey from Mexico, used in glazes, marinades, pantry goods and retail jars.",
    icon: Droplets,
  },
  {
    title: "Markets & Pop-ups",
    text: "Built for London markets, food halls, private events and future neighbourhood sites.",
    icon: MapPin,
  },
];

export default function BenditosWebsite() {
  return (
    <main className="min-h-screen bg-[#F8EEDC] text-[#3B2317] selection:bg-[#E85D24] selection:text-[#F8EEDC]">
      <header className="sticky top-0 z-50 border-b border-[#3B2317]/10 bg-[#F8EEDC]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="text-2xl font-black uppercase tracking-tight text-[#E85D24]">
            Benditos
          </a>
          <nav className="hidden items-center gap-7 text-sm font-bold uppercase tracking-[0.16em] md:flex">
            <a href="#food" className="hover:text-[#E85D24]">Food</a>
            <a href="#honey" className="hover:text-[#E85D24]">Honey</a>
            <a href="#markets" className="hover:text-[#E85D24]">Markets</a>
            <a href="#shop" className="hover:text-[#E85D24]">Shop</a>
            <a href="#contact" className="hover:text-[#E85D24]">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-[#3B2317] px-5 py-3 text-sm font-bold uppercase tracking-wider text-[#F8EEDC] transition hover:bg-[#E85D24]"
          >
            Enquire
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden px-5 py-16 md:px-8 md:py-24">
        <div className="absolute -right-28 top-10 h-72 w-72 rounded-full bg-[#F2A51A]/30 blur-3xl" />
        <div className="absolute -left-24 bottom-6 h-64 w-64 rounded-full bg-[#E85D24]/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 inline-flex rounded-full border border-[#E85D24]/30 bg-[#FFE8B8]/70 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#E85D24]">
              Latin Street Food · Mexican Honey · London
            </p>
            <h1 className="max-w-4xl text-6xl font-black uppercase leading-[0.86] tracking-[-0.06em] text-[#E85D24] md:text-8xl lg:text-9xl">
              Big flavours. Good times.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-[#3B2317]/85 md:text-2xl md:leading-9">
              Benditos is a London-based Latin street food brand built around tacos, birria, ceviche, house salsas and the golden sweetness of artesanal Mexican honey.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#food"
                className="group inline-flex items-center justify-center rounded-full bg-[#E85D24] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#F8EEDC] shadow-xl shadow-[#E85D24]/20 transition hover:translate-y-[-2px]"
              >
                Explore the Food <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#honey"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#3B2317] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] transition hover:bg-[#3B2317] hover:text-[#F8EEDC]"
              >
                Discover the Honey
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] border-4 border-[#3B2317] bg-[#E85D24] shadow-2xl shadow-[#3B2317]/20">
              <div className="flex h-full flex-col justify-between p-8 text-[#F8EEDC]">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-[#FFE8B8]">London — Coming Soon</p>
                  <p className="mt-3 text-6xl font-black uppercase leading-none tracking-[-0.05em] md:text-7xl">
                    Tacos. Fire. Citrus. Honey.
                  </p>
                </div>
                <div className="rounded-[2rem] bg-[#3B2317]/35 p-6 backdrop-blur">
                  <p className="text-lg font-bold leading-7">
                    Modern Latin street food with a Mexican soul — now with artesanal honey at the heart of the next chapter.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-10 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {brandPillars.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-[2rem] border border-[#3B2317]/15 bg-[#FFF6E8] p-7 shadow-sm">
                <Icon className="mb-6 h-8 w-8 text-[#E85D24]" />
                <h2 className="text-3xl font-black uppercase tracking-[-0.04em] text-[#3B2317]">{item.title}</h2>
                <p className="mt-4 text-base leading-7 text-[#3B2317]/75">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="food" className="bg-[#E85D24] px-5 py-16 text-[#F8EEDC] md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#FFE8B8]">The Food</p>
              <h2 className="mt-5 max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] md:text-7xl">
                Big flavours, no shortcuts.
              </h2>
            </div>
            <p className="text-lg leading-8 text-[#F8EEDC]/85">
              Charred meats, slow-cooked birria, bright ceviches, crisp toppings, handmade salsas and honey-laced glazes. Food that feels bold, generous and built for London.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {menuHighlights.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-[#F8EEDC]/20 bg-[#3B2317]/20 p-6 backdrop-blur">
                <p className="text-2xl font-black uppercase tracking-[-0.04em]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="honey" className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[2.5rem] bg-[#F2A51A] p-8 text-[#3B2317] md:p-12">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#8A3A17]">New Direction</p>
            <h2 className="mt-5 text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] md:text-7xl">
              Golden origins.
            </h2>
            <p className="mt-7 text-lg leading-8 text-[#3B2317]/80">
              Alongside the food, Benditos is developing a range of artesanal Mexican honey — raw, regional and full of character. It gives the brand a deeper link to Mexico, from retail jars to hot honey, glazes, marinades and chef supply.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-[#3B2317]/15 bg-[#FFF6E8] p-8 md:p-12">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#E85D24]">How it fits</p>
            <h3 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] md:text-6xl">
              Not a separate brand. A Benditos ingredient story.
            </h3>
            <p className="mt-7 text-lg leading-8 text-[#3B2317]/75">
              The honey adds depth without changing the energy: it appears in dishes, sauces, pantry goods, tastings and future shop products — keeping the website rooted in street food while opening up a stronger product business.
            </p>
          </div>
        </div>
      </section>

      <section id="markets" className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2.5rem] bg-[#3B2317] p-8 text-[#F8EEDC] md:p-12">
            <CalendarDays className="mb-7 h-10 w-10 text-[#F2A51A]" />
            <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] md:text-7xl">
              Markets, pop-ups and late bites.
            </h2>
            <p className="mt-7 text-lg leading-8 text-[#F8EEDC]/80">
              Built first for markets and events, Benditos can move between tacos at lunch, honey tastings, supper clubs, private catering and future neighbourhood sites.
            </p>
          </div>
          <div id="shop" className="rounded-[2.5rem] border border-[#3B2317]/15 bg-[#FFF6E8] p-8 md:p-12">
            <ShoppingBag className="mb-7 h-10 w-10 text-[#E85D24]" />
            <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] md:text-6xl">
              Pantry goods, coming soon.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3B2317]/75">
              Artesanal honey, hot honey, salsa macha, marinades, glazes and small-batch products designed for home cooks, chefs and retailers.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-20 md:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#E85D24] p-8 text-[#F8EEDC] md:p-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#FFE8B8]">Contact</p>
              <h2 className="mt-5 text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] md:text-7xl">
                Follow the journey.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#F8EEDC]/85">
                For markets, events, wholesale honey, collaborations, investor enquiries or early product interest, get in touch with Benditos.
              </p>
            </div>
            <a
              href="mailto:hello@benditos.co.uk"
              className="inline-flex items-center justify-center rounded-full bg-[#F8EEDC] px-8 py-5 text-sm font-black uppercase tracking-[0.16em] text-[#3B2317] transition hover:translate-y-[-2px]"
            >
              <Mail className="mr-2 h-4 w-4" /> hello@benditos.co.uk
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#3B2317]/10 px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-bold uppercase tracking-[0.14em] text-[#3B2317]/60 md:flex-row md:items-center md:justify-between">
          <p>© Benditos</p>
          <p>Latin Street Food · Mexican Honey · London</p>
        </div>
      </footer>
    </main>
  );
}
