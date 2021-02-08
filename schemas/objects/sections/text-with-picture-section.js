export default {
  name: 'text_with_picture_section',
  type: 'object',
  title: 'Text with picture section',

  fields: [
    {
      name: 'anchor',
      type: 'string',
      title: 'Anchor'
    },
    {
      name: 'label',
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
    },
    {
      name: 'picture',
      type: 'image',
      title: 'Picture',
      options: {
        hotspot: true
      }
    },
  ]
}