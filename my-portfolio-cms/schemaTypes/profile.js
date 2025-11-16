export default {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  __experimental_actions: ['create', 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Nama lengkap Anda.',
    },
    {
      name: 'bio',
      title: 'Biography (Tentang Saya)',
      type: 'blockContent', // Editor Rich Text
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
    },
    {
      name: 'resumeUrl',
      title: 'Resume (PDF)',
      description: 'Upload file PDF resume Anda di sini.',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    },
  ],
};