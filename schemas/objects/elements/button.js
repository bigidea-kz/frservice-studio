export default {
  name: 'button',
  type: 'object',
  title: 'Button',

  fields: [
    {
      name: 'text',
      type: 'string',
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
    }
  ]
}