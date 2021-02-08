const previewSecret = 'frservice2020'
const projectUrl = 'http://www.fr-s.de'

export default function resolveProductionUrl(document) {
  return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`
}
