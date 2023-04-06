<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted, ssrContextKey } from 'vue'
import mitt from 'mitt'
// 同样的思路，定义一个 events 类型
type ValidateFunc = () => boolean
// 这个定义是让事件和对应的 callback 一一对应
type Events = { 'form-item-created': ValidateFunc }
// 实例化 mitt 的时候，作为泛型传递进去
export const emitter = mitt<Events>()
// export const emitter = mitt<any>()
export default defineComponent({
  emits: ['form-submit'],
  setup(props, context) {
    const funcArr: ValidateFunc[] = []
    const submitForm = () => {
      const result = funcArr.every((func) => func())
      console.log('进来了', result)
      context.emit('form-submit', result)
      // context.emit('form-submit', true)
    }
    const callback = (func: ValidateFunc) => {
      funcArr.push(func)
    }
    emitter.on('form-item-created', callback)
    onUnmounted(() => {
      emitter.off('form-item-created', callback)
    })
    return {
      submitForm
    }
  }
})
</script>
