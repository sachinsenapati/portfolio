export default {
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'imgUrl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
