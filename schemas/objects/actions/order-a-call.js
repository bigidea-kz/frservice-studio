export default {
  name: 'order_a_call',
  type: 'object',
  title: 'Order a call',

  fieldsets: [
    {
      name: 'buttons', title: 'Buttons'
    }
  ],

  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'full_name_title',
      type: 'string',
      title: 'Full name title',
    },
    {
      name: 'phone_title',
      type: 'string',
      title: 'Phone title',
    },
    {
      name: 'cancel_button',
      type: 'button',
      title: 'Cancel button',
      fieldset: 'buttons'
    },
    {
      name: 'confirm_button',
      type: 'button',
      title: 'Confirm button',
      fieldset: 'buttons'
    }
  ]
}