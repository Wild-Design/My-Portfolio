import type { Metadata } from 'next';
import { primaryFont } from '../fonts';

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
      <body
        suppressContentEditableWarning={true}
        className={primaryFont.className}
      >
        {children}
      </body>
    </html>
  );
}
