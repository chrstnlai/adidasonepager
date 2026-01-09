// app/adidas-mock/page.tsx
"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import PromoBannerDrawer from "./PromoBannerDrawer";

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

type FourGridImg = { src: string; alt?: string };

function FourImageGrid({ images }: { images: FourGridImg[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      {images.slice(0, 4).map((img, i) => (
        <div
          key={i}
          className="relative aspect-square overflow-hidden bg-black/5"
        >
          <Image
            src={img.src}
            alt={img.alt ?? `image-${i + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
      ))}
    </div>
  );
}

function StoryRow({
  flip = false,
  title,
  body,
  images,
}: {
  flip?: boolean;
  title: string;
  body: string;
  images: FourGridImg[];
}) {
  return (
    <div className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
      {/* Images */}
      <div className={flip ? "md:col-span-5 md:order-2" : "md:col-span-5"}>
        <FourImageGrid images={images} />
      </div>

      {/* Text */}
      <div className={flip ? "md:col-span-7 md:order-1" : "md:col-span-7"}>
        <h3 className="text-[26px] sm:text-[32px] font-black uppercase leading-[1.05] font-original">
          {title}
        </h3>
        <p className="mt-3 text-[16px] sm:text-[18px] leading-relaxed text-black/80 font-title">
          {body}
        </p>
      </div>
    </div>
  );
}

export default function AdidasListMock() {
  const [promoOpen, setPromoOpen] = useState(false);

  const [feedbackOpen, setFeedbackOpen] = useState(false);

  useEffect(() => {
    if (!feedbackOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [feedbackOpen]);

  useEffect(() => {
    if (!promoOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [promoOpen]);
  return (
    <main className="min-h-screen w-full bg-white text-black pt-10 overflow-x-hidden">
      <PromoBannerDrawer />
      {/* Top promo bar */}
      {/* Top promo bar */}

      {/* Header */}
      <header className="border-b border-black/10 ">
        <div className="w-full px-10">
          {/* utility row */}
          <div className="flex flex-nowrap items-center justify-end gap-3 sm:gap-5 text-[10px] sm:text-[12px] text-black/60 whitespace-nowrap">
            <a
              className="hover:text-black"
              href="https://www.linkedin.com/in/chrstnlai"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              className="hover:text-black"
              href="https://www.christinemlai.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>

            <a className="hover:text-black" href="mailto:cmlai@usc.edu">
              cmlai@usc.edu
            </a>

            <a className="hover:text-black" href="tel:+15105019938">
              510-501-9938
            </a>
          </div>

          {/* main row */}
          <div className="flex h-12 items-center justify-between">
            {/* left logo placeholder */}
            <Link href="/" className="flex items-center">
              <div className="w-[110px] sm:w-[150px]">
                <Image
                  src="/689347.jpg"
                  alt="Brand logo"
                  width={300}
                  height={120}
                  className="object-contain w-full h-auto"
                  priority
                />
              </div>
            </Link>

            {/* nav */}
            <nav className="hidden md:flex ml-auto mr-30 items-center gap-8 text-[16px] font-semibold tracking-wide">
              <a
                className="hover:underline underline-offset-4 font-banner"
                href="#foundation"
              >
                THE FOUNDATION
              </a>
              <a
                className="hover:underline underline-offset-4 font-banner"
                href="#drive"
              >
                INNER DRIVE
              </a>
              <a
                className="hover:underline underline-offset-4 font-banner"
                href="#pass"
              >
                PASSING IT ON
              </a>
              <a
                className="hover:underline underline-offset-4 font-banner"
                href="#adidas"
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

      {/* HERO — image + left stacked text boxes */}
      <section className="relative w-full">
        {/* Background image */}
        <div className="relative h-[420px] w-full md:h-[520px]">
          <Image
            src="/meadi2.svg" // put your image in /public and set this path
            alt="Hero"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          {/* Optional: subtle dark overlay so text reads better */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Left stacked boxes */}
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-[1200px] items-end px-2 pb-6 sm:pb-10 md:pb-12">
              <div className="w-full max-w-[420px] sm:max-w-[520px] space-y-1.5 sm:space-y-2">
                <div className="inline-block bg-white/85 px-2 py-1.5 sm:px-3 sm:py-2 border border-black text-[14px] sm:text-[18px] font-banner font-extrabold uppercase tracking-wide">
                  CHRISTINE LAI
                </div>

                <div className="inline-block bg-white/85 px-2 py-1.5 sm:px-3 sm:py-2 text-[12px] sm:text-[14px] leading-snug text-black/80 font-title">
                  Multi-disciplinary Creative, Fashion Designer, and Founder
                </div>

                <div className="inline-block bg-white/85 px-2 py-1.5 sm:px-3 sm:py-2 text-[12px] sm:text-[14px] leading-snug text-black/80 font-title">
                  Computer Science, Business, and Human-Centered Design @ USC
                  ’27
                </div>

                <div className="pt-1 sm:pt-2">
                  <a
                    href="#foundation"
                    className="font-banner inline-flex items-center border border-black gap-2 bg-white/90 px-2 py-1.5 sm:px-3 sm:py-2 text-[12px] sm:text-[14px] font-semibold hover:bg-white"
                  >
                    Read what “You Got This” means to her
                  </a>
                  <span aria-hidden>→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SHOP BY SURFACE style section */}

      <section
        id="foundation"
        className="mx-auto max-w-[1200px] px-4 pt-14 pb-10"
      >
        <h2 className=" text-[30px] sm:text-[44px] font-black uppercase tracking-tight font-original">
          THE FOUNDATION
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: "PAVEMENT",
              src: "/family1.svg",
              caption: "adidas fan est. 2016 ",
            },
            {
              title: "TRAIL",
              src: "/family2.svg",
            },
            {
              title: "TRACK",
              src: "/family3.svg",
              caption: "wore this Adidas shirt religiously #warriorsforever ",
              // no caption here → totally fine
            },
          ].map((card) => (
            <a
              key={card.title}
              className="group relative block overflow-hidden "
            >
              <div className="relative h-[250px] sm:h-[360px] md:h-[460px] w-full">
                <Image
                  src={card.src}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-300 "
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* bottom-left label (kept strong, adidas-style) */}

              {/* optional caption */}
              {card.caption && (
                <div className="px-1  text-[11px] leading-relaxed text-black/70 font-title">
                  {card.caption}
                </div>
              )}
            </a>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-[18px] leading-relaxed text-black/80 font-title">
          My parents defined what “You Got This” means to me. As immigrants who
          fled the Vietnam War to pursue their dreams in America, they showed me
          that belief is ultimately built through patience and time.
          <br />
          <br />
          From my mom&rsquo;s 3-day pho recipe to my dad&rsquo;s college
          journey, spending 8 years to earn his Bachelor&rsquo;s degree while he
          worked to bring his family over from Vietnam to America, I&rsquo;ve
          learned about the beauty of dedicating time to see the results.
          <br /> <br />
          My mom&rsquo;s pho inspires me to marinate on an idea for a few days
          instead of making quick decisions resulting in bad solutions. “The
          longer pho broth cooks, the better it is.”, she always says.
          <br /> <br /> My dad&rsquo;s endurance teaches me to work with the
          utmost dedication and passion, as he didn&rsquo;t let the 8 years and
          hours of working side jobs stop him from earning the Economics degree
          he always dreamed of. I honor this legacy of patience in my life as I
          now work to achieve my own goals.
          <br /> <br /> When challenges arise, my parents have always , and
          always will tell me, “You got this.” or for them "加油"
        </p>
      </section>

      {/* APPLICATION — alternating 2x2 grid + text */}
      <section id="drive" className="bg-black/[0.10]">
        <div className="mx-auto max-w-[1200px] px-4 py-14">
          <h2 className="text-[30px] sm:text-[44px] font-black uppercase tracking-tight font-original">
            INNER DRIVE
          </h2>
          <p className="mt-1 text-[16px] sm:text-[18px] text-black/70 font-title">
            Doing it scared and being a self-starter
          </p>

          <div className="mt-12 space-y-14">
            <StoryRow
              title="STARTING MY FASHION BRAND, AC unit"
              body=" Starting a fashion brand with my best friend meant betting on myself and our business. “You got this” is what keeps me pushing past what’s expected,  through long nights of designing, learning how to run a business, selling pieces, and picking up new skills along the way. From coding and social media marketing to photography, graphic design, and fashion design, building this brand taught me that belief is something you practice by showing up and growing one day at a time "
              images={[
                { src: "/1.svg" },
                { src: "/acshoes.svg" },
                { src: "/tt5.svg" },
                { src: "/acd.png" },
              ]}
            />

            <StoryRow
              flip
              title="LEADERSHIP ON CAMPUS"
              body="I led USC&rsquo;s first all women&rsquo;s make-a-thon, Break to Make. “You got this” wasn’t just something I told myself,  it was something I shared with other women at USC, reminding them that they belonged in tech and got this too. The event was about creating space for women in hardware at USC and passing belief forward. I led and organized the event, grew in my public speaking and leadership skills, and took initiative to build something for my USC community.  "
              images={[
                { src: "/DSC_0655.webp" },
                { src: "/DSC_0763.jpg" },
                { src: "/DSC_0902.jpg" },
                { src: "/DSC02323.jpg" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* INITIATIVES STYLE SECTION */}
      <section id="pass" className="mx-auto max-w-[1200px] px-4 py-16">
        {/* Header row */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-start">
          <h2 className="md:col-span-6 text-[30px] sm:text-[44px] font-black uppercase tracking-tight font-original">
            PASSING IT ON
          </h2>

          <p className="md:col-span-6 max-w-xl text-[16px] sm:text-[18px] leading-relaxed text-black/70 font-title">
            The ways I extend "You Got This" in my career
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              label: "Visual Merchandising Intern @ Fenty",
              title: "Disrupting the Beauty Industry",
              src: "/fenty.png",
              cta: "At Fenty, visual merchandising became a way to say “you got this” without words.  Through 3D design and spatial storytelling, I helped create environments that reflect confidence, inclusivity, and self-belief, values at the core of Fenty, brand redefining beauty. ",
            },
            {
              label: "Design Intern @ Kode with Klossy ",
              title: "CLOSING THE GENDER GAP IN TECH",
              src: "/kwkteam 1.svg",
              cta: (
                <>
                  At Kode With Klossy, saying “you got this” meant helping women
                  see that they belonged in tech. Through curriculum design, I
                  worked on learning experiences that broke down intimidating
                  concepts and replaced doubt with confidence. <br />
                  <br /> Watching students go from uncertainty to ownership
                  reminded me that education isn’t just about teaching skills,
                  it’s about creating spaces where people feel empowered to take
                  up space.
                </>
              ),
            },
            {
              label: "Coding Teacher @ Norwoord Street Elementary",
              title: "TEACHING STUDENTS HOW TO CODE",
              src: "/advol.jpeg",
              cta: (
                <>
                  Volunteering with Norwood, saying “you got this” meant helping
                  elementary school students believe they were capable of
                  solving challenging math and coding problems.
                  <br />
                  <br /> Through teaching them how to code, I introduced
                  technology as a tool for curiosity, creativity, and
                  confidence. Watching students light up when something finally
                  clicked showed me how early encouragement can shape how
                  students see their future and their place in it.
                </>
              ),
            },
          ].map((card) => (
            <div key={card.title} className="group w-full">
              {/* IMAGE CARD */}
              <div className="relative h-[420px] gap-20 w-full overflow-hidden">
                <Image
                  src={card.src}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Label */}
                <div className="absolute left-4 top-4 bg-black px-3 py-1 text-[12px] font-banner font-bold uppercase tracking-wide text-white">
                  {card.label}
                </div>

                {/* Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-[22px] font-banner font-extrabold uppercase leading-tight text-white">
                    {card.title}
                  </h3>
                </div>
              </div>

              {/* CTA BELOW IMAGE */}
              <p className="mt-4 text-[16px] leading-relaxed text-black/70 font-title">
                {card.cta}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="adidas" className="mx-auto max-w-[1200px] px-4 pt-14 pb-10">
        <h2 className=" text-[30px] sm:text-[44px] font-black uppercase tracking-tight font-original">
          WHY ADIDAS?
        </h2>

        <p className="mt-6 max-w-3xl text-[18px] leading-relaxed text-black/80 font-title">
          Digital Visual Merchandising at Adidas brings together everything
          I&rsquo;m passionate about: experience design, fashion, and
          technology. My interdisplinary background in business from owning a
          fashion brand, web development, and visual merchandising allows me to
          think holistically about how people move through digital spaces and
          interact with a brand.
          <br />
          <br /> Throughout my life, Adidas has been there —on my feet and in my
          everyday wear—as I chased new goals and stepped into unfamiliar
          spaces. That constant presence has made the brand feel incredibly
          personal to me.
          <br />
          <br /> I see this role as an opportunity to collaborate with other
          talented Adidas summer interns and contribute to a global brand that
          consistently champions innovation and self-belief, all the while
          growing my visual merchandising practice and carrying the you got this
          mindset into on-site experiences.
        </p>
      </section>

      {/* Page content */}
      <section className="mx-auto max-w-[1200px] px-4 pb-16 pt-6"></section>

      {/* Right-side feedback tab */}
      <button
        type="button"
        onClick={() => setFeedbackOpen(true)}
        className="fixed right-0 top-1/2 z-80 hidden -translate-y-1/2 md:block"
        aria-label="Open feedback"
      >
        <div className="rotate-180 [writing-mode:vertical-rl] font-original border border-black/20 bg-white px-7 py-3 text-[18px] tracking-wide text-black/70 hover:bg-black hover:text-white">
          FEEDBACK
        </div>
      </button>

      {/* Feedback drawer (sibling, NOT inside the button) */}
      <div
        className={`fixed inset-0 z-80 ${
          feedbackOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!feedbackOpen}
      >
        {/* Backdrop */}
        <div
          onClick={() => setFeedbackOpen(false)}
          className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
            feedbackOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Panel */}
        <aside
          className={`absolute right-0 top-0 h-full w-full max-w-[420px] bg-white shadow-2xl transition-transform duration-300 ${
            feedbackOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Feedback"
        >
          {/* top bar */}
          <div className="flex items-center justify-between px-6 pt-6">
            <div className="flex items-center gap-3">
              <Image
                src="/689347.jpg"
                alt="Brand logo"
                width={110}
                height={40}
                className="object-contain"
              />
            </div>

            <button
              type="button"
              onClick={() => setFeedbackOpen(false)}
              className="grid h-10 w-10 place-items-center hover:bg-black/5"
              aria-label="Close feedback"
            >
              <span className="text-3xl leading-none">×</span>
            </button>
          </div>

          <div className="px-6 pb-10 pt-8">
            <h2 className="text-[34px] font-original font-black uppercase tracking-tight">
              YOUR EXPERIENCE
            </h2>

            {/* use <a> here so we don't add another button */}
            <div className="mt-8">
              <a
                href="#"
                className="text-[18px] font-semibold underline underline-offset-4"
              >
                GET HELP
              </a>
            </div>

            <p className="mt-8 text-[20px] font-title leading-relaxed text-black/80">
              Don’t hold back. Good or bad –{" "}
              <span className="font-extrabold text-black">
                tell it like it is.
              </span>
            </p>

            <p className="mt-10 text-[20px] font-title leading-relaxed">
              How likely are you to recommend{" "}
              <span className="font-extrabold text-red-600">Christine Lai</span>{" "}
              to Adidas?
              <span className="text-red-600"> *</span>
            </p>

            <div className="mt-6">
              <div className="flex items-center justify-between text-[14px] text-black/70">
                <span>Very unlikely</span>
                <span>Very likely</span>
              </div>

              <div className="mt-3 grid grid-cols-11 gap-3">
                {Array.from({ length: 11 }).map((_, i) => (
                  <label key={i} className="flex flex-col items-center gap-2">
                    <input
                      type="radio"
                      name="nps"
                      value={i}
                      className="h-5 w-5 accent-black"
                    />
                    <span className="text-[14px] text-black/70">{i}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="mt-10 inline-flex items-center gap-3 bg-black px-10 py-4 text-[16px] font-bold uppercase tracking-wide text-white hover:opacity-90"
            >
              NEXT <span aria-hidden>→</span>
            </button>

            <p className="mt-16 text-center text-[14px] text-black/40">
              Protected by reCAPTCHA: Privacy &amp; Terms
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
