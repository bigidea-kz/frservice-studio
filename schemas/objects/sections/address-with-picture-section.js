export default {
  name: 'address_with_picture_section',
  type: 'object',
  title: 'Address with picture section',

  fieldsets: [
    {title: 'Address', name: 'address'}
  ],

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
      name: 'picture',
      type: 'image',
      title: 'Picture',
      options: {
        hotspot: true
      }
    },

    // Address
    {
      name: 'address_tagline',
      type: 'string',
      title: 'Tagline',
      fieldset: 'address'
    },
    {
      name: 'address_heading',
      type: 'string',
      title: 'Heading',
      fieldset: 'address'
    },
    {
      name: 'address_location',
      type: 'string',
      title: 'Location',
      fieldset: 'address'
    },
    {
      name: 'address_phone',
      type: 'string',
      title: 'Phone',
      fieldset: 'address'
    },
    {
      name: 'address_email',
      type: 'string',
      title: 'Email',
      fieldset: 'address'
    }
  ]
}