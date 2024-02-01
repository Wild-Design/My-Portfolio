import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Joaquín Bustelo',
  description: 'Portfolio personal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body>{children}</body>
    </html>
  );
}
