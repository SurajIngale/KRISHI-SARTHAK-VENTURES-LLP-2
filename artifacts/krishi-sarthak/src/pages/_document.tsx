import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="KRISHI SARTHAK VENTURES LLP connects businesses with agricultural products, international sourcing opportunities, import-export services, shipment coordination, and global trade solutions."
        />
        <meta
          name="keywords"
          content="Agricultural Exporter India, Fresh Fruits and Vegetables Export, Indian Agricultural Products, Spices and Herbs Export, Pulses and Grains Export, International Trade Solutions, Import Export Services India, Global Trade Consultancy, Freight Forwarding and Logistics, Export Documentation Services"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="KRISHI SARTHAK VENTURES LLP | Agricultural Exports & Global Trade"
        />
        <meta
          property="og:description"
          content="Agricultural sourcing, international trade support, shipment coordination, and global trade solutions."
        />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/hero-harvest.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/svg+xml" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.svg`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
