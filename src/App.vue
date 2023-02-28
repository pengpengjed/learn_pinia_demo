<template>
  <div class="home">
    <h2>doubleCount: {{ counterStore.count }}</h2>
    <button @click="changeState">修改state</button>
  </div>
</template>

<script setup>
import useCounter from '@/store/counter';
import useHome from '@/store/home';

const counterStore = useCounter();

function changeState() {
  // counterStore.increment()
  counterStore.incrementAddNum(10);
}

const homeStore = useHome();
homeStore.fetchHomeMultidata().then(response => {
  console.log(response)
})
</script>
<style scoped lang="less"></style>
