import HeaderSection from "@/app/components/shared/header";
import Footer from "@/app/components/shared/Footer";
import { LanguageProvider, useLanguage } from "@/app/contexts/LanguageContext";
import kavonoz from "@/app/components/img/kavanozlar.png";
import vakum from "@/app/components/img/vakumlar.png";
import yasou_logo from "@/app/components/img/yasou_logo.png";
import vineyard_img from "@/app/components/img/vineyard.jpeg";
import WhatsAppButton from "./components/shared/WhatsAppButton";

function YasouPageContent() {
  const { t } = useLanguage();

  const products = [
    {
      key: "grapeLeavesJar",
      name: t.yasou.items.grapeLeavesJar.name,
      bt1: t.yasou.items.grapeLeavesJar.bt1,
      bt2: t.yasou.items.grapeLeavesJar.bt2,
      type: t.yasou.items.grapeLeavesJar.type,
      image: kavonoz,
      alt: t.yasou.items.grapeLeavesJar.imageAlt,
    },
    {
      key: "grapeLeavesVaccum",
      name: t.yasou.items.grapeLeavesVaccum.name,
      bt1: t.yasou.items.grapeLeavesVaccum.bt1,
      bt2: t.yasou.items.grapeLeavesVaccum.bt2,
      type: t.yasou.items.grapeLeavesVaccum.type,
      image: vakum,
      alt: t.yasou.items.grapeLeavesVaccum.imageAlt,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f3ea]">
      <HeaderSection />

      <main
        className="flex-grow pt-24 pb-20 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(247, 243, 234, 0.88), rgba(247, 243, 234, 0.88)), url(${vineyard_img})`,
        }}
      >
        <section className="w-full px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center">
                <img src={yasou_logo} alt="Yasou Logo" className="h-24 w-auto"/>
              </div>
              <h1 className="mt-4 mx-auto font-serif text-4xl md:text-[52px] leading-none text-[#c7aa70]">
                {t.yasou.introTitle}
              </h1>
              <p className="mt-4 text-base md:text-[18px] leading-[1.55] text-[#535046]">
                {t.yasou.introBody}
              </p>
            </div>
          </div>
        </section>

        <section className="w-full px-4 pb-20 mt-10 flex flex-col items-center justify-center text-center">
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex flex-col items-center gap-3 mb-10">
              <h2 className="font-serif text-4xl md:text-[52px] leading-none text-[#c7aa70]">{t.yasou.productsTitle}</h2>
              <p className="text-base md:text-[18px] leading-[1.55] text-[#535046] max-w-2xl mx-auto">{t.yasou.productsSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center text-center max-w-4xl mx-auto">
              {products.map((product) => (
                <div
                  key={product.key}
                  className="flex h-full w-full max-w-sm flex-col rounded-3xl border border-amber-200 overflow-hidden bg-white text-center shadow-[0_18px_45px_-40px_rgba(66,45,16,0.8)]"
                >
                  <div className="h-56 shrink-0">
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-center py-6 bg-gradient-to-b from-white to-[#f7f2e8] text-center">
                    <div className="w-full text-center">
                      <h3 className="font-serif text-2xl md:text-[32px] leading-none text-[#c7aa70] mx-3">{product.name}</h3>
                      <p className="mt-2 text-base md:text-[16px] leading-[1.55] text-[#535046]">{product.type}</p>
                    </div>
                    <div className="w-full text-sm pt-3 mt-auto uppercase tracking-[0.3em] text-[#535046] text-center px-3">
                      <p>{product.bt1}</p>
                      <p dangerouslySetInnerHTML={{ __html: product.bt2 }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <WhatsAppButton />

      <Footer />
    </div>
  );
}

export default function YasouPage() {
  return (
    <LanguageProvider>
      <YasouPageContent />
    </LanguageProvider>
  );
}
