import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Geist_Mono, Lexend } from "next/font/google";
import "@/styles/globals.css";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { cn } from "@/lib/utils";
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

const fontCode = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "nerdyslacker's web room",
  description: "nerdyslacker's web room",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="mocha" suppressHydrationWarning>
      <head>
        <link rel="alternate" type="application/rss+xml" title="nerdyslacker's web room » Feed" href="/feed/"></link>
      </head>
      <body
        className={cn(
          "min-h-screen antialiased font-lexend bg-zinc-950",
          lexend.variable,
          fontCode.variable,
        )}
      >
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <main>
              <SidebarTrigger className="sticky top-0" />
              {children}
            </main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>

  );
}
