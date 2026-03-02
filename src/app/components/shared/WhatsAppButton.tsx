import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/app/contexts/LanguageContext";

interface WhatsAppButtonProps {
  phoneNumber?: string;
}

export default function WhatsAppButton({ phoneNumber = "+491736517135" }: WhatsAppButtonProps) {
  const { t } = useLanguage();

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-white hover:bg-green-400 text-black hover:text-white hover:font-bold rounded-full p-4 shadow-lg transition-all hover:scale-110 z-50 border-2 border-green-400"
      title={t.whatsapp.label}
    >
      <span className="flex items-center gap-2">
      <MessageCircle className="w-6 h-6" />
      {t.whatsapp.label}
      </span>
    </a>
  );
}
