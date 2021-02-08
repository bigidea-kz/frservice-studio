export default {
  name: 'message',
  type: 'document',
  title: 'Messages',

  fields: [
    {
      name: 'full_name',
      type: 'string',
      title: 'Full name'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email'
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone'
    },
    {
      name: 'subject',
      type: 'string',
      title: 'Subject'
    },
    {
      name: 'text',
      type: 'text',
      title: 'Text'
    },
  ],
  preview: {
    select: {
      title: 'subject',
      fullName: 'full_name'
    },
    prepare: ({ title, fullName }) => {
      return {
        title,
        subtitle: fullName
      }
    }
  }
}