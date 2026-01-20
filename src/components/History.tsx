import { motion } from "framer-motion";
import { useState } from "react";
import { BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export function History() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-16"
    >
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-t-4 border-red-600">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white flex items-center justify-between hover:from-blue-700 hover:to-blue-900 transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <BookOpen size={28} />
            </div>
            <h3 className="text-3xl font-bold">{t("history.toggleTitle")}</h3>
          </div>
          {isExpanded ? <ChevronUp size={32} /> : <ChevronDown size={32} />}
        </button>

        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="p-8 md:p-12 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">{t("history.p1")}</p>
            <p className="text-lg text-gray-700 leading-relaxed">{t("history.p2")}</p>

            <div className="bg-blue-50 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-blue-900 mb-3">
                {t("history.staffTitle")}
              </h4>
              <p className="text-gray-700 leading-relaxed">{t("history.staffText")}</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">{t("history.p3")}</p>

            <div className="bg-red-50 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-red-900 mb-3">
                {t("history.dormTitle")}
              </h4>
              <p className="text-gray-700 leading-relaxed">{t("history.dormText")}</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">{t("history.p4")}</p>

            <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-blue-900 mb-3">
                {t("history.intlTitle")}
              </h4>
              <p className="text-gray-700 leading-relaxed">{t("history.intlText")}</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">{t("history.p5")}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  {t("history.bikTitle")}
                </h4>
                <p className="text-gray-700 leading-relaxed">{t("history.bikText")}</p>
              </div>

              <div className="bg-purple-50 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  {t("history.hubTitle")}
                </h4>
                <p className="text-gray-700 leading-relaxed">{t("history.hubText")}</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-blue-900 mb-3">
                {t("history.mobilityTitle")}
              </h4>
              <p className="text-gray-700 leading-relaxed">{t("history.mobilityText")}</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">{t("history.p6")}</p>

            <div className="bg-red-50 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-red-900 mb-3">
                {t("history.медTitle")}
              </h4>
              <p className="text-gray-700 leading-relaxed">{t("history.медText")}</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">{t("history.p7")}</p>

            <div className="mt-8 p-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl text-white text-center">
              <h4 className="text-2xl font-bold mb-2">{t("history.diplomaTitle")}</h4>
              <p className="text-xl text-blue-100">{t("history.diplomaSubtitle")}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
