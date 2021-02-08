export default {
  name: 'picture_with_features_section',
  type: 'object',
  title: 'Picture with features section',

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
    {
      name: 'features',
      type: 'array',
      title: 'Features',
      of: [
        {type: 'feature'}
      ]
    }
  ],

  preview: {
    select: {
      label: 'label',
      heading: 'heading',
      media: 'picture'
    },
    prepare: ({label, heading, media}) => {
      return {
        title: label,
        subtitle: heading,
        media
      }
    }

  }
}