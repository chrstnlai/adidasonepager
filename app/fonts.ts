// app/fonts.ts
import localFont from "next/font/local";

export const bannerFont = localFont({
  src: "../app/fonts/adihausdin_bold.otf",
  variable: "--font-banner",
  display: "swap",
});

export const originalFont = localFont({
  src: "../app/fonts/adineuePROBold.ttf",
  variable: "--font-original",
  display: "swap",
});

export const titleFont = localFont({
  src: "../app/fonts/adihausdin_regular.otf",
  variable: "--font-title",
  display: "swap",
});

