"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <select
      value={locale}
      onChange={handleLanguageChange}
      className="bg-transparent border border-muted-foreground/30 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground cursor-pointer appearance-none"
    >
      <option value="en">EN</option>
      <option value="de">DE</option>
    </select>
  );
}
