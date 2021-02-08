// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import global from './documents/global'
import page from './documents/page'
import message from './documents/message'

// Object section types
import heroSection from './objects/sections/hero-section'
import textWithPictureSection from './objects/sections/text-with-picture-section'
import pictureWithFeaturesSection from './objects/sections/picture-with-features-section'
import addressWithPictureSection from './objects/sections/address-with-picture-section'
import textSection from './objects/sections/text-section'


// Action types
import orderACall from './objects/actions/order-a-call'
import contactForm from './objects/actions/contact-form'

// Object meta types
import metadata from './objects/meta/metadata'

// Object element types
import navbar from './objects/elements/navbar'
import footer from './objects/elements/footer'
import cookieConsent from './objects/elements/cookie-consent'
import richText from './objects/elements/rich-text'
import feature from './objects/elements/feature'
import button from './objects/elements/button'
import ctaButton from './objects/elements/cta-button'
import anchorLink from './objects/elements/anchor-link'
import link from './objects/elements/link'
import pageLink from './objects/elements/page-link'
import contactLocationField from './objects/elements/contact-location-field'
import contactPhoneField from './objects/elements/contact-phone-field'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    // Document types
    global,
    page,
    message,

    // Object section types
    heroSection,
    textWithPictureSection,
    pictureWithFeaturesSection,
    addressWithPictureSection,
    textSection,

    // Action types
    orderACall,
    contactForm,

    // Object meta types
    metadata,

    // Object element types
    navbar,
    footer,
    cookieConsent,
    richText,
    feature,
    button,
    ctaButton,
    anchorLink,
    link,
    pageLink,
    contactLocationField,
    contactPhoneField
  ]),
})
