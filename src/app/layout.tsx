import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/components/providers';
import NavBar from '@/components/nav/nav-bar';

export const metadata: Metadata = {
  title: 'Next match',
  description: 'Cool next js app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <NavBar />
          <main className='container mx-auto p-10'>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
