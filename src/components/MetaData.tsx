"use client";

type MetaDataProps = {
  title: string;
  description: string;
};

const MetaData = ({ title, description }: MetaDataProps) => (
  <head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content="Next.js, SEO, NFTs" />
    <meta name="author" content="Gabriel Teixeira" />
    <meta property="og:title" content={title} key={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content="https://meusite.com/minha-pagina" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/images/logo-starsoft.svg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content="/logo-starsoft.svg" />
    <link rel="icon" href="/favicon.ico" />
  </head>
);

export default MetaData;
