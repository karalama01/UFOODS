import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Language = 'en' | 'de' | 'tr';

export const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            products: "Products",
            values: "Mission & Vision",
            contact: "Contact",
            yasou: "YASOU - Products",
        },
        hero: {
            title: "Wholesale Excellence in Fine Foods",
            subtitle: "Authentic, sustainable, and organic - delivering quality to your table",
            cta: "Get in Touch",
        },
        whyUs: {
            title: "Why Choose Us",
            card1: {
                title: "Direct Sourcing",
                description: "We work directly with farmers and producers to ensure the freshest products and best prices for our wholesale partners",
            },
            card2: {
                title: "Quality Assurance",
                description: "Every product undergoes rigorous quality checks and meets international food safety standards",
            },
            card3: {
                title: "Reliable Supply Chain",
                description: "Consistent availability and timely delivery to keep your business running smoothly",
            },
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
        missionVision: {
            title: "Mission & Vision",
            subtitle: "Our direction is shaped by purpose today and ambition for tomorrow.",
            missionTitle: "Our Mission",
            missionBody: "To deliver authentic and sustainable foods with consistent quality, transparent sourcing, and reliable service for our partners.",
            missionParagraphs: [
                "At YASOU, our mission is to bring authentic Mediterranean flavors to international markets with reliable quality and consistent supply.",
                "We focus on offering carefully selected fine food products that meet modern food safety standards while preserving traditional taste and natural ingredients.",
                "By working closely with our partners, wholesalers and retailers, we aim to build long-term business relationships based on trust, stability and professional service.",
            ],
            visionTitle: "Our Vision",
            visionBody: "To become the leading trusted fine-food wholesale partner in Europe by building long-term value for producers, businesses, and communities.",
            visionParagraphs: [
                "Our vision is to become a trusted fine foods supplier recognized across Europe for quality, reliability, and sustainable growth.",
                "We aim to expand our product range while maintaining high standards in sourcing, packaging and logistics.",
                "By combining tradition with modern production and supply solutions, we strive to make Mediterranean fine foods accessible to more markets worldwide.",
            ],
        },
        yasou: {
            heroTitle: "YASOU",
            heroSubtitle: "Premium Mediterranean specialties crafted with respect for nature and tradition.",
            introTitle: "Organic Taste, Premium Craft",
            introBody:
                "YASOU brings the pure flavors of the Aegean to your table. From tender grape leaves to sun-dried tomatoes, every item is selected for its authentic taste, clean ingredients, and consistent quality.",
            productsTitle: "Our Products",
            productsSubtitle: "Two signature products, perfected for chefs, retailers, and fine food lovers.",
            items: {
                grapeLeavesJar: {
                    name: "Brined Vine Leaves",
                    bt1: "",
                    bt2: "<table style='border: 1px solid #c7aa70; margin: 0 auto; text-align: center'><thead><tr><th style='border: 1px solid #c7aa70; padding: 0 4px'></th><th style='border: 1px solid #c7aa70; padding: 0 4px'>1</th><th style='border: 1px solid #c7aa70; padding: 0 4px'>2</th><th style='border: 1px solid #c7aa70; padding: 0 4px'>3</th></tr></thead><tbody><tr><td style='border: 1px solid #c7aa70; padding: 0 4px'>Volume</td><td style='border: 1px solid #c7aa70; padding: 0 4px'>660cc</td><td style='border: 1px solid #c7aa70; padding: 0 4px'>1062cc</td><td style='border: 1px solid #c7aa70; padding: 0 4px'>1500cc</td></tr><tr><td style='border: 1px solid #c7aa70; padding: 0 4px'>Net</td><td style='border: 1px solid #c7aa70; padding: 0 4px'>660g</td><td style='border: 1px solid #c7aa70; padding: 0 4px'>1000g</td><td style='border: 1px solid #c7aa70; padding: 0 4px'>1500g</td></tr><tr><td style='border: 1px solid #c7aa70; padding: 0 4px'>Drained</td><td style='border: 1px solid #c7aa70; padding: 0 4px'>350g</td><td style='border: 1px solid #c7aa70; padding: 0 4px'>450g</td><td style='border: 1px solid #c7aa70; padding: 0 4px'>650g</td></tr></tbody></table>",
                    type: "",
                    imageAlt: "YASOU grape leaves",
                },
                grapeLeavesVaccum: {
                    name: "Vacuum-Sealed Vine Leaves",
                    bt1: "Options:",
                    bt2: "350g / 700g",
                    type: "",
                    imageAlt: "YASOU Grape Leaves — Vacuum Bag",
                },
            },
        },
        contact: {
            title: "Let's Work Together",
            subtitle: "Interested in partnering with us or learning more about our wholesale offerings?",
            email: "Email",
            phone: "WhatsApp",
            location: "Adress",
            locationValue: "NIEHLER STR.446 50735 KOLN NIEHL GERMANY",
            officeLabel: "Office Address",
            warehouseLabel: "Warehouse Address",
            officeAddress: "NIEHLER STR.446 50735 KOLN NIEHL GERMANY",
            warehouseAddress: "SCHLAVENHORST 86-90, 46395 BOCHOLT, GERMANY",
            cta: "Request a Catalog",
            form: {
                name: "Full Name",
                namePlaceholder: "John Doe",
                email: "Email Address",
                emailPlaceholder: "johndoe@mail.com",
                phone: "Phone Number",
                phonePlaceholder: "+491234567890",
                message: "Your Message",
                submit: "Send Message",
                sending: "Sending...",
                success: "Thanks! We received your message.",
                error: "Sorry, something went wrong.",
            },
            emailLabel: "Contact us at 'contact@ufoods.de'",
        },
        footer: {
            copyright: "© 2025 UZAY Fine Foods GmbH. All rights reserved.",
        },
        whatsapp: {
            label: "Contact us on WhatsApp",
        },
    },
    de: {
        nav: {
            home: "Startseite",
            about: "Über uns",
            products: "Produkte",
            values: "Mission & Vision",
            contact: "Kontakt",
            yasou: "YASOU - Produkte",
        },
        hero: {
            title: "Großhandel-Exzellenz in feinen Lebensmitteln",
            subtitle: "Authentisch, nachhaltig und biologisch - Qualität für Ihren Tisch",
            cta: "Kontakt aufnehmen",
        },
        whyUs: {
            title: "Warum uns wählen",
            card1: {
                title: "Direkte Beschaffung",
                description: "Wir arbeiten direkt mit Landwirten und Produzenten zusammen, um die frischesten Produkte und besten Preise für unsere Großhandelspartner zu gewährleisten",
            },
            card2: {
                title: "Qualitätssicherung",
                description: "Jedes Produkt durchläuft strenge Qualitätskontrollen und entspricht internationalen Lebensmittelsicherheitsstandards",
            },
            card3: {
                title: "Zuverlässige Lieferkette",
                description: "Konstante Verfügbarkeit und pünktliche Lieferung, damit Ihr Geschäft reibungslos läuft",
            },
        },
        about: {
            title: "Wer wir sind",
            paragraph1: "UZAY Fine Foods GmbH ist ein vertrauenswürdiger Großhandelspartner für Unternehmen, die authentische, nachhaltige und hochwertige Lebensmittel suchen. Wir glauben an bewusste Beschaffung und den Aufbau dauerhafter Beziehungen zu Produzenten, die unsere Werte teilen.",
            paragraph2: "Unser Engagement für Exzellenz bedeutet, dass jedes Produkt, das wir anbieten, den höchsten Standards in Bezug auf Qualität, Rückverfolgbarkeit und Umweltverantwortung entspricht. Wir sind nicht nur Für Distributoren – wir sind auch Kuratoren feiner Lebensmittel, die eine Geschichte von Handwerkskunst und Sorgfalt erzählen.",
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
        missionVision: {
            title: "Mission & Vision",
            subtitle: "Unsere Richtung wird heute von unserem Zweck und morgen von unserem Anspruch bestimmt.",
            missionTitle: "Unsere Mission",
            missionBody: "Authentische und nachhaltige Lebensmittel mit gleichbleibender Qualität, transparenter Beschaffung und zuverlässigem Service für unsere Partner bereitzustellen.",
            missionParagraphs: [
                "Bei YASOU ist es unsere Mission, authentische mediterrane Aromen mit zuverlässiger Qualität und konstanter Versorgung auf internationale Märkte zu bringen.",
                "Wir konzentrieren uns darauf, sorgfältig ausgewählte Feinkostprodukte anzubieten, die moderne Lebensmittelsicherheitsstandards erfüllen und gleichzeitig traditionellen Geschmack und natürliche Zutaten bewahren.",
                "Durch die enge Zusammenarbeit mit unseren Partnern, Großhändlern und Einzelhändlern möchten wir langfristige Geschäftsbeziehungen aufbauen, die auf Vertrauen, Stabilität und professionellem Service basieren.",
            ],
            visionTitle: "Unsere Vision",
            visionBody: "Der führende und vertrauenswürdige Feinkost-Großhandelspartner in Europa zu werden und langfristigen Mehrwert für Produzenten, Unternehmen und Gemeinschaften zu schaffen.",
            visionParagraphs: [
                "Unsere Vision ist es, ein vertrauenswürdiger Feinkostlieferant zu werden, der in ganz Europa für Qualität, Zuverlässigkeit und nachhaltiges Wachstum anerkannt ist.",
                "Wir streben danach, unser Produktsortiment zu erweitern und gleichzeitig hohe Standards bei Beschaffung, Verpackung und Logistik beizubehalten.",
                "Durch die Kombination von Tradition mit modernen Produktions- und Lieferlösungen streben wir danach, mediterrane Feinkost weltweit für mehr Märkte zugänglich zu machen.",
            ],
        },
        yasou: {
            heroTitle: "YASOU",
            heroSubtitle: "Premium-Mittelmeer-Spezialitäten, mit Respekt für Natur und Tradition hergestellt.",
            introTitle: "Bio-Genuss, Premium-Handwerk",
            introBody:
                "YASOU bringt die reinen Aromen der Ägäis auf Ihren Tisch. Von zarten Weinblättern bis zu sonnengetrockneten Tomaten wird jedes Produkt nach authentischem Geschmack, sauberen Zutaten und gleichbleibender Qualität ausgewählt.",
            productsTitle: "Unsere Produkte",
            productsSubtitle: "Zwei Signature-Produkte, perfektioniert für Köche, Händler und Feinkostliebhaber.",
            items: {
                grapeLeavesJar: {
                    name: "Salzlake Weinblätter",
                    bt1: "",
                    bt2: "<table style='border: 1px solid #c7aa70; margin: 0 auto; text-align: center'><thead><tr><th style='border: 1px solid #c7aa70; padding: 0 4px'></th><th style='border: 1px solid #c7aa70; padding: 0 4px'>1</th><th style='border: 1px solid #c7aa70; padding: 0 4px'>2</th><th style='border: 1px solid #c7aa70; padding: 0 4px'>3</th></tr></thead><tbody><tr><td style='border: 1px solid #c7aa70; padding: 0 4px'>Volumen</td><td style='border: 1px solid #c7aa70; padding: 0 4px'>660cc</td><td style='border: 1px solid #c7aa70; padding: 0 4px'>1062cc</td><td style='border: 1px solid #c7aa70; padding: 0 4px'>1500cc</td></tr><tr><td style='border: 1px solid #c7aa70; padding: 0 4px'>Netto</td><td style='border: 1px solid #c7aa70; padding: 0 4px'>660g</td><td style='border: 1px solid #c7aa70; padding: 0 4px'>1000g</td><td style='border: 1px solid #c7aa70; padding: 0 4px'>1500g</td></tr><tr><td style='border: 1px solid #c7aa70; padding: 0 4px'>Abtropf</td><td style='border: 1px solid #c7aa70; padding: 0 4px'>350g</td><td style='border: 1px solid #c7aa70; padding: 0 4px'>450g</td><td style='border: 1px solid #c7aa70; padding: 0 4px'>650g</td></tr></tbody></table>",
                    type: "",
                    imageAlt: "YASOU Weinblätter",
                },
                grapeLeavesVaccum: {
                    name: "Vakuumierte Weinblätter",
                    bt1: "Optionen:",
                    bt2: "350g / 700g",
                    type: "",
                    imageAlt: "YASOU Weinblätter - Vakuumbeutel",
                },
            },
        },
        contact: {
            title: "Lassen Sie uns zusammenarbeiten",
            subtitle: "Interessiert an einer Partnerschaft mit uns oder möchten Sie mehr über unser Großhandelsangebot erfahren?",
            email: "E-Mail",
            phone: "WhatsApp",
            location: "Adresse",
            locationValue: "NIEHLER STR.446 50735 KOLN NIEHL DEUTSCHLAND",
            officeLabel: "Büroadresse",
            warehouseLabel: "Lageradresse",
            officeAddress: "NIEHLER STR.446 50735 KOLN NIEHL DEUTSCHLAND",
            warehouseAddress: "SCHLAVENHORST 86-90, 46395 BOCHOLT, DEUTSCHLAND",
            cta: "Katalog anfordern",
            form: {
                name: "Vollständiger Name",
                namePlaceholder: "Max Mustermann",
                email: "E-Mail-Adresse",
                emailPlaceholder: "max.mustermann@mail.de",
                phone: "Telefonnummer",
                phonePlaceholder: "+491234567890",
                message: "Ihre Nachricht",
                submit: "Nachricht senden",
                sending: "Wird gesendet...",
                success: "Danke! Wir haben Ihre Nachricht erhalten.",
                error: "Entschuldigung, etwas ist schiefgelaufen.",
            },
            emailLabel: "Kontaktieren Sie uns unter 'contact@ufoods.de'.",
        },
        footer: {
            copyright: "© 2025 UZAY Fine Foods GmbH. Alle Rechte vorbehalten.",
        },
        whatsapp: {
            label: "Kontaktieren Sie uns auf WhatsApp",
        },
    },
    tr: {
        nav: {
            home: "Anasayfa",
            about: "Hakkımızda",
            products: "Ürünler",
            values: "Misyon & Vizyon",
            contact: "İletişim",
            yasou: "YASOU - Ürünler",
        },
        hero: {
            title: "Kaliteli Gıdalarda Toptan Satış Mükemmelliği",
            subtitle: "Otantik, sürdürülebilir ve organik - sofranıza kalite getiriyoruz",
            cta: "İletişime Geçin",
        },
        whyUs: {
            title: "Neden Bizi Seçmelisiniz",
            card1: {
                title: "Doğrudan Tedarik",
                description: "Toptan satış ortaklarımıza en taze ürünleri ve en iyi fiyatları sağlamak için çiftçiler ve üreticilerle doğrudan çalışıyoruz",
            },
            card2: {
                title: "Kalite Güvencesi",
                description: "Her ürün titiz kalite kontrolleri geçirir ve uluslararası gıda güvenliği standartlarını karşılar",
            },
            card3: {
                title: "Güvenilir Tedarik Zinciri",
                description: "İşinizin sorunsuz bir şekilde devam etmesi için tutarlı bulunabilirlik ve zamanında teslimat",
            },
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
        missionVision: {
            title: "Misyon & Vizyon",
            subtitle: "Yönümüz, bugün amacımızla ve yarın hedeflerimizle şekillenir.",
            missionTitle: "Misyonumuz",
            missionBody: "İş ortaklarımıza otantik ve sürdürülebilir gıdaları; tutarlı kalite, şeffaf tedarik ve güvenilir hizmet ile sunmak.",
            missionParagraphs: [
                "YASOU'da misyonumuz, güvenilir kalite ve tutarlı tedarikle otantik Akdeniz lezzetlerini uluslararası pazarlara sunmaktır.",
                "Geleneksel tat ve doğal içerikleri korurken modern gıda güvenliği standartlarını karşılayan, özenle seçilmiş gurme gıda ürünleri sunmaya odaklanıyoruz.",
                "Ortaklarımız, toptancılar ve perakendecilerle yakın çalışarak, güven, istikrar ve profesyonel hizmet temelinde uzun vadeli iş ilişkileri kurmayı hedefliyoruz.",
            ],
            visionTitle: "Vizyonumuz",
            visionBody: "Fine Foods kategorisinde Almanya için uzun vadeli değer oluşturarak Avrupa'nın güvenilir gurme gıda toptan satış ortağı olmak.",
            visionParagraphs: [
                "Vizyonumuz, kalite, güvenilirlik ve sürdürülebilir büyüme açısından Avrupa çapında tanınan güvenilir bir gurme gıda tedarikçisi olmaktır.",
                "Tedarik, paketleme ve lojistikte yüksek standartları korurken ürün yelpazemizi genişletmeyi hedefliyoruz.",
                "Geleneği modern üretim ve tedarik çözümleriyle birleştirerek, Akdeniz gurme gıdalarını dünya çapında daha fazla pazara erişilebilir kılmak için çabalıyoruz.",
            ],
        },
        yasou: {
            heroTitle: "YASOU",
            heroSubtitle: "Doğaya ve geleneğe saygı ile üretilen premium Akdeniz lezzetleri.",
            introTitle: "Organik Lezzet, Premium İşçilik",
            introBody:
                "YASOU, Ege'nin saf lezzetlerini sofranıza getirir. Yumuşak asma yaprağından güneşte kurutulmuş domatese kadar her ürün; gerçek tat, temiz içerik ve tutarlı kalite için seçilir.",
            productsTitle: "Ürünlerimiz",
            productsSubtitle: "Şefler, perakendeciler ve gurme tutkunları için mükemmelleştirilmiş iki imza ürün.",
            items: {
                grapeLeavesJar: {
                    name: "Salamura Asma Yaprağı",
                    bt1: "",
                    bt2: "<table style='border: 1px solid #c7aa70; margin: 0 auto; text-align: center'><thead><tr><th style='border: 1px solid #c7aa70; padding: 0 4px'></th><th style='border: 1px solid #c7aa70; padding: 0 4px'>1</th><th style='border: 1px solid #c7aa70; padding: 0 4px'>2</th><th style='border: 1px solid #c7aa70; padding: 0 4px'>3</th></tr></thead><tbody><tr><td style='border: 1px solid #c7aa70; padding: 0 4px'>Hacim</td><td style='border: 1px solid #c7aa70; padding: 0 4px'>660cc</td><td style='border: 1px solid #c7aa70; padding: 0 4px'>1062cc</td><td style='border: 1px solid #c7aa70; padding: 0 4px'>1500cc</td></tr><tr><td style='border: 1px solid #c7aa70; padding: 0 4px'>Net</td><td style='border: 1px solid #c7aa70; padding: 0 4px'>660g</td><td style='border: 1px solid #c7aa70; padding: 0 4px'>1000g</td><td style='border: 1px solid #c7aa70; padding: 0 4px'>1500g</td></tr><tr><td style='border: 1px solid #c7aa70; padding: 0 4px'>Süzülmüş</td><td style='border: 1px solid #c7aa70; padding: 0 4px'>350g</td><td style='border: 1px solid #c7aa70; padding: 0 4px'>450g</td><td style='border: 1px solid #c7aa70; padding: 0 4px'>650g</td></tr></tbody></table>",
                    type: "",
                    imageAlt: "YASOU asma yaprağı",
                },
                grapeLeavesVaccum: {
                    name: "Vakumlanmış Asma Yaprağı",
                    bt1: "Seçenekler:",
                    bt2: "350g / 700g",
                    type: "",
                    imageAlt: "YASOU Üzüm Yaprakları - Vakumlu Torba",
                },
            },
        },
        contact: {
            title: "Birlikte Çalışalım",
            subtitle: "Bizimle ortaklık kurmak veya toptan satış tekliflerimiz hakkında daha fazla bilgi edinmek ister misiniz?",
            email: "E-posta",
            phone: "WhatsApp",
            location: "Adres",
            locationValue: "NIEHLER STR.446 50735 KOLN NIEHL ALMANYA",
            officeLabel: "Ofis Adresi",
            warehouseLabel: "Depo Adresi",
            officeAddress: "NIEHLER STR.446 50735 KOLN NIEHL ALMANYA",
            warehouseAddress: "SCHLAVENHORST 86-90, 46395 BOCHOLT, ALMANYA",
            cta: "Katalog Talep Edin",
            form: {
                name: "Ad Soyad",
                namePlaceholder: "John Doe",
                email: "E-posta Adresi",
                emailPlaceholder: "johndoe@mail.com",
                phone: "Telefon Numarası",
                phonePlaceholder: "+491234567890",
                message: "Mesajınız",
                submit: "Mesaj Gönder",
                sending: "Gönderiliyor...",
                success: "Teşekkürler! Mesajınızı aldık.",
                error: "Üzgünüz, bir şeyler yanlış gitti.",
            },
            emailLabel: "Bize 'contact@ufoods.de' adresinden ulaşın.",
        },
        footer: {
            copyright: "© 2025 UZAY Fine Foods GmbH. Tüm hakları saklıdır.",
        },
        whatsapp: {
            label: "WhatsApp'tan bize ulaşın",
        },
    },
};

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof translations.en;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
const LANGUAGE_STORAGE_KEY = 'ufoods_language';
const DEFAULT_LANGUAGE: Language = 'en';
const SUPPORTED_LANGUAGES: Language[] = ['en', 'de', 'tr'];

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>(() => {
        if (typeof window === 'undefined') {
            return DEFAULT_LANGUAGE;
        }

        const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
        if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage as Language)) {
            return savedLanguage as Language;
        }

        return DEFAULT_LANGUAGE;
    });

    useEffect(() => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
        document.documentElement.lang = language;
    }, [language]);

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
