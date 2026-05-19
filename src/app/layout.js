import "./globals.css";

export const metadata = {
  title: "Quranic Arabic Academy | قرآنی عربی اکیڈمی",
  description: "Learn Quranic Arabic Grammar from beginner to advanced",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}