import 'isomorphic-unfetch'

export async function getTranslation (lang, files, baseUrl) {
  let translation = {}

  for (let file of files) {
    const response = await fetch(`${baseUrl}${lang}/${file}.json`)
    translation[file] = await response.json()
  }

  return { [lang]: translation }
}
