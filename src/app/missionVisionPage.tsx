import HeaderSection from "@/app/components/shared/header";
import Footer from "@/app/components/shared/Footer";
import {LanguageProvider, useLanguage} from "@/app/contexts/LanguageContext";
import leave_img from "@/app/components/img/misyonvizyon.png";
import bg_img from "@/app/components/img/misyonvizyonArkaplan.png";

function MissionVisionPageContent() {
  const {t} = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderSection/>

      <main
        className="flex-grow"
        style={{
          background:
            "radial-gradient(circle at 7% 48%, rgba(166,153,123,0.16) 0, rgba(166,153,123,0) 18%), radial-gradient(circle at 94% 42%, rgba(166,153,123,0.16) 0, rgba(166,153,123,0) 18%), linear-gradient(#f1eee8, #ece9e2)",
        }}
      >
        <div className="w-full border-b border-[#c7aa70]">
          <img
            src={leave_img}
            alt="Mission and vision"
            className="w-full h-[250px] object-cover object-center"
          />
        </div>

        <div style={{backgroundImage: `url(${bg_img})`}} className="bg-cover">
          <section
            className="relative max-w-5xl mx-auto w-full px-4 md:px-6 py-8 md:py-12 bg-cover bg-center bg-no-repeat"
          >
            <div
              className="relative text-center bg-[#f4f1ea]/95 px-6 md:px-12 py-10 md:py-14 shadow-[0_10px_35px_-25px_rgba(44,36,25,0.55)]">
              {/*<div className="text-center mb-10 md:mb-12">*/}
              {/*  <h1*/}
              {/*    className="font-serif text-[52px] md:text-[74px] leading-none text-[#c7aa70]">{t.missionVision.title}</h1>*/}
              {/*</div>*/}

              <div className="grid md:grid-cols-2 gap-8 md:gap-10 md:divide-x md:divide-[#d7cec0]">
                <article className="md:pr-10">
                  <h2
                    className="font-serif text-4xl md:text-[52px] leading-none text-[#c7aa70] mb-6 text-center">{t.missionVision.missionTitle}</h2>
                  <div className="space-y-4">
                    {t.missionVision.missionParagraphs.map((paragraph, index) => (
                      <p key={index} className="text-base md:text-[18px] leading-[1.55] text-[#535046] text-center">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>

                <article className="mt-8 md:mt-0 md:pl-10">
                  <h2
                    className="font-serif text-4xl md:text-[52px] leading-none text-[#c7aa70] mb-6 text-center">{t.missionVision.visionTitle}</h2>
                  <div className="space-y-4">
                    {t.missionVision.visionParagraphs.map((paragraph, index) => (
                      <p key={index} className="text-base md:text-[18px] leading-[1.55] text-[#535046] text-center">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer/>
    </div>
  );
}

export default function MissionVisionPage() {
  return (
    <LanguageProvider>
      <MissionVisionPageContent/>
    </LanguageProvider>
  );
}
