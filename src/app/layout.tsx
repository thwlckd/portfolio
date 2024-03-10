import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Provider from './provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '프론트엔드 박창협 포트폴리오',
  description: '프론트엔드 박창협 포트폴리오입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Provider>
        <body className={(inter.className, 'min-h-screen bg-gray-50')}>
          {children}
        </body>
      </Provider>
    </html>
  );
}
