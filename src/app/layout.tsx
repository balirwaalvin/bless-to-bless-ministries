import { ReactNode } from 'react';
import "./globals.css";

type Props = {
  children: ReactNode;
};

// Next.js expects the root layout to NOT duplicate <html> and <body> if [locale]/layout.tsx also has it.
// EXCEPT, that if both have it, they will nest. 
// For i18n, the root layout should just pass children directly, but Next.js requires <html> and <body> in the root segment layout.
// Since we have a root `page.tsx` and a `[locale]` segment, the standard setup for next-intl is to ONLY have layout in `[locale]` and NO layout in the root, 
// OR the root layout must just render children but Next.js requires html/body there.
// Actually, the recommended next-intl next.js approach when using `app/[locale]/layout.tsx` is to DELETE `app/layout.tsx` entirely!
// Then for `app/page.tsx`, we can just export a dummy html/body. Wait, let's just make `src/app/layout.tsx` the ONLY html/body wrapper?
// BUT we need `lang={locale}` which we can't get here unless it's a dynamic segment.
export default function RootLayout({ children }: Props) {
  return children;
}