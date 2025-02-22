import { Helmet } from "react-helmet";

const MetaTags = ({
  title = "Pulse",
  description = "High-end dating. Redefined.",
  image = "https://pulse-date.com/app-logo.svg",
  url = "https://pulse-date.com",
  twitterHandle = "@ThePulseDate",
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      {twitterHandle && (
        <meta property="twitter:creator" content={twitterHandle} />
      )}

      {/* Additional recommended meta tags */}
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Helmet>
  );
};

export default MetaTags;
