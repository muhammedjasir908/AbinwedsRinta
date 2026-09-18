import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PetalRain } from "@/components/PetalRain";
import { Countdown } from "@/components/Countdown";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import heroFloral from "@/assets/hero-floral.jpg";
import divider from "@/assets/divider.png";
import coupleCover from "@/assets/couple-cover.jpg";
import bridesmaid1 from "@/assets/bridesmaid-1.jpg";
import bridesmaid2 from "@/assets/bridesmaid-2.jpg";
import bridesmaid3 from "@/assets/bridesmaid-3.jpg";
import bridesmaid4 from "@/assets/bridesmaid-4.jpg";
import bridesmaid5 from "@/assets/bridesmaid-5.jpg";
import bridesmaid6 from "@/assets/bridesmaid-6.jpg";
import bridesmaid7 from "@/assets/bridesmaid-7.jpg";
import groomsman1Asset from "@/assets/groomsman-1.jpg.asset.json";
import groomsman2Asset from "@/assets/groomsman-2.jpg.asset.json";
import groomsman3Asset from "@/assets/groomsman-3.jpg.asset.json";
import groomsman4Asset from "@/assets/groomsman-4.jpg.asset.json";
import groomsman5Asset from "@/assets/groomsman-5.jpg.asset.json";
import groomsman6Asset from "@/assets/groomsman-6.jpg.asset.json";
import groomsman7Asset from "@/assets/groomsman-7.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abin & Rinta — Wedding Invitation | 5 November 2026" },
      {
        name: "description",
        content:
          "Abin Jacob and Rinta Ansu Kuriakose invite you to their engagement on 29 October 2026 and wedding on 5 November 2026 at St Basil Church, Manimala.",
      },
      { property: "og:title", content: "Abin & Rinta — Wedding Invitation" },
      {
        property: "og:description",
        content:
          "Engagement 29 October 2026 · Wedding 5 November 2026, St Basil Church, Manimala. You are lovingly invited.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Invitation,
});

const events = [
  {
    tag: "Engagement",
    date: "29 October 2026",
    day: "Thursday",
    items: [
      {
        time: "4:00 PM",
        title: "Betrothal Ceremony",
        venue: "Little Flower Church, Kaduvakulam",
        map: "https://share.google/jQsZTUKE0HRxv4hmi",
      },
      {
        time: "6:00 PM",
        title: "Reception",
        venue: "The Windsor Castle, Nalukettu, Kottayam",
        map: "https://share.google/IhPZjSVFo1bmajgKg",
      },
      {
        time: "7:30 PM",
        title: "Rinta's Mailanji",
        venue: "The Windsor Castle, Nalukettu, Kottayam",
        map: "https://share.google/IhPZjSVFo1bmajgKg",
      },
    ],
  },
  {
    tag: "Wedding",
    date: "5 November 2026",
    day: "Thursday",
    items: [
      {
        time: "3:30 PM",
        title: "Holy Matrimony",
        venue: "St Basil Church, Manimala",
        map: "https://share.google/l5bQERitQ1SxEo75Z",
      },
      {
        time: "Followed by",
        title: "Reception",
        venue: "Holy Magi Forane Church Auditorium, Manimala",
        map: "https://share.google/JfIEzqDlMT8Z95mO5",
      },
    ],
  },
];

const dressCode = [
  {
    side: "Bride's Side",
    note: "Bridesmaids",
    colors: [
      { name: "Dusty Rose", hex: "#C9A0A4" },
      { name: "Champagne", hex: "#E7D6BC" },
    ],
  },
  {
    side: "Groom's Side",
    note: "Groomsmen",
    colors: [
      { name: "Deep Emerald", hex: "#22453B" },
      { name: "Antique Gold", hex: "#B08A45" },
    ],
  },
];

const bridesmaids = [
  { name: "Raima Johnny", photo: bridesmaid1 },
  { name: "Angela Merin Tom", photo: bridesmaid2 },
  { name: "Dona Christy", photo: bridesmaid3 },
  { name: "Aryamol Sajeev", photo: bridesmaid4 },
  { name: "Saina Saji", photo: bridesmaid5 },
  { name: "Anugraha Ann", photo: bridesmaid6 },
  { name: "Reva Mariam", photo: bridesmaid7 },
];
const groomsmen = [
  { name: "Sidhu K S", photo: groomsman1Asset.url },
  { name: "Anil Abraham", photo: groomsman2Asset.url },
  { name: "Rohan Varghese", photo: groomsman3Asset.url },
  { name: "Mobin Thomas", photo: groomsman4Asset.url },
  { name: "Geevarghese Joffy", photo: groomsman5Asset.url },
  { name: "Jerry Alexander", photo: groomsman6Asset.url },
  { name: "Ashish PV", photo: groomsman7Asset.url },
];

const kidsTeam = ["Zairah", "Zakh", "Jermariah", "Don Paul"];

function PartyMember({
  person,
  index,
}: {
  person: { name: string; photo: string | null };
  index: number;
}) {
  return (
    <Reveal delay={index * 90} className="flex flex-col items-center gap-3">
      <div className="relative h-24 w-24 overflow-hidden rounded-full border border-primary/40 bg-secondary/60 ring-4 ring-card sm:h-28 sm:w-28">
        {person.photo ? (
          <img
            src={person.photo}
            alt={person.name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-script text-3xl text-primary/60">
              {person.name.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <p className="font-caps text-[0.55rem] tracking-[0.22em] text-muted-foreground uppercase">
        {person.name}
      </p>
    </Reveal>
  );
}

function Ornament() {
  return (
    <img
      src={divider}
      alt=""
      aria-hidden
      loading="lazy"
      width={1024}
      height={512}
      className="mx-auto w-40 opacity-70 sm:w-56"
    />
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="text-center">
      <p className="font-caps text-[0.6rem] tracking-[0.45em] text-primary uppercase">{kicker}</p>
      <h2 className="font-display mt-3 text-3xl text-foreground sm:text-4xl">{title}</h2>
      <div className="gold-rule mx-auto mt-5 w-24" />
    </div>
  );
}

function Invitation() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <PetalRain />

      {/* Landing gate */}
      <div
        className={`fixed inset-0 z-40 overflow-hidden bg-background text-center transition-all duration-1000 ${
          opened ? "pointer-events-none -translate-y-6 opacity-0" : "opacity-100"
        }`}
      >
        <img
          src={coupleCover}
          alt="Abin and Rinta"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/58" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background/85" />
        <div className="pointer-events-none absolute inset-3 z-20 border border-foreground/30 sm:inset-5" />
        <div className="pointer-events-none absolute inset-[18px] z-20 border border-foreground/15 sm:inset-7" />

        <div className="relative z-30 mx-auto flex h-full max-w-2xl flex-col items-center justify-between px-9 py-[7svh] sm:py-[8svh]">
          <div className="animate-rise">
            <p className="font-caps text-[0.52rem] tracking-[0.44em] text-foreground/75 uppercase sm:text-[0.6rem]">
              With love
            </p>
            <h1 className="font-script mt-2 text-6xl leading-none text-foreground drop-shadow-sm sm:text-8xl">
              Abin <span className="text-primary">&amp;</span> Rinta
            </h1>
            <p className="font-caps mt-4 text-[0.55rem] tracking-[0.38em] text-foreground/80 uppercase sm:text-[0.65rem]">
              Two hearts · One beautiful journey
            </p>
          </div>

          <div className="animate-rise flex flex-col items-center" style={{ animationDelay: "180ms" }}>
            <p className="font-caps mb-5 text-[0.58rem] tracking-[0.36em] text-foreground uppercase sm:text-[0.68rem]">
              5 November 2026
            </p>
            <Countdown
              target="2026-11-05T15:30:00+05:30"
              label="Counting down to the wedding day"
              compact
            />
          </div>

          <Button
            onClick={() => setOpened(true)}
            variant="outline"
            className="font-caps h-auto rounded-none border-foreground/45 bg-background/65 px-8 py-3 text-[0.56rem] tracking-[0.32em] text-foreground uppercase shadow-lg backdrop-blur-md hover:bg-background/85 sm:px-10 sm:text-[0.62rem]"
          >
            Open Invitation
          </Button>
        </div>
      </div>

      {/* Hero */}
      <header className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6">
        <img
          src={heroFloral}
          alt="Watercolour magnolia and rose border"
          width={1024}
          height={1536}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/65" />
        <div className="animate-rise relative z-10 max-w-xl text-center">
          <p className="font-caps text-[0.6rem] tracking-[0.5em] text-muted-foreground uppercase">
            The Wedding Celebration of
          </p>
          <h1 className="font-script mt-6 text-6xl leading-[1.05] text-foreground sm:text-8xl">
            Abin
          </h1>
          <p className="font-display my-2 text-2xl text-primary">and</p>
          <h1 className="font-script text-6xl leading-[1.05] text-foreground sm:text-8xl">Rinta</h1>
          <Ornament />
          <p className="font-caps text-[0.7rem] tracking-[0.38em] text-foreground uppercase">
            5 November 2026
          </p>
          <p className="mt-3 text-lg text-muted-foreground italic">St Basil Church, Manimala</p>
        </div>
      </header>

      {/* Verse */}
      <section className="relative z-10 px-6 py-20 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-2xl leading-relaxed text-foreground sm:text-3xl">
            “Therefore what God has joined together, let no one separate.”
          </p>
          <p className="font-caps mt-6 text-[0.6rem] tracking-[0.4em] text-primary uppercase">
            Mark 10:9
          </p>
        </Reveal>
      </section>

      {/* Couple & families */}
      <section className="relative z-10 px-6 pb-20 sm:pb-28">
        <SectionTitle kicker="With the blessings of" title="Our Families" />
        <div className="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-2">
          {[
            {
              role: "The Groom",
              name: "Abin Jacob",
              parents: "S/o Varghese Chacko & Leelamma Chacko",
              house: "Thottiyil House, Kadayanikkadu, Kottayam",
            },
            {
              role: "The Bride",
              name: "Rinta Ansu Kuriakose",
              parents: "D/o Late T. C. Kuriakose & Sobhana Kuriakose",
              house: "Thengelimannil House, Eraviperoor, Thiruvalla",
            },
          ].map((p, i) => (
            <Reveal key={p.name} delay={i * 150}>
              <article className="card-paper h-full px-8 py-10 text-center">
                <p className="font-caps text-[0.58rem] tracking-[0.4em] text-primary uppercase">
                  {p.role}
                </p>
                <h3 className="font-script mt-4 text-4xl text-foreground">{p.name}</h3>
                <div className="gold-rule mx-auto my-6 w-16" />
                <p className="text-lg text-muted-foreground">{p.parents}</p>
                <p className="mt-2 text-base text-muted-foreground italic">{p.house}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Countdown */}
      <section className="relative z-10 border-y border-primary/20 bg-secondary/40 px-6 py-16">
        <Reveal>
          <Countdown target="2026-11-05T15:30:00+05:30" label="Counting down to the wedding day" />
        </Reveal>
      </section>

      {/* Events */}
      <section className="relative z-10 px-6 py-20 sm:py-28">
        <SectionTitle kicker="Save the dates" title="Celebrations" />
        <div className="mx-auto mt-14 grid max-w-5xl gap-10 lg:grid-cols-2">
          {events.map((ev, idx) => (
            <Reveal key={ev.tag} delay={idx * 150}>
              <div className="card-paper h-full px-7 py-10 sm:px-10">
                <div className="text-center">
                  <p className="font-caps text-[0.58rem] tracking-[0.42em] text-primary uppercase">
                    {ev.tag}
                  </p>
                  <h3 className="font-display mt-3 text-3xl text-foreground">{ev.date}</h3>
                  <p className="mt-1 text-base text-muted-foreground italic">{ev.day}</p>
                </div>
                <div className="mt-9 space-y-8">
                  {ev.items.map((it) => (
                    <div key={it.title} className="border-l border-primary/35 pl-5">
                      <p className="font-caps text-[0.6rem] tracking-[0.3em] text-primary uppercase">
                        {it.time}
                      </p>
                      <h4 className="font-display mt-2 text-xl text-foreground">{it.title}</h4>
                      <p className="mt-1 text-lg text-muted-foreground">{it.venue}</p>
                      <a
                        href={it.map}
                        target="_blank"
                        rel="noreferrer"
                        className="font-caps mt-3 inline-block border-b border-primary/50 pb-0.5 text-[0.58rem] tracking-[0.28em] text-foreground uppercase transition-colors hover:text-primary"
                      >
                        View location
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Wedding party */}
      <section className="relative z-10 px-6 py-20 sm:py-28">
        <SectionTitle kicker="Standing with us" title="The Wedding Party" />
        <div className="mx-auto mt-14 grid max-w-5xl gap-12 lg:grid-cols-2">
          <div>
            <h3 className="font-script text-center text-4xl text-foreground">Bridesmaids</h3>
            <div className="gold-rule mx-auto mt-5 w-20" />
            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3">
              {bridesmaids.map((p, i) => (
                <PartyMember key={p.name} person={p} index={i} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-script text-center text-4xl text-foreground">Groomsmen</h3>
            <div className="gold-rule mx-auto mt-5 w-20" />
            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3">
              {groomsmen.map((p, i) => (
                <PartyMember key={p.name} person={p} index={i} />
              ))}
            </div>
            <Reveal delay={300} className="mt-14 text-center">
              <p className="font-caps text-[0.58rem] tracking-[0.38em] text-primary uppercase">
                Best compliments from
              </p>
              <h4 className="font-script mt-3 text-4xl text-foreground">Our Kids Team</h4>
              <div className="gold-rule mx-auto mt-5 w-20" />
              <div className="mt-6 flex flex-wrap justify-center gap-x-7 gap-y-3">
                {kidsTeam.map((name) => (
                  <span key={name} className="font-display text-lg text-muted-foreground">
                    {name}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Colour code */}
      <section className="relative z-10 border-y border-primary/20 bg-secondary/40 px-6 py-20 sm:py-28">
        <SectionTitle kicker="Dress in celebration" title="Colour Code" />
        <div className="mx-auto mt-14 grid max-w-3xl gap-8 sm:grid-cols-2">
          {dressCode.map((d, i) => (
            <Reveal key={d.side} delay={i * 150}>
              <div className="card-paper px-8 py-10 text-center">
                <p className="font-caps text-[0.58rem] tracking-[0.4em] text-primary uppercase">
                  {d.note}
                </p>
                <h3 className="font-display mt-3 text-2xl text-foreground">{d.side}</h3>
                <div className="mt-8 flex justify-center gap-6">
                  {d.colors.map((c) => (
                    <div key={c.name} className="flex flex-col items-center gap-3">
                      <span
                        className="h-16 w-16 rounded-full ring-1 ring-primary/40 ring-offset-4 ring-offset-card"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span className="font-caps text-[0.55rem] tracking-[0.22em] text-muted-foreground uppercase">
                        {c.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className="mx-auto mt-12 max-w-xl text-center text-lg text-muted-foreground italic">
            Our seven bridesmaids and seven groomsmen will be dressed in these colours.
          </p>
        </Reveal>
      </section>

      {/* Closing */}
      <footer className="relative z-10 px-6 py-24 text-center">
        <Reveal>
          <p className="font-caps text-[0.6rem] tracking-[0.45em] text-muted-foreground uppercase">
            With love and gratitude
          </p>
          <h2 className="font-script mt-6 text-5xl text-foreground sm:text-6xl">Abin &amp; Rinta</h2>
          <Ornament />
          <p className="mx-auto max-w-md text-lg text-muted-foreground">
            Your presence and prayers will make our celebration complete.
          </p>
        </Reveal>
      </footer>
    </div>
  );
}
