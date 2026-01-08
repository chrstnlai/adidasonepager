// app/adidas-mock/page.tsx
"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import PromoBannerDrawer from "./PromoBannerDrawer";

const products = [
  {
    id: 1,
    name: "Samba OG Shoes",
    price: "$100",
    category: "Originals",
    colors: "44 colors",
    badge: "Best seller",
  },
  {
    id: 2,
    name: "Adizero EVO SL Shoes",
    price: "$150",
    category: "Men's Running",
    colors: "15 colors",
    badge: "New",
  },
  {
    id: 3,
    name: "Samba OG Shoes",
    price: "$110",
    category: "Originals",
    colors: "44 colors",
  },
  {
    id: 4,
    name: "Samba OG",
    price: "$110",
    category: "Originals",
    colors: "44 colors",
  },
];

function Icon({ name }: { name: "search" | "user" | "heart" | "bag" }) {
  // tiny inline icons so you don’t need any icon library
  const common = "stroke-black/80";
  if (name === "search")
    return (
      <svg
        viewBox="0 0 24 24"
        className={"h-5 w-5 fill-none stroke-2 " + common}
      >
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-3.2-3.2" />
      </svg>
    );
  if (name === "user")
    return (
      <svg
        viewBox="0 0 24 24"
        className={"h-5 w-5 fill-none stroke-2 " + common}
      >
        <path d="M20 21a8 8 0 0 0-16 0" />
        <circle cx="12" cy="8" r="4" />
      </svg>
    );
  if (name === "heart")
    return (
      <svg
        viewBox="0 0 24 24"
        className={"h-5 w-5 fill-none stroke-2 " + common}
      >
        <path d="M12 21s-7-4.6-9.3-8.5C.6 9 .9 6.2 3.1 4.5 5.3 2.9 8.1 3.4 10 5.2L12 7l2-1.8c1.9-1.8 4.7-2.3 6.9-.7 2.2 1.7 2.5 4.5.4 8-2.3 3.9-9.3 8.5-9.3 8.5z" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" className={"h-5 w-5 fill-none stroke-2 " + common}>
      <path d="M6 7h15l-1.5 14h-12z" />
      <path d="M9 7a3 3 0 0 1 6 0" />
    </svg>
  );
}

function PlaceholderShoe({ tone = "cool" }: { tone?: "cool" | "warm" }) {
  // Simple “shoe-like” SVG placeholder (swap with real images later)
  const bg = tone === "warm" ? "bg-[#F2F0EA]" : "bg-[#EEF1F4]";
  return (
    <div className={`relative aspect-[16/9] w-full ${bg}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 400 160" className="h-24 w-auto opacity-70">
          <path
            d="M55 110c52 8 88 6 140-8 26-7 45-21 64-35 18-13 32-18 45-10 12 8 25 24 46 38 15 10 24 13 33 15 9 2 14 10 12 17-2 8-9 13-17 13H90c-20 0-37-12-40-26-2-9 1-17 5-18z"
            fill="none"
            stroke="black"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <path
            d="M145 120h18M175 120h18M205 120h18"
            stroke="black"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default function AdidasListMock() {
  const [promoOpen, setPromoOpen] = useState(false);

  useEffect(() => {
    if (!promoOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [promoOpen]);
  return (
    <main className="min-h-screen bg-white text-black">
      <PromoBannerDrawer />
      {/* Top promo bar */}
      {/* Top promo bar */}

      {/* Header */}
      <header className="border-b border-black/10 ">
        <div className="w-full px-10">
          {/* utility row */}
          <div className="flex pt-3 items-center justify-end gap-5 text-[12px] text-black/60">
            <a className="hover:text-black" href="#">
              cmlai@usc.edu
            </a>
            <a
              className="hover:text-black"
              href="https://www.linkedin.com/in/chrstnlai"
            >
              Linkedin
            </a>
            <a className="hover:text-black" href="#">
              510-501-9938
            </a>
            <a
              className="hover:text-black"
              href="https://www.christinemlai.com/"
            >
              Portfolio
            </a>
          </div>

          {/* main row */}
          <div className="flex h-12 items-center justify-between">
            {/* left logo placeholder */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/689347.jpg"
                alt="Brand logo"
                width={150}
                height={150}
                className="object-contain"
              />
            </Link>

            {/* nav */}
            <nav className="hidden md:flex ml-auto mr-30 items-center gap-8 text-[16px] font-semibold tracking-wide">
              <a
                className="hover:underline underline-offset-4 font-banner"
                href="#"
              >
                FOUNDATION
              </a>
              <a
                className="hover:underline underline-offset-4 font-banner"
                href="#"
              >
                BUILT
              </a>
              <a
                className="hover:underline underline-offset-4 font-banner"
                href="#"
              >
                GIVING
              </a>
              <a
                className="hover:underline underline-offset-4 font-banner"
                href="#"
              >
                WHY ADIDAS
              </a>
            </nav>

            {/* search + icons */}
            <div className="flex items-center gap-1">
              <div className="hidden md:flex items-center justify-between bg-black/5 px-2 py-2 min-w-[240px]">
                <span className="text-[13px] text-black/60">Search</span>
                <Icon name="search" />
              </div>
              <button
                className="grid h-10 w-10 place-items-center hover:bg-black/5"
                aria-label="Account"
              >
                <Icon name="user" />
              </button>
              <button
                className="grid h-10 w-10 place-items-center hover:bg-black/5"
                aria-label="Wishlist"
              >
                <Icon name="heart" />
              </button>
              <button
                className="grid h-10 w-10 place-items-center hover:bg-black/5"
                aria-label="Bag"
              >
                <Icon name="bag" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Page content */}
      <section className="mx-auto max-w-[1200px] px-4 pb-16 pt-6">
        {/* breadcrumb + back */}
        <div className="flex items-center gap-3 text-[13px] text-black/70">
          <a
            className="inline-flex items-center gap-2 font-semibold tracking-wide text-black hover:underline underline-offset-4"
            href="#"
          >
            ← <span>BACK</span>
          </a>
          <span className="text-black/30">|</span>
          <span>
            <a className="hover:underline underline-offset-4" href="#">
              Home
            </a>
            <span className="mx-2 text-black/30">/</span>
            <a className="hover:underline underline-offset-4" href="#">
              Men
            </a>
          </span>
        </div>

        {/* title row */}
        <div className="mt-6 flex items-start justify-between gap-6">
          <div className="max-w-3xl">
            <h1 className="text-[44px] font-black uppercase leading-[0.95] tracking-tight md:text-[56px] font-original">
              "YOU GOT THIS"
            </h1>
            <p className="mt-4 text-[14px] leading-relaxed text-black/75">
              Kickstart your routine with the latest sneakers and activewear.
              From running shoes that energize your stride to training gear that
              keeps you cool and focused. Strength, cardio, or skill
              focus—explore what fits your goals.
            </p>
            <button className="mt-2 text-[13px] font-semibold underline underline-offset-4 hover:opacity-80">
              Show more
            </button>
          </div>

          <div className="shrink-0 pt-2">
            <button className="inline-flex items-center gap-3 border border-black px-5 py-3 text-[12px] font-bold uppercase tracking-wide hover:bg-black hover:text-white">
              Filter &amp; Sort
              <span className="inline-block h-[2px] w-4 bg-current opacity-80" />
            </button>
          </div>
        </div>

        {/* grid */}
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, idx) => (
            <a key={p.id} href="#" className="group">
              {/* image frame */}
              <div className="border border-black/10 bg-white">
                <div className="p-4">
                  <PlaceholderShoe tone={idx % 2 === 0 ? "cool" : "warm"} />
                </div>
              </div>

              {/* info */}
              <div className="mt-3">
                <div className="text-[14px] font-semibold">{p.price}</div>
                <div className="mt-2 text-[14px] font-medium group-hover:underline underline-offset-4">
                  {p.name}
                </div>
                <div className="mt-1 text-[13px] text-black/60">
                  {p.category}
                </div>
                <div className="mt-1 text-[13px] text-black/60">{p.colors}</div>
                {p.badge ? (
                  <div className="mt-2 text-[12px] font-semibold text-black">
                    {p.badge}
                  </div>
                ) : null}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Right-side feedback tab (optional) */}
      <div className="fixed right-0 top-1/2 hidden -translate-y-1/2 md:block font-original ">
        <div className="rotate-180 [writing-mode:vertical-rl] border border-black/20 bg-white px-7 py-3 text-[18px]  tracking-wide text-black/70">
          FEEDBACK
        </div>
      </div>
    </main>
  );
}
