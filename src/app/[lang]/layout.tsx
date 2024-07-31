import "../globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import { getDictionary } from "./dictionaries";

interface LangParams {
  lang: string;
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export async function generateMetadata({ params: { lang } }: { params: { lang: string } }) {
  const langData = await getDictionary(lang);
  return {
    title: langData.page.title,
    description: langData.page.desc,
  };
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: LangParams;
}>) {
  return (
    <html lang={params.lang}>
      <body
        className={cn(
          "min-h-screen bg-black text-white font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar lang={params.lang} />
        {children}
      </body>
    </html>
  );
}
