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
      <body className={primaryFont.className}>
        <img
          src={'/Wolf.jpg'}
          alt='Lobos'
          style={{
            position: 'fixed',
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
            opacity:'.2',
            zIndex:'20'
          }}
        />
        {children}
      </body>
    </html>
  );
}
