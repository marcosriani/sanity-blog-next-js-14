import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  apiVersion: '2023-05-03',
  dataset: 'production',
  projectId: 'jmz0aqau', // Can store it on next_public
  useCdn: false,
});

// convert to convert images to an url
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
