import "./globals.css";




export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>

        <main  >
          {children}
        </main>

      </body>
    </html>
  );
}
