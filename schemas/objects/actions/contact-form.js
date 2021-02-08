export default {
  name: 'contact_form',
  type: 'object',
  title: 'Contact form',

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
      name: 'email_title',
      type: 'string',
      title: 'Email title',
    },
    {
      name: 'message_title',
      type: 'string',
      title: 'Message title',
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