export default {
  name: 'hero_section',
  type: 'object',
  title: 'Hero section',

  fields: [
    {
      name: 'tagline',
      type: 'string',
      title: 'Tagline',
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'background_image',
      type: 'image',
      title: 'Background image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'ctas',
      type: 'array',
      title: 'Call to actions',
      of: [
        {
          title: 'Order a call',
          type: 'cta_button'
        }
      ]
    }
  ]
}