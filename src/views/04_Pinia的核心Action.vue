<template>
  <div class="home">
    <h2>doubleCount: {{counterStore.count}}</h2>
    <button @click="changeState">修改state</button>
  </div>
</template>

<script setup>
import useCounter from "@/store/counter";

const counterStore = useCounter()

function changeState() {
  counterStore.increment()
}
</script>
<style scoped lang='less'>
</style>