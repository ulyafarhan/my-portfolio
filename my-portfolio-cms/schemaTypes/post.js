export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main Image (Thumbnail)',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt (Ringkasan)',
      type: 'text',
      rows: 3,
      description: 'Ringkasan pendek untuk tampilan daftar blog.',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
  initialValue: () => ({
    publishedAt: (new Date()).toISOString()
  })
}