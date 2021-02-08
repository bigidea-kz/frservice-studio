export default {
  name: 'cookie_consent',
  type: 'object',
  title: 'Cookie consent',

  fields: [
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
      name: 'type',
      type: 'string',
      title: 'Type',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
          { title: 'Warning', value: 'warning' },
          { title: 'Danger', value: 'danger' },
        ]
      }
    },
    {
      name: 'button',
      type: 'button',
      title: 'Button',
    }
  ]
}