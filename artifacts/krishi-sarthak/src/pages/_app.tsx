import type { AppProps } from 'next/app';

import '../index.css';

export default function WebsiteApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
