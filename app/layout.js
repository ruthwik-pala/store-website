import "./globals.css";

export const metadata = {
  title: "Your Saree Studio | Premium Saree Store Template",
  description: "A premium static storefront template for sarees, bridal silks, festive wear, and WhatsApp-first buying."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
