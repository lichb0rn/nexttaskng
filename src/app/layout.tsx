import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import Sidebar from '../components/Sidebar/Sidebar';
import GlobalStylesProvider from '../providers/GlobalStylesProvider';
import ContextProvider from '../providers/ContextProvider';
import { auth } from '@clerk/nextjs/server';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Task Manager',
  description: 'Task Manager App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = auth();

  console.log(userId);

  return (
    <ClerkProvider>
      <html lang='en'>
        <head>
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css'
            integrity='sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=='
            crossOrigin='anonymous'
            referrerPolicy='no-referrer'
          />
        </head>
        <body className={inter.className}>
          <ContextProvider>
            <GlobalStylesProvider>
              {userId && <Sidebar />}
              <div className='w-full'>{children}</div>
            </GlobalStylesProvider>
          </ContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
