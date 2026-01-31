import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Leaf, Heart, Users, Package, Mail, Phone, MapPin, Globe } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";

type Language = 'en' | 'de' | 'tr';

const translations = {
  en: {
    nav: {
      about: "About",
      products: "Products",
      values: "Our Values",
      contact: "Contact",
    },
    hero: {
      title: "Wholesale Excellence in Fine Foods",
      subtitle: "Authentic, sustainable, and organic - delivering quality to your table",
      cta: "Get in Touch",
    },
    about: {
      title: "Who We Are",
      paragraph1: "UZAY Fine Foods GmbH is a trusted wholesale partner for businesses seeking authentic, sustainable, and high-quality food products. We believe in conscious sourcing and building lasting relationships with producers who share our values.",
      paragraph2: "Our commitment to excellence means every product we offer meets the highest standards of quality, traceability, and environmental responsibility. We're not just distributors—we're curators of fine foods that tell a story of craftsmanship and care.",
    },
    products: {
      title: "Our Product Range",
      subtitle: "From farm to table, we offer a carefully curated selection of wholesale foods",
      produce: {
        title: "Fresh Produce",
        description: "Seasonal organic vegetables and fruits sourced directly from certified sustainable farms",
      },
      grains: {
        title: "Grains & Cereals",
        description: "Heritage grains, organic rice, and artisanal pasta from traditional producers",
      },
      specialty: {
        title: "Specialty Items",
        description: "Premium olive oils, artisanal preserves, and handcrafted condiments",
      },
    },
    values: {
      title: "Our Values",
      subtitle: "Every partnership we forge is built on these fundamental principles",
      sustainability: {
        title: "Sustainability",
        description: "Environmentally conscious sourcing and minimal ecological impact",
      },
      authenticity: {
        title: "Authenticity",
        description: "Genuine products with traceable origins and transparent practices",
      },
      partnership: {
        title: "Partnership",
        description: "Building lasting relationships with producers and clients alike",
      },
      quality: {
        title: "Quality",
        description: "Uncompromising standards for every product we distribute",
      },
    },
    contact: {
      title: "Let's Work Together",
      subtitle: "Interested in partnering with us or learning more about our wholesale offerings?",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationValue: "Germany",
      cta: "Request a Catalog",
    },
    footer: {
      copyright: "© 2025 UZAY Fine Foods GmbH. All rights reserved.",
    },
  },
  de: {
    nav: {
      about: "Über uns",
      products: "Produkte",
      values: "Unsere Werte",
      contact: "Kontakt",
    },
    hero: {
      title: "Großhandel-Exzellenz in feinen Lebensmitteln",
      subtitle: "Authentisch, nachhaltig und biologisch - Qualität für Ihren Tisch",
      cta: "Kontakt aufnehmen",
    },
    about: {
      title: "Wer wir sind",
      paragraph1: "UZAY Fine Foods GmbH ist ein vertrauenswürdiger Großhandelspartner für Unternehmen, die authentische, nachhaltige und hochwertige Lebensmittel suchen. Wir glauben an bewusste Beschaffung und den Aufbau dauerhafter Beziehungen zu Produzenten, die unsere Werte teilen.",
      paragraph2: "Unser Engagement für Exzellenz bedeutet, dass jedes Produkt, das wir anbieten, den höchsten Standards in Bezug auf Qualität, Rückverfolgbarkeit und Umweltverantwortung entspricht. Wir sind nicht nur Distributoren – wir sind Kuratoren feiner Lebensmittel, die eine Geschichte von Handwerkskunst und Sorgfalt erzählen.",
    },
    products: {
      title: "Unser Produktsortiment",
      subtitle: "Vom Hof auf den Tisch bieten wir eine sorgfältig kuratierte Auswahl an Großhandelslebensmitteln",
      produce: {
        title: "Frische Produkte",
        description: "Saisonales Bio-Gemüse und Obst direkt von zertifizierten nachhaltigen Bauernhöfen",
      },
      grains: {
        title: "Getreide & Zerealien",
        description: "Traditionelle Getreidesorten, Bio-Reis und handwerkliche Pasta von traditionellen Produzenten",
      },
      specialty: {
        title: "Spezialitäten",
        description: "Premium-Olivenöle, handwerkliche Konserven und handgefertigte Gewürze",
      },
    },
    values: {
      title: "Unsere Werte",
      subtitle: "Jede Partnerschaft, die wir eingehen, basiert auf diesen grundlegenden Prinzipien",
      sustainability: {
        title: "Nachhaltigkeit",
        description: "Umweltbewusste Beschaffung und minimale ökologische Auswirkungen",
      },
      authenticity: {
        title: "Authentizität",
        description: "Echte Produkte mit nachvollziehbarer Herkunft und transparenten Praktiken",
      },
      partnership: {
        title: "Partnerschaft",
        description: "Aufbau dauerhafter Beziehungen zu Produzenten und Kunden gleichermaßen",
      },
      quality: {
        title: "Qualität",
        description: "Kompromisslose Standards für jedes Produkt, das wir vertreiben",
      },
    },
    contact: {
      title: "Lassen Sie uns zusammenarbeiten",
      subtitle: "Interessiert an einer Partnerschaft mit uns oder möchten Sie mehr über unser Großhandelsangebot erfahren?",
      email: "E-Mail",
      phone: "Telefon",
      location: "Standort",
      locationValue: "Deutschland",
      cta: "Katalog anfordern",
    },
    footer: {
      copyright: "© 2025 UZAY Fine Foods GmbH. Alle Rechte vorbehalten.",
    },
  },
  tr: {
    nav: {
      about: "Hakkımızda",
      products: "Ürünler",
      values: "Değerlerimiz",
      contact: "İletişim",
    },
    hero: {
      title: "Kaliteli Gıdalarda Toptan Satış Mükemmelliği",
      subtitle: "Otantik, sürdürülebilir ve organik - sofranıza kalite getiriyoruz",
      cta: "İletişime Geçin",
    },
    about: {
      title: "Biz Kimiz",
      paragraph1: "UZAY Fine Foods GmbH, otantik, sürdürülebilir ve yüksek kaliteli gıda ürünleri arayan işletmeler için güvenilir bir toptan satış ortağıdır. Bilinçli tedarik ve değerlerimizi paylaşan üreticilerle kalıcı ilişkiler kurmaya inanıyoruz.",
      paragraph2: "Mükemmelliğe olan bağlılığımız, sunduğumuz her ürünün kalite, izlenebilirlik ve çevresel sorumluluk açısından en yüksek standartları karşıladığı anlamına gelir. Sadece distribütör değiliz - ustalık ve özenin hikayesini anlatan kaliteli gıdaların küratörleriyiz.",
    },
    products: {
      title: "Ürün Yelpazemiz",
      subtitle: "Çiftlikten sofraya, özenle seçilmiş toptan gıda ürünleri sunuyoruz",
      produce: {
        title: "Taze Ürünler",
        description: "Sertifikalı sürdürülebilir çiftliklerden doğrudan temin edilen mevsimlik organik sebze ve meyveler",
      },
      grains: {
        title: "Tahıllar ve Hububat",
        description: "Geleneksel üreticilerden gelen eski tahıllar, organik pirinç ve zanaatkar makarna",
      },
      specialty: {
        title: "Özel Ürünler",
        description: "Premium zeytinyağları, zanaatkar konserveler ve el yapımı baharatlar",
      },
    },
    values: {
      title: "Değerlerimiz",
      subtitle: "Kurduğumuz her ortaklık bu temel ilkeler üzerine kuruludur",
      sustainability: {
        title: "Sürdürülebilirlik",
        description: "Çevre bilinci ile tedarik ve minimum ekolojik etki",
      },
      authenticity: {
        title: "Özgünlük",
        description: "İzlenebilir kökenleri ve şeffaf uygulamaları olan gerçek ürünler",
      },
      partnership: {
        title: "Ortaklık",
        description: "Üreticiler ve müşterilerle kalıcı ilişkiler kurma",
      },
      quality: {
        title: "Kalite",
        description: "Dağıttığımız her ürün için taviz vermez standartlar",
      },
    },
    contact: {
      title: "Birlikte Çalışalım",
      subtitle: "Bizimle ortaklık kurmak veya toptan satış tekliflerimiz hakkında daha fazla bilgi edinmek ister misiniz?",
      email: "E-posta",
      phone: "Telefon",
      location: "Konum",
      locationValue: "Almanya",
      cta: "Katalog Talep Edin",
    },
    footer: {
      copyright: "© 2025 UZAY Fine Foods GmbH. Tüm hakları saklıdır.",
    },
  },
};

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-border bg-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-secondary" />
              <span className="text-xl font-medium text-primary">UZAY Fine Foods GmbH</span>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">{t.nav.about}</a>
              <a href="#products" className="text-foreground hover:text-primary transition-colors">{t.nav.products}</a>
              <a href="#values" className="text-foreground hover:text-primary transition-colors">{t.nav.values}</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">{t.nav.contact}</a>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors">
                <Globe className="w-6 h-6" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem onClick={() => setLanguage('en')}>English</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('de')}>Deutsch</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('tr')}>Türkçe</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1748342319942-223b99937d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXJzJTIwbWFya2V0JTIwZnJlc2glMjBmb29kfGVufDF8fHx8MTc2OTg4MzU0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Fresh organic produce"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/40"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl mb-6">{t.hero.title}</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            {t.hero.subtitle}
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
            {t.hero.cta}
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6 text-primary">{t.about.title}</h2>
              <p className="text-lg mb-4 text-muted-foreground leading-relaxed">
                {t.about.paragraph1}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.paragraph2}
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1658049682739-1e9d97cbc7b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlJTIwZ3JhaW5zfGVufDF8fHx8MTc2OTg4MzU0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sustainable agriculture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-primary">{t.products.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.products.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1748342319942-223b99937d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBtYXJrZXR8ZW58MXx8fHwxNzY5ODA5MDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Fresh produce"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-2xl mb-3 text-primary">{t.products.produce.title}</h3>
                <p className="text-muted-foreground">
                  {t.products.produce.description}
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1658049682739-1e9d97cbc7b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlJTIwZ3JhaW5zfGVufDF8fHx8MTc2OTg4MzU0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Grains and cereals"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-2xl mb-3 text-primary">{t.products.grains.title}</h3>
                <p className="text-muted-foreground">
                  {t.products.grains.description}
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1760445529395-35c2534ae892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwb2xpdmUlMjBvaWwlMjBwcm9kdWN0c3xlbnwxfHx8fDE3Njk4ODM1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Specialty products"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-2xl mb-3 text-primary">{t.products.specialty.title}</h3>
                <p className="text-muted-foreground">
                  {t.products.specialty.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-primary">{t.values.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.values.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                <Leaf className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl mb-3">{t.values.sustainability.title}</h3>
              <p className="text-muted-foreground">
                {t.values.sustainability.description}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl mb-3">{t.values.authenticity.title}</h3>
              <p className="text-muted-foreground">
                {t.values.authenticity.description}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl mb-3">{t.values.partnership.title}</h3>
              <p className="text-muted-foreground">
                {t.values.partnership.description}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                <Package className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl mb-3">{t.values.quality.title}</h3>
              <p className="text-muted-foreground">
                {t.values.quality.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-20 pb-10 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6">{t.contact.title}</h2>
          <p className="text-xl mb-12 opacity-90">
            {t.contact.subtitle}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 mb-3" />
              <h4 className="mb-2">{t.contact.email}</h4>
              <a href="mailto:info@uzayfinefoods.de" className="opacity-90 hover:opacity-100 transition-opacity">
                info@uzayfinefoods.de
              </a>
            </div>

            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-3" />
              <h4 className="mb-2">{t.contact.phone}</h4>
              <a href="tel:+491234567890" className="opacity-90 hover:opacity-100 transition-opacity">
                +49 123 456 7890
              </a>
            </div>

            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-3" />
              <h4 className="mb-2">{t.contact.location}</h4>
              <p className="opacity-90">{t.contact.locationValue}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}