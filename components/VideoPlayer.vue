<template>
  <iframe v-if="embedUrl" :src="embedUrl" frameborder="0"></iframe>
  <video 
    v-else 
    ref="video"
    :src="src"
    :autoplay="!!params.autoplay"
    :muted="!!params.muted"
    :loop="!!params.loop"
    :controls="!!params.controls"
    :preload="!!params.preload"
    :poster="!!params.poster"
    :uk-video="!!params.autoplay ? 'autoplay: inview' : ''"
  />
</template>

<script>
import urlParser from 'js-video-url-parser';

export default {
  name: 'VideoPlayer',
  props: {
    src: String,
    params: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    embedUrl() {
      const embedInfo = urlParser.parse(this.src);
      const embedParams = {};
      
      for(var key in this.params) {
        embedParams[key] = this.params[key] + '';
      }
      
      if(embedInfo) {
        return urlParser.create({
          videoInfo: embedInfo,
          format: 'embed',
          params: embedParams
        });
      }

      return void 0;
    }
  },
  mounted() {
    this.$uikit.video(this.$refs.video, { autoplay: 'inview' });
  }
}
</script>
