import bcp47 from 'bcp47'

export default {
  name: 'global',
  type: 'document',
  title: 'Global',
  __experimental_actions: [/* create, delete, */ 'update', 'publish'],

  fieldsets: [
    {
      name: 'notifications', title: 'Notifications'
    }
  ],

  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site title',
    },
    {
      name: 'status',
      type: 'boolean',
      title: 'Site status',
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
    },
    {
      name: 'lang',
      type: 'string',
      title: 'Site language',
      validation: (Rule) => Rule.custom(
        (lang) => bcp47.parse(lang) ? true : 'Please use a valid bcp47 code'
      ),
    },
    {
      name: 'favicon',
      type: 'image',
      title: 'Favicon',
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
      name: 'metadata',
      type: 'metadata',
      title: 'SEO & metadata'
    },
    {
      name: 'actions',
      type: 'array',
      title: 'Actions',
      of: [
        { type: 'order_a_call' },
        { type: 'contact_form' }
      ]
    },
    {
      name: 'cookie_consent_notification',
      type: 'cookie_consent',
      title: 'Cookie consent',
    },
    {
      name: 'navbar',
      type: 'navbar',
      title: 'Navbar'
    },
    {
      name: 'footer',
      type: 'footer',
      title: 'Footer'
    }
  ],
  
  initialValue: {
    status: true
  }
}
