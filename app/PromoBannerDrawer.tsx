"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function PromoBannerDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      {/* Drawer (absolute, starts at top:0 so it covers the black bar) */}
      <div
        id="promo-drawer"
        className={`
    absolute left-0 top-0 w-full bg-white
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
   hover:text-white
    transition
  "
        >
          ✕
        </button>

        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-16 px-8 py-16 md:grid-cols-2">
          <div>
            <h3 className="text-[18px] font-extrabold uppercase tracking-wide">
              THANK YOU
            </h3>
            <p className="mt-4 max-w-[520px] text-[14px] leading-relaxed text-black/80">
              Thank you for your time and considering me for the Adidas DVM
              Internship Role
            </p>
            {/* <a className="mt-8 inline-block text-[16px] font-extrabold uppercase underline underline-offset-4">
              FROM THEM
            </a> */}
          </div>

          <div>
            <h3 className="text-[18px] font-extrabold uppercase tracking-wide">
              WHY ADIDAS
            </h3>
            <p className="mt-4 max-w-[520px] text-[14px] leading-relaxed text-black/80">
              Adidas represents discipline, repetition, and self-belief built
              through work — values that shaped how I learned to say “you got
              this” to myself and to others.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <a className="text-[16px] font-extrabold uppercase underline underline-offset-4">
                FROM ME
              </a>
              <a className="text-[16px] font-extrabold uppercase underline underline-offset-4">
                TO YOU
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Black banner (kept above drawer so it stays visible until covered by drawer height) */}
      {!open && (
        <div className="relative h-10 w-full bg-black text-white">
          <div className="mx-auto flex h-full max-w-[1200px] items-center justify-center gap-2 px-4 text-[14px] tracking-wide">
            <span className="uppercase font-banner">
              HI JOHN AND ADIDAS TEAM
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
