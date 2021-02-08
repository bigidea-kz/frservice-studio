export default {
  name: 'footer',
  type: 'object',
  title: 'Footer',

  fields: [
    {
      name: 'brand_name',
      type: 'string',
      title: 'Brand name'
    },
    {
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [
        {
          type: 'link'
        },
        {
          type: 'page_link'
        }
      ]
    }
  ]
}