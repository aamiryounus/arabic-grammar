import "./globals.css";

export const metadata = {
  title: "Quranic Arabic Grammar | قرآنی عربی گرامر",
  description: "Learn Quranic Arabic Grammar from beginner to advanced",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Quranic Arabic Grammar",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}