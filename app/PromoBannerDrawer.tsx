"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function PromoBannerDrawer() {
  const [open, setOpen] = useState(false);
  const [altText, setAltText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAltText((prev) => !prev);
    }, 2500); // switch every 2.5s (tweak if you want)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[60] w-full">
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`
    fixed inset-0 z-[50]
    bg-black/40
    transition-opacity duration-300 ease-out
    ${
      open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
    }
  `}
      />
      {/* Drawer (absolute, starts at top:0 so it covers the black bar) */}
      <div
        id="promo-drawer"
        className={`
    fixed left-0 top-0 z-[60] w-full bg-white
    shadow-[0_10px_30px_rgba(0,0,0,0.06)]
    transform transition-transform duration-300 ease-out
    ${open ? "translate-y-0" : "-translate-y-full"}
  `}
      >
        {/* this is the 40px area where the black bar sits; keep it white */}

        {/* thin accent bar */}
        <div className="h-1 w-full bg-[#5B4B55]" />
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="
    absolute right-6 top-6
    grid h-10 w-10 place-items-center
    border border-black/70
    transition
  "
        >
          ✕
        </button>
        {/* Backdrop */}

        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-16 px-8 py-16 md:grid-cols-2">
          <div>
            <h3 className="text-[18px] font-banner font-extrabold uppercase tracking-wide">
              THANK YOU
            </h3>
            <p className="mt-4 max-w-[520px] font-title text-[14px] leading-relaxed text-black/80">
              Thank you for your time and considering me for the Adidas DVM
              Internship role. Feel free to contact me for any additional
              questions or information. cmlai@usc.edu
            </p>
            {/* <a className="mt-8 inline-block text-[16px] font-extrabold uppercase underline underline-offset-4">
              FROM THEM
            </a> */}
          </div>

          {/* <div>
            <h3 className="text-[18px] font-extrabold uppercase tracking-wide">
              WHY ADIDAS
            </h3>
            <p className="mt-4 max-w-[520px] text-[14px] leading-relaxed text-black/80">
              Adidas represents discipline, repetition, and self-belief built
              through work — values that shaped how I learned to say “you got
              this” to myself and to others.
            </p>
          </div> */}
        </div>
      </div>

      {/* Black banner (kept above drawer so it stays visible until covered by drawer height) */}
      {!open && (
        <div className="fixed left-0 top-0 z-[60] h-10 w-full bg-black text-white">
          <div className="mx-auto flex h-full max-w-[1200px] items-center justify-center gap-2 px-4 text-[14px] tracking-wide">
            <span
              key={altText ? "coded" : "hi"}
              className="uppercase font-banner transition-opacity-20 duration-300"
            >
              {altText ? "CODED WITH <3" : "HI JOHN AND ADIDAS TEAM"}
            </span>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="promo-drawer"
              className="flex items-center"
            >
              <ChevronDown className="h-5 w-5 text-white" strokeWidth={0.75} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
