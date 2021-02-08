export default {
  name: 'text_section',
  type: 'object',
  title: 'Text section',

  fields: [
    {
      name: 'anchor',
      type: 'string',
      title: 'Anchor'
    },
    {
      name: 'Label',
      type: 'string',
      title: 'Label'
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'text',
      type: 'rich_text',
      title: 'Text'
    }
  ]
}