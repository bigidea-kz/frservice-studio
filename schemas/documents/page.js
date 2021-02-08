export default {
  name: 'page',
  type: 'document',
  title: 'Pages',

  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Page title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Used in the URL address. If this is the main page use a slug like this /',
      options: {
        source: 'title',
      }
    },
    {
      name: 'content_sections',
      type: 'array',
      title: 'Content sections',
      of: [
        { type: 'hero_section' },
        { type: 'text_with_picture_section' },
        { type: 'picture_with_features_section' },
        { type: 'address_with_picture_section' },
        { type: 'text_section' },

      ]
    },
    {
      name: 'metadata',
      type: 'metadata',
      title: 'SEO & metadata'
    }
  ],

  initialValue: {
    // status: 'draft'
  },

  preview: {
    select : {
      title: 'title',
      slug: 'slug.current'
    },
    prepare: ({ title, slug }) => {
      return {
        title,
        subtitle: `slug: ${slug}`
      }
    }
    // select : {
    //   title: 'title',
    //   pageStatus: 'status',
    //   slug: 'slug.current'
    // },
    // prepare: ({ title, pageStatus, slug }) => {
    //   return {
    //     title,
    //     subtitle: `status: ${pageStatus}`
    //   }
    // }
  }
}