import { useLanguage } from "@/app/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-6 px-4 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-base leading-[1.55] text-[#535046]">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
