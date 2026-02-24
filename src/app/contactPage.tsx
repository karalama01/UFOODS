import { useState } from "react";
import HeaderSection from "@/app/components/shared/header";
import Footer from "@/app/components/shared/Footer";
import { LanguageProvider, useLanguage } from "@/app/contexts/LanguageContext";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Label } from "@/app/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Mail } from "lucide-react";
import WhatsAppButton from "./components/shared/WhatsAppButton";

function ContactPageContent() {
  const { t } = useLanguage();
  const officeAddress = t.contact.officeAddress;
  const warehouseAddress = t.contact.warehouseAddress;
  const officeMapSrc = `https://www.google.com/maps?q=${encodeURIComponent(officeAddress)}&output=embed`;
  const warehouseMapSrc = `https://www.google.com/maps?q=${encodeURIComponent(warehouseAddress)}&output=embed`;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const payload = new URLSearchParams({
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      });

      const response = await fetch("https://script.google.com/macros/s/AKfycbyNbnxbiy5X_O0_BIn8HKS6e80_IGHQSpDwFIFh9iggS2tultWsD57yyFhnheNSBtcSMA/exec", {
        method: "POST",
        body: payload,
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const text = await response.text();
      console.log("Response:", text);
      setStatus("success");

    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderSection />

      <main className="flex-grow pt-24 pb-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="font-serif text-4xl md:text-[52px] leading-none mb-6 text-[#c7aa70]">{t.nav.contact}</h1>
            <p className="text-base md:text-[18px] leading-[1.55] text-[#535046] max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 md:items-stretch">
            {/* Contact Information */}
            <div className="space-y-8 h-full">
              <div className="bg-muted/30 p-6 rounded-2xl border h-full flex flex-col">
                <Tabs defaultValue="office" className="w-full h-full flex flex-col">
                  <TabsList className="w-full">
                    <TabsTrigger value="office" className="flex-1">
                      {t.contact.officeLabel}
                    </TabsTrigger>
                    <TabsTrigger value="warehouse" className="flex-1">
                      {t.contact.warehouseLabel}
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="office" className="mt-4 flex-1 grid grid-rows-[1fr_auto] gap-4">
                    <div className="rounded-xl overflow-hidden border h-full min-h-[18rem] md:min-h-[20rem]">
                      <iframe
                        title={t.contact.officeLabel}
                        src={officeMapSrc}
                        className="w-full h-full"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                    <p className="text-base md:text-[18px] leading-[1.55] text-[#535046] text-center">
                      {officeAddress}
                    </p>
                  </TabsContent>

                  <TabsContent value="warehouse" className="mt-4 flex-1 grid grid-rows-[1fr_auto] gap-4">
                    <div className="rounded-xl overflow-hidden border h-full min-h-[18rem] md:min-h-[20rem]">
                      <iframe
                        title={t.contact.warehouseLabel}
                        src={warehouseMapSrc}
                        className="w-full h-full"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                    <p className="text-base md:text-[18px] leading-[1.55] text-[#535046] text-center">
                      {warehouseAddress}
                    </p>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-muted/30 p-8 rounded-2xl border h-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t.contact.form.name}</Label>
                  <Input
                    id="name"
                    name="name"
                    className="bg-muted/50"
                    placeholder={t.contact.form.namePlaceholder}
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.contact.form.email}</Label>
                    <Input
                      id="email"
                      name="email"
                      className="bg-muted/50"
                      type="email"
                      placeholder={t.contact.form.emailPlaceholder}
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t.contact.form.phone}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      className="bg-muted/50"
                      type="tel"
                      placeholder={t.contact.form.phonePlaceholder}
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t.contact.form.message}</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder={t.contact.form.message}
                    className="min-h-[150px] bg-muted/50"
                    value={form.message}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <Button type="submit" className="w-full text-lg py-6">
                  <span className="break-words text-center leading-snug">
                  {status === "loading" ? t.contact.form.sending : t.contact.form.submit}
                  </span>
                </Button>
                {status === "success" && (
                  <p className="text-sm text-emerald-600">{t.contact.form.success}</p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-600">{t.contact.form.error}</p>
                )}
                <a href="mailto:contact@ufoods.de">
                  <Button type="button" className="w-full py-2 text-lg whitespace-normal h-auto min-h-12">
                    <Mail />
                    <span className="break-words text-center leading-snug">{t.contact.emailLabel}</span>
                  </Button>
                </a>
              </form>
            </div>
          </div>
        </div>
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default function ContactPage() {
  return (
    <LanguageProvider>
      <ContactPageContent />
    </LanguageProvider>
  );
}
