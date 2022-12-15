import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${inter.variable} font-sans px-12 flex justify-center items-center h-screen`}
    >
      <Component {...pageProps} />
    </main>
  );
}
