import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Leaf, Heart, Users, Package, MapPin, Globe } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import HeaderSection from "@/app/components/shared/header";
import Footer from "@/app/components/shared/Footer";
import index_sarma from "@/app/components/img/index_sarma.png";
import { LanguageProvider, useLanguage } from "@/app/contexts/LanguageContext";
import WhatsAppButton from "./components/shared/WhatsAppButton";
import vineyard_img from "@/app/components/img/vineyard.jpeg"

function AppContent() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <HeaderSection />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={index_sarma}
            alt="Fresh organic produce"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/40"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="font-serif text-5xl md:text-7xl leading-none mb-6">{t.hero.title}</h1>
          <p className="text-base md:text-[18px] leading-[1.55] mb-8 text-white/90">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-[52px] leading-none mb-4 text-[#c7aa70]">{t.whyUs.title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-serif text-2xl md:text-[32px] leading-none mb-3 text-[#c7aa70]">{t.whyUs.card1.title}</h3>
                <p className="text-base md:text-[18px] leading-[1.55] text-[#535046]">
                  {t.whyUs.card1.description}
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-serif text-2xl md:text-[32px] leading-none mb-3 text-[#c7aa70]">{t.whyUs.card2.title}</h3>
                <p className="text-base md:text-[18px] leading-[1.55] text-[#535046]">
                  {t.whyUs.card2.description}
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-serif text-2xl md:text-[32px] leading-none mb-3 text-[#c7aa70]">{t.whyUs.card3.title}</h3>
                <p className="text-base md:text-[18px] leading-[1.55] text-[#535046]">
                  {t.whyUs.card3.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-card">
        <div className="mx-auto lg:pl-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="py-10 px-4">
              <h2 className="font-serif text-4xl md:text-[52px] leading-none mb-6 text-[#c7aa70]">{t.about.title}</h2>
              <p className="text-base md:text-[18px] leading-[1.55] mb-4 text-[#535046]">
                {t.about.paragraph1}
              </p>
              <p className="text-base md:text-[18px] leading-[1.55] text-[#535046]">
                {t.about.paragraph2}
              </p>
            </div>
            <div className="relative h-full w-auto overflow-hidden">
              <ImageWithFallback
                src={vineyard_img}
                alt="Sustainable agriculture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/*/!* Products Section *!/*/}
      {/*<section id="products" className="py-20 px-4 bg-muted/30">*/}
      {/*  <div className="max-w-6xl mx-auto">*/}
      {/*    <div className="text-center mb-12">*/}
      {/*      <h2 className="text-4xl mb-4 text-primary">{t.products.title}</h2>*/}
      {/*      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">*/}
      {/*        {t.products.subtitle}*/}
      {/*      </p>*/}
      {/*    </div>*/}

      {/*    <div className="grid md:grid-cols-3 gap-8">*/}
      {/*      <Card className="border-border hover:shadow-lg transition-shadow">*/}
      {/*        <div className="relative h-48 overflow-hidden rounded-t-lg">*/}
      {/*          <ImageWithFallback*/}
      {/*            src="https://images.unsplash.com/photo-1748342319942-223b99937d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBtYXJrZXR8ZW58MXx8fHwxNzY5ODA5MDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"*/}
      {/*            alt="Fresh produce"*/}
      {/*            className="w-full h-full object-cover"*/}
      {/*          />*/}
      {/*        </div>*/}
      {/*        <CardContent className="pt-6">*/}
      {/*          <h3 className="text-2xl mb-3 text-primary">{t.products.produce.title}</h3>*/}
      {/*          <p className="text-muted-foreground">*/}
      {/*            {t.products.produce.description}*/}
      {/*          </p>*/}
      {/*        </CardContent>*/}
      {/*      </Card>*/}

      {/*      <Card className="border-border hover:shadow-lg transition-shadow">*/}
      {/*        <div className="relative h-48 overflow-hidden rounded-t-lg">*/}
      {/*          <ImageWithFallback*/}
      {/*            src="https://images.unsplash.com/photo-1658049682739-1e9d97cbc7b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlJTIwZ3JhaW5zfGVufDF8fHx8MTc2OTg4MzU0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"*/}
      {/*            alt="Grains and cereals"*/}
      {/*            className="w-full h-full object-cover"*/}
      {/*          />*/}
      {/*        </div>*/}
      {/*        <CardContent className="pt-6">*/}
      {/*          <h3 className="text-2xl mb-3 text-primary">{t.products.grains.title}</h3>*/}
      {/*          <p className="text-muted-foreground">*/}
      {/*            {t.products.grains.description}*/}
      {/*          </p>*/}
      {/*        </CardContent>*/}
      {/*      </Card>*/}

      {/*      <Card className="border-border hover:shadow-lg transition-shadow">*/}
      {/*        <div className="relative h-48 overflow-hidden rounded-t-lg">*/}
      {/*          <ImageWithFallback*/}
      {/*            src="https://images.unsplash.com/photo-1760445529395-35c2534ae892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwb2xpdmUlMjBvaWwlMjBwcm9kdWN0c3xlbnwxfHx8fDE3Njk4ODM1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"*/}
      {/*            alt="Specialty products"*/}
      {/*            className="w-full h-full object-cover"*/}
      {/*          />*/}
      {/*        </div>*/}
      {/*        <CardContent className="pt-6">*/}
      {/*          <h3 className="text-2xl mb-3 text-primary">{t.products.specialty.title}</h3>*/}
      {/*          <p className="text-muted-foreground">*/}
      {/*            {t.products.specialty.description}*/}
      {/*          </p>*/}
      {/*        </CardContent>*/}
      {/*      </Card>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/*/!* Values Section *!/*/}
      {/*<section id="values" className="py-20 px-4 bg-card">*/}
      {/*  <div className="max-w-6xl mx-auto">*/}
      {/*    <div className="text-center mb-12">*/}
      {/*      <h2 className="text-4xl mb-4 text-primary">{t.values.title}</h2>*/}
      {/*      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">*/}
      {/*        {t.values.subtitle}*/}
      {/*      </p>*/}
      {/*    </div>*/}

      {/*    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">*/}
      {/*      <div className="text-center">*/}
      {/*        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">*/}
      {/*          <Leaf className="w-8 h-8 text-secondary" />*/}
      {/*        </div>*/}
      {/*        <h3 className="text-xl mb-3">{t.values.sustainability.title}</h3>*/}
      {/*        <p className="text-muted-foreground">*/}
      {/*          {t.values.sustainability.description}*/}
      {/*        </p>*/}
      {/*      </div>*/}

      {/*      <div className="text-center">*/}
      {/*        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">*/}
      {/*          <Heart className="w-8 h-8 text-accent" />*/}
      {/*        </div>*/}
      {/*        <h3 className="text-xl mb-3">{t.values.authenticity.title}</h3>*/}
      {/*        <p className="text-muted-foreground">*/}
      {/*          {t.values.authenticity.description}*/}
      {/*        </p>*/}
      {/*      </div>*/}

      {/*      <div className="text-center">*/}
      {/*        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">*/}
      {/*          <Users className="w-8 h-8 text-primary" />*/}
      {/*        </div>*/}
      {/*        <h3 className="text-xl mb-3">{t.values.partnership.title}</h3>*/}
      {/*        <p className="text-muted-foreground">*/}
      {/*          {t.values.partnership.description}*/}
      {/*        </p>*/}
      {/*      </div>*/}

      {/*      <div className="text-center">*/}
      {/*        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">*/}
      {/*          <Package className="w-8 h-8 text-secondary" />*/}
      {/*        </div>*/}
      {/*        <h3 className="text-xl mb-3">{t.values.quality.title}</h3>*/}
      {/*        <p className="text-muted-foreground">*/}
      {/*          {t.values.quality.description}*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* Contact Section */}
      <section id="contact" className="pt-20 pb-10 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-[52px] leading-none mb-6">{t.contact.title}</h2>
          <p className="text-base md:text-[18px] leading-[1.55] mb-12 opacity-90">
            {t.contact.subtitle}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-3" />
              <h4 className="font-serif text-xl mb-2">{t.contact.officeLabel}</h4>
              <p className="text-base leading-[1.55] opacity-90">{t.contact.officeAddress}</p>
            </div>

            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-3" />
              <h4 className="font-serif text-xl mb-2">{t.contact.warehouseLabel}</h4>
              <p className="text-base leading-[1.55] opacity-90">{t.contact.warehouseAddress}</p>
            </div>
          </div>

          <div className="mt-12">
            <a 
              href="/contact.html"
              className="inline-block bg-primary-foreground hover:border-4 hover:border-primary/40 text-primary px-8 hover:px-16 py-4 rounded-full text-xl font-semibold hover:bg-opacity-90 transition-all"
            >
              {t.nav.contact}
            </a>
          </div>
        </div>
      </section>
      {/*WhatsApp Button*/}
      <WhatsAppButton />

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
