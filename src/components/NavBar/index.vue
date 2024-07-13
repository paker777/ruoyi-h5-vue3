<script setup>

defineProps({
  title: {
    type: String,
    default: ''
  },
  leftArrow: {
    type: Boolean,
    default: true
  },
  rightText: {
    type: String,
    default: ''
  }
})

const router = useRouter()

const onClickLeft = () => {
  if (history.state.back) {
    router.back()
  } else {
    router.push('/home')
  }
}

const emit = defineEmits(['click-right'])

const onClickRight = () => {
  emit('click-right')
}
</script>

<template>
  <van-nav-bar
    :left-arrow="leftArrow"
    :fixed="true"
    :placeholder="true"
    :safe-area-inset-top="true"
    :title="title || $route.meta.title"
    :right-text="rightText"
    z-index="999"
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>
