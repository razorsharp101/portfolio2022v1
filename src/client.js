import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  // projectId: process.env.REACT_SANITY_APP_PROJECT_ID,
  projectId: 'j7l78fej',
  dataset: 'production',
  apiVersion: '2022-08-24',
  useCdn: true,
  token: process.env.REACT_SANITY_APP_PROJECT_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
