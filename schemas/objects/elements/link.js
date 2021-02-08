export default {
  name: 'link',
  type: 'object',
  title: 'External link',
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Text'
    },
    {
      name: 'href',
      type: 'url',
      title: 'URL',
    },
    {
      name: 'blank',
      type: 'boolean',
      title: 'Open in new tab'
    }
  ]
}