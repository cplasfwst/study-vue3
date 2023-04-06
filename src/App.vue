<template>
  <div class="container">
    <GGGlobalHeader :user="currentUser"></GGGlobalHeader>
    <router-view></router-view>
    <footer class="text-center py-4 text-secondary bg-light mt-6">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">© 2022 者也专栏</li>
          <li class="list-inline-item">课程</li>
          <li class="list-inline-item">文档</li>
          <li class="list-inline-item">联系</li>
          <li class="list-inline-item">更多</li>
        </ul>
      </small>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import GGGlobalHeader, { UUserProps } from './components/GGGlobalHeader.vue'

const currentUser: UUserProps = {
  isLogin: false,
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
