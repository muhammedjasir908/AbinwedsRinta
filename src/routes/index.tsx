import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { PetalRain } from "@/components/PetalRain";
import { Countdown } from "@/components/Countdown";
import { Reveal } from "@/components/Reveal";
import { KidsTeam, WeddingParty, type PartyMemberData } from "@/components/WeddingParty";
import { FamilyBlessings } from "@/components/FamilyBlessings";
import { GallerySection } from "@/components/GallerySection";
import { BgmPlayer, type BgmPlayerHandle } from "@/components/BgmPlayer";
import { BrandLogo } from "@/components/BrandLogo";
import {
  OG_IMAGE_URL,
  SITE_DESCRIPTION,
  SITE_PAGE_TITLE,
  SITE_TITLE,
  absoluteUrl,
} from "@/lib/site";
import coupleCover from "@/assets/couple-cover.webp";
import groom from "@/assets/groom.webp";
import bride from "@/assets/bride.webp";
import bridesmaid1 from "@/assets/bridesmaid-1.webp";
import bridesmaid2 from "@/assets/bridesmaid-2.webp";
import bridesmaid3 from "@/assets/bridesmaid-3.webp";
import bridesmaid4 from "@/assets/bridesmaid-4.webp";
import bridesmaid5 from "@/assets/bridesmaid-5.webp";
import bridesmaid6 from "@/assets/bridesmaid-6.webp";
import bridesmaid7 from "@/assets/bridesmaid-7.webp";
import bridesmaid8 from "@/assets/bridesmaid-8.webp";
import groomsman1 from "@/assets/groomsman-1.webp";
import groomsman2 from "@/assets/groomsman-2.webp";
import groomsman3 from "@/assets/groomsman-3.webp";
import groomsman4 from "@/assets/groomsman-4.webp";
import groomsman5 from "@/assets/groomsman-5.webp";
import groomsman6 from "@/assets/groomsman-6.webp";
import groomsman7 from "@/assets/groomsman-7.webp";
import groomsman8 from "@/assets/groomsman-8.webp";
import engagementColor from "@/assets/engagement-color.webp";
import weddingColor from "@/assets/wedding-color.webp";
import zairahAndZakh from "@/assets/Zairah-and-Zakh.webp";
import jeremiah from "@/assets/Jeremiah.webp";
import donPaul from "@/assets/Don-Paul.webp";
import img1 from "@/assets/img-1.webp";
import img2 from "@/assets/img-2.webp";
import img3 from "@/assets/img-3.webp";
import img4 from "@/assets/img-4.webp";
import img5 from "@/assets/img-5.webp";
import img6 from "@/assets/img-6.webp";
import img7 from "@/assets/img-7.webp";

export const Route = createFileRoute("/")({
  head: () => {
    const pageUrl = absoluteUrl("");
    return {
      meta: [
        { title: SITE_PAGE_TITLE },
        { name: "description", content: SITE_DESCRIPTION },
        { property: "og:title", content: SITE_TITLE },
        { property: "og:description", content: SITE_DESCRIPTION },
        { property: "og:type", content: "website" },
        { property: "og:url", content: pageUrl },
        { property: "og:site_name", content: "Abin & Rinta" },
        { property: "og:image", content: OG_IMAGE_URL },
        { property: "og:image:secure_url", content: OG_IMAGE_URL },
        { property: "og:image:type", content: "image/jpeg" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: "Abin and Rinta wedding invitation" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: SITE_TITLE },
        { name: "twitter:description", content: SITE_DESCRIPTION },
        { name: "twitter:image", content: OG_IMAGE_URL },
      ],
    };
  },
  component: Invitation,
});

const occasions = [
  {
    num: "01",
    title: "Engagement",
    rows: [
      {
        icon: "calendar" as const,
        label: "Date & time",
        value: (
          <>
            Thursday,{" "}
            <span className="font-body font-bold">29th October 2026</span>
          </>
        ),
        sub: "4:00 PM onwards",
      },
      {
        icon: "pin" as const,
        label: "Ceremony",
        value: "Little Flower Church, Kaduvakulam",
        sub: "Betrothal · 4:00 PM",
      },
      {
        icon: "pin" as const,
        label: "Reception",
        value: "The Windsor Castle, Nalukettu, Kottayam",
        sub: "6:00 PM · Rinta's Mailanji at 7:30 PM",
      },
    ],
    actions: [
      {
        label: "Church directions",
        href: "https://share.google/jQsZTUKE0HRxv4hmi",
        primary: true,
      },
      {
        label: "Reception directions",
        href: "https://share.google/IhPZjSVFo1bmajgKg",
        primary: false,
      },
    ],
  },
  {
    num: "02",
    title: "Wedding",
    rows: [
      {
        icon: "calendar" as const,
        label: "Date",
        value: (
          <>
            Thursday,{" "}
            <span className="font-body font-bold">5th November 2026</span>
          </>
        ),
        sub: "3:30 PM onwards",
      },
      {
        icon: "pin" as const,
        label: "Ceremony",
        value: "St Basil Church, Manimala",
        sub: "Holy Matrimony · 3:30 PM",
      },
      {
        icon: "pin" as const,
        label: "Reception",
        value: "Holy Magi Forane Church Auditorium, Manimala",
        sub: "6:00 PM onwards",
      },
    ],
    actions: [
      {
        label: "Church directions",
        href: "https://share.google/l5bQERitQ1SxEo75Z",
        primary: true,
      },
      {
        label: "Reception directions",
        href: "https://share.google/JfIEzqDlMT8Z95mO5",
        primary: false,
      },
    ],
  },
];

const dressCode = [
  {
    event: "Engagement",
    note: (
      <>
        Thursday, <span className="font-bold not-italic">29 October</span> 2026
      </>
    ),
    image: engagementColor,
    alt: "Engagement colour palette",
  },
  {
    event: "Wedding",
    note: (
      <>
        Thursday, <span className="font-bold not-italic">5 November</span> 2026
      </>
    ),
    image: weddingColor,
    alt: "Wedding colour palette",
  },
];

const bridesmaids: PartyMemberData[] = [
  {
    name: "Raima Johnny",
    photo: bridesmaid1,
    gradient: "linear-gradient(135deg, #c76b8e, #eab4c4)",
  },
  {
    name: "Angela Merin Tom",
    photo: bridesmaid2,
    gradient: "linear-gradient(135deg, #d885a0, #f0b9cb)",
  },
  {
    name: "Dona Christy",
    photo: bridesmaid3,
    gradient: "linear-gradient(135deg, #d07a99, #eeb6c8)",
  },
  {
    name: "Aryamol Sajeev",
    photo: bridesmaid4,
    gradient: "linear-gradient(135deg, #cf7c98, #e9aec0)",
  },
  {
    name: "Saina Saji",
    photo: bridesmaid5,
    gradient: "linear-gradient(135deg, #c96f90, #ecb2c6)",
  },
  {
    name: "Anugraha Ann",
    photo: bridesmaid6,
    gradient: "linear-gradient(135deg, #dc8aa6, #f2bdce)",
  },
  {
    name: "Reva Mariam",
    photo: bridesmaid7,
    gradient: "linear-gradient(135deg, #cb7394, #eeb4c7)",
  },
  {
    name: "Sheethal Mathew",
    photo: bridesmaid8,
    gradient: "linear-gradient(135deg, #d47a9a, #efb6c9)",
  },
];

const groomsmen: PartyMemberData[] = [
  {
    name: "Sidhu K S",
    photo: groomsman1,
    gradient: "linear-gradient(135deg, #12203c, #3c5a8a)",
  },
  {
    name: "Anil Abraham",
    photo: groomsman2,
    gradient: "linear-gradient(135deg, #1a3a6b, #6e9ac9)",
  },
  {
    name: "Rohan Varghese",
    photo: groomsman3,
    gradient: "linear-gradient(135deg, #162e58, #5a88b5)",
  },
  {
    name: "Mobin Thomas",
    photo: groomsman4,
    gradient: "linear-gradient(135deg, #1a2858, #5880b0)",
  },
  {
    name: "Geevarghese Joffy",
    photo: groomsman5,
    gradient: "linear-gradient(135deg, #163052, #5a86b0)",
  },
  {
    name: "Jerry Alexander",
    photo: groomsman6,
    gradient: "linear-gradient(135deg, #14264a, #4a72a4)",
  },
  {
    name: "Ashish PV",
    photo: groomsman7,
    gradient: "linear-gradient(135deg, #18325c, #6090c0)",
  },
  {
    name: "Subin Mathew",
    photo: groomsman8,
    gradient: "linear-gradient(135deg, #1a365e, #5a82b8)",
  },
];

const kidsTeam = [
  {
    name: "Zairah & Zakh",
    photo: zairahAndZakh,
    wide: true,
    gradient: "linear-gradient(135deg, #d18aa8, #f0bcd0)",
  },
  {
    name: "Jeremiah",
    photo: jeremiah,
    gradient: "linear-gradient(135deg, #1a3a6b, #6e9ac9)",
  },
  {
    name: "Don Paul",
    photo: donPaul,
    gradient: "linear-gradient(135deg, #162e58, #5a88b5)",
  },
];

const families = [
  {
    name: "Abin",
    role: "The Groom",
    place: "Kadayanikkadu, Kottayam",
    photo: groom,
    groups: [
      {
        label: "Parents",
        people: ["T.V Chacko & Leelamma Chacko"],
      },
      {
        label: "Siblings",
        people: ["Tisha Jacob (Sister)", "Mathew C B (Brother-in-law)"],
      },
      {
        label: "Nephews",
        people: ["Martin Paul & Don Paul"],
      },
    ],
  },
  {
    name: "Rinta",
    role: "The Bride",
    place: "Eraviperoor, Thiruvalla",
    photo: bride,
    groups: [
      {
        label: "Parents",
        people: ["P.P. Mathew & Sobhana Kuriakose"],
      },
      {
        label: "Siblings",
        people: [
          "Binta Alin Kuriakose (Sister)",
          "Linta Susan Kuriakose (Sister)",
          "Prince Joseph (Brother-in-law)",
          "Tijo Thomas (Brother-in-law)",
        ],
      },
      {
        label: "Niece & Nephews",
        people: ["Zairah, Zakh and Jeremiah"],
      },
    ],
  },
];

const galleryImages = [
  { src: img1, alt: "Abin & Rinta — Moment 1" },
  { src: img2, alt: "Abin & Rinta — Moment 2" },
  { src: img3, alt: "Abin & Rinta — Moment 3" },
  { src: img4, alt: "Abin & Rinta — Moment 4" },
  { src: img5, alt: "Abin & Rinta — Moment 5" },
  { src: img6, alt: "Abin & Rinta — Moment 6" },
  { src: img7, alt: "Abin & Rinta — Moment 7" },
];

function Divider() {
  return (
    <div className="mx-auto my-10 flex max-w-[180px] items-center justify-center gap-3.5">
      <span className="h-px flex-1 bg-primary/30" />
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
      <span className="h-px flex-1 bg-primary/30" />
    </div>
  );
}

function SectionTitle({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <div className="px-6 text-center">
      {kicker ? (
        <p className="font-caps text-[0.8rem] font-medium tracking-[0.28em] text-primary uppercase">
          — {kicker} —
        </p>
      ) : null}
      <h2
        className={`font-script text-[3.25rem] leading-[1.08] text-foreground sm:text-6xl ${kicker ? "mt-3" : ""}`}
      >
        {title}
      </h2>
    </div>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function WatercolorBg() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="wc-clouds" x="-15%" y="-15%" width="130%" height="130%" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.016" numOctaves="4" seed="14" stitchTiles="stitch" result="n" />
            <feColorMatrix in="n" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 -1.7 1.25" result="m" />
            <feGaussianBlur in="m" stdDeviation="1.2" />
          </filter>
        </defs>
        <rect width="100%" height="100%" fill="#f5dce6" />
        <rect width="100%" height="100%" filter="url(#wc-clouds)" />
      </svg>
    </div>
  );
}

function Invitation() {
  const [opened, setOpened] = useState(false);
  const bgmRef = useRef<BgmPlayerHandle>(null);

  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  const openInvite = () => {
    setOpened(true);
    bgmRef.current?.play();
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <WatercolorBg />
      <PetalRain />
      <BgmPlayer ref={bgmRef} />

      {/* Landing gate */}
      <div
        className={`fixed inset-0 z-40 overflow-hidden bg-[#fdf3f6] text-center transition-all duration-1000 ${
          opened ? "pointer-events-none -translate-y-6 opacity-0" : "opacity-100"
        }`}
      >
        <img
          src={coupleCover}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[50%_18%] opacity-80"
        />
        <div className="absolute inset-0 bg-[#fdf3f6]/40" />
        <div className="pointer-events-none absolute inset-5 z-20 border border-foreground/30 sm:inset-6" />
        <div className="pointer-events-none absolute inset-7 z-20 border border-foreground/15 sm:inset-8" />
        <span className="pointer-events-none absolute top-7 left-7 z-20 h-12 w-12 border-t-2 border-l-2 border-primary sm:top-8 sm:left-8" />
        <span className="pointer-events-none absolute top-7 right-7 z-20 h-12 w-12 border-t-2 border-r-2 border-primary sm:top-8 sm:right-8" />
        <span className="pointer-events-none absolute bottom-7 left-7 z-20 h-12 w-12 border-b-2 border-l-2 border-primary sm:bottom-8 sm:left-8" />
        <span className="pointer-events-none absolute right-7 bottom-7 z-20 h-12 w-12 border-r-2 border-b-2 border-primary sm:right-8 sm:bottom-8" />

        <div className="relative z-30 mx-auto flex min-h-full max-w-2xl flex-col items-center justify-center gap-3 px-6 pt-6 pb-[18svh] sm:gap-4 sm:pb-[16svh]">
          <div className="animate-rise flex flex-col items-center">
            <span className="font-caps border border-primary px-3.5 py-1 text-[0.7rem] font-medium tracking-[0.32em] text-primary uppercase">
              November 2026
            </span>
            <div className="mt-3">
              <BrandLogo size={56} />
            </div>
            <p className="font-caps mt-2 text-[0.78rem] font-medium tracking-[0.32em] text-primary uppercase">
              — With love —
            </p>
            <h1 className="font-script mt-1 text-[3.6rem] leading-[0.95] text-foreground sm:text-8xl md:text-9xl">
              Abin
              <span className="font-amp my-0.5 block text-[0.42em] text-primary italic">&amp;</span>
              Rinta
            </h1>
            <p className="mt-1 max-w-[28ch] text-lg text-muted-foreground italic sm:text-xl">
              Two hearts, one beautiful journey.
            </p>
          </div>

          <div className="animate-rise mt-1 flex flex-col items-center" style={{ animationDelay: "180ms" }}>
            <p className="font-caps mb-2 text-[0.95rem] font-semibold tracking-[0.22em] text-primary uppercase sm:text-lg">
              5 November 2026
            </p>
            <div className="mx-auto mb-2 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-primary/50" />
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="h-px w-12 bg-primary/50" />
            </div>
            <Countdown
              target="2026-11-05T15:30:00+05:30"
              label="Counting down to the wedding day"
              compact
            />
          </div>

          <div className="mt-2 flex flex-col items-center">
            <button onClick={openInvite} className="enter-btn cursor-pointer">
              <span>Open invitation</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <p className="font-caps mt-3 text-[0.72rem] tracking-[0.28em] text-muted-foreground uppercase">
              Two hearts · One love
            </p>
          </div>
        </div>
      </div>

      <div className={opened ? "" : "hidden"} aria-hidden={!opened} hidden={!opened}>

      {/* Hero — wedding celebration */}
      <header className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6">
        <img
          src={coupleCover}
          alt="Abin and Rinta"
          className="absolute inset-0 h-full w-full object-cover object-[50%_18%]"
        />
        <div className="absolute inset-0 bg-[#fdf3f6]/18" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdf3f6]/12 via-[#fdf3f6]/22 to-[#fdf3f6]/48" />
        <div className="animate-rise relative z-10 max-w-xl text-center">
          <BrandLogo size={56} className="mx-auto mb-5" />
          <p className="font-caps text-sm font-semibold tracking-[0.32em] text-primary uppercase sm:text-base">
            The Wedding Celebration of
          </p>
          <h1 className="font-script mt-5 text-7xl leading-[1.05] text-foreground sm:text-8xl md:text-9xl">
            Abin
          </h1>
          <p className="font-amp my-1 text-2xl text-primary italic sm:text-3xl">and</p>
          <h1 className="font-script text-7xl leading-[1.05] text-foreground sm:text-8xl md:text-9xl">
            Rinta
          </h1>
          <Divider />
          <p className="font-caps text-base font-semibold tracking-[0.28em] text-foreground uppercase sm:text-lg">
            5 November 2026
          </p>
          <p className="mt-2 text-lg text-muted-foreground italic sm:text-xl">
            St Basil Church, Manimala
          </p>
        </div>
        <a
          href="#invitation"
          className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center justify-center text-foreground"
          aria-label="Scroll down to see invitation details"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-scroll-hint h-8 w-8 motion-reduce:animate-none"
            aria-hidden
          >
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </header>

      {/* Invite letter */}
      <section id="invitation" className="relative z-10 border-b border-primary/20 px-6 py-16 text-center sm:py-20">
        <Reveal>
          <p className="font-caps text-[0.8rem] font-medium tracking-[0.28em] text-primary uppercase">
            — Wedding invitation —
          </p>
          <p className="mx-auto mt-6 max-w-[40ch] text-xl leading-relaxed text-foreground italic sm:text-[1.35rem]">
            Together with our families, we joyfully invite you to witness and bless our union as we begin this
            beautiful journey together.
          </p>
          <Divider />
        </Reveal>
      </section>

      {/* Date bar + numbers */}
      <section className="relative z-10 border-b border-primary/20">
        <Reveal>
          <div className="bg-[#1a2744] px-6 py-5 text-center">
            <p className="font-caps text-[0.85rem] font-medium tracking-[0.28em] text-[#fff5f8] uppercase">
              5 November 2026
            </p>
            <p className="font-caps mt-2 text-[0.8rem] tracking-[0.24em] text-[#fff5f8]/90 uppercase">
              Manimala · Kottayam
            </p>
          </div>
          <div className="mx-auto flex max-w-md items-stretch px-4 py-10">
            {[
              { n: "05", l: "Day" },
              { n: "11", l: "Month" },
              { n: "26", l: "Year" },
            ].map((item, i) => (
              <div key={item.l} className="flex flex-1 items-stretch">
                {i > 0 && <span className="my-2 w-px bg-primary/25" />}
                <div className="flex-1 px-2 text-center">
                  <p className="font-display text-6xl leading-none text-foreground sm:text-7xl">{item.n}</p>
                  <p className="font-caps mt-3 text-[0.75rem] font-medium tracking-[0.28em] text-muted-foreground uppercase">
                    {item.l}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Verse */}
      <section className="relative z-10 border-b border-primary/20 px-6 py-16 text-center sm:py-20">
        <Reveal className="mx-auto max-w-lg">
          <p className="font-caps text-[0.8rem] font-medium tracking-[0.28em] text-primary uppercase">
            — His word —
          </p>
          <div className="verse-block mx-auto mt-6 max-w-xl text-left">
            <p className="text-xl leading-relaxed text-foreground italic sm:text-[1.35rem]">
              “Therefore what God has joined together, let no one separate.”
            </p>
            <p className="font-caps mt-3 text-[0.75rem] font-semibold tracking-[0.22em] text-primary uppercase">
              Mark 10:9
            </p>
          </div>
        </Reveal>
      </section>

      {/* The couple */}
      <section className="relative z-10 border-b border-primary/20 px-6 py-16 text-center sm:py-24">
        <Reveal>
          <p className="font-caps text-[0.8rem] font-medium tracking-[0.28em] text-primary uppercase">
            — The couple —
          </p>
          <h2 className="font-script mt-4 text-[4rem] leading-[0.95] text-foreground sm:text-8xl">
            Abin <span className="font-amp text-[0.48em] text-primary italic">&amp;</span> Rinta
          </h2>

          <div className="mx-auto mt-12 max-w-md">
            <p className="font-caps text-[0.8rem] font-medium tracking-[0.32em] text-primary uppercase">
              Groom
            </p>
            <h3 className="font-script mt-3 text-5xl leading-tight text-foreground sm:text-6xl">Abin Jacob</h3>
            <p className="mt-4 text-xl leading-loose text-muted-foreground italic">
              S/o T.V Chacko &amp; Leelamma Chacko
              <br />
              Thottiyil House, Kadayanikkadu, Kottayam
            </p>
          </div>

          <Divider />

          <div className="mx-auto max-w-md">
            <p className="font-caps text-[0.8rem] font-medium tracking-[0.32em] text-primary uppercase">
              Bride
            </p>
            <h3 className="font-script mt-3 text-5xl leading-tight text-foreground sm:text-6xl">
              Rinta Ansu Kuriakose
            </h3>
            <p className="mt-4 text-xl leading-loose text-muted-foreground italic">
              D/o Late T. C. Kuriakose &amp; Sobhana Kuriakose
              <br />
              Thengelimannil House, Eraviperoor, Thiruvalla
            </p>
          </div>
        </Reveal>
      </section>

      {/* Occasions */}
      <section className="relative z-10 border-b border-primary/20 px-5 py-16 sm:px-6 sm:py-24">
        <SectionTitle kicker="The occasions" title="Join Us" />
        <p className="mx-auto mt-4 max-w-[38ch] px-4 text-center text-xl leading-relaxed text-muted-foreground italic">
          Join us to witness this blessed union and share in our joy.
        </p>

        <div className="mx-auto mt-10 max-w-xl space-y-4">
          {occasions.map((ev, idx) => (
            <Reveal key={ev.title} delay={idx * 120}>
              <article className="card-paper rounded-xl px-5 py-6 sm:px-6">
                <div className="mb-4 flex items-center gap-3 border-b border-dashed border-foreground/20 pb-4">
                  <span className="font-caps flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1a2744] text-[0.7rem] font-medium text-[#fff5f8]">
                    {ev.num}
                  </span>
                  <h3 className="font-caps text-[0.85rem] font-medium tracking-[0.22em] text-foreground uppercase">
                    {ev.title}
                  </h3>
                </div>
                <div className="space-y-3.5">
                  {ev.rows.map((row) => (
                    <div key={row.label} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-foreground/20 bg-foreground/5 text-primary">
                        {row.icon === "calendar" ? <CalendarIcon /> : <PinIcon />}
                      </span>
                      <div className="min-w-0 flex-1 text-left">
                        <p className="font-caps text-[0.72rem] font-medium tracking-[0.2em] text-muted-foreground uppercase">
                          {row.label}
                        </p>
                        <p
                          className={`mt-0.5 leading-snug text-foreground ${
                            row.icon === "calendar"
                              ? "font-body text-[1.28rem]"
                              : "font-display text-[1.2rem]"
                          }`}
                        >
                          {row.value}
                        </p>
                        {row.sub && (
                          <p className="mt-0.5 text-[1.05rem] text-muted-foreground italic">{row.sub}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {ev.actions.map((action) => (
                    <a
                      key={action.label}
                      href={action.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`event-action ${
                        action.primary
                          ? "bg-[#1a2744] text-[#fff5f8] hover:bg-[#253459]"
                          : "border border-foreground/25 text-foreground hover:border-foreground"
                      }`}
                    >
                      <PinIcon />
                      {action.label}
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Countdown */}
      <section className="relative z-10 border-b border-primary/20 bg-secondary/50 px-6 py-16">
        <Reveal>
          <Countdown target="2026-11-05T15:30:00+05:30" label="Counting down to the wedding day" />
        </Reveal>
      </section>

      {/* Gallery */}
      <GallerySection images={galleryImages} />

      {/* Families */}
      <section className="relative z-10 border-b border-primary/20 px-6 py-16 sm:py-24">
        <SectionTitle kicker="Meet our families" title="With Blessings From" />
        <FamilyBlessings families={families} />
      </section>

      {/* Wedding party */}
      <WeddingParty groomsmen={groomsmen} bridesmaids={bridesmaids} />

      {/* Kids */}
      <section className="relative z-10 border-b border-primary/20 px-6 py-16 sm:py-24">
        <KidsTeam kids={kidsTeam} />
      </section>

      {/* Colour code */}
      <section className="relative z-10 border-y border-primary/20 bg-secondary/40 px-6 py-16 sm:py-24">
        <SectionTitle kicker="Dress code" title="Colour Code" />
        <p className="mx-auto mt-4 max-w-[40ch] text-center text-xl leading-relaxed text-muted-foreground italic">
          We kindly encourage our guests to wear these colours for our special days.
        </p>
        <div className="mx-auto mt-12 grid max-w-md gap-6 sm:max-w-lg">
          {dressCode.map((d, i) => (
            <Reveal key={d.event} delay={i * 150}>
              <article className="card-paper overflow-hidden p-3 text-center sm:p-4">
                <h3 className="font-script pt-3 text-4xl text-foreground">{d.event}</h3>
                <p className="mt-2 text-[1.05rem] text-muted-foreground italic">{d.note}</p>
                <div className="mt-5 overflow-hidden rounded-[14px] border border-primary/20 bg-card">
                  <img
                    src={d.image}
                    alt={d.alt}
                    loading="lazy"
                    className="h-auto w-full object-contain"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closing */}
      <footer className="relative z-10 px-6 py-20 text-center">
        <Reveal>
          <BrandLogo size={56} className="mx-auto mb-4" />
          <p className="font-caps text-[0.78rem] tracking-[0.28em] text-muted-foreground uppercase">
            With love and gratitude
          </p>
          <h2 className="font-script mt-4 text-5xl text-foreground sm:text-6xl">Abin &amp; Rinta</h2>
          <Divider />
          <p className="mx-auto max-w-md text-xl leading-relaxed text-muted-foreground">
            Your presence and prayers will make our celebration complete.
          </p>
        </Reveal>
      </footer>
      </div>
    </div>
  );
}
