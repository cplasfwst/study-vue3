<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <router-link class="navbar-brand" to="/">者也专栏</router-link>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <router-link to="/login" class="btn btn-outline-light my-2"
          >登陆</router-link
        >
      </li>
      <li class="list-inline-item">
        <router-link to="/signup" class="btn btn-outline-light my-2"
          >注册</router-link
        >
      </li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <DropDown :title="`你好 ${user.nickName}`">
          <DropdownItem
            ><router-link to="/create" class="dropdown-item"
              >新建文章</router-link
            ></DropdownItem
          >
          <DropdownItem
            ><a href="#" class="dropdown-item">编辑资料</a></DropdownItem
          >
          <DropdownItem
            ><a href="#" class="dropdown-item">退出登录</a></DropdownItem
          >
        </DropDown>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import DropDown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'
import { UserProps } from '@/store'

export default defineComponent({
  name: 'GGGlobalHeader',
  components: {
    DropDown,
    DropdownItem
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped></style>
