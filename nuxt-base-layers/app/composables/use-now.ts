export const useNow = () => {
  const now = ref(new Date())

  const update = () => {
    now.value = new Date()
  }

  onMounted(() => {
    const interval = setInterval(update, 1000)
    onUnmounted(() => clearInterval(interval))
  })

  return { now }
}
