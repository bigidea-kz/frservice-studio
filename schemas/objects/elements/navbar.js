export default {
  name: 'navbar',
  type: 'object',
  title: 'navbar',

  fields: [
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility',
          options: {
            isHighlighted: true
          }
        }
      ]
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
          type: 'anchor_link'
        },
        {
          type: 'page_link'
        }
      ]
    },
    {
      name: 'contact_links',
      type: 'array',
      title: 'Contacts',
      of: [
        {
          type: 'contact_location_field',
          title: 'Location'
        },
        {
          type: 'contact_phone_field',
          title: 'Phone',
        }
      ]
    }
  ]
}