import urlParser from 'js-video-url-parser'

export default (context, inject) => {
  inject('videoEmbed', (url, params) => {
    const embedInfo = urlParser.parse(url)

    if(embedInfo) {
      return urlParser.create({
        videoInfo: embedInfo,
        format: 'embed',
        params: params,
      })
    }

    return url
  });
}