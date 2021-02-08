export default {
  name: 'page_link',
  type: 'object',
  title: 'Page link',

  fields: [
    {
      name: 'reference',
      type: 'reference',
      title: 'Page',
      to: [
        {type: 'page'}
      ]
    }
  ],

  preview: {
    select: {
      title: 'reference.slug.current'
    },
    prepare: ({ title }) => {
      return {
        title,
        subtitle: 'page link'
      }
    }
  }
}