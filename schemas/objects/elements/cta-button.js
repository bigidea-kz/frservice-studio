export default {
  name: 'cta_button',
  type: 'object',
  title: 'Call to actions button',

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
          {
            title: 'Primary', value: 'primary'
          },
          {
            title: 'Secondary', value: 'secondary'
          },
          {
            title: 'Warning', value: 'warning'
          },
          {
            title: 'Danger', value: 'danger'
          }
        ]
      }
    },
    {
      name: 'action_type',
      type: 'string',
      title: 'Action type',
      options: {
        list: [
          {
            title: 'Order a call', value: 'order_a_call'
          },
          {
            title: 'Contact form', value: 'contact_form'
          }
        ]
      }
    }
  ]
}