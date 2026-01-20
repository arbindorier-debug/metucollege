import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../i18n/LanguageContext";

// если используешь public/assets
const HERO_BG = `${import.meta.env.BASE_URL}assets/hero-bg.jpeg`;

// если используешь src/assets — вместо строки выше раскомментируй это:
// import heroBg from "../assets/hero-bg.jpeg";
// const HERO_BG = heroBg;

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative isolate min-h-screen flex items-center justify-center overflow-hidden bg-blue-900"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={HERO_BG}
          alt={t("hero.imageAlt")}
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        />

        {/* градиенты и затемнение */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 via-blue-900/55 to-blue-950/75" />
        <div className="absolute inset-0 bg-black/20" />

        {/* FADE по краям */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-950/90 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-950/90 to-transparent" />
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-blue-950/90 to-transparent" />
        <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-blue-950/90 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          {t("hero.titleLines.0")} {t("hero.titleLines.1")}{" "}
          {t("hero.titleLines.2")} {t("hero.titleLines.3")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto mb-8"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-white/80"
        >
          {t("hero.newYear")}
        </motion.p>
      </div>

      {/* SCROLL ICON */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={40} className="text-white/60" />
      </motion.div>
    </section>
  );
}
