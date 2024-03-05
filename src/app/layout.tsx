import type { Metadata } from 'next';
import { primaryFont } from '../fonts';

export const metadata: Metadata = {
  title: 'Joaquín Bustelo',
  description: 'Portfolio personal',
  keywords:
    'portfolio, desarrollo web, proyectos,HTML, CSS, JavaScript, React, Redux, NodeJs, Express, Sequelize, PostgreSql, TypeScript',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body suppressHydrationWarning={true} className={primaryFont.className}>
        {children}
      </body>
    </html>
  );
}
