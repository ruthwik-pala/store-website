import "./globals.css";

export const metadata = {
  title: "Ananthula Online | Ananthula Kedari Since 1951",
  description: "Official online showcase for Ananthula Kedari: pure pattu sarees, ethnic wear, bridal, wedding, and dresses."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
