import "./globals.css";

export const metadata = {
  title: "Andrés Yépez | Portfolio",
  description: "Portfolio profesional Frontend & QA",
  icons: {
    icon: "/favicon.ico",
  },
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
