export default {
  name: 'rich_text',
  type: 'array',
  title: 'Rich text',
  of: [
    {
      type: 'block',
      marks: {
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'External link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL'
              },
              {
                name: 'blank',
                type: 'boolean',
                title: 'Open in new tab'
              }
            ]
          }
        ]
      }
    }
  ]
}