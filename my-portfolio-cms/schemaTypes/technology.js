export default {
  name: 'technology',
  title: 'Technology',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Nama teknologi (misal: React, Next.js, Sanity).',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      description: 'Opsional: Ikon/logo teknologi.',
    },
  ],
};
