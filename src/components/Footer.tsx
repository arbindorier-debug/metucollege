import { Heart } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white py-12 relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-white to-blue-600" />

      {/* Snowflakes */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            ❄️
          </span>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-900 font-bold">
                МИТУ
              </div>
              <div>
                <h3 className="font-bold">МИТУ</h3>
                <p className="text-xs text-blue-200">
                  {t("footer.since")}
                </p>
              </div>
            </div>
            <p className="text-blue-200 leading-relaxed text-sm whitespace-pre-line">
              {t("footer.aboutText")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              {t("footer.quickLinksTitle")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-blue-200 hover:text-white transition-colors">
                  {t("footer.links.about")}
                </a>
              </li>
              <li>
                <a href="#programs" className="text-blue-200 hover:text-white transition-colors">
                  {t("footer.links.programs")}
                </a>
              </li>
              <li>
                <a href="#leadership" className="text-blue-200 hover:text-white transition-colors">
                  {t("footer.links.leadership")}
                </a>
              </li>
              <li>
                <a href="#news" className="text-blue-200 hover:text-white transition-colors">
                  {t("footer.links.news")}
                </a>
              </li>
            </ul>
          </div>

          {/* Students */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              {t("footer.studentsTitle")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#students" className="text-blue-200 hover:text-white transition-colors">
                  {t("footer.studentsLinks.resources")}
                </a>
              </li>
              <li>
                <a href="#students" className="text-blue-200 hover:text-white transition-colors">
                  {t("footer.studentsLinks.schedule")}
                </a>
              </li>
              <li>
                <a href="#students" className="text-blue-200 hover:text-white transition-colors">
                  {t("footer.studentsLinks.life")}
                </a>
              </li>
              <li>
                <a href="#applicants" className="text-blue-200 hover:text-white transition-colors">
                  {t("footer.studentsLinks.admissions")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              {t("footer.contactsTitle")}
            </h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>{t("footer.contactsLine1")}</li>
              <li>
                <a href="tel:+77750075055" className="hover:text-white transition-colors">
                  {t("footer.contactsLine2")}
                </a>
              </li>
              <li>
                <a href="mailto:college@metu.kz" className="hover:text-white transition-colors">
                  {t("footer.contactsLine3")}
                </a>
              </li>
              <li>{t("footer.contactsLine4")}</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-blue-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-200 text-sm text-center md:text-left">
              © {currentYear} {t("footer.copyright")}
            </p>

            <div className="flex items-center gap-2 text-sm">
              <span className="text-blue-200">{t("footer.madeWith1")}</span>
              <Heart className="text-red-500 fill-red-500" size={16} />
              <span className="text-blue-200">{t("footer.madeWith2")}</span>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-blue-300 font-semibold">
              {t("footer.newYearWish")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
