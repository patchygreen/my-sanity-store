import sanityClient from '@sanity/client';
export const client = sanityClient({
  projectId: 'ql253cca',
  dataset: 'production',
  useCdn: true
});