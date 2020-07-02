<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { QSpinnerFacebook } from 'quasar'

export default {
  name: 'App',
  mounted() {
      this.loadData();
    },
    methods: {
        loadData() {
          this.$q.loading.show({
          spinner,
          spinnerColor: 'yellow',
          spinnerSize: 140,
          backgroundColor: 'purple',
          message: 'Some important process is in progress. Hang on...',
          messageColor: 'black'
        })

        // hiding in 3s
          this.timer = setTimeout(() => {
            this.$q.loading.hide()
            this.timer = void 0
          }, 5000)
        },
      beforeDestroy () {
        if (this.timer !== void 0) {
          clearTimeout(this.timer)
          this.$q.loading.hide()
        }
      }
    }
}
</script>
