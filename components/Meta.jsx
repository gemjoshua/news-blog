import Head from "next/head";

export const Meta = ({ title, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta
        name="keyword"
        content="world news, news, latest news, trending news, breaking news"
      />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "AM NEWZ",
  description:
    "stay up to date with the latest news, politics, sport, lifestyles and developments",
};
