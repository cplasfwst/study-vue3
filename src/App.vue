<template>
  <div class="container">
    <GGGlobalHeader :user="currentUser"></GGGlobalHeader>
    <LoaderV
      v-if="isLoading"
      text="拼命加载中"
      background="rgba(0,0,0, 0.8)"
    ></LoaderV>
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
import { defineComponent, computed, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import GGGlobalHeader from './components/GGGlobalHeader.vue'
import LoaderV from './components/LoaderV.vue'
import createMessage from './components/createMessage'
import { GlobalDataProps } from './store'

export default defineComponent({
  name: 'App',
  components: {
    GGGlobalHeader,
    LoaderV
  },
  setup() {
    const store = useStore<GlobalDataProps>()
    const currentUser = computed(() => store.state.user)
    const isLoading = computed(() => store.state.loading)
    const error = computed(() => store.state.error)

    watch(
      () => error.value.status,
      () => {
        const { status, message } = error.value
        if (status && message) {
          createMessage(message, 'error', 2000)
        }
      }
    )
    return {
      currentUser,
      isLoading,
      error
    }
  }
})
</script>

<style></style>
