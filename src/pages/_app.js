import Layout from '@/components/Layout/Layout';
import '@/styles/globals.css';
import { Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${outfit.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
