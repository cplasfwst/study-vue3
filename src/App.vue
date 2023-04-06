<template>
  <div class="container">
    <GGGlobalHeader :user="currentUser"></GGGlobalHeader>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import GGGlobalHeader, { UUserProps } from './components/GGGlobalHeader.vue'

const currentUser: UUserProps = {
  isLogin: true,
  name: 'xiaoming'
}

export default defineComponent({
  name: 'App',
  components: {
    GGGlobalHeader
  },
  setup() {
    return {
      currentUser
    }
  }
})
</script>

<style></style>
