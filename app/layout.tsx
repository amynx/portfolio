import "./globals.css";

export const metadata = {
  title: "Andrés Yépez | Portfolio",
  description: "Portfolio profesional Frontend & QA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
