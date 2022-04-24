<template>
  <div>
    <div>hello world</div>
    <button @click="send">请求</button>
  </div>
</template>

<script setup>
import $api from '../api/api'
let obj = { a: 123 }
const send = function () {
  $api.user.checkUser({ username: 'xinxinqian' }).then((res) => {
    console.log(res)
  })
}
</script>
<style scoped>
a {
  color: #42b983;
}
</style>
