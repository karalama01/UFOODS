import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import uzay_logo from "@/app/components/img/uzay-logo.png";
import {Globe, Menu} from "lucide-react";
import {useLanguage} from "@/app/contexts/LanguageContext";

export default function HeaderSection() {
    const {language, setLanguage, t} = useLanguage();
    const navItemClass = "inline-flex items-center rounded-md px-3 py-1.5 text-foreground transition-all duration-200 hover:bg-amber-100 hover:text-primary hover:shadow-sm hover:-translate-y-0.5";

    return (
        <nav style={{borderColor: "#8c7e60"}}
             className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-4 bg-amber-50 rounded-b-xl">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-2">
                        <a href="/UFOODS/index.html">
                            <img src={uzay_logo} className="h-15 w-auto"/>
                        </a>
                        {/*<span className="text-xl font-medium text-primary">UZAY Fine Foods GmbH</span>*/}
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-8">
                        <a href="/UFOODS/index.html"
                           className={navItemClass}>{t.nav.home}</a>
                        <a href="/UFOODS/yasou.html"
                           className={navItemClass}>{t.nav.yasou}</a>
                        {/*<a href="/UFOODS/products.html"*/}
                        {/*   className="text-foreground hover:text-primary transition-colors">{t.nav.products}</a>*/}
                        <a href="/UFOODS/mission-vision.html"
                           className={navItemClass}>{t.nav.values}</a>
                        <a href="/UFOODS/contact.html"
                           className={navItemClass}>{t.nav.contact}</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground hover:text-primary transition-colors md:hidden">
                                <Menu className="w-6 h-6"/>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuItem asChild>
                                    <a href="/UFOODS/index.html" className={navItemClass}>{t.nav.home}</a>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <a href="/UFOODS/yasou.html" className={navItemClass}>{t.nav.yasou}</a>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <a href="/UFOODS/mission-vision.html" className={navItemClass}>{t.nav.values}</a>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <a href="/UFOODS/contact.html" className={navItemClass}>{t.nav.contact}</a>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator/>
                                <DropdownMenuItem onClick={() => setLanguage('en')}>
                                    🇬🇧 English {language === "en" ? "•" : ""}
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setLanguage('de')}>
                                    🇩🇪 Deutsch {language === "de" ? "•" : ""}
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setLanguage('tr')}>
                                    🇹🇷 Türkçe {language === "tr" ? "•" : ""}
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="hidden md:inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground hover:text-primary transition-colors">
                            <Globe className="w-6 h-6"/>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuItem onClick={() => setLanguage('en')}>🇬🇧 English {language === "en" ? "•" : ""}</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setLanguage('de')}>🇩🇪 Deutsch {language === "de" ? "•" : ""}</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setLanguage('tr')}>🇹🇷 Türkçe {language === "tr" ? "•" : ""}</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </nav>
    )
}
