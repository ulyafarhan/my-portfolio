export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Judul proyek.',
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
      description: 'Gambar utama yang akan muncul di daftar portofolio.',
      options: { hotspot: true },
    },
    {
      name: 'gallery',
      title: 'Project Screenshots / Gallery',
      type: 'array',
      description: 'Upload semua screenshot demo proyek di sini.',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent', // Editor Rich Text (WYSIWYG)
      description: 'Deskripsi lengkap proyek.',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      description: 'Teknologi yang digunakan dalam proyek ini.',
      of: [{ type: 'reference', to: { type: 'technology' } }],
    },
    {
      name: 'projectUrl',
      title: 'Project URL (Live Demo)',
      type: 'url',
      description: 'Link ke demo proyek yang sudah live.',
    },
    {
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
      description: 'Link ke repositori kode di GitHub.',
    },
  ],
};