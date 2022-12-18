import Head from "next/head";

export default function Header() {
  return (
    <Head>
      <title>Koen Dercksen - Homepage</title>
      <meta
        name="description"
        content="Website containing personal information for Koen Dercksen. Publications, contact details, projects and more."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon-16x16.png"
      />
    </Head>
  );
}
