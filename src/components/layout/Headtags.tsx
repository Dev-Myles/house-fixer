import Head from "next/head";

const HeadTags: React.FC = () => {
  return (
    <Head>
      <link rel="icon" type="image/ico" sizes="32x32" href="/favicon.ico" />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Builds | Carpentry, Renivations and More!"
      ></meta>

      <title>Builds | Let&aposs Build</title>
    </Head>
  );
};

export default HeadTags;
